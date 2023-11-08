import { useEffect, useState } from "react";
import { formatDate, getAge } from "@/utils";

export default function KidsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/kids")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="wrapperKidsList">
      <h3>Your Kids!!!</h3>
      {data.map((kid) => {
        return (
          <ul key={kid.id}>
            <li>
              {kid.firstname} {kid.lastname} {getAge(kid.date_of_birth)}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
