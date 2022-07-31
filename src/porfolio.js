const header = {
  homepage: "https://www.asp.ar",
  title: "ASP",
};

const about = {
  name: "Agustín",
  role: "Frontend Developer",
  description:
    "My work is mainly focused on web solutions, elegance and easy to read code. I like exploring new tech to keep my journy and my knowledge growing ",
  description2:
    "Now I'm Fullstack developer stundent in Argentina -- currently seeking for job oportunities",
  resume:
    "https://drive.google.com/file/d/14x9vvDVeGIZYU9J385qnyuwiT2bS43lp/view?usp=sharing",
  photo:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/test.jpeg?alt=media&token=cabd38ab-e003-443a-b0b4-f1e5920ad40d",
  social: {
    linkedin: "https://www.linkedin.com/in/agustin-somoza-polchi/",
    github: "https://github.com/aspolchi2",
  },
};
const projects = [
  {
    id: "01",
    name: "Müssbags",
    description:
      "E-Commerce made with ReactJs, full responsive using Firebase as a backend ",
    stack: ["CSS", "Bootstrap", "React", "Firebase"],
    sourceCode: "https://github.com/aspolchi2/MB-AgustinSomoza",
    livePreview: "https://muss.asp.ar/",
    gif:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/mussReact.gif?alt=media&token=d7b04e40-5d3a-46a7-870e-c94cc5567582",
  },
  {
    id: "02",
    name: "PokeBattle",
    description:
      "Personal project: A game where you have to guess if the Pokémon on the rigth is weaker or stronger",
    stack: ["SASS", "Material IU", "React", "Pokeapi"],
    sourceCode: "https://github.com/aspolchi2/pokebattle",
    livePreview: "https://battle.asp.ar/",
    gif:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/battle.gif?alt=media&token=ec843b00-a713-47fb-b4a1-81c94f09c140",
  },
  {
    id: "03",
    name: "Palindrome detector",
    description:
      'Personal project: At an interview someone ask me "How do you detect if a word is a palindrome?" so i made a palindrome detector ',
    stack: ["SASS", "Material UI", "React"],
    sourceCode: "https://github.com/aspolchi2/reverse",
    livePreview: "https://luzazul.asp.ar/",
    gif:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/palindromo.gif?alt=media&token=6c55550c-73f5-4057-ac44-e0c99420fc60 ",
  },
  {
    id: "04",
    name: "Los Tilos MH♥",
    description: "Freelance website: a cabin complex website ",
    stack: ["SASS", "Bootstrap", "HTML5"],
    livePreview: "http://lostilosmh.com.ar/",
    gif:
      " https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/lostilos.gif?alt=media&token=d1bf6791-2dda-42e7-a811-eacad7c98a1c",
  },
  {
    id: "05",
    name: "Todo list",
    description:
      "Personal project: A todo list to practice the use of React hooks ",
    stack: ["CSS", "Material UI", "React"],
    sourceCode: "https://github.com/aspolchi2/dope",
    livePreview: "https://todo.asp.ar/",
    gif:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/todo.gif?alt=media&token=8f871fc5-a5ba-4e91-a11e-b237540486f2 ",
  },
  {
    id: "06",
    name: "Müssbags HTML, CSS",
    description:
      "Academy Project: A website where I learn and implemented HTML, CSS, Bootstrap ",
    stack: ["SASS", "Bootstrap", "HTML5"],
    sourceCode: "https://github.com/aspolchi2/mussbags",
    livePreview: "https://aspolchi2.github.io/mussbags/",
    gif:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-5fb56.appspot.com/o/mussCSs.gif?alt=media&token=6cd8f0ac-8a72-4d01-bc6d-231bbd4fd27c ",
  },
];
const skills = {
  lang: "HTML, CSS, JavaScript, React, SASS, Material UI, Git, Jest",
  programs: "Visual Studio Code, Sublime Text, Figma",
};
const contact = {
  email: "aspolchi@gmail.com",
  whatsapp: "https://api.whatsapp.com/send?phone=542914277102",
};

export { header, about, projects, skills, contact };
