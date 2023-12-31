let randAlphaNumericStringGen = function(stringLength, type, callYouBack){
  let errMsg; 
  
  if(typeof stringLength !== 'number' || stringLength <= 0) errMsg = 'String Length Must Be a Number'; 

  if(typeof callYouBack === 'function'){
    return errMsg ? callYouBack(errMsg) : callYouBack(null, doWork(stringLength, type));
  } else {
    return new Promise((res, rej)=>{
      return errMsg ? rej(errMsg) : res(doWork(stringLength, type));
    })
  }
  }




const doWork = function(stringLength, type){
    let alphas='abcdefghjklmnopqrstuvwxyz';
    let res='';
    
    for(let x=0; x<stringLength; x++){
      if(res.length===stringLength) break;
      if(type === '1b' || type === "1"){
         res+=`${Math.floor((Math.random()*9+1))}`;
      }
     
      if(res.length===stringLength) break;

      if(type === '1b'  || type === "b"){
        res+=`${alphas.charAt(Math.floor((Math.random()*25+1)))}`;
      }
      
      if(res.length===stringLength) break;

      if(type === '1b'  || type === "b"){
        res+=`${alphas.charAt(Math.floor((Math.random()*25+1))).toUpperCase()}`;
      }
      
      if(res.length===stringLength) break;
    }
    return res;
}  

modules.export = randAlphaNumericStringGen;