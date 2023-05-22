interface FormProviderProps<TFieldValues, TContext> {
	children: import("react").ReactNode;
	methods: import("react-hook-form").UseFormReturn<TFieldValues, TContext>;
	onSubmit?: (values: import("react-hook-form").FieldValues) => void;
}
