const express = require('express')
const app = express()

const port = 3000
app.set('port', port)


app.get('', (req, res)=>{
  res.send('index')
})


app.listen(port, ()=> {
  console.log('app run on port 3000')
})


const suma = (a, b) => {
  return a + b;
};

module.exports = { suma };
