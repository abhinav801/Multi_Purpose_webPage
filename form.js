// $(document).ready(function(){
// var firstname=document.getElementById('first_name')
// var lastname=document.getElementById('last_name')
// var email=document.getElementById('email')


// firstname.addEventListener('input',function(e){
// var username=e.target.value;
// var pattern= /^[\w]{2,15}$/;
// var valid=pattern.test(username);
// if(!valid){
// $('#first_name_error').css('display','block')
// }
// else{
//     $('#first_name_error').css('display','none')
// }
// })
// lastname.addEventListener('input',function(e){
//     var username=e.target.value;
//     var pattern= /^[\w]{2,15}$/;
//     var valid=pattern.test(username);
//     if(!valid){
//     $('#last_name_error').css('display','block')
//     }
//     else{
//         $('#last_name_error').css('display','none')
//     }
//     })

//   email.addEventListener('input',function(e){
//         var username=e.target.value;
//         var pattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
//         var valid=pattern.test(username);
//         if(!valid){
//         $('#email_error').css('display','block')
//         }
//         else{
//             $('#email_error').css('display','none')
//         }
//         })
// var onenext=document.getElementById('StepOneNext');
// onenext.addEventListener('click',function(){
//     if(firstname.value!==undefined&& firstname.value!==null&& firstname.value!==''){
//         if(lastname!==undefined&& lastname!==null&& lastname!==''){
//             if(email!==undefined&& email!==null&& email!==''){
//                 $('#StepOneContainer').css('display','none');
//                 $('#StepTwoContainer').css('display','block')
//             }
//         }
//     }
// })
    
// });

var firstForm= document.getElementById('StepOneContainer');
var secondForm= document.getElementById('StepTwoContainer');
var thirdForm= document.getElementById('StepThreeContainer');
var firstStepNext= document.getElementById('StepOneNext');
var secondStepPrev= document.getElementById('StepTwoPrevious');
var secondStepNext= document.getElementById('StepTwoNext');
var thirdStepPrev= document.getElementById('StepThreePrevious');
var thirdStepSubmit= document.getElementById('StepThreeSubmit');
var successContainer= document.getElementById('SuccessContainer');
var firstName= document.getElementById('first_name');
var firstNameError = document.getElementById('first_name_error');
var email= document.getElementById('email');
var validEmail= document.getElementById('email_error');
var contact= document.getElementById('contact');
var contactError= document.getElementById('contact_error');
var relaod= document.getElementById('relaod');

firstStepNext.addEventListener('click',function(e){
    e.preventDefault()
    firstForm.style.display= 'none';
    secondForm.style.display= 'block';
})
secondStepPrev.addEventListener('click',function(e){
    e.preventDefault()
    firstForm.style.display= 'block';
    secondForm.style.display= 'none';
})
secondStepNext.addEventListener('click',function(e){
    e.preventDefault()
    thirdForm.style.display= 'block';
    secondForm.style.display= 'none';
})
thirdStepPrev.addEventListener('click',function(e){
    e.preventDefault()
    thirdForm.style.display= 'none';
    secondForm.style.display= 'block';
})
thirdStepSubmit.addEventListener('click',function(e){
    e.preventDefault()
    thirdForm.style.display= 'none';
    successContainer.style.display= 'block';
})

// FIRSTNAME validation
firstName.addEventListener('input',function(e){
    var pattern= /^[\w]{6,15}$/;
    var currentValue= e.target.value;
    var valid= pattern.test(currentValue)

    if(valid)
    firstNameError.style.display= 'none';

    else
    firstNameError.style.display= 'block'
})
//EMAIL validation
email.addEventListener('input', function(e){
    pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    var currentValue= e.target.value;
    valid= pattern.test(currentValue);
    
    if(valid)
    validEmail.style.display= 'none';

    else
    validEmail.style.display= 'block'
})
// CONTACT validation
contact.addEventListener('input', function(e){
    pattern=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    var currentValue= e.target.value;
    valid= pattern.test(currentValue);
    
    if(valid)
    contactError.style.display= 'none';

    else
    contactError.style.display= 'block'
})
reload.addEventListener('click',function(){
    location.reload()
})