let button = document.querySelector ("#img");
let body = document.querySelector ("body");

let currMode = "light";

button.addEventListener ("click", ()=>{
    if (currMode === "light"){
        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.style.backgroundImage = "url('moon1.png')";
        button.style.backgroundSize = "cover";
    }
    else {
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.style.backgroundImage = "url('sun1.png')";
    }
    console.log (currMode);
});