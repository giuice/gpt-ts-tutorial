
export async function fetchSearchResults(query: string): Promise<string[]> {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(
				Array.from({ length: 5 }, (_, i) => `${query} Result ${i + 1}`)
			);
		}, 1000));

}