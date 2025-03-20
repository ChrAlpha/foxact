import { forwardRef } from 'react';

export interface TypeScriptHappyForwardRef {
  <T, P = unknown>(
    render: (props: P, ref: React.ForwardedRef<T>) => React.ReactNode | null
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null
}

/** @see https://foxact.skk.moe/typescript-happy-forward-ref */
export const typeScriptHappyForwardRef = forwardRef as TypeScriptHappyForwardRef;
/** @see https://foxact.skk.moe/typescript-happy-forward-ref */
export const typescriptHappyForwardRef = forwardRef as TypeScriptHappyForwardRef;
