import { useSession } from "next-auth/react";
import UserArea from "components/UserArea";
import KidForm from "components/KidForm";

export default function Home() {
  const { status } = useSession();

  return (
    <div>
      {status !== "authenticated" && (
        <div>
          <h1 className="welcomeHeader">Welcome to Next Kids</h1>
        </div>
      )}
      <div className={status === "authenticated" ? "userAreaWrapper" : ""}>
        <UserArea />
      </div>
      {status === "authenticated" && (
        <div>
          <KidForm />
        </div>
      )}
    </div>
  );
}
