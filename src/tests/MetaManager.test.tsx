import React from 'react';
import { render, screen } from '@testing-library/react';
import { MetaProvider } from '../contexts/MetaContext';
import TestComponent from './TestComponent';

describe('MetaProvider', () => {
  it('provides default values to context', () => {
    render(
      <MetaProvider>
        <TestComponent />
      </MetaProvider>
    );

    expect(screen.getByTestId('title')).toHaveTextContent('');
    expect(screen.getByTestId('description')).toHaveTextContent('');
    expect(screen.getByTestId('url')).toHaveTextContent('');
    expect(screen.getByTestId('ogImage')).toHaveTextContent('');
    expect(screen.getByTestId('keywords')).toHaveTextContent('');
    expect(screen.getByTestId('author')).toHaveTextContent('');
    expect(screen.getByTestId('favicon')).toHaveTextContent('');
    expect(screen.getByTestId('icon')).toHaveTextContent('');
    expect(screen.getByTestId('twitterCreator')).toHaveTextContent('');
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

    render(
      <MetaProvider defaults={customValues}>
        <TestComponent />
      </MetaProvider>
    );

    expect(screen.getByTestId('title')).toHaveTextContent('Custom Title');
    expect(screen.getByTestId('description')).toHaveTextContent('Custom Description');
    expect(screen.getByTestId('url')).toHaveTextContent('http://custom.url');
    expect(screen.getByTestId('ogImage')).toHaveTextContent('http://custom.image');
    expect(screen.getByTestId('keywords')).toHaveTextContent('custom, keywords');
    expect(screen.getByTestId('author')).toHaveTextContent('Custom Author');
    expect(screen.getByTestId('favicon')).toHaveTextContent('/custom-favicon.ico');
    expect(screen.getByTestId('icon')).toHaveTextContent('/custom-icon.png');
    expect(screen.getByTestId('twitterCreator')).toHaveTextContent('@custom_creator');
  });
});
