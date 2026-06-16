import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/html/about.html"),
        contact: resolve(__dirname, "src/html/contact.html"),
        service: resolve(__dirname, "src/html/service.html"),
        navbar: resolve(__dirname, "src/Components/navbar.html"),
        footer: resolve(__dirname, "src/Components/footer.html"),
        whatsapp: resolve(__dirname, "src/Components/whatsapp.html"),
        burgermenu: resolve(__dirname, "src/Components/burgermenu.html"),
      },
    },
  },
});
