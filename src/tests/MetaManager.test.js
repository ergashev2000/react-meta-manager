"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const MetaContext_1 = require("../contexts/MetaContext");
const TestComponent_1 = __importDefault(require("./TestComponent"));
describe('MetaProvider', () => {
    it('provides default values to context', () => {
        (0, react_2.render)(react_1.default.createElement(MetaContext_1.MetaProvider, null,
            react_1.default.createElement(TestComponent_1.default, null)));
        expect(react_2.screen.getByTestId('title')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('description')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('url')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('ogImage')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('keywords')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('author')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('favicon')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('icon')).toHaveTextContent('');
        expect(react_2.screen.getByTestId('twitterCreator')).toHaveTextContent('');
    });
    it('provides custom values from defaults prop', () => {
        const customValues = {
            title: 'Custom Title',
            description: 'Custom Description',
            url: 'http://custom.url',
            ogImage: 'http://custom.image',
            keywords: ['custom', 'keywords'],
            author: 'Custom Author',
            favicon: '/custom-favicon.ico',
            icon: '/custom-icon.png',
            twitterCreator: '@custom_creator'
        };
        (0, react_2.render)(react_1.default.createElement(MetaContext_1.MetaProvider, { defaults: customValues },
            react_1.default.createElement(TestComponent_1.default, null)));
        expect(react_2.screen.getByTestId('title')).toHaveTextContent('Custom Title');
        expect(react_2.screen.getByTestId('description')).toHaveTextContent('Custom Description');
        expect(react_2.screen.getByTestId('url')).toHaveTextContent('http://custom.url');
        expect(react_2.screen.getByTestId('ogImage')).toHaveTextContent('http://custom.image');
        expect(react_2.screen.getByTestId('keywords')).toHaveTextContent('custom, keywords');
        expect(react_2.screen.getByTestId('author')).toHaveTextContent('Custom Author');
        expect(react_2.screen.getByTestId('favicon')).toHaveTextContent('/custom-favicon.ico');
        expect(react_2.screen.getByTestId('icon')).toHaveTextContent('/custom-icon.png');
        expect(react_2.screen.getByTestId('twitterCreator')).toHaveTextContent('@custom_creator');
    });
});
