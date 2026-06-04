import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center py-20 text-center px-4">
            <div>
              <i className="fas fa-triangle-exclamation text-4xl text-amber-500 mb-4 block"></i>
              <p className="text-gray-600 dark:text-gray-400">
                Something went wrong loading this section.
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
