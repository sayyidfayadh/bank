function signUp(){
  acc={
    uname:uname.value,
    acno:acno.value,
    pswd:pswd.value,
    balance:0
  }
  if(acc.uname==""||acc.acno==""||acc.pswd==""){
    alert("fill missing credentials")
  }
  else if(acc.acno in localStorage){
    alert("account exists ")

  }
  else{
    localStorage.setItem(acc.acno,JSON.stringify(acc))
    alert("account created")
    window.location='./login.html'
  }
}
function authenticate(){
  
   let acno=document.getElementById("acno2").value;
   let pswd=document.getElementById("pswd2").value;
   let owner=JSON.parse(localStorage.getItem(acno))
  
      if(acno==owner.acno&&pswd==owner.pswd){
       alert("login succesfull")
       window.location='./home.html'
      }
      else{
        alert("credentials not found")
      }
}
function Deposit(){
  let acn=document.getElementById("depositacc").value;
  let amt=document.getElementById("depositamt").value;
  if(amt<0){
    alert("invalid amount")
   }
 else if(acn in localStorage){
    updatedacc=JSON.parse(localStorage.getItem(acn));
    let balance=parseInt(updatedacc.balance)
    let amount=parseInt(amt)
    balance+=amount;
    updatedacc.balance=balance
    localStorage.setItem(acn,JSON.stringify(updatedacc))
    display.innerHTML=`<h6 class="text-light">current balance: ${balance} Rs </h6>`
}

else{
  alert("wrong credential ")
}
  }



  function withDraw(){
    let acn=document.getElementById("withdrawacc").value;
    let amt=document.getElementById("withdrawamt").value;
    updatedacc=JSON.parse(localStorage.getItem(acn));
    if(amt>updatedacc.balance){
      alert("negative balance")
     }
   else if(acn in localStorage){
      updatedacc=JSON.parse(localStorage.getItem(acn));
      let balance=parseInt(updatedacc.balance)
      let amount=parseInt(amt)
      balance-=amount;
      updatedacc.balance=balance
      localStorage.setItem(acn,JSON.stringify(updatedacc))
      display2.innerHTML=`<h6 class="text-light">current balance: ${balance} Rs </h6>`
  }
  
  else{
    alert("wrong credential ")
  }
    }
  
  function Clear(){
    window.location=`./index.html`;
  }