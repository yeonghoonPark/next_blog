import React from "react";
import { FaMoon } from "react-icons/fa";

type Props = {
    onClick?: () => void;
};

export default function MoonIcon({ onClick }: Props) {
    return <FaMoon className="text-blue-700 text-xl cursor-pointer" onClick={onClick} />;
}
