import { useSession, signIn, signOut } from "next-auth/react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Button from "@mui/material/Button";
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
        <ExitToAppIcon className="signOutIcon" onClick={signOut} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Button variant="outlined" onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    </div>
  );
}
