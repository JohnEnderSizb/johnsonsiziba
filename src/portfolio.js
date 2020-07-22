
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Johnson A. Siziba",
  title: "Hi, I'm Johnson A. Siziba",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "www.google.com"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/JohnEnderSizb",
  linkedin: "https://www.linkedin.com/in/johnson-siziba-804a091a3/",
  gmail: "siziba.2099@gmail.com",
  facebook: "https://www.facebook.com/johnsona.siziba",
  twitter: "https://twitter.com/andrew_siziba"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/yokers.png"),
      link: "http://www.yokers.systems"
    },
    {
      image: require("./assets/images/luceat.png"),
      link: "http://www.luceat.tech/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "YUUY IHLH UGUY",
      subtitle: "lorem j,bef waefkjnbwe wfk.jn.kwe qwk.dnqw qwdk.nqw wfk.nqw qwdk.n",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/" },
        { name: "Certification", url: "https://drive.google.com/" },
        { name: "Certification", url: "https://drive.google.com/" }
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "My Blog",
  subtitle: "I'm passionate about technology and I love sharig my knowledge with others.",

  blogs: [
    {
      url: "http://sizibascode.herokuapp.com/pandas",
      title: "Pandas Tutorial",
      description: "Pandas is the most popular python library that is used for data analysis. It provides high-performance, easy-to use data structures and..."
    },
    {
      url: "http://sizibascode.herokuapp.com/data_types",
      title: "Data Types In Statistics",
      description: "When working with statistics, it's important to recognize the different types of data. There are variations and techniques which..."
    },
    {
      url: "http://sizibascode.herokuapp.com/mean_median_mode",
      title: "Mean, Median and Mode",
      description: "The mean is also called average. The mean  is equal to the sum of values divided by the number of values..."
    }

  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY ... 😅"),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "https://www.facebook.com/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["wwww.google.com"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Do you want to discuss a project with me or just say Hi? My Inbox is open for all.",
  number: "+263-784310119",
  email_address: "siziba.2099@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "andrew_siziba"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
