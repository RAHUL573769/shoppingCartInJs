// console.log('I am in a separate file')

function updateProductNumber(product,price,isIncreasing){
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
const productTotal=document.getElementById(product +'-price');
productTotal.innerText=caseNumber*price;

    // console.log(caseNumber);
}

document.getElementById('case-plus').addEventListener('click',function(){

updateProductNumber('case',59,true);

});
document.getElementById('case-minus').addEventListener('click',function(){

 updateProductNumber( 'case',59,false)
;
})



//phone incresde decrease
document.getElementById('phone-plus').addEventListener('click',function(){

    // console.log("clicjked");
    updateProductNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
updateProductNumber('phone',1219,false);
})