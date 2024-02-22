import { useNavigate } from "react-router";
import Button from "./Button";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-max w-full flex-col text-5xl h-screen">
      Page not found
      <div>
        <Button
          btnName="Go back"
          style="red"
          size="large"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
}

export default PageNotFound;
