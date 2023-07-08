import React from "react";
import { Link } from "react-router-dom";

const FullPizza: React.FC = () => {
	// eslint-disable-next-line
	const [pizza, setPizza] = React.useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();

	if (!pizza) {
		return <>Loading...</>;
	}

	return (
		<div className="container">
			<img
				src={pizza.imageUrl}
				alt="pizza"
			/>
			<h2>{pizza.title}</h2>
			<h4>${pizza.price}</h4>
			<Link to="/">
				<button className="button button--outline button--add">
					<span>Back</span>
				</button>
			</Link>
		</div>
	);
};

export default FullPizza;
