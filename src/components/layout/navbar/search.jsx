
import clsx from "clsx";
import { SearchIcon } from "lucide-react";

export default function OpenCart({ className, quantity }) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
     <SearchIcon className=""/>
    </div>
  );
}
