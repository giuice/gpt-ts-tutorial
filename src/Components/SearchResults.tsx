import React, {Suspense} from 'react';
import { useSearchResults } from './useSearchResults';

interface SearchResultsProps {
	query:string;
}

const SearchResults : React.FC<SearchResultsProps> = ({query}) => {
	const results = useSearchResults(query);
	return(
		<ul>
			{results.map((result, index) =>(
				<li key={index}>{result}</li>
			))}
		</ul>
	);
};

const Loading = () => <div>Loading...</div>;

const SuspendedSearchResults: React.FC<SearchResultsProps> = (props) =>(
	<Suspense fallback={<Loading />}>
		<SearchResults {...props} />
	</Suspense>
);

export default SuspendedSearchResults;