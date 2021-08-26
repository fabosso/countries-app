import Skeleton from "react-loading-skeleton";

const Detail = (props) => {
  const {
    detail: { title, content },
  } = props;
  return (
    <p>
      <strong> {content ? title + ":" : <Skeleton width={100} />} </strong>
      {content || <Skeleton width={100} />}
    </p>
  );
};

export default Detail;
