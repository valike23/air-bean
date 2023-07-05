import { Request, Response } from "express";
import { Iadmin, createAdmin, getAllAdmins } from "../../utils/db/admin.model";

export const createAdminCtrl = async (req: Request, res: Response) => {
    const admin: Iadmin = req.body;
    console.log(' admin text', admin);
    res.json(await createAdmin(admin));
}

export const retrieveAdminsCtrl = async (req: Request, res: Response) => {

    res.json(await getAllAdmins({}));
}