import { useCounter } from '@/hooks/use-counter';

interface CounterProps {
  to: number;
  suffix?: string;
}

export function Counter({ to, suffix = "" }: CounterProps) {
  const count = useCounter(to, suffix);
  return <span>{count}</span>;
}