import Skeleton from "react-loading-skeleton";

type DetailType = {
  title: string;
  content: string | null;
};

const Detail = ({ detail: { title, content } }: { detail: DetailType }) => {
  return (
    <p>
      <strong> {content ? title + ":" : <Skeleton width={100} />} </strong>
      {content || <Skeleton width={100} />}
    </p>
  );
};

export default Detail;
