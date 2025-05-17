import { generateRandomCargos, generateRandomFleet, generateRandomPlanets } from "./utils/randomGenerator";
import { MissionControl } from "./services/MissionControl";

const cargos = generateRandomCargos(5);
const planets = generateRandomPlanets(5);
const fleet = generateRandomFleet(2); 
const control = new MissionControl();

for (const ship of fleet) {
  for (let i = 0; i < 2; i++) {
    control.launchRandomMission([ship], planets, cargos);
  }
}

console.log(control.report().join('\n'));
