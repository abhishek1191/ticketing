import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    reason = "Invalid Path";
    statusCode = 404;
    constructor() {
        super("Invalid Path");

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
}
