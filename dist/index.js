"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SignIn_1 = __importDefault(require("./api/v1/routers/SignIn"));
const app = (0, express_1.default)();
const PORT = 8001;
app.get('/', (req, res) => {
    res.status(200).json("Hello World !");
});
app.use('/register', SignIn_1.default);
app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}`);
});
