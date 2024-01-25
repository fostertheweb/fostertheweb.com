---
title: Becoming a Maintainer
layout: ../../layouts/PostLayout.astro
blurb: How did this happen?
---

> **Update:** As of Jan 16, 2024 there is activity on the upstream repository. I
> plan to keep doing my own thing, but if I see PRs from the community getting
> merged there I will try to contribute my improvements.

My project, [crowdq.fm](/projects/crowdq-fm), depends on the Spotify Web API for fetching track info, interacting with the user's player, etc. When following the documentation for authorization, you'll be instructed to implement your own API endpoints to get and refresh access tokens from Spotify. My project always required a backend, so it wasn't much trouble to also create those routes. But it is likely a burden for those building a client only application. That is no longer necessary since Spotify introduced the [TypeScript SDK for the Spotify Web API](https://developer.spotify.com/blog/2023-07-03-typescript-sdk). I was thrilled to discover this library because I could eliminate the custom authorization endpoints and would no longer need to maintain type definitions for Spotify data. The library also allows you to POST your token to an API endpoint, which I realized I wanted for SSR, but it is a much simpler implementation.

I ran into a couple problems with the library though. The access token was not being sent to my endpoint as expected and the provided method did not return the token to use in your client code. After some investigation I came up with a solution that I submitted in [this PR](https://github.com/spotify/spotify-web-api-ts-sdk/pull/78/files). My PR was merged just a day later, and that was much faster than expected as I thought there would be more discussion. That's why you'll see a `console.log` in the diff and incomplete tasks to add unit tests and update the README. I was still happy with the result and eagerly awaited the next release to unblock my application. But it never came.

So I forked the repository and published the main branch with the latest fixes to npm. I thought it would be a short wait until the maintainers at Spotify cut a new release and I could switch my dependency back to the official library. Now 4 months later at the time of writing this post and still no release. So I decided to properly maintain my fork. I merged a few open PRs from upstream, revamped the build and release process with [tsup](https://tsup.egoist.dev) and [changesets](https://github.com/changesets/changesets) and I have created a documentation site with [Astro Starlight](https://starlight.astro.build). I have been commenting on upstream issues and PRs to inform other users that I have published many of the fixes to npm for them to use. It has been a fun experience and I hope others can benefit from this effort.
