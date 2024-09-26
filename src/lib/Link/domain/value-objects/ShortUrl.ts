export class ShortUrl {
  private value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error("La URL corta no puede estar vacía");
    }
    if (!this.isValidShortUrl(value)) {
      throw new Error("La URL corta no es válida");
    }
    this.value = value;
  }

  private isValidShortUrl(url: string): boolean {
    // Aquí puedes agregar reglas específicas para validar la URL corta
    return url.length <= 10; // Ejemplo: la URL corta debe tener un máximo de 10 caracteres
  }

  public getValue(): string {
    return this.value;
  }
}
