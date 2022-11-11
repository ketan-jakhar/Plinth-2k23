require('dotenv').config;
import config from 'config';
import { Request, Response, NextFunction, CookieOptions } from 'express';
import bcrypt from 'bcryptjs';

import { AppError } from '../utils';

// GET /REGISTER
export const getRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({
      status: 'success',
      data: null,
      message: 'Page loaded successfully',
    });
  } catch (err) {
    console.log('Error: (auth.controller -> getRegister)', err);
    if (err instanceof Error)
      return next(new AppError(res.statusCode, err.message));
    else return next(new AppError(400, 'Something went Wrong'));
  }
};
