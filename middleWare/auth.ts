import { Request, Response, NextFunction } from 'express';

export default function Auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
const API_KEY = req.headers
if(API_KEY.api_key !== process.env.API_KEY){
    return res.status(403).json({
        message:"Request is forbidden!"
    })
}

  next();
}
