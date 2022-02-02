import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Info from "../components/paginas/inicio/Info";
import ListaProp from "../components/paginas/inicio/ListaProp";
import SEO from "../components/seo/SEO";

const MapaBuscador: any = dynamic(
  () => import("../components/paginas/inicio/MapaBuscador"),
  { ssr: false }
);

const Home: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO titulo="Inicio" url={asPath} />
      <ListaProp />
      <MapaBuscador />
      <Info />
    </>
  );
};

export default Home;
