const Message = (props) => {
  const { message, color } = props;
  return <h1 style={{color}}>{message}</h1>;
};

export default Message;