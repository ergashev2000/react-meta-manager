"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const MetaContext_1 = require("../contexts/MetaContext");
const MetaManager = ({ title, description, url, ogImage, keywords = [], author, favicon, icon, themeColor, }) => {
    const { title: defaultTitle, description: defaultDescription, url: defaultUrl, ogImage: defaultOgImage, keywords: defaultKeywords, author: defaultAuthor, favicon: defaultFavicon, icon: defaultIcon, twitterCreator: defaultTwitterCreator, } = (0, MetaContext_1.useMetaContext)();
    (0, react_1.useEffect)(() => {
        if (title) {
            document.title = title;
        }
        const metaDescription = document.querySelector('meta[name="description"]');
        if (description) {
            if (metaDescription) {
                metaDescription.content = description;
            }
            else {
                const metaTag = document.createElement('meta');
                metaTag.name = "description";
                metaTag.content = description;
                document.head.appendChild(metaTag);
            }
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (keywords.length > 0) {
            if (metaKeywords) {
                metaKeywords.content = keywords.join(', ');
            }
            else {
                const keywordsTag = document.createElement('meta');
                keywordsTag.name = "keywords";
                keywordsTag.content = keywords.join(', ');
                document.head.appendChild(keywordsTag);
            }
        }
        const metaAuthor = document.querySelector('meta[name="author"]');
        if (author) {
            if (metaAuthor) {
                metaAuthor.content = author;
            }
            else {
                const authorTag = document.createElement('meta');
                authorTag.name = "author";
                authorTag.content = author;
                document.head.appendChild(authorTag);
            }
        }
        const ogTags = {
            'og:title': title || defaultTitle,
            'og:description': description || defaultDescription,
            'og:url': url || defaultUrl,
            'og:image': ogImage || defaultOgImage,
        };
        Object.entries(ogTags).forEach(([property, content]) => {
            if (content) {
                const metaTag = document.querySelector(`meta[property="${property}"]`);
                if (metaTag) {
                    metaTag.content = content;
                }
                else {
                    const newTag = document.createElement('meta');
                    newTag.setAttribute('property', property);
                    newTag.content = content;
                    document.head.appendChild(newTag);
                }
            }
        });
        if (url) {
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.href = url;
            }
            else {
                const linkTag = document.createElement('link');
                linkTag.setAttribute('rel', 'canonical');
                linkTag.href = url;
                document.head.appendChild(linkTag);
            }
        }
        if (favicon) {
            const faviconLink = document.querySelector('link[rel="icon"]');
            if (faviconLink) {
                faviconLink.href = favicon;
            }
            else {
                const faviconTag = document.createElement('link');
                faviconTag.setAttribute('rel', 'icon');
                faviconTag.href = favicon;
                document.head.appendChild(faviconTag);
            }
        }
        if (icon) {
            const iconLink = document.querySelector('link[rel="icon"]');
            if (iconLink) {
                iconLink.href = icon;
            }
            else {
                const iconTag = document.createElement('link');
                iconTag.setAttribute('rel', 'icon');
                iconTag.href = icon;
                document.head.appendChild(iconTag);
            }
        }
        if (themeColor) {
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) {
                themeColorMeta.content = themeColor;
            }
            else {
                const themeColorTag = document.createElement('meta');
                themeColorTag.name = 'theme-color';
                themeColorTag.content = themeColor;
                document.head.appendChild(themeColorTag);
            }
        }
    }, [title, description, url, ogImage, keywords, author, favicon, icon, themeColor,
        defaultTitle, defaultDescription, defaultUrl, defaultOgImage, defaultKeywords,
        defaultAuthor, defaultFavicon, defaultIcon]);
    return null;
};
exports.default = MetaManager;
