import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema(
    {
        users: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'User',
                    required: true,
                },
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

const Chat = mongoose.model('Chat', chatSchema)

export default Chat
