type Props = {
  children: string;
};

const Title = (props: Props) => {
  return (
    <h3 className="scroll-m-20 capitalize font-semibold text-dark  pl-2 lg:pl-0 text-2xl">
      {props.children}
    </h3>
  );
};

export default Title;
