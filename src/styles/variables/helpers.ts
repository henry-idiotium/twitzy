/**
 * Convert `{ [key:string]: string }` object to CSS variable string and tailwind config.
 * @returns CSS variables in **string** and **tailwind config object**
 */
export function createCSSVariables<Schema extends GenericDict<string | number>>(schema: Schema) {
  const tailwindConfig: GenericDict<string> = {};

  const cssStr = Object.entries(schema).reduce((cssStr, [key, value]) => {
    const varName = getCSSVarName(key);
    supplyTailwindConfig(tailwindConfig, key, varName);
    return cssStr + `${varName}: ${value};`;
  }, '');

  return [cssStr, tailwindConfig] as const;
}

/**
 * Convert `{ [key:string]: [root, dark] }` object to tailwind config and theme CSS strings.
 * @returns CSS variables in **string** and **tailwind config object**
 */
export function createThemeCSSVariables<
  ColorSchema extends GenericDict<[root: string, dark: string]>,
>(schema: ColorSchema) {
  const tailwindConfig: GenericDict<string> = {};
  let root = '';
  let dark = '';

  for (const [key, [rootValue, darkValue]] of Object.entries(schema)) {
    const varName = getCSSVarName(key);

    supplyTailwindConfig(tailwindConfig, key, varName);

    root += `${varName}: ${rootValue};`;
    dark += `${varName}: ${darkValue};`;
  }

  return [{ root, dark }, tailwindConfig] as const;
}

/** Supply key-value config to tailwind config object. */
function supplyTailwindConfig(config: GenericDict<string>, keyName: string, cssVarName: string) {
  config[keyName] = `hsl(var(${cssVarName}) / <alpha-value>)`;
}

const cssPrefix = '--'; // e.g., --app-{key}
function getCSSVarName(key: string) {
  return `${cssPrefix}-${key}`;
}
