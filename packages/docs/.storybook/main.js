import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx",
    "../src/stories/**/*.mdx"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');
    if (configType === 'PRODUCTION') {
      config.base = 'sapuris-design-system'
    }
    return config

    // if (configType === 'DEVELOPMENT') {
    //   // Your development configuration goes here
    // }

    // return mergeConfig(config, {
    //   // Your environment configuration here
    // });
  },
};
export default config;
