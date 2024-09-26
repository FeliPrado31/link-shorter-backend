import { Link } from "../domain/entities/Link";
import { ILinkRepository } from "../domain/repositories/ILinkRepository";

export class GetAllLinksUseCase {
  private linkRepository: ILinkRepository;

  constructor(linkRepository: ILinkRepository) {
    this.linkRepository = linkRepository;
  }

  public execute(): Link[] {
    return this.linkRepository.getAll();
  }
}
