(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n.p+"static/media/sidebaricon.89189811.svg"},127:function(e,t,n){e.exports=n.p+"static/media/dropdown-arrow.036a4c2e.svg"},212:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2WMQqAMBAEB/+g6P9fYiVKbEzhc7QwhQjCnVFB3GkHbsIVR0CIcypgBFqny45GYAF6h8uiBKY0eAZqo1NUUUXfiwKENDiyHQSrM1NcftpDHNfZGJ3iiiv+nfj+ezM43G3xAHROJ37CCv4UcXuLZTPHAAAAAElFTkSuQmCC"},217:function(e,t,n){e.exports=n.p+"static/media/lrnrinviteuser.e3817ac9.svg"},218:function(e,t,n){e.exports=n.p+"static/media/profilepic.f84ed13b.svg"},231:function(e,t,n){e.exports=n(406)},405:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(31),c=n(63),s=n(207),d=n(57),m={loading:!1},u=Object(c.c)({lrnrReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADER":return Object(d.a)({},e,{loading:!0});case"STOP_LOADER":return Object(d.a)({},e,{loading:!1});case"ADD_CONTANIER_NODES":return Object(d.a)({},e,{contaniernodes:t.payload.contaniernodes});case"FETCH_EDITOR_CONTENT":return Object(d.a)({},e,{editorcontent:t.payload.editorcontent});default:return e}}}),p=Object(c.a)(s.a),g=Object(c.d)(u,p),h=n(29),f=n(30),v=n(32),E=n(33),N=n(56),b=n(85),A=n(107),O=n(4),_=n(454),C=n(39),y=n(462),j=n(455),S=n(456),I=n(457),T=function(e,t){return e({type:"START_LOADER"})},x=function(e){return e({type:"STOP_LOADER"})},R=n(108),w=n(208),k=n.n(w),D=n(210),B=n.n(D),L=n(19),M=[{label:"H1",style:"header-one",icon:"header",description:"Heading 1"},{label:"H2",style:"header-two",icon:"header",description:"Heading 2"},{label:"H4",style:"header-four",icon:"header",description:"Heading 4"}].concat(R.BLOCK_BUTTONS),H={block:["unordered-list-item","header-one","header-two","header-three","header-four"],inline:["hyperlink"]},J={block:[],inline:["BOLD","ITALIC","UNDERLINE","hyperlink","HIGHLIGHT"]},G=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={editorState:Object(R.createEditorState)(Object(L.convertToRaw)(B()(a.props.contentvalue)))},a.onChange=function(e){var t=k()(e.getCurrentContent());a.setState({editorState:e}),a.props.updateEditorContent({content:t,isSectionHeading:a.props.isSectionHeading,contentIndex:a.props.contentIndex})},a.refsEditor=r.a.createRef(),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.refsEditor.current.focus()}},{key:"render",value:function(){var e=this.state.editorState;return r.a.createElement("div",null,r.a.createElement(R.Editor,{ref:this.refsEditor,editorState:e,onChange:this.onChange,editable:"false",blockButtons:M,toolbarConfig:this.props.isSectionHeading?H:J}))}}]),n}(a.Component),F={updateEditorContent:function(e){return function(t){T(t);var n=[];n=JSON.parse(localStorage.getItem("editordata"))||[];var a=e.isSectionHeading?"topic_name":"topic_content";return n[e.contentIndex][a]!=e.content?(n[e.contentIndex][a]=e.content,localStorage.setItem("editordata",JSON.stringify(n)),x(t),t({type:"FETCH_EDITOR_CONTENT",payload:{editorcontent:n}})):void x(t)}}},Q=Object(N.e)(Object(l.b)(function(e){return{lrnrpanel:e.lrnrReducer}},F)(G)),Y=n(463),P=n(84),U=n.n(P),V=n(212),K=n.n(V),W=n(445),q=n(450),z=n(449),Z=n(458),X=n(464),$=n(451),ee=n(215),te=n.n(ee),ne={CONTANIER_NODE:"1",LEAF_NODE:"2"},ae={1:"Contanier Node",2:"Leaf Node"},re=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).closeModal=function(){a.props.handleModalToggle(!1)},a.validateAddButton=function(){return!((a.state.active==ne.CONTANIER_NODE||a.state.active==ne.LEAF_NODE)&&""!=a.state.nodeval&&null!=a.state.nodeval)},a.handleRadioChange=function(e){a.setState({nodeval:"",active:e.target.value})},a.handleNodeTextChange=function(e){a.setState({nodeval:e.target.value})},a.addNode=function(){var e={is_parent:a.props.nodedata?a.props.nodedata.is_parent:null,parent_id:a.props.nodedata&&a.props.nodedata.parent_id?a.props.nodedata.parent_id:null,nodeval:a.state.nodeval,is_leaf:a.state.active==ne.LEAF_NODE};a.props.addNodeValue(e).then(function(e){a.props.handleModalToggle(!1)})},a.state={active:ne.CONTANIER_NODE,nodeval:""},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal-container"},r.a.createElement(W.a,{maxWidth:"sm",open:this.props.open,onClose:this.closeModal,scroll:"body"},r.a.createElement(z.a,{className:"modal-add-item-title"},r.a.createElement("span",{className:"modal-add-item-txt"},"Add Item"),r.a.createElement(te.a,{className:"modal-close-icon",style:{marginRight:30},onClick:this.closeModal})),r.a.createElement(q.a,{style:{padding:"0px 40px 40px 40px"},className:"modal-dialog-content"},r.a.createElement(X.a,{"aria-label":"position",name:"position",value:this.state.active,onChange:this.handleRadioChange},r.a.createElement("div",null,r.a.createElement($.a,{className:"form-control modal-radio-control",style:{padding:0,marginTop:32},value:"1",control:r.a.createElement(Z.a,null),label:"Add Container Node"}),1==this.state.active?r.a.createElement("div",{className:"row no-margin no-padding"},r.a.createElement("div",{className:"col-sm-1 no-padding"}),r.a.createElement("div",{className:"col-sm-11 no-padding"},r.a.createElement("input",{type:"text",className:"modal-input-field",placeholder:"Add Container node value",value:this.state.nodeval,onChange:this.handleNodeTextChange}))):null,r.a.createElement($.a,{className:"form-control modal-radio-control",style:{padding:0},value:"2",control:r.a.createElement(Z.a,null),label:"Add Leaf Node"}),2==this.state.active?r.a.createElement("div",{className:"row no-margin no-padding"},r.a.createElement("div",{className:"col-sm-1 no-padding"}),r.a.createElement("div",{className:"col-sm-11 no-padding"},r.a.createElement("input",{type:"text",className:"modal-input-field",placeholder:"Add Leaf node value",value:this.state.nodeval,onChange:this.handleNodeTextChange}))):null)),r.a.createElement("button",{className:"btn btn-primary add-item-btn",style:{marginTop:35},disabled:this.validateAddButton(),onClick:this.addNode},"Add ",ae[this.state.active]))))}}]),n}(a.Component),oe={addNodeValue:function(e){return function(t){return new Promise(function(n,a){T(t);var r=[];if(r=JSON.parse(localStorage.getItem("nodesArr"))||[],e.is_parent)var o={_id:r.length+1,parent_id:null,nodename:e.nodeval,is_leaf:e.is_leaf,is_open:!0};else{var i=e.parent_id;o={_id:r.length+1,parent_id:i,nodename:e.nodeval,is_leaf:e.is_leaf,is_open:!0}}r.push(o),localStorage.setItem("nodesArr",JSON.stringify(r)),r=r.filter(function(e){return!0===e.is_open}),x(t),t({type:"ADD_CONTANIER_NODES",payload:{contaniernodes:r}}),n(!0)})}}},ie=Object(l.b)(function(e){return{lrnrpanel:e.lrnrReducer}},oe)(re),le=n(127),ce=n.n(le),se=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:["sidebar-nodes",null==this.props.parent_id?" ":"padding-left"].join(" "),key:this.props.node._id},r.a.createElement("div",null,r.a.createElement("div",{className:["container-nodes-head"]},this.props.node.is_leaf?r.a.createElement("div",{className:"text-ellipsis"},this.props.node.nodename):r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{onClick:function(){return e.props.fetchItem(e.props.node)},className:"container-nodes-dropdown-arrow",src:ce.a}),r.a.createElement("div",{className:"text-ellipsis"},this.props.node.nodename),r.a.createElement(Y.a,{title:"Add Item"},r.a.createElement("img",{onClick:function(){return e.props.addItem(!1,e.props.node._id)},style:{height:16,marginLeft:"auto"},className:" siderbar-nodes-icon-style",src:U.a})))),this.props.list?this.props.list.map(function(t,a){var o=e.props.node._id;return t.parent_id!=o?null:r.a.createElement(n,{key:t._id,parent_id:t.parent_id,node:t,list:e.props.list,fetchItem:e.props.fetchItem,addItem:e.props.addItem})}):null))}}]),n}(a.Component),de=Object(N.e)(Object(l.b)(function(e){return{lrnrpanel:e.lrnrReducer}},{})(se)),me=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleModalToggle=function(e){return a.setState({open_add_item_modal:e})},a.addItem=function(e,t){console.log(t);var n={is_parent:e,parent_id:t};a.setState({open_add_item_modal:!0,nodedata:n})},a.fetchItem=function(e){var t={parent_id:e._id,open_state:!0};a.props.getChildNodes(t)},a.state={open_add_item_modal:!1},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){console.log("sss"),this.props.getContanierNodes()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sidebar-nodes"},this.state.open_add_item_modal?r.a.createElement(ie,{open:this.state.open_add_item_modal,handleModalToggle:this.handleModalToggle,nodedata:this.state.nodedata}):null,r.a.createElement("div",{className:"sidebar-nodes-icon-align"},r.a.createElement(Y.a,{title:"Add Item"},r.a.createElement("img",{onClick:function(){return e.addItem(!0,null)},className:"siderbar-nodes-icon-style",src:U.a})),r.a.createElement("img",{className:"siderbar-nodes-icon-style",onClick:this.props.handleDrawerClose,src:K.a})),r.a.createElement("div",null,this.props.lrnrpanel.contaniernodes&&0!=this.props.lrnrpanel.contaniernodes.length?this.props.lrnrpanel.contaniernodes.map(function(t,n){return null!=t.parent_id?null:r.a.createElement(de,{key:t._id,parent_id:t.parent_id,node:t,list:e.props.lrnrpanel.contaniernodes,fetchItem:e.fetchItem,addItem:e.addItem})}):null))}}]),n}(a.Component),ue={getContanierNodes:function(){return function(e){T(e);var t=[];t=JSON.parse(localStorage.getItem("nodesArr"))||[];for(var n=0;n<t.length;n++)null!=t[n].parent_id&&(t[n].is_open=!1);var a=t.filter(function(e){return!0===e.is_open&&null==e.parent_id});return localStorage.setItem("nodesArr",JSON.stringify(t)),x(e),e({type:"ADD_CONTANIER_NODES",payload:{contaniernodes:a}})}},getChildNodes:function(e){return function(t){T(t);var n=[];n=JSON.parse(localStorage.getItem("nodesArr"))||[];for(var a=0;a<n.length;a++)n[a].parent_id==e.parent_id&&(n[a].is_open=e.open_state);return localStorage.setItem("nodesArr",JSON.stringify(n)),n=n.filter(function(e){return!0===e.is_open}),x(t),t({type:"ADD_CONTANIER_NODES",payload:{contaniernodes:n}})}}},pe=Object(N.e)(Object(l.b)(function(e){return{lrnrpanel:e.lrnrReducer}},ue)(me)),ge=n(461),he=n(460),fe=n(453),ve=n(217),Ee=n.n(ve),Ne=n(218),be=n.n(Ne),Ae=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleClose=function(){a.setState({openMenuBar:null})},a.state={openMenuBar:null},a}return Object(f.a)(n,[{key:"toggleMenubar",value:function(e){this.setState({openMenuBar:e.currentTarget})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"center-all float-right"},r.a.createElement("div",null,r.a.createElement("img",{className:"invite-person-icon-style",src:Ee.a}),r.a.createElement("span",{className:"invite-txt-style"},"INVITE TEAM MEMBER")),r.a.createElement("div",null,r.a.createElement("div",{className:"org-dashheader-logo-style"},r.a.createElement("img",{className:"profile-pic-style",onClick:function(t){return e.toggleMenubar(t)},src:be.a})),r.a.createElement(he.a,{id:"dashboard-menu",anchorEl:this.state.openMenuBar,anchorOrigin:{vertical:"bottom",horizontal:"right"},getContentAnchorEl:null,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(this.state.openMenuBar),onClose:this.handleClose,className:"lrnr-menubar"},r.a.createElement(ge.a,{className:"lrnr-menuitem"},"Profile"),r.a.createElement(ge.a,{className:"lrnr-menuitem"},"Company Profile"),r.a.createElement(fe.a,null),r.a.createElement(ge.a,{className:"lrnr-menuitem"},"Logout"))))}}]),n}(a.Component),Oe=n(106),_e=n.n(Oe);function Ce(){var e=r.a.useState(1),t=Object(A.a)(e,2),n=t[0],a=t[1],o=function(e){a(e)};return r.a.createElement("div",{className:"nav-header-style"},r.a.createElement("div",null,r.a.createElement("img",{src:_e.a,"aria-label":"open drawer"})),r.a.createElement("div",{className:"dis-flex "},r.a.createElement("div",{className:["item-text-style",1==n?"active-menu":""].join(" "),onClick:function(){return o(1)}},"ALL"),r.a.createElement("div",{className:["item-text-style",2==n?"active-menu":""].join(" "),onClick:function(){return o(2)}},"Board"),r.a.createElement("div",{className:["item-text-style",3==n?"active-menu":""].join(" "),onClick:function(){return o(3)}},"Graph"),r.a.createElement("div",{className:["item-text-style",4==n?"active-menu":""].join(" "),onClick:function(){return o(4)}},"Recent")))}var ye=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.getEditorContent()}},{key:"render",value:function(){return r.a.createElement("div",{className:"editor-content"},r.a.createElement("div",{className:"editor-content-heading"},"WYSIWYG Editor"),this.props.lrnrpanel&&this.props.lrnrpanel.editorcontent&&0!=this.props.lrnrpanel.editorcontent.length?this.props.lrnrpanel.editorcontent.map(function(e,t){return r.a.createElement("div",{className:"editor-content-container",key:t},r.a.createElement("div",{className:"font-20"},r.a.createElement(Q,{contentIndex:t,isSectionHeading:!0,contentvalue:e.topic_name})),r.a.createElement("div",{className:"font-16"},r.a.createElement(Q,{contentIndex:t,isSectionHeading:!1,contentvalue:e.topic_content})))}):null)}}]),n}(a.Component),je={getEditorContent:function(){return function(e){T(e);var t=[];return 0==(t=JSON.parse(localStorage.getItem("editordata"))||[]).length&&(t=[{topic_name:"Topic 1",topic_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.NaNNaN"},{topic_name:"Topic 2",topic_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.NaNNaN"}],localStorage.setItem("editordata",JSON.stringify(t))),x(e),e({type:"FETCH_EDITOR_CONTENT",payload:{editorcontent:t}})}}},Se=Object(N.e)(Object(l.b)(function(e){return{lrnrpanel:e.lrnrReducer}},je)(ye)),Ie=Object(_.a)(function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(340,"px)"),marginLeft:340,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{cursor:"pointer",marginRight:e.spacing(2)},hide:{display:"none"},drawerHeader:Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),rightBody:Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-340},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}});function Te(){var e=Ie(),t=(Object(C.a)(),r.a.useState(!1)),n=Object(A.a)(t,2),a=n[0],o=n[1];return r.a.createElement("div",{className:"navbar-container"},r.a.createElement(j.a,null),r.a.createElement(S.a,{position:"fixed",className:Object(O.a)(e.appBar,Object(b.a)({},e.appBarShift,a))},r.a.createElement(I.a,null,r.a.createElement("div",{className:"row no-padding no-margin width-100 center-all"},r.a.createElement("div",{className:"col-sm-2 col-2 no-padding no-margin"},r.a.createElement("img",{src:_e.a,"aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(O.a)(e.menuButton,a&&e.hide)})),r.a.createElement("div",{className:"col-sm-10 col-10 no-padding no-margin"},r.a.createElement(Ae,null))))),r.a.createElement(y.a,{className:"drawer",variant:"persistent",anchor:"left",open:a,classes:{paper:"drawerPaper"}},r.a.createElement(Ce,null),r.a.createElement("div",{className:"sidebar-border"},r.a.createElement(pe,{handleDrawerClose:function(){o(!1)}}))),r.a.createElement("main",{className:Object(O.a)(e.content,Object(b.a)({},e.contentShift,a))},r.a.createElement("div",{className:e.rightBody}),r.a.createElement(Se,null)))}function xe(e){return!e||!0!==e.loading&&"true"!==e.loading?null:r.a.createElement("div",null,r.a.createElement("div",{className:"visible-loader"}))}var Re=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-body"},r.a.createElement(xe,{loading:this.props.loading}),r.a.createElement(Te,null))}}]),n}(a.Component),we=Object(N.e)(Object(l.b)(function(e){return{loading:e.lrnrReducer.loading}},{})(Re)),ke=n(61);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(405);i.a.render(r.a.createElement(l.a,{store:g},r.a.createElement(ke.a,null,r.a.createElement(N.a,{exact:!0,path:"/",component:we}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},84:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMklEQVRIiWNgGGngPxQTDZho5JBRC0YtGEoWMCKxScpAxJpNcx+QCkaLilELRi0YkQAArMYFIENGFBoAAAAASUVORK5CYII="}},[[231,1,2]]]);
//# sourceMappingURL=main.374067f0.chunk.js.map