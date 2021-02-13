import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Landingpage extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
							alt="Avatar"
							className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Full Stack Developer</h1>
							<hr />
							<p>
								HTML/CSS | BootStrap | JavaScript | React | NodeJS | Express |
								MongoDB
							</p>
							<div className="social-links">
								<a
									href="http://google.com"
									rel="noopenner noreferrer"
									target="_blank"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								<a
									href="http://google.com"
									rel="noopenner noreferrer"
									target="_blank"
								>
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
								<a
									href="http://google.com"
									rel="noopenner noreferrer"
									target="_blank"
								>
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landingpage;
