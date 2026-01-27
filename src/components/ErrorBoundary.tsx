import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  showError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  private errorTimeout: ReturnType<typeof setTimeout> | null = null;

  public state: State = {
    hasError: false,
    showError: false
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Only show error UI after a brief delay to avoid flash during hydration
    this.errorTimeout = setTimeout(() => {
      if (this.state.hasError) {
        this.setState({ showError: true });
      }
    }, 500);
  }

  public componentWillUnmount() {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, showError: false });
  };

  public render() {
    // Only show error UI if error persists beyond initial render
    if (this.state.hasError && this.state.showError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[200px] flex flex-col items-center justify-center p-8 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground mb-4 text-center">
            Something went wrong loading this section.
          </p>
          <Button 
            onClick={this.handleRetry}
            variant="outline"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      );
    }

    // During the delay period, just render children (they may recover)
    if (this.state.hasError && !this.state.showError) {
      return null; // Don't show anything during the grace period
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
