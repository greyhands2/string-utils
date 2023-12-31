const toSentenceCase = (streeng, callYouBack) => {
  let errMsg;
   if(typeof streeng !== 'string' || streeng.length === 0) errMsg = "This function expects a valid string of characters";

   if(typeof callYouBack === 'function'){
    errMsg ? callYouBack(errMsg) : callYouBack(null, doWork(streeng));
   } else {
    return new Promise((res, rej)=>{
      errMsg ? rej(errMsg) : res(doWork(streeng));
    })
   }

}


const doWork = function(streeng){
  let splitStringArray =  streeng.split(" ");

    if(splitStringArray.length === 1){

      return splitStringArray[0].charAt(0).toUpperCase()+splitStringArray[0].substring(1, splitStringArray[0].length);

      }
     else {
        let newString='';
      let i = 0;
       for(i; i < splitStringArray.length; i++){
         newString += splitStringArray[i].charAt(0).toUpperCase()+ splitStringArray[i].substring(1, splitStringArray[i].length)+" ";
    }

    return newString;
  }


}


modules.export = toSentenceCase;