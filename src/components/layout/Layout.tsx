import React, { FC, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import VentanaChat from "../paginas/perfil/chats/VentanaChat";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import PurpleHeader from "../ui/purpleheader/PurpleHeader";

const Layout: FC = ({ children }) => {
  const { verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  return (
    <>
      <Header />
      <PurpleHeader />
      {children}
      <VentanaChat/>
      <Footer />
    </>
  );
};

export default Layout;
