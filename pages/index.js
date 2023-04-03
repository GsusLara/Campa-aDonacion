import { useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import { Context } from "../store/appContext";
import Layout from "../components/layout";
import Inicio from "../components/inicio";
import About from "../components/about";
import Goals from "../components/goals";
import Donate from "../components/donate";
import Head from 'next/head'

export default function Home() {
  const { store, actions } = useContext(Context);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    actions.lenguaje(locale)
  }, []);
  return (
    <Layout>
      <Head>
        <title>fulfill dream</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={store.diccionario.meta.description}/>
        <meta name="keywords" content={store.diccionario.meta.keywords} />
      </Head>
      <Inicio />
      <About />
      <Goals />
      <Donate />
    </Layout>
  )
}
