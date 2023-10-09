const ChildComponent = (props: any) => {
  const obj = {
    FirstName: "Hasan",
    LastName: "Aasim",
  };

  return (
    <>
      <button
        onClick={() => {
          props.display(obj);
        }}
      >
        Click Me
      </button>
    </>
  );
};
export default ChildComponent;
