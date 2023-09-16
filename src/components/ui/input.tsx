'use client';

import styled from 'styled-components';
import * as React from 'react';
import { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const _Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

export const Input = styled(_Input)`
  display: flex;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  border-width: 1px;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: transparent;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;
Input.displayName = 'Input';
