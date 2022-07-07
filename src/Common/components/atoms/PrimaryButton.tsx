import { VFC } from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton: VFC = ({
  buttonText,
  onClickHandler
}: {
  buttonText: string;
  onClickHandler: () => void;
}) => {
  return (
    <div>
      <button className={styles.primaryButton} onClick={onClickHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
