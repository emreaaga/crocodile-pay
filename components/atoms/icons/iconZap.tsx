type SvgProps = React.SVGProps<SVGSVGElement>;


export default function IconZap(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M13 2 3 14h6l-2 8 10-12h-6z" />
    </svg>
  );
}