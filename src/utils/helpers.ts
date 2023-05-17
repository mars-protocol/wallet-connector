export function ensure<T>(
  argument: T | undefined | null,
  message = "Can not find value"
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message)
  }

  return argument
}
