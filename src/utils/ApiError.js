class ApiError extends Error{
   //here Error is built in function
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
      super(message);
      this.statusCode = statusCode;
      this.data = null;
      this.message = message;
      this.success = false;
      this.errors = errors;
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor); ////Ye line bas error ka clean history dikhane ke liye hoti hai. Debug karne me help milti hai.
      } 
    }
}


export { ApiError }