// import Spinner from "../../../../modules/common/icons/spinner";

import Spinner from "../../../modules/common/icons/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-ui-fg-base">
      <Spinner size={36} />
    </div>
  );
}
