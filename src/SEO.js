"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SEO = ({ title, description, url, ogImage = '/default-og-image.png', keywords = [], author = 'Your Name or Company', }) => {
    (0, react_1.useEffect)(() => {
        document.title = title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = description;
        }
        else {
            const metaTag = document.createElement('meta');
            metaTag.name = "description";
            metaTag.content = description;
            document.head.appendChild(metaTag);
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = keywords.join(', ');
        }
        else {
            const keywordsTag = document.createElement('meta');
            keywordsTag.name = "keywords";
            keywordsTag.content = keywords.join(', ');
            document.head.appendChild(keywordsTag);
        }
        const metaAuthor = document.querySelector('meta[name="author"]');
        if (metaAuthor) {
            metaAuthor.content = author;
        }
        else {
            const authorTag = document.createElement('meta');
            authorTag.name = "author";
            authorTag.content = author;
            document.head.appendChild(authorTag);
        }
        const ogTags = {
            'og:title': title,
            'og:description': description,
            'og:url': url,
            'og:image': ogImage,
        };
        Object.entries(ogTags).forEach(([property, content]) => {
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
        });
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
    }, [title, description, url, ogImage, keywords, author]);
    return null;
};
exports.default = SEO;
