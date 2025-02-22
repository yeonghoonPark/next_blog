const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full justify-center border-t-[0.2px] border-neutral-300 py-3 dark:border-gray-700">
      <p className="text-sm font-light text-gray-400">{`© ${currentYear} • 0hun`}</p>
    </footer>
  );
};

export default Footer;
