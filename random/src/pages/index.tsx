import axios from "axios";
import { useState } from "react";
import styles from "../styles/UserForm.module.css";

export default function UserForm() {
  const [users, setUsers] = useState<Users[]>();
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState("");

  const handleSubmitButton = async () => {
    // await axios.post("/postUrl", {
    //   transactionAmount,
    //   transactionDescription,
    // });

    setUsers([{ transactionAmount, transactionDescription }]);
  };

  return (
    <>
      <form className={styles.userForm}>
        <input
          className={styles.userFormInput}
          type="number"
          placeholder="transactionAmount"
          onChange={(e) => setTransactionAmount(e.target.valueAsNumber)}
        />
        <input
          className={styles.userFormInput}
          type="text"
          placeholder="transactionDescription"
          onChange={(e) => setTransactionDescription(e.target.value)}
        />
        <button
          className={styles.userFormButton}
          onClick={() => handleSubmitButton()}
        >
          Submit
        </button>
      </form>
      <div>
        <h3>History Information</h3>
        {users?.map((user) => (
          <>
            <p>{user.transactionAmount}</p>
            <p>{user.transactionDescription}</p>
          </>
        ))}
      </div>
    </>
  );
}
