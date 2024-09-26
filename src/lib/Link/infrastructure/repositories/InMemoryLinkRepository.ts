import { Link } from "../../domain/entities/Link";
import { ILinkRepository } from "../../domain/repositories/ILinkRepository";
import { Id } from "../../domain/value-objects/Id";

export class InMemoryLinkRepository implements ILinkRepository {
  private links: Map<string, Link> = new Map();

  public createLink(link: Link): void {
    this.links.set(link.getShortUrl(), link);
  }

  public findLinkById(id: Id): Link | undefined {
    for (const link of this.links.values()) {
      if (link.getId() === id.getValue()) {
        return link;
      }
    }
    return undefined;
  }

  getAll(): Link[] {
    return Array.from(this.links.values());
  }
}
