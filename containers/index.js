import React from "react";
import { Connect, query } from "urql";

const QueryString = `
{
  books {
    title
    author
  }
}
`;

const Book = () => (
  <div>
    <Connect query={query(QueryString)}>
      {({ data = [] }) => (
        <pre>
          <div>{JSON.stringify(data, 2, " ")}</div>
        </pre>
      )}
    </Connect>
  </div>
);

export default Book;
