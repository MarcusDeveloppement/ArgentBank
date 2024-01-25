import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "../../Redux/Action/userAction";
import { rememberMeFunc } from "../../Redux/Action/userSlice";
import styles from "./Form.module.scss";

export default function Form() {
  const { isConnected, rememberMe, userConnectID, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: userConnectID
      ? {
          email: userConnectID.email,
          password: userConnectID.password,
          remembMe: rememberMe,
        }
      : null,
  });

  const formData = watch();
  const navigate = useNavigate();

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
      dispatch(rememberMeFunc(formData));
    }
  }, [navigate, isConnected]);

  useEffect(() => {
    rememberMe
      ? localStorage.setItem(
          "userConnect",
          JSON.stringify({
            email: formData.email,
            password: formData.password,
          })
        )
      : localStorage.removeItem("userConnect");
  }, [rememberMe]);
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <i
          className={`fa fa-user-circle sign-in-icon ${styles.signInIcon}`}
        ></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="email" id="username" {...register("email")} required />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              required
            />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" {...register("remembMe")} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button className={styles.signInButton} type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
