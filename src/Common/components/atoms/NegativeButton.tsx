import { VFC } from "react";
import styles from "./NegativeButton.module.scss";

const NegativeButton: VFC = ({
  buttonText,
  onClickHandler
}: {
  buttonText: string;
  onClickHandler: () => void;
}) => {
  return (
    <div>
      <button className={styles.negativeButton} onClick={onClickHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default NegativeButton;
