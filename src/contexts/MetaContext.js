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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMetaContext = exports.MetaProvider = void 0;
const react_1 = __importStar(require("react"));
const MetaContext = (0, react_1.createContext)({});
const MetaProvider = ({ children, defaults }) => {
    const contextValue = (0, react_1.useMemo)(() => ({
        title: defaults === null || defaults === void 0 ? void 0 : defaults.title,
        description: defaults === null || defaults === void 0 ? void 0 : defaults.description,
        url: defaults === null || defaults === void 0 ? void 0 : defaults.url,
        ogImage: defaults === null || defaults === void 0 ? void 0 : defaults.ogImage,
        keywords: defaults === null || defaults === void 0 ? void 0 : defaults.keywords,
        author: defaults === null || defaults === void 0 ? void 0 : defaults.author,
        favicon: defaults === null || defaults === void 0 ? void 0 : defaults.favicon,
        icon: defaults === null || defaults === void 0 ? void 0 : defaults.icon,
    }), [defaults]);
    return (react_1.default.createElement(MetaContext.Provider, { value: contextValue }, children));
};
exports.MetaProvider = MetaProvider;
const useMetaContext = () => (0, react_1.useContext)(MetaContext);
exports.useMetaContext = useMetaContext;
