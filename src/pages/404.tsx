import { FC, Fragment } from "hono/jsx";

export const NotFound: FC = () => {
  return (
    <Fragment>
      <h1>Oops!, a problem has occurs</h1>
      <p>The page or resource that you need to access is not found</p>
      <a href="/">Back to home</a>
    </Fragment>
  )
};
