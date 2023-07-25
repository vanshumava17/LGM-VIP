let str = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            str = eval(str);
            document.querySelector(".screen input").value = str;
        }
        else if(e.target.value == 'AC'){
            str = "";
            document.querySelector(".screen input").value = str;
        }
        else if(e.target.value == 'C'){
            str = str.slice(0,str.length-1);
            document.querySelector(".screen input").value = str;
        }
        else {
            str = str + e.target.value;
            document.querySelector(".screen input").value = str;
        }

    }) 
            // Vansh Umava

});