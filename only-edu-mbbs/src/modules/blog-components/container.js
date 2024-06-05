import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={`pt-32 md:max-w-6xl md:px-20  sm:px-8 px-4    w-full  mx-auto`}
    >
      {props.children}
    </div>
  );
}
