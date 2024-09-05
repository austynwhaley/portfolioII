import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import '../Projects/style.css';
import libmaker from "../../images/IMG_2748.PNG"
import gainzz from "../../images/IMG_2749.PNG"
import movie from "../../images/IMG_2747.PNG"
import umarine from "../../images/umarine.gif"
import darkdiv from "../../images/darkdivlogo.png"
import Button from 'react-bootstrap/Button';



const Projects = () => {

return(
    <div className='container d-flex justify-content-center'>
        <div className='projectsCont'>
            <h1>Projects</h1>
            <hr/>
            <div>
                <h3>Game Dev</h3>
                <div className='prj'>
                <h5 className='prjTitle d-flex justify-content-center'>Dark Division</h5>
                    <img className='prjImg rounded mx-auto d-block img-fluid ddivision' src={darkdiv} alt="demo"/>
                    <div className='prjm'>
                        <p className='prjDesc d-flex justify-content-center'>This is a project I have been working on at Treplacon Studios</p>
                        <p className='prjDesc d-flex justify-content-center'>This is built in Unity using C# scripts and assests and animations created in Blender</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://www.youtube.com/watch?v=RQkLqoK_2ow&t=3s'>
                                Video Demo
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='prj'>
                <h5 className='prjTitle d-flex justify-content-center'>UltraMarine</h5>
                    <img className='prjImg rounded mx-auto d-block img-fluid' src={umarine} alt="gif of demo"/>
                    <div className='prjm'>
                        <p className='prjDesc d-flex justify-content-center'>Here is a small clip of a 2D gunner platformer based off of Warhammer 40k.</p>
                        <p className='prjDesc d-flex justify-content-center'>I built this solo in Unity using C# scripts</p>
                        <p className='prjDesc d-flex justify-content-center'>Full demo coming soon!!</p>
                    </div>
                </div>
                <hr/>
                <h3>3D Modeling</h3>
                <div className='turkModel d-flex justify-content-center'>
                    <iframe title="Turk" height='500' width='500'  frameborder="0"  src="https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1"> </iframe>
                </div>
                <div className='prjm'>
                        <p className='prjDesc d-flex justify-content-center'>Here is a 3D model I crafted in ZBrush, along with other assets, for a game project in Unreal Engine. His name is Turk!</p>
                        <p className='prjDesc d-flex justify-content-center'>The game is still in production, with collaboration from others. It's being built using Unreal Blueprints and C++ scripting.</p>
                    </div>
                <hr/>
                <h3>Coding Bootcamp Projects</h3>
                <div className='bootProjs '>
                <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>MovieJamz</h5>
                        <img className='prjImg rounded mx-auto d-block img-fluid' src={movie} alt="laptop with app on screen"/>
                        <p className='prjDesc d-flex justify-content-center'>This application uses a two 3rd party api's to find movies and their soundtracks and gives you links to listen to the tracks</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: HTML/CSS, Javascript, Bulma, Spotify API, IMDB API</p>
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
                        <img className='prjImg rounded mx-auto d-block img-fluid' src={libmaker} alt="laptop with app on screen"/>
                        <p className='prjDesc d-flex justify-content-center'>This was project 2 in my bootcamp course it is a full front/back-end application that prompts templates and saves MadLibs!</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript, MongoDB, Node.js, Express, Handlebars, bootstrap</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://github.com/austynwhaley/make-your-madlibs'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                    <div className='prj'>
                        <h5 className='prjTitle d-flex justify-content-center'>Gainzz</h5>
                        <img className='prjImg rounded mx-auto d-block img-fluid' src={gainzz} alt="laptop with app on screen"/>
                        <p className='prjDesc d-flex justify-content-center'>Project 3 for course this is full front/back end application Gainzz is a workout tracking application</p>
                        <p className='prjTech d-flex justify-content-center'>Tech stack: Javascript, MySQL, Node.js, Express, React.js, bootstrap</p>
                        <div className='btns d-flex justify-content-center'>
                            <Button className='prjBtn' variant='warning' href='https://github.com/austynwhaley/Gainzz'>
                                GitHub Repo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

};

export default Projects;