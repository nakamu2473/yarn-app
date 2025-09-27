var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ref } from "vue";
import AddYarn from "./components/AddYarn.vue";
import Home from "./components/Home.vue";
var homeRef = ref(null);
var refreshYarns = function () {
    var _a;
    (_a = homeRef.value) === null || _a === void 0 ? void 0 : _a.fetchYarns();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "p-4" }));
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)(__assign({ class: "text-2xl font-bold mb-4" }));
/** @type {[typeof AddYarn, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(AddYarn, new AddYarn(__assign({ 'onYarnAdded': {} })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onYarnAdded': {} })], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3;
var __VLS_4;
var __VLS_5 = ({ yarnAdded: {} },
    { onYarnAdded: (__VLS_ctx.refreshYarns) });
// @ts-ignore
[refreshYarns,];
var __VLS_2;
/** @type {[typeof Home, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(Home, new Home({
    ref: "homeRef",
}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
        ref: "homeRef",
    }], __VLS_functionalComponentArgsRest(__VLS_7), false));
/** @type {typeof __VLS_ctx.homeRef} */ ;
var __VLS_10 = {};
// @ts-ignore
[homeRef,];
var __VLS_9;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
// @ts-ignore
var __VLS_11 = __VLS_10;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () { return ({
        AddYarn: AddYarn,
        Home: Home,
        homeRef: homeRef,
        refreshYarns: refreshYarns,
    }); },
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
