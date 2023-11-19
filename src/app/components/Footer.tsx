const FOOTER_CONTENTS = "© 2023. Park Yeong Hoon | All right reserved";

export default function Footer() {
    return (
        <footer className="flex justify-center self-center w-full py-3 border-t-[0.2px] border-neutral-300 dark:border-gray-700">
            <p className="text-sm font-light text-gray-400">{FOOTER_CONTENTS}</p>
        </footer>
    );
}
