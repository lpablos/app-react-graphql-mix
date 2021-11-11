import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://lpablo_2021:lpablo2021@cluster0.xc5kl.mongodb.net/merntasks',{
    useNewUrlParser: true,
    useUnifiedTopology: false 
})
.then(db=> console.log('La base de datos esta conectada'))
.catch(error => log.error('Error',error))
