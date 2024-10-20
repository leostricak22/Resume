import {IoCalendar, IoCar, IoLanguage, IoMail} from "react-icons/io5";
import {
    FaBootstrap, FaCpanel,
    FaDatabase,
    FaDiscord,
    FaDocker, FaFigma,
    FaGithub,
    FaJava,
    FaLinkedin, FaLinux,
    FaReact
} from "react-icons/fa";
import {FaC, FaLocationDot} from "react-icons/fa6";
import {
    SiCplusplus,
    SiCsharp, SiGit,
    SiJavascript, SiJquery, SiMysql,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiReact,
    SiSpringboot
} from "react-icons/si";

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
                    icon: <SiJavascript />,
                    value: "JavaScript"
                },
                {
                    icon: <SiPhp />,
                    value: "PHP"
                },
                {
                    icon: <SiPython />,
                    value: "Python"
                },
                {
                    icon: <SiCsharp />,
                    value: "C#"
                },
                {
                    icon: <SiCplusplus />,
                    value: "C++"
                },
                {
                    icon: <FaC />,
                    value: "C"
                },
                {
                    icon: <FaJava />,
                    value: "Java"
                },
                {
                    icon: <FaDatabase />,
                    value: "SQL"
                },
            ]
        },
        {
            name: "technologies",
            title: "Technologies",
            skillList: [
                {
                    icon: <SiSpringboot />,
                    value: "Spring Boot"
                },
                {
                    icon: <SiNodedotjs />,
                    value: "Node.js"
                },
                {
                    icon: <SiReact />,
                    value: "React.js"
                },
                {
                    icon: <FaReact />,
                    value: "React Native"
                },
                {
                    icon: <FaBootstrap />,
                    value: "Bootstrap"
                },
                {
                    icon: <SiJquery />,
                    value: "Jquery"
                },
            ]
        },
        {
            name: "tools",
            title: "Tools",
            skillList: [
                {
                    icon: <SiGit />,
                    value: "Git"
                },
                {
                    icon: <FaDocker />,
                    value: "Docker"
                },
                {
                    icon: <FaCpanel />,
                    value: "cPanel"
                },
                {
                    icon: <FaLinux />,
                    value: "Linux"
                },
                {
                    icon: <FaFigma />,
                    value: "Figma"
                },
            ]
        },
        {
            name: "databases",
            title: "Databases",
            skillList: [
                {
                    icon: <SiMysql />,
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
        }
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