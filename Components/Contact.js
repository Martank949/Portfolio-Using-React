import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contacts extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Martin Buenrostro</h2>
						<img
							src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
							alt="Avatar"
							style={{ height: "250px" }}
						/>
						<p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
							This is the paragraph section of the contact page.
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent
										style={{ fontSize: "30px", fontFamily: "Anton" }}
									>
										<i className="fa fa-phone-square" aria-hidden="true" />
										(949) 280-8470
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent
										style={{ fontSize: "30px", fontFamily: "Anton" }}
									>
										<i className="fa fa-envelope" aria-hidden="true" />
										martinzb949@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent
										style={{ fontSize: "30px", fontFamily: "Anton" }}
									>
										<i className="fa fa-phone-square" aria-hidden="true" />
										(949) 280-8470
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contacts;
