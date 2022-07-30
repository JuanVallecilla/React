// our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

const newsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">NextJS Is A Great FrameEork</Link>
        </li>
        <li>NextJS Is Awesome </li>
      </ul>
    </Fragment>
  );
};

export default newsPage;
