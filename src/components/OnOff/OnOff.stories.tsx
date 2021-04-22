import React, {useState} from "react";
import {Story, Meta} from "@storybook/react";
import {OnOff, OnOffPropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
		title: "components/OnOff stories",
		component: OnOff,
} as Meta;

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>;

const callback = action("on or off clicked")

export const OnMode = Template.bind({})
OnMode.args = {
		on: true,
		setOn: callback
}

export const OffMode = Template.bind({})
OffMode.args = {
		on: false,
		setOn: callback
}

export const ModeChanging: Story<OnOffPropsType> = (args) => {
		const [value, setValue] = useState<boolean>(true)
		return <OnOff on={value} setOn={setValue}/>;
}
