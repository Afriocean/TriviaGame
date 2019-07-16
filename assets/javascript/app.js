$(document).ready(function(){
    $("#start-button").click(function(){
  // ----------------------------------------------------------------
   // declaring the set value for the timer to 60 seconds
   // hide the start button and rules
        var number = 50;
        var correct = 0;
        var incorrect = 0 
        alert("The let game begin!");
      $("#start-button").on("click", start);  
      $("#submit").on("click", finish);  
      $("#restart").on("click", restart);  

   //starts the game and finishes the game
  // submits answers and finishes the game
  // ----------------------------------------------------------------
  //added event listener for every question
  $(".answers").on("click", test );  

  function test(event){
    console.log (event)
    if(event.target.nodeName !== 'INPUT') return
    if(event.target.dataset.correct){
// correct
correct ++
    } else {
incorrect ++
    }
  console.log(correct,incorrect)   
}
    

   // functions
      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
          hideMe("#start-button");
          hideMe(".rules");
          hideMe("#restart");
          hideMe("#results");
      }
      // decrements the timer by 1
      function timer(){
        number-- 
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          alert("Times Up!")
          stop(); // calls the stop function
        }
      }
      function stop(){
          clearInterval(counter); // stops the timer
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".answers").hide();
          $("#submit").hide();
      }
      function finish(){
        var userAnswer = $(this).val();
        
          number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
          clearInterval(counter); // stops the timer
          timer();
          validate(userAnswer);
      }
  
      function restart(){
          number = 50;
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
      // checks the users answers against the correct anwers
      function validate (userAnswer, correctAnswer) {
        //   var correctAnswer = $("input[name='q1']:checked").val();
        //   var userAnswer = $(this).val();
        console.log(userAnswer,correctAnswer)
          if(userAnswer === correctAnswer){
              correct++;
              return true
          } else {
              incorrect++;
              return false
          }
        //   alert("correct: " + correct);
      }

  // when the submit button is clicked, define the exact function
  // to check answers that we sumitted vs the correct answers
  // increment the correct answers variable
  // increment the incorrect answers variable
  // to display the correct and incorrect variables on page


  // ----------------------------------------------------------------
  //calling functions
        start(); // calls the start function
    });
  });