import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // We can pass an object if we have more complex destination for
    // Example when query parameters are involved making it more readable\
    // if the URL's are more complex
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "dec" : "asc"}`,
    });
    // navigate(`${location.pathname}?sort=${isSortingAscending ? "dec" : "asc"}`);
    // history.push(`${location.pathname}?sort=${isSortingAscending ? "dec" : "asc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? "Descending" : "Ascending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
