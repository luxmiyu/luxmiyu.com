import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const options = {
	extensions: ['.svx', '.md'],
	remarkPlugins: [
		
	],
	rehypePlugins: [
		slug,
		autolink,
	],
}

export default () => mdsvex(options);
