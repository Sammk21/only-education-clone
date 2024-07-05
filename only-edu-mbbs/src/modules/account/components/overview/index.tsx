import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserType } from "@/types/types";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface userProp {
  user: UserType;
}

const Overview = ({ user }: userProp) => {
  return (
    <>
      <div className="text-xl font-semibold flex justify-between items-center mb-4 px-3">
        <span>Hello {user?.data?.firstName}</span>
      </div>
      <Card x-chunk="dashboard-04-chunk-2">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Signed in as: <strong>{user?.data?.email}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" grid grid-cols-2">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg">Profile</h3>
              <div className="flex items-end gap-x-2">
                <span className="text-3xl leading-none">
                  {getProfileCompletion(user)}%
                </span>
                <span className="uppercase text-foreground/70 text-ui-fg-subtle">
                  Completed
                </span>
              </div>
              <div className="text-sm grid grid-rows-3 gap-y-2">
                <span className="flex items-center gap-x-2">
                  <IoMdCheckmarkCircle className="text-green-500" />
                  <strong>Email:</strong> {user.data?.email}
                </span>
                <span className="flex items-center gap-x-2">
                  <IoMdCheckmarkCircle className="text-green-500" />
                  <strong>Phone: </strong> {user.data?.username}
                </span>
                <span className="flex items-center gap-x-2">
                  <IoMdCheckmarkCircle className="text-green-500" />
                  <strong> Name:</strong> {user.data?.firstName}{" "}
                  {user.data?.lastName}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg">Queries</h3>
              <p>no queries yet</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

const getProfileCompletion = (
  user: Omit<UserType, "password_hash"> | null
): number => {
  let count = 0;

  if (!user?.data) {
    return 0;
  }

  if (user.data.email) {
    count++;
  }

  if (user.data.firstName && user.data.lastName) {
    count++;
  }

  if (user.data.username) {
    count++;
  }

  const completion = (count / 3) * 100;
  return Math.round(completion);
};

export default Overview;
