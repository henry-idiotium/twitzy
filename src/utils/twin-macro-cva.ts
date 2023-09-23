import { TwStyle } from 'twin.macro';
import { CSSProp } from 'styled-components';

type StyleVariants<T> = { [Variant in keyof T]?: keyof T[Variant] };
type ConfigSchema = GenericDict<GenericDict<TwStyle>>;
type Config<T extends ConfigSchema> = {
  variants: T;
  defaultVariants?: StyleVariants<T>;
};

type ComposeArgs<T> = StyleVariants<T> & {
  css?: CSSProp;
};

/** Class Variance Authority for twin.macro. */
export function cva<const T extends ConfigSchema>(base: TwStyle, config?: Config<T>) {
  return function compose(_args?: ComposeArgs<T>) {
    const args: ComposeArgs<T> = _args ?? {};
    const twStyles = [base];

    const variantArgs = Object.keys(args);

    if (config && Object.keys(config.variants).length && variantArgs.length) {
      for (const key of variantArgs) {
        if (key === 'css') continue;
        // take argument variant if specified;
        // otherwise, uses default variant if set;
        // otherwise, get the first variant in config.
        const variant =
          args[key] ?? config.defaultVariants?.[key] ?? Object.keys(config.variants[key])[0];

        const style = config.variants[key][variant as string];
        twStyles.push(style);
      }
    }

    if (args.css) twStyles.push(...(args.css as TwStyle[]));

    return twStyles;
  };
}

export type VariantProps<Component extends AnyFn> = Partial<
  Mutable<Exclude<Parameters<Component>[0], undefined>>
>;
