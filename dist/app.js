"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mortgage_controller_1 = require("./controllers/mortgage.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/mortgage-quote', mortgage_controller_1.calculateMonthlyPayment);
exports.default = app;
