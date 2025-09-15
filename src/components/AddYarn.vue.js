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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ref } from "vue";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
var brand = ref("");
var colorCode = ref("");
var thickness = ref("");
var remaining = ref("");
var notes = ref("");
var imageUrl = ref("");
var emit = defineEmits(["yarn-added"]);
var addYarn = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!brand.value || !colorCode.value)
                    return [2 /*return*/];
                return [4 /*yield*/, addDoc(collection(db, "yarns"), {
                        brand: brand.value,
                        colorCode: colorCode.value,
                        thickness: thickness.value,
                        remaining: remaining.value,
                        notes: notes.value,
                        imageUrl: imageUrl.value || ""
                    })];
            case 1:
                _a.sent();
                brand.value = colorCode.value = thickness.value = remaining.value = notes.value = imageUrl.value = "";
                emit("yarn-added");
                return [2 /*return*/];
        }
    });
}); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "mb-6" }));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)(__assign({ class: "text-lg font-semibold" }));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)(__assign({ class: "space-y-2" }));
__VLS_asFunctionalElement(__VLS_elements.input)(__assign({ placeholder: "ブランド" }, { class: "border p-1 w-full" }));
(__VLS_ctx.brand);
// @ts-ignore
[brand,];
__VLS_asFunctionalElement(__VLS_elements.input)(__assign({ placeholder: "色番" }, { class: "border p-1 w-full" }));
(__VLS_ctx.colorCode);
// @ts-ignore
[colorCode,];
__VLS_asFunctionalElement(__VLS_elements.input)(__assign({ placeholder: "太さ (#20, #40...)" }, { class: "border p-1 w-full" }));
(__VLS_ctx.thickness);
// @ts-ignore
[thickness,];
__VLS_asFunctionalElement(__VLS_elements.input)(__assign({ placeholder: "残量 (10g, 中...)" }, { class: "border p-1 w-full" }));
(__VLS_ctx.remaining);
// @ts-ignore
[remaining,];
__VLS_asFunctionalElement(__VLS_elements.input)(__assign({ placeholder: "メモ" }, { class: "border p-1 w-full" }));
(__VLS_ctx.notes);
// @ts-ignore
[notes,];
__VLS_asFunctionalElement(__VLS_elements.input)(__assign({ placeholder: "画像URL (任意)" }, { class: "border p-1 w-full" }));
(__VLS_ctx.imageUrl);
// @ts-ignore
[imageUrl,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)(__assign({ onClick: (__VLS_ctx.addYarn) }, { class: "bg-blue-500 text-white px-3 py-1 rounded" }));
// @ts-ignore
[addYarn,];
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () { return (__assign(__assign({}, {}), { brand: brand, colorCode: colorCode, thickness: thickness, remaining: remaining, notes: notes, imageUrl: imageUrl, addYarn: addYarn })); },
});
export default (await import('vue')).defineComponent({
    setup: function () { return ({}); },
});
; /* PartiallyEnd: #4569/main.vue */
