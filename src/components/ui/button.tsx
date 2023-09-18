import * as styled from 'styled-components';
import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { THEME } from '@/styles';

const buttonVariants = cva(
  styled.css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 2px rgba(2 6 23 1);
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  `,
  {
    variants: {
      variant: {
        default: styled.css`
          background-color: hsl(${THEME.COLORS.PRIMARY});
          color: hsl(${THEME.COLORS.PRIMARY_FOREGROUND});
          box-shadow:
            0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);

          &:hover {
            background-color: hsl(${THEME.COLORS.PRIMARY} / 0.9);
          }
        `,

        destructive: styled.css`
          background-color: hsl(${THEME.COLORS.DESTRUCTIVE});
          color: hsl(${THEME.COLORS.DESTRUCTIVE_FOREGROUND});
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

          &:hover {
            background-color: hsl(${THEME.COLORS.DESTRUCTIVE} / 0.9);
          }
        `,

        outline: styled.css`
          border-width: 1px;
          background-color: transparent;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          background-color: hsl(${THEME.COLORS.ACCENT});
          color: hsl(${THEME.COLORS.ACCENT_FOREGROUND});

          &:hover {
            background-color: hsl(${THEME.COLORS.ACCENT});
            color: hsl(${THEME.COLORS.ACCENT_FOREGROUND});
          }
        `,

        secondary: styled.css`
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          background-color: hsl(${THEME.COLORS.SECONDARY});
          color: hsl(${THEME.COLORS.SECONDARY_FOREGROUND});

          &:hover {
            background-color: hsl(${THEME.COLORS.SECONDARY} / 0.8);
          }
        `,

        ghost: styled.css`
          &:hover {
            background-color: ${THEME.COLORS.ACCENT};
            color: ${THEME.COLORS.ACCENT_FOREGROUND};
          }
        `,

        link: styled.css`
          color: ${THEME.COLORS.PRIMARY};
          text-underline-offset: 4px;
          text-decoration-line: underline;
        `,
      },

      size: {
        default: styled.css`
          height: 36px;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
        `,
        sm: styled.css`
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          border-radius: 0.375rem;
          height: 2rem;
          font-size: 0.75rem;
          line-height: 1rem;
        `,
        lg: styled.css`
          padding-left: 2rem;
          padding-right: 2rem;
          border-radius: 0.375rem;
          height: 2.5rem;
        `,
        icon: styled.css`
          height: 36px;
          width: 36px;
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} className={buttonVariants({ variant, size, className })} {...props} />;
  },
);
Button.displayName = 'Button';
