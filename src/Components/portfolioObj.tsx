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
};

export const personalProject = [
  {
    id: "1",
    img: webStudio,
    imgMob: webStudioMob,
    link: "https://oleksii-she.github.io/goit-markup-hw-08/",
    title: "WebStudio website",
    add: "HTML, SASS, JS",
    text: "Webstudio, was done as homework in the last block of HTML CSS.",
  },
  {
    id: "2",
    img: phoneBook,
    imgMob: phonebookMob,
    link: "https://oleksii-she.github.io/goit-react-hw-08-phonebook/contacts",
    title: "Phonebook",
    add: "Redux, React, React-router, Styled component",
    text: "The project was created with the help of React, user registration was made, each user has his own private page.",
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
    text: "A website with responsive layout. Role: developer. Created mobile menu navigation.",
  },
  {
    id: "4",
    img: filmoteka,
    imgMob: filmotekaMob,
    link: "https://ozozai12.github.io/filmoteka/",
    title: "Filmoteka",
    add: "HTML, SASS, JS, Parcel",
    text: "A website with responsive layout. Role: developer. Сreation of the authorization.js file, in which I created the NewServiceApi class with all the necessary API connections. creation of the substitutionOfValues ​​function, which accepts data from the API and adjusts them for the project, connecting a page with popular movies to the modal menu, connecting YouTube with a movie trailer. Helping the team.",
  },
  {
    id: "5",
    img: petly,
    imgMob: petlyMob,
    link: "https://ozozai12.github.io/filmoteka/",
    title: "pet-support-app",
    add: "HTML, SASS, JS, REACT, Webpack",
    text: "A website with responsive layout. Role: developer. Сreating a general modal menu, a model menu for adding animals to the user page, helping the project team.",
  },
];
