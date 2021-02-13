import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";

export default function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header className="header-color" title="Title" scroll>
					<Navigation>
						<Link to="/">Landingpage</Link>
						<Link to="/aboutme">About Me</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/resume">Resume</Link>
					</Navigation>
				</Header>
				<Drawer title="Title">
					<Navigation>
						<Link to="/">Landingpage</Link>
						<Link to="/aboutme">About Me</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/resume">Resume</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}
