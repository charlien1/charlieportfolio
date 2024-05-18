const header = {
}


const about = {
  name: 'Charlie Nguyen',
  role: 'Computer Science Student and IT Intern',
  description:
    'I am a third year Computer Science Major at California State University, Fullerton and am currently an IT Intern at Orange County Mosquito and Vector Control District. ',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/charlie-nguyen-6a733a30a/',
    github: 'https://github.com/charlien1',
  },
}

const projects = [
  {
    name: 'ReadyUp App',
    description:
      'Android app that helps users easily discover and coordinate pick-up basketball games with fellow players in their local area. ',
    stack: ['React', 'JavaScript'],
    livePreview: 'https://github.com/charlien1/ReadyUpApp',
  },
  {
    name: 'Apple Jumper',
    description:
      '2D platformer with multiple levels where you need to collect all the apples on the screen in order to progress to the next level.',
    stack: ['Unity', 'C#'],
    livePreview: 'https://github.com/charlien1/AppleJumper',
  },
  {
    name: 'Star Invaders',
    description:
      '8-bit 2D style space invaders game with a Star Wars theme.',
    stack: ['C++'],
    livePreview: 'https://github.com/charlien1/Star-Wars-Space-Invaders-Project',
  },
]

export const work = [
  {
    role: 'IT Intern',
    company: 'Orange County Mosquito and Vector Control District',
    duration: 'Feb 2024 - Present',
    description: 'Assisted in enhancing the company\'s website by implementing login functionality using Microsoft Entra ID, improving user experience and security. Contributed to the design and development of an employee evaluation system, showcasing web-design skills and database knowledge. Gained hands-on experience with PHP, and Microsoft SQL Server. ',
  },
  // Add more work experience objects here
]

const skills = [
  'C++',
  'C',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Microsoft SQL Server'
]

const contact = {
  email: 'charlienguyen688@yahoo.com',
}

export { header, about, projects, skills, contact }
