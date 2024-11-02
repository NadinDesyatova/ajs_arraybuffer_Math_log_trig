import Character from "./character";


export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.defence = 40
  }
}
