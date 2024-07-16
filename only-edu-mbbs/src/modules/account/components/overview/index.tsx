import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserType } from "@/types/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface userProp {
  user: UserType;
}

const Overview = ({ user }: userProp) => {
  return (
    <>
      <div className="text-dark my-3 px-2">
        <h3 className="text-lg">Overview</h3>
        <p className="text-dark/60 text-xs mb-2">
          Signed in as: <strong>{user?.data?.email}</strong>
        </p>
        <Separator />
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mt-3 max-w-[400px] mx-auto border-orange-100 border">
            <TabsTrigger className="" value="profile">
              Profile
            </TabsTrigger>
            <TabsTrigger className="" value="queries">
              Queries
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="flex flex-col mb-3 mt-2">
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
                  <div className="flex items-center gap-x-2 my-2">
                    <IoMdCheckmarkCircle className="text-green-500" />
                    <span className="text-dark/60"> Email:</span>{" "}
                    {user.data?.email}
                  </div>
                  <span className="flex items-center gap-x-2 my-2">
                    <IoMdCheckmarkCircle className="text-green-500" />
                    <span className="text-dark/60"> Phone:</span>
                    {user.data?.username}
                  </span>
                  <span className="flex items-center gap-x-2 my-2">
                    <IoMdCheckmarkCircle className="text-green-500" />
                    <span className="text-dark/60"> Name:</span>{" "}
                    {user.data?.firstName} {user.data?.lastName}
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="queries">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg">Queries</h3>
              <p>no queries yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* <div className="text-dark my-3 px-2">
        <h3 className="text-lg">Overview</h3>
        <p className="text-dark/60 text-xs mb-2">
          Signed in as: <strong>{user?.data?.email}</strong>
        </p>
        <Separator />
        <div className="grid grid-cols-2 mb-3 mt-2">
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
              <div className="flex items-center gap-x-2 my-2">
                <IoMdCheckmarkCircle className="text-green-500" />
                <span className="text-dark/60"> Email:</span> {user.data?.email}
              </div>
              <span className="flex items-center gap-x-2 my-2">
                <IoMdCheckmarkCircle className="text-green-500" />
                <span className="text-dark/60"> Phone:</span>
                {user.data?.username}
              </span>
              <span className="flex items-center gap-x-2 my-2">
                <IoMdCheckmarkCircle className="text-green-500" />
                <span className="text-dark/60"> Name:</span>{" "}
                {user.data?.firstName} {user.data?.lastName}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg">Queries</h3>
            <p>no queries yet</p>
          </div>
        </div>
      </div> */}
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
