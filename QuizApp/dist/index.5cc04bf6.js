JSON.parse('[{"id":1,"question":"What is the keyword for determine the constant value at Javascript ?","answer1":"let","answer2":"var","answer3":"object","answer4":"const","correctAnswer":"answer4"},{"id":2,"question":"In the JavaScript, which one of the following is not considered as an error ?","answer1":"Syntax error","answer2":"Missing of semicolons","answer3":"Division by zero","answer4":"Missing of bracket","correctAnswer":"answer2"},{"id":3,"question":"Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters ?","answer1":"slice()","answer2":"split()","answer3":"substr()","answer4":"search()","correctAnswer":"answer3"},{"id":4,"question":"In JavaScript the x===y statement implies that :","answer1":"Both x and y are equal in value, type and reference address as well.","answer2":"Both are x and y are equal in value only.","answer3":"Both are equal in the value and data type.","answer4":"Both are not same at all.","correctAnswer":"answer3"},{"id":4,"question":"In JavaScript the x===y statement implies that :","answer1":"Both x and y are equal in value, type and reference address as well.","answer2":"Both are x and y are equal in value only.","answer3":"Both are equal in the value and data type.","answer4":"Both are not same at all.","correctAnswer":"answer3"},{"id":5,"question":"Which one of the following is an ternary operator ? ","answer1":"?","answer2":":","answer3":"-","answer4":"+","correctAnswer":"answer1"},{"id":6,"question":"\'An expression that can legally appear on the left side of an assignment expression.\' is a well known explanation for variables, properties of objects, and elements of arrays. They are called : ","answer1":"Properties","answer2":"Prototypes","answer3":"Definition","answer4":"Lvalue","correctAnswer":"answer4"},{"id":7,"question":"In a case, where the value of the operator is NULL , the typeof returned by the unary operator is called : ","answer1":"object","answer2":"string","answer3":"boolean","answer4":"undefined","correctAnswer":"answer1"},{"id":8,"question":"A collection of elements of the same data type which may either in order or not, is called : ","answer1":"String","answer2":"Array","answer3":"Serialized Object","answer4":"Object","correctAnswer":"answer2"},{"id":9,"question":"Which one of the following keywords is used for defining the function in the JavaScript ?","answer1":"Void","answer2":"init","answer3":"main","answer4":"function","correctAnswer":"answer4"},{"id":10,"question":"Which of the following methods is used to access HTML elements using Javascript ?","answer1":"getElementById","answer2":"getElementsByClassName()","answer3":"Both A and B","answer4":"None of the above","correctAnswer":"answer3"}]');localStorage.getItem("answeredQuestions")&&JSON.parse(localStorage.getItem("answeredQuestions"));const e=e=>{const t=document.getElementById(e);t.classList.add("invisible"),t.classList.remove("visible")},t=e=>{const t=document.getElementById(e);t.classList.add("visible"),t.classList.remove("invisible")},a=e=>{localStorage.setItem("user",JSON.stringify({name:e,score:0}));let t=localStorage.getItem("user");t&&(t=JSON.parse(t),document.getElementById("startGameModal-callingName").innerText=`So ${t.name}`)},n=()=>{localStorage.removeItem("user")};document.querySelector("#homepage-startGame button").addEventListener("click",(()=>{t("enterNameModal")})),document.querySelector("#enterNameModal button[type=submit]").addEventListener("click",(()=>{let n=document.querySelector("#enterNameModal input").value;!n||n.length>8?alert("Wrong"):(e("enterNameModal"),a(n),t("startGameModal"))})),document.querySelector("#startGameModal .close-button").addEventListener("click",(()=>{e("startGameModal"),n()})),document.querySelector("#enterNameModal .close-button").addEventListener("click",(()=>{e("enterNameModal"),fetchAllQuestions()})),document.querySelectorAll(".startGameModal-buttons button")[0].addEventListener("click",(()=>{window.location.href="./questions.html"})),document.querySelectorAll(".startGameModal-buttons button")[1].addEventListener("click",(()=>{e("startGameModal"),n()}));
//# sourceMappingURL=index.5cc04bf6.js.map