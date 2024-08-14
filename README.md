# React Meta Manager

React Meta Manager is a React library designed to simplify the management of SEO and meta information for your web applications. It allows you to easily manage and integrate SEO meta tags and Open Graph data.

## Features

- **SEO Management**: Easily add SEO meta tags and Open Graph data to your web pages.
- **Easy Integration**: Quickly set up and integrate with React components.
- **Customizable**: Flexible options for updating and configuring meta information.
- **Context API Support**: Manage default meta values using the Context API for consistent SEO across your app.

## Installation

Install via NPM:

```bash
npm install react-meta-manager
```

## Usage

To use `ReactMetaManager` in your React application, import and configure the component as follows:

```tsx
import React from 'react';
import ReactMetaManager from 'react-meta-manager';

const App: React.FC = () => {
  return (
    <>
      <ReactMetaManager
        title="Page Title"
        description="A brief description of the page content."
        url="https://example.com"
        ogImage="/path-to-your-og-image.png"
        keywords={['seo', 'react', 'meta']}
        author="Islomjon Ergashev"
      />
      <h1>Hello, World!</h1>
    </>
  );
};

export default App;
```

## Configuration

The `ReactMetaManager` component accepts the following props:

- **title** (`string`): The title of the page.
- **description** (`string`): A brief description of the page content.
- **url** (`string`): The canonical URL of the page.
- **ogImage** (`string`, optional): URL to the Open Graph image. Defaults to `/default-og-image.png`.
- **keywords** (`string[]`, optional): An array of keywords relevant to the page. Defaults to an empty array.
- **author** (`string`, optional): The name or company of the author. Defaults to "Your Name or Company".

### MetaProvider and MetaContext

For managing default meta values across your application, use the `MetaProvider` and `MetaContext`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { MetaProvider } from 'react-meta-manager';
import App from './App';

const defaultMeta = {
  title: 'Default Title',
  description: 'Default description for your app.',
  url: 'https://default-url.com',
  ogImage: '/default-og-image.png',
  keywords: ['default', 'keywords'],
  author: 'Default Author',
};

ReactDOM.render(
  <MetaProvider defaults={defaultMeta}>
    <App />
  </MetaProvider>,
  document.getElementById('root')
);
```
## Testing
To run tests for react-meta-manager, use:

```bash
npm test
```
Ensure you have the required testing libraries installed:

- **@testing-library/react**
- **jest**
- **ts-jest**


## Contributing

Contributions to React Meta Manager are welcome! You can contribute by:
- **Reporting Issues**: Submit issues to the [issue tracker](https://github.com/ergashev2000/react-meta-manager/issues).
- **Submitting Pull Requests**: Create pull requests for bug fixes, features, or improvements.
- **Reviewing**: Provide feedback and review others' contributions.

## License

React Meta Manager is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for more details.