// default index ->
import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

// replace @next/head
// export const metadata = () => {

// }

export default function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
