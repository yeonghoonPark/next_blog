import { memo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center py-3 border-neutral-300 dark:border-gray-700 border-t-[0.2px] w-full">
      <p className="font-light text-gray-400 text-sm">{`© ${currentYear} • PPOTTA`}</p>
    </footer>
  );
};

export default memo(Footer);
