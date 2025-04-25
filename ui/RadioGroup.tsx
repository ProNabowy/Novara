"use client";

import { Children, ReactElement, ReactNode, cloneElement } from "react";
import Radio from "./Radio";

interface RadioProps {
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	checked?: boolean;
}

interface RadioGroupProps {
	children: ReactNode;
	value: string;
	onChange: (value: string) => void;
	name: string;
	className?: string;
}

export default function RadioGroup({
	children,
	value,
	onChange,
	name,
	className = "",
}: RadioGroupProps) {
	const handleChange = (childValue: string) => {
		onChange(childValue);
	};

	const enhancedChildren = Children.map(children, (child) => {
		if (!child || typeof child !== "object" || !("type" in child)) {
			return child;
		}

		const childElement = child as ReactElement<RadioProps>;
		if (childElement.type === Radio) {
			return cloneElement(childElement, {
				...childElement.props,
				name,
				checked: childElement.props.value === value,
				onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
					handleChange(childElement.props.value);
					childElement.props.onChange?.(e);
				},
			});
		}
		return child;
	});

	return (
		<div className={`flex flex-col gap-3 ${className}`} role="radiogroup">
			{enhancedChildren}
		</div>
	);
}
