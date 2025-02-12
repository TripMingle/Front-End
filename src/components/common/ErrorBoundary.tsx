'use client';

import {
  errorboundary,
  retry,
} from '@/styles/components/common/error-component.css';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  message?: string;
  reset?: () => void;
};

type State = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error);
  }

  locationReload() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className={errorboundary}>
            <Image src="/icons/error.png" width="96" height="96" alt="error" />
            {this.props.message ||
              '데이터를 불러오는 중에 문제가 발생했습니다.'}
            <button className={retry} onClick={this.props.reset || this.locationReload}>
              Retry
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
