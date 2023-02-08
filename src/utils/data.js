import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Diseño Web",
    projects: 5,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Aplicaciones Moviles",
    projects: 1,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Identidad de Marca",
    projects: 3,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Te ayudaré a encontrar una solución y resolver tu problema. Usamos diseño de procesos para crear productos digitales. Además, también ayudamos a sus negocios.",

];

export const workExp = [
  {
    place: "Independiente",
    tenure: "Actualmente",
    role: "Developer",
    detail:
      "Me especializo en entender las necesidades de mis clientes y en crear soluciones eficaces y eficientes que cumplan con sus objetivos comerciales.",
  },
  {
    place: "Roshka",
    tenure: "Noviembre 2022 - Enero 2023",
    role: "Boot Camp de Java",
    detail:
      "Como equipo llevamos a cabo ejercicios de diversa índole utilizando Java y otros lenguajes de programación. Efectuamos actualizaciones en una aplicación funcional, utilizando Spring, Java, JPA, JQuery y Postgres. Por último, diseñamos y desarrollamos un sistema web funcional para el Club Alemán, utilizando Spring Boot.",
  },
  {
    place: "Juegos Odesur 2022",
    tenure: "Enero 2022 - Noviembre 2022",
    role: "Web Master",
    detail:
      "Como profesional, realice actualizaciones diarias en el software Hércules mediante el uso de las tecnologías HTML, CSS y JavaScript.",
  },
];

export const comments = [
  {
    name: "Sarah Brown",
    post: "Creative Manager",
    comment:
    "Este programador junior es increíble. Su dedicación y habilidades son realmente impresionantes.",
    img: "./people2.png",
  },
  {
    name: "Michael Smith",
    post: "Programador web",
    comment:
    "Estoy impresionado por el enfoque y la creatividad que este programador junior pone en su trabajo.",
    img: "./people1.png",
  },
  {
    name: "David Johnson",
    post: "Arquitecto de software",
    comment:
    "Este programador junior es un verdadero talento. Su capacidad para resolver problemas es realmente impresionante.",
    img: "./people2.png",
  },
  {
    name: "Emily Davis",
    post: "Desarrollador de sistemas empresariales",
    comment:
    "Este programador junior tiene una habilidad increíble para entender las necesidades de los clientes y crear soluciones efectivas.",
    img: "./people1.png",
  },
  {
    name: "Christopher Wilson",
    post: "Desarrollador de inteligencia artificial",
    comment:
    "Este programador junior es un verdadero profesional. Es un placer trabajar con alguien que sabe lo que hace.",
    img: "./people2.png",
  },
  {
    name: "Olivia Anderson",
    post: "Analista de sistemas",
    comment:
    "Este programador junior es realmente una joya. Su pasión por la programación es contagiosa.",
    img: "./people1.png",
  },
  {
    name: "Jacob Thomas",
    post: "Creative Manager",
    comment:
    "Este programador junior tiene un gran futuro por delante. Estoy emocionado de ver lo que logrará a medida que siga creciendo y desarrollándose.",
    img: "./people2.png",
  },
  {
    name: "Charlotte Martinez",
    post: "QA Engineer",
    comment:
    "Este programador junior es realmente una bendición para el equipo. Su energía y entusiasmo son contagiosos y hacen que el trabajo sea más divertido.",
    img: "./people1.png",
  },
  {
    name: "William Lee",
    post: "DevOps Engineer",
    comment:
    "Este programador junior es realmente una joya. Su pasión por la programación es contagiosa.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
