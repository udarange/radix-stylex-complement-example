import * as stylex from '@stylexjs/stylex';
import {fontSizes, spacing} from "./token.stylex.ts";

export const styles = stylex.create({
    card: {
        marginBottom: spacing['4'],
    },
    cardBody: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: spacing['3'],
    },
    cardTitle: {
        fontSize: fontSizes.h6,
        fontWeight: 500,
    },
    cardImg: {
        width: '100%',
        height: 200,
        objectFit: 'contain',
    },
});

export default function MyApp() {
    return (
        <div {...stylex.props(styles.cardBody)}>
            <h1 {...stylex.props(styles.cardTitle)}>Hello from Radix Themes :)</h1>
            <button>Let's go</button>
{/*
            <IconButton>
                <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
*/}
        </div>
    );
}
