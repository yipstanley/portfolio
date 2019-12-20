import React, { Component } from 'react';
import './css/Dash.css';
import ContentBlock from './ContentBlock.jsx'
import Filtered from './images/word_guider/setup.PNG'
import Setup from './images/word_guider/no_methods.PNG'
import Comparison from './images/word_guider/comparison.PNG'
import Processed from './images/word_guider/processed.PNG'
import LatexBlock from './LatexBlock';

const sections = ["INTRO:", "SETUP:", "ATTEMPT 1:", "REVISIONS:", "TESTING:", "", "", "", "NEXT STEPS:", "", "", "CONCLUSION:", "", ""]
const descriptions = [
    "I worked on this project with my friend Tyler for our Computer Vision final. In this project, we will explore different ways of improving the process of overlaying translations onto a live video feed. This includes exploring ways of filtering the image before running an OCR package to extract the text from each frame, figuring out how to threshold what results are valid results, and then exploring how to best replace the part of the frame into the translated text. First, we have to implement something akin to Google's Word Lens, and then we will play around with different methods to make the frames capture by our camera better suited to OCR. Finally, we can measure how well different methods and combinations of methods work by comparing the results from each method to a control of no additional methods. This will allow us to learn more about how we can filter frames to make certain parts of an image more visible, as well as how to programatically determine if a result is correct.",
    "Before we began thinking about how we can make the program better, we first had to implement the basics of the program. We found an OCR library called Tesseract that allowed us to forgo implementing OCR. With a little bit of work, we were able to get a relatively basic program that puts each frame through OCR and overlay the results back onto the image. Without any image pre-processing or result post-processing, we end up with results like the screenshot captured by the image below.",
    "As the image shows, our initial results were not very promising. We aren't getting any actually accurate results, which meant that Tesseract wasn't having a fun time interpreting text from the image of (to us, obviously) text that we were feeding it. In the next step, we added basic filtering in hopes that that would make the job easier for the OCR module. We decided to start off with a median blur, an adaptive threshold (so that we ended up with only black and white images), and a bilateral filter to make text more apparent. Furthermore, we also considered the (very real and already occurring) possibility that a lot of things that weren't text could be interpreted as text. To counteract this, the first major step we took was to remove all of the results where when we stripped the text of all whitespace, the remaining string was empty. The following image shows the input and output of a corresponding pair of images. The input is what the image looked like before filtering and overlaying interpreted text and the output is what the image looks like after. As can clearly be seen, the results are not amazing, but certainly much more promising. Actual words can be picked up from the image, and the words match the approximate position of where those same words are in the original input image.",
    "From the image above, its clear that there's a lot of noise, and a lot of edges that we don't necessarily need. This lead to a lot of false positives in our testing, particularly when the video captured more than just some text. For the sake of this project, we want to only focus on black text, as that would make things a lot easier to filter out. By changing the threshold constant parameter passed into the adaptive threshold call, we were able to filter out a lot of edges that weren't necessary in the final image that we sent to the OCR package. Below is an image that has been filtered through the increased threshold. In the output image that gets sent to the OCR package, there is a lot less noise, and the text can be seen rather clearly.",
    "At this point, we defined how we could calculate correctness and accuracy. We decided on an arbitrary basis that a result was correct if both of us agreed that the result matched the actual word that was in that spot in the input image. We defined accuracy α to be measured on a single frame with the following equation:",
    "The goal of this project is to find out how we can maximize α by running a set of 10 images through our OCR process and manually counting the number of detected words that were correct. To make testing accuracy easier, we adjusted the algorithm so that we could provide it an input image rather than allowing it to take in a video feed. This allowed us to minimize the variance of which we were testing between methods.",
    "We tested the program on a set of a few input images and recorded the best, worst, and average accuracies of the following different methods of pre-processing and post-processing.",
    'We tested each method on 10 images, each of which presented slightly different challenges. We then hand-counted the number of words in each image, and what we deemed as "correct" words. A more detailed breakdown can be seen on the spreadsheet attached. The results are displayed in the table below.',
    "Having tested these methods, it's interesting how some filters that we thought would've helped our case actually ended up hurting it. For example, we believed median filtering actually ended up not doing much for most images, and hurting other images. The results do verify that if we don't tweak our adaptive thresholding, it causes more harm than it does help.",
    "Sometimes, we end up with a lower average, but the α of some images are improved. The spreadsheet attached provides much more context, but for example, often median filtering reduced the accuracy of our images, but it was the only one that was able to read in any text from the James image.",
    "It also raises interesting questions regarding how else we should pre-process text. From these results, it seems like from here, we shouldn't just keep trying to add more filters. If we had more time, we'd be interested to see how other pre-processing techniques like deskewing would have helped maximize α.",
    "Although our results weren't as promising as we would've liked them to be, this strategy of figuring out ways of improving OCR through pre-processing and post-processing is very scalable. As we come up with more methods and read more about how other people are optimizing OCR with different pre-processing and post-processing techniques, we could very easily implement and improve on those techniques and record those results in a similar fashion. Ideally, we'd like to come up with a way of having a larger data set to test on, but also be able to test without having to hand-count every result.",
    "After this project, we learned a good amount about how to think about the concepts we learned in class in a more abstract and theoretical sense. It was interesting figuring out how to employ those techniques to problems that were posed as just problems, and not as steps to solving a problem. A big part of this project was learning how to solve these problems on our own, given the toolkit that this class taught us.",
    'If we were to take this project further, we would like to do more post-processing and explore different ways of programmatically determining if a result is "correct". For example, one thing that we wanted to try was using the translate API as a way to verify that we had a proper match. We also wanted to explore how we could de-skew images and skew the resulting translation back onto the image, all of which are solutions that are worth exploring further. We would also think about ways to tackle the scalability problem that comes with our problem of scaling results.'
]

