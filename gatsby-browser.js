// Always start at the top of the page on a route change.
// More investigation needed for a better solution. See https://github.com/gatsbyjs/gatsby/pull/3483

exports.onRouteUpdate = args => {
  if (typeof window !== 'undefined' && args.action === "PUSH") {
    window.scrollTo(0, 0)
  }
}

exports.shouldUpdateScroll = args => {
  //  scroll on < back, forward >, refresh, but not link clicks
  return (
    window.scrollTo(0, 0)
  );
};
