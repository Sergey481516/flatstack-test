class RequestError extends Error {
  constructor(message, body) {
    super(message);
    this.message = message;
    this.body = body;
  }
}

export default RequestError;
