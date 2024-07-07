import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<>
			<div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
				<h1 className="h1-bold text-dark100_light900 items-center">
					All Questions
				</h1>
				<Link href={'/ask-question'} className="flex justify-end max-sm:w-full">
					<Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
						Ask a Question
					</Button>
				</Link>
			</div>
			<div className="max-sm:flex-column mt-11 flex justify-between gap-5 sm:items-center">
				LocalSearchBar Filters
			</div>
		</>
	);
};

export default Home;
