export type OnOffPropsType = {
		on: boolean
		setOn: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

		const onStyle = {
				display: "inline-block",
				width: "30px",
				height: "20px",
				border: "1px solid black",
				padding: "2px",
				backgroundColor: props.on ? "green" : "white"
		}
		const offStyle = {
				display: "inline-block",
				width: "30px",
				height: "20px",
				border: "1px solid black",
				padding: "2px",
				backgroundColor: props.on ? "white" : "red"
		}
		const indicatorStyle = {
				display: "inline-block",
				width: "10px",
				height: "10px",
				borderRadius: "5px",
				border: "1px solid black",
				marginLeft: "5px",
				backgroundColor: props.on ? "green" : "red"
		}

		return (
				<div>
						<div style={onStyle} onClick={() => {
								props.setOn(true)
						}}>On
						</div>
						<div style={offStyle} onClick={() => {
								props.setOn(false)
						}}>Off
						</div>
						<div style={indicatorStyle}></div>
				</div>
		)
}