"use client";
import { Drawer } from "vaul";
import { NavbarProps } from "..";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { usePathname } from "next/navigation";

export default function MySideBar({ navigation, dropdown }: NavbarProps) {
  const path = usePathname();

  const isActive = (href: string) => path === href;

  console.log(path);

  console.log(dropdown);

  return (
    <div className="block  lg:hidden">
      <Drawer.Root direction="right">
        <Drawer.Trigger asChild>
          <div className="fixed bottom-6 z-50 h-16 w-16 left-1/2 -translate-x-1/2 bg-greenDark rounded-full flex justify-center items-center text-light  shadow-lg lg:hidden">
            <p>Menu</p>
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-30 bg-black/40" />
          <Drawer.Content className="bg-light z-40 rounded-l-3xl flex flex-col  h-full w-[320px] mt-24 fixed bottom-0 right-0">
            <span className="absolute w-2 h-28 bg-gray-500/30 rounded-2xl  left-2 top-1/2 -translate-y-1/2"></span>
            <div className="p-4  flex-1 h-full">
              <div className="max-w-md mx-auto pl-6">
                <ul className="mb-6">
                  <p className="text-dark  text-2xl font-medium mb-3">
                    Sitemap
                  </p>
                  {navigation.links.map((link) => (
                    <li className="text-lg py-2 border-b flex items-center gap-x-2">
                      <span
                        className={`${
                          isActive(link.href)
                            ? "h-2 w-2 bg-black rounded-full"
                            : ""
                        }`}
                      ></span>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                {dropdown.map((item) => (
                  <>
                    <p
                      key={item.id}
                      className="text-dark  text-2xl font-medium mb-3"
                    >
                      {item.label}
                    </p>
                    <ul>
                      {item.subMenuLinks.map((link) => (
                        <li
                          key={link.id}
                          className="divide-dotted py-2 border-b"
                        >
                          <Link
                            className="text-dark text-lg font-normal"
                            href={link.href + link.university.slug}
                          >
                            {link.university.Title}
                          </Link>
                        </li>
                      ))}
                      <li className="divide-dotted py-2 border-b">
                        <Link className="text-dark text-lg font-normal" href="">
                          University2
                        </Link>
                      </li>
                      <li className="divide-dotted py-2 border-b">
                        <Link className="text-dark text-lg font-normal" href="">
                          University3
                        </Link>
                      </li>
                      <li className="divide-dotted py-2 border-b">
                        <Link className="text-dark text-lg font-normal" href="">
                          University3
                        </Link>
                      </li>
                    </ul>
                    <p className="mt-4 text-blue-500 underline flex items-center gap-x-1">
                      view all <GoArrowRight className="-rotate-45" />
                    </p>
                  </>
                ))}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
