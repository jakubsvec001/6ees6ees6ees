class ForagerBee extends HoneyMakerBee {
  constructor() {
    super();
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(item) {
    this.treasureChest.push(item);
  }
}
