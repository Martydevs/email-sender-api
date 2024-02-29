import { FC } from "hono/jsx";
import RootLayout from "./layout";

export const HomePage: FC = () => {
  return (
    <RootLayout>
      <h1>Hello from Hono</h1>
    </RootLayout>
  );
}