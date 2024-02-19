// @flow
import * as React from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/footer";
import SinglePost from "@/components/layout/single-post/single-post";
import { useParams } from "react-router-dom";
import Comments from "@/components/layout/comments/comments";

const SinglePostLayout: React.FC = () => {
  window.scroll(0, 0)
  const params = useParams();
  const id = params.id;
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Selected post page</h1>
        <SinglePost id={id} />
        <Comments id={id} />
      </main>
      <Footer />
    </>
  );
};

export default SinglePostLayout;