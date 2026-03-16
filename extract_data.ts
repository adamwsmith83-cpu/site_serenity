
import fetch from 'node-fetch';

async function run() {
  const res = await fetch('https://ngsg.us/doubleclose-8453');
  const html = await res.text();
  const match = html.match(/<script type="application\/json" data-nuxt-data="nuxt-app" data-ssr="true" id="__NUXT_DATA__">([\s\S]*?)<\/script>/);
  if (match) {
    console.log(match[1]);
  }
}

run();
