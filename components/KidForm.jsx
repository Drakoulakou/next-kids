import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState("");

  const onSubmit = (data) => setData(data);
  console.log(data);

  console.log("data", data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <form className="wrapperForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input placeholder="Type name..." {...register("example")} />
        <label>Surname</label>
        <input
          placeholder="Type surname..."
          {...register("exampleRequired", { required: true })}
        />
        <label>Age</label>
        <input
          placeholder="Type age..."
          type="number"
          {...register("age", { required: true }, { min: 0, max: 18 })}
        />
        <label>Gender</label>
        <select {...register("gender")}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="submitBtn" type="submit" />
      </form>
      <p>Name: {data.example}</p>
      <p>Surname: {data.exampleRequired}</p>
      <p>Age:{data.age}</p>
      <p>Gender:{data.gender}</p>
    </>
  );
}
