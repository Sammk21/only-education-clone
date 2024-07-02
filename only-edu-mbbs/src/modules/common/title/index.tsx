type Props = {
  children: string;
};

const Title = (props: Props) => {
  return (
    <h3 className="scroll-m-20 border-b pb-2 text-xl sm:text-2xl xl:text-3xl  font-medium mb-4 first:mt-0 text-black">
      {props.children}
    </h3>
  );
};

export default Title;
