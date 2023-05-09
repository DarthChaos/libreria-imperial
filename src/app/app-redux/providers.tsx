"use client";

import React, { ReactNode } from "react";
import { store } from "./store";

import { Provider } from "react-redux";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <Provider {...{ store }}>{children}</Provider>;
};

export default Providers;
