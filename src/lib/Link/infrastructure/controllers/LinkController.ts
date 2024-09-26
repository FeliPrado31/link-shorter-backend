import { Request, Response } from "express";
import { CreateLinkUseCase } from "../../application/CreateLinkUseCase";
import { FindLinkByIdUseCase } from "../../application/FindLinkByIdUseCase";
import { GetAllLinksUseCase } from "../../application/GetAllLinksUseCase";

export class LinkController {
  private createLinkUseCase: CreateLinkUseCase;
  private findLinkByIdUseCase: FindLinkByIdUseCase;
  private getAllLinksUseCase: GetAllLinksUseCase;

  constructor(
    createLinkUseCase: CreateLinkUseCase,
    findLinkByIdUseCase: FindLinkByIdUseCase,
    getAllLinksUseCase: GetAllLinksUseCase
  ) {
    this.createLinkUseCase = createLinkUseCase;
    this.findLinkByIdUseCase = findLinkByIdUseCase;
    this.getAllLinksUseCase = getAllLinksUseCase;
  }

  public createLink(req: Request, res: Response): void {
    const { originalUrl } = req.body;
    const id = Math.floor(Math.random() * 1000000); // Generar un ID único (esto es solo un ejemplo)
    const link = this.createLinkUseCase.execute(originalUrl, id);
    res.json({ shortUrl: link.getShortUrl() });
  }

  public findLinkById(req: Request, res: Response): void {
    const { id } = req.params;
    const link = this.findLinkByIdUseCase.execute(id);

    if (link) {
      res.json({
        originalUrl: link.getOriginalUrl(),
        shortUrl: link.getShortUrl(),
      });
    } else {
      res.status(404).send("Enlace no encontrado");
    }
  }

  public getAllLinks(req: Request, res: Response): void {
    const links = this.getAllLinksUseCase.execute();
    res.json(
      links.map((link) => ({
        id: link.getId(),
        originalUrl: link.getOriginalUrl(),
        shortUrl: link.getShortUrl(),
      }))
    );
  }

  public redirectToOriginalUrl(req: Request, res: Response): void {
    const { shortUrl } = req.params;
    const link = this.findLinkByIdUseCase.execute(shortUrl);

    if (link) {
      res.redirect(link.getOriginalUrl());
    } else {
      res.status(404).send("Enlace no encontrado");
    }
  }
}
