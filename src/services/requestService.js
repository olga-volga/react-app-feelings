const requestService = () => {
	const _apiBase = 'https://poetrydb.org/lines,poemcount/';

	const getResource = async (url) => {
		const result = await fetch(url);
		
		if (!result.ok) {
			throw new Error(`Could not fetch ${url}, status: ${result.status}`);
		}
		return await result.json();
	};

	const getPoem = async (word) => {
		const res = await getResource(`${_apiBase}${word};1`);
		return _transformPoem(res[0]);
	};

	const _transformPoem = (poem) => {
		return {
			author: poem.author,
			title: poem.title,
			lines: poem.lines
		}
	};

	return {getPoem};
}

export default requestService;