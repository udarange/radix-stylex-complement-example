import * as stylex from '@stylexjs/stylex';
import { radius, spacing, tokens } from '../../token.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

export const styles = stylex.create({
    base: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing['2'],
        color: tokens.primaryText,
        border: '2px solid transparent',
        borderRadius: radius['7'],
        fontWeight: 500,
        textDecoration: 'none',

        ':hover': {
            cursor: 'pointer',
            transition: 'all 250ms ease',
        },
    },
    filled: {
        color: {
            default: 'white',
            [DARK]: 'black',
        },
        backgroundColor: {
            default: tokens.primarySolid,
            ':hover': tokens.primarySolidHover,
            ':focus-within': tokens.primarySolidHover,
        },
    },
    outline: {
        color: {
            default: tokens.primaryText,
            ':hover': 'white',
        },
        backgroundColor: {
            default: 'transparent',
            ':hover': tokens.primarySolid,
            ':focus-within': tokens.primarySolid,
        },
        borderColor: tokens.primarySolid,
    },
    transparent: {
        color: {
            default: 'black',
            [DARK]: 'white',
        },
        backgroundColor: 'transparent',
    },
    lg: {
        fontSize: '20px',
        padding: '8px 16px',
    },
    md: {
        fontSize: '16px',
        padding: '6px 12px',
    },
    sm: {
        fontSize: '14px',
        padding: '4px 8px',
    },
    w: (width) => ({
        width,
    }),
    disabled: {
        opacity: 0.6
    }
});
