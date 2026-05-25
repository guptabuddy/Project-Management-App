import NewTask from "./NewTask.jsx";

export default function Tasks() {
	return (
		<section>
			<h2 className="text-2xl font-bond text-stone-700 mb-4">TASKS</h2>
			<NewTask />
			<p className="text-stone-800 my-4">This Project does not have any tasks yet.</p>
			<ul></ul>
		</section>
	);
}
