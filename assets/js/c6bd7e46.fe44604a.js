"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[6840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={id:"quickstart",title:"Quickstart",slug:"/",tags:["Getting started"]},o="WhatsApp Business Platform Node.js SDK Quickstart",i={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Learn how to quickly set up and use the Cloud API, hosted by Meta, Node.js SDK to send a message. In this quickstart, you'll only be sending messages via the Cloud API. Receiving messages involves setting up webhooks. For a more comprehensive baseline example to start from, you can use the WhatsApp Node.js Project Template instead of this quickstart.",source:"@site/docs/gettingStarted.md",sourceDirName:".",slug:"/",permalink:"/WhatsApp-Nodejs-SDK/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gettingStarted.md",tags:[{label:"Getting started",permalink:"/WhatsApp-Nodejs-SDK/tags/getting-started"}],version:"current",frontMatter:{id:"quickstart",title:"Quickstart",slug:"/",tags:["Getting started"]},sidebar:"mainSidebar",next:{title:"Receiving Messages",permalink:"/WhatsApp-Nodejs-SDK/receivingMessages"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create",id:"create",level:2},{value:"Configure",id:"configure",level:2},{value:"Code",id:"code",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Run",id:"run",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whatsapp-business-platform-nodejs-sdk-quickstart"},"WhatsApp Business Platform Node.js SDK Quickstart"),(0,r.kt)("p",null,"Learn how to quickly set up and use the Cloud API, hosted by Meta, Node.js SDK to send a message. In this quickstart, you'll only be sending messages via the Cloud API. Receiving messages involves setting up webhooks. For a more comprehensive baseline example to start from, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WhatsApp/WhatsApp-Nodejs-Project-Template"},"WhatsApp Node.js Project Template")," instead of this quickstart."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or later."),(0,r.kt)("li",{parentName:"ol"},"Complete the steps in the ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#set-up-developer-assets"},"official docs")," for getting started with the Cloud API. Stop once you've ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#sent-test-message"},"sent a test message"),"."),(0,r.kt)("li",{parentName:"ol"},"Respond to that message with anything. This puts the conversation into a ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/whatsapp/conversation-types"},"user-initiated conversations")," session, which allows other messages to be received via API calls for 24-hours.")),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"Open a new terminal window. Create a new directory for your project and then go to that directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir wa_quickstart\ncd ./wa_quickstart\n")),(0,r.kt)("p",null,"Use the npm command to create a simple project definition file (package.json)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm init --yes\n")),(0,r.kt)("p",null,"Install the WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install whatsapp\n")),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("em",{parentName:"p"},".env")," file in the root directory, add the values for the following variables, and save after you're done."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"WA_PHONE_NUMBER_ID")," - Your phone number Id, located in the App Dashboard in the ",(0,r.kt)("em",{parentName:"li"},"WhatsApp")," dropdown menu > ",(0,r.kt)("em",{parentName:"li"},"Getting started")," > ",(0,r.kt)("em",{parentName:"li"},"Phone number ID"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"CLOUD_API_ACCESS_TOKEN")," - You can use the readily provided temporary access token or ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#system-user-access-tokens"},"system user access token")," for this exercise. This is also located in the App Dashboard in the ",(0,r.kt)("em",{parentName:"li"},"WhatsApp")," dropdown menu > ",(0,r.kt)("em",{parentName:"li"},"Getting started")," > ",(0,r.kt)("em",{parentName:"li"},"Temporary access token"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"CLOUD_API_VERSION")," - Set this to the ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/guides/versioning#latest"},"latest version")," of the graph API.")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},".env")," file should look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Your WhatsApp phone number Id (sender).\nWA_PHONE_NUMBER_ID=\n\n# System user access token. Recommended: Do not use a temporary access token.\nCLOUD_API_ACCESS_TOKEN=\n\n# Cloud API version number.\nCLOUD_API_VERSION=v16.0\n")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"In your project directory, create a file named ",(0,r.kt)("em",{parentName:"p"},"start.js")," with the following content with the sender number and recipient number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import WhatsApp from \'whatsapp\';\n\n// Your test sender phone number\nconst wa = new WhatsApp( <<SENDER_NUMBER>> );\n\n// Enter the recipient phone number\nconst recipient_number = <<RECIPIENT_NUMBER>>;\n\nasync function send_message()\n{\n    try{\n        const sent_text_message = wa.messages.text( { "body" : "Hello world" }, recipient_number );\n\n        await sent_text_message.then( ( res ) =>\n        {\n            console.log( res.rawResponse() );\n        } );\n    }\n    catch( e )\n    {\n        console.log( JSON.stringify( e ) );\n    }\n}\n\nsend_message();\n')),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("p",null,"What the code above is doing is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating a new instance of the WhatsApp class. This automatically reads from the ",(0,r.kt)("em",{parentName:"li"},".env")," file that was edited."),(0,r.kt)("li",{parentName:"ol"},'Sending a text type message with the text "Hello world" to the WhatsApp recipient.'),(0,r.kt)("li",{parentName:"ol"},"After the message is sent, it logs the raw response body from the response object to stdout."),(0,r.kt)("li",{parentName:"ol"},'If there was an error in the request, it will log those to stdout. Look for the "details" value for a human-readable explanation for the error if the Cloud API sent a response.')),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"Run your application by putting in the following command into terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm start.js\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Verify that the test recipient has received the message and the Cloud API shows a ",(0,r.kt)("em",{parentName:"p"},"statusCode")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," response. If you received a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," from the Cloud API, but did not receive the message in WhatsApp, your conversation may have gone beyond the 24-hour user-initiated conversation session. Simply resend a message from the recipient WhatsApp app and then restart your quickstart app to send a new message to the recipient.")))}d.isMDXComponent=!0}}]);