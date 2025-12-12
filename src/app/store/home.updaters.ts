import { HomeSlice } from "./home.slice";
import { PartialStateUpdater } from "@ngrx/signals";

export function setNextForwardStep(step: string): PartialStateUpdater<HomeSlice> {
	return _ => ({
		proceed_to_next_step_message: step
	});
}

export function setNextForwardStepURL(url: string): PartialStateUpdater<HomeSlice> {
	return _ => ({
		proceed_to_next_step_url: url
	});
}