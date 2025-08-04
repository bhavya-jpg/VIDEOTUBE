class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    //	•	message="Success": This is an optional parameter with a default value of "Success". If you don’t provide a value for message, it will automatically be set to "Success".
    (this.statusCode = statusCode),
      (this.data = data),
      (this.message = message),
      (this.success = statusCode < 400);
  }
}
export { ApiResponse };
   