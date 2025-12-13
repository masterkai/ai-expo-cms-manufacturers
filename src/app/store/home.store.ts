import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";
import { initialHomeSlice, Steps, Steps_Chinese } from "./home.slice";
import { withDevtools } from "@angular-architects/ngrx-toolkit";
import * as updaters from "./home.updaters"

export const HomeStore = signalStore(
	withState(initialHomeSlice),
	withProps(_ => ({
		_steps: Steps,
		_steps_chinese: Steps_Chinese
	})),
	// withComputed(store => {
	//
	//
	// }),
	withMethods(store => {
			const getNextStep = () => store.proceed_to_next_step_message();
			const getNextStepURL = () => store.proceed_to_next_step_url();
			const setNextStep = (message: string) => patchState(store, updaters.setNextForwardStep(message));

			const setNextStepURL = (url: string) => patchState(store, updaters.setNextForwardStepURL(url));

			return {
				getNextStep,
				getNextStepURL,
				setNextStep,
				setNextStepURL
			}
		}
	),
	withDevtools('home-store')
)