type ParseRouteParameters<T> = T extends `${string}/:${infer U}/${infer R}`
  ? { [P in U | keyof ParseRouteParameters<`/${R}`>]: string }
  : T extends `${string}/:${infer U}`
  ? { [P in U]: string }
  : {};

type X = ParseRouteParameters<"/api/:what/:is/notyou/:happening">;

class Some<T> {
  private TName: string;
  constructor(x: T & Function) {
    this.TName = x.name;
  }
}

class Another {}

const some = new Some<Another>(Another);
