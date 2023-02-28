import sassiShop from "../../assets/workImages/sassishopimg.png";
import sassiFlix from "../../assets/workImages/sassiFlixWeb.png";
import neo from "../../assets/workImages/neo.png";
import landPage from "../../assets/workImages/land.png";
import blog from "../../assets/workImages/food.png";

export interface ProjectDataTypes {
  projectName: string;
  img: string;
  buttonDemoLink: string;
  buttonCodeLink: string;
  demoLink: string;
  codeLink: string;
  delay: string;
}

export const projectData: ProjectDataTypes[] = [
  {
    projectName: "Sassi Shop",
    img: "https://cdn.discordapp.com/attachments/797528729722028052/1076922392808525855/Untitled-2.png",
    buttonDemoLink: "Watch Demo",
    buttonCodeLink: "See Code",
    demoLink: "https://sassishops.com/",
    codeLink: "https://github.com/orsasson12/e-commerce",
    delay: "1000",
  },
  {
    projectName: "Sassi Flix",
    img: sassiFlix,
    buttonDemoLink: "Watch Demo",
    buttonCodeLink: "See Code",
    demoLink: "",
    codeLink: "/",
    delay: "1000",
  },
  {
    projectName: "Neo",
    img: neo,
    buttonDemoLink: "Watch Demo",
    buttonCodeLink: "See Code",
    demoLink: "http://www.neokapah.com/",
    codeLink: "https://github.com/orsasson12/neoWeb",
    delay: "1000",
  },
  {
    projectName: "landing Page",
    img: landPage,
    buttonDemoLink: "Watch Demo",
    buttonCodeLink: "See Code",
    demoLink: "",
    codeLink: "https://github.com/orsasson12/material-ui-landing-page",
    delay: "1300",
  },
  {
    projectName: "Food Blog",
    img: blog,
    buttonDemoLink: "Watch Demo",
    buttonCodeLink: "See Code",
    demoLink: "",
    codeLink: "https://github.com/orsasson12/food_blog",
    delay: "1300",
  },

];
