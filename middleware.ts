import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  //TODO: undo comment after deployment
  // publicRoutes: ['/'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
