import React from "react";

export type AccordionPropsType = {
		title: string
		collapsed: boolean
		onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
		console.log("Accordion rendered")
		return (
				<div>
						<AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
						{!props.collapsed && <AccordionBody/>}
				</div>
		)
}

type AccordionTitlePropsType = {
		title: string
		collapsed: boolean
		onClick: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
		console.log("AccordionTitle rendered")
		return <h3 onClick={() => props.onClick(!props.collapsed)}>--- {props.title} ---</h3>
}

function AccordionBody() {
		console.log("AccordionBody rendered")
		return <ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
		</ul>
}