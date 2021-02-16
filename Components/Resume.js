import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Image from "../images/me.JPG";

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: "center" }}>
							<img src={Image} alt="Avatar" style={{ height: "200px" }} />
							<h2 style={{ paddingTop: "2em" }}>Martin Buenrostro</h2>
							<h4 style={{ color: "grey" }}>Programmer</h4>
							<hr
								style={{
									borderTop: "3px solid #5F9EA0",
									width: "100%",
								}}
							/>
							<p>
								Skilled in Javascript full-stack web development eager to join a
								creative, problem-solving team. Ability to learn and implement
								new technologies. My skills include Javascript, HTML, CSS,
								jQuery, NodeJS, MongoDB, and MySQL. These skills were learned at
								the UCI Division of Continuing Education.
							</p>
							<hr style={{ borderTop: "3px solid #5F9EA0", width: "100%" }} />
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
							startYear={2003}
							endYear={2005}
							jobName={"Rip Curl"}
							jobDescription={"Worked in sales and warehouse"}
						/>
						<Experience
							startYear={2005}
							endYear={2015}
							jobName={"Kagan Publishing"}
							jobDescription={"Warehouse Lead and shipping specialist"}
						/>
						<Experience
							startYear={2015}
							endYear={"Current"}
							jobName={"Kagan Professional Development"}
							jobDescription={
								"Customer Service, Contract Coordinator, and Workshop Specialist"
							}
						/>
						<hr style={{ borderTop: "3px solid #e22947" }} />
						<h2>Skills</h2>
						<Skills skill="HTML/CSS" progress={75} />
						<Skills skill="BootStrap" progress={70} />
						<Skills skill="JavaScript" progress={65} />
						<Skills skill="React" progress={65} />
						<Skills skill="Web API's" progress={60} />
						<Skills skill="Third Party API's" progress={60} />
						<Skills skill="NodeJS" progress={70} />
						<Skills skill="OOP's" progress={55} />
						<Skills skill="Express" progress={65} />
						<Skills skill="MySQL" progress={55} />
						<Skills skill="ORM's" progress={60} />
						<Skills skill="MVC's" progress={55} />
						<Skills skill="MongoDB" progress={60} />
						<Skills skill="Mongoose" progress={60} />
						<Skills skill="PWA's" progress={65} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
