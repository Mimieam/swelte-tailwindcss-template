import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../web_modules/svelte/internal.js";

import "./globals/Theme.js";
import Bar from "./components/Bar.js";
import Base from "./components/Base.js";

function create_fragment(ctx) {
	let div2;

	return {
		c() {
			div2 = element("div");

			div2.innerHTML = `<div class="app svelte-690rh4"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Button</button> 
  <h1>H1 Hello</h1> 
  <h2>H2 Hello</h2> 
  <h3>H3 Hello</h3></div> 
  <div class="bar svelte-690rh4"></div>`;

			attr(div2, "class", "wrapper svelte-690rh4");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;