"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

export function PaginationComponent({ pageCount }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className="text-dark">
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </PaginationItem>
        {[...Array(pageCount)].map((_, index) => (
          <PaginationItem className="" key={index}>
            <PaginationLink
              className="hover:bg-accent/10 noselect"
              href={createPageURL(index + 1)}
              isActive={index + 1 === currentPage}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled = false,
}) => {
  const router = useRouter();
  const disabledClassName = isDisabled
    ? "bg-gray-300 text-dark border cursor-not-allowed"
    : "";

  return (
    <Button
      onClick={() => !isDisabled && router.push(href)} // Only push if not disabled
      className={`bg-orange-500 text-light hover:bg-dark/80 noselect ${disabledClassName}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {direction === "left" ? "« Previous" : "Next »"}
    </Button>
  );
};