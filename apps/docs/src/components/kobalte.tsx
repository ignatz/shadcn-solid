import type { Component, ComponentProps } from "solid-js"

export const KobalteLogo: Component<ComponentProps<"svg">> = (props) => {
	return (
		<svg
			viewBox="0 0 432 362"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4.66667 1.6C3.2 2.4 1.6 3.73334 1.06667 4.53334C0.533333 5.33334 0 84 0 179.333C0 334.133 0.266667 353.067 2.13333 355.733C4.13333 358.667 4.53333 358.667 35.7333 358.667C53.0667 358.667 68 358.133 68.8 357.6C73.0667 354.8 73.3333 350.533 73.3333 292.133V233.467L90.6667 217.067C100.267 208 108.533 200.533 109.067 200.4C109.6 200.267 135.733 234.533 167.2 276.667C198.667 318.8 225.6 354.4 227.067 355.6C229.333 357.733 233.6 358 267.6 358.4C301.867 358.8 305.867 358.533 308.133 356.533C309.6 355.333 310.667 352.667 310.667 350.8C310.667 348.267 290.267 320.933 234.8 249.067L158.933 150.667L195.067 115.067C310.133 1.86667 303.6 8.93334 297.333 2.66667C294.8 0.133335 292.933 1.63913e-06 259.333 1.63913e-06C231.867 1.63913e-06 222.933 0.400002 219.6 1.86667C217.2 2.93334 184.933 34.2667 144.667 74.5333L74 145.333L73.3333 75.2L72.6667 5.06667L69.4667 2.53334C66.6667 0.266668 64 1.63913e-06 36.8 1.63913e-06C17.3333 0.133335 6.4 0.533335 4.66667 1.6Z"
				fill="white"
			/>
			<path
				d="M364.4 256.667C339.2 264.4 326 288.667 330.4 318.8C332 330.267 336.533 340.933 342.4 347.067C356.4 361.867 386.4 365.867 406.533 355.467C424 346.4 434.133 322.133 430.667 297.333C427.867 276.8 416.933 262.4 400.267 257.333C390.267 254.267 373.067 253.867 364.4 256.667Z"
				fill="#0284C7"
			/>
		</svg>
	)
}