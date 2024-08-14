import React from 'react';
import { useMetaContext } from '../contexts/MetaContext';

const TestComponent: React.FC = () => {
  const context = useMetaContext();
  const keywords = context.keywords ?? [];

  return (
    <>
      <div data-testid="title">{context.title ?? ''}</div>
      <div data-testid="description">{context.description ?? ''}</div>
      <div data-testid="url">{context.url ?? ''}</div>
      <div data-testid="ogImage">{context.ogImage ?? ''}</div>
      <div data-testid="keywords">{keywords.join(', ')}</div>
      <div data-testid="author">{context.author ?? ''}</div>
      <div data-testid="favicon">{context.favicon ?? ''}</div>
      <div data-testid="icon">{context.icon ?? ''}</div>
      <div data-testid="twitterCreator">{context.twitterCreator ?? ''}</div>
    </>
  );
};

export default TestComponent;
