var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

RetiredForagerBee.prototype = Object.create(new ForagerBee);
//RetiredForagerBee.prototype = Object.create(new Forage);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;
//Object.assign(RetiredForagerBee,ForagerBee);
RetiredForagerBee.prototype.forage = function(){
  return `I am too old, let me play cards instead`;
};
RetiredForagerBee.prototype.gamble = function(n){
  this.treasureChest.push(n);
}
