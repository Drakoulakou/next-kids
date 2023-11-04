import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function App() {
  const { data } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    fetch("/api/kids", {
      method: "POST",
      body: JSON.stringify({ ...formData, teacher: data?.user?.email }),
    });
  }
  return (
    <div className="form">
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
        <label>Date of birth</label>
        <input
          type="date"
          id="date"
          {...register("dateOfBirth")}
          defaultValue={new Date()}
        />
        {errors.dateOfBirth && <span>The age is required</span>}
        <label>Gender</label>
        <select {...register("gender")}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        {/* errors will return when field validation fails  */}

        <button className="submitBtn" type="submit">
          Add Kid
        </button>
      </form>
    </div>
  );
}
