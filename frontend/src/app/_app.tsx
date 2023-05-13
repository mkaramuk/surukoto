import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";

export default function ({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Component {...pageProps} />;
		</MantineProvider>
	);
}
