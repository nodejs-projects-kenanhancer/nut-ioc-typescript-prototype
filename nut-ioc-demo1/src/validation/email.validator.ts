namespace kenanhancer.com.validations {
  export class EmailValidator implements StringValidator {
    static emailRegexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isAcceptable(s: string): boolean {
      return s.length === 5 && EmailValidator.emailRegexp.test(s);
    }
  }
}
