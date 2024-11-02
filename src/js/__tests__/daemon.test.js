import Daemon from "../daemon.js";


test('should create the correct Daemon object', () => {
  const result = new Daemon('Neo');
  const expected = {
    name: "Neo",
    type: "Daemon",
    health: 100,    
    level: 1,
    defence: 40
  };

  expect(result).toEqual(expected);
});

test('should return the unchanged damage strength', () => {
  const daemon = new Daemon('Neo');
  const result = daemon.attack;
  const expected = 100;

  expect(result).toBe(expected);
});

test('should change the damage strength based on stoned', () => {
  const daemon = new Daemon('Neo');
  daemon.stoned = 4;
  daemon.attack = 4;
  const result = daemon.attack;
  const expected = 60;

  expect(result).toBe(expected);
});
