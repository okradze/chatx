import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        chat: {
            type: mongoose.Types.ObjectId,
            ref: 'Chat',
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

const Message = mongoose.model('Message', messageSchema)

export default Message
