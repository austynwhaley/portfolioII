import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useRef} from 'react';
import '../Projects/style.css';
import Button from 'react-bootstrap/Button';


const Projects = () => {

  

return(
    <div className='container'>
        <div className='projectsCont'>
            <h1>Projects</h1>
            <hr/>
            <div className='turkModel'>
                <iframe title="Turk" height='500' width='500'  frameborder="0"  src="https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1"> </iframe>
            </div>
        </div>
    </div>
)

};

export default Projects;