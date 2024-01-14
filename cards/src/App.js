import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import SiriImage from "./images/siri.png"
import CortanaImage from "./images/cortana.png"


function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Personal Digital Assistant
                    </p>
                </div>
            </section>
            <div className='container'>
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage} 
                            description="Alexa was created by Amazon Inc."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri33" 
                            image={SiriImage}
                            description="Sir was created by Apple Inc."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage} 
                            description="Cortana was created by Microsoft Inc."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;