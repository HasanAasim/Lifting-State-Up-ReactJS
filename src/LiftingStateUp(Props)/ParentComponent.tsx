import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const onDisplay = (props: any) => {
    console.log(props);
  };

  return (
    <div>
      <ChildComponent display={onDisplay} />
    </div>
  );
};
export default ParentComponent;
