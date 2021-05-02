import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import {Select, SelectType} from "./Select"
import {action} from "@storybook/addon-actions";

export default {
		title: "components/Select",
		component: Select
} as Meta;

const callback = action("Value changed")

const Template: Story<SelectType> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({})
DefaultSelect.args = {
		value: "1",
		onChange: callback,
		items: [
				{value: "1", title: "Minsk"},
				{value: "2", title: "Moscow"},
				{value: "3", title: "Kiev"}
		]
}

export const WithoutValue = () => {
		const [value, setValue] = useState(null)

		return <>
				<Select value={value} onChange={setValue} items={[
						{value: "1", title: "Minsk"},
						{value: "2", title: "Moscow"},
						{value: "3", title: "Kiev"}
				]}/>
		</>
}

export const WithValue = () => {
		const [value, setValue] = useState("2")

		return <>
				<Select value={value} onChange={setValue} items={[
						{value: "1", title: "Minsk"},
						{value: "2", title: "Moscow"},
						{value: "3", title: "Kiev"}
				]}/>
		</>
}


