import { adminDB } from "./init";


export interface Iadmin {
    name?: string;
    password?: string;
    username?: string;
    id?: any
};
adminDB.ensureIndex({ fieldName: 'username', unique: true }, (err) => {
    console.log(err);
})
const insertPromise = (admin: Iadmin) => {
    return new Promise((resolve, reject) => {
        adminDB.insert(admin, (err, doc) => {
            if (err) return reject({ err, msg: 'an error occured' });
            resolve(doc);
        })
    })
}
const selectPromise = (query: any, projection: any = {}) => {
    return new Promise((resolve, reject) => {
        const cursor = adminDB.find(query, projection);
        cursor.exec((err, doc: Iadmin[]) => {
            if (err) return reject({ err, msg: 'an error occured' });
            resolve(doc);
        })
    })
}
export const createAdmin = async (admin: Iadmin) => {

    try {
        const resp = await insertPromise(admin);
        console.log(resp);
        return {status: 200, resp};
    } catch (error) {
        console.log('error', error);
    }

}

export const getAllAdmins = async (query: any) => {
    try {
        const resp = await selectPromise(query);
        return resp;
    } catch (error) {
        console.log(error);
    }
}