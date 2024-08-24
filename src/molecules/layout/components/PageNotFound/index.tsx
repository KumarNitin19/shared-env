import { Link } from "react-router-dom";
import { Button } from "../../../core/design-system/ui/button";

function PageNotFound() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <span className="text-7xl font-bold">404</span>
      <span className="font-light text-lg">Page Not Found</span>
      <Button>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
}

export default PageNotFound;
