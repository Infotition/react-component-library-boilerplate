module.exports = (componentName) => ({
  extension: `.test.tsx`,
  content: `import React from 'react';
import { render } from '@testing-library/react';
import ${componentName} from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

describe('Test ${componentName} Component', () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('${componentName}');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
`,
});
