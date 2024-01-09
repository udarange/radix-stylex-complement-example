import {Flex, Text, Button, IconButton} from '@radix-ui/themes';
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

export default function MyApp() {
    return (
        <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
            <IconButton>
                <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
        </Flex>
    );
}
