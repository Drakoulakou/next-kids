import { useSession } from "next-auth/react";
import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

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
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "50px",
      transform: "translate(-50%, -50%)",
      background: "radial-gradient(#fcaaf6, #bbe1ff)",
      borderRadius: "40px",
    },
  };
  return (
    <div className="form">
      <button className="submitBtn" onClick={() => setIsOpen(true)}>
        Add new kid
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <form className="wrapperForm" onSubmit={handleSubmit(onSubmit)}>
          <button className="submitBtn" onClick={() => setIsOpen(false)}>
            Close
          </button>
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
          </select>
          {/* errors will return when field validation fails  */}

          <button className="submitBtn" type="submit">
            Add Kid
          </button>
        </form>
      </Modal>
    </div>
  );
}
