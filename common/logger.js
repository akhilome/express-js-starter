class Logger {
  _prettify(object) {
    return JSON.stringify(object, null, 2);
  }

  _isErrorInstance(entity) {
    return entity instanceof Error;
  }

  _canPrettyPrint(entity) {
    return typeof entity === 'object' && !this._isErrorInstance(entity);
  }

  console(data) {
    if (this._isErrorInstance(data)) {
      const errorObject = data;
      const errorStack = errorObject.stack;

      /*
        node environment checks can happen here to
        know whether or not to dump errors to stdout.

        For ex., we could decide to only print to stdout
        when process.env.NODE_ENV is set to development.
      */

      console.log('[console]: error message >>> ', errorObject.message);
      errorStack && console.log('[console]: stack trace >>> ', errorStack);
      return;
    }

    if (this._canPrettyPrint(data)) {
      return console.log('[console]:', this._prettify(data));
    }

    return console.log('[console]:', data);
  }
}

exports.logger = new Logger();
