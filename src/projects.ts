type Project = {
  id: number;
  title: string;
  subtitle: string;
  imagePath: string;
  altText: string;
  description: string[];
  tags: string[];
  urlName: string;
  liveSiteUrl: string | null;
  githubUrl: string;
};

export const projectsData: Array<Project> = [
  {
    id: 3,
    title: "Tjekmate",
    subtitle: "a chess app",
    imagePath: "./tjekmate.jpg",
    altText: "tjekmate app",
    description: [
      "This was my exam project for a full-stack NodeJS course. I used a third party library containing the chess logic, and then built the app around it.",
      "Most of the course was spent on NodeJS, Express and REST APIs. I then added socket logic with SocketIO for real-time updates when the players move their pieces, as well as a database through MongoDB to store data.",
      "The addition of sockets definitely made the project a lot more difficult, but in the end I'm glad I got to try my hand as it's not an uncommon thing to utilise in the real world.",
    ],
    tags: ["NodeJS", "Express", "MongoDB", "Sockets", "HTML", "CSS", "REST API"],
    urlName: "tjekmate",
    liveSiteUrl: null,
    githubUrl: "https://github.com/JoakimGit/checkmate",
  },
  {
    id: 4,
    title: "Issue Hunter",
    subtitle: "an issue tracker",
    imagePath: "./issue-hunter.jpg",
    altText: "issue hunter app",
    description: [
      "My final exam for the degree was this project. It involved not only building the program, but also the planning, analysis and modelling required to complete it.",
      "I opted for a MEAN stack, as I already had experience with all the technologies involved, except for TailwindCSS which I got to try for the first time, and I learned that I quite like it.",
      "An issue tracker is a commonly used piece of software, so I thought it would be a good project to complete as it has real world value, albeit not so much my system as it can't quite compete with the existing solutions on the market.",
      "Even though I had used MongoDB a few times before this project, this was the first time I got to use Mongoose as an ORM, which I really liked.",
    ],
    tags: ["NodeJS", "Express", "MongoDB", "Angular", "TypeScript", "HTML", "TailwindCSS", "REST API"],
    urlName: "issue-hunter",
    liveSiteUrl: null,
    githubUrl: "https://github.com/JoakimGit/IssueHunter",
  },
  {
    id: 1,
    title: "Real Kanban",
    subtitle: "task management",
    imagePath: "./real-kanban.png",
    altText: "Board view of app with sidebar modal open for selected task",
    description: [
      "Demo available by clicking 'Live site'. Register with dummy login credentials (doesn't have to be a real email). Data is reset every 2 weeks.",
      "A task management app with kanban-like board. At the top level, users can create workspaces. Inside those, you create boards. Boards contains lists/columns, and you then add tasks/cards to these.",
      "The real in the name comes from the use of Convex for the backend, which promotes real-time updates with its websocket based engine. It's my first time using Convex, and it was quite enjoyable.",
      "For this project, I also decided to test out Tanstack Start, which at the time of building this app is still in beta. It's a full stack framework built on top of Tanstack Router, which I've used before, and is also my preferred routing framework for react.",
      "It's similar in idea to another one of the projects listed here, the issue tracking app 'Issue Hunter', although this is much more fleshed out. Different stacks were also used, and the other one was an exam project, so I was much less experienced at the time.",
      "The readme for the project on github contains a rough list of things I intend to implement, with already finished stuff checked.",
    ],
    tags: ["React", "Tanstack", "Convex", "Clerk", "TypeScript", "TailwindCSS"],
    urlName: "real-kanban",
    liveSiteUrl: "https://kanban.joakimolsen.com/",
    githubUrl: "https://github.com/JoakimGit/Real-Kanban",
  },
  {
    id: 2,
    title: "G-Driver",
    subtitle: "file storage",
    imagePath: "./g-driver.png",
    altText: "view inside images folder",
    description: [
      "A very simple 'clone' google drive app for uploading files. Quite limited functionality implemented. You can create folders and upload files in them.",
      "Primary purpose of this project was trying out the newer version of nextjs with the app router and RSCs, instead of the pages router and getStatic/ServerProps that I was used to from previous work experience.",
    ],
    tags: ["Nextjs", "Clerk", "UploadThing", "TypeScript", "TailwindCSS"],
    urlName: "g-driver",
    liveSiteUrl: "https://gdriver.joakimolsen.com/",
    githubUrl: "https://github.com/JoakimGit/G-Driver",
  },
];
