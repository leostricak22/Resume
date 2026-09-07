// LANGUAGES
import TypeScriptLogo from "./assets/images/icons/typescript.svg";
import PHPLogo from "./assets/images/icons/php.svg";
import PythonLogo from "./assets/images/icons/python.svg";
import CLogo from "./assets/images/icons/c.svg";
import CppLogo from "./assets/images/icons/cpp.svg";
import CsLogo from "./assets/images/icons/cs.svg";
import JavaLogo from "./assets/images/icons/java.svg";
import SQLLogo from "./assets/images/icons/sql.svg";

// FRAMEWORKS
import ReactLogo from "./assets/images/icons/react.svg";
import NodeLogo from "./assets/images/icons/nodejs.svg";
import SpringBootLogo from "./assets/images/icons/spring-boot.svg";
import BootstrapLogo from "./assets/images/icons/bootstrap.svg";
import JQueryLogo from "./assets/images/icons/jquery.svg";
import AngularLogo from "./assets/images/icons/angular.svg";
import ScssLogo from "./assets/images/icons/scss.svg";

// INFRA
import DockerLogo from "./assets/images/icons/docker.svg";
import CPanelLogo from "./assets/images/icons/cpanel.svg";
import LinuxLogo from "./assets/images/icons/linux.svg";
import FigmaLogo from "./assets/images/icons/figma.svg";
import GitLogo from "./assets/images/icons/git.svg";
import AwsLogo from "./assets/images/icons/aws.svg";
import TerraformLogo from "./assets/images/icons/terraform.svg";

// DATA
import MySQLLogo from "./assets/images/icons/mysql.svg";
import PostgreSqlLogo from "./assets/images/icons/postgresql.svg";
import EventSourceLogo from "./assets/images/icons/event-source.svg";

export const TitlebarData = {
    path: "leo@zagreb:~/resume",
    buttons: ["_", "□", "✕"],
};

export const HeaderData = {
    prompt: "whoami",
    name: "Leo Stričak",
    intro: "Computer Science student at Zagreb University of Applied Sciences, full stack developer at Tacta, and member of the Croatian National Cybersecurity Team.",
    chips: [
        {value: "stricak.leo@gmail.com", href: "mailto:stricak.leo@gmail.com"},
        {value: "github/leostricak22", href: "https://github.com/leostricak22"},
        {value: "in/leostricak22", href: "https://www.linkedin.com/in/leostricak22"},
        {value: "discord/leostricak22"},
        {value: "Zagreb, Croatia", faint: true},
    ],
};

const honorsSection = {
    name: "honors",
    prompt: "cat honors.md",
    list: [
        {
            gutter: "ECSC 2022, 2025",
            title: "Croatian National Cybersecurity Team Member",
            elaboration: [
                {value: "European Cybersecurity Challenge", style: "subtitle"},
            ],
        },
        {
            gutter: "May 2025",
            title: "Hackultet 2.0 — 1st place",
            elaboration: [
                {value: "National CTF competition organized by CARNET and FER", style: "subtitle"},
            ],
        },
        {
            gutter: "May 2023",
            title: "High School Valedictorian",
            elaboration: [
                {value: "Technical school Čakovec", style: "subtitle"},
            ],
        },
    ],
};

const experienceSection = {
    name: "experience",
    prompt: "git log --experience",
    list: [
        {
            gutter: "Apr 2025 — Present",
            title: "Full Stack Developer",
            company: "Tacta",
            elaboration: [
                {
                    value: "Contributed to the design and development of a large-scale platform for clinic and patient management, working across the entire stack from backend services to frontend applications.",
                    style: "description",
                },
            ],
        },
        {
            gutter: "Apr — Jun 2024",
            title: "Full Stack Developer Intern",
            company: "Tacta",
            elaboration: [
                {
                    value: "Designed and developed a mobile application with its backend and database as part of the TVZ Mc2 competition.",
                    style: "description",
                },
            ],
        },
        {
            gutter: "Jul — Oct 2023",
            title: "Full Stack Developer",
            company: "Limex Computer & Software",
            elaboration: [
                {value: "Design and development of web applications and databases.", style: "description"},
            ],
        },
        {
            gutter: ["Jul — Sep 2022", "Jul — Sep 2021", "Jul — Sep 2020"],
            title: "Computer Technician",
            company: "Limex Computer & Software",
            elaboration: [
                {
                    value: "Computer diagnostics, repairs, installation and maintenance of servers, networks and related infrastructure.",
                    style: "description",
                },
            ],
        },
    ],
};

