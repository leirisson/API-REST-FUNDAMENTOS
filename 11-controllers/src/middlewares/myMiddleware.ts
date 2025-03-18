import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {

    console.log('Passando pela middleware local')

    return next()
}
