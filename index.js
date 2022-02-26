import './index.css';

const start = () => {
    let pressButton = localStorage.getItem("press");

    const button = document.querySelector("[class*='button']");
    
    if(!pressButton){
        button.parentNode.style.display = "flex";
    }
    else{
        button.parentNode.style.display = "none";
    }

    button.addEventListener("click", e => {
        pressButton = true;
        localStorage.setItem("press", pressButton);

        e.target.parentNode.style.display = "none";    
    });    
};

start();
//localStorage.removeItem("press");
