import type { Request, Response } from "express";
export default {
    createAPet: async (req: Request, res: Response) => {
        let json = { error: "", result: [] };

        const data = req.body;

        if(data){
            res.json(data)
        }else{
            json.error = "error"
        }
    }

}