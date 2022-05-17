/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBuu0YHXOcgmqWLZl-fiMn6lG2wUhdPg8k\",\n    authDomain: \"next-firebase-stripe-39bf8.firebaseapp.com\",\n    databaseURL: \"https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com\",\n    projectId: \"next-firebase-stripe-39bf8\",\n    storageBucket: \"next-firebase-stripe-39bf8.appspot.com\",\n    messagingSenderId: \"777709922250\",\n    appId: \"1:777709922250:web:4500ee09dca93e1406d133\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ1Y7QUFFdkMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLDRDQUE0QztJQUN4REMsV0FBVyxFQUFFLGdFQUFnRTtJQUM3RUMsU0FBUyxFQUFFLDRCQUE0QjtJQUN2Q0MsYUFBYSxFQUFFLHdDQUF3QztJQUN2REMsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztDQUNuRDtBQUVELHNCQUFzQjtBQUN0QixNQUFNQyxHQUFHLEdBQUcsQ0FBQ1gscURBQU8sRUFBRSxDQUFDWSxNQUFNLEdBQUdkLDJEQUFhLENBQUNLLGNBQWMsQ0FBQyxHQUFHSixvREFBTSxFQUFFO0FBQ3hFLE1BQU1jLEVBQUUsR0FBR1osZ0VBQVksRUFBRTtBQUN6QixNQUFNYSxJQUFJLEdBQUdaLHNEQUFPLEVBQUU7QUFFdEIsaUVBQWVTLEdBQUc7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlLnRzPzkyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwLCBnZXRBcHBzIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5cbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUJ1dTBZSFhPY2dtcVdMWmwtZmlNbjZsRzJ3VWhkUGc4aycsXG4gIGF1dGhEb21haW46ICduZXh0LWZpcmViYXNlLXN0cmlwZS0zOWJmOC5maXJlYmFzZWFwcC5jb20nLFxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vbmV4dC1maXJlYmFzZS1zdHJpcGUtMzliZjgtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAnbmV4dC1maXJlYmFzZS1zdHJpcGUtMzliZjgnLFxuICBzdG9yYWdlQnVja2V0OiAnbmV4dC1maXJlYmFzZS1zdHJpcGUtMzliZjguYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzc3NzcwOTkyMjI1MCcsXG4gIGFwcElkOiAnMTo3Nzc3MDk5MjIyNTA6d2ViOjQ1MDBlZTA5ZGNhOTNlMTQwNmQxMzMnLFxufVxuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSAhZ2V0QXBwcygpLmxlbmd0aCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZ2V0QXBwKClcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKClcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcblxuZXhwb3J0IGRlZmF1bHQgYXBwXG5leHBvcnQgeyBhdXRoLCBkYiB9Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHAiLCJnZXRBcHBzIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJsZW5ndGgiLCJkYiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: initialLoading , 1: setInitialLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        })\n    , [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user: user1,\n            signUp,\n            signIn,\n            loading,\n            logout,\n            error: error1\n        })\n    , [\n        loading,\n        user1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"/home/elena/Documents/repos/next-flix/hooks/useAuth.tsx\",\n        lineNumber: 95,\n        columnNumber: 3\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDLENBQ3RDQyxPQUFPLENBQUMsSUFBTWQsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUFBLENBQUM7S0FDbEM7SUFDRCxNQUFNTCxNQUFNLEdBQUcsVUFBWTtRQUN6QkssVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQmpCLHNEQUFPLENBQUNPLDJDQUFJLENBQUMsQ0FBQ21CLElBQUksQ0FBQyxJQUFNO1lBQ3ZCUixPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ2QsQ0FBQyxDQUNEVSxLQUFLLENBQUMsQ0FBQ2YsS0FBSyxHQUFLZ0IsS0FBSyxDQUFDaEIsS0FBSyxDQUFDaUIsT0FBTyxDQUFDO1FBQUEsQ0FBQyxDQUN0Q0MsT0FBTyxDQUFDLElBQ1BkLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFBQSxDQUFDO0tBQ3JCO0lBRUQsTUFBTWUsV0FBVyxHQUFHM0IsOENBQU8sQ0FBQyxJQUFNLENBQUM7WUFBQ0ksSUFBSSxFQUFKQSxLQUFJO1lBQUVDLE1BQU07WUFBRUMsTUFBTTtZQUFFRyxPQUFPO1lBQUVGLE1BQU07WUFBRUMsS0FBSyxFQUFMQSxNQUFLO1NBQUMsQ0FBQztJQUFBLEVBQUU7UUFBQ0MsT0FBTztRQUFFTCxLQUFJO0tBQUMsQ0FBQztJQUVwRyxxQkFDQSw4REFBQ0QsV0FBVyxDQUFDeUIsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLFdBQVc7a0JBQ3JDLENBQUNaLGNBQWMsSUFBSUosUUFBUTs7Ozs7aUJBQ1AsQ0FDdEI7Q0FDRjtBQUVjLFNBQVNtQixPQUFPLEdBQUc7SUFDaEMsT0FBT2hDLGlEQUFVLENBQUNLLFdBQVcsQ0FBQztDQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvb2tzL3VzZUF1dGgudHN4P2ZiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxuICBVc2VyLFxufSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSdcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoPih7XG4gIHVzZXI6IG51bGwsXG4gIHNpZ25VcDogYXN5bmMgKCkgPT4ge30sXG4gIHNpZ25JbjogYXN5bmMgKCkgPT4ge30sXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge30sXG4gIGVycm9yOiBudWxsLFxuICBsb2FkaW5nOiBmYWxzZSxcbn0pXG5cbmludGVyZmFjZSBJQXV0aCB7XG4gIHVzZXI6IFVzZXIgfCBudWxsXG4gIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cbiAgc2lnbkluOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPlxuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD5cbiAgZXJyb3I6IHN0cmluZyB8IG51bGxcbiAgbG9hZGluZzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgQXV0aFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OkF1dGhQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5pdGlhbExvYWRpbmcsIHNldEluaXRpYWxMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIFxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT5cbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIC8vIExvZ2dlZCBpbi4uLlxuICAgICAgICAgIHNldFVzZXIodXNlcilcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vdCBsb2dnZWQgaW4uLi5cbiAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0SW5pdGlhbExvYWRpbmcoZmFsc2UpXG4gICAgICB9KSxcbiAgICBbYXV0aF1cbiAgKVxuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxuICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKSBcbiAgfVxuXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jIChlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxuICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKSBcbiAgfVxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiB7XG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcbiAgICAuZmluYWxseSgoKSA9PiBcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpKVxuICB9XG5cbiAgY29uc3QgbWVtb2VkVmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7dXNlciwgc2lnblVwLCBzaWduSW4sIGxvYWRpbmcsIGxvZ291dCwgZXJyb3J9KSwgW2xvYWRpbmcsIHVzZXJdKVxuXG4gIHJldHVybiAoXG4gIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWVtb2VkVmFsdWV9PlxuICAgIHshaW5pdGlhbExvYWRpbmcgJiYgY2hpbGRyZW4gfVxuICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzaWduVXAiLCJzaWduSW4iLCJsb2dvdXQiLCJlcnJvciIsImxvYWRpbmciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldExvYWRpbmciLCJzZXRVc2VyIiwic2V0RXJyb3IiLCJpbml0aWFsTG9hZGluZyIsInNldEluaXRpYWxMb2FkaW5nIiwicm91dGVyIiwicHVzaCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJjYXRjaCIsImFsZXJ0IiwibWVzc2FnZSIsImZpbmFsbHkiLCJtZW1vZWRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/elena/Documents/repos/next-flix/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/elena/Documents/repos/next-flix/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVpQjtBQUUvQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDSSw4REFBQ0gsd0RBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNsQjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlQXV0aCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();