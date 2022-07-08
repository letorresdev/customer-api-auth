/** @format */

class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    let { message } = msg;
    return new ApiError(400, message);
  }

  static badRequestId(msg) {
    return new ApiError(400, msg);
  }

  static badRequestPass(msg) {
    return new ApiError(400, msg);
  }

  static badRequestToken(msg) {
    return new ApiError(400, msg);
  }

  static notFound(msg) {
    return new ApiError(404, msg);
  }

  static methodNotAllowed(msg) {
    return new ApiError(405, msg);
  }

  static userAlreadyExist(msg) {
    return new ApiError(409, msg);
  }

  static authError(msg) {
    return new ApiError(401, msg);
  }

  static unSupportedMediaType(msg) {
    return new ApiError(415, msg);
  }

  static serVerError(msg) {
    return new ApiError(500, msg);
  }
}

module.exports = ApiError;
