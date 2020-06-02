

//confirmed, recovered, death cases in India
fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{
  console.log('hello')

  document.getElementById("totalCases").innerHTML=res2[res2.length-1].Confirmed;
  document.getElementById("totalDeath").innerHTML=res2[res2.length-1].Deaths;
  document.getElementById("totalRecovered").innerHTML=res2[res2.length-1].Recovered;
  document.getElementById("totalActive").innerHTML=res2[res2.length-1].Active;

});

fetch("/medical/productDetails").then((res)=>{
  return(res.json());
}).then((res2)=>{

  console.log(res2[0].productName);

  document.getElementById("mask").innerHTML=res2[0].productName;
  document.getElementById("maskDesc").innerHTML=res2[0].description;

  document.getElementById("handSanitizer").innerHTML=res2[1].productName;
  document.getElementById("handSanitizerDesc").innerHTML=res2[1].description;

  document.getElementById("firstAid").innerHTML=res2[2].productName;
  document.getElementById("firstAidDesc").innerHTML=res2[2].description;

  document.getElementById("vitaminMineral").innerHTML=res2[3].productName;
  document.getElementById("vitaminMineralDesc").innerHTML=res2[3].description;

  document.getElementById("insulin").innerHTML=res2[4].productName;
  document.getElementById("insulinDesc").innerHTML=res2[4].description;

  document.getElementById("bloodPressure").innerHTML=res2[5].productName;
  document.getElementById("bloodPressureDesc").innerHTML=res2[5].description;

})

fetch("/grocery/productDetails").then((res)=>{
  return(res.json());
}).then((res2)=>{

  console.log(res2[0].productName);

  document.getElementById("fruits").innerHTML=res2[0].productName;
  document.getElementById("fruitsDesc").innerHTML=res2[0].description;

  document.getElementById("vegetables").innerHTML=res2[1].productName;
  document.getElementById("vegetablesDesc").innerHTML=res2[1].description;

  document.getElementById("dairyProducts").innerHTML=res2[2].productName;
  document.getElementById("dairyProductsDesc").innerHTML=res2[2].description;

  document.getElementById("breakfast").innerHTML=res2[3].productName;
  document.getElementById("breakfastDesc").innerHTML=res2[3].description;

  document.getElementById("lunch").innerHTML=res2[4].productName;
  document.getElementById("lunchDesc").innerHTML=res2[4].description;

  document.getElementById("dinner").innerHTML=res2[5].productName;
  document.getElementById("dinnerDesc").innerHTML=res2[5].description;

})


var emailLogin=document.getElementById("InputEmail1").value;
var passwordLogin=document.getElementById("InputPassword1").value;
/*function login(){
  fetch('/login/successfull',{method:'GET', body:{email:emailLogin, password: passwordLogin}}).then((res)=>{
    return(res.json());
  }).then((res2)=>{
    console.log(res2);
    if(res2===false){
      document.getElementById("error").innerHTML="Invalid email or password"
    }
  })

}

/*
var email= document.forms['forms']['email'];
var password= document.forms['forms']['password'];
function authenticate(){
  var url='login/email/'+email.value+'/password/'+password.value;
  console.log(url);
  fetch('login/email/'+email.value+'/password/'+password.value).
  then().then((res)=>{
    return(res.json());
    }).then((res2)=>{
    
    });

}*/