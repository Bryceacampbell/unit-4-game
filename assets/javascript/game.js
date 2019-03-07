var totalScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {

    
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").text(targetNumber);
    attachCrystalValues();

    $(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#total-score-counter").text(totalScore);

        if (totalScore === targetNumber) {
            wins++;
            $("#wins-counter").text(wins);
            totalScore = 0;
            $("#total-score-counter").text(totalScore);
            attachCrystalValues();
          }

          else if (totalScore >= targetNumber) {
            losses++;
            $("#losses-counter").text(losses);
            totalScore = 0;
            $("#total-score-counter").text(totalScore);
            attachCrystalValues();
          }
    });
});

var crystalValue = function () {
    return Math.floor(Math.random() * 12) + 1;
}

//string interpolation 
function attachCrystalValues(){
    for (let index = 1; index < 5; index++) {
        $(`#crystal-${index}`).attr("data-crystalvalue", crystalValue());
    }
}





