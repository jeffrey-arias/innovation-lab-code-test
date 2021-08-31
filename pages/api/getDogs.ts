import { NextApiRequest, NextApiResponse } from "next";
import db  from "../../models";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    await db.sequelize.sync();
    const Dog = db.dogs;
     
    console.log("Running findAll API...");
    try {
        const dogs = await Dog.findAll()      
        console.log("API findAll completed: "+dogs);
        res.json(dogs);
    } catch (error) {
        console.error("Error encountered while running findAll: "+error);
        res.status(500).send("Error encountered: "+error);
    }
    console.log("API findAll completed...");
};
