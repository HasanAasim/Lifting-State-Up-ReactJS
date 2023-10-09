const Child = ({ newValue }: any) => {
  let val = 500;

  const func = () => {
    newValue(val);
  };

  return (
    <>
      <button onClick={func}>Click To Change Value</button>
    </>
  );
};

export default Child;
