import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

export default function App() {
	const [projectsState, setProjectsState] = useState({ selectedProjectID: undefined, projects: [] });

	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const taskId = Math.random();
			const newTask = {
				text: text,
				projectId: projectsState.selectedProjectID,
				id: taskId,
			};

			const updatedProjects = prevState.projects.map((project) => {
				if (project.id === projectsState.selectedProjectID) {
					return { ...project, tasks: [...project.tasks, newTask] };
				} else {
					return project;
				}
			});
			// Here, we have added the Task to the selected project first, and then updated the projectsState, we did not added the Tasks directly to the projectsState because that will make the tasks array common to all Tasks.
			// And then below we are returning the updated state.

			return {
				...prevState,
				projects: updatedProjects,
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectsState((prevState) => {
			const updatedProjects = prevState.projects.map((project) => {
				if (project.id === projectsState.selectedProjectID) {
					return { ...project, tasks: project.tasks.filter((task) => task.id !== id) };
				} else {
					return project;
				}
			});

			return {
				...prevState,
				projects: updatedProjects,
			};
		});
	}

	function handleSelectProject(id) {
		setProjectsState((prevState) => ({
			...prevState,
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
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectID: undefined,
			projects: prevState.projects.filter((project) => project.id !== projectsState.selectedProjectID),
		}));
	}

	function handleStartAddProject() {
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectID: null,
		}));
	}

	function handleCancelAddProject() {
		setProjectsState((prevState) => ({
			...prevState,
			selectedProjectID: undefined,
		}));
	}

	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const projectId = Math.random();
			const newProject = {
				...projectData,
				id: projectId,
				tasks: [],
			};

			return {
				...prevState,
				selectedProjectID: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	// console.log(projectsState);
	// if (projectsState.projects.length > 0) {
	const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectID);
	const tasks = selectedProject ? selectedProject.tasks : [];

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
				onAddTask={handleAddTask}
				onDeleteTask={handleDeleteTask}
				tasks={tasks}
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
