import Note from "@/ui/Note";
import CategoryOptions from "./CategoryOptions";
import Search from "./Search";
import SortOptions from "./SortOptions";

export default function Sidebar({
	categories,
	category,
	sortBy,
}: {
	categories: string[];
	category: string;
	sortBy: string;
}) {
	return (
		<aside className="space-y-3 rounded-sm">
			<Search />

			<Note>
				There&apos;s a debounce on the search input to prevent
				unnecessary API calls.
			</Note>

			<CategoryOptions categories={categories} category={category} />

			<SortOptions sortBy={sortBy} />
		</aside>
	);
}
