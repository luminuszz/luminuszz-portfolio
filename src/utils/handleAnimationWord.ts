/* eslint-disable no-param-reassign */
export default function handleAnimationWord(
  element: React.MutableRefObject<Element | null>,
): void {
  const words = element.current.innerHTML.split('');
  element.current.innerHTML = '';

  if (element.current) {
    words.forEach((word, i) => {
      setTimeout(() => {
        element.current.innerHTML += word;
      }, 75 * i);
    });
  }
}
