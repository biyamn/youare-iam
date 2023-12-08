import { NavIconProps, navIconColors } from './SelectIcon';
export default function ChatRoomIcon({
  color = 'default',
  ...props
}: NavIconProps) {
  const svgColor = navIconColors[color];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <path
        fill={svgColor}
        d="M53.01 30.51h-6v-9c0-3.57-2.91-6.51-6.51-6.51H15.51C11.94 15 9 17.91 9 21.51v12.75c0 3.57 2.88 6.51 6.48 6.51h.45c.6 2.16 1.74 4.74 3.84 4.74 1.8 0 5.28-2.82 7.44-4.74H30v5.46c0 3.03 2.46 5.49 5.49 5.49h8.01c2.04 1.83 4.62 3.81 6.06 3.81 1.77 0 2.76-2.04 3.3-3.81h.12c3.03 0 5.49-2.46 5.49-5.49v-10.2c0-3.03-2.46-5.49-5.49-5.49l.03-.03Z"
        opacity=".2"
      />
      <path
        fill={svgColor}
        d="M16.62 25.149a2.499 2.499 0 1 0 0-4.998 2.499 2.499 0 0 0 0 4.998Zm7.494 0a2.499 2.499 0 1 0 0-4.998 2.499 2.499 0 0 0 0 4.998Zm7.497 0a2.499 2.499 0 1 0 0-4.998 2.499 2.499 0 0 0 0 4.998Z"
      />
      <path
        fill={svgColor}
        d="M15.894 40.41c-2.07 0-3.24-2.61-3.84-4.74h-.45A6.519 6.519 0 0 1 5.1 29.16V16.41c.03-3.6 2.97-6.51 6.537-6.51h24.975c3.567 0 6.504 2.91 6.504 6.51v12.75c0 3.57-2.91 6.51-6.504 6.51H23.328c-2.16 1.95-5.637 4.74-7.434 4.74Zm-4.26-27.51a3.514 3.514 0 0 0-3.507 3.51v12.75c0 1.92 1.53 3.51 3.48 3.51h2.85l.24 1.2c.297 1.41.897 3 1.317 3.51.96-.39 3.51-2.28 5.727-4.29l.42-.39h14.45c1.92 0 3.508-1.56 3.508-3.51V16.41c0-1.92-1.56-3.51-3.51-3.51H11.634Z"
      />
      <path
        fill={svgColor}
        d="M45.696 50.4c-1.47 0-4.02-1.98-6.057-3.81h-8.005a5.49 5.49 0 0 1-5.49-5.49c0-.84.66-1.5 1.5-1.5s1.5.66 1.5 1.5c0 1.38 1.11 2.49 2.49 2.49h9.175l.42.39c1.59 1.44 3.416 2.85 4.257 3.27.3-.51.69-1.56.87-2.49l.24-1.2h2.52a2.483 2.483 0 0 0 2.486-2.49v-10.2c0-1.38-1.11-2.49-2.49-2.49-.84 0-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5a5.49 5.49 0 0 1 5.487 5.49v10.2c0 3.03-2.46 5.49-5.486 5.49h-.12c-.51 1.77-1.5 3.81-3.3 3.81v.03h.003Z"
      />
    </svg>
  );
}
