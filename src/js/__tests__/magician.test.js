import Magician from "../magician.js";


test('should create the correct Magician object', () => {
  const result = new Magician('Neo');
  const expected = {
    name: "Neo",
    type: "Magician",
    health: 100,
    level: 1,
    defence: 40
  };

  expect(result).toEqual(expected);
});

test('should correctly calculate the attack power', () => {
  const magician = new Magician('Neo');
  magician.stoned = 4;
  magician.attack = 4;
  const result = magician.attack;
  const expected = 60;

  expect(result).toBe(expected);
});

test('should return the unchanged attack power', () => {
  const magician = new Magician('Neo');
  const result = magician.attack;
  const expected = 100;

  expect(result).toBe(expected);
});
