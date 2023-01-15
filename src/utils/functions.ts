import { questionSets } from "../types/type";

export default function getUnique(
	currQuesSet: questionSets,
	newQuesSet: questionSets
) {
	return Array.from(
		[...currQuesSet, ...newQuesSet]
			.reduce((acc, curr) => acc.set(curr.question, curr), new Map())
			.values()
	);
}
