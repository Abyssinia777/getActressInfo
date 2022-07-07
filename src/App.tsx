import NegativeButton from "./Common/components/atoms/NegativeButton";
import PrimaryButton from "./Common/components/atoms/PrimaryButton";
import ModalWindow from "./Common/components/organizms/ModalWindow";
import "./styles.css";
import { AxiosGetData } from "./Common/functions/CommonFunctions";
import {
  DMM_API_ACTRESS_SEARCH_PARAMETERS,
  DMM_API_OPTIONAL_PARAMETERS
} from "./Common/consts/ApiParameters";

const onClickHandler = (e) => {
  alert("test");
};

const getActressInfo = (e) => {
  const url = DMM_API_OPTIONAL_PARAMETERS.searchActressBaseUrl;
  const response = AxiosGetData(url);
  console.log(response);
};

const modalContents = (): JSX.Element => {
  return <div>CSVファイルを選択・アップロードしてください。</div>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PrimaryButton buttonText="OK" onClickHandler={getActressInfo} />
      <NegativeButton buttonText="Chancel" onClickHandler={onClickHandler} />
      <ModalWindow
        buttonText="CSVアップロード"
        titleText="CSVアップロード"
        content={modalContents()}
      />
    </div>
  );
}
