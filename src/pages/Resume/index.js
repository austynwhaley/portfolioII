import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useRef} from 'react';
import '../Resume/style.css';
import Button from 'react-bootstrap/Button';


const Resume = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);
  const lists = [
    {id: 1, title: 'HTML/CSS', variant: 'warning' },
    {id: 2, title: 'Javascript', variant: 'warning'},
    {id: 3, title: 'jQuery', variant: 'dark'},
    {id: 4, title: 'React.js', variant: 'warning'},
    {id: 5, title: 'Node.js', variant: 'warning'},
    {id: 6, title: 'Express/npm', variant: 'warning'},
    {id: 7, title: 'SQL', variant: 'warning'},
    {id: 8, title: 'MongoDB', variant: 'dark'},
    {id: 9, title: 'Sequelize', variant: 'warning'},
    {id: 10, title: 'Microsoft SQL', variant: 'warning'},
    {id: 11, title: 'Vue.js', variant: 'dark'},
    {id: 12, title: 'C++', variant: 'dark'},
    {id: 13, title: 'C/C#', variant: 'dark'},
    {id: 14, title: 'Docker', variant: 'warning'},
    {id: 15, title: 'Apache', variant: 'dark'},
    {id: 16, title: 'Git', variant: 'warning'},
    {id: 17, title: 'VS/VS Code', variant: 'warning'},
    {id: 18, title: 'DBeaver', variant: 'warning'},
    {id: 19, title: 'AWS', variant: 'warning'},
    {id: 20, title: 'Typescript', variant: 'warning'},
    {id: 21, title: 'PHP', variant: 'dark'},
    {id: 22, title: 'Heroku', variant: 'dark'},
    {id: 23, title: 'JSX', variant: 'warning'},
    {id: 24, title: "Next.js", variant: 'dark'},
    {id: 25, title: "Unreal Engine", variant: 'dark'},
    {id: 26, title: "Unity", variant: 'dark'},
    {id: 27, title: "Solidity", variant: 'dark'},
    {id: 28, title: 'GraphQL', variant: 'warning'},
  ]

  const handleClick = () => {
    setShow(!show);
}


return(
    <div className='container d-flex justify-content-lg-center'>
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
                    <p>I am a dedicated and adaptable employee who successfully handles fast paced work environments.</p>
                    <p>Proven willingness to take on any task to support the team and help the company succeed</p>
                    <p>Offers strong time management and problem solving abilities</p>
                </div>
                <hr/>
                <div className='skillz'>
                    <h5>Skills</h5>
                    <div className='skOption'>
                        {lists.map((list) => (
                            <Button
                            key={list.id}
                            ref={target}
                            onClick={() => {handleClick(list)}}
                            variant = {list.variant}
                            className='custom'
                            >
                            {list.title}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className='techDesc'>
                    <Button className='customDesc' variant='warning' ref={target} onClick={() => setShow(!show)}>The highlighted technologies are what I'm using currently as a tech stack</Button>
                </div>
                <hr/>
                <div className='xpCont'>
                    <h5>Experience</h5>
                    <div className='job1'>
                        <h6>Fischer Homes <span className='jobLength'>July 2022-April 2024 </span>Software Engineer</h6>
                        <p className='jobDesc'> - Designed, developed and tested applications in alignment with company coding and quality standards.</p>
                        <p className='jobDesc'> - Conducted robust unit testing to verify deliverables match design requirements.</p>
                        <p className='jobDesc'> - Documented project-related expertise to build a knowledge base for implementations.</p>
                        <p className='jobDesc'> - Built product deliverables according to specifications and escalated technical design or specification issues.</p>
                        <p className='jobDesc'> - Developed data migration and integration processes to legacy systems using identified development tools and technologies.</p>
                        <p className='jobDesc'> - Developed moderately complex code based on business requirements or user stories.</p>
                        <p className='jobDesc'> - Met project specifications with continuous oversight of software system installations and ongoing operation.</p>
                    </div>
                    <div className='job2'>
                        <h6>LiveShopper Sassie <span className='jobLength'>August 2021-July 2022 </span>IT/Support</h6>
                        <p className='jobDesc'> - Created, maintained, and updated resource knowledge database for application issues mainly using PHP and SQL.</p>
                        <p className='jobDesc'> - Identified opportunities to improve services through use of new products and technologies.</p>
                        <p className='jobDesc'> - Managed multiple IT software projects simultaneously with correct technology resources and team involvement.</p>
                        <p className='jobDesc'> - Worked in conjunction with IT team members on project integration and implementation with related testing.</p>
                        <p className='jobDesc'> - Kept up to date on web developments and trends</p>
                    </div>
                    <div className='job3'>
                        <h6>Tri-County Furniture Restoration <span className='jobLength'>October 2015-August 2021 </span>Woodworker</h6>
                        <p className='jobDesc'> - Trimmed, sanded, and scraped surfaces and joints to prepare articles for finishing with precision.</p>
                        <p className='jobDesc'> - Installed hardware such as hinges, handles, catches, or drawer pulls, using hand tools.</p>
                        <p className='jobDesc'> - Set up and operate machines, including power saws, jointers, mortisers, tenoners, molders, and shapers.</p>
                        <p className='jobDesc'> - Satisfied customers consistently, walking each through entire processes and quickly resolving any problems.</p>
                        <p className='jobDesc'> - Completed all tasks promptly and with minimal oversight.</p>
                    </div>
                </div>
                <hr/>
                <div className='eduCont'>
                    <h5>Education</h5>
                    <div className='schoolz'>
                        <div className='school1'>
                            <h6>The Ohio State University <span className='jobLength'>April 2021</span></h6>
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
                <a href="/Resume-04-16.pdf" download>
                    Download Resume
                </a>
            </Button>
        </div>
    </div>
)

};

export default Resume;