import { Cargo } from "./Cargo";
import { Planet } from "./Planet";

export abstract class Spacecraft {
  public usedCapacity: number = 0;

  constructor(
    public name: string,
    public fuel: number,
    public capacity: number
  ) {}

  abstract canDeliver(cargo: Cargo, planet: Planet): boolean;
  abstract consumeFuel(distance: number, cargo: Cargo): void;
}
