import {fetchSearchResults} from './api';

const cache = new Map<string, Promise<string[]>>();

export function useSearchResults(query:string):string[] {
	if(!cache.has(query)){
		cache.set(query, fetchSearchResults(query));
	}
	const results = cache.get(query);
	if(results){
		throw results;
	}
	throw new Error('No search results found');
}