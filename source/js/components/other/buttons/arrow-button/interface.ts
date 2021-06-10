/* eslint-disable semi */
export default interface IArrowButton {
  className?: string,
  title: string,
  side: 'left' | 'right',
  onClick: () => void,
}
