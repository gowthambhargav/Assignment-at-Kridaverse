import { Router } from "express";
import { Form } from "./models/models.form.js";
import PdfGenerater from "./utils/GeneratePdf.js";
import path from 'path'
import fs from 'node:fs'


const router = Router()
router.route('/application').post(async(req,res)=>{
    try {
        const {slNumber,applicantsName,DOB, ...data} = req.body;
        if(!slNumber && !applicantsName && !DOB){
            res.json({
                msg:"all fealdes are required"
            })
            return
        }
        const isApplication = await Form.findOne({slNumber})
        if(isApplication){
            res.status(404).json({msg:`Application already exist`})
            return
        }
        const application = await Form.create({...data,slNumber,applicantsName ,DOB})
        return res.status(201).json({application})

    } catch (error) {
        console.error(error)
    }

})


router.route("/:applicationId").get(async(req,res)=>{
   try {
    const appId = req.params.applicationId
    if(!appId){
        res.json({msg:"app id is required"})
        return
    }

    const appIdIsValied = await Form.findOne({slNumber:appId}).select('-_id -createdAt -updatedAt -__v')
    if(!appIdIsValied){
        res.json({msg:"document not found, Enter the valied id"})
        return
    }
    // console.log(appIdIsValied);
    const appIdIsValidObject = appIdIsValied.toObject();
    const Keys = Object.keys(appIdIsValidObject)
    const values = Object.values(appIdIsValidObject)
    console.log(Keys,values);
    const pdfPath = path.resolve(`./public/temp/${appIdIsValied.slNumber}.pdf`);
    if(!fs.existsSync(pdfPath)){
        
       await PdfGenerater(Keys,values, appIdIsValied.slNumber)
    }
    res.sendFile(pdfPath)
   } catch (error) {
    console.error(error);
   }
})

export default router