const header = {
  homepage: "https://www.asp.ar",
  title: "ASPolchi",
};

const about = {
    name: 'Agustín Somoza Polchi',
    role: 'Front End Developer',
    description:
      'I am really quick thinker, outside the box type of person, always want to learn new things, very sociable and positive guy.',
    resume: 'https://drive.google.com/file/d/14x9vvDVeGIZYU9J385qnyuwiT2bS43lp/view?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/agustin-somoza-polchi/',
      github: 'https://github.com/aspolchi2',
    },
  }
  const projects = [
    // projects can be added and removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Müssbags',
      description:
        'E-Commerce made with ReactJs, full responsive using Firebase as a backend ',
      stack: ['CSS', 'Bootstrap', 'React', 'Firebase'],
      sourceCode: 'https://github.com/aspolchi2/MB-AgustinSomoza',
      livePreview: 'https://muss.asp.ar/',
    },
    {
      name: 'PokeBattle',
      description:
        'Personal project: A game where you have to guess if the Pokémon on the rigth is weaker or stronger',
      stack: ['SASS', 'Material IU', 'React', 'Pokeapi'],
      sourceCode: 'https://github.com/aspolchi2/pokebattle',
      livePreview: 'https://battle.asp.ar/',
    },
    {
      name: 'Palindrome detector',
      description:
        'Personal project: At an interview someone ask me "How do you detect if a word is a palindrome?" so i made a palindrome detector ',
      stack: ['SASS', 'Material UI', 'React'],
      sourceCode: 'https://github.com/aspolchi2/reverse',
      livePreview: 'https://luzazul.asp.ar/',
    },
    {
      name: 'Los Tilos MH♥',
      description:
        'Freelance website: a cabin complex website ',
      stack: ['SASS', 'Bootstrap', 'HTML5'],
      livePreview: 'http://lostilosmh.com.ar/',
    },
    {
      name: 'Todo list',
      description:
        'Personal project: A todo list to practice the use of React hooks ',
      stack: ['CSS', 'Material UI', 'React'],
      sourceCode: 'https://github.com/aspolchi2/dope',
      livePreview: 'https://www.todo.asp.ar/',
    },
    {
      name: 'Müssbags HTML, CSS',
      description:
        'Academy Project: A website where I learn and implemented HTML, CSS, Bootstrap ',
      stack: ['SASS', 'Bootstrap', 'HTML5'],
      sourceCode: 'https://github.com/aspolchi2/mussbags',
      livePreview: 'https://aspolchi2.github.io/mussbags/',
    },
  ]
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'SASS',
    'Material UI',
    'Git',
    'Jest',
  
  ]
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'aspolchi@gmail.com',
  }
  
  export { header, about, projects, skills, contact }