type SvgProps = React.SVGProps<SVGSVGElement>;

export default function IconHeadset(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v5a2 2 0 0 0 2 2h2v-7" />
      <path d="M20 12v5a2 2 0 0 1-2 2h-2v-7" />
      <path d="M10 19h4" />
    </svg>
  );
}