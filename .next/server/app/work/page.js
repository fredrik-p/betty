const CHUNK_PUBLIC_PATH = "server/app/work/page.js";
const runtime = require("../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_5a78de._.js");
runtime.loadChunk("server/chunks/[root of the server]__01319e._.js");
runtime.getOrInstantiateRuntimeModule(
  "[project]/.next-internal/server/app/work/page/actions.js (ecmascript)",
  CHUNK_PUBLIC_PATH,
);
module.exports = runtime.getOrInstantiateRuntimeModule(
  "[project]/node_modules/next/dist/esm/build/templates/app-page.js/(COMPONENT_0)/[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)/(COMPONENT_1)/[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)/(COMPONENT_2)/[project]/src/app/work/page.tsx [app-rsc] (ecmascript, Next.js server component) (ecmascript) {facade}",
  CHUNK_PUBLIC_PATH,
).exports;
