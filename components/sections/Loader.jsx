const LOADING_COPY = "少々お待ち下さい...";

const Loader = props => {
  return props.status ? <p className="loader"> {LOADING_COPY} </p> : null;
};

export default Loader;
