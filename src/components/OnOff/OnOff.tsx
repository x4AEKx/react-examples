import {useState} from "react";

function OnOff() {

		const [on, setOn] = useState(false)

		const onStyle = {
				display: "inline-block",
				width: "30px",
				height: "20px",
				border: "1px solid black",
				padding: "2px",
				backgroundColor: on ? "green" : "white"
		}
		const offStyle = {
				display: "inline-block",
				width: "30px",
				height: "20px",
				border: "1px solid black",
				padding: "2px",
				backgroundColor: on ? "white" : "red"
		}
		const indicatorStyle = {
				display: "inline-block",
				width: "10px",
				height: "10px",
				borderRadius: "5px",
				border: "1px solid black",
				marginLeft: "5px",
				backgroundColor: on ? "green" : "red"
		}

		return (
				<div>
						<div style={onStyle} onClick={() => {
								setOn(true)
						}}>On
						</div>
						<div style={offStyle} onClick={() => {
								setOn(false)
						}}>Off
						</div>
						<div style={indicatorStyle}></div>
				</div>
		)
}

export default OnOff