import React from "react";
import {Story, Meta} from "@storybook/react";
import {UncontrolledAccordion, AccordionPropsType} from "./UncontrolledAccordion";

export default {
		title: "components/UncontrolledAccordion stories",
		component: UncontrolledAccordion,
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args}/>;

export const ChangeMode = Template.bind({})
ChangeMode.args = {
		title: "Menu",
}
