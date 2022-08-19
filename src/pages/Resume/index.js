import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useRef} from 'react';
import '../Resume/style.css';
import Button from 'react-bootstrap/Button';


const Resume = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [color, setColor] = useState('dark')

  const handleClick = () => {
    setShow(!show);
    (color === 'dark' ? setColor('warning') : setColor('dark'))
}


return(
    <div className='container'>
        <div className='resumeCont'>
            <h1 className='header'>Resume</h1>
            <hr/>
            <div className='resumeBody'>
                <div className='bio'>
                    <h2 className='name'>Austyn R. Whaley</h2>
                    <p>1012 Taylor Ave. Bellevue KY, 41073 | (859)-905-7745 | austyn_whaley@yahoo.com</p>
                </div>
                <hr/>
                <div className='summary'>
                    <h5>Professional Summary</h5>
                    <p>I am a deicated and adapatable employee who sucessfully handles fast paced work enviroments.</p>
                    <p>Proven willingness to take on any task to support the team and help the company succeed</p>
                    <p>Offers strong time management and problem solving abilities</p>
                </div>
                <hr/>
                <div className='skillz'>
                    <h5>Skills</h5>
                    <div className='skOption'>
                        <Button className='custom' variant={color} ref={target} onClick={handleClick}>
                            HTML/CSS
                        </Button>
                        <Button className='custom' variant={color} ref={target} onClick={() => setShow(!show)}>
                            Javascript
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            jQuery
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            React.js
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Node.js
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Express/npm
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            SQL
                        </Button>
                        <Button className='custom'variant='dark' ref={target} onClick={() => setShow(!show)}>
                            MongoDB
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Sequelize
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Vue.js
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            C++
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            C/C#
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Docker
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Apache
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Git
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            VS/VS Code
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            DBeaver
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            AWS
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            TypeScript
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            PHP
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            Heroku
                        </Button>
                    </div>
                </div>
                <hr/>
                <div className='xpCont'>
                    <h5>Experience</h5>
                    <div className='job1'>
                        <h6>Fischer Homes <span className='jobLength'>July 2022-Present </span>Applications Developer</h6>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                    </div>
                    <div className='job2'>
                        <h6>LiveShopper Sassie <span className='jobLength'>August 2021-July 2022 </span>IT/Support</h6>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                    </div>
                    <div className='job3'>
                        <h6>Tri-County Furnitre Restoration <span className='jobLength'>October 2015-August 2021 </span>Woodworker</h6>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                        <p className='jobDesc'> - lorem ipsom</p>
                    </div>
                </div>
                <hr/>
                <div className='eduCont'>
                    <h5>Education</h5>
                    <div className='schoolz'>
                        <div className='school1'>
                            <h6>The Ohio State Univerity <span className='jobLength'>April 2021</span></h6>
                            <p>Full-Stack Coding Bootcamp Certification</p>
                        </div>
                        <div className='school2'>
                            <h6>Bellevue High School <span className='jobLength'>May 2012</span></h6>
                            <p>High School Diploma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='downloadPdf'>
            <Button className='customPdf' variant='dark' ref={target} onClick={() => setShow(!show)}>
                Download Resume
            </Button>
        </div>
    </div>
)

};

export default Resume;