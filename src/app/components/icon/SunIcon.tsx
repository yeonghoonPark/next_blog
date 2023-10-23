import React from "react";
import { FaSun } from "react-icons/fa";

type Props = {
    onClick?: () => void;
};

export default function SunIcon({ onClick }: Props) {
    return <FaSun className="text-yellow-600 text-xl cursor-pointer" onClick={onClick} />;
}
