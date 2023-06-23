import { As } from "@kobalte/core"
import { createSignal } from "solid-js"
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuGroupLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components"

export const DropdownMenuRadioGroupDemo = () => {
	const [position, setPosition] = createSignal("bottom")

	return (
		<DropdownMenu placement="bottom" gutter={4}>
			<DropdownMenuTrigger asChild>
				<As component={Button} variant="outline">
					Open
				</As>
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent class="w-56">
					<DropdownMenuGroup>
						<DropdownMenuGroupLabel>
							Panel Position
						</DropdownMenuGroupLabel>
						<DropdownMenuSeparator />
						<DropdownMenuRadioGroup
							value={position()}
							onChange={setPosition}
						>
							<DropdownMenuRadioItem value="top">
								Top
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="bottom">
								Bottom
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="right">
								Right
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenu>
	)
}