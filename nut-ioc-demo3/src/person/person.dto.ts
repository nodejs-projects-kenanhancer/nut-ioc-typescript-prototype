namespace kenanhancer.com.person.dto {
  export class PersonDTO implements interfaces.IPersonDTO {
    constructor(
      public personId: string,
      public firstName: string,
      public lastName: string,
      public email: string
    ) {}
  }
}
