import { inject } from 'vue'
import { ExceptionLogger } from '@/services/ExceptionLogger'

export function useExceptionLogger() {
  const exceptionLogger = inject<ExceptionLogger>('exceptionLogger')

  if (!exceptionLogger) {
    throw new Error('ExceptionLogger not provided')
  }

  return exceptionLogger
}
