import React from "react";
import { Filters } from "./Filters";
import { BookList } from "./BooksList";

export const BooksSection = () => {
  return (
    <section>
      <Filters />
      <BookList />
    </section>
  );
};
