module.exports = {

"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Navbar
});
(()=>{
    const e = new Error("Cannot find module 'react/jsx-dev-runtime'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'next/link'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return /*#__PURE__*/ _jsxDEV("nav", {
        className: "flex items-center justify-between flex-wrap bg-transparent z-10 p-6 fixed w-full",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex items-center flex-shrink-0 mr-6",
                children: /*#__PURE__*/ _jsxDEV(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsxDEV("span", {
                        className: "text-xl",
                        children: "Betty Norling"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navbar.tsx>",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Navbar.tsx>",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Navbar.tsx>",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "block lg:hidden",
                children: /*#__PURE__*/ _jsxDEV("button", {
                    onClick: ()=>setIsOpen(!isOpen),
                    className: "flex items-center px-3 py-2 hover:text-stone-600 hover:border-white",
                    children: /*#__PURE__*/ _jsxDEV("svg", {
                        className: "fill-current h-5 w-5",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ _jsxDEV("title", {
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navbar.tsx>",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("path", {
                                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navbar.tsx>",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Navbar.tsx>",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Navbar.tsx>",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Navbar.tsx>",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: `${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`,
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "text-sm lg:flex-grow",
                        children: /*#__PURE__*/ _jsxDEV(Link, {
                            href: "/cv",
                            className: "block mt-4 lg:inline-block lg:mt-0 hover:text-stone-500  mr-4",
                            children: "Curiculum"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navbar.tsx>",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navbar.tsx>",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "text-sm lg:ml-auto",
                        children: /*#__PURE__*/ _jsxDEV(Link, {
                            href: "/contact",
                            className: "block mt-4 lg:inline-block lg:mt-0 hover:text-stone-500 mr-4",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navbar.tsx>",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navbar.tsx>",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Navbar.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Navbar.tsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_17a78f._.js.map