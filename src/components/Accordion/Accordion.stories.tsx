import React, {useState} from "react";
import {Story, Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
		title: "components/Accordion stories",
		component: Accordion,
		argTypes: {
				color: {
						control: "color",
						table: {
								category: "Colors"
						}
				}
		}
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

const callback = action("accordion mode change event fired")
const callbackProps = {
		onClick: callback
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
		...callbackProps,
		title: "Menu",
		collapsed: true,
		items: [
				{title: "Dima", value: 1},
				{title: "Valera", value: 2},
				{title: "Artem", value: 3},
				{title: "Viktor", value: 4},
		]
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
		...callbackProps,
		title: "Users",
		collapsed: false,
		items: [
				{title: "Dima", value: 1},
				{title: "Valera", value: 2},
				{title: "Artem", value: 3},
				{title: "Viktor", value: 4},
		]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
		const [value, setValue] = useState<boolean>(true)
		return <Accordion {...args} collapsed={value} onClick={setValue}/>;
}

ModeChanging.args = {
		title: "Users",
		items:
				[
						{title: "Dima", value: 1},
						{title: "Valera", value: 2},
						{title: "Artem", value: 3},
						{title: "Viktor", value: 4},
				],
}
