function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var enterSName = document.getElementById("enterSName").value;
   var findSenderBankAccount = enterSName + "BankBalance";
   var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
   if (enterAmount > enterSAmount) {
      alert("Insufficient Balance.")
   }
   else {
       var findUserBankAccount = enterName + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       Rs.${enterAmount}/- is sent to ${enterName}.`)
 
 
       var today = new Date();
       var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();   
       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       var dateTime = date+' '+time;
       
      
 
      // transaction history 
      
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Amount : Rs ${enterAmount}/- , sender : ${enterSName} , Email:${enterSName}@email.com
        , recevier : ${enterName} , Email:${enterName}@email.com , Date&Time : ${dateTime} . ______________________________________________________________`);
       
      createPTag.appendChild(textNode);
     
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
   document.getElementById("enterName").value = '';
   document.getElementById("enterAmount").value = '';
   document.getElementById("enterSName").value = '';
 }