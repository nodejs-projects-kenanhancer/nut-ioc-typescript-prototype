namespace kenanhancer.com.validations {
  export class ZipCodeValidator implements StringValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
      return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
  }
}
