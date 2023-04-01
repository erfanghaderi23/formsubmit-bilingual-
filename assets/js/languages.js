
var languages = {
    fa:{
        // lang : "انتخاب زبان",
        ln_header : "خوش امدید",
        en : "انگلیسی",
        fa : "فارسی",
        ln_Firstname : "نام",
        ln_Lastname : "نام خانوادگی",
        ln_Email : "ایمیل",
        ln_address : "آدرس(اختیاری)",
        ln_Password : "رمزعبور",
        ln_cp : "تکراررمز عبور",
        ln_show_ps : "نمایش پسورد ",
        ln_submit : "ارسال"
    
    },
    en:{
        // lang : "select your language",
        ln_header : "Welcome",
        en : "English",
        fa : "persian",
        ln_Firstname : "Firstname",
        ln_Lastname : "Lastname",
        ln_Email : "Email",
        ln_address : "address(Optional)",
        ln_Password : "Password",
        ln_cp : "Confirm Password",
        strong : "strong",
        ln_show_ps : "Show Password ",
        ln_submit : "submit"

    }

    
}

if(window.location.hash){
    if(window.location.hash === "#fa"){
        ln_header.textContent = languages.fa.ln_header;
        en.textContent = languages.fa.en;
        fa.textContent = languages.fa.fa;
        ln_Firstname.textContent = languages.fa.ln_Firstname;
        ln_Lastname.textContent = languages.fa.ln_Lastname;
        ln_Email.textContent = languages.fa.ln_Email;
        ln_address.textContent = languages.fa.ln_address;
        ln_Password.textContent = languages.fa.ln_Password;
        ln_cp.textContent = languages.fa.ln_cp;
        ln_show_ps.textContent = languages.fa.ln_show_ps;
        ln_submit.textContent = languages.fa.ln_submit;
        document.body.style.direction = "rtl";
        document.getElementById('ln_header').style.borderRight = ' 5px solid rgb(23, 138, 253)';
        document.getElementById('ln_header').style.paddingRight = '10px';
        
    }
    
}

if(window.location.hash){
if(window.location.hash === "#en"){
        ln_header.textContent = languages.en.ln_header;
        en.textContent = languages.en.en;
        fa.textContent = languages.en.fa;
        ln_Firstname.textContent = languages.en.ln_Firstname;
        ln_Lastname.textContent = languages.en.ln_Lastname;
        ln_Email.textContent = languages.en.ln_Email;
        ln_address.textContent = languages.en.ln_address;
        ln_address.textContent = languages.en.ln_address;
        ln_Password.textContent = languages.en.ln_Password;
        ln_cp.textContent = languages.en.ln_cp;
        ln_show_ps.textContent = languages.en.ln_show_ps;
        ln_submit.textContent = languages.en.ln_submit;
        document.body.style.direction = "ltr"
        document.getElementById('ln_header').style.borderLeft = ' 5px solid rgb(23, 138, 253)';
        document.getElementById('ln_header').style.paddingLeft = '10px';
        
    }
}



var reload = document.querySelectorAll('.reload');
for(i = 0 ; i <= reload.length ; i++){
   reload[i].onclick = function(){
        window.location.hash = this.getAttribute('href');
        window.location.reload();
    }
}
