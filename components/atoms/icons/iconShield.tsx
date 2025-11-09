type SvgProps = React.SVGProps<SVGSVGElement>;

export default function IconShield(props: SvgProps) {
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
      <path d="M12 3 19 6v6c0 4-3.2 7.1-7 9-3.8-1.9-7-5-7-9V6l7-3z" />
      <path d="M9.5 12.5 11 14l3.5-3.5" />
    </svg>
  );
}