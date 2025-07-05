import { memo } from "react";

import { APP_TITLE } from "@/app/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hidden justify-center py-3 border-neutral-300 dark:border-gray-700 border-t-[0.2px] w-full">
      <p className="font-light text-gray-400 text-sm">{`© ${currentYear} • ${APP_TITLE}`}</p>
    </footer>
  );
};

export default memo(Footer);
