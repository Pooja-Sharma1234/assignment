import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

class GraphQLClint {
    endpoint: any;
    client:any
    constructor(endpoint:any){
        this.endpoint=endpoint;
        this.client=this.createClient()

    }
    private createClient(){
        const httpLink = createHttpLink({
            uri: this.endpoint,
          });
        return new ApolloClient({
          link: httpLink,
          cache: new InMemoryCache(),
        });
      }
      public getClient() {
        return this.client;
      }
}

export default new GraphQLClint("https://countries.trevorblades.com/graphql")