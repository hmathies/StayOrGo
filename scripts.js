const stayQuotesForDecentAmountOfMoney = ["Stay. That woman is richest whose pleasures are cheapest.", "Stay. Before you spend, earn.", "Stay. The more you learn, the more you earn. ", "Stay. Money grows on the tree of persistence."];
const stayQuotesForWayTooLittleMoney = ["Never spend your money before you have earned it.", "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind.", "Don’t tell me where your priorities are. Show me where you spend your money and I’ll tell you what they are.", "Getting straight with your money is as complicated as a trip to the grocery store: You need a comparison shop, add and subtract, stick with a plan, and ask questions — nothing more.", "A penny here, and a dollar there, placed at interest, goes on accumulating, and in this way the desired result is attained. It requires some training, perhaps, to accomplish this economy, but when once used to it, you will find there is more satisfaction in rational saving than in irrational spending.", "If you want to be rich, you need to be financially literate", "Hustle until your haters ask if you're hiring", "A budget is telling your money where to go, instead of wondering where it went.", "Keep Calm and Save Money"];
const goWithAPlan = ["Go! Have a good monthly, weekly, daily, and hourly plan in place!", "Go! Be prepared to be frugal!", "Go! Seek friends who are supportive and frugal!"]
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const input = document.getElementById("currentMoney");
let userInput;
let parsedUserInput;
btn.disabled = true;
btn.addEventListener("click", test);

function checkValue(){

  userInput = document.getElementById("currentMoney").value.replace(",", "");
  parsedUserInput = parseInt(userInput);
  if(isNaN(parsedUserInput)){
    btn.disabled = true;
  }
  else {
    btn.disabled = false;
  }

}


function test(){

      let result = document.getElementById("result");
          if(parsedUserInput > 40000){
             return result.innerHTML = "Go!! Find what you love to do, and do it!";
          }
          if(parsedUserInput >= 20000 && parsedUserInput < 40000){
             return result.innerHTML = "Go. But make sure you have a plan!";
          }
          if(parsedUserInput >= 10000 && parsedUserInput < 20000){
             return result.innerHTML = goWithAPlan[Math.floor(Math.random() * goWithAPlan.length)];
          }
          if(parsedUserInput >= 5000 && parsedUserInput < 10000){
             return result.innerHTML = stayQuotesForDecentAmountOfMoney[Math.floor(Math.random() * stayQuotesForDecentAmountOfMoney.length)];
          }
          if(parsedUserInput > 0 && parsedUserInput < 5000){

             result.innerHTML = "Stay!! " + stayQuotesForWayTooLittleMoney[Math.floor(Math.random() * stayQuotesForWayTooLittleMoney.length)];

             return result;
          }
          if(parsedUserInput >= 0) {
             return result.innerHTML = "Stay!!"

          }


}

function clearForm(){
  form.reset();
}

btn.addEventListener("click", clearForm, false);
