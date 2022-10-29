namespace kenanhancer.com.validations {
  export class LettersOnlyValidator implements StringValidator {
    static lettersRegexp = /^[A-Za-z]+$/;
    isAcceptable(s: string): boolean {
      return LettersOnlyValidator.lettersRegexp.test(s);
    }
  }
}
