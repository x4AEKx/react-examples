import React, {ChangeEvent, InputHTMLAttributes, useRef, useState} from "react";
import {Story, Meta} from "@storybook/react";

export default {
		title: "components/input",
		// component: input,
} as Meta;

const Template: Story<InputHTMLAttributes<HTMLInputElement>> = (args) => <input {...args} />;

export const UncontrolledInput = Template.bind({});

export const TrackValueOfUncontrolledInput = () => {
		const [value, setValue] = useState("")

		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
				const actualValue = e.currentTarget.value
				setValue(actualValue)
		}

		return <><input onChange={onChange}/> - {value} </>
}

export const GetValueOfUncontrolledInput = () => {
		const [value, setValue] = useState("")
		const inputRef = useRef<HTMLInputElement>(null)

		const save = () => {
				const el = inputRef.current as HTMLInputElement
				setValue(el.value)
		}

		return <><input ref={inputRef}/>
				<button onClick={save}>save</button>
				- actual value: {value} </>
}

export const ControlledInput = () => {
		const [parentValue, setParentValue] = useState("")
		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
				setParentValue(e.currentTarget.value)
		}

		return <input value={parentValue} onChange={onChange} type="text"/>
}

export const ControlledCheckbox = () => {
		const [parentValue, setParentValue] = useState(false)
		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
				setParentValue(e.currentTarget.checked)
		}

		return <input onChange={onChange} checked={parentValue} type="checkbox"/>
}

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

export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
		value: "it-incubator"
};
