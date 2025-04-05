export default function Grid({
                               children,
                               className = "",
                             }) {
  return (
    <div
      className={`_responsive-grid-system ${className}`}
    >
      {children}
    </div>
  );
}
