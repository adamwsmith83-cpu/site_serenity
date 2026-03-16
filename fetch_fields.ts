
import fetch from 'node-fetch';

async function run() {
  const res = await fetch('https://ngsg.us/doubleclose-8453');
  const html = await res.text();
  console.log(html);
}

run();
