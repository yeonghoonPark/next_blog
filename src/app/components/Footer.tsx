import React from "react";

const FOOTER_CONTENTS = "© 2023. Park Yeong Hoon | All right reserved";

export default function Footer() {
    return (
        <footer className="flex justify-center self-center w-full max-w-6xl py-3 border-t-[0.2px] border-neutral-300 dark:border-gray-600">
            <p className="text-sm font-light text-gray-400">{FOOTER_CONTENTS}</p>
        </footer>
    );
}
