import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Outlet,
  init_esm,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-R7MDPYTW.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-VSYLVRLC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/foo.tsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/foo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/foo.tsx"
  );
  import.meta.hot.lastModified = "1701409112498.429";
}
function Foo() {
  _s();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    width: 200,
    height: 200,
    background: "red"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData == null ? void 0 : actionData.first_name }, void 0, false, {
      fileName: "app/routes/foo.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "first_name" }, void 0, false, {
        fileName: "app/routes/foo.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "last_name" }, void 0, false, {
        fileName: "app/routes/foo.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Submit" }, void 0, false, {
        fileName: "app/routes/foo.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/foo.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/foo.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/foo.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(Foo, "Poz7/ZgWo6/SVk8hdeknQK/9fro=", false, function() {
  return [useLoaderData, useActionData];
});
_c = Foo;
var _c;
$RefreshReg$(_c, "Foo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Foo as default
};
//# sourceMappingURL=/build/routes/foo-VCEWVMGN.js.map
