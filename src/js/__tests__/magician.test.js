import Magician from "../magician.js";


test('should create the correct Magician object', () => {
  const result = new Magician('Neo');
  const expected = {
    name: "Neo",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 100,
    defence: 40
  };

  expect(result).toEqual(expected);
});

test('should change the damage strength', () => {
  const daemon = new Magician('Neo');
  daemon.setAttack(4);
  const result = daemon.getAttack();
  const expected = 60;

  expect(result).toBe(expected);
});
