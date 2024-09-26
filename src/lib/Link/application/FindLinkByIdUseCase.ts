import { Link } from "../domain/entities/Link";
import { ILinkRepository } from "../domain/repositories/ILinkRepository";
import { Id } from "../domain/value-objects/Id";

export class FindLinkByIdUseCase {
  private linkRepository: ILinkRepository;

  constructor(linkRepository: ILinkRepository) {
    this.linkRepository = linkRepository;
  }

  public execute(id: string): Link | undefined {
    const idVO = new Id(id);
    return this.linkRepository.findLinkById(idVO);
  }
}
