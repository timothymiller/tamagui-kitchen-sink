"use strict";(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[6066,9004],{"../../packages/app/src/features/media/MediaScreen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Media:()=>Media,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Media$parameters,_Media$parameters2,_Media$parameters2$do,_Users_dominicgarms_Documents_Coding_react_native_kitchen_sink_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_dominicgarms_Documents_Coding_react_native_kitchen_sink_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"demo/Media",component:__webpack_require__("../../packages/app/src/features/media/MediaScreen.tsx").MediaScreen};var Media={};Media.parameters=_objectSpread(_objectSpread({},Media.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Media$parameters=Media.parameters)||void 0===_Media$parameters?void 0:_Media$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Media$parameters2=Media.parameters)||void 0===_Media$parameters2||null===(_Media$parameters2$do=_Media$parameters2.docs)||void 0===_Media$parameters2$do?void 0:_Media$parameters2$do.source)})})},"../../packages/app/src/features/media/MediaScreen.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MediaScreen:()=>MediaScreen});var react=__webpack_require__("../../node_modules/react/index.js"),Stacks=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),esm=__webpack_require__("../../node_modules/tamagui/dist/esm/index.js"),LmAppShell_web=__webpack_require__("../../packages/app/src/components/layouts/LmAppShell.web.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js");function LmVideo(_ref){var _ref$aspectRatio=_ref.aspectRatio,aspectRatio=void 0===_ref$aspectRatio?16/9:_ref$aspectRatio,resizeMode=_ref.resizeMode,src=_ref.src,isLooping=_ref.isLooping,_ref$useNativeControl=_ref.useNativeControls,useNativeControls=void 0===_ref$useNativeControl||_ref$useNativeControl,autoplay=(_ref.posterSource,_ref.autoplay),width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsx)(dist_esm.Stack,{aspectRatio,width,height,children:(0,jsx_runtime.jsx)("video",{width:"100%",height:"100%",loop:isLooping,autoPlay:autoplay,controls:useNativeControls,style:{aspectRatio:resizeMode},children:(0,jsx_runtime.jsx)("source",{src})})})}var LmYoutubeEmbed_web=__webpack_require__("../../packages/youtube/dist/esm/LmYoutubeEmbed.web.js"),__jsx=react.createElement;function MediaScreen(){return __jsx(LmAppShell_web.LmAppShell,{title:"Media"},__jsx(Stacks.FA,{space:!0},__jsx(Stacks.FA,{space:!0},__jsx(esm.H3,null,"Video"),__jsx(LmVideo,{width:500,height:300,src:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"})),__jsx(Stacks.FA,{space:!0},__jsx(esm.H3,null,"Youtube"),__jsx(LmYoutubeEmbed_web.W,{youtubeId:"JxS5E-kZc2s"}))))}MediaScreen.displayName="MediaScreen",MediaScreen.__docgenInfo={description:"",methods:[],displayName:"MediaScreen"}},"../../packages/youtube/dist/esm/LmYoutubeEmbed.web.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>LmYoutubeEmbed});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),esm=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),Spinner=__webpack_require__("../../node_modules/tamagui/dist/esm/views/Spinner.js");function LmSkeleton(){return(0,jsx_runtime.jsx)(esm.Stack,{position:"absolute",top:0,left:0,backgroundColor:"$gray5",width:"100%",height:"100%",alignItems:"center",display:"flex",justifyContent:"center",children:(0,jsx_runtime.jsx)(Spinner.$,{})})}var _excluded=["youtubeId","aspectRatio","width"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function LmYoutubeEmbed(_ref){var _ref$youtubeId=_ref.youtubeId,youtubeId=void 0===_ref$youtubeId?"JxS5E-kZc2s":_ref$youtubeId,_ref$aspectRatio=_ref.aspectRatio,aspectRatio=void 0===_ref$aspectRatio?16/9:_ref$aspectRatio,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,stackProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(!1),loaded=_useState[0],setLoaded=_useState[1];return(0,jsx_runtime.jsxs)(esm.Stack,_objectSpread(_objectSpread({},stackProps),{},{width,aspectRatio,position:"relative",children:[!loaded&&(0,jsx_runtime.jsx)(LmSkeleton,{}),(0,jsx_runtime.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/".concat(youtubeId,"?controls=1"),frameBorder:"0",width:"100%",height:"100%",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:function onLoad(){return setLoaded(!0)}})]}))}}}]);