interface NutIocAttributeDefinition {
    variables?: Record<string, any>
}

interface NutIocDependencyDefinition extends NutIocAttributeDefinition {
    namespace?: string;
}

export const Dependency = (definition?: NutIocDependencyDefinition) => {
  return (constructor: InstanceType<any>) => {
    // const { registerDependencyMetadata, dependencyMetadataProvider } =
    //   NutIoc.defaultInstance;

    // registerDependencyMetadata(
    //   new NutIocDependencyMetadataRecord(
    //     dependencyMetadataProvider,
    //     constructor,
    //     definition?.namespace,
    //     definition?.variables
    //   )
    // );
  };
};

// const Dependency = (definition: NutIocDependencyDefinition) => (target: any) => { };
