import { useSession } from "next-auth/react";
import UserArea from "components/UserArea";
import KidsList from "components/KidsList";
import KidForm from "components/KidForm";

export default function Home() {
  const { status } = useSession();

  return (
    <div>
      {status !== "authenticated" && (
        <div>
          <h1 className="welcomeHeader">Welcome to Next Kids</h1>
          <h5 className="welcomeSubtitle">
            If the children are our future, then there is no greater way to
            invest in the future than investing in our children.
          </h5>
        </div>
      )}
      <div className={status === "authenticated" ? "userAreaWrapper" : ""}>
        <UserArea />
      </div>
      {status === "authenticated" && (
        <div>
          <KidForm />
          <KidsList />
        </div>
      )}
    </div>
  );
}
