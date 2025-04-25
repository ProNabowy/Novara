"use client";
import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";

interface RadioProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
	label?: string;
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
	helperText?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			label,
			size = "medium",
			disabled = false,
			required = false,
			error = false,
			helperText,
			className = "",
			onChange,
			checked,
			...props
		},
		ref
	) => {
		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(e);
			}
		};

		const sizeClasses = {
			small: "w-4 h-4",
			medium: "w-5 h-5",
			large: "w-6 h-6",
		};

		const dotSizeClasses = {
			small: "w-1.5 h-1.5",
			medium: "w-2 h-2",
			large: "w-2.5 h-2.5",
		};

		return (
			<div className="flex flex-col">
				<label className="flex cursor-pointer items-center">
					<div className="relative flex items-center justify-center">
						<input
							type="radio"
							ref={ref}
							disabled={disabled}
							required={required}
							onChange={handleChange}
							checked={checked}
							className={`focus:ring-primary-base checked:border-primary-base checked:bg-primary-base appearance-none rounded-full border-2 border-gray-300 bg-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none ${
								sizeClasses[size as keyof typeof sizeClasses]
							} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${
								error ? "border-red-500" : ""
							} ${className}`}
							{...props}
						/>
						<div
							className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-opacity duration-200 ease-in-out ${
								checked ? "opacity-100" : "opacity-0"
							} ${dotSizeClasses[size as keyof typeof dotSizeClasses]} bg-white`}
						/>
					</div>
					{label && (
						<span
							className={`ml-2 text-sm ${
								disabled ? "text-gray-400" : "text-gray-700"
							}`}
						>
							{label}
						</span>
					)}
				</label>
				{helperText && (
					<span
						className={`mt-1 text-xs ${
							error ? "text-red-500" : "text-gray-500"
						}`}
					>
						{helperText}
					</span>
				)}
			</div>
		);
	}
);

Radio.displayName = "Radio";

export default Radio;
