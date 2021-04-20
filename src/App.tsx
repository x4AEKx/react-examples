import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";

function App() {
		console.log("App rendered")
		return (
				<div>
						<OnOff/>
						<OnOff/>
						{/*<PageTitle title={"This is APP component"}/>
						<PageTitle title={"My friends"}/>
						Article 1
						<Rating value={3}/>*/}
						<UncontrolledAccordion title={"Menu"}/>
						<UncontrolledAccordion title={"Users"}/>
						<UncontrolledRating/>
						{/*<Rating value={0}/>
						<Rating value={1}/>
						<Rating value={2}/>
						<Rating value={3}/>
						<Rating value={4}/>
						<Rating value={5}/>*/}
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
