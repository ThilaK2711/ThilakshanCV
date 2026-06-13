import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'file-url'?: string };
      }
    }
  }
}
