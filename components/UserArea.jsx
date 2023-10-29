import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function IndexPage() {
  const { data, status } = useSession();

  if (status === "loading") return <h3> Loading... please wait</h3>;

  if (status === "authenticated") {
    return (
      <div className="next-auth-wrapper">
        <h3>Teacher: {data.user.name}</h3>
        <div className="imageAndBtn">
          <Image
            height="40"
            width="40"
            src={data.user.image}
            alt={data.user.name + " photo"}
          />
          <button className="submitBtn" onClick={signOut}>
            Sign out
          </button>
        </div>
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
