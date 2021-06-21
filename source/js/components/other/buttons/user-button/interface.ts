export default interface IUserButton {
  elemClass: 'favorite' | 'basket' | 'search',
  href?: string,
  title?: string,
  handler?: ((e: React.MouseEvent) => void),
}
