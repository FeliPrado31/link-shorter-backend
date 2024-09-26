import { Router } from "express";
import { LinkController } from "../../infrastructure/controllers/LinkController";

export class LinkRouter {
  private router: Router;
  private linkController: LinkController;

  constructor(linkController: LinkController) {
    this.router = Router();
    this.linkController = linkController;
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post(
      "/links",
      this.linkController.createLink.bind(this.linkController)
    );
    this.router.get(
      "/links/:id",
      this.linkController.findLinkById.bind(this.linkController)
    );
    this.router.get(
      "/links",
      this.linkController.getAllLinks.bind(this.linkController)
    );
    this.router.get(
      "/:shortUrl",
      this.linkController.redirectToOriginalUrl.bind(this.linkController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
