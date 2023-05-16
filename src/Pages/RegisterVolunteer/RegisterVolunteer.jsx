import { useLoaderData } from "react-router-dom";
import "./RegisterVolunteer.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterVolunteer = () => {


  const {user} = useContext(AuthContext);

  const loadedData = useLoaderData();
  //console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit = (data) => {
  data.img = loadedData.img;

  fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
};
  return (
    <div className="register-card mx-auto my-8">
      <h4 className="text-2xl font-bold">Register as a Volunteer</h4>
      <div className="my-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Full Name</label>
        <input defaultValue={user && user.displayName} {...register("userName")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Username or Email</label>
        <input value={user && user.email} {...register("email", { required: true })} />
        {/* register your input into the hook by invoking the "register" function */}
        <label>Date</label>
        <input type="date" {...register("date")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Title</label>
        <input defaultValue={loadedData.title} {...register("title", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        <label>Description</label>
        <input defaultValue={loadedData.description} {...register("description", { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit"  className="btn btn-primary btn-block btn-md"/>
      </form>
      </div>
    </div>
  );
};

export default RegisterVolunteer;
