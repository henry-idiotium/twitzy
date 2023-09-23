'use client';

import tw from 'twin.macro';
import * as React from 'react';
import { forwardRef } from 'react';

const StyledInput = tw.input`
  flex h-10 w-full px-3 py-2
  rounded-md border border-input
  bg-background text-sm ring-offset-background
  placeholder:text-muted-foreground
  file:(border-0 bg-transparent font-medium)
  focus-visible:(outline-none ring-2 ring-ring ring-offset-2)
  disabled:(cursor-not-allowed opacity-50)
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));
Input.displayName = 'Input';
