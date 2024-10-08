import LocalSearchBar from '@/components/shared/Search/LocalSearchBar';
import Filter from '@/components/shared/Filter';
import React from 'react';
import { UserFilters } from '@/constants/filtes';
import Link from 'next/link';
import { getAllUsers } from '@/lib/actions/user.action';
import UserCard from '@/components/Cards/UserCard';

const Page = async () => {
	const result = await getAllUsers({});

	return (
		<>
			<h1 className="h1-bold text-dark100_light900">All Users</h1>

			<Link href="/ask-question" className="flex justify-end max-sm:w-full" />

			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchBar
					route="/community"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for amazing minds"
					otherClasses="flex-1"
				/>

				<Filter
					filters={UserFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
				/>
			</div>

			<section className="mt-12 flex flex-wrap gap-4">
				{result.users.length > 0 ? (
					result.users.map((user) => <UserCard key={user._id} user={user} />)
				) : (
					<div className="paragraph-regular text-dark100_light800 mx-auto max-w-4xl text-center">
						<p>No users yet</p>
						<Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
							Join to be the first!
						</Link>
					</div>
				)}
			</section>
		</>
	);
};

export default Page;
