"use client";
import { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
	open: boolean;
	anchor?: "left" | "right";
	onClose?: () => void;
	extraClassNames?: {
		overlay?: string;
		modal?: string;
	};
}>;

export default function Modal({
	children,
	open,
	anchor,
	onClose,
	extraClassNames,
}: ModalProps) {
	if (anchor === "right") {
		return (
			<div
				onClick={() => onClose?.()}
				className={`bg-gray-dark/70 fixed inset-0 z-50 max-h-lvh transition ${
					open ? "visible opacity-100" : "invisible opacity-0"
				} ${extraClassNames?.overlay}`}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className={`shadow-lg absolute h-full w-[300px] overflow-auto rounded-tl-[8px] rounded-bl-[8px] bg-white px-2 py-1 transition ${open ? "right-0" : "right-[-100%]"} ${extraClassNames?.modal}`}
				>
					{children}
				</div>
			</div>
		);
	}

	return (
		<div
			className={`bg-gray-dark/70 fixed inset-0 z-50 flex max-h-lvh items-center justify-center p-2 transition-opacity duration-300 md:py-5 ${
				open ? "visible opacity-100" : "invisible opacity-0"
			} ${extraClassNames?.overlay}`}
		>
			<div
				className={`[&::-webkit-scrollbar-thumb]:bg-gray-darker flex max-h-[100%] w-full max-w-5xl transform flex-row items-stretch justify-between overflow-hidden overflow-y-auto rounded-lg bg-white shadow-lg transition-all duration-500 [&::-webkit-scrollbar]:[width:5px] ${
					open
						? "translate-y-0 scale-100 opacity-100"
						: "-translate-y-10 scale-95 opacity-0"
				} ${extraClassNames?.modal}`}
			>
				{children}
			</div>
		</div>
	);
}
