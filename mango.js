"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
  this.age = 0
  this.height = 0
  this.maxFruit = 0
  this.fruits = []
  this.healthyStatus = true
  }
  

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {
    return this.fruits
  }
  getHealtyStatus() {
    return this.healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age++
      let countHeight = Math.floor(Math.random()*(this.maxHeight*0,8))/10
    this.height += countHeight 
    if(this.height >= this.maxHeight){
      this.height = this.maxHeight
    }
    this.height = parseFloat(this.height.toFixed(1))
    if (this.age >= this.maxAge) this.age = this.age;
    if(this.age == this.maxAge){
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceFruits(ageFruit) {
    let maxFruit = Math.floor(Math.random()*15)
    if(this.age >= ageFruit){
      for(let i = 0; i < maxFruit; i++){
        this.fruits[i] = new Fruit ()
      }
    }
    return maxFruit
    // console.log(maxFruit);
  }

  // Get some fruits
  harvest() {
    this.goodFruit = 0;
    this.badFruit = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === 'good') {
        this.goodFruit += 1;
      } else {
        this.badFruit += 1;
      }  
    }
    this.harvested = `${this.fruits.length} (${this.goodFruit} good, ${this.badFruit} bad) `
    this.fruits = [];
  }
  
}

class Fruit {
  // Produce a mango
  constructor() {
    this.quality = this.quality()
  }
  
  quality(){
    let qlty = ['good', 'bad']
    return this.quality = qlty[Math.floor(Math.random()*2)];
    // console.log(this.quality);
  }
  
}


  class Mango extends Fruit {
  }

  class MangoTree extends FruitTree {
    constructor() {
      super();
      this.maxHeight = 8 
      this.maxAge = 15;
    }
  }
    console.log('');
    console.log('MANGO TREE');
      //  driver code untuk release 0
    const mangoTree = new MangoTree();
    do {
      mangoTree.grow(7);
      mangoTree.produceFruits(5);
      mangoTree.harvest();
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
    } while (mangoTree.healthyStatus != false)
    console.log(`The tree has met its end. :sad:`);

    
  class TreeGrove{
    constructor(){
      this.year = 0
      this.trees = []
    }
    
    inputTree(type, age, height, fruit, health){
      let tree = new type()
      tree.name = type.name
      tree.age = age
      tree.height = height
      tree.totalFruit = fruit
      tree.healthyStatus = health
      
      this.trees.push(tree)
    }
    
    nextYear(){
      this.year++
      for(let i = 0; i < this.trees.length; i++){
        this.trees[i].grow()
      }
    }
    
    showTrees(){
      for(let i = 0; i < this.trees.length; i++){
        console.log(this.trees[i].name);
      }
    }
    
    showAges(){
      for(let i = 0; i < this.trees.length; i++){
        console.log(`${this.trees[i].name}, age: ${this.trees[i].age}`);
      }
    }
    
    deadTrees(){
      let dead_Trees = []
      for(let i = 0; i < this.trees.length; i++){
        if(!this.trees[i].healthyStatus){
          dead_Trees.push(this.trees[i].name)
        }
      }
      return dead_Trees
    }
    
    mature_trees(){
      let mature = []
      for(let i = 0; i < this.trees.length; i++){
        if(this.trees[i].totalFruit > 0 && this.trees[i].healthyStatus) mature.push(this.trees[i].name)
      }
      return mature
    }
    
  }
  
  let grove = new TreeGrove()
  
  // grove.inputTree(AppleTree, 5,1.8,7,true)
  grove.inputTree(MangoTree, 5,1.8,7,true)
  // grove.inputTree(PearTree, 9,1.8,7,true)
  grove.nextYear()
  grove.nextYear()
  grove.nextYear()
  grove.nextYear()
  
  console.log('+++++++++++++++++ SHOW TREES ++++++++++++++++');
  grove.showTrees()
  console.log('+++++++++++++++++ SHOW AGES ++++++++++++++++');
  grove.showAges()
  
  console.log('++++++++++++++++ MATURE TREES +++++++++++++++');
  console.log(grove.mature_trees());
  console.log('+++++++++++++++++ DEAD TREES ++++++++++++++++');
  console.log(grove.deadTrees());
