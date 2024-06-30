var score = 0;

var character = document.getElementById("character");
var block = document.getElementById("block");
var scoreElement = document.getElementById("score");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lost. Your score is: " + score);
    } else if (blockLeft < 0 && blockLeft > -50 && characterTop < 130) {
        score++;
        scoreElement.innerHTML = "Score: " + score;
    }
}, 10);

document.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        jump();
    }
});
