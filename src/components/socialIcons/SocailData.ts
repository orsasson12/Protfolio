import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Resume from '../../assets/resume/CV - Or Sasson (17).pdf'
export interface SocialDataType {
  id: string;
  icon: any;
  name: string;
  link: string;
  bg: string;
}

const SocialData: SocialDataType[] = [
  {
    id: "likedin",
    icon: FaLinkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/or-sasson-308345229/",
    bg: "bg-blue-700",
  },
  {
    id: "GitHub",
    icon: FaGithub,
    name: "Git Hub",
    link: "https://github.com/orsasson12",
    bg: "bg-gray-500",
  },
  {
    id: "Resume",
    icon: FaFileDownload,
    name: "Resume",
    link: Resume,
    bg: "bg-red-400",
  },
];

export default SocialData;
