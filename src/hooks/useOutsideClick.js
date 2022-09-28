import { useEffect } from "react";

export function useOutsideClick(handler, ...refs) {
	useEffect(() => {
		function handleClickOutside(event) {
			const listOfRefs = [...refs];
			const flag = listOfRefs.some(
				(ref) => ref?.current && ref.current.contains(event.target)
			);
			if (!flag) {
				handler()
			}

		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [refs]);
}
