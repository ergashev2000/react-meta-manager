"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MetaContext_1 = require("../contexts/MetaContext");
const TestComponent = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const context = (0, MetaContext_1.useMetaContext)();
    const keywords = (_a = context.keywords) !== null && _a !== void 0 ? _a : [];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { "data-testid": "title" }, (_b = context.title) !== null && _b !== void 0 ? _b : ''),
        react_1.default.createElement("div", { "data-testid": "description" }, (_c = context.description) !== null && _c !== void 0 ? _c : ''),
        react_1.default.createElement("div", { "data-testid": "url" }, (_d = context.url) !== null && _d !== void 0 ? _d : ''),
        react_1.default.createElement("div", { "data-testid": "ogImage" }, (_e = context.ogImage) !== null && _e !== void 0 ? _e : ''),
        react_1.default.createElement("div", { "data-testid": "keywords" }, keywords.join(', ')),
        react_1.default.createElement("div", { "data-testid": "author" }, (_f = context.author) !== null && _f !== void 0 ? _f : ''),
        react_1.default.createElement("div", { "data-testid": "favicon" }, (_g = context.favicon) !== null && _g !== void 0 ? _g : ''),
        react_1.default.createElement("div", { "data-testid": "icon" }, (_h = context.icon) !== null && _h !== void 0 ? _h : ''),
        react_1.default.createElement("div", { "data-testid": "twitterCreator" }, (_j = context.twitterCreator) !== null && _j !== void 0 ? _j : '')));
};
exports.default = TestComponent;
