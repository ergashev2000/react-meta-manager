# React Meta Manager

React Meta Manager is a React library designed to simplify the management of SEO and meta information for your web applications. It allows you to easily manage and integrate SEO meta tags and Open Graph data.

## Features

- **SEO Management**: Easily add SEO meta tags and Open Graph data to your web pages.
- **Easy Integration**: Quickly set up and integrate with React components.
- **Customizable**: Flexible options for updating and configuring meta information.

## Installation

Install via NPM:

```bash
npm install react-meta-manager
```

## Usage

To use Meta Manager in your React application, import and configure the `ReactMetaManager` component as follows:

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

## Contributing

Contributions to Meta Manager are welcome! You can contribute by:

- Submitting issues to the [issue tracker](#).
- Creating pull requests with improvements or bug fixes.

Your input is highly appreciated and helps improve the project!

## License

React Meta Manager is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for more details.