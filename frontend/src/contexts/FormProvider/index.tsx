import { FormProvider as HookFormProvider } from "react-hook-form";

export function FormProvider(props: FormProviderProps) {
	return (
		<HookFormProvider {...props.methods}>
			<form
				onSubmit={props.methods.handleSubmit(
					props.onSubmit ?? (() => {})
				)}
			>
				{props.children}
			</form>
		</HookFormProvider>
	);
}
