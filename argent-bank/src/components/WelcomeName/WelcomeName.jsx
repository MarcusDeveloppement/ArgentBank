import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../Redux/Action/userSlice";
import ChangeName from "../ChangeName/ChangeName";
import styles from "./WelcomeName.module.scss";

export default function WelcomeName() {
  const { userInfo, changeUserName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className={styles.content}>
      <h1>Welcome back</h1>
      {changeUserName ? (
        <ChangeName />
      ) : (
        <div>
          {userInfo && (
            <h1
              className={styles.name}
            >{`${userInfo.firstName} ${userInfo.lastName}!`}</h1>
          )}
          <button
            className={styles.btnEdit}
            onClick={() => dispatch(changeUser())}
          >
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}
