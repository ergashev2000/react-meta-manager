"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const MetaContext_1 = require("../contexts/MetaContext");
const MetaManager = ({ title, description, url, ogImage, keywords = [], author, favicon, icon, themeColor, twitterCreator, }) => {
    const { title: defaultTitle, description: defaultDescription, url: defaultUrl, ogImage: defaultOgImage, keywords: defaultKeywords = [], author: defaultAuthor, favicon: defaultFavicon, icon: defaultIcon, themeColor: defaultThemeColor, twitterCreator: defaultTwitterCreator, } = (0, MetaContext_1.useMetaContext)();
    (0, react_1.useEffect)(() => {
        document.title = title || defaultTitle || '';
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
        else if (defaultDescription) {
            if (metaDescription) {
                metaDescription.content = defaultDescription;
            }
            else {
                const metaTag = document.createElement('meta');
                metaTag.name = "description";
                metaTag.content = defaultDescription;
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
        else if (defaultKeywords.length > 0) {
            if (metaKeywords) {
                metaKeywords.content = defaultKeywords.join(', ');
            }
            else {
                const keywordsTag = document.createElement('meta');
                keywordsTag.name = "keywords";
                keywordsTag.content = defaultKeywords.join(', ');
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
        else if (defaultAuthor) {
            if (metaAuthor) {
                metaAuthor.content = defaultAuthor;
            }
            else {
                const authorTag = document.createElement('meta');
                authorTag.name = "author";
                authorTag.content = defaultAuthor;
                document.head.appendChild(authorTag);
            }
        }
        if (twitterCreator) {
            const twitterCreatorMeta = document.querySelector('meta[name="twitter:creator"]');
            if (twitterCreatorMeta) {
                twitterCreatorMeta.content = twitterCreator;
            }
            else {
                const twitterCreatorTag = document.createElement('meta');
                twitterCreatorTag.name = 'twitter:creator';
                twitterCreatorTag.content = twitterCreator;
                document.head.appendChild(twitterCreatorTag);
            }
        }
        else if (defaultTwitterCreator) {
            const twitterCreatorMeta = document.querySelector('meta[name="twitter:creator"]');
            if (twitterCreatorMeta) {
                twitterCreatorMeta.content = defaultTwitterCreator;
            }
            else {
                const twitterCreatorTag = document.createElement('meta');
                twitterCreatorTag.name = 'twitter:creator';
                twitterCreatorTag.content = defaultTwitterCreator;
                document.head.appendChild(twitterCreatorTag);
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
        else if (defaultFavicon) {
            const faviconLink = document.querySelector('link[rel="icon"]');
            if (faviconLink) {
                faviconLink.href = defaultFavicon;
            }
            else {
                const faviconTag = document.createElement('link');
                faviconTag.setAttribute('rel', 'icon');
                faviconTag.href = defaultFavicon;
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
        else if (defaultIcon) {
            const iconLink = document.querySelector('link[rel="icon"]');
            if (iconLink) {
                iconLink.href = defaultIcon;
            }
            else {
                const iconTag = document.createElement('link');
                iconTag.setAttribute('rel', 'icon');
                iconTag.href = defaultIcon;
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
        else if (defaultThemeColor) {
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) {
                themeColorMeta.content = defaultThemeColor;
            }
            else {
                const themeColorTag = document.createElement('meta');
                themeColorTag.name = 'theme-color';
                themeColorTag.content = defaultThemeColor;
                document.head.appendChild(themeColorTag);
            }
        }
    }, [
        title,
        description,
        url,
        ogImage,
        keywords,
        author,
        favicon,
        icon,
        themeColor,
        twitterCreator,
        defaultTitle,
        defaultDescription,
        defaultUrl,
        defaultOgImage,
        defaultKeywords,
        defaultAuthor,
        defaultFavicon,
        defaultIcon,
        defaultThemeColor,
        defaultTwitterCreator,
    ]);
    return null;
};
exports.default = MetaManager;
