import React, {ChangeEvent, InputHTMLAttributes, useState} from "react";
import {Meta, Story} from "@storybook/react";
export default {
		title: "components/Select",
		// component: input,
} as Meta;

const Template: Story<InputHTMLAttributes<HTMLInputElement>> = (args) => <input {...args} />;

export const ControlledSelect = () => {
		const [parentValue, setParentValue] = useState<string | undefined>("2")
		const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
				setParentValue(e.currentTarget.value)
		}

		return <select value={parentValue} onChange={onChange}>
				<option>none</option>
				<option value="1">Minsk</option>
				<option value="2">Moscow</option>
				<option value="3">Kyev</option>
		</select>
}