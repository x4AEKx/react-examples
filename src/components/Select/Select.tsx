type ItemType = {
		title: string
		value: any
}

export type SelectType = {
		value: any
		onChange: (value: any) => void
		items: Array<ItemType>
}

export function Select(props: SelectType) {

		return (
				<div>
						<div>{value}</div>
						{props.items.map(i => <div>{i.title}</div>)}
				</div>
		)
}