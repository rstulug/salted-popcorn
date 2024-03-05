import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function EmptyPage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center text-2xl flex-col gap-8 h-96">
      <div>We could not find any item to show</div>
      <Button
        btnName="Return back"
        onClick={() => navigate(-1)}
        style="red"
        size="large"
      />
    </div>
  );
}
