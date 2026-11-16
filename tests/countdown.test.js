import { test } from 'node:test';
import assert from 'node:assert/strict';
import { concertDayTimestamp, countdownToDay } from '../src/lib/countdown.js';
const date = '2026-12-27';
const target = Date.parse('2026-12-26T23:00:00Z');
test('targets concert day midnight in Lagos, without inventing a start time', () => assert.equal(concertDayTimestamp(date), target));
test('computes the live day, hour, minute and second values immediately', () => assert.deepEqual(countdownToDay(target - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000, date), {
  days: 2,
  hours: 3,
  minutes: 4,
  seconds: 5,
  phase: 'upcoming'
}));
test('handles the concert day and clamps all counters to zero', () => {
  assert.equal(countdownToDay(target, date).phase, 'today');
  assert.equal(countdownToDay(target + 86399999, date).phase, 'today');
  for (const value of Object.values(countdownToDay(target, date)).slice(0, 4)) assert.equal(value, 0);
});
test('handles the date after the concert without negative or stale values', () => assert.deepEqual(countdownToDay(target + 86400000, date), {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  phase: 'past'
}));
