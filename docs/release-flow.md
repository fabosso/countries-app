# Release flow

We have 3 environments:

**develop** (Develop branch), **stage** (stage branch), and **production** (production branch). When we merge or push to one of each branch, a deployment is executed.

## Normal Flow

1. The developer creates a branch from develop to work with a new feature or a bugfix.
   > created branch: **feature/my-new-feature-branch** or **bugfix/my-awesome-fix**
2. The developer creates a PR to develop. He/She should define the name of the PR following conventional commit linter.
3. The TL approve the PR and merge it with the Squash strategy to develop
4. When there are enough features/bugfixes to do a new release, the TL goes to the test branch in his local machine, rebase stage on it (just in case), rebase develop on it, and pushes it to test.
5. After that, a test deployment is executed so the QA team could test the release.
6. If **QA approves** it, the TL goes to stage branch in his local machine, rebase stage on it(just in case), rebase test branch on it, and pushes it to stage.
7. After that, the Client should test the release in stage environment (optional step)
8. If the client approves it, the TL goes to production branch and run **git pull origin stage --rebase**.
9. Then the TL runs npm version x.x.x following the version number guide at the end of this article to generate the changelog.
10. Before pushing the production branch:

- If a CMS (Contentful) is configured in your project and you did changes, publish those now.
- Ask the PM if you have a green flag to deploy.

11. Push the production branch: **git push origin production**
12. Consider updating others environment with the changelog:

- git checkout develop; git pull origin production --rebase; git push origin develop;
- git checkout test; git pull origin production --rebase; git push origin test;
- git checkout stage; git pull origin production --rebase; git push origin stage;

## Hotfix Flow

1. The developer creates a branch from stage to work with the hotfix.
   > created branch: hotfix/my-awesome-fix
2. The developer creates a PR to stage. He/She should define the name of the PR following conventional commit linter.
3. The TL approve the PR and merge it with the Squash strategy to stage
4. After that, the QA team should test the hotfix.
5. If QA approves it, the TL goes to production branch and run **git pull origin stage --rebase**.
6. Then the TL runs npm version x.x.x following the version number guide at the end of this article to generate the changelog.
   > Usually it should just change the patch number.
7. Before pushing the production branch:

- If a CMS (Contentful) is configured in your project and you did changes, publish those now.
- Ask the PM if you have a green flag to deploy.

11. Push the production branch: **git push origin production**
12. Update others environment with the hotfix and the changelog:

- git checkout develop; git pull origin production --rebase; git push origin develop;
- git checkout test; git pull origin production --rebase; git push origin test;
- git checkout stage; git pull origin production --rebase; git push origin stage;

> remember to let know this to QA team to test the hotfix again with the code of the new release.

## How to decide the npm version number

1. Run git log and check the names of the commits between the last release tag and the new release that you want to deploy. (the release tag has vX.X.X name)
2. With that information, you can check if the new releases have breaking changes or new features or just new bug fixes. Then follow this guide to know which number modify:

1. MAJOR changes just when the release has breaking changes.
2. MINOR changes if the release has new features.
3. PATCH change if the release has just bug fixes.

e.g:

if your previous version is 1.0.0 and..

1. you have one or multiple features, one or multiples bugfixes, and don't have any breaking changes, the final version is 1.1.0
2. you have one or multiple breaking changes, one or multiples bugfixes, and one or multiple features, the final version is: 2.0.0
3. you have one or multiple bugfixes and other commits but don't have features and don't have breaking changes, the final version is 1.0.1
4. If you don't have bugfixes, don't have features, and don't have breaking changes, the final version is 1.0.1 (this is an exception, is really weird but sometimes you need to deploy just a refactor).
