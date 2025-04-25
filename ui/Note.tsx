type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Note({ children, className = "" }: Props) {
	return (
		<p
			className={`rounded-md bg-yellow-100 p-3 text-xs text-gray-700 ${className}`}
		>
			{children}
		</p>
	);
}
