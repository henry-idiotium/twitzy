const CSS_VARIABLE_PREFIX = '--'; // e.g., --app-{key}
const convertToCSSVariable = (key: string) => `${CSS_VARIABLE_PREFIX}${key}`;
const convertToTailwindColorValue = (cssVar: string) => `hsl(var(${cssVar}) / <alpha-value>)`;

type ColorThemeStyle = { dark: GenericDict<string>; root: GenericDict<string> };

/** Create theme variables and tailwind config objects. */
export function createThemeCSSVariables(
  schema: GenericDict<GenericDict<string | [root: string, dark: string]>>,
) {
  const tailwindConfig: GenericDict<GenericDict<string>> = {};
  const styles: ColorThemeStyle = { dark: {}, root: {} };

  for (const [themeName, themeConfig] of Object.entries(schema)) {
    tailwindConfig[themeName] = {};

    for (const [varName, value] of Object.entries(themeConfig)) {
      const [rootValue, darkValue] = typeof value == 'string' ? [value] : value;
      const cssVar = convertToCSSVariable(varName);

      styles.root[cssVar] = rootValue;
      darkValue && (styles.dark[cssVar] = darkValue);

      tailwindConfig[themeName][varName] = convertToTailwindColorValue(cssVar);
    }
  }

  return [styles, tailwindConfig] as const;
}
