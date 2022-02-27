// $(document).ready(function() {

//     console.log('Script Loaded');
//     var value1=0,value2=0,value3=0,value4=0,value5=0;
//     var count=0;
// //for 1st
//    $('#input1').click(function(){
//         value1 = document.getElementById('input1').value
//        var q1=document.getElementById('input1').name
//        console.log(value1,q1)
//    })
//    $('#input2').click(function(){
//      value1 = document.getElementById('input2').value
//     var q1=document.getElementById('input2').name
//     console.log(value1,q1)
// })
// $('#input3').click(function(){
//      value1 = document.getElementById('input3').value
//     var q1=document.getElementById('input3').name
//     console.log(value1,q1)
// })
// $('#input4').click(function(){
//      value1 = document.getElementById('input4').value
//     var q1=document.getElementById('input4').name
//     console.log(value1,q1)
// })
// $('#input5').click(function(){
//      value2 = document.getElementById('input5').value
//     var q2=document.getElementById('input5').name
//     console.log(value2,q2)
// })

// //for 2nd

// $('#input6').click(function(){
//      value2 = document.getElementById('input6').value
//     var q2=document.getElementById('input6').name
//     console.log(value2,q2)
// })
// $('#input7').click(function(){
//      value2 = document.getElementById('input7').value
//     var q2=document.getElementById('input7').name
//     console.log(value2,q2)
// })
// $('#input8').click(function(){
//      value2 = document.getElementById('input8').value
//     var q2=document.getElementById('input8').name
//     console.log(value2,q2)
// })
// $('#input9').click(function(){
//      value3 = document.getElementById('input9').value
//     var q3=document.getElementById('input9').name
//     console.log(value3,q3)
// })
// $('#input10').click(function(){
//      value3 = document.getElementById('input10').value
//     var q3=document.getElementById('input10').name
//     console.log(value3,q3)
// })

// //for 3
// $('#input11').click(function(){
//      value3 = document.getElementById('input11').value
//     var q3=document.getElementById('input11').name
//     console.log(value3,q3)
// })
// $('#input12').click(function(){
//      value3 = document.getElementById('input12').value
//     var q3=document.getElementById('input12').name
//     console.log(value3,q3)
// })
// $('#input13').click(function(){
//      value4 = document.getElementById('input13').value
//     var q4=document.getElementById('input13').name
//     console.log(value4,q4)
// })
// $('#input14').click(function(){
//      value4 = document.getElementById('input14').value
//     var q4=document.getElementById('input14').name
//     console.log(value4,q4)
// })
// $('#input15').click(function(){
//      value4 = document.getElementById('input15').value
//     var q4=document.getElementById('input15').name
//     console.log(value4,q4)
// })

// // for 4

// $('#input16').click(function(){
//      value4 = document.getElementById('input16').value
//     var q4=document.getElementById('input16').name
//     console.log(value4,q4)
// })
// $('#input17').click(function(){
//      value5 = document.getElementById('input17').value
//     var q5=document.getElementById('input17').name
//     console.log(value5,q5)
// })
// $('#input18').click(function(){
//      value5 = document.getElementById('input18').value
//     var q5=document.getElementById('input18').name
//     console.log(value5,q5)
// })
// $('#input19').click(function(){
//      value5 = document.getElementById('input19').value
//     var q5=document.getElementById('input19').name
//     console.log(value5,q5)
// })
// $('#input20').click(function(){
//      value5 = document.getElementById('input20').value
//     var q5=document.getElementById('input20').name
//     console.log(value5,q5)
// })


// $('#btn-submit').click(function(){
//     $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data,status){
//         var response= data;
//         var arr=[value1,value2,value3,value4,value5];
//         for(var i=0;i<response.length;i++){
//             console.log(response[i].answer)
//             console.log(arr[i])
//            if(arr[i]==response[i].answer){
//                count++;
//            }
//         }
//         console.log('function called')
//         $('#result').html(count)
//         $('#modal-wrapper').css('display','block')
       
//     })
// })

// });
var formTag=document.getElementById('btn-submit');
var inputTag = document.querySelectorAll('.inputTag');
var result= document.getElementById('result');
var popUp= document.getElementById('modal-wrapper');
var backButton= document.getElementById('backButton');
var reload= document.getElementById('reload');

var arr=[];
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
getQuestionfromBackend()
})
   
var count=0;

function getQuestionfromBackend(){
    var http= new XMLHttpRequest();
    http.open('GET','http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',true);
    http.onreadystatechange = function(){
        if(this.readyState===4 && this.status===200){
            var response= JSON.parse(this.responseText)
            for(var i=0;i<response.length;++i){
                if(response[i].answer==arr[i+1])
                count++;
            }
            console.log(arr)
            console.log(count);
            result.innerHTML=`${count} / 5`;
            popUp.style.display='block';
            
        }
    }
    http.send();
}
backButton.addEventListener('click',function(){
    popUp.style.display="none";
    count=0;
})
reload.addEventListener('click',function(){
    location.reload();
})
