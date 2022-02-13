// console.log('I am in a separate file')

function updateCaseNumber(product,price,isIncreasing){
    const caseInputText=document.getElementById(product +'-number');

    let  caseNumber=caseInputText.value;
    if(isIncreasing==true){
        caseNumber=parseInt(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1
    }
caseInputText.value=caseNumber;
//update case price
const caseTotal=document.getElementById(product +'-price');
caseTotal.innerText=caseNumber*price;

    // console.log(caseNumber);
}

document.getElementById('case-plus').addEventListener('click',function(){

updateCaseNumber('case',59,true);

});
document.getElementById('case-minus').addEventListener('click',function(){

 updateCaseNumber( 'case',59,false)
;
})



//phone incresde decrease
document.getElementById('phone-plus').addEventListener('click',function(){

    // console.log("clicjked");
    updateCaseNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
updateCaseNumber('phone',1219,false);
})