"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BankAccounts_1 = require("./models/BankAccounts");
const Users_1 = require("./models/Users");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "raspberry",
    database: "banckAccounts",
    models: [BankAccounts_1.BankAccounts, Users_1.Users]
});
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.sequelize.sync().then(() => { console.log("Created Tables"); });
});
exports.dbConnection = dbConnection;
