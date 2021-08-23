const Detail = (props) => {
  const {
    detail: { title, content },
  } = props;
  return (
    <p>
      <strong> {title}: </strong>
      {content}
    </p>
  );
};

export default Detail;
