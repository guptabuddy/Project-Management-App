export default function ProjectSidebar() {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-white md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<div>
				<button className="px-4 py-2 rounded-md text-xs md:text-base bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
					+Add Projects
				</button>
			</div>
			<ul></ul>
		</aside>
	);
}
