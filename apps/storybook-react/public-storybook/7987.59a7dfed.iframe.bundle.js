"use strict";(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[7987],{"../../node_modules/@tamagui/slider/dist/esm/Slider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iR:()=>Slider});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),compose_refs=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js"),esm=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),styled=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),config=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/config.js"),createVariable=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),withStaticProperties=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),dist_esm=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js"),helpers_dist_esm=__webpack_require__("../../node_modules/@tamagui/helpers/dist/esm/index.js"),ThemeableStack=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),useControllableState=__webpack_require__("../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js"),react=__webpack_require__("../../node_modules/react/index.js");const DirectionContext=react.createContext(void 0);var create_context=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js");const[createSliderContext,createSliderScope]=(0,create_context.b)("Slider"),[SliderProvider,useSliderContext]=createSliderContext("Slider"),[SliderOrientationProvider,useSliderOrientationContext]=createSliderContext("Slider",{startEdge:"left",endEdge:"right",sizeProp:"width",size:0,direction:1}),PAGE_KEYS=["PageUp","PageDown"],ARROW_KEYS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],BACK_KEYS={ltr:["ArrowDown","Home","ArrowLeft","PageDown"],rtl:["ArrowDown","Home","ArrowRight","PageDown"]};function convertValueToPercentage(value,min,max){return 100/(max-min)*(value-min)}function linearScale(input,output){return value=>{if(input[0]===input[1]||output[0]===output[1])return output[0];const ratio=(output[1]-output[0])/(input[1]-input[0]);return output[0]+ratio*(value-input[0])}}var web_dist_esm=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/index.js"),Stacks=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js");const DirectionalYStack=(0,styled.z)(Stacks.FA,{variants:{orientation:{horizontal:{},vertical:{}}}}),SliderFrame=(0,styled.z)(DirectionalYStack,{position:"relative",variants:{size:(val,extras)=>{const orientation=extras.props.orientation,size=Math.round((0,createVariable.Ve)((0,dist_esm.ap)(val))/6);return"horizontal"===orientation?{height:size,borderRadius:size,justifyContent:"center"}:{width:size,borderRadius:size,alignItems:"center"}}}}),SliderImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeSlider,onSlideStart,onSlideMove,onSlideEnd,onHomeKeyDown,onEndKeyDown,onStepKeyDown,...sliderProps}=props,context=useSliderContext("Slider",__scopeSlider);return(0,jsx_runtime.jsx)(SliderFrame,{size:"$4",...sliderProps,"data-orientation":sliderProps.orientation,ref:forwardedRef,...esm.$L&&{onKeyDown:event=>{"Home"===event.key?(onHomeKeyDown(event),event.preventDefault()):"End"===event.key?(onEndKeyDown(event),event.preventDefault()):PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)&&(onStepKeyDown(event),event.preventDefault())}},onMoveShouldSetResponderCapture:()=>!0,onScrollShouldSetResponder:()=>!0,onScrollShouldSetResponderCapture:()=>!0,onMoveShouldSetResponder:()=>!0,onStartShouldSetResponder:()=>!0,onResponderTerminationRequest:()=>!1,onResponderGrant:(0,web_dist_esm.composeEventHandlers)(props.onResponderGrant,(event=>{const target=event.target,isStartingOnThumb=context.thumbs.has(target);esm.$L&&target instanceof HTMLElement&&context.thumbs.has(target)&&target.focus(),onSlideStart(event,isStartingOnThumb?"thumb":"track")})),onResponderMove:(0,web_dist_esm.composeEventHandlers)(props.onResponderMove,(event=>{event.stopPropagation(),onSlideMove(event)})),onResponderRelease:(0,web_dist_esm.composeEventHandlers)(props.onResponderRelease,(event=>{onSlideEnd(event)}))})})),SliderHorizontal=react.forwardRef(((props,forwardedRef)=>{const{min,max,dir,onSlideStart,onSlideMove,onStepKeyDown,...sliderProps}=props,direction=function useDirection(localDir){const globalDir=react.useContext(DirectionContext);return localDir||globalDir||"ltr"}(dir),isDirectionLTR="ltr"===direction,sliderRef=react.useRef(null),[state,setState]=react.useState((()=>({size:0,offset:0})));function getValueFromPointer(pointerPosition){return linearScale([0,state.size],isDirectionLTR?[min,max]:[max,min])(pointerPosition)}const measure=()=>{var _a;null==(_a=sliderRef.current)||_a.measure(((_x,_y,width,_height,pageX,_pageY)=>{setState({size:width,offset:pageX})}))};return esm.C5&&useOnDebouncedWindowResize(measure),(0,jsx_runtime.jsx)(SliderOrientationProvider,{scope:props.__scopeSlider,startEdge:isDirectionLTR?"left":"right",endEdge:isDirectionLTR?"right":"left",direction:isDirectionLTR?1:-1,sizeProp:"width",size:state.size,children:(0,jsx_runtime.jsx)(SliderImpl,{ref:(0,compose_refs.F)(forwardedRef,sliderRef),dir:direction,...sliderProps,orientation:"horizontal",onLayout:measure,onSlideStart:(event,target)=>{const value=getValueFromPointer(event.nativeEvent.locationX);value&&(null==onSlideStart||onSlideStart(value,target))},onSlideMove:event=>{const value=getValueFromPointer(event.nativeEvent.pageX-state.offset);value&&(null==onSlideMove||onSlideMove(value))},onSlideEnd:()=>{},onStepKeyDown:event=>{const isBackKey=BACK_KEYS[direction].includes(event.key);null==onStepKeyDown||onStepKeyDown({event,direction:isBackKey?-1:1})}})})}));function useOnDebouncedWindowResize(callback,amt=200){react.useEffect((()=>{let last;const onResize=()=>{clearTimeout(last),last=setTimeout(callback,amt)};return window.addEventListener("resize",onResize),()=>{clearTimeout(last),window.removeEventListener("resize",onResize)}}),[])}const SliderVertical=react.forwardRef(((props,forwardedRef)=>{const{min,max,onSlideStart,onSlideMove,onStepKeyDown,...sliderProps}=props,[state,setState]=react.useState((()=>({size:0,offset:0}))),sliderRef=react.useRef(null);function getValueFromPointer(pointerPosition){return linearScale([0,state.size],[max,min])(pointerPosition)}const measure=()=>{var _a;null==(_a=sliderRef.current)||_a.measure(((_x,_y,_width,height,_pageX,pageY)=>{setState({size:height,offset:pageY})}))};return esm.C5&&useOnDebouncedWindowResize(measure),(0,jsx_runtime.jsx)(SliderOrientationProvider,{scope:props.__scopeSlider,startEdge:"bottom",endEdge:"top",sizeProp:"height",size:state.size,direction:1,children:(0,jsx_runtime.jsx)(SliderImpl,{ref:(0,compose_refs.F)(forwardedRef,sliderRef),...sliderProps,orientation:"vertical",onLayout:measure,onSlideStart:(event,target)=>{const value=getValueFromPointer(event.nativeEvent.locationY);value&&(null==onSlideStart||onSlideStart(value,target))},onSlideMove:event=>{const value=getValueFromPointer(event.nativeEvent.pageY-state.offset);value&&(null==onSlideMove||onSlideMove(value))},onSlideEnd:()=>{},onStepKeyDown:event=>{const isBackKey=BACK_KEYS.ltr.includes(event.key);null==onStepKeyDown||onStepKeyDown({event,direction:isBackKey?-1:1})}})})})),SliderTrackFrame=(0,styled.z)(SliderFrame,{name:"SliderTrack",variants:{unstyled:{false:{height:"100%",width:"100%",backgroundColor:"$background",position:"relative",borderRadius:1e5,overflow:"hidden"}}},defaultVariants:{unstyled:!1}}),SliderTrack=react.forwardRef(((props,forwardedRef)=>{const{__scopeSlider,...trackProps}=props,context=useSliderContext("SliderTrack",__scopeSlider);return(0,jsx_runtime.jsx)(SliderTrackFrame,{"data-disabled":context.disabled?"":void 0,"data-orientation":context.orientation,orientation:context.orientation,size:context.size,...trackProps,ref:forwardedRef})}));SliderTrack.displayName="SliderTrack";const SliderTrackActiveFrame=(0,styled.z)(SliderFrame,{name:"SliderTrackActive",backgroundColor:"$background",position:"absolute"}),SliderTrackActive=react.forwardRef(((props,forwardedRef)=>{const{__scopeSlider,...rangeProps}=props,context=useSliderContext("SliderTrackActive",__scopeSlider),orientation=useSliderOrientationContext("SliderTrackActive",__scopeSlider),ref=react.useRef(null),composedRefs=(0,compose_refs.e)(forwardedRef,ref),valuesCount=context.values.length,percentages=context.values.map((value=>convertValueToPercentage(value,context.min,context.max))),offsetStart=valuesCount>1?Math.min(...percentages):0,offsetEnd=100-Math.max(...percentages);return(0,jsx_runtime.jsx)(SliderTrackActiveFrame,{orientation:context.orientation,"data-orientation":context.orientation,"data-disabled":context.disabled?"":void 0,size:context.size,...rangeProps,ref:composedRefs,[orientation.startEdge]:`${offsetStart}%`,[orientation.endEdge]:`${offsetEnd}%`,..."width"===orientation.sizeProp?{height:"100%"}:{left:0,right:0}})}));SliderTrackActive.displayName="SliderTrackActive";const getThumbSize=val=>{const tokens=(0,config.lz)(),size="number"==typeof val?val:(0,dist_esm.ap)(tokens.size[val],{shift:-1});return{width:size,height:size,minWidth:size,minHeight:size}},SliderThumbFrame=(0,styled.z)(ThemeableStack.K,{name:"SliderThumb",variants:{size:{"...size":getThumbSize},unstyled:{false:{position:"absolute",bordered:2,borderWidth:2,backgrounded:!0,pressTheme:esm.$L,focusTheme:esm.$L,hoverTheme:esm.$L}}},defaultVariants:{unstyled:!1}}),SliderThumb=react.forwardRef(((props,forwardedRef)=>{const{__scopeSlider,index,size:sizeProp,...thumbProps}=props,context=useSliderContext("SliderThumb",__scopeSlider),orientation=useSliderOrientationContext("SliderThumb",__scopeSlider),[thumb,setThumb]=react.useState(null),composedRefs=(0,compose_refs.e)(forwardedRef,(node=>setThumb(node))),value=context.values[index],percent=void 0===value?0:convertValueToPercentage(value,context.min,context.max),label=function getLabel(index,totalValues){return totalValues>2?`Value ${index+1} of ${totalValues}`:2===totalValues?["Minimum","Maximum"][index]:void 0}(index,context.values.length),sizeIn=sizeProp??context.size??"$true",[size,setSize]=react.useState((()=>(0,createVariable.Ve)(getThumbSize(sizeIn).width))),thumbInBoundsOffset=size?function getThumbInBoundsOffset(width,left,direction){const halfWidth=width/2;return(halfWidth-linearScale([0,50],[0,halfWidth])(left)*direction)*direction}(size,percent,orientation.direction):0;return react.useEffect((()=>{if(thumb)return context.thumbs.add(thumb),()=>{context.thumbs.delete(thumb)}}),[thumb,context.thumbs]),(0,jsx_runtime.jsx)(SliderThumbFrame,{ref:composedRefs,role:"slider","aria-label":props["aria-label"]||label,"aria-valuemin":context.min,"aria-valuenow":value,"aria-valuemax":context.max,"aria-orientation":context.orientation,"data-orientation":context.orientation,"data-disabled":context.disabled?"":void 0,tabIndex:context.disabled?void 0:0,animateOnly:["transform","left","right","top","bottom"],..."horizontal"===context.orientation?{x:thumbInBoundsOffset-size/2,y:-size/2,top:"50%",...0===size&&{top:"auto",bottom:"auto"}}:{x:-size/2,y:size/2,left:"50%",...0===size&&{left:"auto",right:"auto"}},[orientation.startEdge]:`${percent}%`,size:sizeIn,...thumbProps,onLayout:e=>{setSize(e.nativeEvent.layout[orientation.sizeProp])},onFocus:(0,helpers_dist_esm.composeEventHandlers)(props.onFocus,(()=>{context.valueIndexToChangeRef.current=index}))})}));SliderThumb.displayName="SliderThumb";const SliderComponent=react.forwardRef(((props,forwardedRef)=>{const{name,min=0,max=100,step=1,orientation="horizontal",disabled=!1,minStepsBetweenThumbs=0,defaultValue=[min],value,onValueChange=()=>{},size:sizeProp,...sliderProps}=props,sliderRef=react.useRef(null),composedRefs=(0,compose_refs.e)(sliderRef,forwardedRef),thumbRefs=react.useRef(new Set),valueIndexToChangeRef=react.useRef(0),isHorizontal="horizontal"===orientation,[values=[],setValues]=(0,useControllableState.T)({prop:value,defaultProp:defaultValue,transition:!0,onChange:value2=>{var _a;if(esm.$L){null==(_a=[...thumbRefs.current][valueIndexToChangeRef.current])||_a.focus()}onValueChange(value2)}});function updateValues(value2,atIndex){const decimalCount=function getDecimalCount(value){return(String(value).split(".")[1]||"").length}(step),snapToStep=function roundValue(value,decimalCount){const rounder=Math.pow(10,decimalCount);return Math.round(value*rounder)/rounder}(Math.round((value2-min)/step)*step+min,decimalCount),nextValue=(0,helpers_dist_esm.clamp)(snapToStep,[min,max]);setValues(((prevValues=[])=>{const nextValues=function getNextSortedValues(prevValues=[],nextValue,atIndex){const nextValues=[...prevValues];return nextValues[atIndex]=nextValue,nextValues.sort(((a,b)=>a-b))}(prevValues,nextValue,atIndex);return function hasMinStepsBetweenValues(values,minStepsBetweenValues){if(minStepsBetweenValues>0){const stepsBetweenValues=function getStepsBetweenValues(values){return values.slice(0,-1).map(((value,index)=>values[index+1]-value))}(values);return Math.min(...stepsBetweenValues)>=minStepsBetweenValues}return!0}(nextValues,minStepsBetweenThumbs*step)?(valueIndexToChangeRef.current=nextValues.indexOf(nextValue),String(nextValues)===String(prevValues)?prevValues:nextValues):prevValues}))}esm.$L&&react.useEffect((()=>{const node=sliderRef.current;if(!node)return;const preventDefault=e=>{e.preventDefault()};return node.addEventListener("touchstart",preventDefault),()=>{node.removeEventListener("touchstart",preventDefault)}}),[]);const SliderOriented=isHorizontal?SliderHorizontal:SliderVertical;return(0,jsx_runtime.jsx)(SliderProvider,{scope:props.__scopeSlider,disabled,min,max,valueIndexToChangeRef,thumbs:thumbRefs.current,values,orientation,size:sizeProp,children:(0,jsx_runtime.jsx)(SliderOriented,{"aria-disabled":disabled,"data-disabled":disabled?"":void 0,...sliderProps,ref:composedRefs,min,max,onSlideStart:disabled?void 0:(value2,target)=>{if("thumb"!==target){const closestIndex=function getClosestValueIndex(values,nextValue){if(1===values.length)return 0;const distances=values.map((value=>Math.abs(value-nextValue))),closestDistance=Math.min(...distances);return distances.indexOf(closestDistance)}(values,value2);updateValues(value2,closestIndex)}},onSlideMove:disabled?void 0:function handleSlideMove(value2){updateValues(value2,valueIndexToChangeRef.current)},onHomeKeyDown:()=>!disabled&&updateValues(min,0),onEndKeyDown:()=>!disabled&&updateValues(max,values.length-1),onStepKeyDown:({event,direction:stepDirection})=>{if(!disabled){const multiplier=PAGE_KEYS.includes(event.key)||event.shiftKey&&ARROW_KEYS.includes(event.key)?10:1,atIndex=valueIndexToChangeRef.current;updateValues(values[atIndex]+step*multiplier*stepDirection,atIndex)}}})})})),Slider=(0,withStaticProperties.$)(SliderComponent,{Track:SliderTrack,TrackActive:SliderTrackActive,Thumb:SliderThumb});Slider.displayName="Slider"}}]);