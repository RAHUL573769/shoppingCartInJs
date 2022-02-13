console.log('I am in a separate file')

document.getElementById('case-plus').addEventListener('click',function(){

const caseInputText=document.getElementById('case-number');

const caseNumber=caseInputText.value;
caseInputText.value=parseInt(caseNumber)+1;
// console.log(caseNumber);

})