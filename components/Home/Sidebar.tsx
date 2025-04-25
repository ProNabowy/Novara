import Note from "@/ui/Note";
import CategoryOptions from "./CategoryOptions";
import SortOptions from "./SortOptions";

export default function Sidebar() {
	return (
		<aside className="space-y-3 rounded-sm">
			<div className="border-primary-light flex items-center gap-2 rounded-full border bg-white px-4 py-2">
				<label htmlFor="search" className="sr-only"></label>
				<input
					type="text"
					name="search"
					id="search"
					className="w-px flex-1"
					placeholder={"What are you looking for?"}
				/>
				<i className="fa-regular fa-magnifying-glass" />
			</div>

			<Note>
				There&apos;s a debounce on the search input to prevent
				unnecessary API calls.
			</Note>

			<CategoryOptions />

			<SortOptions />
		</aside>
	);
}
