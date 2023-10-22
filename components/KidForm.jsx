import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    fetch("/api/kids", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <form className="wrapperForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input placeholder="Type name..." {...register("name")} />
        {errors.name && <span>The name is required</span>}
        <label>Surname</label>
        <input
          placeholder="Type surname..."
          {...register("surname", { required: true })}
        />
        {errors.surname && <span>The surname is required</span>}
        <label>Age</label>
        <input
          placeholder="Type age..."
          type="number"
          {...register("age", { required: true }, { min: 0, max: 18 })}
        />
        {errors.age && <span>The age is required</span>}
        <label>Gender</label>
        <select {...register("gender")}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        {/* errors will return when field validation fails  */}

        <input className="submitBtn" type="submit" />
      </form>
    </>
  );
}
