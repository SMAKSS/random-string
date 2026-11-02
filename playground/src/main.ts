import randomString from '@smakss/random-string';
import './styles.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('App root was not found.');

root.innerHTML = [
  '<div class="page">',
  '<header class="topbar"><span class="brand">@smakss/random-string</span><span class="tag">Local playground</span></header>',
  '<section class="intro"><p class="eyebrow">Custom strings</p><h1>Shape a random string</h1><p class="subtitle">Choose the exact length and the characters the result may use. The package uses Web Crypto for every character.</p></section>',
  '<main class="panel"><div class="panel-heading"><div><h2>String options</h2><p>Use a custom character pool or try a number and letter set.</p></div></div>',
  '<form id="generator">',
  '<div class="inline-fields">',
  '<div class="field"><label for="length">Length</label><input id="length" type="number" min="1" max="128" value="16" required></div>',
  '<div class="field"><label for="characters">Allowed characters</label><input id="characters" type="text" value="abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%" required></div>',
  '</div>',
  '<div class="actions"><button type="submit">Generate string</button></div></form>',
  '<div class="result-box" aria-live="polite"><span class="result-label">Generated string</span><output class="result-value" id="result">Your result will appear here</output></div><p class="status" id="status" role="status"></p>',
  '</main><footer>Generated in your browser; values are not sent to a server.</footer></div>'
].join('');

const form = root.querySelector<HTMLFormElement>('#generator')!;
const result = root.querySelector<HTMLOutputElement>('#result')!;
const status = root.querySelector<HTMLParagraphElement>('#status')!;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const length = Number(root.querySelector<HTMLInputElement>('#length')!.value);
  const allowedCharacters =
    root.querySelector<HTMLInputElement>('#characters')!.value;

  try {
    result.textContent = randomString({ length, allowedCharacters });
    status.textContent = 'Generated a ' + length + '-character string.';
  } catch (error) {
    status.textContent =
      error instanceof Error ? error.message : 'Unable to generate a string.';
  }
});
