import Nedb from "nedb";

export const adminDB = new Nedb({filename: "./database/admin.db", autoload: true});
export const productDB = new Nedb({filename: "./database/product.db", autoload: true});


