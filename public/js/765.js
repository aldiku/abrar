"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[765],{765:(e,t,n)=>{n.r(t),n.d(t,{DayGridView:()=>q,DayTable:()=>T,DayTableSlicer:()=>H,Table:()=>k,TableView:()=>d,buildDayTableModel:()=>N,default:()=>I});var r=n(379),i=n.n(r),a=n(959),s={insert:"head",singleton:!1};i()(a.Z,s);a.Z.locals;var o=n(154),l=n(655),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.headerElRef=(0,o.VfA)(),t}return(0,l.ZT)(t,e),t.prototype.renderSimpleLayout=function(e,t){var n=this.props,r=this.context,i=[],a=(0,o.Q8U)(r.options);return e&&i.push({type:"header",key:"header",isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),i.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),(0,o.azq)(o.xS$,{viewSpec:r.viewSpec},(function(e,t){return(0,o.azq)("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},(0,o.azq)(o.Oh2,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:i}))}))},t.prototype.renderHScrollLayout=function(e,t,n,r){var i=this.context.pluginHooks.scrollGridImpl;if(!i)throw new Error("No ScrollGrid implementation");var a=this.props,s=this.context,l=!a.forPrint&&(0,o.Q8U)(s.options),d=!a.forPrint&&(0,o.PZw)(s.options),c=[];return e&&c.push({type:"header",key:"header",isSticky:l,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),c.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),d&&c.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:o.Hbc}]}),(0,o.azq)(o.xS$,{viewSpec:s.viewSpec},(function(e,t){return(0,o.azq)("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},(0,o.azq)(i,{liquid:!a.isHeightAuto&&!a.forPrint,collapsibleWidth:a.forPrint,colGroups:[{cols:[{span:n,minWidth:r}]}],sections:c}))}))},t}(o.IdW);function c(e,t){for(var n=[],r=0;r<t;r+=1)n[r]=[];for(var i=0,a=e;i<a.length;i++){var s=a[i];n[s.row].push(s)}return n}function f(e,t){for(var n=[],r=0;r<t;r+=1)n[r]=[];for(var i=0,a=e;i<a.length;i++){var s=a[i];n[s.firstCol].push(s)}return n}function g(e,t){var n=[];if(e){for(s=0;s<t;s+=1)n[s]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(var r=0,i=e.segs;r<i.length;r++){var a=i[r];n[a.row].segs.push(a)}}else for(var s=0;s<t;s+=1)n[s]=null;return n}var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=(0,o.rcD)(this.context,e.date);return(0,o.azq)(o.R_3,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraHookProps:e.extraHookProps,defaultContent:p},(function(n,r){return(r||e.forceDayTop)&&(0,o.azq)("div",{className:"fc-daygrid-day-top",ref:n},(0,o.azq)("a",(0,l.pi)({id:e.dayNumberId,className:"fc-daygrid-day-number"},t),r||(0,o.azq)(o.HYg,null," ")))}))},t}(o.H6J);function p(e){return e.dayNumberText}var h=(0,o.SPZ)({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function v(e){var t=e.eventRange.ui.display;return"list-item"===t||"auto"===t&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this.props;return(0,o.azq)(o.h2k,(0,l.pi)({},e,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:h,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))},t}(o.H6J),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options.eventTimeFormat||h,r=(0,o.r39)(e.seg,n,t,!0,e.defaultDisplayEventEnd);return(0,o.azq)(o.Vsx,{seg:e.seg,timeText:r,defaultContent:b,isDragging:e.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(n,r,i,a){return(0,o.azq)("a",(0,l.pi)({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(r).join(" "),ref:n},(0,o.PsW)(e.seg,t)),a)}))},t}(o.H6J);function b(e){return(0,o.azq)(o.HYg,null,(0,o.azq)("div",{className:"fc-daygrid-event-dot",style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&(0,o.azq)("div",{className:"fc-event-time"},e.timeText),(0,o.azq)("div",{className:"fc-event-title"},e.event.title||(0,o.azq)(o.HYg,null," ")))}var R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.compileSegs=(0,o.HPs)(x),t}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=this.compileSegs(e.singlePlacements),n=t.allSegs,r=t.invisibleSegs;return(0,o.azq)(o.ygx,{dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:n,hiddenSegs:r,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:function(){var t=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return(0,o.azq)(o.HYg,null,n.map((function(n){var r=n.eventRange.instance.instanceId;return(0,o.azq)("div",{className:"fc-daygrid-event-harness",key:r,style:{visibility:t[r]?"hidden":""}},v(n)?(0,o.azq)(m,(0,l.pi)({seg:n,isDragging:!1,isSelected:r===e.eventSelection,defaultDisplayEventEnd:!1},(0,o.jHR)(n,e.todayRange))):(0,o.azq)(y,(0,l.pi)({seg:n,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:r===e.eventSelection,defaultDisplayEventEnd:!1},(0,o.jHR)(n,e.todayRange))))})))}},(function(e,t,n,r,i,a,s,d){return(0,o.azq)("a",(0,l.pi)({ref:e,className:["fc-daygrid-more-link"].concat(t).join(" "),title:a,"aria-expanded":s,"aria-controls":d},(0,o.YD1)(i)),r)}))},t}(o.H6J);function x(e){for(var t=[],n=[],r=0,i=e;r<i.length;r++){var a=i[r];t.push(a.seg),a.isVisible||n.push(a.seg)}return{allSegs:t,invisibleSegs:n}}var S=(0,o.SPZ)({week:"narrow"}),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=(0,o.VfA)(),t.state={dayNumberId:(0,o.osf)()},t.handleRootEl=function(e){(0,o.k$v)(t.rootElRef,e),(0,o.k$v)(t.props.elRef,e)},t}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this,t=e.context,n=e.props,r=e.state,i=e.rootElRef,a=n.date,s=n.dateProfile,d=(0,o.rcD)(t,a,"week");return(0,o.azq)(o.hJ8,{date:a,dateProfile:s,todayRange:n.todayRange,showDayNumber:n.showDayNumber,extraHookProps:n.extraHookProps,elRef:this.handleRootEl},(function(e,t,c,f){return(0,o.azq)("td",(0,l.pi)({ref:e,role:"gridcell",className:["fc-daygrid-day"].concat(t,n.extraClassNames||[]).join(" ")},c,n.extraDataAttrs,n.showDayNumber?{"aria-labelledby":r.dayNumberId}:{}),(0,o.azq)("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:n.innerElRef},n.showWeekNumber&&(0,o.azq)(o.QOi,{date:a,defaultFormat:S},(function(e,t,n,r){return(0,o.azq)("a",(0,l.pi)({ref:e,className:["fc-daygrid-week-number"].concat(t).join(" ")},d),r)})),!f&&(0,o.azq)(u,{date:a,dateProfile:s,showDayNumber:n.showDayNumber,dayNumberId:r.dayNumberId,forceDayTop:n.forceDayTop,todayRange:n.todayRange,extraHookProps:n.extraHookProps}),(0,o.azq)("div",{className:"fc-daygrid-day-events",ref:n.fgContentElRef},n.fgContent,(0,o.azq)("div",{className:"fc-daygrid-day-bottom",style:{marginTop:n.moreMarginTop}},(0,o.azq)(R,{allDayDate:a,singlePlacements:n.singlePlacements,moreCnt:n.moreCnt,alignmentElRef:i,alignGridTop:!n.showDayNumber,extraDateSpan:n.extraDateSpan,dateProfile:n.dateProfile,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,todayRange:n.todayRange}))),(0,o.azq)("div",{className:"fc-daygrid-day-bg"},n.bgContent)))}))},t}(o.IdW);function E(e,t,n,r,i,a,s){var o=new C;o.allowReslicing=!0,o.strictOrder=r,!0===t||!0===n?(o.maxCoord=a,o.hiddenConsumes=!0):"number"==typeof t?o.maxStackCnt=t:"number"==typeof n&&(o.maxStackCnt=n,o.hiddenConsumes=!0);for(var l=[],d=[],c=0;c<e.length;c+=1){var f=i[(D=e[c]).eventRange.instance.instanceId];null!=f?l.push({index:c,thickness:f,span:{start:D.firstCol,end:D.lastCol+1}}):d.push(D)}for(var g=o.addSegs(l),u=function(e,t,n){for(var r=function(e,t){for(var n=[],r=0;r<t;r+=1)n.push([]);for(var i=0,a=e;i<a.length;i++){var s=a[i];for(r=s.span.start;r<s.span.end;r+=1)n[r].push(s)}return n}(e,n.length),i=[],a=[],s=[],o=0;o<n.length;o+=1){for(var l=r[o],d=[],c=0,f=0,g=0,u=l;g<u.length;g++){var p=t[(m=u[g]).index];d.push({seg:z(p,o,o+1,n),isVisible:!0,isAbsolute:!1,absoluteTop:m.levelCoord,marginTop:m.levelCoord-c}),c=m.levelCoord+m.thickness}var h=[];c=0,f=0;for(var v=0,y=l;v<y.length;v++){p=t[(m=y[v]).index];var m,b=m.span.end-m.span.start>1,R=m.span.start===o;f+=m.levelCoord-c,c=m.levelCoord+m.thickness,b?(f+=m.thickness,R&&h.push({seg:z(p,m.span.start,m.span.end,n),isVisible:!0,isAbsolute:!0,absoluteTop:m.levelCoord,marginTop:0})):R&&(h.push({seg:z(p,m.span.start,m.span.end,n),isVisible:!0,isAbsolute:!1,absoluteTop:m.levelCoord,marginTop:f}),f=0)}i.push(d),a.push(h),s.push(f)}return{singleColPlacements:i,multiColPlacements:a,leftoverMargins:s}}(o.toRects(),e,s),p=u.singleColPlacements,h=u.multiColPlacements,v=u.leftoverMargins,y=[],m=[],b=0,R=d;b<R.length;b++){h[(D=R[b]).firstCol].push({seg:D,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(var x=D.firstCol;x<=D.lastCol;x+=1)p[x].push({seg:z(D,x,x+1,s),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(x=0;x<s.length;x+=1)y.push(0);for(var S=0,w=g;S<w.length;S++){var E=w[S],D=e[E.index],k=E.span;h[k.start].push({seg:z(D,k.start,k.end,s),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(x=k.start;x<k.end;x+=1)y[x]+=1,p[x].push({seg:z(D,x,x+1,s),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(x=0;x<s.length;x+=1)m.push(v[x]);return{singleColPlacements:p,multiColPlacements:h,moreCnts:y,moreMarginTops:m}}function z(e,t,n,r){if(e.firstCol===t&&e.lastCol===n-1)return e;var i=e.eventRange,a=i.range,s=(0,o.cMs)(a,{start:r[t].date,end:(0,o.E4D)(r[n-1].date,1)});return(0,l.pi)((0,l.pi)({},e),{firstCol:t,lastCol:n-1,eventRange:{def:i.def,ui:(0,l.pi)((0,l.pi)({},i.ui),{durationEditable:!1}),instance:i.instance,range:s},isStart:e.isStart&&s.start.valueOf()===a.start.valueOf(),isEnd:e.isEnd&&s.end.valueOf()===a.end.valueOf()})}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hiddenConsumes=!1,t.forceHidden={},t}return(0,l.ZT)(t,e),t.prototype.addSegs=function(t){for(var n=this,r=e.prototype.addSegs.call(this,t),i=this.entriesByLevel,a=function(e){return!n.forceHidden[(0,o.oBR)(e)]},s=0;s<i.length;s+=1)i[s]=i[s].filter(a);return r},t.prototype.handleInvalidInsertion=function(t,n,r){var i=this.entriesByLevel,a=this.forceHidden,s=t.touchingEntry,d=t.touchingLevel,c=t.touchingLateral;if(this.hiddenConsumes&&s){var f=(0,o.oBR)(s);if(!a[f])if(this.allowReslicing){var g=(0,l.pi)((0,l.pi)({},s),{span:(0,o.GT4)(s.span,n.span)});a[(0,o.oBR)(g)]=!0,i[d][c]=g,this.splitEntry(s,n,r)}else a[f]=!0,r.push(s)}return e.prototype.handleInvalidInsertion.call(this,t,n,r)},t}(o.KxW),D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cellElRefs=new o.lAU,t.frameElRefs=new o.lAU,t.fgElRefs=new o.lAU,t.segHarnessRefs=new o.lAU,t.rootElRef=(0,o.VfA)(),t.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},t}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this,t=this,n=t.props,r=t.state,i=t.context.options,a=n.cells.length,s=f(n.businessHourSegs,a),l=f(n.bgEventSegs,a),d=f(this.getHighlightSegs(),a),c=f(this.getMirrorSegs(),a),g=E((0,o.hak)(n.fgEventSegs,i.eventOrder),n.dayMaxEvents,n.dayMaxEventRows,i.eventOrderStrict,r.eventInstanceHeights,r.maxContentHeight,n.cells),u=g.singleColPlacements,p=g.multiColPlacements,h=g.moreCnts,v=g.moreMarginTops,y=n.eventDrag&&n.eventDrag.affectedInstances||n.eventResize&&n.eventResize.affectedInstances||{};return(0,o.azq)("tr",{ref:this.rootElRef,role:"row"},n.renderIntro&&n.renderIntro(),n.cells.map((function(t,r){var i=e.renderFgSegs(r,n.forPrint?u[r]:p[r],n.todayRange,y),a=e.renderFgSegs(r,function(e,t){if(!e.length)return[];var n=function(e){for(var t={},n=0,r=e;n<r.length;n++)for(var i=0,a=r[n];i<a.length;i++){var s=a[i];t[s.seg.eventRange.instance.instanceId]=s.absoluteTop}return t}(t);return e.map((function(e){return{seg:e,isVisible:!0,isAbsolute:!0,absoluteTop:n[e.eventRange.instance.instanceId],marginTop:0}}))}(c[r],p),n.todayRange,{},Boolean(n.eventDrag),Boolean(n.eventResize),!1);return(0,o.azq)(w,{key:t.key,elRef:e.cellElRefs.createRef(t.key),innerElRef:e.frameElRefs.createRef(t.key),dateProfile:n.dateProfile,date:t.date,showDayNumber:n.showDayNumbers,showWeekNumber:n.showWeekNumbers&&0===r,forceDayTop:n.showWeekNumbers,todayRange:n.todayRange,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,extraHookProps:t.extraHookProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,extraDateSpan:t.extraDateSpan,moreCnt:h[r],moreMarginTop:v[r],singlePlacements:u[r],fgContentElRef:e.fgElRefs.createRef(t.key),fgContent:(0,o.azq)(o.HYg,null,(0,o.azq)(o.HYg,null,i),(0,o.azq)(o.HYg,null,a)),bgContent:(0,o.azq)(o.HYg,null,e.renderFillSegs(d[r],"highlight"),e.renderFillSegs(s[r],"non-business"),e.renderFillSegs(l[r],"bg-event"))})})))},t.prototype.componentDidMount=function(){this.updateSizing(!0)},t.prototype.componentDidUpdate=function(e,t){var n=this.props;this.updateSizing(!(0,o.S6v)(e,n))},t.prototype.getHighlightSegs=function(){var e=this.props;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs},t.prototype.getMirrorSegs=function(){var e=this.props;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]},t.prototype.renderFgSegs=function(e,t,n,r,i,a,s){var d=this.context,c=this.props.eventSelection,f=this.state.framePositions,g=1===this.props.cells.length,u=i||a||s,p=[];if(f)for(var h=0,b=t;h<b.length;h++){var R=b[h],x=R.seg,S=x.eventRange.instance.instanceId,w=S+":"+e,E=R.isVisible&&!r[S],z=R.isAbsolute,C="",D="";z&&(d.isRtl?(D=0,C=f.lefts[x.lastCol]-f.lefts[x.firstCol]):(C=0,D=f.rights[x.firstCol]-f.rights[x.lastCol])),p.push((0,o.azq)("div",{className:"fc-daygrid-event-harness"+(z?" fc-daygrid-event-harness-abs":""),key:w,ref:u?null:this.segHarnessRefs.createRef(w),style:{visibility:E?"":"hidden",marginTop:z?"":R.marginTop,top:z?R.absoluteTop:"",left:C,right:D}},v(x)?(0,o.azq)(m,(0,l.pi)({seg:x,isDragging:i,isSelected:S===c,defaultDisplayEventEnd:g},(0,o.jHR)(x,n))):(0,o.azq)(y,(0,l.pi)({seg:x,isDragging:i,isResizing:a,isDateSelecting:s,isSelected:S===c,defaultDisplayEventEnd:g},(0,o.jHR)(x,n)))))}return p},t.prototype.renderFillSegs=function(e,t){var n=this.context.isRtl,r=this.props.todayRange,i=this.state.framePositions,a=[];if(i)for(var s=0,d=e;s<d.length;s++){var c=d[s],f=n?{right:0,left:i.lefts[c.lastCol]-i.lefts[c.firstCol]}:{left:0,right:i.rights[c.firstCol]-i.rights[c.lastCol]};a.push((0,o.azq)("div",{key:(0,o.rRV)(c.eventRange),className:"fc-daygrid-bg-harness",style:f},"bg-event"===t?(0,o.azq)(o.I_K,(0,l.pi)({seg:c},(0,o.jHR)(c,r))):(0,o.MA3)(t)))}return o.azq.apply(void 0,(0,l.ev)([o.HYg,{}],a))},t.prototype.updateSizing=function(e){var t=this.props,n=this.frameElRefs;if(!t.forPrint&&null!==t.clientWidth){if(e){var r=t.cells.map((function(e){return n.currentMap[e.key]}));if(r.length){var i=this.rootElRef.current;this.setState({framePositions:new o.zIV(i,r,!0,!1)})}}var a=this.state.eventInstanceHeights,s=this.queryEventInstanceHeights(),d=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.setState({eventInstanceHeights:(0,l.pi)((0,l.pi)({},a),s),maxContentHeight:d?this.computeMaxContentHeight():null})}},t.prototype.queryEventInstanceHeights=function(){var e=this.segHarnessRefs.currentMap,t={};for(var n in e){var r=Math.round(e[n].getBoundingClientRect().height),i=n.split(":")[0];t[i]=Math.max(t[i]||0,r)}return t},t.prototype.computeMaxContentHeight=function(){var e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top},t.prototype.getCellEls=function(){var e=this.cellElRefs.currentMap;return this.props.cells.map((function(t){return e[t.key]}))},t}(o.IdW);D.addStateEquality({eventInstanceHeights:o.S6v});var k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitBusinessHourSegs=(0,o.HPs)(c),t.splitBgEventSegs=(0,o.HPs)(c),t.splitFgEventSegs=(0,o.HPs)(c),t.splitDateSelectionSegs=(0,o.HPs)(c),t.splitEventDrag=(0,o.HPs)(g),t.splitEventResize=(0,o.HPs)(g),t.rowRefs=new o.lAU,t.handleRootEl=function(e){t.rootEl=e,e?t.context.registerInteractiveComponent(t,{el:e,isHitComboAllowed:t.props.isHitComboAllowed}):t.context.unregisterInteractiveComponent(t)},t}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.dateProfile,r=t.dayMaxEventRows,i=t.dayMaxEvents,a=t.expandRows,s=t.cells.length,l=this.splitBusinessHourSegs(t.businessHourSegs,s),d=this.splitBgEventSegs(t.bgEventSegs,s),c=this.splitFgEventSegs(t.fgEventSegs,s),f=this.splitDateSelectionSegs(t.dateSelectionSegs,s),g=this.splitEventDrag(t.eventDrag,s),u=this.splitEventResize(t.eventResize,s),p=!0===i||!0===r;p&&!a&&(p=!1,r=null,i=null);var h=["fc-daygrid-body",p?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",a?"":"fc-daygrid-body-natural"];return(0,o.azq)("div",{className:h.join(" "),ref:this.handleRootEl,style:{width:t.clientWidth,minWidth:t.tableMinWidth}},(0,o.azq)(o.wh8,{unit:"day"},(function(p,h){return(0,o.azq)(o.HYg,null,(0,o.azq)("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:t.clientWidth,minWidth:t.tableMinWidth,height:a?t.clientHeight:""}},t.colGroupNode,(0,o.azq)("tbody",{role:"presentation"},t.cells.map((function(a,p){return(0,o.azq)(D,{ref:e.rowRefs.createRef(p),key:a.length?a[0].date.toISOString():p,showDayNumbers:s>1,showWeekNumbers:t.showWeekNumbers,todayRange:h,dateProfile:n,cells:a,renderIntro:t.renderRowIntro,businessHourSegs:l[p],eventSelection:t.eventSelection,bgEventSegs:d[p].filter(P),fgEventSegs:c[p],dateSelectionSegs:f[p],eventDrag:g[p],eventResize:u[p],dayMaxEvents:i,dayMaxEventRows:r,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:t.forPrint})})))))})))},t.prototype.prepareHits=function(){this.rowPositions=new o.zIV(this.rootEl,this.rowRefs.collect().map((function(e){return e.getCellEls()[0]})),!1,!0),this.colPositions=new o.zIV(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},t.prototype.queryHit=function(e,t){var n=this.colPositions,r=this.rowPositions,i=n.leftToIndex(e),a=r.topToIndex(t);if(null!=a&&null!=i){var s=this.props.cells[a][i];return{dateProfile:this.props.dateProfile,dateSpan:(0,l.pi)({range:this.getCellRange(a,i),allDay:!0},s.extraDateSpan),dayEl:this.getCellEl(a,i),rect:{left:n.lefts[i],right:n.rights[i],top:r.tops[a],bottom:r.bottoms[a]},layer:0}}return null},t.prototype.getCellEl=function(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date;return{start:n,end:(0,o.E4D)(n,1)}},t}(o.IdW);function P(e){return e.eventRange.def.allDay}var H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forceDayIfListItem=!0,t}return(0,l.ZT)(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(o.RVT),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicer=new H,t.tableRef=(0,o.VfA)(),t}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return(0,o.azq)(k,(0,l.pi)({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))},t}(o.IdW),q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayTableModel=(0,o.HPs)(N),t.headerRef=(0,o.VfA)(),t.tableRef=(0,o.VfA)(),t}return(0,l.ZT)(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,r=t.dateProfileGenerator,i=this.props,a=this.buildDayTableModel(i.dateProfile,r),s=n.dayHeaders&&(0,o.azq)(o.lR3,{ref:this.headerRef,dateProfile:i.dateProfile,dates:a.headerDates,datesRepDistinctDays:1===a.rowCnt}),l=function(t){return(0,o.azq)(T,{ref:e.tableRef,dateProfile:i.dateProfile,dayTableModel:a,businessHours:i.businessHours,dateSelection:i.dateSelection,eventStore:i.eventStore,eventUiBases:i.eventUiBases,eventSelection:i.eventSelection,eventDrag:i.eventDrag,eventResize:i.eventResize,nextDayThreshold:n.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:n.dayMaxEvents,dayMaxEventRows:n.dayMaxEventRows,showWeekNumbers:n.weekNumbers,expandRows:!i.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:i.forPrint})};return n.dayMinWidth?this.renderHScrollLayout(s,l,a.colCnt,n.dayMinWidth):this.renderSimpleLayout(s,l)},t}(d);function N(e,t){var n=new o.xB8(e.renderRange,t);return new o.xVj(n,/year|month|week/.test(e.currentRangeUnit))}var M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,l.ZT)(t,e),t.prototype.buildRenderRange=function(t,n,r){var i,a=this.props.dateEnv,s=e.prototype.buildRenderRange.call(this,t,n,r),l=s.start,d=s.end;if(/^(year|month)$/.test(n)&&(l=a.startOfWeek(l),(i=a.startOfWeek(d)).valueOf()!==d.valueOf()&&(d=(0,o.jh6)(i,1))),this.props.monthMode&&this.props.fixedWeekCount){var c=Math.ceil((0,o.bXg)(l,d));d=(0,o.jh6)(d,6-c)}return{start:l,end:d}},t}(o.VPe);const I=(0,o.rxu)({initialView:"dayGridMonth",views:{dayGrid:{component:q,dateProfileGeneratorClass:M},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}})},959:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:rgba(255,220,40,.15);background-color:var(--fc-today-bg-color,rgba(255,220,40,.15))}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{cursor:pointer;position:relative;z-index:4}.fc .fc-daygrid-week-number{background-color:hsla(0,0%,82%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,82%,.3));color:grey;color:var(--fc-neutral-text-color,grey);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:.85em;font-size:var(--fc-small-font-size,.85em);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:4px solid #3788d8;border:calc(var(--fc-daygrid-event-dot-width, 8px)/2) solid var(--fc-event-border-color,#3788d8);border-radius:4px;border-radius:calc(var(--fc-daygrid-event-dot-width, 8px)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}',""]);const a=i}}]);