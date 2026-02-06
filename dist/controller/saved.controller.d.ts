import type { Request, Response } from "express";
export declare const saved: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeSaved: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSaved: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=saved.controller.d.ts.map