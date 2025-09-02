import {IoCalendar, IoCar, IoLanguage, IoMail} from "react-icons/io5";
import {
    FaDiscord,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

// LANGUAGES
import TypeScriptLogo from "./assets/images/icons/typescript.svg";
import PHPLogo from "./assets/images/icons/php.svg";
import PythonLogo from "./assets/images/icons/python.svg";
import CLogo from "./assets/images/icons/c.svg";
import CppLogo from "./assets/images/icons/cpp.svg";
import CsLogo from "./assets/images/icons/cs.svg";
import JavaLogo from "./assets/images/icons/java.svg";
import SQLLogo from "./assets/images/icons/sql.svg";

// TECHNOLOGIES
import ReactLogo from "./assets/images/icons/react.svg";
import NodeLogo from "./assets/images/icons/nodejs.svg";
import SpringBootLogo from "./assets/images/icons/spring-boot.svg";
import BootstrapLogo from "./assets/images/icons/bootstrap.svg";
import JQueryLogo from "./assets/images/icons/jquery.svg";
import AngularLogo from "./assets/images/icons/angular.svg"
import ScssLogo from "./assets/images/icons/scss.svg";

// TOOLS
import DockerLogo from "./assets/images/icons/docker.svg";
import CPanelLogo from "./assets/images/icons/cpanel.svg";
import LinuxLogo from "./assets/images/icons/linux.svg";
import FigmaLogo from "./assets/images/icons/figma.svg";
import GitLogo from "./assets/images/icons/git.svg";
import AwsLogo from "./assets/images/icons/aws.svg";
import TerraformLogo from "./assets/images/icons/terraform.svg";

// DATABASES
import MySQLLogo from "./assets/images/icons/mysql.svg";
import PostgreSqlLogo from "./assets/images/icons/postgresql.svg";
import EventSourceLogo from "./assets/images/icons/event-source.svg"

const myStorySection = {
    name: "myStory",
    title: "my story",
    list: [
        {
            value: "Hi, I'm Leo Stričak, a dedicated student pursuing my studies at the Zagreb University of Applied Sciences (TVZ) with a keen focus on Computer Science. I am strongly interested in cybersecurity and software development.",
        },
        {
            value: "I am passionate about applying my academic knowledge in practical settings, as evidenced by my involvement in various relevant projects and activities."
        },
    ],
}

const introductionSection = {
    name: "introduction",
    title: "introduction",
    sectionFlex: "row",
    subSections: [
        {
            name: "contactInfo",
            title: "Contact info",
            list: [
                {
                    icon: <IoMail />,
                    value:"stricak.leo@gmail.com",
                    href:"mailto:stricak.leo@gmail.com"
                },
                {
                    icon: <FaLinkedin />,
                    value:"/in/leostricak22",
                    href:"https://www.linkedin.com/in/leostricak22"
                },
                {
                    icon: <FaGithub />,
                    value: "leostricak22",
                    href: "https://www.github.com/leostricak22"
                },
                {
                    icon: <FaDiscord />,
                    value: "leostricak22"
                }
            ]
        },
        {
            name: "aboutMe",
            title: "About me",
            list: [
                {
                    icon: <FaLocationDot />,
                    value: "Zagreb, Croatia"
                },
                {
                    icon: <IoCalendar />,
                    value: "November, 2004"
                },
                {
                    icon: <IoCar />,
                    value: "AM B F G"
                },
                {
                    icon: <IoLanguage />,
                    value: [
                        "Croatian - Native proficiency",
                        "English - Full professional proficiency"
                    ]
                }
            ]
        }
    ]
}

const educationSection = {
    name: "education",
    title: "education",
    sectionFlex: "column",
    list: [
        {
            value: "III. osnovna škola Čakovec",
            elaboration: [
                {value: "Middle School Diploma", style: "normal"},
                {value: "September 2011 - June 2019", style: "moreInfo"},
            ]
        },
        {
            value: "Technical school Čakovec",
            elaboration: [
                {value: "Computer Technician", style: "gold"},
                {value: "High School Diploma", style: "normal"},
                {value: "September 2019 - May 2023", style: "moreInfo"},
            ]
        },
        {
            value: "Zagreb University of Applied Sciences",
            elaboration: [
                {value: "Computer Science", style: "gold"},
                {value: "Bachelor's Degree", style: "normal"},
                {value: "September 2023 - Present", style: "moreInfo"},
            ]
        }
    ]
}

const experienceSection = {
    name: "experience",
    title: "experience",
    sectionFlex: "column",
    subSections: [
        {
            name: "tacta",
            title: "Tacta",
            list: [
                {
                    value: "Full Stack Developer",
                    elaboration: [
                        {
                            value: "Contributed to the design and development of a large-scale platform for clinic and patient management, working across the entire stack from backend services to frontend applications.",
                            style: "normal"
                        },
                        {
                            value: "April 2025 - Present",
                            style: "moreInfo"
                        }
                    ]
                },
                {
                    value: "Full Stack Developer Intern",
                    elaboration: [
                        {
                            value: "Designed and developed a mobile application with its backend and database as part of the TVZ Mc2 competition.",
                            style: "normal"
                        },
                        {
                            value: "April 2024 - June 2024",
                            style: "moreInfo"
                        }
                    ]
                }
            ]

        },
        {
            name: "limex",
            title: "Limex Computer & Software",
            list: [
                {
                    value: "Full Stack Developer",
                    elaboration: [
                        {value: "Design and development of web applications and databases.", style: "normal"},
                        {value: "July 2023 - October 2023", style: "moreInfo"},
                    ]
                },
                {
                    value: "Computer Technician",
                    elaboration: [
                        {value: "Computer diagnostics, repairs, installation and maintenance of servers, networks,...", style: "normal"},
                        {value: "July 2022 - September 2022", style: "moreInfo"},
                        {value: "July 2021 - September 2021", style: "moreInfo"},
                        {value: "July 2020 - September 2020", style: "moreInfo"},
                    ]
                }
            ]
        }
    ]
}

const skillsSection = {
    name: "skills",
    title: "skills",
    sectionFlex: "column",
    subSections: [
        {
            name: "programmingLanguages",
            title: "Programming Languages",
            skillList: [
                {
                    icon: JavaLogo,
                    value: "Java"
                },
                {
                    icon: TypeScriptLogo,
                    value: "TypeScript"
                },
                {
                    icon: PythonLogo,
                    value: "Python"
                },
                {
                    icon: CLogo,
                    value: "C"
                },
                {
                    icon: CppLogo,
                    value: "C++"
                },
                {
                    icon: PHPLogo,
                    value: "PHP"
                },
                {
                    icon: CsLogo,
                    value: "C#"
                },
                {
                    icon: SQLLogo,
                    value: "SQL"
                },
            ]
        },
        {
            name: "technologies",
            title: "Technologies",
            skillList: [
                {
                    icon: SpringBootLogo,
                    value: "Spring Boot"
                },
                {
                    icon: AngularLogo,
                    value: "Angular"
                },
                {
                    icon: NodeLogo,
                    value: "Node.js"
                },
                {
                    icon: ReactLogo,
                    value: "React.js"
                },
                {
                    icon: ReactLogo,
                    value: "React Native"
                },
                {
                    icon: ScssLogo,
                    value: "SCSS"
                },
                {
                    icon: BootstrapLogo,
                    value: "Bootstrap"
                },
                {
                    icon: JQueryLogo,
                    value: "jQuery"
                },
            ]
        },
        {
            name: "tools",
            title: "Tools",
            skillList: [
                {
                    icon: AwsLogo,
                    value: "AWS"
                },
                {
                    icon: TerraformLogo,
                    value: "Terraform"
                },
                {
                    icon: GitLogo,
                    value: "Git"
                },
                {
                    icon: DockerLogo,
                    value: "Docker"
                },
                {
                    icon: CPanelLogo,
                    value: "cPanel"
                },
                {
                    icon: LinuxLogo,
                    value: "Linux"
                },
                {
                    icon: FigmaLogo,
                    value: "Figma"
                },
            ]
        },
        {
            name: "databases",
            title: "Databases",
            skillList: [
                {
                    icon: MySQLLogo,
                    value: "MySQL"
                },
                {
                    icon: PostgreSqlLogo,
                    value: "PostgreSQL"
                },
                {
                    icon: EventSourceLogo,
                    value: "Event sourcing"
                }
            ]
        }
    ]
}

const honorsAndAwardsSection = {
    name: "honorsAndAwards",
    title: "honors & awards",
    sectionFlex: "column",
    list: [
        {
            value: "Croatian National Cybersecurity Team Member",
            gold: true,
            elaboration: [
                {value: "ECSC2022 & ECSC2025", style: "normal"},
                {value: "European Cybersecurity Challenge", style: "moreInfo"},
            ]
        },
        {
            value: "Hackultet 2.0",
            gold: true,
            elaboration: [
                {
                    value: "1st place in national CTF cybersecurity competition organized by CARNET and FER",
                    style: "normal"
                },
                {value: "May 2025", style: "moreInfo"}
            ]
        },
        {
            value: "High School valedictorian",
            gold: true,
            elaboration: [
                {value: "Technical school Čakovec", style: "normal"},
                {value: "May 2023", style: "moreInfo"},
            ]
        },
    ]
}

const projectsSection = {
    name: "projects",
    title: "projects",
    sectionFlex: "row",
    projectList: [
        {
            title: "Imbus",
            description: "Imbus is a mobile application that allows users to find experts within Croatia, it was developed as part of the TVZ Mc2 competition.",
        },
        {
            title: "BarBuddy",
            description: "BarBuddy is a web application designed to make ordering easier in hospitality venues.",
        },
        {
            title: "Formulas",
            description: "Formulas is a web application designed to assist with solving physics and mathematics problems.",
        },
        {
            title: "Zmijica",
            description: "Snake game is a simple game made in React.js. The goal of the game is to eat as many enemies as possible without hitting the walls or the snakes body.",
        },
        {
            title: "Plinko",
            description: "A project for mathematics class, explaining Gaussian curve. There is also a Plinko game, accessible from the bottom of the page."
        },
        {
            title: "MicroMania",
            description: "Micromania is an online tool used for creating, editing, and playing quizzes using Microbits."
        }
    ]
}

const SectionData = [
    myStorySection,
    introductionSection,
    educationSection,
    experienceSection,
    honorsAndAwardsSection,
    skillsSection,
    projectsSection,
]

export default SectionData;