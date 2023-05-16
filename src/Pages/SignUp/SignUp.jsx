import { useForm } from "react-hook-form";
import './SignUp.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo1 from '../../assets/logos/google.png'
import logo2 from '../../assets/logos/github.png'

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
  };
  return (
      <div className="my-4 signUp-card mx-auto">
        <h2 className="text-2xl font-bold mb-8">Sign Up Please</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>Full Name</label>
          <input defaultValue="" {...register("userName")} />

          {/* include validation with required or other standard HTML validation rules */}
          <label>Username or Email</label>
          <input {...register("email", { required: true })} />
          {/* register your input into the hook by invoking the "register" function */}
          <label>Password</label>
          <input type="password" defaultValue="" {...register("password")} />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="sign up" className="btn btn-primary btn-block btn-md mt-4" />
          <p><small>Already have an Account Please <Link to='/login' className="text-orange-600 font-bold">Login</Link></small></p>
        </form>
        <div className="divider">OR</div>
        <div>
        <div className="flex items-center social-login my-4">
            <img className="w-8 h-8 ml-4" src={logo1} alt="" />
            <p className="mx-auto">Continue with Google</p>
        </div>
        <div className="flex items-center social-login">
            <img className="w-8 h-8 ml-4" src={logo2} alt="" />
            <p className="mx-auto">Continue with Github</p>
        </div>
      </div>
      </div>
  );
};

export default SignUp;
