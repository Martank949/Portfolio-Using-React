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
						Simple Page Using HTML/CSS
					</CardTitle>
					<CardText>
						All of our subsequent work will build on this initial starting
						point. The file suffix `.html` refers to **HTML**, or **Hypertext
						Markup Language**. HTML allows us to format webpages and text in a
						similar way to how a word processor formats documents and the text
						inside them. However, the biggest difference between HTML and a word
						processor is the ability to link between any document that's on the
						web, anywhere in the world. This is the "hypertext" in HTML....
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
						Profile Using BootStrap
					</CardTitle>
					<CardText>
						CSS frameworks allow us to quickly style a web application so we can
						focus on **bootstrapping** it (i.e., building and deploying the
						business logic). Most CSS frameworks handle the more challenging
						aspects of CSS for us, such as floats and media queries. Another
						benefit of using CSS frameworks is that it ensures consistency
						across applications. Depending on your career trajectory, you may
						find yourself maintaining multiple web applications and, as you
						learned in the previous unit, CSS can get unruly very quickly. As
						applications scale, being able to easily maintain and organize your
						codebase becomes very important.....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>
							<a
								target="_blank"
								href="https://github.com/Martank949/Personal-Porfolio"
							>
								GitHub
							</a>
						</Button>
						<Button colored>
							<a
								target="_blank"
								href="https://github.com/Martank949/Personal-Porfolio/blob/master/README.md"
							>
								How it Works!
							</a>
						</Button>
						<Button colored>
							<a
								target="_blank"
								href="https://martank949.github.io/Personal-Porfolio/"
							>
								Live Demo
							</a>
						</Button>
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
						Simple Calendar Using JavaScript
					</CardTitle>
					<CardText>
						In order for our web applications to be interactive, we need a way
						to respond to user actions in the browser. That's where JavaScript
						comes in. JavaScript is _the_ programming language of the web. It
						allows us to dynamically generate HTML and CSS based on
						predetermined conditions or user input. And every major browser,
						such as Firefox or Chrome, ships with a built-in JavaScript engine
						that runs our code for us......
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>
							<a
								target="_blank"
								href="https://github.com/Martank949/Homework-5"
							>
								GitHub
							</a>
						</Button>
						<Button colored>
							<a
								target="_blank"
								href="https://github.com/Martank949/Homework-5/blob/main/README.md"
							>
								How it Works!
							</a>
						</Button>
						<Button colored>
							<a
								target="_blank"
								href="https://martank949.github.io/Homework-5/"
							>
								Live Demo
							</a>
						</Button>
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
						User Directory Using React
					</CardTitle>
					<CardText>
						In 2013, the developers at Facebook released React, a library that
						addresses this performance issue using the concept of a _virtual
						DOM_, an in-memory representation of the DOM that only updates nodes
						that have changed and not the entire DOM itself. In addition to
						improvements in user experience, React speeds up the development
						workflow as we can break our user interface into reusable components
						and, with the possible exception of JSX, write our components
						entirely in JavaScript without the need to learn the particular
						syntax of a template engine. React was quickly adopted by companies
						large and small and continues to gain in popularity as the library
						matures.....
					</CardText>
					<CardActions border style={{ textAlign: "center" }}>
						<Button colored>
							<a
								target="_blank"
								href="https://github.com/Martank949/User-Directory"
							>
								GitHub
							</a>
						</Button>
						<Button colored>
							<a
								target="_blank"
								href="https://github.com/Martank949/User-Directory/blob/main/README.md"
							>
								How it Works!
							</a>
						</Button>
						<Button colored>
							<a
								target="_blank"
								href="https://user-directory-martin.herokuapp.com/"
							>
								Live Demo
							</a>
						</Button>
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
						Node.js ships with what is referred to as a standard library. The
						standard library contains a number of modules that allow us to
						extend the functionality of Node.js, such as `fs`, which we will use
						to read and write files. There is also a large and robust ecosystem
						of third-party modules that you will learn how to add to
						applications to extend their functionality.....
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
						Routing is how we design our server to handle responses when a
						client makes a request at a specific endpoint, or URL. We learned
						how to make GET requests from the client-side in a previous unit.
						Now we will learn how those requests are handled on the server-side.
						Our server will _listen_ for a specific type of request at a
						specific endpoint and when it _hears_ that request, it will respond
						accordingly.....
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
						The structure of a NoSQL database is something other than a table.
						There are several different types of NoSQL databases, such as
						key-value and graph.MongoDB documents correspond to a row, or
						record, in SQL, but unlike rows, documents are analogous to JSON
						objects. You can see why MongoDB is a popular choice for Node.js
						developers!....
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
