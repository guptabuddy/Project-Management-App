import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";

export default function App() {
	const [projectsState, setProjectsState] = useState({ selectedProjectID: undefined, projects: [] });

	function handleStartAddProject() {
		setProjectsState((prevProjects) => ({
			...prevProjects,
			selectedProjectID: null,
		}));
	}

	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const projectId = Math.random();
			const newProject = {
				...projectData,
				id: projectId,
			};

			return {
				...prevState,
				selectedProjectID: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	console.log(projectsState);

	let content;
	if (projectsState.selectedProjectID === null) {
		content = <NewProject onAdd={handleAddProject} />;
	} else if (projectsState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
}
