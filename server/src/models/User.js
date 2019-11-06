import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: { type: String, index: true },
        password: String,
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
    },
)

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
