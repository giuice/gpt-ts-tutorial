import React, { useState, useEffect } from 'react';

interface User {
	id: number;
	name: string;
}

const UserList: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error fetching users');
				}
				return response.json();
			})
			.then((data: User[]) => {
				if (Array.isArray(data)) {
					setUsers(data);
				} else {
					setError('Fetched data is not an array');
				}
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	return (
		<div>
			<h1>User List</h1>
			{error ? (
				<p>Error: {error}</p>
			) : (
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default UserList;
