const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req, res) => {
    res.render('register')
});
const arrayUser =[];
app.post('/user/register',upload.none(),(req,res)=>{
    if (req.body.username&&req.body.password){
        const user = {
            username: req.body.username,
            password: req.body.password
        }

        arrayUser.push(user);
        console.log(arrayUser);
        res.render("success", { user: user });
    }else {
        res.render('err')
    }
});
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})