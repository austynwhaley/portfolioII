import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import '../Projects/style.css';
import libmaker from "../../images/IMG_2748.PNG"
import gainzz from "../../images/IMG_2749.PNG"
import movie from "../../images/IMG_2747.PNG"
import Button from 'react-bootstrap/Button';



const Projects = () => {

return(
    <div className='container d-flex justify-content-center'>
        <div className='projectsCont'>
            <h1>Projects</h1>
            <hr/>
            <div>
                <h3>Coding Bootcamp Projects</h3>
                <div className='bootProjs '>
                <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>MovieJamz</h5>
                        <img className='prjImg rounded mx-auto d-block' src={movie} alt="laptop with app on screen"/>
                        <p className='prjDesc d-flex justify-content-center'>This application uses a two 3rd party api's to find movies and their soundtracks and gives you links to listen to the tracks</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript, MySQL, Node.js, Express, Handlebars</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://austynwhaley.github.io/moviejamz/'>
                                MovieJamz
                            </Button>
                            <Button className='prjBtn' variant='warning' href='https://github.com/austynwhaley/moviejamz/tree/main'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                    <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>LibMaker 3000</h5>
                        <img className='prjImg rounded mx-auto d-block' src={libmaker} alt="laptop with app on screen"/>
                        <p className='prjDesc d-flex justify-content-center'>This was project 2 in my bootcamp course it is a full front/back-end application that prompts templates and saves MadLibs!</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript, MySQL, Node.js, Express, Handlebars</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://makeyourmadlib.herokuapp.com/'>
                                LibMaker 3000
                            </Button>
                            <Button className='prjBtn' variant='warning' href='https://github.com/austynwhaley/make-your-madlibs'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                    <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>Gainzz</h5>
                        <img className='prjImg rounded mx-auto d-block' src={gainzz} alt="laptop with app on screen"/>
                        <p className='prjDesc d-flex justify-content-center'>Project 3 for course this is full front/back end application Gainzz is a workout tracking application</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript, MySQL, Node.js, Express, Handlebars</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://nameless-cliffs-75808.herokuapp.com/
'>
                                Gainzz
                            </Button>
                            <Button className='prjBtn' variant='warning' href='https://github.com/austynwhaley/Gainzz'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <h3>3D Modeling</h3>
            <div className='turkModel d-flex justify-content-center'>
                <iframe title="Turk" height='500' width='500'  frameborder="0"  src="https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1"> </iframe>
            </div>
        </div>
    </div>
)

};

export default Projects;