import React from "react";
import { createRoot } from "react-dom";
import RootLayout from "./src/app/layout";

function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

if (typeof document !== "undefined") {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
}
