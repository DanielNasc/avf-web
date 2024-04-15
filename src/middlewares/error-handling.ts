import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../error/validation.error";

export function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ValidationError) {
        return res.status(400).json({
            campo: err.field,
            message: err.message
        })
    }

    return res.json({
        message: "Um erro inesperado aconteceu"
    })
}