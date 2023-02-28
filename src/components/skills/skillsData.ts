import HTML from "../../assets/skillsImages/html.png";
import CSS from "../../assets/skillsImages/css.png";
import Tailwind from "../../assets/skillsImages/tailwind.png";
import JS from "../../assets/skillsImages/javascript.png";
import TS from "../../assets/skillsImages/ts.png";
import GIT from "../../assets/skillsImages/github.png";
import MUI from "../../assets/skillsImages/MUI.png";
import SASS from "../../assets/skillsImages/sass.png";
import REACT from "../../assets/skillsImages/react.png";
export interface skillsDataType {
  name: string;
  img: string;
}

const skillsData: skillsDataType[] = [
  {
    name: "HTML",
    img: HTML,
  },
  {
    name: "CSS",
    img: CSS,
  },
  {
    name: "Tailwind",
    img: Tailwind,
  },
  {
    name: "JS",
    img: JS,
  },
  {
    name: "TS",
    img: TS,
  },
  {
    name: "GIT",
    img: GIT,
  },
  {
    name: "MUI",
    img: MUI,
  },
  {
    name: "REACT",
    img: REACT,
  },
];

export default skillsData;
