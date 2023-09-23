'use client';

import tw from 'twin.macro';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cva, VariantProps } from '@/utils/twin-macro-cva';

const buttonVariants = cva(
  tw`
    inline-flex items-center justify-center
    rounded-md text-sm font-medium ring-offset-background
    transition-colors
    focus-visible:(outline-none ring-2 ring-ring ring-offset-2)
    disabled:(pointer-events-none opacity-50)
  `,
  {
    variants: {
      variant: {
        default: tw`bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: tw`bg-destructive text-destructive-foreground hover:bg-destructive/90`,
        outline: tw`border border-input bg-background hover:bg-accent hover:text-accent-foreground`,
        secondary: tw`bg-secondary text-secondary-foreground hover:bg-secondary/80`,
        ghost: tw`hover:bg-accent hover:text-accent-foreground`,
        link: tw`text-primary underline-offset-4 hover:underline`,
      },

      size: {
        default: tw`h-10 px-4 py-2`,
        sm: tw`h-9 rounded-md px-3`,
        lg: tw`h-11 rounded-md px-8`,
        icon: tw`wh-10`,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = (React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) & {
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant, size, css, ...props }, forwardedRef) => {
    return asChild ? (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      <Slot {...props} ref={forwardedRef as React.Ref<HTMLElement>} />
    ) : (
      <button ref={forwardedRef} {...props} css={[buttonVariants({ variant, size, css })]} />
    );
  },
);
Button.displayName = 'Button';
