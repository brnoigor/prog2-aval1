import { Spacecraft } from "./Spacecraft";
import { Cargo } from "./Cargo";
import { Planet } from "./Planet";

export class ScoutShip extends Spacecraft {
  canDeliver(cargo: Cargo, planet: Planet): boolean {
    const hasCapacity = this.usedCapacity + cargo.weight <= this.capacity;
    const hasFuel = this.fuel >= planet.distance * 0.18;
    return hasCapacity && hasFuel;
  }

  consumeFuel(distance: number, cargo: Cargo): void {
    const fuelUsed = distance * 0.18;
    this.fuel -= fuelUsed;
    this.usedCapacity += cargo.weight;
  }
}
