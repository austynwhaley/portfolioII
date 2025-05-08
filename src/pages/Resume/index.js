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
    {id: 3, title: 'Typescript', variant: 'dark'},
    {id: 4, title: 'React.js', variant: 'warning'},
    {id: 5, title: 'Node.js', variant: 'warning'},
    {id: 6, title: 'REST API', variant: 'warning'},
    {id: 7, title: 'Jira', variant: 'dark'},
    {id: 8, title: 'MongoDB', variant: 'dark'},
    {id: 9, title: 'Sequelize', variant: 'dark'},
    {id: 10, title: 'SQL', variant: 'warning'},
    {id: 11, title: 'Vue.js', variant: 'dark'},
    {id: 12, title: 'C++', variant: 'dark'},
    {id: 13, title: 'C#', variant: 'warning'},
    {id: 14, title: 'Docker', variant: 'warning'},
    {id: 15, title: 'Bitbucket', variant: 'dark'},
    {id: 16, title: 'Github', variant: 'warning'},
    {id: 17, title: 'VS/VS Code', variant: 'warning'},
    {id: 18, title: 'Python', variant: 'dark'},
    {id: 19, title: 'Django', variant: 'dark'},
    {id: 20, title: 'GOlang', variant: 'dark'},
    {id: 21, title: 'PHP', variant: 'dark'},
    {id: 22, title: 'CI/CD', variant: 'warning'},
    {id: 23, title: 'Tailwind', variant: 'dark'},
    {id: 24, title: "Next.js", variant: 'dark'},
    {id: 25, title: 'Agile', variant: 'warning'},
    {id: 26, title: "Unreal Engine", variant: 'dark'},
    {id: 27, title: "Unity", variant: 'dark'},
    {id: 28, title: "Solidity", variant: 'dark'},
    {id: 29, title: 'GraphQL', variant: 'dark'},
    {id: 30, title: '.NET', variant: 'dark'},
    {id: 31, title: 'LinuxOS', variant: 'warning'},
    {id: 32, title: 'Blender', variant: 'dark'},
    {id: 33, title: 'Java', variant: 'dark'},
    {id: 34, title: 'AWS', variant: 'warning'},
    {id: 35, title: 'Springboot', variant: 'dark'},
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
                    <p>Bellevue, KY | (859)-905-7745 | austyn_whaley@yahoo.com</p>
                </div>
                <hr/>
                <div className='summary'>
                    <h5>Professional Summary</h5>
                    <p>A dedicated and adaptable engineer that demonstrates a strong willingness to tackle diverse tasks to support team success and drive company growth. Offers exceptional time management and problem-solving skills, consistently contributing to organizational efficiency. Passionate about continuous learning and eager to explore and implement new technologies to stay at the forefront of industry advancements.</p>
                </div>
                <hr/>
                <div className='skillz'>
                    <h5>Skills</h5>
                    <div className='techDesc'>
                        <span className='jobLength' variant='warning' ref={target} onClick={() => setShow(!show)}>The highlighted technologies are what I'm currently using day to day as a tech stack professionally and dark fields are tools I have expirence with in previous roles or use recreationally</span>
                    </div>
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
                <hr/>
                <div className='xpCont'>
                    <h5>Experience</h5>
                    <div className='job1'>
                        <h6>GE Aerospace <span className='jobLength'>April 2025-Present </span>Software Engineer</h6>
                        <p className='jobDesc'> - Drove development of core features from the ground up for the Software Asset Management team.</p>
                        <p className='jobDesc'> - Designed and implemented AWS cloud infrastructure from scratch, adhering to strict cybersecurity standards.</p>
                        <p className='jobDesc'> - Identified and reengineered primitive, manual workflows to improve automation and efficiency</p>
                        <p className='jobDesc'> - Leveraged React, Node.js, PostgreSQL, and AWS to build scalable, maintainable solutions</p>
                        <p className='jobDesc'> - Architected and maintained database structure using PostgreSQL, including schema design and query optimization</p>
                        <p className='jobDesc'> - Operated in a fast-paced, startup-style environment and exercised independent thinking, problem-solving, and initiative in day-to-day development tasks</p>

                    </div>
                    <div className='job2'>
                        <h6>Treplacon Studio [Freelance] <span className='jobLength'>May 2024-March 2025 </span>Game Engineer</h6>
                        <p className='jobDesc'> - As a member of a five-person indie development team, I have played a crucial role in building a Unity-based game using C# and Photon Network packages.</p>
                        <p className='jobDesc'> - Developed core game systems like spawning mechanics and UI/UX logic, along with rigid body systems and network based communication between players for several share game mechanics</p>
                        <p className='jobDesc'> - Collaborating closely with fellow developers, artists and audio engineers to debug and optimize performance, and implementing key game features to enhance the player experience.</p>
                        <p className='jobDesc'> - Create assets like prefabs, FBX objects and animations via Blender.</p>
                        <p className='jobDesc'> - This role has honed my Unity development skills and allowed me to contribute to a highly collaborative and innovative gaming project.</p>
                    </div>
                    <div className='job3'>
                        <h6>Fischer Homes <span className='jobLength'>July 2022-April 2024 </span>Software Engineer</h6>
                        <p className='jobDesc'> - Built product deliverables according to specifications and escalated technical design with technologies such as JavaScript, Typescript, React.js, Vue.js.</p>
                        <p className='jobDesc'> - Designed, developed and tested applications in alignment with company coding and quality standards all within the Agile framework and Git workflow.</p>
                        <p className='jobDesc'> - Conducted unit testing in development environments to verify deliverables match design requirements with Jest framework and some automation with Selenium</p>
                        <p className='jobDesc'> - Developed data migration and integration processes to legacy systems using identified development tools and technologies such as MicrosoftSQL Server, GraphQL and Sequelize</p>
                        <p className='jobDesc'> - Developed moderately complex code based on business requirements or user stories.</p>
                        <p className='jobDesc'> - Met project specifications with continuous oversight of software system installations and ongoing operation while maintaining servers hosted on AWS.</p>
                        <p className='jobDesc'> - Documented project-related expertise to build a knowledge base for implementations using Atlassian Confluence.</p>
                    </div>
                    <div className='job4'>
                        <h6>LiveShopper Sassie <span className='jobLength'>August 2021-July 2022 </span>IT/Support</h6>
                        <p className='jobDesc'> - Created, maintained, and updated resource knowledge database for application issues mainly using PHP and SQL.</p>
                        <p className='jobDesc'> - Identified opportunities to improve services through use of new products and technologies.</p>
                        <p className='jobDesc'> - Managed multiple IT software projects simultaneously with correct technology resources and team involvement.</p>
                        <p className='jobDesc'> - Worked in conjunction with IT team members on project integration and implementation with related testing.</p>
                        <p className='jobDesc'> - Kept up to date on web developments and trends</p>
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
                <a href="/Resume_8_13.pdf" download>
                    Download Resume
                </a>
            </Button>
        </div>
    </div>
)

};

export default Resume;