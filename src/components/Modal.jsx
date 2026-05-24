import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog
			ref={dialog}
			className=" backdrop:bg-stone-900/90 backdrop:backdrop-blur-sm p-4 rounded-md shadow-md m-auto w-full max-w-lg"
			onClose={() => dialog.current.close()}
		>
			{children}
			<form method="dialog" className="mt-4 text-right">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById("modal-root"),
	);
});

export default Modal;
