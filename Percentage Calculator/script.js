const x = document.getElementById("x");
const y = document.getElementById("y");
const z = document.getElementById("z");
const button = document.getElementById("button");

let percentageCalculator = () => {
   let xValue = x.value / 100;
   z.value = xValue * y.value;
}

button.addEventListener('click', percentageCalculator);



// Functions
let convertFromKG = () => {
   let kgReference = kg.value;
   lbs.value = (kgReference * 2.204).toFixed(2);
   oz.value = (kgReference * 0.0625).toFixed(2);
 };
 
 let convertFromLBS = () => {
   let lbsReference = lbs.value;
   kg.value = (lbsReference / 2.204).toFixed(2);
   oz.value = (lbsReference * 16).toFixed(2);
 };
 
 let convertFromOZ = () => {
   let ozReference = oz.value;
   kg.value = (ozReference / 35.274).toFixed(2);
   lbs.value = (ozReference / 16).toFixed(2);
 };
 
 kg.addEventListener("input", convertFromKG);
 lbs.addEventListener("input", convertFromLBS);
 oz.addEventListener("input", convertFromOZ);
 
 window.addEventListener("load", percentageCalculator);


