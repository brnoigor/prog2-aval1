export class Cargo {
    constructor(
      public name: string,
      public weight: number,
      public type: string,
      public isShielded: boolean // Definição correta do atributo
    ) {}
  
    getShieldedStatus(): string {
      return this.isShielded ? "shielded" : "unshielded"; // Método para garantir a saída correta no relatório
    }
  }
  