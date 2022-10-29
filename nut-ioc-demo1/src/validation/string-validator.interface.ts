namespace kenanhancer.com.validations {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
