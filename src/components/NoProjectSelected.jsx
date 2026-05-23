import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className="mt-24 text-center w-2/3">
			<img src={noProjectImage} alt="No Project Selected/An empty task list" className="w-16 y-16 object-contain mx-auto" />
			<h2 className="text-center text-xl font-bold my-4 ">No Project Selected</h2>
			<p className="text-center text-stone-400 mb-4">Please select a project from the sidebar or get started with a new one.</p>
			<p className="mt-8">
				<Button onClick={onStartAddProject}>Create new project</Button>
			</p>
		</div>
	);
}
