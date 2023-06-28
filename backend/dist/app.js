"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
Promise.resolve().then(() => __importStar(require('./db/connect')));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const preferenceRoute = require('./routes/userPreference');
const port = process.env.PORT || 3000;
// CORS applied
app.use((0, cors_1.default)({
    origin: 'https://649251e76244cd08dd16eb31--elaborate-churros-8dc5dd.netlify.app'
}));
app.use(express_1.default.json());
// Preference Route
app.use('/preference', preferenceRoute);
app.use((req, res) => {
    res.status(200).json({});
});
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("frontend/dist"));
// }
app.listen(port, () => {
    console.log("application running on port " + port);
});
