const quizes = [
  
    {
      question: "Q1: Javascript is an _______ language?",
      a: "Object Oriented",
      b: "Object based",
      c: "Procedural",
      d: "None of these",
      ans: "opt1",
      corA: "Object Oriented"
    },
    {
      question: "Q2: Which of the following keywords is used to define a variable in Javascript?",
      a: "var",
      b: "let",
      c: "Both a and b",
      d: "None",
      ans: "opt3",
      corA: "Both a and b"
    },
    {
      question: "Q3: Which of the following methods is used to access HTML elements using Javascript?",
      a: "document.getElementById()",
      b: "document.getElementsByClassName()",
      c: "Both a and b",
      d: "None",
      ans: "opt3"
    },
    {
      question: "Q4: What is the output '3'+4?",
      a: "7",
      b: "error",
      c: "34",
      d: "none",
      ans: "opt3",
      corA: "34"
    },
    {
      question: "Q5: Which of the following methods can be used to display data in some form using Javascript?",
      a: "document.write()",
      b: "console.log()",
      c: "window.alert()",
      d: "All",
      ans: "opt4",
      corA: "All"
    },
    {
      question: "Q6: How can a datatype be declared to be a constant type?",
      a: "const",
      b: "let",
      c: "constant",
      d: "none",
      ans: "opt1",
      corA: "const"
    },
    {
      question: "Q7: When an operator’s value is NULL, the typeof returned by the unary operator is?",
      a: "boolean",
      b: "object",
      c: "undefined",
      d: "integer",
      ans: "opt2",
      corA: "object"
    },
    {
      question: "Q8: Which of the following are closures in Javascript?",
      a: "functions",
      b: "variables",
      c: "objects",
      d: "All",
      ans: "opt4",
      corA: "All"
    },
    {
      question: "Q9: Which of the following is not a Javascript framework?",
      a: "Node",
      b: "React",
      c: "Vue",
      d: "Cassandra",
      ans: "opt4",
      corA: "Cassandra"
    },
    {
      question: "Q10: How to stop an interval timer in Javascript?",
      a: "clearInterval",
      b: "clearTimer",
      c: "intervalOver",
      d: "none",
      ans: "opt1",
      corA: "clearInterval"
    }
    
  ]
  const question = document.querySelector(".question");
  const option1 = document.querySelector("#op1");
  const option2 = document.querySelector("#op2");
  const option3 = document.querySelector("#op3");
  const option4 = document.querySelector("#op4");
  const submit = document.querySelector("#btn");
  const answers = document.querySelectorAll(".option");
  const ansArea = document.querySelector("#div2");
  const queArea = document.querySelector("#div1");
  const restart = document.querySelector("#restartid");
  const right = document.querySelector("#correctid");
  const wrong = document.querySelector("#incorrectid");
  const next = document.querySelector("#btn-next");
  const corrAns = document.querySelectorAll(".QA");
  const que = document.querySelector("#Quiz");
  const finalAnswer = document.querySelector("#finalAnswer");
  
  let quesCount = 0;
  let score = 0;
  
  document.getElementById("scoreId").style.display = "none";
  
  
  const startQuiz = () => {
    deselectAll();
    question.innerText = quizes[quesCount].question;
    option1.innerText = quizes[quesCount].a;
    option2.innerText = quizes[quesCount].b;
    option3.innerText = quizes[quesCount].c;
    option4.innerText = quizes[quesCount].d;
  
    var ansItem = document.createElement("li");
    ansItem.innerHTML = `
    <span>${quizes[quesCount].question}</span>
    <span class="green">${quizes[quesCount].corA}</span>
    `;
    finalAnswer.appendChild(ansItem);
  }
  startQuiz();
  
  const getAnswercheck = () =>{
    let answ ;
    let f=false;
    answers.forEach((currAns) => {
      if(currAns.checked){
        f = true;
        answ = currAns.id;
      }
    });
    
      return answ;
    
  };
  
  function deselectAll() {
    answers.forEach(currAns => currAns.checked = false);
  }
  
  function disable(){
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
  }
  
  function able(){
    document.getElementById("opt1").disabled = false;
    document.getElementById("opt2").disabled = false;
    document.getElementById("opt3").disabled = false;
    document.getElementById("opt4").disabled = false;
  }
  
  submit.addEventListener("click", () => {
    const checkedAns = getAnswercheck();
    console.log(checkedAns);
    if(checkedAns === quizes[quesCount].ans){
      score++;
      right.classList.remove("correct");
      right.style.display = "";
  
      quesCount++;
      submit.style.display="none";
      next.classList.remove("button-nxt");
      next.style.display = "";
  
      disable();
      
    }
    else if (checkedAns == undefined){
      alert("Errorrrrrr.......");
  
    }
    else{
      wrong.classList.remove("incorrect");
      wrong.style.display = "";
  
      quesCount++;
      submit.style.display="none";
      next.classList.remove("button-nxt");
      next.style.display = "";
  
      disable();
    };
  });
  
  
  next.addEventListener("click", () => {
    submit.style.display = "";
    next.style.display = "none";
    right.style.display = "none";
    wrong.style.display = "none";
    deselectAll();
    able();
    if(quesCount < quizes.length){
      startQuiz();
    }
    else{
      console.log(score);
      queArea.style.display="";
      que.innerText = "Score : " + score;
      document.getElementById("inId").style.display = "none";
      document.getElementById("scoreId").classList.remove("disable");
      document.getElementById("scoreId").style.display = "";
      console.log(corrAns);
      //ansArea.classList.remove("score");
      
    };
  });
  
  
  
  
  