"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const port = 5000;
exports.app.use(express_1.default.json());
exports.app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello world" });
});
const server = () => {
    return new Promise((resolve, reject) => {
        exports.app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
            resolve();
        });
    });
};
exports.server = server;
