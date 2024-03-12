import type { Request, Response } from "express";
import { iUsuario } from "./iUsuario";
import { iLoginRequest } from "./iGeneric";

export interface iUserController {
 createUsuario(req: Request<any, iUsuario>, res: Response): Promise<void>;
 login(req: Request<any, iLoginRequest>, res: Response): Promise<void>;
}
