import { test } from 'node:test';
import assert from 'node:assert/strict';
import { emptyRegistration, validateRegistration, registerAttendee } from '../src/lib/registration.js';
const valid = {
  name: 'Test',
  email: 'qa@example.test',
  invitee: 'guest@example.test',
  location: 'Lagos',
  whatsappNumber: '+2348000000000',
  message: 'Intercepted test only'
};
const stub = (body, ok = true) => async () => ({
  ok,
  json: async () => body
});
test('retains all six original required fields', () => {
  assert.equal(Object.keys(validateRegistration(emptyRegistration)).length, 6);
  assert.deepEqual(validateRegistration(valid), {});
});
test('validates invitations and international WhatsApp numbers', () => {
  assert.ok(validateRegistration({
    ...valid,
    invitee: 'bad'
  }).invitee);
  assert.ok(validateRegistration({
    ...valid,
    whatsappNumber: 'bad'
  }).whatsappNumber);
  assert.deepEqual(validateRegistration({
    ...valid,
    invitee: 'one@example.test, two@example.test',
    whatsappNumber: '+2348000000000, +448000000000'
  }), {});
});
test('preserves the production six-field JSON POST contract', async () => {
  let calls = 0;
  await registerAttendee('https://example.test/asherpraise', {
    ...valid,
    extra: 'not sent'
  }, {
    fetcher: async (url, options) => {
      calls++;
      assert.equal(url, 'https://example.test/asherpraise');
      assert.equal(options.method, 'POST');
      assert.equal(options.headers['Content-Type'], 'application/json;charset=utf-8');
      assert.deepEqual(JSON.parse(options.body), valid);
      return {
        ok: true,
        json: async () => ({
          status: 'success'
        })
      };
    }
  });
  assert.equal(calls, 1);
});
test('requires explicit backend confirmation', async () => {
  for (const body of [{
    success: true
  }, {
    status: 'success'
  }, {
    status: 'Successfully registered'
  }]) assert.equal(await registerAttendee('', valid, {
    fetcher: stub(body)
  }), true);
  for (const body of [{}, null, {
    status: 'pending'
  }]) assert.equal(await registerAttendee('', valid, {
    fetcher: stub(body)
  }), false);
});
test('rejects HTTP and application failures', async () => {
  for (const body of [{
    success: false
  }, {
    status: 'failed'
  }, {
    status: 'unsuccessful'
  }, {
    status: 'not registered'
  }]) await assert.rejects(registerAttendee('', valid, {
    fetcher: stub(body)
  }));
  await assert.rejects(registerAttendee('', valid, {
    fetcher: stub({
      status: 'success'
    }, false)
  }));
});
test('handles malformed responses and network failure', async () => {
  await assert.rejects(registerAttendee('', valid, {
    fetcher: async () => {
      throw Error('network');
    }
  }));
  await assert.rejects(registerAttendee('', valid, {
    fetcher: async () => ({
      ok: true,
      json: async () => {
        throw SyntaxError('bad JSON');
      }
    })
  }));
});
