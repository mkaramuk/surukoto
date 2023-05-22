import { FormProvider } from "@/contexts";
import { useViewModel } from "./viewmodel";
import { FormTextField } from "@/components/HookForm/FormTextField";

export function LoginPage() {
	const viewModel = useViewModel();

	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<FormProvider
				methods={viewModel.formMethods}
				onSubmit={viewModel.onSubmit}
			>
				<div className="flex flex-col w-[400px] rounded-xl bg-space-200 shadow-xl px-10 py-5">
					<div className="my-3 text-[35px] font-bold">Log in</div>
					<div className="flex flex-col gap-5">
						<FormTextField fieldName="email" label="E-Mail" />
						<FormTextField
							fieldName="password"
							type="password"
							label="Password"
						/>
					</div>
					<div className="h-[30px]" />
					<button type="submit" className="self-center w-full">
						Login
					</button>
				</div>
			</FormProvider>
		</div>
	);
}
