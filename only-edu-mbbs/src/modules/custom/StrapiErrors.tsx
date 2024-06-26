export interface StrapiErrorsProps {
  message: string | null;
  name: string;
  status: string | null;
}

interface StrapiErrorsComponentProps {
  readonly error: StrapiErrorsProps | null;
}

export function StrapiErrors({ error }: StrapiErrorsComponentProps) {
  if (!error?.message) return null;
  return (
    <div className="text-red-500 text-sm flex w-full h-full justify-center italic py-2">
      {error?.message}
    </div>
  );
}
