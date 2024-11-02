const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 10;
export const CORRECT_TYPES = [
  "Magician", 
  "Daemon"
];


export default class Character {
  constructor(name, type) {
    if (!CORRECT_TYPES.includes(type)) {
      throw new Error(`Некорректный тип персонажа, введите одно из следующих значений: ${CORRECT_TYPES.join(", ")}`);
    }
    if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
      throw new Error(`В имени персонажа должно быть от ${NAME_MIN_LENGTH} до ${NAME_MAX_LENGTH} символов`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }
  
  setStoned(distanceInCells) {
    this.stoned = Math.log2(distanceInCells)* 5;
  }

  getStoned() {
    return this.stoned;
  }

  setAttack(distanceInCells) {
    const powerDistanceDamage = new Uint8Array([100, 90, 80, 70, 60]);
    this.setStoned(distanceInCells);
    this.attack = (powerDistanceDamage[distanceInCells - 1] / 100) * this.attack - this.getStoned();
  }

  getAttack() {
    return Math.round(this.attack);
  }
};
