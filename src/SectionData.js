import {IoCalendar, IoCar, IoLanguage, IoMail} from "react-icons/io5";
import {
    FaDiscord,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

// LANGUAGES
import JsLogo from "./assets/images/icons/js.svg";
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

// TOOLS
import DockerLogo from "./assets/images/icons/docker.svg";
import CPanelLogo from "./assets/images/icons/cpanel.svg";
import LinuxLogo from "./assets/images/icons/linux.svg";
import FigmaLogo from "./assets/images/icons/figma.svg";
import GitLogo from "./assets/images/icons/git.svg";

// DATABASES
import MySQLLogo from "./assets/images/icons/mysql.svg";

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
                {value: "September 2023 - 2026 (expected)", style: "moreInfo"},
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
                    value: "Full Stack Developer Intern",
                    elaboration: [
                        {value: "Design and development of a mobile application, its backend and database.", style: "normal"},
                        {value: "April 2024 - June 2024", style: "moreInfo"},
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
                        {value: "July 2023 - December 2023", style: "moreInfo"},
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
                    icon: JsLogo,
                    value: "JavaScript"
                },
                {
                    icon: PHPLogo,
                    value: "PHP"
                },
                {
                    icon: PythonLogo,
                    value: "Python"
                },
                {
                    icon: CsLogo,
                    value: "C#"
                },
                {
                    icon: CppLogo,
                    value: "C++"
                },
                {
                    icon: CLogo,
                    value: "C"
                },
                {
                    icon: JavaLogo,
                    value: "Java"
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
                    icon: BootstrapLogo,
                    value: "Bootstrap"
                },
                {
                    icon: JQueryLogo,
                    value: "Jquery"
                },
            ]
        },
        {
            name: "tools",
            title: "Tools",
            skillList: [
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
            value: "High School valedictorian",
            gold: true,
            elaboration: [
                {value: "Technical school Čakovec", style: "normal"},
                {value: "Awarded in 2023", style: "moreInfo"},
            ]
        },
        {
            value: "Croatian National Cybersecurity Team Member",
            gold: true,
            elaboration: [
                {value: "ECSC2022", style: "normal"},
                {value: "European Cybersecurity Challenge 2022", style: "moreInfo"},
            ]
        }
    ]
}

const projectsSection = {
    name: "projects",
    title: "projects",
    sectionFlex: "row",
    list: [
        {
            value: "List of all my projects",
        },
        {
            value: "https://projects.barbuddy.net/",
            href: "https://projects.barbuddy.net/"
        },
    ]
}

const SectionData = [
    introductionSection,
    educationSection,
    experienceSection,
    skillsSection,
    projectsSection,
    honorsAndAwardsSection
]

export default SectionData;