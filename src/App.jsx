import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

export default function App() {
	const [projectsState, setProjectsState] = useState({ selectedProjectID: undefined, projects: [] });

	function handleSelectProject(id) {
		setProjectsState((prevProjects) => ({
			...prevProjects,
			selectedProjectID: id,
		}));
	}

	// function handleDeleteProject(id) {
	// 	setProjectsState((prevProjects) => ({
	// 		...prevProjects,
	// 		selectedProjectID: undefined,
	// 		projects: prevProjects.projects.filter((project) => project.id !== id),
	// 	}));
	// }
	// WE COULD USE THE ABOVE FUNCTION AS WELL, IN THAT WE JUST USED THE ID RECEIVED FROM THE SELECTED PROJECT COMPONENT. BUT WE USED ANOTHER APPROACH SHOWN BELOW.
	// AS WE ALREADY KNOW THAT THE ONLY PROJECT THAT COULD BE DELETED IS THE selectedProject, AND WE HAVE THE ID OF THAT PROJECT, WE CAN JUST USE IT TO DELETE THE PROJECT FROM THE STATE.

	function handleDeleteProject() {
		setProjectsState((prevProjects) => ({
			...prevProjects,
			selectedProjectID: undefined,
			projects: prevProjects.projects.filter((project) => project.id !== projectsState.selectedProjectID),
		}));
	}

	function handleStartAddProject() {
		setProjectsState((prevProjects) => ({
			...prevProjects,
			selectedProjectID: null,
		}));
	}

	function handleCancelAddProject() {
		setProjectsState((prevProjects) => ({
			...prevProjects,
			selectedProjectID: undefined,
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

	// console.log(projectsState);

	let content;
	if (projectsState.selectedProjectID === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
	} else if (projectsState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	} else {
		content = (
			<SelectedProject
				project={projectsState.projects.find((project) => project.id === projectsState.selectedProjectID)}
				onDeleteProject={handleDeleteProject}
			/>
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSidebar
				projects={projectsState.projects}
				onStartAddProject={handleStartAddProject}
				onSelectProject={handleSelectProject}
				selectedProjectId={projectsState.selectedProjectID}
			/>
			{content}
		</main>
	);
}
