import {Router} from "express";
import { createAdminCtrl, retrieveAdminsCtrl } from "./controllers/admin.controller";


export const adminRouter = Router();

adminRouter.get('/', (req, res)=>{
    res.json({
        status: 200,
        message: " admin route working"
    })
});

adminRouter.post('/', createAdminCtrl);
adminRouter.get('/all', retrieveAdminsCtrl);