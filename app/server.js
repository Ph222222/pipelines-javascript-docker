'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

function fibo(n,num) { 
  if (n > 16) {
   console.log("N is:" + n + "Num is: " + num)
  }
  if (n < 2)
      return 1;
  else   return fibo(n - 2, num) + fibo(n - 1, num);
}


const app = express();
app.get('/', (req, res) => {
  let num = parseInt(req.headers.fibo); 
  console.log(num)
  //fibo(num, num);
  setTimeout(() => {
    fibo(num, num);
  }, 1000);
  
  res.send('Processing ' + num);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);