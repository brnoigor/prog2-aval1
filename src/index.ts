import { generateRandomCargos, generateRandomFleet, generateRandomPlanets, getRandomElement } from "./utils/randomGenerator";
import { MissionControl } from "./services/MissionControl";

const cargos = generateRandomCargos(5);
const planets = generateRandomPlanets(5);
const fleet = generateRandomFleet(2); 
const control = new MissionControl();

fleet.forEach(ship => {
  control.assign(ship);

  for (let i = 0; i < 2; i++) {
    const cargo = getRandomElement(cargos);
    const planet = getRandomElement(planets);
    control.executeMission(ship, planet, cargo);
  }
});

console.log(control.report().join('\n'));
