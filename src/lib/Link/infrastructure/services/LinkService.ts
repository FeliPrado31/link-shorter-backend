import { CreateLinkUseCase } from "../../application/CreateLinkUseCase";
import { FindLinkByIdUseCase } from "../../application/FindLinkByIdUseCase";
import { GetAllLinksUseCase } from "../../application/GetAllLinksUseCase";
import { LinkController } from "../controllers/LinkController";
import { InMemoryLinkRepository } from "../repositories/InMemoryLinkRepository";

export class LinkService {
  private linkRepository: InMemoryLinkRepository;
  private createLinkUseCase: CreateLinkUseCase;
  private findLinkByIdUseCase: FindLinkByIdUseCase;
  private getAllLinksUseCase: GetAllLinksUseCase;
  private linkController: LinkController;

  constructor() {
    this.linkRepository = new InMemoryLinkRepository();
    this.createLinkUseCase = new CreateLinkUseCase(this.linkRepository);
    this.findLinkByIdUseCase = new FindLinkByIdUseCase(this.linkRepository);
    this.getAllLinksUseCase = new GetAllLinksUseCase(this.linkRepository);
    this.linkController = new LinkController(
      this.createLinkUseCase,
      this.findLinkByIdUseCase,
      this.getAllLinksUseCase
    );
  }

  public getController(): LinkController {
    return this.linkController;
  }
}
