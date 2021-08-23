import styles from "./Border.module.scss";

const Border = (props) => {
  const { border } = props;

  const handleClick = () => {
    // TODO: route into another country page
    //console.log(border);
  };

  return (
    <button className={styles.button} key={border.name} onClick={handleClick}>
      {border.name}
    </button>
  );
};

export default Border;
