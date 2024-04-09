import { Account } from "./interfaces/accounts";
import * as process from "process";

export const accountsInHelloWork: Account = {
  email: process.env.EMAILHELLOWORK,
  password: process.env.PASSWORDHELLOWORK,
};
