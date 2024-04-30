const { StatusCodes }=require('http-status-codes');

const { BookingService }=require('../services/index');

const bookingService=new BookingService();
const {createChannel,publishMessage}=require('../utils/messageQueue');
const { REMINDER_BINDING_KEY }=require('../config/serverConfig');

class BookingController{

    constructor(){
        
    }
    async sendMessageToQueue(req,res){
        const channel=await createChannel();
        const payload={
            data:{
                subject:'This is a notification from queue',
                content:'some queue will be subscribe this',
                recepientEmail:'srinubandlamudi55@gmail.com',
                notificationTime:'2024-04-30T17:73:00'
            },
            service:'CREATE_TICKET'
           
        };
        publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(payload));
        return res.status(200).json({
            message:"Successfully published the event"

        });

    }

    async create(req,res){
        try {
            const response=await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message:'Successfully complete booking',
                success:true,
                err:{},
                data:response
            });
            
        } catch (error) {
            return res.status(error.statusCode).json({
                message:error.message,
                success:false,
                err:error.explanation,
                data:{}
            });
            
        }

    }
}
module.exports=BookingController