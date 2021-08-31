import { NextApiRequest, NextApiResponse } from "next";
import db  from "../../models";
import { getMediaType } from '../../components/helper';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Running create dog API...");
  await db.sequelize.sync();
  
  const Dog = db.dogs;
  let { url, caption } = req.body
  const type = getMediaType(url);
    try {
        const newDog = await Dog.create({
            url, 
            caption,
            type
        })
        res.status(201).send(newDog)

    } catch (error) {
        console.error("Error encountered while running createDog: "+error);
        res.status(500).send("Error encountered: "+error);
    }
    console.log("API findAll completed...");
};
