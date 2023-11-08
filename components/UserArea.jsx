import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import loading from "../public/loading.png";

export default function IndexPage() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <Image height="500" width="500" src={loading} alt={"loading"} />;
  }

  if (status === "authenticated") {
    return (
      <div className="next-auth-wrapper">
        <Image
          height="40"
          width="40"
          src={data.user.image}
          alt={data.user.name + " photo"}
        />
        <h3>{data.user.name}</h3>
        <button className="submitBtn" onClick={signOut}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <button className="submitBtn" onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}
