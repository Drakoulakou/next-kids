import { useSession } from "next-auth/react";

import KidsList from "components/KidsList";
import UserArea from "components/UserArea";

export default function Kids() {
  const { status } = useSession();

  return (
    <div>
      <div className="userAreaWrapper">
        <UserArea />
      </div>
      {status === "authenticated" && (
        <div>
          <div>The kids in your class</div>
          <KidsList />
        </div>
      )}
    </div>
  );
}
