export class Id {
  private value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error("El ID no puede estar vacío");
    }
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }
}
