import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import FirstTry from './images/shithead/first-try.PNG'
import DayOne from './images/shithead/day_1.PNG'
import Gameplay from './images/shithead.PNG'

const sections = ["INTRO:", "SOCKET.IO:", "ATTEMPT 1:", "ATTEMPT 2:", "OPTIMIZATION:", "SOLUTION:", "CONCLUSION:"]
const descriptions = [
    "During my third semester of college, my friends and I became obsessed with this simple card game, where all of the players would play until there was only one person left in the game, the aptly named Shithead. I was bored over that winter break, and ended up dedicating a couple of weeks creating a web-based version of the game (with the intention that I could play it with my friends while away from school).",
    "Having just taken my first computer systems class, I was only recently introduced to any level of network programming. As a result, I had to do some research and figure out a way to create a server that clients could connect to on a browser. I knew the server needed to handle inputs from clients and distribute information to each client when the game changed, and during my research, I came across a node module named Socket.IO that happened to do a lot of the network programming work for me! This turned out to save an enormous chunk of time.",
	"My first attempt was more an exploration of Socket.IO and Node JS (having had no experience with either). I also knew that I wanted to create the clients in React, so I had to figure out how to use Socket.IO in tandem with React. Although it doesn't look like much, I was incredibly proud of having clients connect to local server that I was hosting, but quickly realized that the way I set the server up was majorly flawed for my intention, and I ended up scrapping my first attempt.",
	"My second attempt at this project was a lot more realistic. Having played around with Socket.IO and Node JS, I first started by setting up a server that clients could connect to. After that, I created a very basic interface to help me keep track of where things should be and where things will end up going. I also started by writing most of the basic functionality that the server handles, as well as the interactions for how the client interacts with the server, and how the server updates each client.",
	"After getting the basic rules of the game working, I quickly realized that I was emitting a lot of information between the server and clients, and that caused my server to start getting extremely sluggish and slow: I had to find a solution to this problem. As you can see from the image below, the player should be able to see 3 visible cards of each player, and the number of cards in the hands and face-down position of every other player.",
	"Originally, I had the client send all the cards that that client had to the server, and the server sent that all back to the players (mostly because I was lazy). Not only would that allow smart players to learn what their opponents had in their hands and face down, it also was a ton of unnecessary information to send. To remedy this, I changed it so that the clients only sent back the number of cards in their hand and face down to the client (they still sent what cards were visible), and the server relayed that information back to the clients. This way, instead of sending 10 objects representing 10 cards in someone's hands, the server only needed to send the number 10. This optimization ended up making a full game playable.",
	"Although I picked it up mostly because I wanted something fun to do over winter break and I wanted to play with my friends, I ended up learning a lot of NodeJS, React, and particularly multiplayer game design. Unfortunately, I realized (perhaps too late) that I didn't have the resources necessary to actually set this up on a server and be able to play with my friends, so I ended up somewhat giving up near the end of the project, but I certainly plan to figure out a way around it (possibly through port forwarding) and polishing up the game to look more industry standard."
]

class Shithead extends Component {
	constructor(props) {
		super(props)

		this.getDisplay = this.getDisplay.bind(this)
	}

	getDisplay() {
		if (this.props.parent.state.page.toLowerCase() === "shithead") {
			return {display: "flex"}
		}
		return {display: "none"}
	}

	renderInfo(start, end) {
		let items = [];
		for (let i = start; i < end && i < descriptions.length; i++) {
			items.push(<ContentBlock section={sections[i]} content={descriptions[i]} />)
		}
		return items;
	}

	render() {
		return (
			<div id="project-cont" style={this.getDisplay()}>
				<div id="meta-cont">
					<div id="title">
						{this.props.project.name}
					</div>
					<div id="purpose">
						{this.props.project.purpose}
					</div>
					<div id="timeline">
						{this.props.project.timeline}
					</div>
				</div>
				<div id="info-cont">
                    {this.renderInfo(0, 3)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={FirstTry} />} />
					{this.renderInfo(3, 4)}
					<ContentBlock section="" content={<img className="project-sub-img" src={DayOne} />} />
					{this.renderInfo(4, 5)}
					<ContentBlock section="" content={<img className="project-sub-img" src={Gameplay} />} />
					{this.renderInfo(5, 7)}
				</div>
			</div>
		);
	}
}


export default Shithead;