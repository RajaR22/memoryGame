// // :::::::Random::::::::

let images=["image/bettergourd.jpg","image/pepper.jpg","image/bettergourd.jpg","image/pepper.jpg","image/cabbage.jpg" 
,"image/egplane.jpg" ,"image/cabbage.jpg","image/egplane.jpg" ];


let random_indice=[];
let indice=Math.floor(Math.random() * 8);
random_indice.push(indice);

while(random_indice.length<8){
    indice=Math.floor(Math.random() * 8);
    let exist = random_indice.indexOf(indice);
    if(exist<0){
        random_indice.push(indice);
    }
}

for(let i=0;i<images.length;i++){
    document.getElementById(`img${i+1}`).src=`${images[random_indice[i]]}`;
}

// /////////////////////////////////////////

function openPicture(selectedItem){
    let id_card=selectedItem.getAttribute("id");
    document.getElementById(id_card).style.backgroundImage="none";

   console.log(document.getElementById(id_card).childNodes[1]);
   let id_img=document.getElementById(id_card).childNodes[1].id;
   console.log(id_img);
   document.getElementById(id_img).style.display="block";

}

// ///////////////////////FLIPCARD//////////////////////////


const Cards = document.querySelectorAll('.card');
Cards.forEach((card) => card.addEventListener("click",flipCard));
function flipCard(){
    this.classList.toggle("flip");
}


// match card ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let first;
// let second;
// let matchCounter = 0;
// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
//     card.addEventListener('click', function() {
//         if (!first && !second) {
//             first = card;
//             card.classList.add('show');
//         } else if (first && !second) {
//             second = card;
//             card.classList.add('show');
//             if (first.innerHTML === second.innerHTML) {
//                 first.style.pointerEvents = 'none';
//                 second.style.pointerEvents = 'none';
//                 first = null;
//                 second = null;
//                 matchCounter++;
//                 if (matchCounter >= 6) setTimeout(() => alert('Game done! Refresh page to replay.'), 2000 );
//             } else {
//                 first.classList.add('hide');
//                 second.classList.add('hide');
//                 setTimeout(() => {
//                     first.classList.remove('show');
//                     second.classList.remove('show');
//                     first.classList.remove('hide');
//                     second.classList.remove('hide');
//                     first = null;
//                     second = null;
//                 }, 2000);
//             }
//         }

//     })
// });