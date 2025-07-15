import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';
import callouts from 'rehype-callouts';

/** @type {import('mdsvex').MdsvexOptions} */
const options = {
	extensions: ['.svx', '.md'],
	remarkPlugins: [
		
	],
	rehypePlugins: [
		slug,
		autolink,
		[callouts, {
			theme: 'vitepress'
		}],
	],
}

export default () => mdsvex(options);
