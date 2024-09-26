import { Link } from "../domain/entities/Link";
import { ILinkRepository } from "../domain/repositories/ILinkRepository";
import { Id } from "../domain/value-objects/Id";
import { OriginalUrl } from "../domain/value-objects/OriginalUrl";
import { ShortUrl } from "../domain/value-objects/ShortUrl";

export class CreateLinkUseCase {
  private linkRepository: ILinkRepository;

  constructor(linkRepository: ILinkRepository) {
    this.linkRepository = linkRepository;
  }

  public execute(originalUrl: string, id: number): Link {
    const idVO = new Id(id.toString());
    const originalUrlVO = new OriginalUrl(originalUrl);
    const shortUrlVO = new ShortUrl("test");

    const link = new Link(idVO, originalUrlVO, shortUrlVO);
    this.linkRepository.createLink(link);

    return link;
  }
}
