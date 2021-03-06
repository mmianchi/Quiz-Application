
// *******************************
//  ********quiz Controller*******
//  ******************************

let quizController = (function () {

 // question Constructor
  function Question(id, qustionText, option, correctAnswer) {
    this.id = id;
    this.qustionText = qustionText;
    this.option = option;
    this.correctAnswer = correctAnswer;
  }
  return{
    addQuestionOnLocalStorage: function(newQuestText,opts) {
      let optionArr, corrAns, questionId, newQuestion;

      optionArr = [];
      questionId = 0;

      for(let i = 0; i < opts.length; i++){
        if(opts[i].value !== ''){
          optionArr.push(opts[i].value);
        }

        if(opts[i].previousElementSibling.checked && opts[i].value !== '') {
          corrAns = opts[i].value;
        }
      }

      newQuestion = new Question(questionId, newQuestText.value, optionArr, corrAns);
      console.log(newQuestion)
    }
  }
  
})();


// *******************************
//  ******** UI  Controller*******
//  ******************************


let UIController = (function () {
  let domItems = {
    //admin Panel
    questInsertBtn: document.getElementById("question-insert-btn"),
    newQuestionText: document.getElementById("new-question-text"),
    adminOption: document.querySelectorAll(".admin-option")
  };
  return {
    getDomItems: domItems
  };

})();

// *******************************
//  ********  Controller    *******
//  ******************************

let controller = (function (quizCtrl, UICtrl) {

  let selectDomItems = UICtrl.getDomItems;
  
  selectDomItems.questInsertBtn.addEventListener("click", function() {

    quizCtrl.addQuestionOnLocalStorage(selectDomItems.newQuestionText , selectDomItems.adminOption);

  });
})(quizController, UIController);