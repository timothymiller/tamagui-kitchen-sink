"use strict";(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[1538],{"../../packages/app/src/state/appState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{useAppState:()=>useAppState,useToggleMainDrawer:()=>useToggleMainDrawer});var useAppState=(0,__webpack_require__("../../node_modules/zustand/esm/index.mjs").Ue)((function(set){return{isMainDrawerOpen:!1,toggleMainDrawer:function toggleMainDrawer(){return set((function(state){return{isMainDrawerOpen:!state.isMainDrawerOpen}}))},setMainDrawer:function setMainDrawer(bool){return set({isMainDrawerOpen:bool})}}})),useToggleMainDrawer=function useToggleMainDrawer(){return useAppState((function(state){return state.toggleMainDrawer}))}}}]);