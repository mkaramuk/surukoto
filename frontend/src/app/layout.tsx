import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

export const metadata = {
	title: "Surukoto",
	description: "Project tracking application",
};

interface RootLayoutProps {
	children?: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html>
			<body>{props.children}</body>
		</html>
	);
}
