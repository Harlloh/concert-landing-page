import { test } from 'node:test';
import assert from 'node:assert/strict';
import { concertDateLabel, currentEvent } from '../src/data/event.js';

test('formats event dates from the configured ISO date and timezone', () => {
  assert.equal(concertDateLabel({
    date: '2027-01-03',
    timeZone: 'Africa/Lagos'
  }), '3 January 2027');
});

test('keeps edition-specific tracks and partners in the event configuration', () => {
  assert.ok(Array.isArray(currentEvent.playlist.tracks));
  assert.ok(Array.isArray(currentEvent.partners));
  assert.ok(currentEvent.playlist.tracks.every(track => track.artist && track.src));
  assert.ok(currentEvent.partners.every(partner => partner.src && partner.alt));
});
