namespace kenanhancer.com.customer.dto.interfaces {
  export interface ICustomerDTO
    extends Omit<person.dto.interfaces.IPersonDTO, "personId"> {
    customerId: string;
  }
}
