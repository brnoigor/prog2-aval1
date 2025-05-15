import { Spacecraft } from "../models/Spacecraft";
import { Planet } from "../models/Planet";
import { Cargo } from "../models/Cargo";

export class MissionControl {
  private log: string[] = [];
  private visitedPlanets = new Map<string, string>();
  private allCargos: Cargo[] = [];

  assign(ship: Spacecraft) {
    this.log.push(`Assigned spacecraft: ${ship.name} | Fuel: ${ship.fuel} | Capacity: ${ship.capacity}`);
  }

  executeMission(ship: Spacecraft, planet: Planet, cargo: Cargo) {
    this.log.push(`\nMission: ${ship.name} -> ${planet.name}`);

    const distance = planet.distance;
    const fuelRequired = ship.name.includes("Scout") ? distance * 0.18 : distance * 0.2;
    const hasCapacity = ('usedCapacity' in ship) && (ship as any).usedCapacity + cargo.weight <= ship.capacity;
    const hasFuel = ship.fuel >= fuelRequired;
    const travelVerb = ship.name.includes("Scout") ? "quickly reached" : "traveled to";

    this.log.push(`${ship.name} ${travelVerb} ${planet.name} (${distance}M km).`);

    let deliveredSuccessfully = false;

    if (!planet.accepts(cargo.type)) {
        this.log.push(`${ship.name} failed to deliver "${cargo.name}": cargo not accepted by ${planet.name}.`);
    } else if (!hasCapacity) {
        this.log.push(`${ship.name} failed to deliver "${cargo.name}": exceeds capacity.`);
    } else if (!hasFuel) {
        this.log.push(`${ship.name} failed to deliver "${cargo.name}": insufficient fuel.`);
    } else {
        ship.consumeFuel(distance, cargo);
        this.log.push(`${ship.name} delivered "${cargo.name}" to ${planet.name}.`);
        deliveredSuccessfully = true;
    }

    this.log.push(`Fuel remaining: ${ship.fuel.toFixed(1)} | Capacity remaining: ${ship.capacity - ((ship as any).usedCapacity || 0)}`);

    const cargoCopy = new Cargo(cargo.name, cargo.weight, cargo.type, deliveredSuccessfully);
    this.allCargos.push(cargoCopy);

    this.visitedPlanets.set(planet.name, `${planet.type}Planet`);
  }

  report(): string[] {
    this.log.push(`\nCargo summary:`);
    this.allCargos.forEach(c => {
      const shieldedStatus = c.isShielded ? "shielded" : "unshielded"; 
      this.log.push(`- ${c.name.toLowerCase()} | ${c.weight}kg | ${shieldedStatus}`);
    });

    this.log.push(`\nPlanets visited:`);
    this.visitedPlanets.forEach((type, name) => {
      this.log.push(`- ${name} (${type})`);
    });

    return this.log;
  }
}
