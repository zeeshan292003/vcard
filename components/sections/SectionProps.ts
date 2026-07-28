export interface SectionProps {
  "data-id": string;
  className: string;
  onAnimationEnd: (e: React.AnimationEvent) => void;
  ref: (el: HTMLElement | null) => void;
}
