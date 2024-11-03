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

test('should correctly calculate the attack power', () => {
  const daemon = new Daemon('Neo');
  daemon.stoned = 4;
  daemon.attack = 4;
  const result = daemon.attack;
  const expected = 60;

  expect(result).toBe(expected);
});
