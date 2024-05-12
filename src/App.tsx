import { LoaderCircleIcon } from "lucide-react";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-7">
      <Button variant="danger">
        <LoaderCircleIcon className="mr-1 h-4 w-4 animate-spin" />
        loading
      </Button>
      <Button variant="outlined">
        <LoaderCircleIcon className="mr-1 h-4 w-4 animate-spin" />
        loading
      </Button>
      <Button variant="link">
        <LoaderCircleIcon className="mr-1 h-4 w-4 animate-spin" />
        loading
      </Button>
      <Button variant="soft">
        <LoaderCircleIcon className="mr-1 h-4 w-4 animate-spin" />
        loading
      </Button>
      <Button variant="solid">
        <LoaderCircleIcon className="mr-1 h-4 w-4 animate-spin" />
        loading
      </Button>
    </div>
  );
}

export default App;
