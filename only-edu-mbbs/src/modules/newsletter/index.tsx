"use client";
import { HandIcon } from "lucide-react";
import React, { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { toast } from "sonner";

const handleUserSubscribe = async (email: string) => {
  try {
    const response = await fetch(
      "http://localhost:1337/strapi-newsletter/newsletter/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    toast.success("you are now subscribed to our newsletter");
    const data = await response.json();
  } catch (error) {
    toast.error("Subscription failed. Please try again.");
  }
};

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      await handleUserSubscribe(email);
      setEmail(""); // Clear the input field after successful subscription
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-greenDark pb-16 my-8 sm:py-24 lg:py-32 mx-3 max-w-7xl lg:mx-auto rounded-3xl">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl pt-6 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 hidden md:block">
              Get Latest Notification Of Colleges, Exams and News
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex max-w-md gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <BsCalendar
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Stay informed and engaged with our thought-provoking content
                  delivered straight to you.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  We value your inbox, ensuring no spam—just relevant updates
                  and information tailored to your interests.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
