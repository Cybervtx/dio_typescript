import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
    <Layout>
      <div>
        <Card id={1} paragraph="Typescript" details="Typescript Fullstack" />
        <Card id={2} paragraph="Python" details="Python Fullstack" />
        <Card id={3} paragraph="Java" details="Java Fullstack" />
      </div>
    </Layout>
    </>
  );
}

export default App;
