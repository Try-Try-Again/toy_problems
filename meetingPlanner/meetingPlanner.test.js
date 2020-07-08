const meetingPlanner = require('./meetingPlanner');

describe('meetingPlanner', () => {
  it('returns empty array when no available times', () => {
    const slotsA = [[10, 50], [60, 120], [140, 210]];
    const slotsB = [[0, 15], [60, 70]];
    const dur = 12;

    const result = meetingPlanner(slotsA, slotsB, dur);

    expect(result).toEqual([]);
  });

  it('finds a time slot when one is available', () => {
    const slotsA = [[10, 50], [60, 120], [140, 210]]
    const slotsB = [[0, 15], [60, 70]]
    const dur = 8

    const result = meetingPlanner(slotsA, slotsB, dur);

    expect(result).toEqual([60, 68]);
  });

  it('works when one person only has a single timeslot available', () => {
    const slotsA = [[1,10]];
    const slotsB = [[2,3],[5,7]];
    const dur = 2;

    const result = meetingPlanner(slotsA, slotsB, dur);

    expect(result).toEqual([5, 7]);
  });

});
