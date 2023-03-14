import {
  filmoteka,
  filmotekaMob,
  donut,
  donutMob,
  phoneBook,
  phonebookMob,
  webStudio,
  webStudioMob,
  petly,
  petlyMob,
} from "../Images/portfolio";

export type IPortfolio = {
  id: string;
  img: string;
  imgMob: string;
  link: string;
  title: string;
  add: string;
  text: string;
  role: string;
};

export const personalProject = [
  {
    id: "1",
    img: webStudio,
    imgMob: webStudioMob,
    link: "https://oleksii-she.github.io/goit-markup-hw-08/",
    title: "WebStudio",
    add: "HTML, SASS, JS",
    role: "Developer",
    text: "This is my first complete homework assignment for the HTML CSS block, which is a responsive website called Webstudio that can be accessed on any type of device.",
  },
  {
    id: "2",
    img: phoneBook,
    imgMob: phonebookMob,
    link: "https://oleksii-she.github.io/goit-react-hw-08-phonebook/contacts",
    title: "Phonebook",
    role: "Developer",
    add: "Redux, React, React-router, Styled component",
    text: "The project was developed using React and Redux, and includes user registration and the ability to add or remove a mobile phone number. All data is saved on the backend.",
  },
];

export const commandProject = [
  {
    id: "3",
    img: donut,
    imgMob: donutMob,
    link: "https://pavelkreitsberg.github.io/team-project/",
    title: "Oh my Donut",
    add: "HTML, SASS, JS, Parcel",
    role: "Developer",
    text: "I contributed to the development of a website with an adaptive layout, serving as a developer. Specifically, my contribution involved the creation of a burger menu navigation.",
  },
  {
    id: "4",
    img: filmoteka,
    imgMob: filmotekaMob,
    link: "https://ozozai12.github.io/filmoteka/",
    title: "Filmoteka",
    add: "HTML, SASS, JS, Parcel",
    role: "Developer",
    text: "I developed the authorization.js file for the project, creating the NewServiceApi class with all the essential API connections. Additionally, I wrote the substitutionOfValues function to manipulate the API data to fit the project's requirements. I also integrated the popular movies page to the modal menu and connected YouTube to display movie trailers. Throughout the project, I assisted the team in various ways..",
  },
  {
    id: "5",
    img: petly,
    imgMob: petlyMob,
    link: "https://ozozai12.github.io/filmoteka/",
    title: "Petly",
    add: "HTML, SASS, JS, REACT, Webpack",
    role: "Developer",
    text: "I was involved in the development of a website with a responsive layout. My specific tasks included creating a general modal menu as well as a modal menu for adding animals to the user page. In addition to my individual contributions, I also provided assistance to the project team in various other ways.",
  },
];
