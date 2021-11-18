import React from 'react';
import { render } from '@testing-library/react';
import Headline from './Headline';
import { HeadlineProps } from './Headline.types';

describe('Test Component', () => {
  let props: HeadlineProps;

  beforeEach(() => {
    props = {
      title: 'Example headline!',
    };
  });

  const renderComponent = () => render(<Headline {...props} />);

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Headline');
    expect(component).toHaveTextContent('Example headline!');
  });
});
