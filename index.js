const tabPositive = document.getElementById("tab-positive");
tabPositive.addEventListener("input", function(){tabChange("Positive", tabPositive, 1)});
const tabNegative = document.getElementById("tab-negative");
tabNegative.addEventListener("input", function(){tabChange("Negative", tabNegative, 2)});
const tabNeutral = document.getElementById("tab-neutral");
tabNeutral.addEventListener("input", function(){tabChange("Neutral", tabNeutral , 3)});

const pContent = document.getElementById("p-content");

const btntab = document.getElementById("btn-tab");

btntab.addEventListener("click", index);

function tabChange( Content , tab , number){
    if(number === 1 ){
        tabPositive.checked = true;
    }else if(number === 2 ){
        tabNegative.checked = true;
    }else if(number === 3 ){
        tabNeutral.checked = true;
    }
    if (tab.checked === true) {
        pContent.innerHTML = Content + " content";
    }
}
function index(){
    let inputvalue = document.getElementById("index").value;
    if(inputvalue === "1" ){
        tabChange("Positive", tabPositive ,1);
    }else if (inputvalue === "2") {
        tabChange("Negative",tabNegative,2);
    }else if (inputvalue === "3"){
        tabChange("Neutral",tabNeutral,3);
    }else if(inputvalue !== "") {
        alert("Index is invalid");
    }
    
}
