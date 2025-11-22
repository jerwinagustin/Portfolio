// This package is needed for react-hook-form zodResolver
import '@hookform/resolvers/zod'

declare module '@hookform/resolvers/zod' {
  export function zodResolver<T>(schema: any): any
}
