import * as RadioGroupComponent from '@radix-ui/react-radio-group';
import './styles.css';
import {Text} from "@radix-ui/themes";

function RadioGroup() {
    return <RadioGroupComponent.Root className="RadioGroupRoot" defaultValue="001">
        <RadioGroupComponent.Item value="001" className="RadioGroupItem" id="r1">
            <RadioGroupComponent.Indicator/>
        </RadioGroupComponent.Item>
        <label className="Label" htmlFor="r1">
            <Text>Default</Text>
        </label>
        <RadioGroupComponent.Item value="002" className="RadioGroupItem" id="r2">
            <RadioGroupComponent.Indicator/>
        </RadioGroupComponent.Item>
        <label className="Label" htmlFor="r1">
            <Text>Comfortable</Text>
        </label>
        <RadioGroupComponent.Item value="003" className="RadioGroupItem" id="r3">
            <RadioGroupComponent.Indicator/>
        </RadioGroupComponent.Item>
        <label className="Label" htmlFor="r1">
            <Text>Compact</Text>
        </label>
    </RadioGroupComponent.Root>;
}

export default RadioGroup;

