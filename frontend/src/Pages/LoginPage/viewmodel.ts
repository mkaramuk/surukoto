import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export function useViewModel() {
	const formSchema = yup.object().shape({
		email: yup
			.string()
			.email("E-mail is not a valid e-mail")
			.required("Please enter an e-mail address"),
		password: yup.string().required("Please enter your password"),
	});
	const formDefaultValues: LoginForm = {
		email: "",
		password: "",
	};

	const formMethods = useForm<LoginForm>({
		resolver: yupResolver(formSchema),
		defaultValues: formDefaultValues,
	});
	const onSubmit = formMethods.handleSubmit((values) => {
		console.log(values);
	});

	return {
		formMethods,
		onSubmit,
	};
}
