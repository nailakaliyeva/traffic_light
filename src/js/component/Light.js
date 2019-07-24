import React from "react";
export default class Light extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: ""
		};
	}
	render() {
		let redGlow = "";
		let yellowGlow = "";
		let greenGlow = "";

		if (this.state.clicked == "red") {
			redGlow = "selected";
		} else if (this.state.clicked == "yellow") {
			yellowGlow = "selected";
		} else if (this.state.clicked == "green") {
			greenGlow = "selected";
		}

		return (
			<div className="container">
				<div className="stick" />
				<div className="blackBox">
					<div
						className={"redCircle" + " " + redGlow}
						onClick={() => {
							this.setState({ clicked: "red" });
						}}
					/>

					<div
						className={"yellowCircle" + " " + yellowGlow}
						onClick={() => {
							this.setState({ clicked: "yellow" });
						}}
					/>

					<div
						className={"greenCircle" + " " + greenGlow}
						onClick={() => {
							this.setState({ clicked: "green" });
						}}
					/>
				</div>
			</div>
		);
	}
}
