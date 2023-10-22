import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
    onClick: () => void;
};

export default function CloseIcon({ onClick }: Props) {
    return <AiOutlineClose className="text-xl cursor-pointer" onClick={onClick} />;
}
