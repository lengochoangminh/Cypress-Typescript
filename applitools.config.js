module.exports = {
  testConcurrency: 2,
  apiKey: "rT99lcgH104tybHeTvucD9thGjWFWsL4Dhk991dcCXQ74pk110",
  batchName: "TypeScript-Template",
  browser: [
    // Add 3 desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.
    // Other browsers are also available, like Edge and IE.
    { width: 800, height: 600, name: "chrome" },
    // { width: 1600, height: 1200, name: 'firefox' },
    // { width: 1024, height: 768, name: 'safari' },

    // Add 2 mobile emulation devices with different orientations for cross-browser testing in the Ultrafast Grid.
    // Other mobile devices are available, including iOS.
    { deviceName: "Pixel 2", screenOrientation: "portrait" },
    // { deviceName: 'Nexus 10', screenOrientation: 'landscape' },
  ],
};
