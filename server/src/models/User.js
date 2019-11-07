import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
    },
)

userSchema.index({ firstName: 'text', lastName: 'text' })

userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
})

// removes fields on every user data request
userSchema.methods.toJSON = function() {
    const user = this.toObject()

    delete user.password
    delete user.__v
    delete user.updatedAt

    return user
}

const User = mongoose.model('User', userSchema)

export default User
