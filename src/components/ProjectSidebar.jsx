import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-white md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+Add Projects</Button>
			</div>
			<ul className="mt-8 overflow-hidden">
				{projects.map((project) => {
					let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200 min-w-0 break-words";
					if (project.id === selectedProjectId) {
						cssClasses += " bg-stone-700 text-stone-200";
					} else {
						cssClasses += " text-stone-400";
					}

					return (
						<li key={project.id}>
							<button className={cssClasses} onClick={() => onSelectProject(project.id)}>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
