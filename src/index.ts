import express from 'express';
import { adminRouter } from './modules/admin';

import {json} from 'body-parser';

const app = express();
app.use(json());

app.use('/admin', adminRouter);
app.get('/',(req, res)=>{ 
    res.json({
        status: 200,
        message: "we are fine"
    })
})





app.listen(1000);