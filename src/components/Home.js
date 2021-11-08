import Exhibitor from "./Exhibitor";
import CelularesList from "./CelularesList";

function Home(props) {
  return (
    <>
      <Exhibitor />
      <CelularesList celulares={props.celulares} />
    </>
  );
}

export default Home;
