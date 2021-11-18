module.exports = (componentName) => ({
  extension: `.tsx`,
  content: `import React from 'react';
import styles from './${componentName}.module.scss';
import { ${componentName}Props } from './${componentName}.types';

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className={styles.${componentName}}>
    {foo}
  </div>
);

export default ${componentName};
`,
});
