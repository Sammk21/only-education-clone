type Props = {
  children: string;
};

const Title = (props: Props) => {
  return (
    <h3 className="scroll-m-20  text-xl sm:text-2xl xl:text-2xl  font-medium  first:mt-0 text-black">
      {props.children}
    </h3>
  );
};

export default Title;
