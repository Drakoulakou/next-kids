import { useSession } from "next-auth/react";
import UserArea from "components/UserArea";
import KidsList from "components/KidsList";

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
          <KidsList />
        </div>
      )}
    </div>
  );
}
