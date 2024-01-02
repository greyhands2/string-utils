# Osas-String-Utils

This is a mini string utility that aims to help you out with string manipulations

## Usage

Installation

```
npm i osas-string-utils
```

## Random Strings

Generate Random Strings Example

test.js

```javascript
const {randStringGen } =require('osas-string-utils');

/***
 To generate any length of random strings,
 you send the length of string you intend to
 generate as the first arguement of the function
 then also the type which could be number only,
 alphabets only or alphanumeric
***/

const main = async() => {
    // using callbacks

  /*** 
To Generate only alphabets,
 you must supply the character "b" as the
 function's arguement
***/
  randStringGen(8, "b", (err, res)=>{
    if(err) console.log(err);
    else console.log(res);
  
  }); 
/***
The function above should output an
 8 character long random alphabet strings
***/




/*** 
To generate only number digits you must supply
 the number 1 as  string argument and also
 as the second function's arguement
***/
  randStringGen(4, "1", (err, res)=>{
     if(err) console.log(err);
     else console.log(res);
   
  });
/***
The function above should output a
 4 character long random numeric strings
***/






/***
To generate an alphanumeric set of strings
 you must pass "1b" as the function's
 second arguement
***/
randStringGen(0, "1b", (err, res)=>{
     if(err) console.log(err);
     else console.log(res); 
  
  });
/***
The function above should output an error because 0 is an invalid length
***/


randStringGen(12, "1b", (err, res)=>{
     if(err) console.log(err);
     else console.log(res); 
  
  });
/***
The function above should output a
 12 character long alphanumeric random string
***/








  //promises
  randStringGen(0, "b")
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })


  randStringGen(20, "1b")
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}




main();
  

```

## String To Sentence Case

Convert String to Sentence Case Example

test.js

```javascript
const {toSentenceCase } =require('osas-string-utils');




const main = async() => {
// Using Callbacks

 toSentenceCase("osagie osemwota anthony", (err, res)=>{
  if(err) console.log(err);
  else console.log(res);
}); 
/***
The example above should output
 Osagie Osemwota Anthony
***/
toSentenceCase("", (err, res)=>{
  if(err) console.log(err);
  else console.log(res);
}); // should output an error


toSentenceCase(0, (err, res)=>{
  if(err) console.log(err);
  else console.log(res);
}); // should output an error
}

// Using Promises
toSentenceCase(0)
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err)
})// should output an error


toSentenceCase("")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });// should output an error


  toSentenceCase("osagie osemwota anthony")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
/***
The example above should output
 Osagie Osemwota Anthony
***/

main();
  

```
