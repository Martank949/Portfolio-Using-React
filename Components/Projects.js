import React, { Component } from "react";
import {
	Tabs,
	Tab,
	Grid,
	Cell,
	Card,
	CardTitle,
	CardActions,
	Button,
	IconButton,
	CardMenu,
	CardText,
} from "react-mdl";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover",
						}}
					>
						Header HTML/CSS
					</CardTitle>
					<CardText>
						HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS
						HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS
						HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS HTML/CSS...
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(https://www.drupal.org/files/project-images/bootstrap-stack.png) center / cover",
						}}
					>
						Header BootStrap
					</CardTitle>
					<CardText>
						BootStrap BootStrap BootStrap BootStrap BootStrap BootStrap
						BootStrap BootStrap BootStrap BootStrap BootStrap BootStrap
						BootStrap BootStrap BootStrap BootStrap BootStrap BootStrap
						BootStrap BootStrap BootStrap BootStrap BootStrap BootStrap
						BootStrap BootStrap BootStrap BootStrap ....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/04/J.png) center / cover",
						}}
					>
						Header JavaScript
					</CardTitle>
					<CardText>
						JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript
						JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript
						JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript
						JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript
						....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover",
						}}
					>
						Header React
					</CardTitle>
					<CardText>
						React React React React React React React React React React React
						React React React React React React React React React React React
						React React React React React React React React React React React
						React React React React React React React React React React React
						React....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		} else if (this.state.activeTab === 4) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(http://blog.yavilevich.com/wp-content/uploads/2015/02/nodejs-logo.png) center / cover",
						}}
					>
						Header NodeJS
					</CardTitle>
					<CardText>
						NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS
						NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS
						NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS
						NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS NodeJS
						NodeJS NodeJS NodeJS....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		} else if (this.state.activeTab === 5) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png) center / cover",
						}}
					>
						Header ExpressJS
					</CardTitle>
					<CardText>
						ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS
						ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS
						ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS
						ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS
						ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS ExpressJS
						ExpressJS ExpressJS....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		} else if (this.state.activeTab === 6) {
			return (
				<Card shadow={5} style={{ width: "512px", margin: "auto" }}>
					<CardTitle
						style={{
							color: "#fff",
							height: "176px",
							background:
								"url(https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775) center / cover",
						}}
					>
						Header MongoDB
					</CardTitle>
					<CardText>
						MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB
						MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB
						MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB
						MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB MongoDB
						MongoDB MongoDB MongoDB MongoDB....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>GitHub</Button>
						<Button colored>Dont know yet</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{ color: "#fff" }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<h1>Projects Page</h1>
				<Tabs
					activeTab={this.state.activeTab}
					onChange={(tabId) => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab>HTML/CSS</Tab>
					<Tab>BootStrap</Tab>
					<Tab>JavaScript</Tab>
					<Tab>React</Tab>
					<Tab>NodeJS</Tab>
					<Tab>Express</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>
				<section className="projects-grid">
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
				</section>
			</div>
		);
	}
}

export default Projects;
