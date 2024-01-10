import './App.css'
import MyApp from "./MyApp.tsx";
import * as stylex from '@stylexjs/stylex';
import {jadeTheme} from './theme';
import {Button} from "./primitives/button/Button.tsx";

const styles = stylex.create({
    buttonWidth: {
        width: '200px',
    },
});

function App() {
    return (
        <div {...stylex.props(jadeTheme)}>
            <h1>Vite + radix-ui</h1>
            <Button
                variant="outline"
                size="lg"
                disabled
                w={styles.buttonWidth}
            >
                New Button
            </Button>
            <MyApp/>
        </div>
    )
}

export default App
