import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/ask-question(.*)']);

const isPublicRoute = createRouteMatcher([
	'/',
	'/api/webhook',
	'question/:id',
	'/tags',
	'/tags/:id',
	'/profile/:id',
	'/community',
	'/jobs',
]);

const isIgnoredRoute = createRouteMatcher(['/api/webhook', '/api/chatgpt']);

export default clerkMiddleware((auth, req) => {
	if (isIgnoredRoute(req) || isPublicRoute(req)) {
		return;
	}

	if (isProtectedRoute(req)) {
		auth().protect();
	}
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
