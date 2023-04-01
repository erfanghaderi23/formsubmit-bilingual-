

const FirstnameEl = document.querySelector('#Firstname');
const LastnameEl = document.querySelector('#Lastname');
const emailEl = document.querySelector('#email');
const form = document.querySelector('#submit');

//Checks the status of the name
const checkFirstname = () => {

    let valid = false;
    
    const min = 3,
        max = 25;

    const Firstname = FirstnameEl.value.trim();
    console.log(Firstname);
    if(window.location.hash === "#fa"){
        if (!isRequired(Firstname)) {
            showError(FirstnameEl, 'نام کوچک نمی تواند خالی باشد.');
        } else if (!isBetween(Firstname.length, min, max)) {
            showError(FirstnameEl, `تعداد کاراکتربین${min}و${max}باشد.`)
        } else {
            showSuccess(FirstnameEl);
            valid = true;
        }
        return valid;

    }
    if(window.location.hash === "#en"){
        if (!isRequired(Firstname)) {
            showError(FirstnameEl, 'First name cannot be empty.');
        } else if (!isBetween(Firstname.length, min, max)) {
            showError(FirstnameEl, `Number of characters${min}&${max}should be.`)
        } else {
            showSuccess(FirstnameEl);
            valid = true;
        }
        return valid;
        
    }
   
};

//Checks last name
const checkLastname = () => {
    let valid = false;
    const Lastname = LastnameEl.value.trim();
    if(window.location.hash === "#fa"){
    if (!isRequired(Lastname)) {
        showError(LastnameEl, 'نام خانوادگی نمی تواند خالی باشد.');
    } 

     else {
        showSuccess(LastnameEl);
        valid = true;
    }
    return valid;
}
if(window.location.hash === "#en"){
    if (!isRequired(Lastname)) {
        showError(LastnameEl, 'Last name cannot be empty.');
    } 

     else {
        showSuccess(LastnameEl);
        valid = true;
    }
    return valid;
}
};


//Checks email
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    console.log(email);
    
        if(window.location.hash === "#en"){
            if (!isRequired(email)) {
                showError(emailEl, 'Email could not be empty');
            } else if (!isEmailValid(email)) {
                showError(emailEl, 'Email is not valid.')
            } else {
                showSuccess(emailEl);
                valid = true;
            }
            return valid;
        }
    
        if(window.location.hash === "#fa"){
            if (!isRequired(email)) {
                showError(emailEl, 'ایمیل نمی تواند خالی باشد');
            } else if (!isEmailValid(email)) {
                showError(emailEl, 'ایمیل معتبر نیست.')
            } else {
                showSuccess(emailEl);
                valid = true;
            }
            return valid;
        }
    
   
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

   ///error class
const showError = (input, message) => {

    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isEmailValid = checkEmail();

    let isFormValid = isFirstnameValid &&
        isLastnameValid 
        isEmailValid ;


        if (isFormValid) {

    }
});




 //Show password
 function myFunction() {
    var x = document.getElementById("p-c");
   if (x.type === "password") {
     x.type = "text";
    } else {
     x.type = "password";
   }
    }


$('.unmask').on('click', function(){  
    if($(this).prev('input').attr('type') == 'password')
      $(this).prev('input').prop('type', 'text');  
    else
      $(this).prev('input').prop('type', 'password');  
    return false;
  });
  
  //Begin supreme heuristics 
  $('.password' ).on('keyup',function (){
    var p_c = $('#p-c');
    var p = $('#p');
    console.log(p.val() + p_c.val());   
   if(p.val().length > 0){
    if(p.val() != p_c.val()) {
        if(window.location.hash){
            if(window.location.hash === "#en"){
                document.getElementById('valid').innerHTML = "Password does not match" 
            }
        }
        if(window.location.hash){
            if(window.location.hash === "#fa"){
                document.getElementById('valid').innerHTML = "پسورد هماهنگ نیست" 
            }
        }
      $('#valid').html();
    } else {
       $('#valid').html('');  
    }
      var s = 'weak'
  if(p.val().length > 5 && p.val().match(/\d+/g))
    s = 'medium';
  if(p.val().length > 6 && p.val().match(/[^\w\s]/gi))
    s = 'strong';   
     $('#strong span').addClass(s).html(s);
    }
  });
  