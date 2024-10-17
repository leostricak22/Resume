import {IoCalendar, IoCar, IoMail} from "react-icons/io5";
import {FaDiscord, FaGithub, FaLanguage, FaLinkedin} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

const SectionData = [
    {
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
                        value: "November, 2004."
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
]

export default SectionData;