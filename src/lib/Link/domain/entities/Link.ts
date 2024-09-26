import { Id } from "../value-objects/Id";
import { OriginalUrl } from "../value-objects/OriginalUrl";
import { ShortUrl } from "../value-objects/ShortUrl";

export class Link {
  private id: Id;
  private originalUrl: OriginalUrl;
  private shortUrl: ShortUrl;

  constructor(id: Id, originalUrl: OriginalUrl, shortUrl: ShortUrl) {
    this.id = id;
    this.originalUrl = originalUrl;
    this.shortUrl = shortUrl;
  }

  public getId(): string {
    return this.id.getValue();
  }

  public getOriginalUrl(): string {
    return this.originalUrl.getValue();
  }

  public getShortUrl(): string {
    return this.shortUrl.getValue();
  }
}
