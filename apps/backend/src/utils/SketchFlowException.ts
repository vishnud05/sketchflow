export class SketchFlowException extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    name?: string
  ) {
    super(message);
    this.name = name ?? "SketchFlowException";
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.name = "SketchFlowException";
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}
