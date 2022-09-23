import { User } from "./User";

export interface Url{
  Id:string,
  FullUrl:string,
  ShortUrl:string,
  CreatedAt:string,
  Clicks:number,
  User:User
}
