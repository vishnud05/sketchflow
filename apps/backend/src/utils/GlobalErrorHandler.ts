import { NextFunction, Request, Response } from "express-serve-static-core";
import { SketchFlowException } from "./SketchFlowException";

const GlobalErrorHandler = (
  error: Error | SketchFlowException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!(error instanceof SketchFlowException)) {
    error = new SketchFlowException(
      error.message ?? "Internal Server Error",
      500,
      false,
      error.name
    );
  }

  const AppError = error as SketchFlowException;

  if (process.env.NODE_ENV != "production") {
    console.error(error);
    res.status(AppError.statusCode).json({
      status: AppError.status,
      name: AppError.name,
      message: AppError.message,
      stack: AppError.stack,
    });
  }

  res.status(AppError.statusCode).json({
    status: AppError.status,
    message: AppError.message,
  });
};

export default GlobalErrorHandler;
