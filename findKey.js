import baseFindKey from './.internal/baseFindKey.js';
import baseForOwn from './.internal/baseForOwn.js';

/**
 * This method is like `find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * findKey(users, ({ age }) => age < 40);
 * // => 'barney' (iteration order is not guaranteed)
 */
function findKey(object, predicate) {
  return baseFindKey(object, predicate, baseForOwn);
}

export default findKey;
