import "./globals.css";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
