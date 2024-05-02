//Promise creation

const promiseone = new Promise(function(resolve,reject){
   //do async task like :
   //DB calls,cryptography,network
   setTimeout(() => {
    console.log('async task is completed') 
   }, 1000);
   
})

//promise consumption
//.then have connection to reolve

promiseone.then(function(){
    console.log("promise is consumed");
})