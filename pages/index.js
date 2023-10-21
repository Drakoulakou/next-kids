import { useSession } from "next-auth/react";
import UserArea from "components/UserArea";
import KidForm from "components/KidForm";

export default function Home() {
  const { status } = useSession();

  return (
    <div>
      <div className="userAreaWrapper">
        <UserArea />
      </div>
      {status === "authenticated" && (
        <div>
          <div>The kids in your class</div>
          <KidForm />
        </div>
      )}
    </div>
  );
}
