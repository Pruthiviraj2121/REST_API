const express = require('express');
const app = express();
const port = 8454;

// A middleware that handles the requests with access to the applications request
// and this .json will convert the req of body to json which is available in post callback
app.use(express.json())

app.get('/tshirt', (req, res)=>{
    res.status(200).send({
        tshirt:'👕',
        size:'large'
    })
})

// Here we have mention an id value
app.post('/tshirt/:id', (req, res)=>{
    const{id} = req.params;
    const{logo} = req.body;
    // it arises if logo is not mentioned
    if(!logo){
        res.status(418).send({message:'We need a logo'})
    }
    // post the message if logo is present
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});
app.listen(port, () =>
    console.log(`Server is running on port:${port}`)
);
