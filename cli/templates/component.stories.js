module.exports = (componentName) => ({
  extension: `.stories.tsx`,
  content: `import React from 'react';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
};

export const Default = () => <${componentName} foo="I'm an example component." />;
`,
});
