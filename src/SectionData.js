import {IoCalendar, IoCar, IoLanguage, IoMail} from "react-icons/io5";
import {FaDiscord, FaGithub, FaLinkedin} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

const introductionSection = {
    name: "introduction",
    title: "introduction",
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
    subSections: [
        {
            name: "tacta",
            title: "Tacta",
            list: [
                {
                    value: "Full Stack Developer Intern",
                    elaboration: [
                        {value: "Design and development of a mobile application, it's backend and database.", style: "normal"},
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

const honorsAndAwardsSection = {
    name: "honorsAndAwards",
    title: "honors & awards",
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

const SectionData = [
    introductionSection,
    educationSection,
    experienceSection,
    honorsAndAwardsSection
]

export default SectionData;