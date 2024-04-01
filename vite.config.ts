import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import windiCSS from "vite-plugin-windicss";

export default defineConfig({
	plugins: [
		react(),
		windiCSS({
			scan: {
				dirs: ["./", "./src"],
				fileExtensions: ["html", "jsx", "tsx", "css"],
			},
		}),
	],
});
