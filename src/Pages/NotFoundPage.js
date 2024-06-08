import React, { useTransition } from "react";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  const history = useHistory();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = () => {
    startTransition(() => {
      history.push("/");
    });
  };

  return (
    <div className="flex flex-col h-full justify-center items-center text-center text-xl font-semibold">
      <h1 className="text-7xl">404</h1>
      <p>Page Not Found</p>
      <Button
        text="Back to Home"
        className={"bg-white text-blue-950 my-6"}
        onClick={handleNavigation}
      />
      {/* {isPending && <div>Loading...</div>} */}
    </div>
  );
};

export default NotFoundPage;
