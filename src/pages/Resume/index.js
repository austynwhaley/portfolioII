import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useRef} from 'react';
import '../Resume/style.css';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


const Resume = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);

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
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
                            HTML/CSS
                        </Button>
                        <Button className='custom' variant='dark' ref={target} onClick={() => setShow(!show)}>
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
            </div>
        </div>
    </div>
)

};

export default Resume;