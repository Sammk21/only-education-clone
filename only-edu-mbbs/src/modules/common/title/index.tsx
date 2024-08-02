type Props = {
  children: string;
 id?:number
};

const Title = (props: Props) => {
  return (
    <h3 id={props.id?.toString()} className="scroll-m-20 capitalize font-semibold text-dark  pl-2 lg:pl-0 text-2xl" >
      {props.children}
    </h3>
  );
};

export default Title;
