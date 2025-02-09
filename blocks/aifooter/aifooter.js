import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the aifooter
 * @param {Element} block The aifooter block element
 */
export default async function decorate(block) {
  // load aifooter as fragment
  const aifooterMeta = getMetadata('aifooter');
  const aifooterPath = aifooterMeta ? new URL(aifooterMeta, window.location).pathname : '/aifooter';
  const fragment = await loadFragment(aifooterPath);

  // decorate aifooter DOM
  block.textContent = '';
  const aifooter = document.createElement('div');
  while (fragment.firstElementChild) aifooter.append(fragment.firstElementChild);

  block.append(aifooter);
}
