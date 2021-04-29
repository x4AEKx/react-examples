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
const onClickCallback = action("some item was clicked")

const callbackProps = {
		onClickTitle: callback,
		onClickItem: onClickCallback
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
		...callbackProps,
		title: "Menu",
		collapsed: true,
		items: [{
				title: "Dima",
				value: "1"
		}, {
				title: "Valera",
				value: "2"
		}]
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
		...callbackProps,
		title: "Users",
		collapsed: false,
		items: [{
				title: "Dima",
				value: "1"
		}, {
				title: "Valera",
				value: "2"
		}]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
		const [value, setValue] = useState<boolean>(true)
		return <Accordion {...args} collapsed={value} onClickTitle={setValue} onClickItem={(id) => {
				alert(`user with ID ${id} should be happy`)
		}}/>;
}

ModeChanging.args = {
		title: "Users",
		items: [{
				title: "Dima",
				value: "1"
		}, {
				title: "Valera",
				value: "2"
		}]
}
