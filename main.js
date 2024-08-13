const box = document.getElementsByTagName("span");
const paragraphe = document.getElementById("prg");

// const popx = document.getElementById("popx");
// const popo = document.getElementById("popupo");
// const container =document.getElementsByClassName("CONTAINER");

let count = 0;
function handelX(event) {
  if (count == 0 && event.target.innerHTML == "") {
    event.target.innerHTML = "X";
    count++;
  } else if (count % 2 !== 0 && event.target.innerHTML == "") {
    event.target.innerHTML = "O";
    count++;
  } else if (count % 2 == 0 && event.target.innerHTML == "") {
    event.target.innerHTML = "X";
    count++;
  }
  TestXo();
}
const TestXo= ()=>{ 
    console.log(box[0].innerHTML)
    console.log(paragraphe.innerHTML)
    if(box[0].innerHTML=="X" && box[1].innerHTML=="X" && box[2].innerHTML=="X" 
    || box[0].innerHTML=="X" && box[3].innerHTML=="X" && box[6].innerHTML=="X" 
    || box[1].innerHTML=="X" && box[4].innerHTML=="X" && box[7].innerHTML=="X" 
    || box[3].innerHTML=="X" && box[4].innerHTML=="X" && box[5].innerHTML=="X" 
    || box[2].innerHTML=="X" && box[5].innerHTML=="X" && box[8].innerHTML=="X" 
    || box[6].innerHTML=="X" && box[7].innerHTML=="X" && box[8].innerHTML=="X" 
    || box[0].innerHTML=="X" && box[4].innerHTML=="X" && box[8].innerHTML=="X" 
    || box[2].innerHTML=="X" && box[4].innerHTML=="X" && box[6].innerHTML=="X" ){ 
        paragraphe.style.backgroundColor="red";
        paragraphe.style.color="black";
        paragraphe.innerHTML="X | Winner";
        popx.style.display="flex";
        // setTimeout(()=>{
        // },2000)
        setTimeout(()=>{
          popx.style.display="none";
          Refrech()
        },2000);
        
        // if(popo.style.display=="flex"){

        //   }
        // }
    }else if(box[0].innerHTML=="O" && box[1].innerHTML=="O" && box[2].innerHTML=="O" 
        || box[0].innerHTML=="O" && box[3].innerHTML=="O" && box[6].innerHTML=="O" 
        || box[1].innerHTML=="O" && box[4].innerHTML=="O" && box[7].innerHTML=="O" 
        || box[3].innerHTML=="O" && box[4].innerHTML=="O" && box[5].innerHTML=="O" 
        || box[2].innerHTML=="O" && box[5].innerHTML=="O" && box[8].innerHTML=="O" 
        || box[6].innerHTML=="O" && box[7].innerHTML=="O" && box[8].innerHTML=="O" 
        || box[0].innerHTML=="O" && box[4].innerHTML=="O" && box[8].innerHTML=="O" 
        || box[2].innerHTML=="O" && box[4].innerHTML=="O" && box[6].innerHTML=="O"){
            paragraphe.style.backgroundColor="green";
            paragraphe.style.color="black";
            paragraphe.innerHTML="O | Winner";
            // popo.style.display="flex";

        }else{
            paragraphe.style.backgroundColor="rgba(118, 7, 118, 0.912";
            paragraphe.style.color="black";
        }
        }
        function Refrech(){
            location.reload();
        }

 
