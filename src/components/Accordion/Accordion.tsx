import React from "react";

export type AccordionPropsType = {
		title: string
		collapsed: boolean
		/**
		 * Elements that are showed when accordion is opened (not collapsed)
		 */
		items: Array<{ title: string, value: number }>
		/**
		 * Callback that is called when title clicked
		 * @param collapsed
		 */
		onClick: (collapsed: boolean) => void
		/**
		 * optional color of header text
		 */
		color?: string
}

export function Accordion(props: AccordionPropsType) {
		console.log("Accordion rendered")
		return (
				<div>
						<AccordionTitle title={props.title} color={props.color} onClick={props.onClick}
														collapsed={props.collapsed}/>
						{!props.collapsed && <AccordionBody items={props.items}/>}
				</div>
		)
}

type AccordionTitlePropsType = {
		title: string
		collapsed: boolean
		onClick: (collapsed: boolean) => void
		color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
		console.log("AccordionTitle rendered")
		return <h3 style={{color: props.color ? props.color : "black"}}
							 onClick={() => props.onClick(!props.collapsed)}>--- {props.title} ---</h3>
}

type AccordionBodyPropsType = {
		items: Array<{ title: string, value: number }>
}

function AccordionBody(props: AccordionBodyPropsType) {
		console.log("AccordionBody rendered")
		return <ul>
				{props.items.map(user => (<li>{user.title}</li>))}
		</ul>
}