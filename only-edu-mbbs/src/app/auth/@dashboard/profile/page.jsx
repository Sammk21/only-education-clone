import { PiExamFill } from "react-icons/pi";
import { GiPapers } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import TabList from "@/modules/account/components/profile-layouts/template";

export const metadata = {
  title: "Profile",
  description: "View and edit your Divide By Zero Store profile.",
};

const categories = [
  {
    name: "My Tests",
    subTitle: "the Tests are ready start practicing",
    icons: <PiExamFill className="h-4 w-4 text-[#115e5d] " />,
    posts: [
      {
        id: 1,
        title: "No tests yet",
      },
    ],
  },
  {
    name: "Attempted Tests",
    subTitle: "these are your attempted tests",
    icons: <GiPapers className="h-4 w-4 text-[#115e5d] " />,
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Order history",
    subTitle: "the items that you have purchased are shown here",
    icons: <GiPapers className="h-4 w-4 text-[#115e5d] " />,
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    name: "My Accounts",
    subTitle: "Your account details",
    icons: <IoPersonSharp className="h-4 w-4 text-[#115e5d] " />,
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

export default async function Profile() {
  return (
    <section className="w-full p-3">
      <div className="flex flex-col sm:flex-row gap-y-8 w-full ">
        <TabList />
      </div>
    </section>
  );
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />;
};
