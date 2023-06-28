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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPreference = exports.createOrUpdateUserPreference = void 0;
const userPpreference_1 = __importDefault(require("../models/userPpreference"));
const createOrUpdateUserPreference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userPreference = yield userPpreference_1.default.findOneAndUpdate({ username: req.body.username }, req.body, { new: true, upsert: true });
        console.log(userPreference);
        res.status(201).json(userPreference);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.createOrUpdateUserPreference = createOrUpdateUserPreference;
const getUserPreference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userPreference = yield userPpreference_1.default.findOne({ username: req.params.username });
        res.status(200).json(userPreference);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getUserPreference = getUserPreference;
