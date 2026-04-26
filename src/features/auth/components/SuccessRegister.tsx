type Props = {
  onContinue: () => void;
};

export default function SuccessRegister({ onContinue }: Props) {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-sm p-8 space-y-5 bg-white rounded-lg shadow-md text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-100">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">
          Registration Successful!
        </h2>
        <p className="text-sm text-gray-600">
          Your account has been created. Please sign in to continue.
        </p>
        <button
          onClick={onContinue}
          className="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
