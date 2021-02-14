import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: "center" }}>
							<img
								src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
								alt="Avatar"
								style={{ height: "200px" }}
							/>
							<h2 style={{ paddingTop: "2em" }}>Martin Buenrostro</h2>
							<h4 style={{ color: "grey" }}>Programmer</h4>
							<hr
								style={{
									borderTop: "3px solid #833fb2",
									width: "80%",
								}}
							/>
							<p>This is the paragraph section of the page</p>
							<hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
							<h5>Address</h5>
							<p>Laguna Niguel, 92677</p>
							<h5>Phone</h5>
							<p>(949)280-8470</p>
							<h5>Email</h5>
							<p>martinzb949@gmail.com</p>
							<h5>Web</h5>
							<p>website.com</p>
						</div>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear={2012}
							endYear={2020}
							schoolName={"Saddleback College"}
							schoolDescription={
								"This is where you put in your school description"
							}
						/>
						<Education
							startYear={2020}
							endYear={"Current"}
							schoolName={"University of Irvine"}
							schoolDescription={
								"This is where you put in your school description"
							}
						/>
						<hr style={{ borderTop: "3px solid #e22947" }} />
						<h2>Experience</h2>
						<Experience
							startYear={2005}
							endYear={"Current"}
							jobName={"First Job"}
							jobDescription={"This is my job description"}
						/>
						<Experience
							startYear={2005}
							endYear={"Current"}
							jobName={"First Job"}
							jobDescription={"This is my job description"}
						/>
						<hr style={{ borderTop: "3px solid #e22947" }} />
						<h2>Skills</h2>
						<Skills skill="JavaScript" progress={65} />
						<Skills skill="JavaScript" progress={65} />
						<Skills skill="JavaScript" progress={65} />
						<Skills skill="JavaScript" progress={65} />
						<Skills skill="JavaScript" progress={65} />
						<Skills skill="JavaScript" progress={65} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
