import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={23}
		height={24}
		fill="none"
		{...props}
	>
		<path
			fill="#fff"
			d="m11.5.5 3.92 7.58L23 12l-7.58 3.92-3.92 7.58-3.92-7.58L0 12l7.58-3.92z"
		/>
	</svg>
);
export default SvgLogo;
