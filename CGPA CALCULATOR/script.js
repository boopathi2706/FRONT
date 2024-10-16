const images=[
    'backg1.jpg',
    'backg2.jpg',
    'backg3.jpg',
    'back2.jpg',
    'back3.jpg',
    'back4.webp',
    'back5.jpg',
    'back.jpg'
]
let currentIndex=0;
function change(){
    document.body.style.backgroundImage=`url(${images[currentIndex]})`;
    currentIndex=(currentIndex+1)%images.length;
}
setInterval(change,10000);
change();
var total_gca = 0;
var total_credit = 0;
function calculate() {
    const credit = Number(document.getElementById("Credit").value);
    const Grade = document.getElementById("grade_alpha").value;
    let Grade_value = 0;  // Use `let` instead of `const`

    switch (Grade) {
        case 'O':
            Grade_value = 10;
            break;
        case 'A+':
            Grade_value = 9;
            break;
        case 'A':
            Grade_value = 8;
            break;
        case 'B+':
            Grade_value = 7;
            break;
        case 'B':
            Grade_value = 6;
            break;
        case 'C':
            Grade_value = 5;
            break;
    }
  
    total_credit += credit;
    total_gca += credit * Grade_value;
   const total = total_gca / total_credit;
    
    if(total<6){
        document.getElementById("score1").style.color='red';
    }
    else if(total>=6 && total<8){
        document.getElementById("score1").style.color='yellow';
    }
    else{
        document.getElementById("score1").style.color='#40FF00';

    }
    document.getElementById("score1").innerText = total.toFixed(2);
    credit.value = "";
    Grade.value = "";
}
function toAdd(){
    document.getElementById("Credit").selectedIndex = 0;
    document.getElementById("grade_alpha").selectedIndex = 0;
    calculate();
}
