//Selecting Element Using Dom Method

var formTag=document.getElementById('btn-submit');
var inputTag = document.querySelectorAll('.inputTag');
var result= document.getElementById('result');
var popUp= document.getElementById('modal-wrapper');
var backButton= document.getElementById('backButton');
var reload= document.getElementById('reload');

var arr=[];
var response=[3,1,3,3,2];
var id;
var quesNumber;

formTag.addEventListener('click',function(e){
e.preventDefault();
inputTag.forEach(element => {
        if(element.checked){
            id= element.id;
            id=id.substring(5);
            id=id%4;
            quesNumber= element.name;
            quesNumber=quesNumber.substring(1);
            arr[quesNumber]=id;
        }
});
correctAnswerCount()
})
   
var count=0;

function correctAnswerCount(){
            for(var i=0;i<response.length;++i){
                if(response[i]==arr[i+1])
                count++;
            }
            console.log(arr)
            console.log(count);
            result.innerHTML=`${count} / 5`;
            popUp.style.display='block';
            
    
    
        }
backButton.addEventListener('click',function(){
    popUp.style.display="none";
    count=0;
})
reload.addEventListener('click',function(){
    location.reload();
})
