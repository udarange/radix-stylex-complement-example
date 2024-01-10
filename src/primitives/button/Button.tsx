import { ComponentProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Button.styles.ts';

export type ButtonVariants =
    | 'filled'
    | 'transparent'
    | 'outline';

export type ButtonSizes = 'sm' | 'md' | 'lg';

export type ButtonProps = {
    variant?: ButtonVariants;
    size?: Partial<ButtonSizes>;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    w?: stylex.StyleXStyles<{ width?: string }>;
} & ComponentProps<'button'>;

export function Button(props: ButtonProps) {
    const {
        variant = 'filled',
        size = 'md',
        loading = false,
        disabled = false,
        w,
        ...others
    } = props;

    return (
        <button
            {...stylex.props(
                styles.base,
                styles[variant],
                size && styles[size],
                styles.w(w),
                disabled && styles.disabled
            )}
        >
            {others.children}
        </button>
    );
}
