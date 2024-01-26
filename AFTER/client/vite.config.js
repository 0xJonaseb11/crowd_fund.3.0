import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// import Thirdweb from "thirdweb";
// const thirdweb = new Thirdweb({
//   clientId: `${process.env.CLIENT_KEY}`,
//   SecretKey: `${process.env.SECRET_KEY}`
// });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
});
