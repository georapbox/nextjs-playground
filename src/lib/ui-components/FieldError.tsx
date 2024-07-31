export const FieldError = ({ message }: { message: string }) => {
  return (
    <p className="text-red-600 text-sm" aria-live="polite">
      {message}
    </p>
  );
};
