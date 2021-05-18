import { Request, Response, NextFunction } from 'express';
import { getUserFromCookies } from '../utils/Auth/AuthUtils';

const isUserAuthed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getUserFromCookies(req, res);

    if (user) {
      res.locals.user = user;
      next();
    }

    return false;
  } catch (error) {
    console.log(error);
  }
};

export default isUserAuthed;
