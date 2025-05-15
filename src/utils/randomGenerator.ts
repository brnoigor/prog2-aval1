import { Cargo } from "../models/Cargo";
import { Planet } from "../models/Planet";
import { CargoShip } from "../models/CargoShip";
import { ScoutShip } from "../models/ScoutShip";
import { Spacecraft } from "../models/Spacecraft";

export function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomCargos(n: number): Cargo[] {
  const types = ["supply", "biotech", "data", "equipment"];
  const cargoNames = [
    "Robotic Drill",
    "Oxygen Tank",
    "Data Capsule",
    "Supply Box",
    "Biological Sample",
    "Food Ration",
    "Communication Relay",
    "Thermal Sensor"
  ];

  const cargos: Cargo[] = [];

  for (let i = 0; i < n; i++) {
    const isShielded = Math.random() < 0.5;
    cargos.push(new Cargo(
      getRandomElement(cargoNames),
      Math.floor(Math.random() * 40) + 60, 
      getRandomElement(types),
      isShielded
    ));
  }

  return cargos;
}

export function generateRandomPlanets(n: number): Planet[] {
  const realPlanets = [
    { name: "Mercury", type: "Rocky", accepts: ["data", "equipment"] },
    { name: "Venus", type: "Rocky", accepts: ["supply", "equipment"] },
    { name: "Earth", type: "Rocky", accepts: ["supply", "biotech", "data", "equipment"] },
    { name: "Mars", type: "Rocky", accepts: ["supply", "biotech"] },
    { name: "Jupiter", type: "Gas", accepts: ["data"] },
    { name: "Saturn", type: "Gas", accepts: ["data", "equipment"] },
    { name: "Uranus", type: "Ice", accepts: ["biotech"] },
    { name: "Neptune", type: "Ice", accepts: ["supply", "biotech"] }
  ];

  const planetsToUse = realPlanets.sort(() => Math.random() - 0.5).slice(0, n);

  return planetsToUse.map(p => new Planet(
    p.name,
    Math.floor(Math.random() * 1200) + 100,
    p.type,
    p.accepts
  ));
}

export function generateRandomFleet(n: number): Spacecraft[] {
  const fleet: Spacecraft[] = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      fleet.push(new CargoShip(
        `CargoShip-${i}`,
        Math.floor(Math.random() * 1500) + 800,
        Math.floor(Math.random() * 200) + 100
      ));
    } else {
      fleet.push(new ScoutShip(
        `ScoutShip-${i}`,
        Math.floor(Math.random() * 1000) + 500,
        Math.floor(Math.random() * 80) + 30
      ));
    }
  }

  return fleet;
}
