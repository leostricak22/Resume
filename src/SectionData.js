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

// Drive's direct-download endpoint, not the /view link: it responds with
// content-disposition: attachment so the browser saves the PDF instead of
// opening Drive's viewer.
export const ResumeUrl =
    "https://drive.google.com/uc?export=download&id=15ANW83tevBwNCal2a0FjHot1iJHgZRs-";

export const HeaderData = {
    name: "Leo Stričak",
    role: "Software Developer, Zagreb",
    intro: "Computer Science graduate of Zagreb University of Applied Sciences, full stack developer at Tacta, and member of the Croatian National Cybersecurity Team.",
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
    title: "Honors",
    list: [
        {
            gutter: "ECSC 2022, 2025, 2026",
            title: "Croatian National Cybersecurity Team Member",
            elaboration: [
                {value: "European Cybersecurity Challenge", style: "subtitle"},
                {value: "2026 Bochum - Senior, Team Captain", style: "description"},
                {value: "2025 Warsaw - Senior", style: "description"},
                {value: "2022 Vienna - Junior", style: "description"},
            ],
        },
        {
            gutter: "May 2025",
            title: "Hackultet 2.0 - 1st place",
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
    title: "Experience",
    list: [
        {
            gutter: "Apr 2025 - Present",
            title: "Software Developer",
            company: "Tacta",
            elaboration: [
                {
                    value: "Built full-stack features for a client platform serving 500,000+ users, spanning an Angular frontend and a Java/Spring backend, including reactive services with Spring WebFlux for high-concurrency workloads.",
                    style: "description",
                },
                {
                    value: "Provisioned and managed cloud infrastructure with AWS, Terraform and Docker over PostgreSQL, automated on-demand startup and shutdown of dev environments to cut idle usage, and streamlined CI/CD pipelines.",
                    style: "description",
                },
                {
                    value: "Applied event sourcing and domain-driven design to keep complex business logic maintainable, integrated the Alma payment API for installment-based checkout, and implemented secure JWT authentication with refresh token rotation.",
                    style: "description",
                },
            ],
        },
        {
            gutter: "Apr - Jun 2024",
            title: "Software Developer Intern",
            company: "Tacta",
            elaboration: [
                {
                    value: "Built a cross-platform mobile application with Java and React Native for the TVZ Mc2 competition, reaching the finals and placing 4th.",
                    style: "description",
                },
                {
                    value: "Set up containerized deployment with Docker, Flyway migrations and Heroku.",
                    style: "description",
                },
            ],
        },
        {
            gutter: "Jul - Dec 2023",
            title: "Software Developer",
            company: "Limex Computer & Software",
            elaboration: [
                {
                    value: "Designed and developed full web applications end to end, from database schema to user-facing interface, with interactive frontends in jQuery, jQWidgets and vanilla JavaScript and backend logic in Node.js.",
                    style: "description",
                },
                {
                    value: "Built and optimized MySQL databases using functions, routines and stored procedures, and managed deployment and hosting through cPanel with version control in Git.",
                    style: "description",
                },
            ],
        },
        {
            gutter: ["Jul - Sep 2022", "Jul - Sep 2021", "Jul - Sep 2020"],
            title: "Computer Technician",
            company: "Limex Computer & Software",
            elaboration: [
                {
                    value: "Performed diagnostics, repairs, installation and maintenance of computers, servers and networks, working with MikroTik networking, Linux, Windows Active Directory and cPanel administration.",
                    style: "description",
                },
            ],
        },
    ],
};

const skillsSection = {
    name: "skills",
    title: "Skills",
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
                {icon: SpringBootLogo, value: "Spring WebFlux"},
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
    title: "Projects",
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
    title: "About",
    list: [
        {
            gutter: "Languages",
            value: [
                "Croatian - Native proficiency",
                "English - Full professional proficiency",
            ],
        },
        {
            gutter: "Licence",
            value: "Driving categories AM, B, F, G",
        },
    ],
};

const educationSection = {
    name: "education",
    title: "Education",
    list: [
        {
            gutter: "2023 - 2026",
            title: "Zagreb University of Applied Sciences",
            elaboration: [
                {value: "Bachelor's Degree, Computer Science", style: "subtitle"},
            ],
        },
        {
            gutter: "2019 - 2023",
            title: "Technical school Čakovec",
            elaboration: [
                {value: "Computer Technician, High School Diploma", style: "subtitle"},
            ],
        },
    ],
};

const SectionData = [
    educationSection,
    honorsSection,
    experienceSection,
    skillsSection,
    projectsSection,
    aboutSection,
];

export default SectionData;
