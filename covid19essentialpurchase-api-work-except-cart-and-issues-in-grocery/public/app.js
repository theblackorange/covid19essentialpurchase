
//confirmed, recovered, death cases in India
fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{
  document.getElementById("totalCases").innerHTML=res2[res2.length-1].Confirmed;
  document.getElementById("totalDeath").innerHTML=res2[res2.length-1].Deaths;
  document.getElementById("totalRecovered").innerHTML=res2[res2.length-1].Recovered;
  document.getElementById("totalActive").innerHTML=res2[res2.length-1].Active;
});
