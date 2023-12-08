// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };

  // Loop to log each item in Robin's inventory
  for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
  }

  // Test the roll method
  adventurer.roll();
  adventurer.roll(-2);
  adventurer.roll(5);


  // Part 2: Class Fantasy
// Character class
class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  // Creating Robin using Character class
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Testing roll method for companions
  robin.companion.roll();
  robin.companion.companion.roll();


  // Part 3: Class Features
// Adventurer class
class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  // Companion class
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  }
  
  // Creating Robin and companions using Adventurer and Companion classes
  const robin = new Adventurer("Robin", "Fighter");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Companion("Leo", "Cat");
  robin.companion.companion = new Companion("Frank", "Flea");
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Testing scout method for Robin
  robin.scout();


 // Part 4: Class Uniforms

// Character class with static MAX_HEALTH property
class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }

     // Companion class
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  }
  
      
  
  // Adventurer class with static ROLES array
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (Adventurer.ROLES.includes(role)) {
        throw new Error("Invalid role for adventurer.");
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  // Creating Robin and companions using Adventurer and Companion classes
  const robin = new Adventurer("Robin", "Fighter");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Companion("Leo", "Cat");
  robin.companion.companion = new Companion("Frank", "Flea");
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Testing scout method for Robin
  robin.scout();

class Adventurer {
    constructor(name, role) {
      this.name = name;
      this.role = role;
      this.health = 100;
    }
  
    scout() {
      console.log(`${this.name} is scouting.`);
    }
  
    duel(opponent) {
      while (this.health > 50 && opponent.health > 50) {
        const thisRoll = this.roll();
        const opponentRoll = opponent.roll();
  
        if (thisRoll > opponentRoll) {
          opponent.health -= 1;
        } else {
          this.health -= 1;
        }
  
        console.log(`${this.name} rolled ${thisRoll}, ${opponent.name} rolled ${opponentRoll}.`);
        console.log(`${this.name}'s health: ${this.health}, ${opponent.name}'s health: ${opponent.health}.`);
      }
  
      if (this.health > opponent.health) {
        console.log(`${this.name} wins the duel!`);
      } else {
        console.log(`${opponent.name} wins the duel!`);
      }
    }
  
    roll() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  
  class Fighter extends Adventurer {
    constructor(name) {
      super(name, "Fighter");
      this.strength = 10;
    }
  
    attack(opponent) {
      console.log(`${this.name} is attacking ${opponent.name} for ${this.strength} damage.`);
    }
  }

  class Healer extends Adventurer {
    constructor(name) {
      super(name, "Healer");
      this.healingPower = 5;
    }
  
    heal(target) {
      target.health += this.healingPower;
      console.log(`${this.name} is healing ${target.name} for ${this.healingPower} health.`);
    }
  }
  
  
  class Wizard extends Adventurer {
    constructor(name) {
      super(name, "Wizard");
      this.magicPower = 8;
    }
  
    castSpell(target) {
      target.health -= this.magicPower;
      console.log(`${this.name} is casting a spell on ${target.name} for ${this.magicPower} damage.`);
    }
  }
  
  const fighter = new Fighter("Arsene");
  const healer = new Healer("Zoro");
  const wizard = new Wizard("Loki");
  
  fighter.attack(wizard);
  healer.heal(fighter);
  wizard.castSpell(fighter);
  
fighter.duel(wizard);