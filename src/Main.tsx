import React from "react"
import { observer } from "mobx-react"
import { observable, action, computed } from "mobx"
import Signature from './images/fam.jpg'
import NavigationBar from './NavigationBar'
import ProjectList from './ProjectList'
import DashApp from './Dash'
import DashTextSelectApp from './Dash-TextSelect'
import ThreesApp from './Threes'
import FocalPointApp from './FocalPoint'
import DashDatabaseApp from './Dash-Database'
import DashTravelogueApp from './Dash-Travelogue'
import RedesignApp from './Redesign'
import WordGuiderApp from "./WordGuider"
import IterativeApp from './Iterative'
import AboutApp from './About'
import WatsonApp from './Watson'
import BachApp from "./Bach"
import './css/App.css';
import * as Dash from './images/dash.PNG'
import Antonios from './images/antonios.PNG'
import WordGuider from "./images/word_guider.PNG"
import CanaryTech from './images/canarytech.PNG'
import Watson from './images/watson.jpg'
import Bach from "./images/bach.PNG";
import TextSelectImage from './images/textSelect.PNG'
import DatabaseImage from './images/database.PNG'
import TravelogueImage from './images/travelogue.PNG'
import Threes from './images/threes.PNG'
import FocalPoint from './images/focal_point.PNG';
import HomeApp from "./Home"

export const Projects: Project[] = [
    {
        name: "Dash", tech: "Research, C#, XAML, HCI, UIUX", purpose: "Research Project", img: Dash,
        date: 999999, timeline: "April 2018 - Present", tools: "C#, XAML, UWP"
    },
    {
        name: "Bach to the Future", tech: "Deep Learning, Tensorflow, GCP", purpose: "School Project", img: Bach,
        date: 201912, timeline: "November 2019 - December 2019", tools: "Python, Tensorflow, GCP"
    },
    { name: "WordGuider", tech: "Python, OpenCV, NumPy", purpose: "School Project", img: WordGuider, date: 201904, timeline: "April 2019 - May 2019", tools: "Python, OpenCV, NumPy" },
    { name: "Threes", tech: "React, Node JS", purpose: "Personal Project", img: Threes, date: 201812, timeline: "December 2018 - January 2019", tools: "React, Node JS" },
    { name: "Focal Point @ Brown", tech: "React, JavaScript", purpose: "Personal Project", img: FocalPoint, date: 201901, timeline: "January 26-27", tools: "React, JavaScript" },
    {
        name: "Antonio's Pizza Website Redesign", tech: "UIUX, HTML/CSS, JavaScript, Figma, Balsamiq", purpose: "School Project",
        img: Antonios, linkTo: "redesign.html", date: 201810, timeline: "October 2018", tools: "Figma, Balsamiq, HTML/CSS, JavaScript"
    },
    {
        name: "Canary Technologies", tech: "UIUX, Figma", img: CanaryTech, purpose: "School Project",
        linkTo: "iterative.html", date: 201811, timeline: "November 2018", tools: "Figma"
    },
    {
        name: "Design @ Watson Institute", tech: "Design, Adobe Illustrator, Adobe Photoshop", timeline: "September 2017 - June 2018",
        tools: "Adobe Illustrator, Adobe Photoshop", purpose: "Professional Project", img: Watson, date: 201800
    }
]

export const DashProjects: Project[] = [
    {
        name: "PDF Text Selection", date: 201810, img: TextSelectImage, timeline: "August 2018 - September 2018",
        tech: "Determining the best order of selecting text on a PDF", purpose: "Research Project"
    },
    {
        name: "PDF Database", date: 201811, img: DatabaseImage, timeline: "October 2018",
        tech: "Optimizing PDF loading through a database and caching layer", purpose: "Research Project"
    },
    {
        name: "Event Travelogue", date: 201811, img: TravelogueImage,
        tech: "Recording important actions and putting them in a travelogue", timeline: "November 2018 - Present", purpose: "Research Project"
    }
]

export enum Paths {
    Root = "/",
    Home = "/home",
    About = "about",
    Work = "work",
    Dash = "dash",
    DashPDF = "pdf%20text%20selection",
    DashDB = "pdf%20database",
    DashTravelogue = "event%20travelogue",
    Threes = "threes",
    WordGuider = "wordguider",
    FocalPoint = "focal%20point%20%40%20brown",
    Redesign = "antonio's%20pizza%20website%20redesign",
    Iterative = "canaray%20technologies",
    Watson = "design%20%40%20watson%20institute",
    Bach = "bach%20to%20the%20future"
}

const heyThere = "Hey there!"
const loading = "Getting things ready"
var i = 0;
let pathname = window.location.pathname;
var homeMover = pathname === Paths.Home || pathname === Paths.Root ? 100 : 0;

@observer
export default class Main extends React.Component {
    @observable private _page: string = pathname === Paths.Root || pathname === Paths.Home ? "index" : decodeURIComponent(pathname.slice(1));
    @observable private _coverPaneOpacity: number | undefined;
    @observable private _appOpacity: number | undefined;
    @observable private _mainLeftPad: number | undefined = pathname === Paths.Home ? 100 : pathname === Paths.Root ? undefined : 0;
    @observable private _coverPaneDisplay: string | undefined = pathname === Paths.Root ? "undefined" : "none";
    @observable private _loadingText: string = "";
    @observable private _coverText: string = "";

    @action
    setPage = (page: string, withFade: boolean) => {
        if (this._page !== page) {
            if (withFade) {
                this.fadeTo(page);
            }
            else {
                this._page = page;
            }
            return true;
        }
        return false;
    }

