/* eslint-env jest */
/* global test, expect */

import healthStatus from '../src/health';

test('returns healthy if health > 50', () => {
  expect(healthStatus({ name: 'маг', health: 90 })).toBe('healthy');
});

test('returns wounded if health between 15 and 50', () => {
  expect(healthStatus({ name: 'лучник', health: 30 })).toBe('wounded');
});

test('returns critical if health < 15', () => {
  expect(healthStatus({ name: 'мечник', health: 10 })).toBe('critical');
});
