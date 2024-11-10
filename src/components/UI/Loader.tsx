import { assetsPathes } from "../../constants";

const Loader = () => {
  return <img src={assetsPathes.LOADER} alt="loader" style={{display: 'flex', justifySelf: 'center'}}/>;
};

export default Loader;
