class BaseResponseObject {
  constructor(success, message, data = null) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

class SuccessResponseObject extends BaseResponseObject {
  constructor(message, data) {
    super(true, message, data);
  }
}

class ErrorResponseObject extends BaseResponseObject {
  constructor(message, data) {
    super(false, message, data);
  }
}

module.exports = {
  SuccessResponseObject,
  ErrorResponseObject,
};
