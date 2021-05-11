import {reducer, StateType} from "./reducer";

describe("Reducer testing:", () => {
		test("reducer should be truthy", () => {
				const state: StateType = {
						collapsed: false
				}

				const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

				expect(newState.collapsed).toBeTruthy()
		})

		test("reducer should be falsy", () => {
				const state: StateType = {
						collapsed: true
				}

				const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

				expect(newState.collapsed).toBeFalsy()
		})

		test("reducer should throw error if fake action", () => {
				const state: StateType = {
						collapsed: true
				}

				expect(() => {
						reducer(state, {type: "FAKE-TYPE"})
				}).toThrowError()
		})
})
