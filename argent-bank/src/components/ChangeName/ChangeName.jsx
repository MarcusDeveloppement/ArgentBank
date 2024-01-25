import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../Redux/Action/userSlice";
import { postUserName } from "../../Redux/Action/userAction";
import styles from "./ChangeName.module.scss";

export default function ChangeName() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    dispatch(postUserName(data));
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.contentForm}>
      <div className="change-user-wrapper">
        <div className={styles.contentInput}>
          <div>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              required
              placeholder={userInfo.firstName}
            />
          </div>
          <div>
            <input
              type="text"
              id="LastName"
              {...register("lastName")}
              required
              placeholder={userInfo.lastName}
            />
          </div>
        </div>

        <button className={`${styles.btn} ${styles.save}`} type="submit">
          Save
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() => dispatch(changeUser())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
