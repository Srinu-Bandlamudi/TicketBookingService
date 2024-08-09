const express=require('express');

const app=express();
const bodyParser=require('body-parser');

const db=require('./models/index');
const apiRoutes=require('./routes/index');

const { PORT }=require('./config/serverConfig');

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.get('/api/v1/home',(req,res)=>{
        res.json({message:"Hitting the Booking Service"});
    });
    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
         if(process.env.DB_SYNC){
             db.sequelize.sync({alter:true})
         }
    });
}
setupAndStartServer();