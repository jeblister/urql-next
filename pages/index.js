import { Provider, Client } from "urql";
import Book from "../containers/Book";

const client = new Client({
  url: "http://localhost:3001/graphql"
});

const App = () => (
  <Provider client={client}>
    <Book />
  </Provider>
);

export default App;
