interface NutIocAttributeDefinition {
  variables?: Record<string, any>;
}

interface NutIocDependencyDefinition extends NutIocAttributeDefinition {
  namespace?: string;
}

const Dependency =
  (definition: NutIocDependencyDefinition) => (target: any) => {};

interface IPersonDTO {
  personId: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Dependency({ namespace: "business.logic.dto" })
class PersonDTO implements IPersonDTO {
  constructor(
    public personId: string,
    public firstName: string,
    public lastName: string,
    public email: string
  ) {}
}

class PersonService {
  constructor(personDTO: IPersonDTO) {}
}
export {};
