"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[5230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={id:"start",title:".start"},o="WhatsApp.webhooks.start()",i={unversionedId:"api-reference/webhooks/start",id:"api-reference/webhooks/start",title:".start",description:"This starts the web server listening the defined port for webhook events. It handles both GET and POST requests made to the webhook endpoint path.",source:"@site/docs/api-reference/webhooks/start.md",sourceDirName:"api-reference/webhooks",slug:"/api-reference/webhooks/start",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/webhooks/start.md",tags:[],version:"current",frontMatter:{id:"start",title:".start"},sidebar:"mainSidebar",previous:{title:".isStarted",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/isStarted"},next:{title:".stop",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/stop"}},l={},p=[{value:"Example:",id:"example",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappwebhooksstart"},"WhatsApp.webhooks.start()"),(0,a.kt)("p",null,"This starts the web server listening the defined port for webhook events. It handles both ",(0,a.kt)("em",{parentName:"p"},"GET")," and ",(0,a.kt)("em",{parentName:"p"},"POST")," requests made to the webhook endpoint path."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"GET")," request is verified using the webhook verification token, a successful match sends back the ",(0,a.kt)("inlineCode",{parentName:"p"},"hub.challenge")," to the Cloud API request in order to validate a webhook subscription. A successful verification string match sends back the challenge code with a ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," response. A verification string match failure results in a ",(0,a.kt)("inlineCode",{parentName:"p"},"401")," status code response and your callback is called with an error message, a ",(0,a.kt)("inlineCode",{parentName:"p"},"401")," value for the status code, and the request headers."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"POST")," request are received and the payload is checked against for authenticity against the ",(0,a.kt)("inlineCode",{parentName:"p"},"x-hub-signature-256")," using the shared app secret. A calculated ",(0,a.kt)("inlineCode",{parentName:"p"},"x-hub-signature-256")," string match failure results in a ",(0,a.kt)("inlineCode",{parentName:"p"},"401"),"status code response being sent and your callback is called with an error message, a ",(0,a.kt)("inlineCode",{parentName:"p"},"401")," value for the status code, the request headers, and the request body."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"Start the web server and print out valid message webhook event bodies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import WhatsApp from 'whatsapp';\n\nconst senderNumber = 12345678901234567890;\nconst wa = new WhatsApp( senderNumber );\n\nasync function webhookCallbackFunction( statusCode, reqHeaders, body, resp, err )\n{\n    console.log(\n        `Incoming webhook response status code: ${ statusCode }\\n\\nHeaders:\n        ${ JSON.stringify( reqHeaders ) }`\n    );\n\n    if( resp )\n    {\n        if( body?.entry[ 0 ].changes[ 0 ].field == \"messages\" && body.entry[ 0 ].changes[ 0 ].value.messages )\n            console.log( `Messages Object: ${ JSON.stringify( body.entry[ 0 ].changes[ 0 ].value.messages ) }` );\n\n        // Send a 200 so the webhooks service knows you received the message\n        resp.writeHead( statusCode );\n        resp.end();\n    }\n\n    if( err )\n    {\n        console.log( `ERROR: ${ err }` );\n        resp.end();\n    }\n}\n\nwa.webhooks.start( webhookCallbackFunction );\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"webhookCallbackFunction")," : ",(0,a.kt)("a",{parentName:"li",href:"../types/webhookCallbackFunction"},"webhookCallbackFunction")," \u2014 The callback that gets called during POST requests made to the webhook listener endpoint.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"boolean \u2014 the HTTP server running state."))}d.isMDXComponent=!0}}]);