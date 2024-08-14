"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const MetaContext_1 = require("../contexts/MetaContext");
const MetaManager = ({ title, description, url, ogImage, keywords = [], author, favicon, icon, themeColor = '#008f68', }) => {
    const { title: defaultTitle, description: defaultDescription, url: defaultUrl, ogImage: defaultOgImage, keywords: defaultKeywords, author: defaultAuthor, favicon: defaultFavicon, icon: defaultIcon, } = (0, MetaContext_1.useMetaContext)();
    (0, react_1.useEffect)(() => {
        document.title = title || defaultTitle || '';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = description || defaultDescription || '';
        }
        else {
            const metaTag = document.createElement('meta');
            metaTag.name = "description";
            metaTag.content = description || defaultDescription || '';
            document.head.appendChild(metaTag);
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = (keywords.length ? keywords : defaultKeywords || []).join(', ');
        }
        else {
            const keywordsTag = document.createElement('meta');
            keywordsTag.name = "keywords";
            keywordsTag.content = (keywords.length ? keywords : defaultKeywords || []).join(', ');
            document.head.appendChild(keywordsTag);
        }
        const metaAuthor = document.querySelector('meta[name="author"]');
        if (metaAuthor) {
            metaAuthor.content = author || defaultAuthor || '';
        }
        else {
            const authorTag = document.createElement('meta');
            authorTag.name = "author";
            authorTag.content = author || defaultAuthor || '';
            document.head.appendChild(authorTag);
        }
        const ogTags = {
            'og:title': title || defaultTitle,
            'og:description': description || defaultDescription,
            'og:url': url || defaultUrl,
            'og:image': ogImage || defaultOgImage,
        };
        Object.entries(ogTags).forEach(([property, content]) => {
            const metaTag = document.querySelector(`meta[property="${property}"]`);
            if (metaTag) {
                metaTag.content = content || '';
            }
            else {
                const newTag = document.createElement('meta');
                newTag.setAttribute('property', property);
                newTag.content = content || '';
                document.head.appendChild(newTag);
            }
        });
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.href = url || defaultUrl || '';
        }
        else {
            const linkTag = document.createElement('link');
            linkTag.setAttribute('rel', 'canonical');
            linkTag.href = url || defaultUrl || '';
            document.head.appendChild(linkTag);
        }
        const faviconLink = document.querySelector('link[rel="icon"]');
        if (faviconLink) {
            faviconLink.href = favicon || defaultFavicon || '/default-favicon.ico';
        }
        else {
            const faviconTag = document.createElement('link');
            faviconTag.setAttribute('rel', 'icon');
            faviconTag.href = favicon || defaultFavicon || '/default-favicon.ico';
            document.head.appendChild(faviconTag);
        }
        const iconLink = document.querySelector('link[rel="icon"]');
        if (iconLink) {
            iconLink.href = icon || defaultIcon || '/default-icon.png';
        }
        else {
            const iconTag = document.createElement('link');
            iconTag.setAttribute('rel', 'icon');
            iconTag.href = icon || defaultIcon || '/default-icon.png';
            document.head.appendChild(iconTag);
        }
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
    }, [
        title, description, url, ogImage, keywords, author,
        favicon, icon, themeColor, defaultTitle, defaultDescription,
        defaultUrl, defaultOgImage, defaultKeywords, defaultAuthor,
        defaultFavicon, defaultIcon
    ]);
    return null;
};
exports.default = MetaManager;
