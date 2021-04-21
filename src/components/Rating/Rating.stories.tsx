import React, {useState} from "react";
import {Story, Meta} from "@storybook/react";
import {Rating, RatingPropsType, RatingValueType} from "./Rating";

export default {
		title: "Rating stories",
		component: Rating,
} as Meta;

export const EmptyStar: Story<RatingPropsType> = (args) => <Rating value={0} onClick={x => x}/>;

export const Rating1: Story<RatingPropsType> = (args) => <Rating value={1} onClick={x => x}/>;
export const Rating2: Story<RatingPropsType> = (args) => <Rating value={2} onClick={x => x}/>;
export const Rating3: Story<RatingPropsType> = (args) => <Rating value={3} onClick={x => x}/>;
export const Rating4: Story<RatingPropsType> = (args) => <Rating value={4} onClick={x => x}/>;
export const Rating5: Story<RatingPropsType> = (args) => <Rating value={5} onClick={x => x}/>;

export const RatingChanging: Story<RatingPropsType> = (args) => {
		const [rating, setRating] = useState<RatingValueType>(3)
		return <Rating value={rating} onClick={setRating}/>;
}