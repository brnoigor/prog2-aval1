export class Planet {
    constructor(
      public name: string,
      public distance: number, // em milhões de km
      public type: string,
      public acceptedCargoTypes: string[]
    ) {}
  
    accepts(cargoType: string): boolean {
      return this.acceptedCargoTypes.includes(cargoType);
    }
  }
  