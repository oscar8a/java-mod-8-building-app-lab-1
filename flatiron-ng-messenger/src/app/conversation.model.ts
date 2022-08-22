import { User } from "./user.model";

export class Conversation {
  constructor(public id: number, public users: User[]) {}
}
