// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console
//   `${name} moving to ${topSpeed}`

class SpaceShip {
  constructor(name, topSpeed){
    this.name = name
    this.topSpeed = topSpeed
  }

  accelerate() {
    console.log(`${this.name} is moving at ${this.topSpeed}.`)
  }
}

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

// Build some space ships
const enterpriseC = new SpaceShip("Enterprise-C", "Warp Speed 6")
const enterpriseD = new SpaceShip("Enterprise-D", "Warp Speed 10")
const enterpriseE = new SpaceShip("Enterprise-E", "Warp Speed 12")

// Race them
enterpriseC.accelerate()
enterpriseD.accelerate()
enterpriseE.accelerate()
