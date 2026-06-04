import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[ErrorBoundary]', error, info.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex items-center justify-center py-20 px-4 text-center">
          <div className="max-w-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-2xl">
              <i className="fas fa-triangle-exclamation text-2xl text-amber-500"></i>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Something went wrong
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              This section failed to load. The rest of the page is unaffected.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, message: '' })}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-xl transition-all duration-300"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
