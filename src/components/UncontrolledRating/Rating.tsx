import React, {useState} from "react";

export function UncontrolledRating() {
		console.log("Rating rendered")
		const [value, setValue] = useState(0)

		return (
				<div>
						<Star selected={value > 0}/>
						<button onClick={() => {
								setValue(1)
						}}>1
						</button>
						<Star selected={value > 1}/>
						<button onClick={() => {
								setValue(2)
						}}>2
						</button>
						<Star selected={value > 2}/>
						<button onClick={() => {
								setValue(3)
						}}>3
						</button>
						<Star selected={value > 3}/>
						<button onClick={() => {
								setValue(4)
						}}>4
						</button>
						<Star selected={value > 4}/>
						<button onClick={() => {
								setValue(5)
						}}>5
						</button>
				</div>
		)
}

type StarPropsStar = {
		selected: boolean
}

function Star(props: StarPropsStar) {
		console.log("Star rendered")
		if (props.selected) {
				return (
						<span><b>star</b> </span>
				)
		} else {
				return <span>star </span>
		}

}