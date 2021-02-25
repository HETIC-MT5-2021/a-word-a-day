import React from "react";
import { Link } from "react-router-dom";

export interface Props {}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Link to="/translations">Liste</Link>
      <Link to="/translation/add">Ajouter</Link>
      {children}
      <div>Footer</div>
    </>
  );
};
