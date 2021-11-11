import Message from "../../models/Message"

const Query = {
    ping () {
        return "pong!"
    },
    message: async() => {
        return await Message.find()
    }
    
   
}

export default Query