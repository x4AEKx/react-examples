import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
		const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
		const [accordionCollapsed, setAccordionCollapsed] = useState(true)
		const [on, setOn] = useState(false)

		return (
				<div className="App">
						{/*<UncontrolledOnOff/>*/}
						<OnOff on={on} setOn={setOn}/>
						{/*<OnOff/>*/}
						{/*<PageTitle title={"This is APP component"}/>*/}
						{/*<PageTitle title={"My friends"}/>*/}
						{/*Article 1*/}
						<Rating value={ratingValue} onClick={setRatingValue}/>
						{/*<UncontrolledAccordion title={"Menu"}/>*/}
						{/*<UncontrolledAccordion title={"Users"}/>*/}
						<UncontrolledRating/>
						<Accordion title={"Menu"} onClickTitle={setAccordionCollapsed} collapsed={accordionCollapsed} onClickItem={(id) => {
								alert(`user with ID ${id} should be happy`)
						}}
											 items={[{
													 title: "Dima",
													 value: "1"
											 }, {
													 title: "Valera",
													 value: "2"
											 }]}/>
						{/*<Rating value={3}/>*/}
				</div>
		);
}

type PageTitlePropsType = {
		title: string
}

function PageTitle(props: PageTitlePropsType) {
		console.log("PageTitle rendered")
		return <h1>{props.title}</h1>
}

export default App;
