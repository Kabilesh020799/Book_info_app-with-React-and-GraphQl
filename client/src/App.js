import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  const client = new ApolloClient({
    uri: "https://book-information.herokuapp.com/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Kabilesh Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
