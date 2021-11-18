/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

require('colors');
const fs = require('fs');
const templates = require('./templates');

const type = process.argv[2];
const componentName = process.argv[3];

if (!type || !['element', 'layout', 'module', 'template'].includes(type)) {
  console.error('Please supply a valid type name'.red);
  console.error(
    '$ npm run generate <element|layout|module|template> <name>'.red
  );
  process.exit(1);
}

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  console.error(
    '$ npm run generate <element|layout|module|template> <name>'.red
  );
  process.exit(1);
}

console.log(`Creating ${type} templates with name: ${componentName}`);

const componentDirectory = `./src/components/${type}s/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`${type} ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

fs.writeFileSync(
  `${componentDirectory}/index.ts`,
  `export { default } from './${componentName}';\n`
);

console.log(
  `Successfully created component under: ${componentDirectory.green}`
);
