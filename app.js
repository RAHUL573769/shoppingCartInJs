// console.log('I am in a separate file')

function updateCaseNumber(isIncreasing){
    const caseInputText=document.getElementById('case-number');

    let  caseNumber=caseInputText.value;
    if(isIncreasing==true){
        caseNumber=parseInt(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1
    }
caseInputText.value=caseNumber;
//update case price
const caseTotal=document.getElementById('case-price');
caseTotal.innerText=caseNumber*59;

    // console.log(caseNumber);
}

document.getElementById('case-plus').addEventListener('click',function(){

updateCaseNumber(true);

});
document.getElementById('case-minus').addEventListener('click',function(){

 updateCaseNumber(false)
;
})