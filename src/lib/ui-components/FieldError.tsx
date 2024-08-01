export const FieldError = ({ message }: { message: string }) => {
  return (
    <p className="text-red-600 dark:text-red-400 text-sm empty:hidden" aria-live="polite">
      {message}
    </p>
  );
};
