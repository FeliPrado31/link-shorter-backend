import { Link } from "../entities/Link";
import { Id } from "../value-objects/Id";

export interface ILinkRepository {
  createLink(link: Link): void;
  getAll(): Link[];
  findLinkById(id: Id): Link | undefined;
}
