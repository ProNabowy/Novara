import Accordion from "@/ui/Accordion";
import Note from "@/ui/Note";
import Radio from "@/ui/Radio";
import SortOptions from "../SortOptions";

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
				Click the button Apply below under the filters to submit your
				search or filter changes.
			</Note>

			<Accordion title="Categories">
				<ul>
					<Radio label="Category" size="medium" />
					<li>Category 1</li>
					<li>Category 1</li>
					<li>Category 1</li>
				</ul>
			</Accordion>

			<SortOptions />
		</aside>
	);
}
