const researchTable = document.querySelector(".main");


const research = [{

    title: "Can Artificial Intelligence Replace Humans?", authors: "Nikhil Singh", researchYr: 2022, 
    conferences: "Institute of Electrical and Electronics Engineers Xplore", citebox: "popup1", 
    image: "Images/Explore/Artificial Intelligence.png",
    citation: { vancouver: "To be updated" }, abstract: "To be updated", absbox: "absPopup1",
  }
];


AOS.init(); const fillData = () => {

  let output = "";

  research.forEach(({ image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract, }) =>
      
    (output += `

      <tr data-aos="zoom-in-left"> 

        <td class="imgCol"><img src="${image}" class="rImg"></td>

        <td class="researchTitleName">

          <div class="img-div">

            <span class="imgResponsive">

              <img src="${image}" class="imgRes">
            </span>
          </div>

          <a href="#0" class="paperTitle">${title}</a><br><br>
          <div class="authors">${authors} &nbsp; | &nbsp; ${researchYr}</div><br>

          <div class="rConferences">${conferences}</div>
  
          <div class="d-flex" style="margin-right: 5%;">

            <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">ABSTRACT</button>
            <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">CITE</button>
          </div>

          <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
            
            <div class="card-body">${abstract}</div>
          </div>

          <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
            
            <div class="card-body">${citation.vancouver}</div>
          </div>
        </td>
      </tr>`)
    );

  researchTable.innerHTML = output;
};


document.addEventListener("DOMContentLoaded", fillData);
