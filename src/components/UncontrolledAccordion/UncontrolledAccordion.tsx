import React, {Dispatch, SetStateAction, useState} from "react";

type AccordionPropsType = {
		title: string
		// collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
		console.log("Accordion rendered")

		const [collapsed, setCollapsed] = useState(false)

		return (
				<div>
						<AccordionTitle title={props.title} collapsed={collapsed} setCollapsed={setCollapsed}/>
						{!collapsed && <AccordionBody/>}
				</div>
		)
}

type AccordionTitlePropsType = {
		title: string
		collapsed: boolean
		setCollapsed: Dispatch<SetStateAction<boolean>>
}

function AccordionTitle(props: AccordionTitlePropsType) {
		console.log("AccordionTitle rendered")
		return <h3 onClick={() => {
				props.setCollapsed(!props.collapsed)
		}}>--- {props.title} ---</h3>
}

function AccordionBody() {
		console.log("AccordionBody rendered")
		return <ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
		</ul>
}

export default UncontrolledAccordion