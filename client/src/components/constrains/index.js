import { html, css, scss, tailwind, javascript, typescript, react, next, node, express, mongodb, graphql, redux, firebase, npm, postman, vite, figma, c, cpp, git, github, vscode, bootstrap } from "../../assets/img/export";
import { appleImg1, appleImg2, appleImg3, medconsoleImg1, medconsoleImg2, medconsoleImg3, portfolioImg1, portfolioImg2, portfolioImg3, qrcodeImg1, qrcodeImg2, qrcodeImg3, tictacImg1, tictacImg2, tictacImg3, zerodhaImg1, zerodhaImg2, zerodhaImg3, } from "../../assets/images/index"

const navConstrain = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/projects',
        title: 'Projects',
    },
    // {
    //     path: '/blogs',
    //     title: 'Blogs',
    // },
    {
        path: '/contact',
        title: 'Contact me',
    },
];

const skillsConstrain = [
    {
        title: 'HTML',
        link: html,
    },
    {
        title: 'CSS',
        link: css,
    },
    {
        title: 'SCSS',
        link: scss,
    },
    {
        title: 'Tailwind CSS',
        link: tailwind,
    },
    {
        title: 'JavaScript',
        link: javascript,
    },
    {
        title: 'TypeScript',
        link: typescript,
    },
    {
        title: 'React.js',
        link: react,
    },
    {
        title: 'Next.js',
        link: next,
    },
    {
        title: 'Node.js',
        link: node,
    },
    {
        title: 'Express.js',
        link: express,
    },
    {
        title: 'MongoDB',
        link: mongodb,
    },
    // {
    //     title: 'GraphQL',
    //     link: graphql,
    // },
    // {
    //     title: 'Redux',
    //     link: redux,
    // },
    // {
    //     title: 'Firebase',
    //     link: firebase,
    // },
    {
        title: 'npm',
        link: npm,
    },
    {
        title: 'Postman',
        link: postman,
    },
    {
        title: 'Vite',
        link: vite,
    },
    {
        title: 'Figma',
        link: figma,
    },
    {
        title: 'C',
        link: c,
    },
    {
        title: 'C++',
        link: cpp,
    },
    {
        title: 'Git',
        link: git,
    },
    {
        title: 'GitHub',
        link: github,
    },
    {
        title: 'VS Code',
        link: vscode,
    },
    {
        title: 'Bootstrap',
        link: bootstrap,
    },
];

const projectsConstrain = [
    {
        heading: 'QR Code Generator',
        img: [qrcodeImg1, qrcodeImg2, qrcodeImg3],
        details: 'This is a simple QR code generator web application that allows users to create QR codes for various types of data. The project is built using HTML5, CSS3 and JavaScript.',
        github: 'https://github.com/krishna-singha/QR-Code-Generator',
        website: 'https://krishna-singha.github.io/QR-Code-Generator/',
    },
    {
        heading: 'Tic Tac Toe',
        img: [tictacImg1, tictacImg2, tictacImg3],
        details: 'Tic Tac Toe is a simple timeless and classic game of two-player contest that unfolds on a 3x3 grid. The project is built using HTML5, CSS3, TypeScript and React.',
        github: 'https://krishna-singha.github.io/Tic-Tac-Toe',
        website: 'https://krishna-singha.github.io/Tic-Tac-Toe/',
    },
    {
        heading: 'Portfolio',
        img: [portfolioImg1, portfolioImg2, portfolioImg3],
        details: 'Welcome to my personal portfolio website! This website is designed to provide an overview of my professional background, showcase my projects, skills, education, blogs, and more.',
        github: '',
        website: 'https://ksingha.design',
    },
    {
        heading: 'MedConsole Pro',
        img: [medconsoleImg1, medconsoleImg2, medconsoleImg3],
        details: 'The MedConsole Pro is a JavaScript command-line interface designed to provide users with the ability to register, login, and manage appointments with doctors. For more, check out my GitHub repository.',
        github: 'https://github.com/krishna-singha/MedConsole-Pro',
        website: '',
    },
    {
        heading: 'Zerodha Clone',
        img: [zerodhaImg1, zerodhaImg2, zerodhaImg3],
        details: 'This project is a clone of the homepage of Zerodha, a leading stock brokerage platform in India. Using HTML5, CSS3, SCSS, and JavaScript. To see a live demo, click on the website button.',
        github: 'https://github.com/krishna-singha/Zerodha-Clone',
        website: 'https://krishna-singha.github.io/Zerodha-Clone/',
    },
    {
        heading: 'Apple Clone',
        img: [appleImg1, appleImg2, appleImg3],
        details: 'This project is a clone of the homepage of Apple (India). Using HTML5, CSS3, and JavaScript. This is fully responsive on all devices. To see a live demo, click on the website button.',
        github: 'https://github.com/krishna-singha/Apple-Clone',
        website: 'https://krishna-singha.github.io/Apple-Clone/',
    },
];


export {
    navConstrain,
    skillsConstrain,
    projectsConstrain,
}
