import LocalSearchBar from '@/components/shared/Search/LocalSearchBar';
import Filter from '@/components/shared/Filter';
import React from 'react';
import { TagFilters } from '@/constants/filtes';
import NoResult from '@/components/shared/NoResult';
import { getAllTags } from '@/lib/actions/tag.actions';
import Link from 'next/link';

const Page = async () => {
	const result = await getAllTags({});

	return (
		<>
			<h1 className="h1-bold text-dark100_light900">Tags</h1>

			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchBar
					route="/tags"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for amazing minds"
					otherClasses="flex-1"
				/>

				<Filter
					filters={TagFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
				/>
			</div>

			<section className="mt-12 flex flex-wrap gap-4">
				{result.tags.length > 0 ? (
					result.tags.map((tag) => (
						<Link
							href={`/tags/${tag._id}`}
							key={tag._id}
							className="shadow-light100_darknone"
						>
							<article className="background-light900_dark200 light-border sm:w[260px] flex w-full flex-col rounded-2xl border px-8 py-10">
								<div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
									<p>{tag.name}</p>
								</div>
								<p className="small-medium text-dark400_light500 mt-3.5">
									<span className="body-semibold primary-text-gradient mr-2.5">
										{tag.questions.length}+
									</span>
									Questions
								</p>
							</article>
						</Link>
					))
				) : (
					<NoResult
						title="No tags found"
						description="It looks like there are not tags found."
						link="/ask-question"
						linkTitle="Ask a question"
					/>
				)}
			</section>
		</>
	);
};

export default Page;
