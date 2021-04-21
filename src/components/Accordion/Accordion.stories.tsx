import React, {useState} from "react";
import {Story, Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
		title: "Accordion stories",
		component: Accordion,
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

const callback = action("accordion mode change event fired")

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
		title: "Menu",
		collapsed: true,
		onClick: callback
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
		title: "Users",
		collapsed: false,
		onClick: callback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
		const [value, setValue] = useState<boolean>(true)
		return <Accordion title={"Users"} collapsed={value} onClick={setValue}/>;
}
