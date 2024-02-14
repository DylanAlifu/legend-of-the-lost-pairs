import { CardGrid } from "./components/CardGrid";
import Navbar from "./components/Navbar";
import { CardDataContextProvider } from "./context/CardDataContext";

function App() {
  return (
    <CardDataContextProvider>
      <Navbar />
      <CardGrid />
    </CardDataContextProvider>
  );
}

export default App;
