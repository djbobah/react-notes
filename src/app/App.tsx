import { Routing } from "../pages/Routing";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <Routing />
      {/* <div style={{ margin: "30px", border: "solid 1px black" }}> */}
      {/* strategy="grid" size={500} */}
      {/* <Container fluid style={{ padding: "30px" }}>
        <MainLayout />
      </Container> */}
      {/* </div> */}
    </Providers>
  );
}

export default App;