const skillsSection = {
    name: "skills",
    prompt: "ls skills/",
    subSections: [
        {
            name: "languages",
            title: "Languages",
            skillList: [
                {icon: JavaLogo, value: "Java"},
                {icon: TypeScriptLogo, value: "TypeScript"},
                {icon: PythonLogo, value: "Python"},
                {icon: CLogo, value: "C"},
                {icon: CppLogo, value: "C++"},
                {icon: CsLogo, value: "C#"},
                {icon: PHPLogo, value: "PHP"},
                {icon: SQLLogo, value: "SQL"},
            ],
        },
        {
            name: "frameworks",
            title: "Frameworks",
            skillList: [
                {icon: SpringBootLogo, value: "Spring Boot"},
                {icon: AngularLogo, value: "Angular"},
                {icon: ReactLogo, value: "React.js"},
                {icon: ReactLogo, value: "React Native"},
                {icon: NodeLogo, value: "Node.js"},
                {icon: ScssLogo, value: "SCSS"},
                {icon: BootstrapLogo, value: "Bootstrap"},
                {icon: JQueryLogo, value: "jQuery"},
            ],
        },
        {
            name: "infra",
            title: "Infra",
            skillList: [
                {icon: AwsLogo, value: "AWS", boost: true},
                {icon: TerraformLogo, value: "Terraform"},
                {icon: DockerLogo, value: "Docker"},
                {icon: LinuxLogo, value: "Linux", boost: true},
                {icon: GitLogo, value: "Git"},
                {icon: CPanelLogo, value: "cPanel"},
                {icon: FigmaLogo, value: "Figma"},
            ],
        },
        {
            name: "data",
            title: "Data",
            skillList: [
                {icon: PostgreSqlLogo, value: "PostgreSQL", boost: true},
                {icon: MySQLLogo, value: "MySQL"},
                {icon: EventSourceLogo, value: "Event sourcing", boost: true},
            ],
        },
    ],
};

const projectsSection = {
    name: "projects",
    prompt: "ls projects/",
    projectList: [
        {
            title: "imbus",
            description: "Mobile application for finding experts within Croatia, developed for the TVZ Mc2 competition.",
        },
        {
            title: "barbuddy",
            description: "Web application designed to make ordering easier in hospitality venues.",
        },
        {
            title: "micromania",
            description: "Online tool for creating, editing and playing quizzes using Microbits.",
        },
        {
            title: "formulas",
            description: "Web application that assists with solving physics and mathematics problems.",
        },
    ],
};

const aboutSection = {
    name: "about",
    prompt: "cat about.md",
    list: [
        {
            gutter: "languages",
            value: [
                "Croatian — Native proficiency",
                "English — Full professional proficiency",
            ],
        },
        {
            gutter: "licence",
            value: "Driving categories AM, B, F, G",
        },
    ],
};

const educationSection = {
    name: "education",
    prompt: "cat education.md",
    list: [
        {
            gutter: "2023 — Present",
            title: "Zagreb University of Applied Sciences",
            elaboration: [
                {value: "Bachelor's Degree, Computer Science", style: "subtitle"},
            ],
        },
        {
            gutter: "2019 — 2023",
            title: "Technical school Čakovec",
            elaboration: [
                {value: "Computer Technician, High School Diploma", style: "subtitle"},
            ],
        },
    ],
};

const SectionData = [
    honorsSection,
    experienceSection,
    skillsSection,
    projectsSection,
    aboutSection,
    educationSection,
];

export default SectionData;
