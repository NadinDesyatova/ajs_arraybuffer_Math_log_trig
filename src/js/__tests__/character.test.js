import Character, { CORRECT_TYPES } from "../character";


test('should correct creation of Character object', () => {
  const result = new Character('Neo', 'Daemon');
  const expected = {
    name: 'Neo',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: null
  };

  expect(result).toEqual(expected);
});

test.each([
  ['L'],
  ['Villentretenmerth']
])(
  ('should return length error for name %s'), 
  (name) => {
    const expected = 'В имени персонажа должно быть от 2 до 10 символов';
    const incorrectName = function() {
      new Character(name, 'Daemon');
    };
 
    expect(incorrectName).toThrow(expected);
  }
);

test('should return type error', () => {
  const incorrectType = function() {
    new Character('John', 'Wick');
  };
  const expected = `Некорректный тип персонажа, введите одно из следующих значений: ${CORRECT_TYPES.join(", ")}`;
 
  expect(incorrectType).toThrow(expected);
});
