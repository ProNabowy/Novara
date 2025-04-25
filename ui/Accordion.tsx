"use client";
import { Minus, Plus } from "@/icons";
import { useEffect, useRef, useState } from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function Accordion({ title = "", children }: Props) {
	const [visible, setVisible] = useState(true);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState(0);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [children]);

	return (
		<div className="border-primary-light overflow-hidden rounded-lg border">
			<header className="text-dark flex items-center justify-between px-3 py-2">
				<h4 className="font-medium">{title}</h4>
				<div onClick={() => setVisible((prevState) => !prevState)}>
					<button
						className={`flex size-7 items-center justify-center rounded-full transition ${visible ? "rotate-180" : "rotate-0"}`}
					>
						{visible ? <Minus /> : <Plus />}
					</button>
				</div>
			</header>

			<div
				ref={contentRef}
				className="space-y-1 overflow-hidden bg-white px-3 transition-all duration-300 ease-in-out"
				style={{
					maxHeight: visible ? contentHeight + "px" : "0px",
					paddingBlock: visible ? "12px" : 0,
				}}
			>
				{children}
			</div>
		</div>
	);
}
