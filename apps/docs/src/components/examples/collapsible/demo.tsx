import { As } from "@kobalte/core"
import { createSignal } from "solid-js"
import {
	Button,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/components"

export const CollapsibleDemo = () => {
	const [isOpen, setIsOpen] = createSignal(false)

	return (
		<Collapsible
			open={isOpen()}
			onOpenChange={setIsOpen}
			class="w-350px space-y-2"
		>
			<div class="flex items-center justify-between space-x-4 px-4">
				<h4 class="text-sm font-semibold">
					@RyanCarniato starred 2 repositories
				</h4>
				<CollapsibleTrigger asChild>
					<As
						component={Button}
						variant="ghost"
						size="sm"
						class="w-9 p-0"
					>
						<i class="i-lucide:chevrons-up-down" />
						<span class="sr-only">Toggle</span>
					</As>
				</CollapsibleTrigger>
			</div>
			<div class="rounded-md border px-4 py-3 font-mono text-sm">
				solid-js
			</div>
			<CollapsibleContent class="space-y-2">
				<div class="rounded-md border px-4 py-3 font-mono text-sm">
					solid-start
				</div>
			</CollapsibleContent>
		</Collapsible>
	)
}