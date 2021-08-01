/**
 * Method to deep update the values of the source object from new object without changing source  object reference
 *
 * @export
 * @param {*} sourceObj
 * @param {*} newObj
 */
export function updateDeep<T>(sourceObj: T, newObj: Partial<T>): void {
  Object.keys(newObj).forEach((key) => {
    // if value is object and instance is not Date
    if (
      newObj[key] &&
      typeof newObj[key] === "object" &&
      sourceObj[key] &&
      !(newObj[key] instanceof Date)
    ) {
      updateDeep(sourceObj[key], newObj[key]);
    } else {
      // updating properties
      sourceObj[key] = newObj[key];
    }
  });
}
