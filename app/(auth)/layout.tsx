import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<body>
				<main className="flex min-h-screen w-full items-center justify-center">
					<div>{children}</div>
				</main>
			</body>
		</>
	);
};

export default Layout;
