import {Account} from "./interfaces/accounts";
import * as process from "process";

export const accountsInHelloWork : Account = {
    email : process.env.emailHelloWork,
    password : process.env.passwordHelloWork
}