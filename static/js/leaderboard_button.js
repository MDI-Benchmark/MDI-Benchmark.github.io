// leaderboard_button
function changeButtonText() {
    var button = document.getElementById('toggleButton');
    //change display content
    if (button.innerHTML.includes("Level 1 Accuracy Leaderboard")) {
      button.innerHTML = "<b style='font-size: larger;'>Level 2 Accuracy Leaderboard</b> (Click to Switch)";
    } else {
      button.innerHTML = "<b style='font-size: larger;'>Level 1 Accuracy Leaderboard</b> (Click to Switch)";
    }
}

// Binding form
function toggleTables () {
    var table1 = document.getElementById('table1');
    var table2 = document.getElementById('table2');
    table1.classList.toggle('hidden');
    table2.classList.toggle('hidden');
    
    // var desc1 = document.querySelector('p.validation-desc');
    // var desc2 = document.querySelector('p.test-desc');
    // desc1.classList.toggle('hidden');
    // desc2.classList.toggle('hidden');
}
