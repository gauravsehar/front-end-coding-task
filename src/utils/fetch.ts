import { API_URL } from "../config/constants";
import { mockApi } from "../mockData";
import { questionSets } from "../types/type";

export default async function fetchData(useMock: boolean) {
	try {
		if (useMock) {
			return new Promise<questionSets>((resolve) => {
				setTimeout(() => {
					resolve(mockApi);
				}, 500);
			});
		} else {
			const resp = await fetch(API_URL);
			const { questions } = await resp.json();
			return questions;
		}
	} catch (err) {
		return ['Error', err];
	}
}