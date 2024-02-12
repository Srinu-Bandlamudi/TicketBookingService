const express=require('express');

const app=express();
const bodyParser=require('body-parser');

const db=require('./models/index');
const apiRoutes=require('./routes/index');

const { PORT }=require('./config/serverConfig');

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
         if(process.env.PORT){
             db.sequelize.sync({alter:true})
         }
    });
}
setupAndStartServer();