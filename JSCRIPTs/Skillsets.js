AOS.init();

const techStackCards = document.querySelector(".techstack-box");

const techStack = [

  {
    langImage: "Images/Skillsets/HTML.png", langName: "HTML",
    langDesc:  "<li>I worked with most of the HTML tags, and knows the clinet-server relationship in abstract. Futhermore, I know how to manipulate DOM, create own-attributes using data-* and to build HTML documents semantically.</li>",
  },

  {
    langImage: "Images/Skillsets/CSS.png", langName:  "CSS",
    langDesc:  "<li>I worked with most of the CSS styles, and kind-off know their nesting. Furthermore, I know how to create animations using keyframes, to use media queries to build responsive sites, and to use sibling selectors like > and +.</li>",
  },

  {
    langImage:"Images/Skillsets/Vanilla-JS.png", langName: "Vanilla JavaScript",
    langDesc: "<li>Build loads of projects using Javascript, some of the noteable mentions includes - 3D Rubik's Cube Solver. Futhermore, I also know how to make an Ajax requests as well as how to utilize clousers in JavaScript.</li>",
  },

  {
    langImage: "Images/Skillsets/Node.png", langName: "Node.js",
    langDesc: "<li>I have worked on projects employing Node.js which mainly dealt with event loops, scalable image applications, worker threads and clustering.</li>",
  },

  {
    langImage: "Images/Skillsets/Python.png",
    langName: "Python",
    langDesc: "<li>I worked on lots of AI/ML projects using Python. In particular, I have a fair set of knowledge about some of the lesser used concepts used in Python like - lambda functions, iterators and generators.</li>",
  },

  {
    langImage: "Images/Skillsets/CPlusPlus.png", langName: "C++",
    langDesc: "<li>I uses C++ for the endeavour of competitive programming (a mind sport). Also, I used C++ to built a couple of projects related to networking.</li>",
  },

  {
    langImage: "Images/Skillsets/Git.png", langName: "Git",
    langDesc: "<li>I have worked with Git in both modes namely - CLI and GUI. Futhermore, I know all the git-repository configurations, git-modify, git-add and git-commit artifacts, etc.</li>",
  },

  {
    langImage:"Images/Skillsets/Bootstrap.png", langName: "Bootstrap",
    langDesc: "<li>Bootstrap is always my goto CSS framework for building dynamic websites. Even I used Bootstrap to build this very portfolio website. I worked with modular and customized blocks of the content in Bootstrap called cards.</li>",
  },

  {
    langImage:"Images/Skillsets/React.png", langName: "React",
    langDesc: "<li>I worked with decent amount of the React components. Some of the advanced skills in React, like using Redux and creating any higher-order component to reuse component logic are among my expertise.</li>",
  },

  {
    langImage:"Images/Skillsets/C-Lang.png", langName:"C",
    langDesc:"<li>Being the first language in Engineering School I have constantly utilized C for all of system and kernel specific projects. Currently, I am working on smart UNIX shell which uses C language upto a large extent.</li>"
  },
];


const displayTechStacksCards = () => {

  const entireCardTemplate = 
  techStack.map((stack)=> { return ` 

    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
      
      <div class="tech_card text-justify">

        <div class="card_img">
          
          <img src ="${stack.langImage}" class="featured_image">
        </div>

        <div class="card_header">

          <header>

            <div class="text-center langName">
              <h4>${stack.langName}</h4>
            </div>
          </header>
                
          <ul class="description">${stack.langDesc}</ul>
        </div>
      </div>
    </div>`}).join('');

  techStackCards.innerHTML = entireCardTemplate;
};


document.addEventListener("DOMContentLoaded", displayTechStacksCards);
