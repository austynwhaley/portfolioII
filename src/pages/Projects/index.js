import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import '../Projects/style.css';
import libmaker from "../../images/IMG_2748.PNG"
import gainzz from "../../images/IMG_2749.PNG"
import movie from "../../images/IMG_2747.PNG"


const Projects = () => {

  

return(
    <div className='container d-flex justify-content-center'>
        <div className='projectsCont'>
            <h1>Projects</h1>
            <hr/>
            <div>
                <h3>Coding Bootcamp Projects</h3>
                <div className='bootProjs'>
                    <div className='prj'>
                        <img src={libmaker} alt="laptop with app on screen"/>
                    </div>
                    <div className='prj'>
                        <img src={gainzz} alt="laptop with app on screen"/>
                    </div>
                    <div className='prj'>
                        <img src={movie} alt="laptop with app on screen"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='turkModel'>
                <iframe title="Turk" height='500' width='500'  frameborder="0"  src="https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1"> </iframe>
            </div>
        </div>
    </div>
)

};

export default Projects;