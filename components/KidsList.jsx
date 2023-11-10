import { useEffect, useState } from "react";
import { formatDate, getAge } from "@/utils";
import { useSession } from "next-auth/react";

export default function KidsList() {
  const [kidsData, setKidsData] = useState([]);
  const { data } = useSession();

  useEffect(() => {
    fetch("/api/kids")
      .then((response) => response.json())
      .then((kidsData) => setKidsData(kidsData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const kids = kidsData.filter(
    (kidData) => kidData.teacher === data?.user?.email
  );

  return (
    <div className="wrapperKidsList">
      <h3>Your Kids!!!</h3>
      {kids.map((kid) => {
        return (
          <ul key={kid.id}>
            <li>
              {kid.firstname} {kid.lastname} {getAge(kid.date_of_birth)} χρονών
            </li>
          </ul>
        );
      })}
    </div>
  );
}
