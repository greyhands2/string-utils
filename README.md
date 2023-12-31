# Osas-String-Utils

This is a mini string utility that aims to help you out with string manipulations

## Usage

Installation

```
npm i osas-string-utils
```

Generate Random Strings Example

test.js

```javascript
const {randStringGen } =require('osas-string-utils');




const main = async() => {
    // using callbacks

  //To Generate only alphabets, you must supply the character "b" as the function's arguement
  randStringGen(8, "b", (err, res)=>{
    if(err) console.log(err);
    else console.log(res);
  
  });

// To generate only number digits you must supply the number 1 as  string argument and also as the second function's arguement
  randStringGen(4, "1", (err, res)=>{
     if(err) console.log(err);
     else console.log(res);
   
  });

// To generate an alphanumeric set of strings you must pass "1b" as the function's second arguement
randStringGen(0, "1b", (err, res)=>{
     if(err) console.log(err);
     else console.log(res); 
  
  });


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


Convert String to Sentence Case Example

test.js

```javascript
const {toSentenceCase } =require('osas-string-utils');




const main = async() => {
// Using Callbacks

 toSentenceCase("osagie osemwota anthony chukwudi", (err, res)=>{
  if(err) console.log(err);
  else console.log(res);
});

toSentenceCase("", (err, res)=>{
  if(err) console.log(err);
  else console.log(res);
});


toSentenceCase(0, (err, res)=>{
  if(err) console.log(err);
  else console.log(res);
});
}

// Using Promises
toSentenceCase(0)
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err)
})


toSentenceCase("")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


  toSentenceCase("osagie osemwota anthony chukwudi")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

main();
  

```
