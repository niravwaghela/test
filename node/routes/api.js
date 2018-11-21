const express = require('express')
const router = express.Router()
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


router.get('/', (req , res) => {
    res.send('from api route')
  })

router.get('/signUp', (req,res)=>{
    res.send('from signup')
})
  app.post('/signUp', function(req , res){
    console.log(req.body)
    res.status(200).send({"message":"data received"})
    })
    
module.exports = router