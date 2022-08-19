// VARIABLES
let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian Ocean","Pacific Ocean","Atlantic Ocean","Nile River"],
      answer:"Pacific Ocean"
    }
]
let content = document.querySelector("#content");

// BUILDS A HEADER (H1) FOR THE QUIZ
let h1 = document.createElement("h1");
h1.textContent = "Quiz";
content.appendChild(h1);
h1.style.display = "block";
h1.style.textAlign = "center";
h1.style.fontSize = "32px";

// STYLE DOM
document.querySelector("body").style.display = "flex";
document.querySelector("body").style.flexWrap = "wrap";
document.querySelector("body").style.justifyContent= "center";
content.style.width = "80%";
content.style.maxWidth = "550px";

// PLAY QUIZ FUNCTION ====>
playQuiz = () =>{

  // WRITE INDEX NUMBERS FOR EACH OBJECT
  data.forEach(function(item, index, array) {

  // DISPLAY QUIZ ELEMENTS
    // VARIABLES TO CREATE HTML ELEMENTS
    let quizImage = document.createElement("img");
    let quizQuestion = document.createElement("h2");
    let quizArticle = document.createElement("article");
    let choices = item.choice.toString();
    let choicesArray = choices.split(",");

    // STYLE
    quizArticle.style.textAlign = "center";
    quizImage.style.width = "100%";
    quizImage.style.marginTop = "60px";
    quizQuestion.style.fontSize = "20px";

    // ATTRIBUTES
    quizImage.src = item.url;
    quizQuestion.innerText = item.question;
    quizArticle.id = index;

    // BUILDS HTML STRUCTURE (ARTICLE > IMG + H2 + BUTTONS)
    content.appendChild(quizArticle);
    quizArticle.appendChild(quizImage);
    quizArticle.appendChild(quizQuestion);

    choicesArray.forEach((item) => {
      // VARIABLE
      let btn = document.createElement("button");

      // STYLE
      btn.style.padding = "10px 20px";
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
      btn.style.border = "none";
      btn.style.margin = "0 10px 10px 0";

      // ATTRIBUTES
      btn.innerText = item;
      btn.className = index;

      // BUILDS BUTTONS INSIDE ARTICLE
      quizArticle.appendChild(btn);
    })
  });

  // CHECK ANSWER ON BUTTON CLICK
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.innerText == data[btn.className].answer || btn.innerText == "false" && data[btn.className].answer == false  || btn.innerText == "true" && data[btn.className].answer == true){
        btn.style.backgroundColor = "green";
      }
      else{
        btn.style.backgroundColor = "red";
      }
    })
  });
}

playQuiz();
// <==== PLAY QUIZ FUNCTION