class WordGuider extends Component {
    constructor(props) {
        super(props)

        this.getDisplay = this.getDisplay.bind(this)
    }

    getDisplay() {
        if (this.props.parent.state.page.toLowerCase() === "wordguider") {
            return { display: "flex" }
        }
        return { display: "none" }
    }

    renderInfo(start, end) {
        let items = [];
        for (let i = start; i < end && i < descriptions.length; i++) {
            items.push(<ContentBlock section={sections[i]} content={descriptions[i]} />)
        }
        return items;
    }

    render() {
        let equation = `\\alpha = \\frac{\\text{\\# of correct results}}{\\text{\\# of words} + \\text{\\# of false positives}}`;
        let methods = (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <table>
                    <tr><td style={{ width: "8vw" }}><b>Control</b></td><td>No pre-processing or post-processing</td></tr>
                    <tr><td><b>Method 1</b></td><td>Removing empty matches, untweaked adaptive thresholding.</td></tr>
                    <tr><td><b>Method 2</b></td><td>Removing empty matches, tweaked adaptive thresholding.</td></tr>
                    <tr><td><b>Method 3</b></td><td>Removing empty matches, tweaked adaptive thresholding.Removing empty matches, tweaked adaptive thresholding, median filter (σ = 3)</td></tr>
                    <tr><td><b>Method 4</b></td><td>Removing empty matches, tweaked adaptive thresholding, bilateral filter</td></tr>
                    <tr><td><b>Method 5</b></td><td>Removing empty matches, tweaked adaptive thresholding, bilateral filterRemoving empty matches, tweaked adaptive thresholding, median filter (σ = 3), bilateral filter</td></tr>
                </table>
            </div>
        )
        let results = (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <table>
                    <tr><th style={{ width: "18vw" }}>Method</th><th style={{ width: "18vw" }}>Best [Picture]</th><th style={{ width: "18vw" }}>Worst [Picture]</th><th style={{ width: "18vw" }}>Average</th></tr>
                    <tr><td><b>Control</b></td><td>0.4038 [Warning]</td><td>0.0 [Many]</td><td>0.1755</td></tr>
                    <tr><td><b>1</b></td><td>0.0673 [Kabob]</td><td>0.0 [Many]</td><td>0.0087</td></tr>
                    <tr><td><b>2</b></td><td>0.9552 [Frame]</td><td>0.0 [Many]</td><td>0.3642</td></tr>
                    <tr><td><b>3</b></td><td>0.6154 [Warning]</td><td>0.0 [Sunshine]</td><td>0.2344</td></tr>
                    <tr><td><b>4</b></td><td>0.9552 [Frame]</td><td>0.0 [Many]</td><td>0.3632</td></tr>
                    <tr><td><b>5</b></td><td>0.6538 [Warning]</td><td>0.0 [Many]</td><td>0.2259</td></tr>
                </table>
            </div>
        )

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
					<div id="tools">
						Tools used: {this.props.project.tools}
					</div>
                </div>
                <div id="info-cont">
                    {this.renderInfo(0, 2)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={Setup} />} />
                    {this.renderInfo(2, 3)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={Comparison} />} />
                    <ContentBlock section="" content={<img className="project-sub-img" src={Filtered} />} />
                    {this.renderInfo(3, 4)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={Processed} />} />
                    {this.renderInfo(4, 5)}
                    <LatexBlock section="" equation={equation} />
                    {this.renderInfo(5, 7)}
                    <ContentBlock section="" content={methods} />
                    {this.renderInfo(7, 8)}
                    <ContentBlock section="" content={results} />
                    {this.renderInfo(8, 14)}
                    <ContentBlock section="" content={<div>If you're interested in seeing more, visit our <a target="_blank" href="https://github.com/yipstanley/vision_final">Github project here</a>!</div>} />
                </div>
            </div>
        );
    }
}


export default WordGuider;