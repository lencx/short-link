module.exports = (config) => {
  // The addWatchTarget config method allows you to manually add a file or directory for Eleventy to watch.
  // When the file or the files in this directory change Eleventy will trigger a build.
  // This is useful if Eleventy is not directly aware of any external file dependencies.
  config.addWatchTarget("public");

  config.addPassthroughCopy({ public: '.' });
  return {
    dir: {
      input: "src",
      output: "dist",
      data: '.',
    }
  };
};