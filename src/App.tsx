import { SearchIcon } from "lucide-react";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex h-screen w-screen  items-center justify-center gap-7">
      <Button status="danger" icon="center">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default App;
