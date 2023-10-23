import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

type Props = {
    onClick?: () => void;
};

export default function HamburgerIcon({ onClick }: Props) {
    return <AiOutlineMenu className="text-xl cursor-pointer" onClick={onClick} />;
}
