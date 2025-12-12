import { signalStore, withMethods, withState } from "@ngrx/signals";
import { initialHomeSlice } from "./home.slice";
import { withDevtools } from "@angular-architects/ngrx-toolkit";

export const HomeStore = signalStore(
	withState(initialHomeSlice),
	withMethods(store => {
			const getNextStep = () => store.proceed_to_next_step_message();
			return {
				getNextStep
			}
		}
	),
	withDevtools('home-store')
)