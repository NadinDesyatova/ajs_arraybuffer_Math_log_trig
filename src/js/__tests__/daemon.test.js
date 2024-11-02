import Daemon from "../daemon.js";


test('should create the correct Daemon object', () => {
  const result = new Daemon('Neo');
  const expected = {
    name: "Neo",
    type: "Daemon",
    health: 100,    
    level: 1,
    attack: 100,
    defence: 40
  };

  expect(result).toEqual(expected);
});

test('should change the damage strength', () => {
  const daemon = new Daemon('Neo');
  daemon.setAttack(4);
  const result = daemon.getAttack();
  const expected = 60;

  expect(result).toBe(expected);
});
