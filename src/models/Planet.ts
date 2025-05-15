export class Planet {
    constructor(
      public name: string,
      public distance: number, 
      public type: string,
      public acceptedCargoTypes: string[]
    ) {}
  
    accepts(cargoType: string): boolean {
      return this.acceptedCargoTypes.includes(cargoType);
    }
  }
  