import Input from "./Input.jsx";

export default function NewProject() {
	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex justify-end items-center gap-4 mb-4">
				<li>
					<button className="text-stone-700 hover:text-stone-950">Cancel</button>
				</li>
				<li>
					<button className="bg-stone-800 px-6 py-2 rounded-md text-stone-50 hover:bg-stone-950">Save</button>
				</li>
			</menu>
			<div>
				<Input label="Title" />
				<Input label="Description" textarea />
				<Input label="Due Date" type="date" />
			</div>
		</div>
	);
}
