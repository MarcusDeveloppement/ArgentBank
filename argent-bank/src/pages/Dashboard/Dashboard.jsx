import React from "react";
import WelcomeName from "../../components/WelcomeName/WelcomeName";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <>
      <main className={`${styles.main} ${styles.bgDark}`}>
        <WelcomeName />
        <h2 className={styles.srOnly}>Accounts</h2>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>
              Argent Bank Checking (x8349)
            </h3>
            <p className={styles.accountAmount}>$2,082.79</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
            <p className={styles.accountAmount}>$10,928.42</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={styles.accountAmount}>$184.30</p>
            <p className={styles.accountAmountDescription}>Current Balance</p>
          </div>
          <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
