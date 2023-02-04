"use client";
import React from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Navbar, Banner, VideoContent, Footer } from "components/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../store/reducers";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});

const store = configureStore({
  reducer: rootReducer,
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <main className="bg-white">
          <Navbar />
          <Banner />
          <VideoContent />
          <Footer />
        </main>
      </Provider>
    </ApolloProvider>
  );
}
