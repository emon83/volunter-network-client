import { useLoaderData } from "react-router-dom";
import "./RegisterVolunteer.css";
import { useForm } from "react-hook-form";

const RegisterVolunteer = () => {
/*   useEffect(()=>{
    fetch(`http://localhost:5000/volunteer/${_id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }, [_id]) */
  const data = useLoaderData();
  console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="register-card mx-auto my-8">
      <h4 className="text-2xl font-bold">Register as a Volunteer</h4>
      <div className="my-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Full Name</label>
        <input defaultValue="" {...register("userName")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Username or Email</label>
        <input {...register("email", { required: true })} />
        {/* register your input into the hook by invoking the "register" function */}
        <label>Date</label>
        <input type="date"  defaultValue="" {...register("date")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Title</label>
        <input {...register("title", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        <label>Description</label>
        <input {...register("description", { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit"  className="btn btn-primary btn-block btn-md"/>
      </form>
      </div>
    </div>
  );
};

export default RegisterVolunteer;
