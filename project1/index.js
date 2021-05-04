let tempf ;
let tempC;
let celsius;
let fah;
let Cbutton = document.getElementById('Cbutton');
let Fbutton = document.getElementById('Fbutton');
let InC = document.getElementById('InC');
let InF = document.getElementById('InF');

function ConvertToC(){
  tempf = document.getElementById('tempf').value;
  celsius = ((tempf-32)*5)/9;
  console.log(celsius);
  InC.innerHTML = `${tempf}F is ${celsius}C`;
}
function ConvertToF(){
  tempC = document.getElementById('tempC').value;
  fah = ((tempC * 9)/5)+32 ;
  console.log(fah)
  InF.innerHTML = `${tempC}C is ${fah}F`;
}
Cbutton.addEventListener('click' , ConvertToC)
Fbutton.addEventListener('click' , ConvertToF)