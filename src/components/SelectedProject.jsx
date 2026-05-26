import { useRef } from "react";
import Modal from "./Modal.jsx";
import Tasks from "./Tasks.jsx";

export default function SelectedProject({ project, onDeleteProject, onAddTask, onDeleteTask, tasks }) {
	const modal = useRef();

	const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	function handleConfirmDelete() {
		onDeleteProject();
		modal.current.close();
	}

	return (
		<>
			<Modal ref={modal} onClose={() => modal.current.close()}>
				<h2 className="font-bold text-lg text-stone-700 my-4">This will delete your PROJECT.</h2>
				{project && <p className="text-stone-600 font-semibold mb-4 wrap-break-word">Your project is:- "{project.title}".</p>}
				<p>Are you sure you want to delete this Project? </p>

				<div className="flex justify-end gap-4">
					<button
						className="bg-stone-200 text-red-600 px-4 py-1 rounded-md my-4 hover:cursor-pointer hover:bg-stone-100"
						onClick={handleConfirmDelete}
					>
						Yes
					</button>
					<button
						className="bg-stone-200 text-green-600 px-4 py-1 rounded-md my-4 hover:cursor-pointer hover:bg-stone-100"
						onClick={() => modal.current.close()}
					>
						No
					</button>
				</div>
			</Modal>

			<div className="max-w-[55rem] min-w-[35rem] mt-16">
				<header className="pb-4 mb-4 border-b-2 border-stone-300">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold text-stone-600 mb-4 wrap-break-word">{project.title}</h1>
						{/* <button className="text-stone-600 hover:text-stone-950" onClick={() => onDeleteProject(project.id)}>
						Delete
						</button> */}
						<button className="text-stone-700 hover:text-red-500 bg-stone-100 px-2 py-1 rounded-sm" onClick={() => modal.current.open()}>
							Delete Project
						</button>
					</div>
					<p className="mb-4 text-stone-400">{formattedDate}</p>
					<p className="text-stone-600 whitespace-pre-wrap wrap-break-word">{project.description}</p>
				</header>
				<Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
			</div>
		</>
	);
}
