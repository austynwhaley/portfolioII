const BIRTH_YEAR = 1994;
const today = new Date();
const hadBirthday = today.getMonth() > 8 || (today.getMonth() === 8 && today.getDate() >= 20);
const AGE = today.getFullYear() - BIRTH_YEAR - (hadBirthday ? 0 : 1);

export const PORTFOLIO = {
  name: "Austyn Whaley",
  location: "Bellevue, KY",
  email: "mail@austynwhaley.com",
  phone: "859-905-7745",
  age: AGE,
  links: {
    linkedin: "https://www.linkedin.com/in/austyn-whaley-a820421b5/",
    github: "https://github.com/austynwhaley",
    instagram: "https://www.instagram.com/whaleanator/",
    twitter: "https://twitter.com/whaleanator",
  },
  tagline: "Full-stack engineer. Game developer. Recovering woodworker.",
  rotators: [
    "a Full Stack Engineer",
    "a Software Engineer",
    "an Innovator",
    "a Problem Solver",
    "a Master Googler",
    "Always Moving Forward",
  ],
  summary:
    "A dedicated, adaptable engineer who tackles diverse work to support team success and drive company growth. Strong time-management and problem-solving skills. Passionate about continuous learning and new technologies.",
  focus: [
    "Full-stack product work (TypeScript, React, Node, PostgreSQL)",
    "AWS architecture — not just deployment",
    "Unity / Unreal game systems in C# and C++",
  ],
  jobs: [
    {
      company: "GE Aerospace",
      role: "Software Engineer",
      dates: "Apr 2025 — Present",
      flag: "Current",
      summary:
        "Drove development of core features from the ground up for the Software Asset Management team. Designed AWS infrastructure from scratch under strict cybersecurity standards.",
      bullets: [
        "Re-engineered primitive manual workflows into automated pipelines.",
        "Built scalable services with React, Node.js, PostgreSQL, AWS.",
        "Architected and maintained PostgreSQL schema + query optimization.",
        "Operated in a fast-paced, startup-style pod — independent, end-to-end ownership.",
      ],
      stack: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    },
    {
      company: "Treplacon Studio",
      role: "Game Engineer (Freelance)",
      dates: "May 2024 — Mar 2025",
      summary:
        "Five-person indie team building a Unity game with C# and Photon Network. Owned spawning mechanics, UI/UX logic, rigid body systems, and networked player comms.",
      bullets: [
        "Built core game systems, network-replicated gameplay, and UI.",
        "Authored assets: prefabs, FBX objects, and animations in Blender.",
        "Collaborated tightly with devs, artists, and audio engineers on perf + features.",
      ],
      stack: ["Unity", "C#", "Photon", "Blender"],
    },
    {
      company: "Fischer Homes",
      role: "Software Engineer",
      dates: "Jul 2022 — Apr 2024",
      summary:
        "Shipped product deliverables across CRM and customer-facing apps. Agile + Git, with end-to-end responsibility from design through release.",
      bullets: [
        "Built features in JavaScript, TypeScript, React, and Vue.",
        "Wrote unit tests in Jest; some Selenium automation.",
        "Built data migration / integration into legacy systems (MSSQL, GraphQL, Sequelize).",
        "Maintained AWS-hosted servers and ongoing system operation.",
        "Documented implementations in Atlassian Confluence for team reuse.",
      ],
      stack: ["TypeScript", "React", "Vue", "GraphQL", "Sequelize", "AWS"],
    },
    {
      company: "LiveShopper Sassie",
      role: "IT / Support",
      dates: "Aug 2021 — Jul 2022",
      summary:
        "Maintained the internal knowledge base and triaged application issues, primarily in PHP and SQL.",
      bullets: [
        "Identified opportunities to improve services with new products and tech.",
        "Managed multiple IT software projects concurrently.",
        "Partnered with IT on project integration and related testing.",
      ],
      stack: ["PHP", "SQL"],
    },
  ],
  education: [
    { school: "The Ohio State University", degree: "Full-Stack Coding Bootcamp Certification", date: "Apr 2021" },
    { school: "Bellevue High School", degree: "High School Diploma", date: "May 2012" },
  ],
  skills: {
    primary: [
      "TypeScript", "JavaScript", "React.js", "Node.js", "REST API", "SQL",
      "HTML/CSS", "AWS", "CI/CD", "Agile", "GitHub", "Docker", "Python",
      "VS / VS Code", "LinuxOS", "C#",
    ],
    secondary: [
      "Vue.js", "Next.js", "Tailwind", "GraphQL", "Sequelize", "MongoDB",
      "Django", "GoLang", "PHP", "C++", ".NET", "Springboot", "Java",
      "Solidity", "Jira", "Bitbucket", "Unity", "Unreal Engine", "Blender",
    ],
  },
  projects: [
    {
      id: "dark-division",
      title: "Dark Division",
      role: "Game Engineer",
      where: "Treplacon Studios",
      year: "2024–25",
      category: "Game Dev",
      featured: true,
      image: "/assets/darkdiv.png",
      imageFit: "contain",
      imageBg: "#0a0a0a",
      blurb:
        "Unity-based multiplayer game built on Photon. Owned core gameplay systems: spawning, network replication, UI/UX, and rigid-body interactions.",
      stack: ["Unity", "C#", "Photon", "Blender"],
      links: [{ label: "Video demo", href: "https://www.youtube.com/watch?v=RQkLqoK_2ow&t=3s" }],
    },
    {
      id: "amrbetz",
      title: "AMRBETZ",
      role: "Creator",
      where: "Solo",
      year: "2024",
      category: "Tool / Data",
      featured: true,
      image: "/assets/amrbetz.png",
      imageFit: "cover",
      blurb:
        "A goofy-but-functional stats engine. Python + Tweepy against the Twitter API; scrapes NFL team data and posts weekly averages to feed player-prop bet research.",
      stack: ["Python 3.11", "Tweepy", "Twitter API"],
      links: [
        { label: "Twitter", href: "https://x.com/amrbetz" },
        { label: "GitHub", href: "https://github.com/austynwhaley/amrbetz" },
      ],
    },
    {
      id: "turk",
      title: "Turk — 3D character",
      role: "Modeler",
      where: "Collab",
      year: "2024",
      category: "3D",
      featured: true,
      kind: "sketchfab",
      sketchfab:
        "https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1&ui_theme=dark",
      blurb:
        "Sculpted in ZBrush for an in-progress Unreal game. Built alongside other characters and props for the team to bring into Blueprint / C++ scripting.",
      stack: ["ZBrush", "Unreal Engine", "C++"],
      links: [],
    },
    {
      id: "ultramarine",
      title: "UltraMarine",
      role: "Solo dev",
      where: "Personal",
      year: "2023",
      category: "Game Dev",
      image: "/assets/umarine.gif",
      imageFit: "cover",
      blurb:
        "Short clip from a 2D gunner platformer riffing on Warhammer 40k. Solo build in Unity; full demo coming.",
      stack: ["Unity", "C#"],
      links: [],
    },
    {
      id: "bellevue-barbershop",
      title: "Bellevue Barbershop",
      role: "Freelance",
      where: "Client site",
      year: "2023",
      category: "Web",
      image: "/assets/bellb.png",
      imageFit: "contain",
      imageBg: "#0a0a0a",
      blurb:
        "Local shop site with an intentional Windows 98 vibe per client request. React app, deployed via GitHub Pages.",
      stack: ["React", "CSS"],
      links: [{ label: "Visit site", href: "https://austynwhaley.github.io/bellevuebarbershop/#/" }],
    },
    {
      id: "moviejamz",
      title: "MovieJamz",
      role: "Bootcamp team project",
      where: "OSU",
      year: "2021",
      category: "Web",
      image: "",
      imageFit: "contain",
      imageBg: "#0a0a0a",
      blurb:
        "Finds movies and their soundtracks via two third-party APIs, then links you off to listen.",
      stack: ["HTML/CSS", "JS", "Bulma", "Spotify API", "IMDB API"],
      links: [
        { label: "Live", href: "https://austynwhaley.github.io/moviejamz/" },
        { label: "GitHub", href: "https://github.com/austynwhaley/moviejamz/tree/main" },
      ],
    },
    {
      id: "libmaker",
      title: "LibMaker 3000",
      role: "Bootcamp project",
      where: "OSU",
      year: "2021",
      category: "Web",
      image: "",
      imageFit: "contain",
      imageBg: "#0a0a0a",
      blurb:
        "Full-stack MadLibs — templates, prompts, and saved libs. Bootcamp project 2.",
      stack: ["JS", "MongoDB", "Node", "Express", "Handlebars"],
      links: [{ label: "GitHub", href: "https://github.com/austynwhaley/make-your-madlibs" }],
    },
    {
      id: "gainzz",
      title: "Gainzz",
      role: "Bootcamp project",
      where: "OSU",
      year: "2021",
      category: "Web",
      image: "",
      imageFit: "contain",
      imageBg: "#0a0a0a",
      blurb:
        "Full-stack workout tracker. Bootcamp project 3.",
      stack: ["JS", "MySQL", "Node", "Express", "React"],
      links: [{ label: "GitHub", href: "https://github.com/austynwhaley/Gainzz" }],
    },
  ],
  bio: [
    "I'm Austyn — a full-stack engineer in Bellevue, KY, just across the river from Cincinnati.",
    "Path into tech was a little crooked. I graduated Bellevue High in 2012 and went straight into work, not school — at 18 I didn't know what I wanted to build a career on, and didn't want to take on debt chasing a guess. A friend's family company took me in and I spent five years as a woodworker, restoring antique furniture.",
    "I'd always been pulled toward computer science but lacked the confidence and guidance to commit to it. In 2020 I finally enrolled in Ohio State's Full-Stack Engineering bootcamp. Career started there.",
    "Interests span MERN / MEVN / MEAN web stacks, AI and Web3 work, machine learning, and game development in Unity and Unreal.",
    "Hard-working, dedicated, always looking for the next thing to build.",
  ],
};
