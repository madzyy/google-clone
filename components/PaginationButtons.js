import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between text-blue-700 mb-10 max-w-lg">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center hover:underline cursor-pointer">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center hover:underline cursor-pointer">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
