import express from "express";
import { LinkService } from "./lib/Link/infrastructure/services/LinkService";
import { LinkRouter } from "./lib/Link/interfaces/rest/LinkRouter";

const app = express();
const port = 3000;

const linkService = new LinkService();
const linkController = linkService.getController();
const linkRouter = new LinkRouter(linkController);

app.use(express.json());
app.use("/", linkRouter.getRouter());

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
