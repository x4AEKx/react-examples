import React from "react";

type ItemType = {
		title: string
		value: any
}

export type AccordionPropsType = {
		title: string
		collapsed: boolean
		/**
		 * Elements that are showed when accordion is opened (not collapsed)
		 */
		items: Array<ItemType>
		/**
		 * Callback that is called when title clicked
		 * @param collapsed
		 */
		onClickTitle: (collapsed: boolean) => void
		/**
		 * optional color of header text
		 */
		color?: string
		onClickItem: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
		console.log("Accordion rendered")
		return (
				<div>
						<AccordionTitle title={props.title} color={props.color} onClick={props.onClickTitle}
														collapsed={props.collapsed}/>
						{!props.collapsed && <AccordionBody onClickItem={props.onClickItem} items={props.items}/>}
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
		items: Array<ItemType>
		onClickItem: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
		console.log("AccordionBody rendered")
		return <ul>
				{props.items.map((item, index) => (<li onClick={() => {
				props.onClickItem(item.value)}
				} key={index}>{item.title}</li>))}
		</ul>
}