export class Cargo {
    constructor(
      public name: string,
      public weight: number,
      public type: string,
      public isShielded: boolean 
    ) {}
    getShieldedStatus(): string {
      return this.isShielded ? "shielded" : "unshielded";
    }
  }
  