namespace kenanhancer.com.customer.dto {
  export class CustomerDTO implements interfaces.ICustomerDTO {
    constructor(
      public customerId: string,
      public firstName: string,
      public lastName: string,
      public email: string
    ) {}
  }
}
