import React from "react";
import ProjectPage from "./Project";
import ContentBlock from "./ContentBlock";
import E0 from "./images/bach/e0.PNG";
import E0MP3 from "./images/bach/e0.mp3"
import E50 from "./images/bach/e50.PNG";
import E50MP3 from "./images/bach/e50.mp3"
import E250 from "./images/bach/e250.PNG";
import E250MP3 from "./images/bach/e250.mp3"

export default class Bach extends ProjectPage {
    sections = ["INTRO:", "MODEL:", "CONTROL:", "", "EPOCH 50:", "", "EPOCH 250:", "", "CHALLENGES:", "", "", "CONCLUSION:"];
    descriptions = [
        "Existing deep neural network architectures don't do a great job at generating musical structures that adhere to the rules of melody and harmony, have some form of learned long musical progression, or incorporate more complex musical components. For my Deep Learning final project, I worked with a few friends (Gabriela Asuncion, Sophia Chen, and Kelvin Yang) to create a model that learned from a set of classical chorales to generate music in a similar style.",
        "We used a set of Bach pieces in MIDI file format, transposed to be in C major and minor. Each piece was split by beats, and every note that was played in a beat was interpreted as a 'word' we fed into our model. The model uses a 2-layer Long Short Term Memory (LSTM) Recurrent Neural Network architecture. The general idea was that each piece could be interpreted by the model as a sentence, and each beat was a word in that sentence. In essence, the model learned to generate pieces word by word. We generated music by feeding in a short sequence of an actual piece.",
        "This is what our model was generating with no training.",
        "After no training, our model produces files whose sheet music is not only unplayable, but has no sense of key, harmonic rhythm or melody. There is no notion of melodic lines, and the notes are very jumpy from beat to beat. My music professor would call this atrocious.",
        "This is what our model was generating after 50 epochs of training.",
        "After 50 epochs of training, we see that the model has learned to get rid of notes that are very far away from the grand staff. There are still some notes that are multiple leger lines up or down, but that seems to be used in a much better context than the ones in the previous image. The score reflects a much smoother transition from beat to beat, and we see less jumpiness, which is something that music during this time period would avoid. The model has learned to chill out and not play every note possible at every beat.",
        "This is what our model was generating after 250 epochs of training.",
        "We let our model train for 250 epochs in total. The sheet music tells us that the model has learned very little about phrase and structure, but listening closely tells us that the model has really learned how to move from beat to beat without introducing dissonance.",
        "One of the challenges that we had while working on this project was making the conversion from the data we were given to useable inputs, and then reversing that conversion and turning the end results into MIDI files. This proved to be especially difficult because preprocessing data was something that was always provided to us, and having to grapple with the data structures that we need organize our data into, as well as understanding the data we were given ended up being more theoretically challenging than we had anticipated. Furthermore, the data was provided in a weird format, as it was not tokenized or set up to be ready for input into an LSTM, yet it was also not in its raw MIDI format, so we had to understand someone else's organization of this data before trying to reorganize it to fit our purposes.",
        "Another challenge that we faced was interpreting our results. It was difficult to understand what our model was producing, because every epoch actually sounded relatively similar. In the beginning, we were looking for more typical interpretations of musical phrase - we listened for passages and phrases that never showed up. The reason these phrases never showed up was because our model has no notion of general structure in a piece. As soon as we realized this and began listening for dissonances at each timestep, as well as reading the score that our model produced, we ended up with a much better understanding of what our model was learning.",
        "Perhaps the largest challenge was that at one point, our model was learning to produce nothing. We were outputing MIDI files that played nothing for 80 beats. Luckily, shuffling the inputs was enough to fix this problem, as we believe that the model wasn't built to learn one piece at a time, and due to the way our inputs were structured, shuffling the inputs allowed our model to learn the details from one timestep to the next.",
        "Overall, we were very encouraged by how well the model learned. A large setback that wasn't realized until some time into the project was the architecture that we had picked. Because a LSTM is good at generating sentences, and the validity of a word in the context of a sentences only necessitates information about the few words around it, our model was good at generating notes that made sense in the context of the few beats around it. It did not, however, learn to generate a phrase that made sense in the context of the piece. In the future, I'd like to explore using a Generative Adverserial Network as the main architecture, as well as playing with ideas like Self Attention and Convolution to help the model learn general structure."
    ];

    render() {
        return (
            <div id="project-cont">
                <div id="meta-cont">
                    <div className="title">
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
                    {this.renderInfo(0, 3)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={E0} />} />
                    <ContentBlock section="" content={
                        <audio className="project-sub-audio" controls>
                            <source src={E0MP3} type="audio/mpeg" />
                            Your browser does not support the audio element
                        </audio>
                    } />
                    {this.renderInfo(3, 5)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={E50} />} />
                    <ContentBlock section="" content={
                        <audio className="project-sub-audio" controls>
                            <source src={E50MP3} type="audio/mpeg" />
                            Your browser does not support the audio element
                        </audio>
                    } />
                    {this.renderInfo(5, 7)}
                    <ContentBlock section="" content={<img className="project-sub-img" src={E250} />} />
                    <ContentBlock section="" content={
                        <audio className="project-sub-audio" controls>
                            <source src={E250MP3} type="audio/mpeg" />
                            Your browser does not support the audio element
                        </audio>
                    } />
                    {this.renderInfo(7)}
                    <ContentBlock section="" content={
                        <div>
                            <a href="https://drive.google.com/drive/folders/11a60MSYTveC5s6QkVQa5BuRR_U_LMl6T?usp=sharing" target="_blank">Listen to other pieces our model generated</a>
                            &nbsp;or&nbsp;
                            <a href="https://github.com/yipstanley/dl_final/" target="_blank">visit the full Github project!</a>
                        </div>
                    } />
                </div>
            </div>
        )
    }
}