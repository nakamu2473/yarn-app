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
var props = defineProps({
    yarn: Object
});
var emit = defineEmits(["delete"]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "border rounded p-3 shadow" }));
if (__VLS_ctx.yarn.imageUrl) {
    // @ts-ignore
    [yarn,];
    __VLS_asFunctionalElement(__VLS_elements.img)(__assign({ src: (__VLS_ctx.yarn.imageUrl), alt: "yarn" }, { class: "w-full h-32 object-cover mb-2" }));
    // @ts-ignore
    [yarn,];
}
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)(__assign({ class: "font-bold" }));
(__VLS_ctx.yarn.brand);
(__VLS_ctx.yarn.colorCode);
// @ts-ignore
[yarn, yarn,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.yarn.thickness);
// @ts-ignore
[yarn,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.yarn.remaining);
// @ts-ignore
[yarn,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)(__assign({ class: "text-sm text-gray-600" }));
(__VLS_ctx.yarn.notes);
// @ts-ignore
[yarn,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.emit('delete', __VLS_ctx.yarn.id);
        // @ts-ignore
        [yarn, emit,];
    } }, { class: "bg-red-500 text-white px-2 py-1 rounded mt-2" }));
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-32']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () { return (__assign(__assign(__assign(__assign({}, props), {}), {}), { emit: emit })); },
});
export default (await import('vue')).defineComponent({
    setup: function () { return (__assign(__assign(__assign({}, props), {}), {})); },
});
; /* PartiallyEnd: #4569/main.vue */
