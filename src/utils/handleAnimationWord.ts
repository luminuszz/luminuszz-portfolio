/* eslint-disable no-param-reassign */
export default function handleAnimationWord(
  element: React.MutableRefObject<Element>,
): void {
  const words = element.current.innerHTML.split('');
  element.current.innerHTML = '';

  words.forEach((word, i) => {
    setTimeout(() => {
      element.current.innerHTML += word;
    }, 75 * i);
  });
}
