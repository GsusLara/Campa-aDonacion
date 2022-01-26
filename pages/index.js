import Layout from "../components/layout";
import Inicio from "../components/inicio";
import About from "../components/about";
import Goals from "../components/goals";
import Donate from "../components/donate";


export default function Home() {
  return (
    <Layout>
      <Inicio />
      <About />
      <Goals />
      <Donate />
    </Layout>
  )
}
