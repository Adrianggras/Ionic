function onLoad() {
    document.addEventListener("ionChange", setStyle);
    setStyle();
}

function setStyle() {
    document.querySelectorAll("ion-button").forEach(function(b) {
        b.expand = "block";
        b.strong = "true";
        //b.fill = document.getElementById("type").value;
        b.size = document.getElementById("size").value;
    });
}
let bol=true;
let punto=false;

function n(num){

    bol=false;
    
    if(document.getElementById("txt").innerHTML!="0")
    {
        document.getElementById("txt").innerHTML+=num;
    }
    else{
        document.getElementById("txt").innerHTML=num;
    }
}
function l(letra){

    if(bol===false)
        {
            document.getElementById("txt").innerHTML+=letra;
            bol=true;
        }
}
function del(){
    document.getElementById("txt").innerText="0";

}
function calcula(){
    document.getElementById("txt").innerHTML=eval(document.getElementById("txt").innerHTML);
}