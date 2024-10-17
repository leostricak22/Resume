import {IoCalendar, IoCar, IoMail} from "react-icons/io5";
import {FaDiscord, FaGithub, FaLanguage, FaLinkedin} from "react-icons/fa";
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
                    icon: <FaLanguage />,
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


const SectionData = [
    introductionSection,
    educationSection
]

export default SectionData;