export class OriginalUrl {
  private value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error("La URL original no puede estar vacía");
    }
    if (!this.isValidUrl(value)) {
      throw new Error("La URL original no es válida");
    }
    this.value = value;
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  public getValue(): string {
    return this.value;
  }
}