    @action
    goHome = () => {
        this.moveToHome();
        setTimeout(() => {
            this._page = "index";
        }, 600)
    }

    @computed
    get page() {
        return this._page;
    }

    @action
    animateStart = () => {
        if (i < heyThere.length) {
            let char = heyThere.charAt(i)
            let speed = 100;
            if (heyThere[i] == " ") {
                speed = 300;
            }
            this._coverText += char;
            i++;
            setTimeout(this.animateStart, speed)
        }
        else {
            i = 0;
            setTimeout(this.animateLoading, 500)
        }
    }

    @action
    animateLoading = () => {
        if (i < 25) {
            if (i < loading.length) {
                let char = loading.charAt(i)
                let speed = 100;
                this._loadingText += char;
                i++;
                setTimeout(this.animateLoading, speed)
            }
            else {
                let content = loading
                let val = (i - loading.length) % 4
                i++
                if (val == 0) {
                    content += ""
                }
                else if (val == 1) {
                    content += "."
                }
                else if (val == 2) {
                    content += ".."
                }
                else if (val == 3) {
                    content += "..."
                }
                this._loadingText = content;
                setTimeout(this.animateLoading, 200)
            }
        }
        else {
            this._loadingText = "";
            i = 1;
            this.removeCover()
        }
    }

    @action
    removeCover = () => {
        if (i >= 0) {
            this._coverPaneOpacity = i;
            i -= 0.1;
            setTimeout(this.removeCover, 30)
        }
        else {
            this._coverPaneDisplay = "none"
        }
    }

    @action
    fadeOut = () => {
        if (i >= 0) {
            i -= 0.05
            this._appOpacity = i;
            setTimeout(this.fadeOut, 10)
        }
    }

    @action
    fadeIn = () => {
        if (i <= 1) {
            i += 0.05
            this._appOpacity = i;
            setTimeout(this.fadeIn, 10)
        }
    }

    fadeTo = (to: string) => {
        i = 1;
        this.fadeOut()

        setTimeout(() => {
            this._page = to;
            this.fadeIn()
        }, 600)
    }

    @action
    moveToHome = () => {
        if (homeMover <= 100) {
            let fixer = (-(homeMover * homeMover) + 100 * homeMover + 100) / 2000
            this._mainLeftPad = homeMover;
            homeMover += 3 * fixer;
            setTimeout(this.moveToHome, 0.1)
        }
    }

    @action
    moveFromHome = () => {
        if (homeMover >= 0) {
            let fixer = (-(homeMover * homeMover) + 100 * homeMover + 100) / 2000
            this._mainLeftPad = homeMover;
            homeMover -= 3 * fixer;
            setTimeout(this.moveFromHome, 0.1)
        }
    }

    componentDidMount = () => {
        if (pathname === "/") {
            this.animateStart();
        }
    }

    @computed
    get navi() {
        return <NavigationBar setPage={this.setPage} goHome={this.goHome} currPage={this.page} />;
    }

    @computed
    get appContent() {
        window.scrollTo({ top: 0 })
        switch (encodeURIComponent(this._page.toLowerCase().trim())) {
            case Paths.About:
                return <AboutApp />
            case Paths.Work:
                return <ProjectList setPage={this.setPage} />
            case Paths.Dash:
                return <DashApp setPage={this.setPage} project={Projects[0]} />
            case Paths.Bach:
                return <BachApp setPage={this.setPage} project={Projects[1]} />
            case Paths.WordGuider:
                return <WordGuiderApp setPage={this.setPage} project={Projects[2]} />
            case Paths.Threes:
                return <ThreesApp setPage={this.setPage} project={Projects[3]} />
            case Paths.FocalPoint:
                return <FocalPointApp setPage={this.setPage} project={Projects[4]} />
            case Paths.Redesign:
                return <RedesignApp setPage={this.setPage} project={Projects[5]} />
            case Paths.Iterative:
                return <IterativeApp setPage={this.setPage} project={Projects[6]} />
            case Paths.Watson:
                return <WatsonApp setPage={this.setPage} project={Projects[7]} />
            case Paths.DashPDF:
                return <DashTextSelectApp setPage={this.setPage} project={DashProjects[0]} />
            case Paths.DashDB:
                return <DashDatabaseApp setPage={this.setPage} project={DashProjects[1]} />
            case Paths.DashTravelogue:
                return <DashTravelogueApp setPage={this.setPage} project={DashProjects[2]} />
        }
        return (null)
    }

    render() {
        return (
            <div id="main-cont" style={{ paddingLeft: `${this._mainLeftPad}vw` }}>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css" integrity="sha384-BTL0nVi8DnMrNdMQZG1Ww6yasK9ZGnUxL1ZWukXQ7fygA1py52yPp9W4wrR00VML" crossOrigin="anonymous"></link>
                <img id="background-image" src={Signature} style={{ display: this._page === "index" ? "initial" : "none" }} />
                <HomeApp setPage={this.setPage} goHome={this.goHome} currPage={this.page} leaveHome={this.moveFromHome} />
                <div id="app-cont" style={{ opacity: this._appOpacity }}>
                    {this.appContent}
                </div>
                {this.navi}
                <div id="cover-pane" style={{ opacity: this._coverPaneOpacity, display: this._coverPaneDisplay }}>
                    <div id="cover-hey-there">{this._coverText}</div>
                    <div id="loading">{this._loadingText}</div>
                </div>
            </div>
        )
    }
}