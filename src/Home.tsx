import React from 'react';
import Resume from './images/Yip.Stanley.2021.pdf'
import LinkedIn from './images/linkedin.png'
import Facebook from './images/facebook.png'
import Gmail from './images/gmail.png'
import Github from './images/github.png'
import Me from './images/me.jpg'
import './css/Home.css';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { NavigationProps } from './NavigationBar';

const identities = ["a pianist", "a graphic designer", "a student", "a son", "a low-income student",
	"a musician", "a leader", "a grandson", "a brother", "an optimist", "a coffee lover",
	"a first-generation student"];
let index = 0

export interface HomeProps extends NavigationProps {
    leaveHome: () => any;
}

@observer
export default class HomeApp extends React.Component<HomeProps> {
    @observable private _whatAmI: string | undefined;

    workClicked = () => {
        this.props.leaveHome();
        this.props.setPage("work", false);
    }

    aboutClicked = () => {
        this.props.leaveHome();
        this.props.setPage("about", false);
    }

    componentDidMount = () => {
        this.whatAmI()
    }

    getDisplay = () => {
        return { display: "grid" }
    }

    @action
    whatAmI = () => {
        if (index < identities.length - 1) {
            index++;
        }
        else {
            index = 0;
        }

        this._whatAmI = identities[index];

        setTimeout(this.whatAmI, 1000)
    }

    resumeClicked = () => {
        window.open(Resume, "_blank")
    }

    render() {
        return (
            <div id="home" style={this.getDisplay()}>
                <div className="avenir" id="hey-there">Hey there!</div>

                <div id="home-desc">
                    My name is <b style={{ color: "#FAA52D", fontWeight: 600 }}>Stanley Yip</b>.
					<br />
                    I'm a full stack developer that wants to make people's lives easier.
					<br />
                    I'm also {this._whatAmI}.
				</div>

                <div className="avenir" id="home-learn">Learn more about me</div>

                <div id="home-links-cont">
                    <div className="home-links" onClick={this.workClicked}>WORK</div>
                    <div className="home-links" onClick={this.aboutClicked}>ABOUT</div>
                    <div className="home-links" onClick={this.resumeClicked}>RESUME</div>
                </div>

                <div className="avenir" id="home-contact">Let's get in touch</div>

                <div id="home-contact-links-cont">
                    <a href="https://www.linkedin.com/in/stanley-yip/" target="blank"><img className="home-contact-link" src={LinkedIn} /></a>
                    <a href="https://github.com/yipstanley" target="blank"><img className="home-contact-link" src={Github} /></a>
                    <a href="https://www.facebook.com/stanleyyip99" target="blank"><img className="home-contact-link" src={Facebook} /></a>
                    <a href="mailto:stanley_yip@brown.edu" target="blank"><img className="home-contact-link" src={Gmail} /></a>
                </div>

                <img src={Me} id="me" />
            </div>
        );
    }
}