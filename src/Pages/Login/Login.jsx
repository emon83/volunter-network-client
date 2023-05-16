import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo1 from '../../assets/logos/google.png'
import logo2 from '../../assets/logos/github.png'
import './Login.css'

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate(); 

    const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="my-4 signUp-card mx-auto">
      <h2 className="text-2xl font-bold mb-8">Login Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Username or Email</label>
        <input defaultValue="" {...register("email")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Password</label>
        <input {...register("password", { required: true })} />
        {/* register your input into the hook by invoking the "register" function */}
        <label> Confirm Password</label>
        <input type="confirmPass" defaultValue="" {...register("password")} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block btn-md"
        />
        <p><small>New to volunteer Please <Link to='/signUp' className="text-orange-600 font-bold">Sign Up</Link></small></p>
      </form>
      <div className="divider">OR</div>
      <div>
        <div onClick={handleGoogleSignIn} className="flex items-center social-login my-4">
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

export default Login;
