import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pkg from './package.json' assert { type: 'json' };
import nextMDX from '@next/mdx';

// Plugins
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import * as remarkCodeDemo from './src/plugins/remark-code-demo.js';
import * as rehypeTableOfContents from './src/plugins/rehype-toc.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  env: {
    version: pkg.version,
  },
  reactStrictMode: true,
  optimizeFonts: true,
  trailingSlash: true,
  typescript: {
    /** Do not run TypeScript during production builds (`next build`). */
    ignoreBuildErrors: isProduction,
    tsconfigPath: './tsconfig.json',
  },
  webpack: (config, { defaultLoaders: { babel } }) => {
    config.module.rules.push({
      include: [
        path.resolve(__dirname, '..', 'packages'),
        path.resolve(__dirname, '..', 'themes'),
      ],
      test: /\.(js|jsx|ts|tsx)$/,

      use: [babel],
    });

    config.resolve.alias.root = path.resolve(__dirname, '..');

    return config;
  },
};

export const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkCodeDemo,
      {
        demoPath: path.join(process.cwd(), 'src', 'demos'),
        wrapperComponent: 'Preview',
      },
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeTableOfContents, { tocSelector: '#toc' }],
    ],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  ...config,
});
