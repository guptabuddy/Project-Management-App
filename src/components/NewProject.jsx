import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	const modal = useRef();

	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
			modal.current.open();
			// This below line is important, as otherwise the onAdd code will run and will add the project to the state
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<>
			<Modal ref={modal} buttonCaption="Close">
				<h2 className="text-xl font-bold text-stone-700 my-4">Invalid data entered.</h2>
				<p className="text-stone-600 mb-4">Looks like you forgot to enter a value.</p>
				<p className="text-stone-600 mb-4">Please make sure that you enter a valid value for every Input field.</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex justify-end items-center gap-4 my-4">
					<li>
						<button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
							Cancel
						</button>
					</li>
					<li>
						<button className="bg-stone-800 px-6 py-2 rounded-md text-stone-50 hover:bg-stone-950" onClick={handleSave}>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type="text" ref={title} label="Title" />
					<Input ref={description} label="Description" textarea />
					<Input type="date" ref={dueDate} label="Due Date" />
				</div>
			</div>
		</>
	);
}
