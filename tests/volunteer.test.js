import { test } from 'node:test';
import assert from 'node:assert/strict';
import { emptyVolunteerInterest, submitVolunteerInterest } from '../src/lib/volunteer.js';

const valid = {
  name: 'Test Volunteer',
  email: 'volunteer@example.test',
  phone: '+2348000000000',
  availability: 'Concert day',
  interest: 'Welcome guests'
};

const stub = (body, ok = true) => async () => ({
  ok,
  json: async () => body
});

test('posts only the volunteer form fields to the dedicated endpoint', async () => {
  let calls = 0;
  await submitVolunteerInterest('https://example.test/asherpraise/volunteer', {
    ...valid,
    ignored: 'not sent'
  }, {
    fetcher: async (url, options) => {
      calls++;
      assert.equal(url, 'https://example.test/asherpraise/volunteer');
      assert.equal(options.method, 'POST');
      assert.equal(options.headers['Content-Type'], 'application/json;charset=utf-8');
      assert.deepEqual(JSON.parse(options.body), valid);
      return {
        ok: true,
        json: async () => ({ status: 'SUCCESS' })
      };
    }
  });
  assert.equal(calls, 1);
});

test('trims submitted values and sends optional fields as empty strings', async () => {
  await submitVolunteerInterest('', {
    name: '  Test Volunteer ',
    email: ' volunteer@example.test ',
    interest: '  Welcome guests  '
  }, {
    fetcher: async (_url, options) => {
      assert.deepEqual(JSON.parse(options.body), {
        ...emptyVolunteerInterest,
        name: 'Test Volunteer',
        email: 'volunteer@example.test',
        interest: 'Welcome guests'
      });
      return {
        ok: true,
        json: async () => ({ status: 'SUCCESS' })
      };
    }
  });
});

test('requires explicit backend confirmation and rejects failures', async () => {
  for (const body of [{}, null, { status: 'PENDING' }, { success: false, status: 'SUCCESS' }]) {
    await assert.rejects(submitVolunteerInterest('', valid, {
      fetcher: stub(body)
    }));
  }
  await assert.rejects(submitVolunteerInterest('', valid, {
    fetcher: stub({ status: 'SUCCESS' }, false)
  }));
});

test('surfaces network and malformed response errors', async () => {
  await assert.rejects(submitVolunteerInterest('', valid, {
    fetcher: async () => {
      throw Error('network');
    }
  }));
  await assert.rejects(submitVolunteerInterest('', valid, {
    fetcher: async () => ({
      ok: true,
      json: async () => {
        throw SyntaxError('bad JSON');
      }
    })
  }));
});
