import mongoose, { Schema } from "mongoose";








const formSchema = new Schema({
slNumber:{
    type:Number,
    unique:true
},
applicantsName:String,
fatherName:String,
DOB:String,
membershipNumber:String,
memberAddress:String,
taluk:String,
District:String,
mPermanentAddress:String,
mTaluk:String,
mDistrict:String,
mFamailDetails:String,
mPhone:String,
mAdharNumber:{
    type:Number,
    unique:true,
},
mFee:Number,
mPaidInCash:Number,
},{timestamps:true})





export const Form = mongoose.model("Form",formSchema)








