import { Loader2 } from 'lucide-react';

interface LoadingFallbackProps {
  height?: string;
  message?: string;
}

const LoadingFallback = ({ height = 'min-h-[300px]', message }: LoadingFallbackProps) => {
  return (
    <div className={`${height} flex flex-col items-center justify-center bg-muted/20`}>
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </div>
  );
};

export default LoadingFallback;
