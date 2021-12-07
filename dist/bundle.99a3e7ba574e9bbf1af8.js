!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return C})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return T})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return d})),n.d(t,"q",(function(){return v})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return x}));var r=n(9),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,h=(3&o)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;l||(d=64,s||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var s=((7&i)<<18|(63&(o=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{o=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==s||null==a||null==l)throw Error();var u=o<<2|s>>4;if(r.push(u),64!==a){var c=s<<4&240|a>>2;if(r.push(c),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){var t=i(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r.a)({iss:"https://securetoken.google.com/"+n,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function f(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function d(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return c().indexOf("Electron/")>=0}function g(){var e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return c().indexOf("MSAppHost/")>=0}function v(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var y=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,b.prototype.create),o}return Object(r.b)(t,e),t}(Error),b=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?w(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",l=new y(i,a,r);return l},e}();function w(e,t){return e.replace(k,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=e[s],l=t[s];if(E(a)&&E(l)){if(!_(a,l))return!1}else if(a!==l)return!1}for(var u=0,c=r;u<c.length;u++){s=c[u];if(!n.includes(s))return!1}return!0}function E(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r];n(o[0],o[1])}return t.length?"&"+t.join("&"):""}function x(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function I(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],c=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=c^l&(u^c),s=1518500249):(o=l^u^c,s=1859775393):r<60?(o=l&u|c&(l|u),s=2400959708):(o=l^u^c,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=c,c=u,u=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();function C(e,t){var n=new O(e,t);return n.subscribe.bind(n)}var O=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=R),void 0===r.error&&(r.error=R),void 0===r.complete&&(r.complete=R);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){return e&&e._delegate?e._delegate:e}}).call(this,n(12))},function(e,t,n){"use strict";e.exports=n(17)},function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return b}));var r=n(5),i=n(3),o=n(0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const a=new i.b("@firebase/app"),l={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},u=new Map,c=new Map;function h(e,t){try{e.container.addComponent(t)}catch(n){a.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function f(e){const t=e.name;if(c.has(t))return a.debug(`There were multiple attempts to register component ${t}.`),!1;c.set(t,e);for(const t of u.values())h(t,e);return!0}function d(e,t){return e.container.getProvider(t)}function p(e,t,n="[DEFAULT]"){d(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},m=new o.b("app","Firebase",g);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="9.0.0";function y(e="[DEFAULT]"){const t=u.get(e);if(!t)throw m.create("no-app",{appName:e});return t}function b(e,t,n){var i;let o=null!==(i=l[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),u=t.match(/\s|\//);if(s||u){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&u&&e.push("and"),u&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void a.warn(e.join(" "))}f(new r.a(o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w;f(new r.a("platform-logger",e=>new s(e),"PRIVATE")),b("@firebase/app","0.7.0",w),b("fire-js","")},function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return d}));var o,s=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},l=o.INFO,u=((i={})[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),c=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),s=u[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,r(["["+o+"]  "+e.name+":"],n))}},h=function(){function e(e){this.name=e,this._logLevel=l,this._logHandler=c,this._userLogHandler=null,s.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?a[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],e)),this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],e)),this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],e)),this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],e)),this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],e)),this._logHandler.apply(this,r([this,o.ERROR],e))},e}();function f(e){s.forEach((function(t){t.setLogLevel(e)}))}function d(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=a[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var a=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:a,args:i,type:t.name})}},r=0,i=s;r<i.length;r++){n(i[r])}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ur})),n.d(t,"b",(function(){return hr})),n.d(t,"c",(function(){return cr})),n.d(t,"d",(function(){return dr})),n.d(t,"e",(function(){return fr})),n.d(t,"f",(function(){return pr})),n.d(t,"g",(function(){return gr})),n.d(t,"h",(function(){return ar})),n.d(t,"i",(function(){return lr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},a=a||{},l=s||self;function u(){}function c(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,f)&&e[f]||(e[f]=++d)}(this);delete w[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},T=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function _(e){return Array.prototype.concat.apply([],arguments)}function E(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e){return/^[\s\xa0]*$/.test(e)}var x,I=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function C(e,t){return-1!=e.indexOf(t)}function O(e,t){return e<t?-1:e>t?1:0}e:{var R=l.navigator;if(R){var P=R.userAgent;if(P){x=P;break e}}x=""}function A(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function N(e){var t={};for(var n in e)t[n]=e[n];return t}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var o=0;o<L.length;o++)n=L[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function D(e){return D[" "](e),e}D[" "]=u;var j,U,F=C(x,"Opera"),z=C(x,"Trident")||C(x,"MSIE"),V=C(x,"Edge"),H=V||z,B=C(x,"Gecko")&&!(C(x.toLowerCase(),"webkit")&&!C(x,"Edge"))&&!(C(x,"Trident")||C(x,"MSIE"))&&!C(x,"Edge"),W=C(x.toLowerCase(),"webkit")&&!C(x,"Edge");function $(){var e=l.document;return e?e.documentMode:void 0}e:{var q="",K=(U=x,B?/rv:([^\);]+)(\)|;)/.exec(U):V?/Edge\/([\d\.]+)/.exec(U):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(U):W?/WebKit\/(\S+)/.exec(U):F?/(?:Version)[ \/]?(\S+)/.exec(U):void 0);if(K&&(q=K?K[1]:""),z){var G=$();if(null!=G&&G>parseFloat(q)){j=String(G);break e}}j=q}var X,Q={};function Y(){return function(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=I(String(j)).split("."),n=I("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var o=t[i]||"",s=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;e=O(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==o[2].length,0==s[2].length)||O(o[2],s[2]),o=o[3],s=s[3]}while(0==e)}return 0<=e}))}if(l.document&&z){var J=$();X=J||(parseInt(j,10)||void 0)}else X=void 0;var Z=X,ee=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{l.addEventListener("test",u,t),l.removeEventListener("test",u,t)}catch(e){}return e}();function te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ne(e,t){if(te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{D(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:re[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ne.Z.h.call(this)}}te.prototype.h=function(){this.defaultPrevented=!0},y(ne,te);var re={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++oe,this.ca=this.fa=!1}function ae(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=k(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ae(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=ce(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):((t=new se(t,this.src,o,!!r,i)).fa=n,e.push(t)),t};var he="closure_lm_"+(1e6*Math.random()|0),fe={};function de(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)e(t,n[s],r,i,o);return null}return r=we(r),t&&t[ie]?t.O(n,r,h(i)?!!i.capture:!!i,o):pe(t,n,r,!0,i,o)}(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)de(e,t[o],n,r,i);return null}return n=we(n),e&&e[ie]?e.N(t,n,h(r)?!!r.capture:!!r,i):pe(e,t,n,!1,r,i)}function pe(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=h(i)?!!i.capture:!!i,a=ye(e);if(a||(e[he]=a=new le(e)),(n=a.add(t,n,r,s,o)).proxy)return n;if(r=function(){var e=ve;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ee||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ie])ue(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(ue(n,e),0==n.h&&(n.src=null,t[he]=null)):ae(e)}}}function me(e){return e in fe?fe[e]:fe[e]="on"+e}function ve(e,t){if(e.ca)e=!0;else{t=new ne(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ge(e),e=n.call(r,t)}return e}function ye(e){return(e=e[he])instanceof le?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"==typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function ke(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Te(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new te(t,e);else if(t instanceof te)t.target=t.target||e;else{var i=t;M(t=new te(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=_e(s,r,!0,t)&&i}if(i=_e(s=t.g=e,r,!0,t)&&i,i=_e(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=_e(s=t.g=n[o],r,!1,t)&&i}function _e(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,l=s.ia||s.src;s.fa&&ue(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}y(ke,b),ke.prototype[ie]=!0,ke.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)e(t,n[s],r,i,o);else i=h(i)?!!i.capture:!!i,r=we(r),t&&t[ie]?(t=t.i,(n=String(n).toString())in t.g&&(-1<(r=ce(s=t.g[n],r,i,o))&&(ae(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete t.g[n],t.h--)))):t&&(t=ye(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ce(n,r,i,o)),(r=-1<t?n[t]:null)&&ge(r))}(this,e,t,n,r)},ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ae(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ee=l.JSON.stringify;function Se(){var e=Ne,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var xe,Ie=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=Ce.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),Ce=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new Oe}),(function(e){return e.reset()})),Oe=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function Re(e){l.setTimeout((function(){throw e}),0)}function Pe(e,t){xe||function(){var e=l.Promise.resolve(void 0);xe=function(){e.then(Le)}}(),Ae||(xe(),Ae=!0),Ne.add(e,t)}var Ae=!1,Ne=new Ie;function Le(){for(var e;e=Se();){try{e.h.call(e.g)}catch(e){Re(e)}var t=Ce;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ae=!1}function Me(e,t){ke.call(this),this.h=e||1,this.g=t||l,this.j=m(this.kb,this),this.l=Date.now()}function De(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function je(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:l.setTimeout(e,t||0)}function Ue(e){e.g=je((function(){e.g=null,e.i&&(e.i=!1,Ue(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}y(Me,ke),(o=Me.prototype).da=!1,o.S=null,o.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Te(this,"tick"),this.da&&(De(this),this.start()))}},o.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){Me.Z.M.call(this),De(this),delete this.g};var Fe=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:Ue(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(b);function ze(e){b.call(this),this.h=e,this.g={}}y(ze,b);var Ve=[];function He(e,t,n,r){Array.isArray(n)||(n&&(Ve[0]=n.toString()),n=Ve);for(var i=0;i<n.length;i++){var o=de(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Be(e){A(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function We(){this.g=!0}function $e(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ee(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}ze.prototype.M=function(){ze.Z.M.call(this),Be(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},We.prototype.Aa=function(){this.g=!1},We.prototype.info=function(){};var qe={},Ke=null;function Ge(){return Ke=Ke||new ke}function Xe(e){te.call(this,qe.Ma,e)}function Qe(e){var t=Ge();Te(t,new Xe(t,e))}function Ye(e,t){te.call(this,qe.STAT_EVENT,e),this.stat=t}function Je(e){var t=Ge();Te(t,new Ye(t,e))}function Ze(e,t){te.call(this,qe.Na,e),this.size=t}function et(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){e()}),t)}qe.Ma="serverreachability",y(Xe,te),qe.STAT_EVENT="statevent",y(Ye,te),qe.Na="timingevent",y(Ze,te);var tt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},nt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function rt(){}function it(e){return e.h||(e.h=e.i())}function ot(){}rt.prototype.h=null;var st,at={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function lt(){te.call(this,"d")}function ut(){te.call(this,"c")}function ct(){}function ht(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ze(this),this.P=dt,e=H?125:void 0,this.W=new Me(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ft}function ft(){this.i=null,this.g="",this.h=!1}y(lt,te),y(ut,te),y(ct,rt),ct.prototype.g=function(){return new XMLHttpRequest},ct.prototype.i=function(){return{}},st=new ct;var dt=45e3,pt={},gt={};function mt(e,t,n){e.K=1,e.v=Ft(Nt(t)),e.s=n,e.U=!0,vt(e,null)}function vt(e,t){e.F=Date.now(),kt(e),e.A=Nt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Jt(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ft,e.g=er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Fe(m(e.Ia,e,e.g),e.O)),He(e.V,e.g,"readystatechange",e.gb),t=e.H?N(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Qe(1),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");s=2<=h.length&&"type"==h[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function yt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function bt(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=wt(e,n))==gt){4==t&&(e.o=4,Je(14),i=!1),$e(e.j,e.m,null,"[Incomplete Response]");break}if(r==pt){e.o=4,Je(15),$e(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}$e(e.j,e.m,r,null),xt(e,r)}yt(e)&&r!=gt&&r!=pt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Je(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),qn(t),t.L=!0,Je(11))):($e(e.j,e.m,n,"[Invalid Chunked Response]"),St(e),Et(e))}function wt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?gt:(n=Number(t.substring(n,r)),isNaN(n)?pt:(r+=1)+n>t.length?gt:(t=t.substr(r,n),e.C=r+n,t))}function kt(e){e.Y=Date.now()+e.P,Tt(e,e.P)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=et(m(e.eb,e),t)}function _t(e){e.B&&(l.clearTimeout(e.B),e.B=null)}function Et(e){0==e.l.G||e.I||Xn(e.l,e)}function St(e){_t(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,De(e.W),Be(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function xt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||sn(n.i,e)))if(n.I=e.N,!e.J&&sn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(o){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Gn(n),jn(n)}$n(n),Je(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=et(m(n.ab,n),6e3));if(1>=on(n.i)&&n.ka){try{n.ka()}catch(o){}n.ka=void 0}}else Yn(n,11)}else if((e.J||n.g==e)&&Gn(n),!S(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var o=i[t];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];var s=o[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var a=o[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=e.g;if(u){var c=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(c){var h=r.i;!h.g&&(C(c,"spdy")||C(c,"quic")||C(c,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(an(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Ut(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var d=e;if((r=n).oa=Zn(r,r.H?r.la:null,r.W),d.J){ln(r.i,d);var p=d,g=r.K;g&&p.setTimeout(g),p.B&&(_t(p),kt(p)),r.g=d}else Wn(r);0<n.l.length&&zn(n)}else"stop"!=o[0]&&"close"!=o[0]||Yn(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?Yn(n,7):Dn(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}Qe(4)}catch(o){}}function It(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"==typeof e)T(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(c(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function Ct(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ct)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ot(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Rt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Rt(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Rt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(o=ht.prototype).setTimeout=function(e){this.P=e},o.gb=function(e){e=e.target;var t=this.L;t&&3==Pn(e)?t.l():this.Ia(e)},o.Ia=function(e){try{if(e==this.g)e:{var t=Pn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||H||this.g&&(this.h.h||this.g.ga()||An(this.g)))){this.I||4!=t||7==n||Qe(8==n||0>=r?3:2),_t(this);var i=this.g.ba();this.N=i;t:if(yt(this)){var o=An(this.g);e="";var s=o.length,a=4==Pn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){St(this),Et(this);var u="";break t}this.h.i=new l.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,e+=this.h.i.decode(o[n],{stream:a&&n==s-1});o.splice(0,s),this.h.g+=e,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var c,h=this.g;if((c=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var f=c;break t}}f=null}if(!(i=f)){this.i=!1,this.o=3,Je(12),St(this),Et(this);break e}$e(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xt(this,i)}this.U?(bt(this,t,u),H&&this.i&&3==t&&(He(this.V,this.W,"tick",this.fb),this.W.start())):($e(this.j,this.m,u,null),xt(this,u)),4==t&&St(this),this.i&&!this.I&&(4==t?Xn(this.l,this):(this.i=!1,kt(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),St(this),Et(this)}}}catch(t){}},o.fb=function(){if(this.g){var e=Pn(this.g),t=this.g.ga();this.C<t.length&&(_t(this),bt(this,e,t),this.i&&4!=e&&kt(this))}},o.cancel=function(){this.I=!0,St(this)},o.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Qe(3),Je(17)),St(this),this.o=2,Et(this)):Tt(this,this.Y-e)},(o=Ct.prototype).R=function(){Ot(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},o.T=function(){return Ot(this),this.g.concat()},o.get=function(e,t){return Rt(this.h,e)?this.h[e]:t},o.set=function(e,t){Rt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},o.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};var Pt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function At(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof At){this.g=void 0!==t?t:e.g,Lt(this,e.j),this.s=e.s,Mt(this,e.i),Dt(this,e.m),this.l=e.l,t=e.h;var n=new Gt;n.i=t.i,t.g&&(n.g=new Ct(t.g),n.h=t.h),jt(this,n),this.o=e.o}else e&&(n=String(e).match(Pt))?(this.g=!!t,Lt(this,n[1]||"",!0),this.s=zt(n[2]||""),Mt(this,n[3]||"",!0),Dt(this,n[4]),this.l=zt(n[5]||"",!0),jt(this,n[6]||"",!0),this.o=zt(n[7]||"")):(this.g=!!t,this.h=new Gt(null,this.g))}function Nt(e){return new At(e)}function Lt(e,t,n){e.j=n?zt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mt(e,t,n){e.i=n?zt(t,!0):t}function Dt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function jt(e,t,n){t instanceof Gt?(e.h=t,function(e,t){t&&!e.j&&(Xt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Qt(this,t),Jt(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Vt(t,qt)),e.h=new Gt(t,e.g))}function Ut(e,t,n){e.h.set(t,n)}function Ft(e){return Ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Vt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}At.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Vt(t,Bt,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Vt(t,Bt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Vt(n,"/"==n.charAt(0)?$t:Wt,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Vt(n,Kt)),e.join("")};var Bt=/[#\/\?@]/g,Wt=/[#\?:]/g,$t=/[#\?]/g,qt=/[#\?@]/g,Kt=/#/g;function Gt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Xt(e){e.g||(e.g=new Ct,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Qt(e,t){Xt(e),t=Zt(e,t),Rt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Rt((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ot(e)))}function Yt(e,t){return Xt(e),t=Zt(e,t),Rt(e.g.h,t)}function Jt(e,t,n){Qt(e,t),0<n.length&&(e.i=null,e.g.set(Zt(e,t),E(n)),e.h+=n.length)}function Zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(o=Gt.prototype).add=function(e,t){Xt(this),this.i=null,e=Zt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},o.forEach=function(e,t){Xt(this),this.g.forEach((function(n,r){T(n,(function(n){e.call(t,n,r,this)}),this)}),this)},o.T=function(){Xt(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n},o.R=function(e){Xt(this);var t=[];if("string"==typeof e)Yt(this,e)&&(t=_(t,this.g.get(Zt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=_(t,e[n])}return t},o.set=function(e,t){return Xt(this),this.i=null,Yt(this,e=Zt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},o.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};var en=function(e,t){this.h=e,this.g=t};function tn(e){this.l=e||nn,l.PerformanceNavigationTiming?e=0<(e=l.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function on(e){return e.h?1:e.g?e.g.size:0}function sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function an(e,t){e.g?e.g.add(t):e.h=t}function ln(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function un(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var o=i(e.g.values()),s=o.next();!s.done;s=o.next()){var a=s.value;r=r.concat(a.D)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return r}return E(e.i)}function cn(){}function hn(){this.g=new cn}function fn(e,t,n){var r=n||"";try{It(e,(function(e,n){var i=e;h(e)&&(i=Ee(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function dn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function pn(e){this.l=e.$b||null,this.j=e.ib||!1}function gn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tn.prototype.cancel=function(){var e,t;if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=i(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},cn.prototype.stringify=function(e){return l.JSON.stringify(e,void 0)},cn.prototype.parse=function(e){return l.JSON.parse(e,void 0)},y(pn,rt),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(e){return function(){return e}}({}),y(gn,ke);var mn=0;function vn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function yn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,bn(e)}function bn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(o=gn.prototype).open=function(e,t){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,bn(this)},o.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||l).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,yn(this)),this.readyState=mn},o.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==l.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},o.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?yn(this):bn(this),3==this.readyState&&vn(this)}},o.Ua=function(e){this.g&&(this.response=this.responseText=e,yn(this))},o.Ta=function(e){this.g&&(this.response=e,yn(this))},o.ha=function(){this.g&&yn(this)},o.setRequestHeader=function(e,t){this.v.append(e,t)},o.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var wn=l.JSON.parse;function kn(e){ke.call(this),this.headers=new Ct,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tn,this.K=this.L=!1}y(kn,ke);var Tn="",_n=/^https?$/i,En=["POST","PUT"];function Sn(e){return"content-type"==e.toLowerCase()}function xn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,In(e),On(e)}function In(e){e.D||(e.D=!0,Te(e,"complete"),Te(e,"error"))}function Cn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=Pn(e)||2!=e.ba()))if(e.v&&4==Pn(e))je(e.Fa,0,e);else if(Te(e,"readystatechange"),4==Pn(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var o=String(e.H).match(Pt)[1]||null;if(!o&&l.self&&l.self.location){var s=l.self.location.protocol;o=s.substr(0,s.length-1)}i=!_n.test(o?o.toLowerCase():"")}t=i}if(t)Te(e,"complete"),Te(e,"success");else{e.m=6;try{var u=2<Pn(e)?e.g.statusText:""}catch(e){u=""}e.j=u+" ["+e.ba()+"]",In(e)}}finally{On(e)}}}function On(e,t){if(e.g){Rn(e);var n=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||Te(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Rn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(l.clearTimeout(e.A),e.A=null)}function Pn(e){return e.g?e.g.readyState:0}function An(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Tn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Nn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return A(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ut(e,t,n))}function Ln(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Mn(e){this.za=0,this.l=[],this.h=new We,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ln("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ln("baseRetryDelayMs",5e3,e),this.$a=Ln("retryDelaySeedMs",1e4,e),this.Ya=Ln("forwardChannelMaxRetries",2,e),this.ra=Ln("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new tn(e&&e.concurrentRequestLimit),this.Ca=new hn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Dn(e){if(Un(e),3==e.G){var t=e.V++,n=Nt(e.F);Ut(n,"SID",e.J),Ut(n,"RID",t),Ut(n,"TYPE","terminate"),Hn(e,n),(t=new ht(e,e.h,t,void 0)).K=2,t.v=Ft(Nt(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(t.v.toString(),"")),!n&&l.Image&&((new Image).src=t.v,n=!0),n||(t.g=er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),kt(t)}Jn(e)}function jn(e){e.g&&(qn(e),e.g.cancel(),e.g=null)}function Un(e){jn(e),e.u&&(l.clearTimeout(e.u),e.u=null),Gn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&l.clearTimeout(e.m),e.m=null)}function Fn(e,t){e.l.push(new en(e.Za++,t)),3==e.G&&zn(e)}function zn(e){rn(e.i)||e.m||(e.m=!0,Pe(e.Ha,e),e.C=0)}function Vn(e,t){var n;n=t?t.m:e.V++;var r=Nt(e.F);Ut(r,"SID",e.J),Ut(r,"RID",n),Ut(r,"AID",e.U),Hn(e,r),e.o&&e.s&&Nn(r,e.o,e.s),n=new ht(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Bn(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),an(e.i,n),mt(n,r,t)}function Hn(e,t){e.j&&It({},(function(e,n){Ut(t,n,e)}))}function Bn(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:for(var i=e.l,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,l=0;l<n;l++){var u=i[l].h,c=i[l].g;if(0>(u-=o))o=Math.max(0,i[l].h-100),a=!1;else try{fn(c,s,"req"+u+"_")}catch(e){r&&r(c)}}if(a){r=s.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function Wn(e){e.g||e.u||(e.Y=1,Pe(e.Ga,e),e.A=0)}function $n(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=et(m(e.Ga,e),Qn(e,e.A)),e.A++,!0)}function qn(e){null!=e.B&&(l.clearTimeout(e.B),e.B=null)}function Kn(e){e.g=new ht(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Nt(e.oa);Ut(t,"RID","rpc"),Ut(t,"SID",e.J),Ut(t,"CI",e.N?"0":"1"),Ut(t,"AID",e.U),Hn(e,t),Ut(t,"TYPE","xmlhttp"),e.o&&e.s&&Nn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ft(Nt(t)),n.s=null,n.U=!0,vt(n,e)}function Gn(e){null!=e.v&&(l.clearTimeout(e.v),e.v=null)}function Xn(e,t){var n=null;if(e.g==t){Gn(e),qn(e),e.g=null;var r=2}else{if(!sn(e.i,t))return;n=t.D,ln(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Te(r=Ge(),new Ze(r,n,t,i)),zn(e)}else Wn(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(on(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=et(m(e.Ha,e,t),Qn(e,e.C)),e.C++,!0))}(e,t)||2==r&&$n(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Yn(e,5);break;case 4:Yn(e,10);break;case 3:Yn(e,6);break;default:Yn(e,2)}}function Qn(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Yn(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new At("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Lt(n,"https"),Ft(n)),function(e,t){var n=new We;if(l.Image){var r=new Image;r.onload=v(dn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(dn,n,r,"TestLoadImage: error",!1,t),r.onabort=v(dn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(dn,n,r,"TestLoadImage: timeout",!1,t),l.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Je(2);e.G=0,e.j&&e.j.va(t),Jn(e),Un(e)}function Jn(e){e.G=0,e.I=-1,e.j&&(0==un(e.i).length&&0==e.l.length||(e.i.i.length=0,E(e.l),e.l.length=0),e.j.ua())}function Zn(e,t,n){var r=function(e){return e instanceof At?Nt(e):new At(e,void 0)}(n);if(""!=r.i)t&&Mt(r,t+"."+r.i),Dt(r,r.m);else{var i=l.location;r=function(e,t,n,r){var i=new At(null,void 0);return e&&Lt(i,e),t&&Mt(i,t),n&&Dt(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&A(e.aa,(function(e,t){Ut(r,t,e)})),t=e.D,n=e.sa,t&&n&&Ut(r,t,n),Ut(r,"VER",e.ma),Hn(e,r),r}function er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new kn(new pn({ib:!0})):new kn(e.qa)).L=e.H,t}function tr(){}function nr(){if(z&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(e,t){ke.call(this),this.g=new Mn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new sr(this)}function ir(e){lt.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function or(){ut.call(this),this.status=1}function sr(e){this.g=e}(o=kn.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():st.g(),this.C=this.u?it(this.u):it(st),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void xn(this,e)}e=n||"";var i=new Ct(this.headers);r&&It(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=Sn,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=l.FormData&&e instanceof l.FormData,!(0<=k(En,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(e){return z&&Y()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=je(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){xn(this,e)}},o.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))},o.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Te(this,"complete"),Te(this,"abort"),On(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),kn.Z.M.call(this)},o.Fa=function(){this.s||(this.F||this.v||this.l?Cn(this):this.cb())},o.cb=function(){Cn(this)},o.ba=function(){try{return 2<Pn(this)?this.g.status:-1}catch(e){return-1}},o.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},o.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),wn(t)}},o.Da=function(){return this.m},o.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Mn.prototype).ma=8,o.G=1,o.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},o.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new ht(this,this.h,e,void 0),n=this.s;if(this.P&&(n?M(n=N(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var o=this.l[i];if(void 0===(o="__data__"in o.g&&"string"==typeof(o=o.g.__data__)?o.length:void 0))break;if(4096<(r+=o)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Bn(this,t,r),Ut(i=Nt(this.F),"RID",e),Ut(i,"CVER",22),this.D&&Ut(i,"X-HTTP-Session-Id",this.D),Hn(this,i),this.o&&n&&Nn(i,this.o,n),an(this.i,t),this.Ra&&Ut(i,"TYPE","init"),this.ja?(Ut(i,"$req",r),Ut(i,"SID","null"),t.$=!0,mt(t,i,null)):mt(t,i,r),this.G=2}}else 3==this.G&&(e?Vn(this,e):0==this.l.length||rn(this.i)||Vn(this))},o.Ga=function(){if(this.u=null,Kn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=et(m(this.bb,this),e)}},o.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Je(10),jn(this),Kn(this))},o.ab=function(){null!=this.v&&(this.v=null,jn(this),$n(this),Je(19))},o.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Je(2)):(this.h.info("Failed to ping google.com"),Je(1))},(o=tr.prototype).xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Oa=function(){},nr.prototype.g=function(e,t){return new rr(e,t)},y(rr,ke),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Pe(m(e.hb,e,t))),Je(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Zn(e,null,e.W),zn(e)},rr.prototype.close=function(){Dn(this.g)},rr.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Fn(this.g,t)}else this.v?((t={}).__data__=Ee(e),Fn(this.g,t)):Fn(this.g,e)},rr.prototype.M=function(){this.g.j=null,delete this.j,Dn(this.g),delete this.g,rr.Z.M.call(this)},y(ir,lt),y(or,ut),y(sr,tr),sr.prototype.xa=function(){Te(this.g,"a")},sr.prototype.wa=function(e){Te(this.g,new ir(e))},sr.prototype.va=function(e){Te(this.g,new or(e))},sr.prototype.ua=function(){Te(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,nt.COMPLETE="complete",ot.EventType=at,at.OPEN="a",at.CLOSE="b",at.ERROR="c",at.MESSAGE="d",ke.prototype.listen=ke.prototype.N,kn.prototype.listenOnce=kn.prototype.O,kn.prototype.getLastError=kn.prototype.La,kn.prototype.getLastErrorCode=kn.prototype.Da,kn.prototype.getStatus=kn.prototype.ba,kn.prototype.getResponseJson=kn.prototype.Qa,kn.prototype.getResponseText=kn.prototype.ga,kn.prototype.send=kn.prototype.ea;var ar=function(){return new nr},lr=function(){return Ge()},ur=tt,cr=nt,hr=qe,fr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dr=pn,pr=ot,gr=kn}).call(this,n(12))},function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));function r(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}Object.create;function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function a(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var l=n(0),u=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),c=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new l.a;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=s(i.value,2),l=a[0],u=a[1],c=this.normalizeInstanceIdentifier(l);try{var h=this.getOrInitializeService({instanceIdentifier:c});u.resolve(h)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(a(a([],s(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),s(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var l=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var u=o(this.instancesDeferred.entries()),c=u.next();!c.done;c=u.next()){var h=s(c.value,2),f=h[0],d=h[1];a===this.normalizeInstanceIdentifier(f)&&d.resolve(l)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return l},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=o(i),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var h=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new c(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},,function(e,t,n){e.exports=n(25)()},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.create;Object.create},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=s(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))i.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var h=0;h<a.length;h++)o.call(n,a[h])&&(l[a[h]]=n[a[h]])}}return l}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var h=a(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==h?(s[h].references++,s[h].updater(f)):s.push({identifier:c,updater:m(f,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,h=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function m(e,t){var n,r,i;if(t.singleton){var o=g++;n=p||(p=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=l(e,t),u=0;u<n.length;u++){var c=a(n[u]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=o}}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var t=n(2),r=n(5),i=n(3);n(0),n(4);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}o.UNAUTHENTICATED=new o(null),o.GOOGLE_CREDENTIALS=new o("google-credentials-uid"),o.FIRST_PARTY=new o("first-party-uid"),o.MOCK_USER=new o("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let s="9.0.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a=new i.b("@firebase/firestore");function l(e,...t){if(a.logLevel<=i.a.DEBUG){const n=t.map(c);a.debug(`Firestore (${s}): ${e}`,...n)}}function u(e,...t){if(a.logLevel<=i.a.ERROR){const n=t.map(c);a.error(`Firestore (${s}): ${e}`,...n)}}function c(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e="Unexpected state"){const t=`FIRESTORE (${s}) INTERNAL ASSERTION FAILED: `+e;throw u(t),new Error(t)}function f(e,t){e||h()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class v{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(o.UNAUTHENTICATED))}shutdown(){}}class y{constructor(e){this.t=e,this.currentUser=o.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new g;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new g,e.enqueueRetryable(()=>r(this.currentUser))};const o=t=>{e.enqueueRetryable(async()=>{l("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)})};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(l("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new g)}},0),e.enqueueRetryable(async()=>{0===this.i&&(await i.promise,await r(this.currentUser))})}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(l("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(f("string"==typeof t.accessToken),new m(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return f(null===e||"string"==typeof e),new o(e)}}class b{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=o.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class w{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new b(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(o.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */k.T=-1;class _{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=T(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function E(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e,t,n){void 0===t?t=0:t>e.length&&h(),void 0===n?n=e.length-t:n>e.length-t&&h(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===S.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof S?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends S{construct(e,t,n){return new x(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new p(d.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new x(t)}static emptyPath(){return new x([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new I(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new I(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return E(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}I.EMPTY_BYTE_STRING=new I("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.path=e}static fromPath(e){return new C(x.fromString(e))}static fromName(e){return new C(x.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===x.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new x(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O,R;(R=O||(O={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e,t){this.comparator=e,this.root=t||N.EMPTY}insert(e,t){return new P(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,N.BLACK,null,null))}remove(e){return new P(this.comparator,this.root.remove(e,this.comparator).copy(null,null,N.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new A(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new A(this.root,e,this.comparator,!1)}getReverseIterator(){return new A(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new A(this.root,e,this.comparator,!0)}}class A{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class N{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:N.RED,this.left=null!=r?r:N.EMPTY,this.right=null!=i?i:N.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new N(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return N.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return N.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,N.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,N.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw h();if(this.right.isRed())throw h();const e=this.left.check();if(e!==this.right.check())throw h();return e+(this.isRed()?0:1)}}N.EMPTY=null,N.RED=!0,N.BLACK=!1,N.EMPTY=new class{constructor(){this.size=0}get key(){throw h()}get value(){throw h()}get color(){throw h()}get left(){throw h()}get right(){throw h()}copy(e,t,n,r,i){return this}insert(e,t,n){return new N(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(e){this.comparator=e,this.data=new P(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new M(this.data.getIterator())}getIteratorFrom(e){return new M(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof L))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new L(this.comparator);return t.data=e,t}}class M{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new P(C.comparator);new P(C.comparator);new P(C.comparator);new L(C.comparator);new L(E);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=U(t)),t=j(e.get(n),t);return U(t)}function j(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function U(e){return e+""}class F{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}F.store="owner",F.key="owner";class z{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}z.store="mutationQueues",z.keyPath="userId";class V{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}V.store="mutations",V.keyPath="batchId",V.userMutationsIndex="userMutationsIndex",V.userMutationsKeyPath=["userId","batchId"];class H{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,D(t)]}static key(e,t,n){return[e,D(t),n]}}H.store="documentMutations",H.PLACEHOLDER=new H;class B{constructor(e,t,n,r,i,o){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}B.store="remoteDocuments",B.readTimeIndex="readTimeIndex",B.readTimeIndexPath="readTime",B.collectionReadTimeIndex="collectionReadTimeIndex",B.collectionReadTimeIndexPath=["parentPath","readTime"];class W{constructor(e){this.byteSize=e}}W.store="remoteDocumentGlobal",W.key="remoteDocumentGlobalKey";class ${constructor(e,t,n,r,i,o,s){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}$.store="targets",$.keyPath="targetId",$.queryTargetsIndexName="queryTargetsIndex",$.queryTargetsKeyPath=["canonicalId","targetId"];class q{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}q.store="targetDocuments",q.keyPath=["targetId","path"],q.documentTargetsIndex="documentTargetsIndex",q.documentTargetsKeyPath=["path","targetId"];class K{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}K.key="targetGlobalKey",K.store="targetGlobal";class G{constructor(e,t){this.collectionId=e,this.parent=t}}G.store="collectionParents",G.keyPath=["collectionId","parent"];class X{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}X.store="clientMetadata",X.keyPath="clientId";class Q{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}Q.store="bundles",Q.keyPath="bundleId";class Y{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}Y.store="namedQueries",Y.keyPath="name";z.store,V.store,H.store,B.store,$.store,F.store,K.store,q.store,X.store,W.store,G.store,Q.store,Y.store;function J(e){return"IndexedDbTransactionError"===e.name}class Z{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Z(e,Z.DEFAULT_COLLECTION_PERCENTILE,Z.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z.DEFAULT_COLLECTION_PERCENTILE=10,Z.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Z.DEFAULT=new Z(41943040,Z.DEFAULT_COLLECTION_PERCENTILE,Z.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Z.DISABLED=new Z(-1,0,0);function ee(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&l("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new g,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new ne(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new p(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function re(e,t){if(u("AsyncQueue",`${t}: ${e}`),J(e))return new p(d.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=o.UNAUTHENTICATED,this.clientId=_.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{l("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new g;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=re(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}class oe{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class se{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof se&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new p(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new p(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new p(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new le({}),this._settingsFrozen=!1,e instanceof se?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new p(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new se(e.options.projectId)}(e))}get app(){if(!this._app)throw new p(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new p(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new le(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new v;switch(e.type){case"gapi":e.client;return f(!("object"!=typeof t.e||null===t.e||!t.e.auth||!t.e.auth.getAuthHeaderValueForFirstParty)),new w(t.e,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new p(d.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ae.get(e);t&&(l("ComponentProvider","Removing Datastore"),ae.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new te(this,"async_queue_retry"),this.Ea=()=>{const e=ee();e&&l("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=ee();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=ee();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const t=new g;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!J(e))throw e;l("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const t=this.fa.then(()=>(this.ga=!0,e().catch(e=>{throw this.ma=e,this.ga=!1,u("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.ga=!1,e))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=ne.createAndSchedule(this,e,t,n,e=>this.Ra(e));return this._a.push(r),r}Ta(){this.ma&&h()}verifyOperationInProgress(){}async Pa(){let e;do{e=this.fa,await e}while(e!==this.fa)}ba(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.Pa().then(()=>{this._a.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pa()})}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}class he extends ue{constructor(e,t){super(e,t),this.type="firestore",this._queue=new ce,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||fe(this),this._firestoreClient.terminate()}}function fe(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new oe(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ie(e._credentials,e._queue,r)}new RegExp("[~\\*/\\[\\]]");var de;de=t.a,s=de,Object(t.c)(new r.a("firestore",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new he(n,new y(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r},"PUBLIC")),Object(t.f)("@firebase/firestore","3.0.1",void 0)}).call(this,n(29))},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(18)},function(e,t,n){"use strict";var r=n(27),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return r.isMemo(e)?s:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=s;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=d(n);i&&i!==p&&e(t,i,r)}var s=c(n);h&&(s=s.concat(h(n)));for(var a=l(t),g=l(n),m=0;m<s.length;++m){var v=s[m];if(!(o[v]||r&&r[v]||g&&g[v]||a&&a[v])){var y=f(n,v);try{u(t,v,y)}catch(e){}}}}return t}},,function(e,t,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(10),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,h=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,p=i?Symbol.for("react.memo"):60115,g=i?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function k(){}function T(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=w.prototype;var _=T.prototype=new k;_.constructor=T,r(_,w.prototype),_.isPureReactComponent=!0;var E={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g,R=[];function P(e,t,n,r){if(R.length){var i=R.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,i){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var l=!1;if(null===t)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case s:l=!0}}if(l)return r(i,t,""===n?"."+L(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=n+L(a=t[u],u);l+=e(a,c,r,i)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=m&&t[m]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),u=0;!(a=t.next()).done;)l+=e(a=a.value,c=n+L(a,u++),r,i);else if("object"===a)throw r=""+t,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?j(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n)),r.push(e))}function j(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace(O,"$&/")+"/"),N(e,D,t=P(t,o,r,i)),A(t)}var U={current:null};function F(){var e=U.current;if(null===e)throw Error(v(321));return e}var z={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return j(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,M,t=P(null,null,t,n)),A(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return j(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(v(143));return e}},t.Component=w,t.Fragment=a,t.Profiler=u,t.PureComponent=T,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var i=r({},e.props),s=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=E.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)S.call(t,c)&&!x.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=I,t.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1),i=n(10),o=n(19);function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(s(227));function a(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var l=!1,u=null,c=!1,h=null,f={onError:function(e){l=!0,u=e}};function d(e,t,n,r,i,o,s,c,h){l=!1,u=null,a.apply(f,arguments)}var p=null,g=null,m=null;function v(e,t,n){var r=e.type||"unknown-event";e.currentTarget=m(n),function(e,t,n,r,i,o,a,f,p){if(d.apply(this,arguments),l){if(!l)throw Error(s(198));var g=u;l=!1,u=null,c||(c=!0,h=g)}}(r,t,void 0,e),e.currentTarget=null}var y=null,b={};function w(){if(y)for(var e in b){var t=b[e],n=y.indexOf(e);if(!(-1<n))throw Error(s(96,e));if(!T[n]){if(!t.extractEvents)throw Error(s(97,e));for(var r in T[n]=t,n=t.eventTypes){var i=void 0,o=n[r],a=t,l=r;if(_.hasOwnProperty(l))throw Error(s(99,l));_[l]=o;var u=o.phasedRegistrationNames;if(u){for(i in u)u.hasOwnProperty(i)&&k(u[i],a,l);i=!0}else o.registrationName?(k(o.registrationName,a,l),i=!0):i=!1;if(!i)throw Error(s(98,r,e))}}}}function k(e,t,n){if(E[e])throw Error(s(100,e));E[e]=t,S[e]=t.eventTypes[n].dependencies}var T=[],_={},E={},S={};function x(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!b.hasOwnProperty(t)||b[t]!==r){if(b[t])throw Error(s(102,t));b[t]=r,n=!0}}n&&w()}var I=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),C=null,O=null,R=null;function P(e){if(e=g(e)){if("function"!=typeof C)throw Error(s(280));var t=e.stateNode;t&&(t=p(t),C(e.stateNode,e.type,t))}}function A(e){O?R?R.push(e):R=[e]:O=e}function N(){if(O){var e=O,t=R;if(R=O=null,P(e),t)for(e=0;e<t.length;e++)P(t[e])}}function L(e,t){return e(t)}function M(e,t,n,r,i){return e(t,n,r,i)}function D(){}var j=L,U=!1,F=!1;function z(){null===O&&null===R||(D(),N())}function V(e,t,n){if(F)return e(t,n);F=!0;try{return j(e,t,n)}finally{F=!1,z()}}var H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B=Object.prototype.hasOwnProperty,W={},$={};function q(e,t,n,r,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){K[e]=new q(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];K[t]=new q(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){K[e]=new q(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){K[e]=new q(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){K[e]=new q(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){K[e]=new q(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){K[e]=new q(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){K[e]=new q(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){K[e]=new q(e,5,!1,e.toLowerCase(),null,!1)}));var G=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(G,X);K[t]=new q(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(G,X);K[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(G,X);K[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){K[e]=new q(e,1,!1,e.toLowerCase(),null,!1)})),K.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){K[e]=new q(e,1,!1,e.toLowerCase(),null,!0)}));var Q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e,t,n,r){var i=K.hasOwnProperty(t)?K[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!B.call($,e)||!B.call(W,e)&&(H.test(e)?$[e]=!0:(W[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}Q.hasOwnProperty("ReactCurrentDispatcher")||(Q.ReactCurrentDispatcher={current:null}),Q.hasOwnProperty("ReactCurrentBatchConfig")||(Q.ReactCurrentBatchConfig={suspense:null});var J=/^(.*)[\\\/]/,Z="function"==typeof Symbol&&Symbol.for,ee=Z?Symbol.for("react.element"):60103,te=Z?Symbol.for("react.portal"):60106,ne=Z?Symbol.for("react.fragment"):60107,re=Z?Symbol.for("react.strict_mode"):60108,ie=Z?Symbol.for("react.profiler"):60114,oe=Z?Symbol.for("react.provider"):60109,se=Z?Symbol.for("react.context"):60110,ae=Z?Symbol.for("react.concurrent_mode"):60111,le=Z?Symbol.for("react.forward_ref"):60112,ue=Z?Symbol.for("react.suspense"):60113,ce=Z?Symbol.for("react.suspense_list"):60120,he=Z?Symbol.for("react.memo"):60115,fe=Z?Symbol.for("react.lazy"):60116,de=Z?Symbol.for("react.block"):60121,pe="function"==typeof Symbol&&Symbol.iterator;function ge(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=pe&&e[pe]||e["@@iterator"])?e:null}function me(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ne:return"Fragment";case te:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case ue:return"Suspense";case ce:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case se:return"Context.Consumer";case oe:return"Context.Provider";case le:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case he:return me(e.type);case de:return me(e.render);case fe:if(e=1===e._status?e._result:null)return me(e)}return null}function ve(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,o=me(e.type);n=null,r&&(n=me(r.type)),r=o,o="",i?o=" (at "+i.fileName.replace(J,"")+":"+i.lineNumber+")":n&&(o=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}function ye(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function we(e){e._valueTracker||(e._valueTracker=function(e){var t=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ke(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Te(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function _e(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ye(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ee(e,t){null!=(t=t.checked)&&Y(e,"checked",t,!1)}function Se(e,t){Ee(e,t);var n=ye(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Ie(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ie(e,t.type,ye(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function xe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Ie(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Ce(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ye(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(s(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(s(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(s(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ye(n)}}function Ae(e,t){var n=ye(t.value),r=ye(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ne(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Le="http://www.w3.org/1999/xhtml",Me="http://www.w3.org/2000/svg";function De(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?De(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ue,Fe=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==Me||"innerHTML"in e)e.innerHTML=t;else{for((Ue=Ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function ze(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function Ve(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var He={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Be={},We={};function $e(e){if(Be[e])return Be[e];if(!He[e])return e;var t,n=He[e];for(t in n)if(n.hasOwnProperty(t)&&t in We)return Be[e]=n[t];return e}I&&(We=document.createElement("div").style,"AnimationEvent"in window||(delete He.animationend.animation,delete He.animationiteration.animation,delete He.animationstart.animation),"TransitionEvent"in window||delete He.transitionend.transition);var qe=$e("animationend"),Ke=$e("animationiteration"),Ge=$e("animationstart"),Xe=$e("transitionend"),Qe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new("function"==typeof WeakMap?WeakMap:Map);function Je(e){var t=Ye.get(e);return void 0===t&&(t=new Map,Ye.set(e,t)),t}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function et(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function tt(e){if(Ze(e)!==e)throw Error(s(188))}function nt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tt(i),e;if(o===r)return tt(i),t;o=o.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(3!==n.tag)throw Error(s(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function rt(e,t){if(null==t)throw Error(s(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function it(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var ot=null;function st(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)v(e,t[r],n[r]);else t&&v(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function at(e){if(null!==e&&(ot=rt(ot,e)),e=ot,ot=null,e){if(it(e,st),ot)throw Error(s(95));if(c)throw e=h,c=!1,h=null,e}}function lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ut(e){if(!I)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var ct=[];function ht(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ct.length&&ct.push(e)}function ft(e,t,n,r){if(ct.length){var i=ct.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function dt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=In(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=lt(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,s=e.eventSystemFlags;0===n&&(s|=64);for(var a=null,l=0;l<T.length;l++){var u=T[l];u&&(u=u.extractEvents(r,t,o,i,s))&&(a=rt(a,u))}at(a)}}function pt(e,t,n){if(!n.has(e)){switch(e){case"scroll":Gt(t,"scroll",!0);break;case"focus":case"blur":Gt(t,"focus",!0),Gt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":ut(e)&&Gt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Qe.indexOf(e)&&Kt(e,t)}n.set(e,null)}}var gt,mt,vt,yt=!1,bt=[],wt=null,kt=null,Tt=null,_t=new Map,Et=new Map,St=[],xt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),It="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Ct(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:i,container:r}}function Ot(e,t){switch(e){case"focus":case"blur":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":_t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Et.delete(t.pointerId)}}function Rt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=Ct(t,n,r,i,o),null!==t&&(null!==(t=Cn(t))&&mt(t)),e):(e.eventSystemFlags|=r,e)}function Pt(e){var t=In(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=et(n)))return e.blockedOn=t,void o.unstable_runWithPriority(e.priority,(function(){vt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=Cn(t);return null!==n&&mt(n),e.blockedOn=t,!1}return!0}function Nt(e,t,n){At(e)&&n.delete(t)}function Lt(){for(yt=!1;0<bt.length;){var e=bt[0];if(null!==e.blockedOn){null!==(e=Cn(e.blockedOn))&&gt(e);break}var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:bt.shift()}null!==wt&&At(wt)&&(wt=null),null!==kt&&At(kt)&&(kt=null),null!==Tt&&At(Tt)&&(Tt=null),_t.forEach(Nt),Et.forEach(Nt)}function Mt(e,t){e.blockedOn===t&&(e.blockedOn=null,yt||(yt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Lt)))}function Dt(e){function t(t){return Mt(t,e)}if(0<bt.length){Mt(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==wt&&Mt(wt,e),null!==kt&&Mt(kt,e),null!==Tt&&Mt(Tt,e),_t.forEach(t),Et.forEach(t),n=0;n<St.length;n++)(r=St[n]).blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&null===(n=St[0]).blockedOn;)Pt(n),null===n.blockedOn&&St.shift()}var jt={},Ut=new Map,Ft=new Map,zt=["abort","abort",qe,"animationEnd",Ke,"animationIteration",Ge,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Xe,"transitionEnd","waiting","waiting"];function Vt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],o="on"+(i[0].toUpperCase()+i.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:t},Ft.set(r,t),Ut.set(r,o),jt[i]=o}}Vt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Vt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Vt(zt,2);for(var Ht="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Bt=0;Bt<Ht.length;Bt++)Ft.set(Ht[Bt],0);var Wt=o.unstable_UserBlockingPriority,$t=o.unstable_runWithPriority,qt=!0;function Kt(e,t){Gt(t,e,!1)}function Gt(e,t,n){var r=Ft.get(t);switch(void 0===r?2:r){case 0:r=Xt.bind(null,t,1,e);break;case 1:r=Qt.bind(null,t,1,e);break;default:r=Yt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Xt(e,t,n,r){U||D();var i=Yt,o=U;U=!0;try{M(i,e,t,n,r)}finally{(U=o)||z()}}function Qt(e,t,n,r){$t(Wt,Yt.bind(null,e,t,n,r))}function Yt(e,t,n,r){if(qt)if(0<bt.length&&-1<xt.indexOf(e))e=Ct(null,e,t,n,r),bt.push(e);else{var i=Jt(e,t,n,r);if(null===i)Ot(e,r);else if(-1<xt.indexOf(e))e=Ct(i,e,t,n,r),bt.push(e);else if(!function(e,t,n,r,i){switch(t){case"focus":return wt=Rt(wt,e,t,n,r,i),!0;case"dragenter":return kt=Rt(kt,e,t,n,r,i),!0;case"mouseover":return Tt=Rt(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _t.set(o,Rt(_t.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Et.set(o,Rt(Et.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r)){Ot(e,r),e=ft(e,r,null,t);try{V(dt,e)}finally{ht(e)}}}}function Jt(e,t,n,r){if(null!==(n=In(n=lt(r)))){var i=Ze(n);if(null===i)n=null;else{var o=i.tag;if(13===o){if(null!==(n=et(i)))return n;n=null}else if(3===o){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=ft(e,r,n,t);try{V(dt,e)}finally{ht(e)}return null}var Zt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];function tn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function nn(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=tn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Zt).forEach((function(e){en.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]}))}));var rn=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function on(e,t){if(t){if(rn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(s(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(s(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(s(62,""))}}function sn(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var an=Le;function ln(e,t){var n=Je(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=S[t];for(var r=0;r<t.length;r++)pt(t[r],e,n)}function un(){}function cn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function hn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fn(e,t){var n,r=hn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hn(r)}}function dn(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=cn((e=t.contentWindow).document)}return t}function pn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var gn=null,mn=null;function vn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function yn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var bn="function"==typeof setTimeout?setTimeout:void 0,wn="function"==typeof clearTimeout?clearTimeout:void 0;function kn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Tn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),En="__reactInternalInstance$"+_n,Sn="__reactEventHandlers$"+_n,xn="__reactContainere$"+_n;function In(e){var t=e[En];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[En]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Tn(e);null!==e;){if(n=e[En])return n;e=Tn(e)}return t}n=(e=n).parentNode}return null}function Cn(e){return!(e=e[En]||e[xn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function On(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(s(33))}function Rn(e){return e[Sn]||null}function Pn(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function An(e,t){var n=e.stateNode;if(!n)return null;var r=p(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(s(231,t,typeof n));return n}function Nn(e,t,n){(t=An(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Ln(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Pn(t);for(t=n.length;0<t--;)Nn(n[t],"captured",e);for(t=0;t<n.length;t++)Nn(n[t],"bubbled",e)}}function Mn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=An(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Dn(e){e&&e.dispatchConfig.registrationName&&Mn(e._targetInst,null,e)}function jn(e){it(e,Ln)}var Un=null,Fn=null,zn=null;function Vn(){if(zn)return zn;var e,t,n=Fn,r=n.length,i="value"in Un?Un.value:Un.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return zn=i.slice(e,1<t?1-t:void 0)}function Hn(){return!0}function Bn(){return!1}function Wn(e,t,n,r){for(var i in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):"target"===i?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Hn:Bn,this.isPropagationStopped=Bn,this}function $n(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function qn(e){if(!(e instanceof this))throw Error(s(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Kn(e){e.eventPool=[],e.getPooled=$n,e.release=qn}i(Wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){this.isPersistent=Hn},isPersistent:Bn,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),Wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Wn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return i(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,Kn(n),n},Kn(Wn);var Gn=Wn.extend({data:null}),Xn=Wn.extend({data:null}),Qn=[9,13,27,32],Yn=I&&"CompositionEvent"in window,Jn=null;I&&"documentMode"in document&&(Jn=document.documentMode);var Zn=I&&"TextEvent"in window&&!Jn,er=I&&(!Yn||Jn&&8<Jn&&11>=Jn),tr=String.fromCharCode(32),nr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,t){switch(e){case"keyup":return-1!==Qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function or(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var sr=!1;var ar={eventTypes:nr,extractEvents:function(e,t,n,r){var i;if(Yn)e:{switch(e){case"compositionstart":var o=nr.compositionStart;break e;case"compositionend":o=nr.compositionEnd;break e;case"compositionupdate":o=nr.compositionUpdate;break e}o=void 0}else sr?ir(e,n)&&(o=nr.compositionEnd):"keydown"===e&&229===n.keyCode&&(o=nr.compositionStart);return o?(er&&"ko"!==n.locale&&(sr||o!==nr.compositionStart?o===nr.compositionEnd&&sr&&(i=Vn()):(Fn="value"in(Un=r)?Un.value:Un.textContent,sr=!0)),o=Gn.getPooled(o,t,n,r),i?o.data=i:null!==(i=or(n))&&(o.data=i),jn(o),i=o):i=null,(e=Zn?function(e,t){switch(e){case"compositionend":return or(t);case"keypress":return 32!==t.which?null:(rr=!0,tr);case"textInput":return(e=t.data)===tr&&rr?null:e;default:return null}}(e,n):function(e,t){if(sr)return"compositionend"===e||!Yn&&ir(e,t)?(e=Vn(),zn=Fn=Un=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Xn.getPooled(nr.beforeInput,t,n,r)).data=e,jn(t)):t=null,null===i?t:null===t?i:[i,t]}},lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!lr[e.type]:"textarea"===t}var cr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function hr(e,t,n){return(e=Wn.getPooled(cr.change,e,t,n)).type="change",A(n),jn(e),e}var fr=null,dr=null;function pr(e){at(e)}function gr(e){if(ke(On(e)))return e}function mr(e,t){if("change"===e)return t}var vr=!1;function yr(){fr&&(fr.detachEvent("onpropertychange",br),dr=fr=null)}function br(e){if("value"===e.propertyName&&gr(dr))if(e=hr(dr,e,lt(e)),U)at(e);else{U=!0;try{L(pr,e)}finally{U=!1,z()}}}function wr(e,t,n){"focus"===e?(yr(),dr=n,(fr=t).attachEvent("onpropertychange",br)):"blur"===e&&yr()}function kr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return gr(dr)}function Tr(e,t){if("click"===e)return gr(t)}function _r(e,t){if("input"===e||"change"===e)return gr(t)}I&&(vr=ut("input")&&(!document.documentMode||9<document.documentMode));var Er={eventTypes:cr,_isInputEventSupported:vr,extractEvents:function(e,t,n,r){var i=t?On(t):window,o=i.nodeName&&i.nodeName.toLowerCase();if("select"===o||"input"===o&&"file"===i.type)var s=mr;else if(ur(i))if(vr)s=_r;else{s=kr;var a=wr}else(o=i.nodeName)&&"input"===o.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(s=Tr);if(s&&(s=s(e,t)))return hr(s,n,r);a&&a(e,i,t),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Ie(i,"number",i.value)}},Sr=Wn.extend({view:null,detail:null}),xr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xr[e])&&!!t[e]}function Cr(){return Ir}var Or=0,Rr=0,Pr=!1,Ar=!1,Nr=Sr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Cr,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Or;return Or=e.screenX,Pr?"mousemove"===e.type?e.screenX-t:0:(Pr=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Rr;return Rr=e.screenY,Ar?"mousemove"===e.type?e.screenY-t:0:(Ar=!0,0)}}),Lr=Nr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Mr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Dr={eventTypes:Mr,extractEvents:function(e,t,n,r,i){var o="mouseover"===e||"pointerover"===e,s="mouseout"===e||"pointerout"===e;if(o&&0==(32&i)&&(n.relatedTarget||n.fromElement)||!s&&!o)return null;(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,s)?(s=t,null!==(t=(t=n.relatedTarget||n.toElement)?In(t):null)&&(t!==Ze(t)||5!==t.tag&&6!==t.tag)&&(t=null)):s=null;if(s===t)return null;if("mouseout"===e||"mouseover"===e)var a=Nr,l=Mr.mouseLeave,u=Mr.mouseEnter,c="mouse";else"pointerout"!==e&&"pointerover"!==e||(a=Lr,l=Mr.pointerLeave,u=Mr.pointerEnter,c="pointer");if(e=null==s?o:On(s),o=null==t?o:On(t),(l=a.getPooled(l,s,n,r)).type=c+"leave",l.target=e,l.relatedTarget=o,(n=a.getPooled(u,t,n,r)).type=c+"enter",n.target=o,n.relatedTarget=e,c=t,(r=s)&&c)e:{for(u=c,s=0,e=a=r;e;e=Pn(e))s++;for(e=0,t=u;t;t=Pn(t))e++;for(;0<s-e;)a=Pn(a),s--;for(;0<e-s;)u=Pn(u),e--;for(;s--;){if(a===u||a===u.alternate)break e;a=Pn(a),u=Pn(u)}a=null}else a=null;for(u=a,a=[];r&&r!==u&&(null===(s=r.alternate)||s!==u);)a.push(r),r=Pn(r);for(r=[];c&&c!==u&&(null===(s=c.alternate)||s!==u);)r.push(c),c=Pn(c);for(c=0;c<a.length;c++)Mn(a[c],"bubbled",l);for(c=r.length;0<c--;)Mn(r[c],"captured",n);return 0==(64&i)?[l]:[l,n]}};var jr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Ur=Object.prototype.hasOwnProperty;function Fr(e,t){if(jr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Ur.call(t,n[r])||!jr(e[n[r]],t[n[r]]))return!1;return!0}var zr=I&&"documentMode"in document&&11>=document.documentMode,Vr={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Hr=null,Br=null,Wr=null,$r=!1;function qr(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return $r||null==Hr||Hr!==cn(n)?null:("selectionStart"in(n=Hr)&&pn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Wr&&Fr(Wr,n)?null:(Wr=n,(e=Wn.getPooled(Vr.select,Br,e,t)).type="select",e.target=Hr,jn(e),e))}var Kr={eventTypes:Vr,extractEvents:function(e,t,n,r,i,o){if(!(o=!(i=o||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Je(i),o=S.onSelect;for(var s=0;s<o.length;s++)if(!i.has(o[s])){i=!1;break e}i=!0}o=!i}if(o)return null;switch(i=t?On(t):window,e){case"focus":(ur(i)||"true"===i.contentEditable)&&(Hr=i,Br=t,Wr=null);break;case"blur":Wr=Br=Hr=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":return $r=!1,qr(n,r);case"selectionchange":if(zr)break;case"keydown":case"keyup":return qr(n,r)}return null}},Gr=Wn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Xr=Wn.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qr=Sr.extend({relatedTarget:null});function Yr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Jr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=Sr.extend({key:function(e){if(e.key){var t=Jr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Yr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Zr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Cr,charCode:function(e){return"keypress"===e.type?Yr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Yr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ti=Nr.extend({dataTransfer:null}),ni=Sr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Cr}),ri=Wn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=Nr.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),oi={eventTypes:jt,extractEvents:function(e,t,n,r){var i=Ut.get(e);if(!i)return null;switch(e){case"keypress":if(0===Yr(n))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Qr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ti;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ni;break;case qe:case Ke:case Ge:e=Gr;break;case Xe:e=ri;break;case"scroll":e=Sr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Lr;break;default:e=Wn}return jn(t=e.getPooled(i,t,n,r)),t}};if(y)throw Error(s(101));y=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w(),p=Rn,g=Cn,m=On,x({SimpleEventPlugin:oi,EnterLeaveEventPlugin:Dr,ChangeEventPlugin:Er,SelectEventPlugin:Kr,BeforeInputEventPlugin:ar});var si=[],ai=-1;function li(e){0>ai||(e.current=si[ai],si[ai]=null,ai--)}function ui(e,t){ai++,si[ai]=e.current,e.current=t}var ci={},hi={current:ci},fi={current:!1},di=ci;function pi(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function gi(e){return null!=(e=e.childContextTypes)}function mi(){li(fi),li(hi)}function vi(e,t,n){if(hi.current!==ci)throw Error(s(168));ui(hi,t),ui(fi,n)}function yi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in e))throw Error(s(108,me(t)||"Unknown",o));return i({},n,{},r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,di=hi.current,ui(hi,e),ui(fi,fi.current),!0}function wi(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=yi(e,t,di),r.__reactInternalMemoizedMergedChildContext=e,li(fi),li(hi),ui(hi,e)):li(fi),ui(fi,n)}var ki=o.unstable_runWithPriority,Ti=o.unstable_scheduleCallback,_i=o.unstable_cancelCallback,Ei=o.unstable_requestPaint,Si=o.unstable_now,xi=o.unstable_getCurrentPriorityLevel,Ii=o.unstable_ImmediatePriority,Ci=o.unstable_UserBlockingPriority,Oi=o.unstable_NormalPriority,Ri=o.unstable_LowPriority,Pi=o.unstable_IdlePriority,Ai={},Ni=o.unstable_shouldYield,Li=void 0!==Ei?Ei:function(){},Mi=null,Di=null,ji=!1,Ui=Si(),Fi=1e4>Ui?Si:function(){return Si()-Ui};function zi(){switch(xi()){case Ii:return 99;case Ci:return 98;case Oi:return 97;case Ri:return 96;case Pi:return 95;default:throw Error(s(332))}}function Vi(e){switch(e){case 99:return Ii;case 98:return Ci;case 97:return Oi;case 96:return Ri;case 95:return Pi;default:throw Error(s(332))}}function Hi(e,t){return e=Vi(e),ki(e,t)}function Bi(e,t,n){return e=Vi(e),Ti(e,t,n)}function Wi(e){return null===Mi?(Mi=[e],Di=Ti(Ii,qi)):Mi.push(e),Ai}function $i(){if(null!==Di){var e=Di;Di=null,_i(e)}qi()}function qi(){if(!ji&&null!==Mi){ji=!0;var e=0;try{var t=Mi;Hi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Mi=null}catch(t){throw null!==Mi&&(Mi=Mi.slice(e+1)),Ti(Ii,$i),t}finally{ji=!1}}}function Ki(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function Gi(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Xi={current:null},Qi=null,Yi=null,Ji=null;function Zi(){Ji=Yi=Qi=null}function eo(e){var t=Xi.current;li(Xi),e.type._context._currentValue=t}function to(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function no(e,t){Qi=e,Ji=Yi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Rs=!0),e.firstContext=null)}function ro(e,t){if(Ji!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Ji=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Yi){if(null===Qi)throw Error(s(308));Yi=t,Qi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Yi=Yi.next=t;return e._currentValue}var io=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function ao(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function lo(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function uo(e,t){var n=e.alternate;null!==n&&so(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function co(e,t,n,r){var o=e.updateQueue;io=!1;var s=o.baseQueue,a=o.shared.pending;if(null!==a){if(null!==s){var l=s.next;s.next=a.next,a.next=l}s=a,o.shared.pending=null,null!==(l=e.alternate)&&(null!==(l=l.updateQueue)&&(l.baseQueue=a))}if(null!==s){l=s.next;var u=o.baseState,c=0,h=null,f=null,d=null;if(null!==l)for(var p=l;;){if((a=p.expirationTime)<r){var g={expirationTime:p.expirationTime,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null};null===d?(f=d=g,h=u):d=d.next=g,a>c&&(c=a)}else{null!==d&&(d=d.next={expirationTime:1073741823,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null}),ol(a,p.suspenseConfig);e:{var m=e,v=p;switch(a=t,g=n,v.tag){case 1:if("function"==typeof(m=v.payload)){u=m.call(g,u,a);break e}u=m;break e;case 3:m.effectTag=-4097&m.effectTag|64;case 0:if(null==(a="function"==typeof(m=v.payload)?m.call(g,u,a):m))break e;u=i({},u,a);break e;case 2:io=!0}}null!==p.callback&&(e.effectTag|=32,null===(a=o.effects)?o.effects=[p]:a.push(p))}if(null===(p=p.next)||p===l){if(null===(a=o.shared.pending))break;p=s.next=a.next,a.next=l,o.baseQueue=s=a,o.shared.pending=null}}null===d?h=u:d.next=f,o.baseState=h,o.baseQueue=d,sl(c),e.expirationTime=c,e.memoizedState=u}}function ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=n,"function"!=typeof r)throw Error(s(191,r));r.call(i)}}}var fo=Q.ReactCurrentBatchConfig,po=(new r.Component).refs;function go(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=qa(),i=fo.suspense;(i=ao(r=Ka(r,e,i),i)).payload=t,null!=n&&(i.callback=n),lo(e,i),Ga(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=qa(),i=fo.suspense;(i=ao(r=Ka(r,e,i),i)).tag=1,i.payload=t,null!=n&&(i.callback=n),lo(e,i),Ga(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=qa(),r=fo.suspense;(r=ao(n=Ka(n,e,r),r)).tag=2,null!=t&&(r.callback=t),lo(e,r),Ga(e,n)}};function vo(e,t,n,r,i,o,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!Fr(n,r)||!Fr(i,o))}function yo(e,t,n){var r=!1,i=ci,o=t.contextType;return"object"==typeof o&&null!==o?o=ro(o):(i=gi(t)?di:hi.current,o=(r=null!=(r=t.contextTypes))?pi(e,i):ci),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function wo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=po,oo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=ro(o):(o=gi(t)?di:hi.current,i.context=pi(e,o)),co(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(go(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var ko=Array.isArray;function To(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===po&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function _o(e,t){if("textarea"!==e.type)throw Error(s(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Eo(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=xl(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Ol(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=To(e,t,n),r.return=e,r):((r=Il(n.type,n.key,n.props,null,e.mode,r)).ref=To(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Rl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function h(e,t,n,r,o){return null===t||7!==t.tag?((t=Cl(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Ol(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return(n=Il(t.type,t.key,t.props,null,e.mode,n)).ref=To(e,null,t),n.return=e,n;case te:return(t=Rl(t,e.mode,n)).return=e,t}if(ko(t)||ge(t))return(t=Cl(t,e.mode,n,null)).return=e,t;_o(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return n.key===i?n.type===ne?h(e,t,n.props.children,r,i):u(e,t,n,r):null;case te:return n.key===i?c(e,t,n,r):null}if(ko(n)||ge(n))return null!==i?null:h(e,t,n,r,null);_o(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?n:r.key)||null,r.type===ne?h(t,e,r.props.children,i,r.key):u(t,e,r,i);case te:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(ko(r)||ge(r))return h(t,e=e.get(n)||null,r,i,null);_o(t,r)}return null}function g(i,s,a,l){for(var u=null,c=null,h=s,g=s=0,m=null;null!==h&&g<a.length;g++){h.index>g?(m=h,h=null):m=h.sibling;var v=d(i,h,a[g],l);if(null===v){null===h&&(h=m);break}e&&h&&null===v.alternate&&t(i,h),s=o(v,s,g),null===c?u=v:c.sibling=v,c=v,h=m}if(g===a.length)return n(i,h),u;if(null===h){for(;g<a.length;g++)null!==(h=f(i,a[g],l))&&(s=o(h,s,g),null===c?u=h:c.sibling=h,c=h);return u}for(h=r(i,h);g<a.length;g++)null!==(m=p(h,i,g,a[g],l))&&(e&&null!==m.alternate&&h.delete(null===m.key?g:m.key),s=o(m,s,g),null===c?u=m:c.sibling=m,c=m);return e&&h.forEach((function(e){return t(i,e)})),u}function m(i,a,l,u){var c=ge(l);if("function"!=typeof c)throw Error(s(150));if(null==(l=c.call(l)))throw Error(s(151));for(var h=c=null,g=a,m=a=0,v=null,y=l.next();null!==g&&!y.done;m++,y=l.next()){g.index>m?(v=g,g=null):v=g.sibling;var b=d(i,g,y.value,u);if(null===b){null===g&&(g=v);break}e&&g&&null===b.alternate&&t(i,g),a=o(b,a,m),null===h?c=b:h.sibling=b,h=b,g=v}if(y.done)return n(i,g),c;if(null===g){for(;!y.done;m++,y=l.next())null!==(y=f(i,y.value,u))&&(a=o(y,a,m),null===h?c=y:h.sibling=y,h=y);return c}for(g=r(i,g);!y.done;m++,y=l.next())null!==(y=p(g,i,m,y.value,u))&&(e&&null!==y.alternate&&g.delete(null===y.key?m:y.key),a=o(y,a,m),null===h?c=y:h.sibling=y,h=y);return e&&g.forEach((function(e){return t(i,e)})),c}return function(e,r,o,l){var u="object"==typeof o&&null!==o&&o.type===ne&&null===o.key;u&&(o=o.props.children);var c="object"==typeof o&&null!==o;if(c)switch(o.$$typeof){case ee:e:{for(c=o.key,u=r;null!==u;){if(u.key===c){switch(u.tag){case 7:if(o.type===ne){n(e,u.sibling),(r=i(u,o.props.children)).return=e,e=r;break e}break;default:if(u.elementType===o.type){n(e,u.sibling),(r=i(u,o.props)).ref=To(e,u,o),r.return=e,e=r;break e}}n(e,u);break}t(e,u),u=u.sibling}o.type===ne?((r=Cl(o.props.children,e.mode,l,o.key)).return=e,e=r):((l=Il(o.type,o.key,o.props,null,e.mode,l)).ref=To(e,r,o),l.return=e,e=l)}return a(e);case te:e:{for(u=o.key;null!==r;){if(r.key===u){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=i(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Rl(o,e.mode,l)).return=e,e=r}return a(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,o)).return=e,e=r):(n(e,r),(r=Ol(o,e.mode,l)).return=e,e=r),a(e);if(ko(o))return g(e,r,o,l);if(ge(o))return m(e,r,o,l);if(c&&_o(e,o),void 0===o&&!u)switch(e.tag){case 1:case 0:throw e=e.type,Error(s(152,e.displayName||e.name||"Component"))}return n(e,r)}}var So=Eo(!0),xo=Eo(!1),Io={},Co={current:Io},Oo={current:Io},Ro={current:Io};function Po(e){if(e===Io)throw Error(s(174));return e}function Ao(e,t){switch(ui(Ro,t),ui(Oo,e),ui(Co,Io),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:je(null,"");break;default:t=je(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}li(Co),ui(Co,t)}function No(){li(Co),li(Oo),li(Ro)}function Lo(e){Po(Ro.current);var t=Po(Co.current),n=je(t,e.type);t!==n&&(ui(Oo,e),ui(Co,n))}function Mo(e){Oo.current===e&&(li(Co),li(Oo))}var Do={current:0};function jo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Uo(e,t){return{responder:e,props:t}}var Fo=Q.ReactCurrentDispatcher,zo=Q.ReactCurrentBatchConfig,Vo=0,Ho=null,Bo=null,Wo=null,$o=!1;function qo(){throw Error(s(321))}function Ko(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,o){if(Vo=o,Ho=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Fo.current=null===e||null===e.memoizedState?vs:ys,e=n(r,i),t.expirationTime===Vo){o=0;do{if(t.expirationTime=0,!(25>o))throw Error(s(301));o+=1,Wo=Bo=null,t.updateQueue=null,Fo.current=bs,e=n(r,i)}while(t.expirationTime===Vo)}if(Fo.current=ms,t=null!==Bo&&null!==Bo.next,Vo=0,Wo=Bo=Ho=null,$o=!1,t)throw Error(s(300));return e}function Xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Wo?Ho.memoizedState=Wo=e:Wo=Wo.next=e,Wo}function Qo(){if(null===Bo){var e=Ho.alternate;e=null!==e?e.memoizedState:null}else e=Bo.next;var t=null===Wo?Ho.memoizedState:Wo.next;if(null!==t)Wo=t,Bo=e;else{if(null===e)throw Error(s(310));e={memoizedState:(Bo=e).memoizedState,baseState:Bo.baseState,baseQueue:Bo.baseQueue,queue:Bo.queue,next:null},null===Wo?Ho.memoizedState=Wo=e:Wo=Wo.next=e}return Wo}function Yo(e,t){return"function"==typeof t?t(e):t}function Jo(e){var t=Qo(),n=t.queue;if(null===n)throw Error(s(311));n.lastRenderedReducer=e;var r=Bo,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var l=a=o=null,u=i;do{var c=u.expirationTime;if(c<Vo){var h={expirationTime:u.expirationTime,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};null===l?(a=l=h,o=r):l=l.next=h,c>Ho.expirationTime&&(Ho.expirationTime=c,sl(c))}else null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),ol(c,u.suspenseConfig),r=u.eagerReducer===e?u.eagerState:e(r,u.action);u=u.next}while(null!==u&&u!==i);null===l?o=r:l.next=a,jr(r,t.memoizedState)||(Rs=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Zo(e){var t=Qo(),n=t.queue;if(null===n)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{o=e(o,a.action),a=a.next}while(a!==i);jr(o,t.memoizedState)||(Rs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function es(e){var t=Xo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e}).dispatch=gs.bind(null,Ho,e),[t.memoizedState,e]}function ts(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Ho.updateQueue)?(t={lastEffect:null},Ho.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ns(){return Qo().memoizedState}function rs(e,t,n,r){var i=Xo();Ho.effectTag|=e,i.memoizedState=ts(1|t,n,void 0,void 0===r?null:r)}function is(e,t,n,r){var i=Qo();r=void 0===r?null:r;var o=void 0;if(null!==Bo){var s=Bo.memoizedState;if(o=s.destroy,null!==r&&Ko(r,s.deps))return void ts(t,n,o,r)}Ho.effectTag|=e,i.memoizedState=ts(1|t,n,o,r)}function os(e,t){return rs(516,4,e,t)}function ss(e,t){return is(516,4,e,t)}function as(e,t){return is(4,2,e,t)}function ls(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function us(e,t,n){return n=null!=n?n.concat([e]):null,is(4,2,ls.bind(null,t,e),n)}function cs(){}function hs(e,t){return Xo().memoizedState=[e,void 0===t?null:t],e}function fs(e,t){var n=Qo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ds(e,t){var n=Qo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ps(e,t,n){var r=zi();Hi(98>r?98:r,(function(){e(!0)})),Hi(97<r?97:r,(function(){var r=zo.suspense;zo.suspense=void 0===t?null:t;try{e(!1),n()}finally{zo.suspense=r}}))}function gs(e,t,n){var r=qa(),i=fo.suspense;i={expirationTime:r=Ka(r,e,i),suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var o=t.pending;if(null===o?i.next=i:(i.next=o.next,o.next=i),t.pending=i,o=e.alternate,e===Ho||null!==o&&o===Ho)$o=!0,i.expirationTime=Vo,Ho.expirationTime=Vo;else{if(0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=o(s,n);if(i.eagerReducer=o,i.eagerState=a,jr(a,s))return}catch(e){}Ga(e,r)}}var ms={readContext:ro,useCallback:qo,useContext:qo,useEffect:qo,useImperativeHandle:qo,useLayoutEffect:qo,useMemo:qo,useReducer:qo,useRef:qo,useState:qo,useDebugValue:qo,useResponder:qo,useDeferredValue:qo,useTransition:qo},vs={readContext:ro,useCallback:hs,useContext:ro,useEffect:os,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,rs(4,2,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=Xo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=gs.bind(null,Ho,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Xo().memoizedState=e},useState:es,useDebugValue:cs,useResponder:Uo,useDeferredValue:function(e,t){var n=es(e),r=n[0],i=n[1];return os((function(){var n=zo.suspense;zo.suspense=void 0===t?null:t;try{i(e)}finally{zo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=es(!1),n=t[0];return t=t[1],[hs(ps.bind(null,t,e),[t,e]),n]}},ys={readContext:ro,useCallback:fs,useContext:ro,useEffect:ss,useImperativeHandle:us,useLayoutEffect:as,useMemo:ds,useReducer:Jo,useRef:ns,useState:function(){return Jo(Yo)},useDebugValue:cs,useResponder:Uo,useDeferredValue:function(e,t){var n=Jo(Yo),r=n[0],i=n[1];return ss((function(){var n=zo.suspense;zo.suspense=void 0===t?null:t;try{i(e)}finally{zo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Jo(Yo),n=t[0];return t=t[1],[fs(ps.bind(null,t,e),[t,e]),n]}},bs={readContext:ro,useCallback:fs,useContext:ro,useEffect:ss,useImperativeHandle:us,useLayoutEffect:as,useMemo:ds,useReducer:Zo,useRef:ns,useState:function(){return Zo(Yo)},useDebugValue:cs,useResponder:Uo,useDeferredValue:function(e,t){var n=Zo(Yo),r=n[0],i=n[1];return ss((function(){var n=zo.suspense;zo.suspense=void 0===t?null:t;try{i(e)}finally{zo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Zo(Yo),n=t[0];return t=t[1],[fs(ps.bind(null,t,e),[t,e]),n]}},ws=null,ks=null,Ts=!1;function _s(e,t){var n=El(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Es(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ss(e){if(Ts){var t=ks;if(t){var n=t;if(!Es(e,t)){if(!(t=kn(n.nextSibling))||!Es(e,t))return e.effectTag=-1025&e.effectTag|2,Ts=!1,void(ws=e);_s(ws,n)}ws=e,ks=kn(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,Ts=!1,ws=e}}function xs(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ws=e}function Is(e){if(e!==ws)return!1;if(!Ts)return xs(e),Ts=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!yn(t,e.memoizedProps))for(t=ks;t;)_s(e,t),t=kn(t.nextSibling);if(xs(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ks=kn(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ks=null}}else ks=ws?kn(e.stateNode.nextSibling):null;return!0}function Cs(){ks=ws=null,Ts=!1}var Os=Q.ReactCurrentOwner,Rs=!1;function Ps(e,t,n,r){t.child=null===e?xo(t,null,n,r):So(t,e.child,n,r)}function As(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Go(e,t,n,r,o,i),null===e||Rs?(t.effectTag|=1,Ps(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Gs(e,t,i))}function Ns(e,t,n,r,i,o){if(null===e){var s=n.type;return"function"!=typeof s||Sl(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Il(n.type,null,r,null,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Ls(e,t,s,r,i,o))}return s=e.child,i<o&&(i=s.memoizedProps,(n=null!==(n=n.compare)?n:Fr)(i,r)&&e.ref===t.ref)?Gs(e,t,o):(t.effectTag|=1,(e=xl(s,r)).ref=t.ref,e.return=t,t.child=e)}function Ls(e,t,n,r,i,o){return null!==e&&Fr(e.memoizedProps,r)&&e.ref===t.ref&&(Rs=!1,i<o)?(t.expirationTime=e.expirationTime,Gs(e,t,o)):Ds(e,t,n,r,o)}function Ms(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ds(e,t,n,r,i){var o=gi(n)?di:hi.current;return o=pi(t,o),no(t,i),n=Go(e,t,n,r,o,i),null===e||Rs?(t.effectTag|=1,Ps(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Gs(e,t,i))}function js(e,t,n,r,i){if(gi(n)){var o=!0;bi(t)}else o=!1;if(no(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),yo(t,n,r),wo(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;"object"==typeof u&&null!==u?u=ro(u):u=pi(t,u=gi(n)?di:hi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||l!==u)&&bo(t,s,r,u),io=!1;var f=t.memoizedState;s.state=f,co(t,r,s,i),l=t.memoizedState,a!==r||f!==l||fi.current||io?("function"==typeof c&&(go(t,n,c,r),l=t.memoizedState),(a=io||vo(t,n,a,r,f,l,u))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.effectTag|=4)):("function"==typeof s.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):("function"==typeof s.componentDidMount&&(t.effectTag|=4),r=!1)}else s=t.stateNode,so(e,t),a=t.memoizedProps,s.props=t.type===t.elementType?a:Gi(t.type,a),l=s.context,"object"==typeof(u=n.contextType)&&null!==u?u=ro(u):u=pi(t,u=gi(n)?di:hi.current),(h="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||l!==u)&&bo(t,s,r,u),io=!1,l=t.memoizedState,s.state=l,co(t,r,s,i),f=t.memoizedState,a!==r||l!==f||fi.current||io?("function"==typeof c&&(go(t,n,c,r),f=t.memoizedState),(c=io||vo(t,n,a,r,l,f,u))?(h||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,f,u),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,f,u)),"function"==typeof s.componentDidUpdate&&(t.effectTag|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=u,r=c):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),r=!1);return Us(e,t,n,r,o,i)}function Us(e,t,n,r,i,o){Ms(e,t);var s=0!=(64&t.effectTag);if(!r&&!s)return i&&wi(t,n,!1),Gs(e,t,o);r=t.stateNode,Os.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&s?(t.child=So(t,e.child,null,o),t.child=So(t,null,a,o)):Ps(e,t,a,o),t.memoizedState=r.state,i&&wi(t,n,!0),t.child}function Fs(e){var t=e.stateNode;t.pendingContext?vi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&vi(0,t.context,!1),Ao(e,t.containerInfo)}var zs,Vs,Hs,Bs={dehydrated:null,retryTime:0};function Ws(e,t,n){var r,i=t.mode,o=t.pendingProps,s=Do.current,a=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&s)&&(null===e||null!==e.memoizedState)),r?(a=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(s|=1),ui(Do,1&s),null===e){if(void 0!==o.fallback&&Ss(t),a){if(a=o.fallback,(o=Cl(null,i,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Cl(a,i,n,null)).return=t,o.sibling=n,t.memoizedState=Bs,t.child=o,n}return i=o.children,t.memoizedState=null,t.child=xo(t,null,i,n)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,a){if(o=o.fallback,(n=xl(e,e.pendingProps)).return=t,0==(2&t.mode)&&(a=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=a;null!==a;)a.return=n,a=a.sibling;return(i=xl(i,o)).return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=Bs,t.child=n,i}return n=So(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=o.fallback,(o=Cl(null,i,0,null)).return=t,o.child=e,null!==e&&(e.return=o),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Cl(a,i,n,null)).return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=Bs,t.child=o,n}return t.memoizedState=null,t.child=So(t,e,o.children,n)}function $s(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),to(e.return,t)}function qs(e,t,n,r,i,o){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailExpiration=0,s.tailMode=i,s.lastEffect=o)}function Ks(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ps(e,t,r.children,n),0!=(2&(r=Do.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$s(e,n);else if(19===e.tag)$s(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ui(Do,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===jo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qs(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===jo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qs(t,!0,n,null,o,t.lastEffect);break;case"together":qs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Gs(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&sl(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(s(153));if(null!==t.child){for(n=xl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=xl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xs(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qs(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return gi(t.type)&&mi(),null;case 3:return No(),li(fi),li(hi),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Is(t)||(t.effectTag|=4),null;case 5:Mo(t),n=Po(Ro.current);var o=t.type;if(null!==e&&null!=t.stateNode)Vs(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(s(166));return null}if(e=Po(Co.current),Is(t)){r=t.stateNode,o=t.type;var a=t.memoizedProps;switch(r[En]=t,r[Sn]=a,o){case"iframe":case"object":case"embed":Kt("load",r);break;case"video":case"audio":for(e=0;e<Qe.length;e++)Kt(Qe[e],r);break;case"source":Kt("error",r);break;case"img":case"image":case"link":Kt("error",r),Kt("load",r);break;case"form":Kt("reset",r),Kt("submit",r);break;case"details":Kt("toggle",r);break;case"input":_e(r,a),Kt("invalid",r),ln(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Kt("invalid",r),ln(n,"onChange");break;case"textarea":Pe(r,a),Kt("invalid",r),ln(n,"onChange")}for(var l in on(o,a),e=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"==typeof u?r.textContent!==u&&(e=["children",u]):"number"==typeof u&&r.textContent!==""+u&&(e=["children",""+u]):E.hasOwnProperty(l)&&null!=u&&ln(n,l)}switch(o){case"input":we(r),xe(r,a,!0);break;case"textarea":we(r),Ne(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=un)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(l=9===n.nodeType?n:n.ownerDocument,e===an&&(e=De(o)),e===an?"script"===o?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(o,{is:r.is}):(e=l.createElement(o),"select"===o&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,o),e[En]=t,e[Sn]=r,zs(e,t),t.stateNode=e,l=sn(o,r),o){case"iframe":case"object":case"embed":Kt("load",e),u=r;break;case"video":case"audio":for(u=0;u<Qe.length;u++)Kt(Qe[u],e);u=r;break;case"source":Kt("error",e),u=r;break;case"img":case"image":case"link":Kt("error",e),Kt("load",e),u=r;break;case"form":Kt("reset",e),Kt("submit",e),u=r;break;case"details":Kt("toggle",e),u=r;break;case"input":_e(e,r),u=Te(e,r),Kt("invalid",e),ln(n,"onChange");break;case"option":u=Ce(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=i({},r,{value:void 0}),Kt("invalid",e),ln(n,"onChange");break;case"textarea":Pe(e,r),u=Re(e,r),Kt("invalid",e),ln(n,"onChange");break;default:u=r}on(o,u);var c=u;for(a in c)if(c.hasOwnProperty(a)){var h=c[a];"style"===a?nn(e,h):"dangerouslySetInnerHTML"===a?null!=(h=h?h.__html:void 0)&&Fe(e,h):"children"===a?"string"==typeof h?("textarea"!==o||""!==h)&&ze(e,h):"number"==typeof h&&ze(e,""+h):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(E.hasOwnProperty(a)?null!=h&&ln(n,a):null!=h&&Y(e,a,h,l))}switch(o){case"input":we(e),xe(e,r,!1);break;case"textarea":we(e),Ne(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ye(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?Oe(e,!!r.multiple,n,!1):null!=r.defaultValue&&Oe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof u.onClick&&(e.onclick=un)}vn(o,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Hs(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(s(166));n=Po(Ro.current),Po(Co.current),Is(t)?(n=t.stateNode,r=t.memoizedProps,n[En]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[En]=t,t.stateNode=n)}return null;case 13:return li(Do),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Is(t):(r=null!==(o=e.memoizedState),n||null===o||null!==(o=e.child.sibling)&&(null!==(a=t.firstEffect)?(t.firstEffect=o,o.nextEffect=a):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Do.current)?Ia===wa&&(Ia=ka):(Ia!==wa&&Ia!==ka||(Ia=Ta),0!==Aa&&null!==Ea&&(Nl(Ea,xa),Ll(Ea,Aa)))),(n||r)&&(t.effectTag|=4),null);case 4:return No(),null;case 10:return eo(t),null;case 17:return gi(t.type)&&mi(),null;case 19:if(li(Do),null===(r=t.memoizedState))return null;if(o=0!=(64&t.effectTag),null===(a=r.rendering)){if(o)Xs(r,!1);else if(Ia!==wa||null!==e&&0!=(64&e.effectTag))for(a=t.child;null!==a;){if(null!==(e=jo(a))){for(t.effectTag|=64,Xs(r,!1),null!==(o=e.updateQueue)&&(t.updateQueue=o,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)a=n,(o=r).effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(e=o.alternate)?(o.childExpirationTime=0,o.expirationTime=a,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=null===a?null:{expirationTime:a.expirationTime,firstContext:a.firstContext,responders:a.responders}),r=r.sibling;return ui(Do,1&Do.current|2),t.child}a=a.sibling}}else{if(!o)if(null!==(e=jo(a))){if(t.effectTag|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Xs(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Fi()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Xs(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=r.last)?n.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Fi()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Fi(),n.sibling=null,t=Do.current,ui(Do,o?1&t|2:1&t),n):null}throw Error(s(156,t.tag))}function Ys(e){switch(e.tag){case 1:gi(e.type)&&mi();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(No(),li(fi),li(hi),0!=(64&(t=e.effectTag)))throw Error(s(285));return e.effectTag=-4097&t|64,e;case 5:return Mo(e),null;case 13:return li(Do),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return li(Do),null;case 4:return No(),null;case 10:return eo(e),null;default:return null}}function Js(e,t){return{value:e,source:t,stack:ve(t)}}zs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Vs=function(e,t,n,r,o){var s=e.memoizedProps;if(s!==r){var a,l,u=t.stateNode;switch(Po(Co.current),e=null,n){case"input":s=Te(u,s),r=Te(u,r),e=[];break;case"option":s=Ce(u,s),r=Ce(u,r),e=[];break;case"select":s=i({},s,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":s=Re(u,s),r=Re(u,r),e=[];break;default:"function"!=typeof s.onClick&&"function"==typeof r.onClick&&(u.onclick=un)}for(a in on(n,r),n=null,s)if(!r.hasOwnProperty(a)&&s.hasOwnProperty(a)&&null!=s[a])if("style"===a)for(l in u=s[a])u.hasOwnProperty(l)&&(n||(n={}),n[l]="");else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(E.hasOwnProperty(a)?e||(e=[]):(e=e||[]).push(a,null));for(a in r){var c=r[a];if(u=null!=s?s[a]:void 0,r.hasOwnProperty(a)&&c!==u&&(null!=c||null!=u))if("style"===a)if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(e||(e=[]),e.push(a,n)),n=c;else"dangerouslySetInnerHTML"===a?(c=c?c.__html:void 0,u=u?u.__html:void 0,null!=c&&u!==c&&(e=e||[]).push(a,c)):"children"===a?u===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(a,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(E.hasOwnProperty(a)?(null!=c&&ln(o,a),e||u===c||(e=[])):(e=e||[]).push(a,c))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}},Hs=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var Zs="function"==typeof WeakSet?WeakSet:Set;function ea(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ve(n)),null!==n&&me(n.type),t=t.value,null!==e&&1===e.tag&&me(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function ta(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){yl(e,t)}else t.current=null}function na(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Gi(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(s(163))}function ra(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function ia(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oa(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void ia(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Gi(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&ho(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}ho(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&vn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Dt(n)))));case 19:case 17:case 20:case 21:return}throw Error(s(163))}function sa(e,t,n){switch("function"==typeof Tl&&Tl(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Hi(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var i=t;try{n()}catch(e){yl(i,e)}}e=e.next}while(e!==r)}))}break;case 1:ta(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){yl(e,t)}}(t,n);break;case 5:ta(t);break;case 4:ca(e,t,n)}}function aa(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&aa(t)}function la(e){return 5===e.tag||3===e.tag||4===e.tag}function ua(e){e:{for(var t=e.return;null!==t;){if(la(t)){var n=t;break e}t=t.return}throw Error(s(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(s(161))}16&n.effectTag&&(ze(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||la(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=un));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function ca(e,t,n){for(var r,i,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(s(160));switch(r=a.stateNode,a.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,c=n,h=u;;)if(sa(l,h,c),null!==h.child&&4!==h.tag)h.child.return=h,h=h.child;else{if(h===u)break e;for(;null===h.sibling;){if(null===h.return||h.return===u)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i?(l=r,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,i=!0,o.child.return=o,o=o.child;continue}}else if(sa(e,o,n),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function ha(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void ra(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[Sn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Ee(n,r),sn(e,i),t=sn(e,r),i=0;i<o.length;i+=2){var a=o[i],l=o[i+1];"style"===a?nn(n,l):"dangerouslySetInnerHTML"===a?Fe(n,l):"children"===a?ze(n,l):Y(n,a,l,t)}switch(e){case"input":Se(n,r);break;case"textarea":Ae(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Oe(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Oe(n,!!r.multiple,r.defaultValue,!0):Oe(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(s(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,Dt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,La=Fi()),null!==n)e:for(e=n;;){if(5===e.tag)o=e.stateNode,r?"function"==typeof(o=o.style).setProperty?o.setProperty("display","none","important"):o.display="none":(o=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,o.style.display=tn("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(o=e.child.sibling).return=e,e=o;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void fa(t);case 19:return void fa(t);case 17:return}throw Error(s(163))}function fa(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach((function(t){var r=wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var da="function"==typeof WeakMap?WeakMap:Map;function pa(e,t,n){(n=ao(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Da||(Da=!0,ja=r),ea(e,t)},n}function ga(e,t,n){(n=ao(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return ea(e,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Ua?Ua=new Set([this]):Ua.add(this),ea(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var ma,va=Math.ceil,ya=Q.ReactCurrentDispatcher,ba=Q.ReactCurrentOwner,wa=0,ka=3,Ta=4,_a=0,Ea=null,Sa=null,xa=0,Ia=wa,Ca=null,Oa=1073741823,Ra=1073741823,Pa=null,Aa=0,Na=!1,La=0,Ma=null,Da=!1,ja=null,Ua=null,Fa=!1,za=null,Va=90,Ha=null,Ba=0,Wa=null,$a=0;function qa(){return 0!=(48&_a)?1073741821-(Fi()/10|0):0!==$a?$a:$a=1073741821-(Fi()/10|0)}function Ka(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=zi();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&_a))return xa;if(null!==n)e=Ki(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Ki(e,150,100);break;case 97:case 96:e=Ki(e,5e3,250);break;case 95:e=2;break;default:throw Error(s(326))}return null!==Ea&&e===xa&&--e,e}function Ga(e,t){if(50<Ba)throw Ba=0,Wa=null,Error(s(185));if(null!==(e=Xa(e,t))){var n=zi();1073741823===t?0!=(8&_a)&&0==(48&_a)?Za(e):(Ya(e),0===_a&&$i()):Ya(e),0==(4&_a)||98!==n&&99!==n||(null===Ha?Ha=new Map([[e,t]]):(void 0===(n=Ha.get(e))||n>t)&&Ha.set(e,t))}}function Xa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(Ea===i&&(sl(t),Ia===Ta&&Nl(i,xa)),Ll(i,t)),i}function Qa(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Al(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Ya(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Wi(Za.bind(null,e));else{var t=Qa(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=qa();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Ai&&_i(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Wi(Za.bind(null,e)):Bi(r,Ja.bind(null,e),{timeout:10*(1073741821-t)-Fi()}),e.callbackNode=t}}}function Ja(e,t){if($a=0,t)return Ml(e,t=qa()),Ya(e),null;var n=Qa(e);if(0!==n){if(t=e.callbackNode,0!=(48&_a))throw Error(s(327));if(gl(),e===Ea&&n===xa||nl(e,n),null!==Sa){var r=_a;_a|=16;for(var i=il();;)try{ll();break}catch(t){rl(e,t)}if(Zi(),_a=r,ya.current=i,1===Ia)throw t=Ca,nl(e,n),Nl(e,n),Ya(e),t;if(null===Sa)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Ia,Ea=null,r){case wa:case 1:throw Error(s(345));case 2:Ml(e,2<n?2:n);break;case ka:if(Nl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=hl(i)),1073741823===Oa&&10<(i=La+500-Fi())){if(Na){var o=e.lastPingedTime;if(0===o||o>=n){e.lastPingedTime=n,nl(e,n);break}}if(0!==(o=Qa(e))&&o!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=bn(fl.bind(null,e),i);break}fl(e);break;case Ta:if(Nl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=hl(i)),Na&&(0===(i=e.lastPingedTime)||i>=n)){e.lastPingedTime=n,nl(e,n);break}if(0!==(i=Qa(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Ra?r=10*(1073741821-Ra)-Fi():1073741823===Oa?r=0:(r=10*(1073741821-Oa)-5e3,0>(r=(i=Fi())-r)&&(r=0),(n=10*(1073741821-n)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*va(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=bn(fl.bind(null,e),r);break}fl(e);break;case 5:if(1073741823!==Oa&&null!==Pa){o=Oa;var a=Pa;if(0>=(r=0|a.busyMinDurationMs)?r=0:(i=0|a.busyDelayMs,r=(o=Fi()-(10*(1073741821-o)-(0|a.timeoutMs||5e3)))<=i?0:i+r-o),10<r){Nl(e,n),e.timeoutHandle=bn(fl.bind(null,e),r);break}}fl(e);break;default:throw Error(s(329))}if(Ya(e),e.callbackNode===t)return Ja.bind(null,e)}}return null}function Za(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&_a))throw Error(s(327));if(gl(),e===Ea&&t===xa||nl(e,t),null!==Sa){var n=_a;_a|=16;for(var r=il();;)try{al();break}catch(t){rl(e,t)}if(Zi(),_a=n,ya.current=r,1===Ia)throw n=Ca,nl(e,t),Nl(e,t),Ya(e),n;if(null!==Sa)throw Error(s(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Ea=null,fl(e),Ya(e)}return null}function el(e,t){var n=_a;_a|=1;try{return e(t)}finally{0===(_a=n)&&$i()}}function tl(e,t){var n=_a;_a&=-2,_a|=8;try{return e(t)}finally{0===(_a=n)&&$i()}}function nl(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,wn(n)),null!==Sa)for(n=Sa.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&mi();break;case 3:No(),li(fi),li(hi);break;case 5:Mo(r);break;case 4:No();break;case 13:case 19:li(Do);break;case 10:eo(r)}n=n.return}Ea=e,Sa=xl(e.current,null),xa=t,Ia=wa,Ca=null,Ra=Oa=1073741823,Pa=null,Aa=0,Na=!1}function rl(e,t){for(;;){try{if(Zi(),Fo.current=ms,$o)for(var n=Ho.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}if(Vo=0,Wo=Bo=Ho=null,$o=!1,null===Sa||null===Sa.return)return Ia=1,Ca=t,Sa=null;e:{var i=e,o=Sa.return,s=Sa,a=t;if(t=xa,s.effectTag|=2048,s.firstEffect=s.lastEffect=null,null!==a&&"object"==typeof a&&"function"==typeof a.then){var l=a;if(0==(2&s.mode)){var u=s.alternate;u?(s.updateQueue=u.updateQueue,s.memoizedState=u.memoizedState,s.expirationTime=u.expirationTime):(s.updateQueue=null,s.memoizedState=null)}var c=0!=(1&Do.current),h=o;do{var f;if(f=13===h.tag){var d=h.memoizedState;if(null!==d)f=null!==d.dehydrated;else{var p=h.memoizedProps;f=void 0!==p.fallback&&(!0!==p.unstable_avoidThisFallback||!c)}}if(f){var g=h.updateQueue;if(null===g){var m=new Set;m.add(l),h.updateQueue=m}else g.add(l);if(0==(2&h.mode)){if(h.effectTag|=64,s.effectTag&=-2981,1===s.tag)if(null===s.alternate)s.tag=17;else{var v=ao(1073741823,null);v.tag=2,lo(s,v)}s.expirationTime=1073741823;break e}a=void 0,s=t;var y=i.pingCache;if(null===y?(y=i.pingCache=new da,a=new Set,y.set(l,a)):void 0===(a=y.get(l))&&(a=new Set,y.set(l,a)),!a.has(s)){a.add(s);var b=bl.bind(null,i,l,s);l.then(b,b)}h.effectTag|=4096,h.expirationTime=t;break e}h=h.return}while(null!==h);a=Error((me(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ve(s))}5!==Ia&&(Ia=2),a=Js(a,s),h=o;do{switch(h.tag){case 3:l=a,h.effectTag|=4096,h.expirationTime=t,uo(h,pa(h,l,t));break e;case 1:l=a;var w=h.type,k=h.stateNode;if(0==(64&h.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==k&&"function"==typeof k.componentDidCatch&&(null===Ua||!Ua.has(k)))){h.effectTag|=4096,h.expirationTime=t,uo(h,ga(h,l,t));break e}}h=h.return}while(null!==h)}Sa=cl(Sa)}catch(e){t=e;continue}break}}function il(){var e=ya.current;return ya.current=ms,null===e?ms:e}function ol(e,t){e<Oa&&2<e&&(Oa=e),null!==t&&e<Ra&&2<e&&(Ra=e,Pa=t)}function sl(e){e>Aa&&(Aa=e)}function al(){for(;null!==Sa;)Sa=ul(Sa)}function ll(){for(;null!==Sa&&!Ni();)Sa=ul(Sa)}function ul(e){var t=ma(e.alternate,e,xa);return e.memoizedProps=e.pendingProps,null===t&&(t=cl(e)),ba.current=null,t}function cl(e){Sa=e;do{var t=Sa.alternate;if(e=Sa.return,0==(2048&Sa.effectTag)){if(t=Qs(t,Sa,xa),1===xa||1!==Sa.childExpirationTime){for(var n=0,r=Sa.child;null!==r;){var i=r.expirationTime,o=r.childExpirationTime;i>n&&(n=i),o>n&&(n=o),r=r.sibling}Sa.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Sa.firstEffect),null!==Sa.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Sa.firstEffect),e.lastEffect=Sa.lastEffect),1<Sa.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Sa:e.firstEffect=Sa,e.lastEffect=Sa))}else{if(null!==(t=Ys(Sa)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=Sa.sibling))return t;Sa=e}while(null!==Sa);return Ia===wa&&(Ia=5),null}function hl(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function fl(e){var t=zi();return Hi(99,dl.bind(null,e,t)),null}function dl(e,t){do{gl()}while(null!==za);if(0!=(48&_a))throw Error(s(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=hl(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Ea&&(Sa=Ea=null,xa=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,null!==i){var o=_a;_a|=32,ba.current=null,gn=qt;var a=dn();if(pn(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{var u=(l=(l=a.ownerDocument)&&l.defaultView||window).getSelection&&l.getSelection();if(u&&0!==u.rangeCount){l=u.anchorNode;var c=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{l.nodeType,h.nodeType}catch(e){l=null;break e}var f=0,d=-1,p=-1,g=0,m=0,v=a,y=null;t:for(;;){for(var b;v!==l||0!==c&&3!==v.nodeType||(d=f+c),v!==h||0!==u&&3!==v.nodeType||(p=f+u),3===v.nodeType&&(f+=v.nodeValue.length),null!==(b=v.firstChild);)y=v,v=b;for(;;){if(v===a)break t;if(y===l&&++g===c&&(d=f),y===h&&++m===u&&(p=f),null!==(b=v.nextSibling))break;y=(v=y).parentNode}v=b}l=-1===d||-1===p?null:{start:d,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;mn={activeElementDetached:null,focusedElem:a,selectionRange:l},qt=!1,Ma=i;do{try{pl()}catch(e){if(null===Ma)throw Error(s(330));yl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);Ma=i;do{try{for(a=e,l=t;null!==Ma;){var w=Ma.effectTag;if(16&w&&ze(Ma.stateNode,""),128&w){var k=Ma.alternate;if(null!==k){var T=k.ref;null!==T&&("function"==typeof T?T(null):T.current=null)}}switch(1038&w){case 2:ua(Ma),Ma.effectTag&=-3;break;case 6:ua(Ma),Ma.effectTag&=-3,ha(Ma.alternate,Ma);break;case 1024:Ma.effectTag&=-1025;break;case 1028:Ma.effectTag&=-1025,ha(Ma.alternate,Ma);break;case 4:ha(Ma.alternate,Ma);break;case 8:ca(a,c=Ma,l),aa(c)}Ma=Ma.nextEffect}}catch(e){if(null===Ma)throw Error(s(330));yl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);if(T=mn,k=dn(),w=T.focusedElem,l=T.selectionRange,k!==w&&w&&w.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(w.ownerDocument.documentElement,w)){null!==l&&pn(w)&&(k=l.start,void 0===(T=l.end)&&(T=k),"selectionStart"in w?(w.selectionStart=k,w.selectionEnd=Math.min(T,w.value.length)):(T=(k=w.ownerDocument||document)&&k.defaultView||window).getSelection&&(T=T.getSelection(),c=w.textContent.length,a=Math.min(l.start,c),l=void 0===l.end?a:Math.min(l.end,c),!T.extend&&a>l&&(c=l,l=a,a=c),c=fn(w,a),h=fn(w,l),c&&h&&(1!==T.rangeCount||T.anchorNode!==c.node||T.anchorOffset!==c.offset||T.focusNode!==h.node||T.focusOffset!==h.offset)&&((k=k.createRange()).setStart(c.node,c.offset),T.removeAllRanges(),a>l?(T.addRange(k),T.extend(h.node,h.offset)):(k.setEnd(h.node,h.offset),T.addRange(k))))),k=[];for(T=w;T=T.parentNode;)1===T.nodeType&&k.push({element:T,left:T.scrollLeft,top:T.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<k.length;w++)(T=k[w]).element.scrollLeft=T.left,T.element.scrollTop=T.top}qt=!!gn,mn=gn=null,e.current=n,Ma=i;do{try{for(w=e;null!==Ma;){var _=Ma.effectTag;if(36&_&&oa(w,Ma.alternate,Ma),128&_){k=void 0;var E=Ma.ref;if(null!==E){var S=Ma.stateNode;switch(Ma.tag){case 5:k=S;break;default:k=S}"function"==typeof E?E(k):E.current=k}}Ma=Ma.nextEffect}}catch(e){if(null===Ma)throw Error(s(330));yl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);Ma=null,Li(),_a=o}else e.current=n;if(Fa)Fa=!1,za=e,Va=t;else for(Ma=i;null!==Ma;)t=Ma.nextEffect,Ma.nextEffect=null,Ma=t;if(0===(t=e.firstPendingTime)&&(Ua=null),1073741823===t?e===Wa?Ba++:(Ba=0,Wa=e):Ba=0,"function"==typeof kl&&kl(n.stateNode,r),Ya(e),Da)throw Da=!1,e=ja,ja=null,e;return 0!=(8&_a)||$i(),null}function pl(){for(;null!==Ma;){var e=Ma.effectTag;0!=(256&e)&&na(Ma.alternate,Ma),0==(512&e)||Fa||(Fa=!0,Bi(97,(function(){return gl(),null}))),Ma=Ma.nextEffect}}function gl(){if(90!==Va){var e=97<Va?97:Va;return Va=90,Hi(e,ml)}}function ml(){if(null===za)return!1;var e=za;if(za=null,0!=(48&_a))throw Error(s(331));var t=_a;for(_a|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:ra(5,n),ia(5,n)}}catch(t){if(null===e)throw Error(s(330));yl(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return _a=t,$i(),!0}function vl(e,t,n){lo(e,t=pa(e,t=Js(n,t),1073741823)),null!==(e=Xa(e,1073741823))&&Ya(e)}function yl(e,t){if(3===e.tag)vl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){vl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ua||!Ua.has(r))){lo(n,e=ga(n,e=Js(t,e),1073741823)),null!==(n=Xa(n,1073741823))&&Ya(n);break}}n=n.return}}function bl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),Ea===e&&xa===n?Ia===Ta||Ia===ka&&1073741823===Oa&&Fi()-La<500?nl(e,xa):Na=!0:Al(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Ya(e)))}function wl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=Ka(t=qa(),e,null)),null!==(e=Xa(e,t))&&Ya(e)}ma=function(e,t,n){var r=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||fi.current)Rs=!0;else{if(r<n){switch(Rs=!1,t.tag){case 3:Fs(t),Cs();break;case 5:if(Lo(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:gi(t.type)&&bi(t);break;case 4:Ao(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,ui(Xi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Ws(e,t,n):(ui(Do,1&Do.current),null!==(t=Gs(e,t,n))?t.sibling:null);ui(Do,1&Do.current);break;case 19:if(r=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(r)return Ks(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),ui(Do,Do.current),!r)return null}return Gs(e,t,n)}Rs=!1}}else Rs=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=pi(t,hi.current),no(t,n),i=Go(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,gi(r)){var o=!0;bi(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,oo(t);var a=r.getDerivedStateFromProps;"function"==typeof a&&go(t,r,a,e),i.updater=mo,t.stateNode=i,i._reactInternalFiber=t,wo(t,r,e,n),t=Us(null,t,r,!0,o,n)}else t.tag=0,Ps(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,o=t.tag=function(e){if("function"==typeof e)return Sl(e)?1:0;if(null!=e){if((e=e.$$typeof)===le)return 11;if(e===he)return 14}return 2}(i),e=Gi(i,e),o){case 0:t=Ds(null,t,i,e,n);break e;case 1:t=js(null,t,i,e,n);break e;case 11:t=As(null,t,i,e,n);break e;case 14:t=Ns(null,t,i,Gi(i.type,e),r,n);break e}throw Error(s(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ds(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 1:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 3:if(Fs(t),r=t.updateQueue,null===e||null===r)throw Error(s(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,so(e,t),co(t,r,null,n),(r=t.memoizedState.element)===i)Cs(),t=Gs(e,t,n);else{if((i=t.stateNode.hydrate)&&(ks=kn(t.stateNode.containerInfo.firstChild),ws=t,i=Ts=!0),i)for(n=xo(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else Ps(e,t,r,n),Cs();t=t.child}return t;case 5:return Lo(t),null===e&&Ss(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,yn(r,i)?a=null:null!==o&&yn(r,o)&&(t.effectTag|=16),Ms(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ps(e,t,a,n),t=t.child),t;case 6:return null===e&&Ss(t),null;case 13:return Ws(e,t,n);case 4:return Ao(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=So(t,null,r,n):Ps(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,As(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value;var l=t.type._context;if(ui(Xi,l._currentValue),l._currentValue=o,null!==a)if(l=a.value,0===(o=jr(l,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(a.children===i.children&&!fi.current){t=Gs(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var u=l.dependencies;if(null!==u){a=l.child;for(var c=u.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&o)){1===l.tag&&((c=ao(n,null)).tag=2,lo(l,c)),l.expirationTime<n&&(l.expirationTime=n),null!==(c=l.alternate)&&c.expirationTime<n&&(c.expirationTime=n),to(l.return,n),u.expirationTime<n&&(u.expirationTime=n);break}c=c.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}Ps(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,no(t,n),r=r(i=ro(i,o.unstable_observedBits)),t.effectTag|=1,Ps(e,t,r,n),t.child;case 14:return o=Gi(i=t.type,t.pendingProps),Ns(e,t,i,o=Gi(i.type,o),r,n);case 15:return Ls(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gi(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,gi(r)?(e=!0,bi(t)):e=!1,no(t,n),yo(t,r,i),wo(t,r,i,n),Us(null,t,r,!0,e,n);case 19:return Ks(e,t,n)}throw Error(s(156,t.tag))};var kl=null,Tl=null;function _l(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function El(e,t,n,r){return new _l(e,t,n,r)}function Sl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function xl(e,t){var n=e.alternate;return null===n?((n=El(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Il(e,t,n,r,i,o){var a=2;if(r=e,"function"==typeof e)Sl(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case ne:return Cl(n.children,i,o,t);case ae:a=8,i|=7;break;case re:a=8,i|=1;break;case ie:return(e=El(12,n,t,8|i)).elementType=ie,e.type=ie,e.expirationTime=o,e;case ue:return(e=El(13,n,t,i)).type=ue,e.elementType=ue,e.expirationTime=o,e;case ce:return(e=El(19,n,t,i)).elementType=ce,e.expirationTime=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case oe:a=10;break e;case se:a=9;break e;case le:a=11;break e;case he:a=14;break e;case fe:a=16,r=null;break e;case de:a=22;break e}throw Error(s(130,null==e?e:typeof e,""))}return(t=El(a,n,t,i)).elementType=e,t.type=r,t.expirationTime=o,t}function Cl(e,t,n,r){return(e=El(7,e,r,t)).expirationTime=n,e}function Ol(e,t,n){return(e=El(6,e,null,t)).expirationTime=n,e}function Rl(e,t,n){return(t=El(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pl(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Al(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function Nl(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Ll(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Ml(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function Dl(e,t,n,r){var i=t.current,o=qa(),a=fo.suspense;o=Ka(o,i,a);e:if(n){t:{if(Ze(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(s(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(gi(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(s(171))}if(1===n.tag){var u=n.type;if(gi(u)){n=yi(n,u,l);break e}}n=l}else n=ci;return null===t.context?t.context=n:t.pendingContext=n,(t=ao(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),lo(i,t),Ga(i,o),o}function jl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Ul(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function Fl(e,t){Ul(e,t),(e=e.alternate)&&Ul(e,t)}function zl(e,t,n){var r=new Pl(e,t,n=null!=n&&!0===n.hydrate),i=El(3,null,null,2===t?7:1===t?3:0);r.current=i,i.stateNode=r,oo(i),e[xn]=r.current,n&&0!==t&&function(e,t){var n=Je(t);xt.forEach((function(e){pt(e,t,n)})),It.forEach((function(e){pt(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function Vl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Hl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if("function"==typeof i){var a=i;i=function(){var e=jl(s);a.call(e)}}Dl(t,s,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new zl(e,0,t?{hydrate:!0}:void 0)}(n,r),s=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=jl(s);l.call(e)}}tl((function(){Dl(t,s,e,i)}))}return jl(s)}function Bl(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:te,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Wl(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Vl(t))throw Error(s(200));return Bl(e,t,null,n)}zl.prototype.render=function(e){Dl(e,this._internalRoot,null,null)},zl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Dl(null,e,null,(function(){t[xn]=null}))},gt=function(e){if(13===e.tag){var t=Ki(qa(),150,100);Ga(e,t),Fl(e,t)}},mt=function(e){13===e.tag&&(Ga(e,3),Fl(e,3))},vt=function(e){if(13===e.tag){var t=qa();Ga(e,t=Ka(t,e,null)),Fl(e,t)}},C=function(e,t,n){switch(t){case"input":if(Se(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Rn(r);if(!i)throw Error(s(90));ke(r),Se(r,i)}}}break;case"textarea":Ae(e,n);break;case"select":null!=(t=n.value)&&Oe(e,!!n.multiple,t,!1)}},L=el,M=function(e,t,n,r,i){var o=_a;_a|=4;try{return Hi(98,e.bind(null,t,n,r,i))}finally{0===(_a=o)&&$i()}},D=function(){0==(49&_a)&&(function(){if(null!==Ha){var e=Ha;Ha=null,e.forEach((function(e,t){Ml(t,e),Ya(t)})),$i()}}(),gl())},j=function(e,t){var n=_a;_a|=2;try{return e(t)}finally{0===(_a=n)&&$i()}};var $l,ql,Kl={Events:[Cn,On,Rn,x,_,jn,function(e){it(e,Dn)},A,N,Yt,at,gl,{current:!1}]};ql=($l={findFiberByHostInstance:In,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);kl=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},Tl=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},$l,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=nt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return ql?ql(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kl,t.createPortal=Wl,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(s(188));throw Error(s(268,Object.keys(e)))}return e=null===(e=nt(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&_a))throw Error(s(187));var n=_a;_a|=1;try{return Hi(99,e.bind(null,t))}finally{_a=n,$i()}},t.hydrate=function(e,t,n){if(!Vl(t))throw Error(s(200));return Hl(null,e,t,!0,n)},t.render=function(e,t,n){if(!Vl(t))throw Error(s(200));return Hl(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(s(40));return!!e._reactRootContainer&&(tl((function(){Hl(null,null,e,!1,(function(){e._reactRootContainer=null,e[xn]=null}))})),!0)},t.unstable_batchedUpdates=el,t.unstable_createPortal=function(e,t){return Wl(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(s(200));if(null==e||void 0===e._reactInternalFiber)throw Error(s(38));return Hl(e,t,n,!1,r)},t.version="16.13.1"},function(e,t,n){"use strict";e.exports=n(20)},function(e,t,n){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i,o,s,a;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,c=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(c,0),e}},h=Date.now();t.unstable_now=function(){return Date.now()-h},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(c,0))},i=function(e,t){u=setTimeout(e,t)},o=function(){clearTimeout(u)},s=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var f=window.performance,d=window.Date,p=window.setTimeout,g=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)t.unstable_now=function(){return f.now()};else{var v=d.now();t.unstable_now=function(){return d.now()-v}}var y=!1,b=null,w=-1,k=5,T=0;s=function(){return t.unstable_now()>=T},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):k=0<e?Math.floor(1e3/e):5};var _=new MessageChannel,E=_.port2;_.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();T=e+k;try{b(!0,e)?E.postMessage(null):(y=!1,b=null)}catch(e){throw E.postMessage(null),e}}else y=!1},r=function(e){b=e,y||(y=!0,E.postMessage(null))},i=function(e,n){w=p((function(){e(t.unstable_now())}),n)},o=function(){g(w),w=-1}}function S(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<C(i,t)))break e;e[r]=t,e[n]=i,n=r}}function x(e){return void 0===(e=e[0])?null:e}function I(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,s=e[o],a=o+1,l=e[a];if(void 0!==s&&0>C(s,n))void 0!==l&&0>C(l,s)?(e[r]=l,e[a]=n,r=a):(e[r]=s,e[o]=n,r=o);else{if(!(void 0!==l&&0>C(l,n)))break e;e[r]=l,e[a]=n,r=a}}}return t}return null}function C(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var O=[],R=[],P=1,A=null,N=3,L=!1,M=!1,D=!1;function j(e){for(var t=x(R);null!==t;){if(null===t.callback)I(R);else{if(!(t.startTime<=e))break;I(R),t.sortIndex=t.expirationTime,S(O,t)}t=x(R)}}function U(e){if(D=!1,j(e),!M)if(null!==x(O))M=!0,r(F);else{var t=x(R);null!==t&&i(U,t.startTime-e)}}function F(e,n){M=!1,D&&(D=!1,o()),L=!0;var r=N;try{for(j(n),A=x(O);null!==A&&(!(A.expirationTime>n)||e&&!s());){var a=A.callback;if(null!==a){A.callback=null,N=A.priorityLevel;var l=a(A.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?A.callback=l:A===x(O)&&I(O),j(n)}else I(O);A=x(O)}if(null!==A)var u=!0;else{var c=x(R);null!==c&&i(U,c.startTime-n),u=!1}return u}finally{A=null,N=r,L=!1}}function z(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var V=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){M||L||(M=!0,r(F))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return x(O)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=V,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},t.unstable_scheduleCallback=function(e,n,s){var a=t.unstable_now();if("object"==typeof s&&null!==s){var l=s.delay;l="number"==typeof l&&0<l?a+l:a,s="number"==typeof s.timeout?s.timeout:z(e)}else s=z(e),l=a;return e={id:P++,callback:n,priorityLevel:e,startTime:l,expirationTime:s=l+s,sortIndex:-1},l>a?(e.sortIndex=l,S(R,e),null===x(O)&&e===x(R)&&(D?o():D=!0,i(U,l-a))):(e.sortIndex=s,S(O,e),M||L||(M=!0,r(F))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();j(e);var n=x(O);return n!==A&&null!==A&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<A.expirationTime||s()},t.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}}},function(e,t,n){var r=n(11),i=n(22);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,"* {\r\n  margin: 0;\r\n}\r\n\r\n.app {\r\n  background-color: #fafafa;\r\n}\r\n\r\n/* object-fit \r\nits a property which is that regardless of the size \r\nkeey the aspect ratio\r\nmeaning prevent the thing from getting stretch or compressed\r\ndeformed*/\r\n.app__header {\r\n  background-color: white;\r\n  object-fit: contain;\r\n  padding: 20px;\r\n  border: 1px solid lightgray;\r\n}\r\n",""]),t.default=i},function(e,t,n){var r=n(11),i=n(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,".post {\r\n  max-width: 500px;\r\n  background-color: white;\r\n  border: 1px solid lightgray;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.post__image {\r\n  width: 100%;\r\n  object-fit: contain;\r\n  border-top: 1px solid lightgray;\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.post__text {\r\n  font-weight: normal;\r\n  padding: 20px;\r\n}\r\n\r\n.post__header {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n}\r\n.post__avatar {\r\n  margin-right: 10px;\r\n}\r\n",""]),t.default=i},function(e,t,n){"use strict";var r=n(26);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(28)},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,g=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,k=r?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case h:case f:case s:case l:case a:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case v:case m:case u:return e;default:return t}}case o:return t}}}function _(e){return T(e)===f}t.AsyncMode=h,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=u,t.Element=i,t.ForwardRef=d,t.Fragment=s,t.Lazy=v,t.Memo=m,t.Portal=o,t.Profiler=l,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return _(e)||T(e)===h},t.isConcurrentMode=_,t.isContextConsumer=function(e){return T(e)===c},t.isContextProvider=function(e){return T(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return T(e)===d},t.isFragment=function(e){return T(e)===s},t.isLazy=function(e){return T(e)===v},t.isMemo=function(e){return T(e)===m},t.isPortal=function(e){return T(e)===o},t.isProfiler=function(e){return T(e)===l},t.isStrictMode=function(e){return T(e)===a},t.isSuspense=function(e){return T(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===l||e===a||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===u||e.$$typeof===c||e.$$typeof===d||e.$$typeof===b||e.$$typeof===w||e.$$typeof===k||e.$$typeof===y)},t.typeOf=T},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,u=[],c=!1,h=-1;function f(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&d())}function d(){if(!c){var e=a(f);c=!0;for(var t=u.length;t;){for(l=u,u=[];++h<t;)l&&l[h].run();h=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(14),s=n.n(o);n(21),n(23);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function u(e,t){if(null==e)return{};var n,r,i=l(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n(7);function c(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var h=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(r&&(r+=" "),r+=t);return r},f=n(15),d=n.n(f),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g="object"===("undefined"==typeof window?"undefined":p(window))&&"object"===("undefined"==typeof document?"undefined":p(document))&&9===document.nodeType;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w={}.constructor;function k(e){if(null==e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(k);if(e.constructor!==w)return e;var t={};for(var n in e)t[n]=k(e[n]);return t}function T(e,t,n){void 0===e&&(e="unnamed");var r=n.jss,i=k(t),o=r.plugins.onCreateRule(e,i,n);return o||(e[0],null)}var _=function(e,t){for(var n="",r=0;r<e.length&&"!important"!==e[r];r++)n&&(n+=t),n+=e[r];return n},E=function(e,t){if(void 0===t&&(t=!1),!Array.isArray(e))return e;var n="";if(Array.isArray(e[0]))for(var r=0;r<e.length&&"!important"!==e[r];r++)n&&(n+=", "),n+=_(e[r]," ");else n=_(e,", ");return t||"!important"!==e[e.length-1]||(n+=" !important"),n};function S(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}function x(e,t,n){void 0===n&&(n={});var r="";if(!t)return r;var i=n.indent,o=void 0===i?0:i,s=t.fallbacks;if(e&&o++,s)if(Array.isArray(s))for(var a=0;a<s.length;a++){var l=s[a];for(var u in l){var c=l[u];null!=c&&(r&&(r+="\n"),r+=S(u+": "+E(c)+";",o))}}else for(var h in s){var f=s[h];null!=f&&(r&&(r+="\n"),r+=S(h+": "+E(f)+";",o))}for(var d in t){var p=t[d];null!=p&&"fallbacks"!==d&&(r&&(r+="\n"),r+=S(d+": "+E(p)+";",o))}return(r||n.allowEmpty)&&e?(r&&(r="\n"+r+"\n"),S(e+" {"+r,--o)+S("}",o)):r}var I=/([[\].#*$><+~=|^:(),"'`\s])/g,C="undefined"!=typeof CSS&&CSS.escape,O=function(e){return C?C(e):e.replace(I,"\\$1")},R=function(){function e(e,t,n){this.type="style",this.key=void 0,this.isProcessed=!1,this.style=void 0,this.renderer=void 0,this.renderable=void 0,this.options=void 0;var r=n.sheet,i=n.Renderer;this.key=e,this.options=n,this.style=t,r?this.renderer=r.renderer:i&&(this.renderer=new i)}return e.prototype.prop=function(e,t,n){if(void 0===t)return this.style[e];var r=!!n&&n.force;if(!r&&this.style[e]===t)return this;var i=t;n&&!1===n.process||(i=this.options.jss.plugins.onChangeValue(t,e,this));var o=null==i||!1===i,s=e in this.style;if(o&&!s&&!r)return this;var a=o&&s;if(a?delete this.style[e]:this.style[e]=i,this.renderable&&this.renderer)return a?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,i),this;var l=this.options.sheet;return l&&l.attached,this},e}(),P=function(e){function t(t,n,r){var i;(i=e.call(this,t,n,r)||this).selectorText=void 0,i.id=void 0,i.renderable=void 0;var o=r.selector,s=r.scoped,a=r.sheet,l=r.generateId;return o?i.selectorText=o:!1!==s&&(i.id=l(b(b(i)),a),i.selectorText="."+O(i.id)),i}y(t,e);var n=t.prototype;return n.applyTo=function(e){var t=this.renderer;if(t){var n=this.toJSON();for(var r in n)t.setProperty(e,r,n[r])}return this},n.toJSON=function(){var e={};for(var t in this.style){var n=this.style[t];"object"!=typeof n?e[t]=n:Array.isArray(n)&&(e[t]=E(n))}return e},n.toString=function(e){var t=this.options.sheet,n=!!t&&t.options.link?a({},e,{allowEmpty:!0}):e;return x(this.selectorText,this.style,n)},v(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,n=this.renderable;if(n&&t)t.setSelector(n,e)||t.replaceRule(n,this)}},get:function(){return this.selectorText}}]),t}(R),A={onCreateRule:function(e,t,n){return"@"===e[0]||n.parent&&"keyframes"===n.parent.type?null:new P(e,t,n)}},N={indent:1,children:!0},L=/@([\w-]+)/,M=function(){function e(e,t,n){this.type="conditional",this.at=void 0,this.key=void 0,this.query=void 0,this.rules=void 0,this.options=void 0,this.isProcessed=!1,this.renderable=void 0,this.key=e;var r=e.match(L);for(var i in this.at=r?r[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new ie(a({},n,{parent:this})),t)this.rules.add(i,t[i]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.indexOf=function(e){return this.rules.indexOf(e)},t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r?(this.options.jss.plugins.onProcessRule(r),r):null},t.toString=function(e){if(void 0===e&&(e=N),null==e.indent&&(e.indent=N.indent),null==e.children&&(e.children=N.children),!1===e.children)return this.query+" {}";var t=this.rules.toString(e);return t?this.query+" {\n"+t+"\n}":""},e}(),D=/@media|@supports\s+/,j={onCreateRule:function(e,t,n){return D.test(e)?new M(e,t,n):null}},U={indent:1,children:!0},F=/@keyframes\s+([\w-]+)/,z=function(){function e(e,t,n){this.type="keyframes",this.at="@keyframes",this.key=void 0,this.name=void 0,this.id=void 0,this.rules=void 0,this.options=void 0,this.isProcessed=!1,this.renderable=void 0;var r=e.match(F);r&&r[1]?this.name=r[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var i=n.scoped,o=n.sheet,s=n.generateId;for(var l in this.id=!1===i?this.name:O(s(this,o)),this.rules=new ie(a({},n,{parent:this})),t)this.rules.add(l,t[l],a({},n,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){if(void 0===e&&(e=U),null==e.indent&&(e.indent=U.indent),null==e.children&&(e.children=U.children),!1===e.children)return this.at+" "+this.id+" {}";var t=this.rules.toString(e);return t&&(t="\n"+t+"\n"),this.at+" "+this.id+" {"+t+"}"},e}(),V=/@keyframes\s+/,H=/\$([\w-]+)/g,B=function(e,t){return"string"==typeof e?e.replace(H,(function(e,n){return n in t?t[n]:e})):e},W=function(e,t,n){var r=e[t],i=B(r,n);i!==r&&(e[t]=i)},$={onCreateRule:function(e,t,n){return"string"==typeof e&&V.test(e)?new z(e,t,n):null},onProcessStyle:function(e,t,n){return"style"===t.type&&n?("animation-name"in e&&W(e,"animation-name",n.keyframes),"animation"in e&&W(e,"animation",n.keyframes),e):e},onChangeValue:function(e,t,n){var r=n.options.sheet;if(!r)return e;switch(t){case"animation":case"animation-name":return B(e,r.keyframes);default:return e}}},q=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).renderable=void 0,t}return y(t,e),t.prototype.toString=function(e){var t=this.options.sheet,n=!!t&&t.options.link?a({},e,{allowEmpty:!0}):e;return x(this.key,this.style,n)},t}(R),K={onCreateRule:function(e,t,n){return n.parent&&"keyframes"===n.parent.type?new q(e,t,n):null}},G=function(){function e(e,t,n){this.type="font-face",this.at="@font-face",this.key=void 0,this.style=void 0,this.options=void 0,this.isProcessed=!1,this.renderable=void 0,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){if(Array.isArray(this.style)){for(var t="",n=0;n<this.style.length;n++)t+=x(this.at,this.style[n]),this.style[n+1]&&(t+="\n");return t}return x(this.at,this.style,e)},e}(),X=/@font-face/,Q={onCreateRule:function(e,t,n){return X.test(e)?new G(e,t,n):null}},Y=function(){function e(e,t,n){this.type="viewport",this.at="@viewport",this.key=void 0,this.style=void 0,this.options=void 0,this.isProcessed=!1,this.renderable=void 0,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){return x(this.key,this.style,e)},e}(),J={onCreateRule:function(e,t,n){return"@viewport"===e||"@-ms-viewport"===e?new Y(e,t,n):null}},Z=function(){function e(e,t,n){this.type="simple",this.key=void 0,this.value=void 0,this.options=void 0,this.isProcessed=!1,this.renderable=void 0,this.key=e,this.value=t,this.options=n}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",n=0;n<this.value.length;n++)t+=this.key+" "+this.value[n]+";",this.value[n+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),ee={"@charset":!0,"@import":!0,"@namespace":!0},te=[A,j,$,K,Q,J,{onCreateRule:function(e,t,n){return e in ee?new Z(e,t,n):null}}],ne={process:!0},re={force:!0,process:!0},ie=function(){function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=void 0,this.classes=void 0,this.keyframes=void 0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}var t=e.prototype;return t.add=function(e,t,n){var r=this.options,i=r.parent,o=r.sheet,s=r.jss,l=r.Renderer,u=r.generateId,c=r.scoped,h=a({classes:this.classes,parent:i,sheet:o,jss:s,Renderer:l,generateId:u,scoped:c,name:e,keyframes:this.keyframes,selector:void 0},n),f=e;e in this.raw&&(f=e+"-d"+this.counter++),this.raw[f]=t,f in this.classes&&(h.selector="."+O(this.classes[f]));var d=T(f,t,h);if(!d)return null;this.register(d);var p=void 0===h.index?this.index.length:h.index;return this.index.splice(p,0,d),d},t.get=function(e){return this.map[e]},t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},t.indexOf=function(e){return this.index.indexOf(e)},t.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},t.register=function(e){this.map[e.key]=e,e instanceof P?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof z&&this.keyframes&&(this.keyframes[e.name]=e.id)},t.unregister=function(e){delete this.map[e.key],e instanceof P?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof z&&delete this.keyframes[e.name]},t.update=function(){var e,t,n;if("string"==typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.map[e],t,n);else for(var r=0;r<this.index.length;r++)this.updateOne(this.index[r],t,n)},t.updateOne=function(t,n,r){void 0===r&&(r=ne);var i=this.options,o=i.jss.plugins,s=i.sheet;if(t.rules instanceof e)t.rules.update(n,r);else{var a=t,l=a.style;if(o.onUpdate(n,t,s,r),r.process&&l&&l!==a.style){for(var u in o.onProcessStyle(a.style,a,s),a.style){var c=a.style[u];c!==l[u]&&a.prop(u,c,re)}for(var h in l){var f=a.style[h],d=l[h];null==f&&f!==d&&a.prop(h,null,re)}}}},t.toString=function(e){for(var t="",n=this.options.sheet,r=!!n&&n.options.link,i=0;i<this.index.length;i++){var o=this.index[i].toString(e);(o||r)&&(t&&(t+="\n"),t+=o)}return t},e}(),oe=function(){function e(e,t){for(var n in this.options=void 0,this.deployed=void 0,this.attached=void 0,this.rules=void 0,this.renderer=void 0,this.classes=void 0,this.keyframes=void 0,this.queue=void 0,this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=a({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new ie(this.options),e)this.rules.add(n,e[n]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(e,t,n){var r=this.queue;this.attached&&!r&&(this.queue=[]);var i=this.rules.add(e,t,n);return i?(this.options.jss.plugins.onProcessRule(i),this.attached?this.deployed?(r?r.push(i):(this.insertRule(i),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0)),i):i:(this.deployed=!1,i)):null},t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},t.addRules=function(e,t){var n=[];for(var r in e){var i=this.addRule(r,e[r],t);i&&n.push(i)}return n},t.getRule=function(e){return this.rules.get(e)},t.deleteRule=function(e){var t="object"==typeof e?e:this.rules.get(e);return!(!t||this.attached&&!t.renderable)&&(this.rules.remove(t),!(this.attached&&t.renderable&&this.renderer)||this.renderer.deleteRule(t.renderable))},t.indexOf=function(e){return this.rules.indexOf(e)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},t.updateOne=function(e,t,n){return this.rules.updateOne(e,t,n),this},t.toString=function(e){return this.rules.toString(e)},e}(),se=function(){function e(){this.plugins={internal:[],external:[]},this.registry=void 0}var t=e.prototype;return t.onCreateRule=function(e,t,n){for(var r=0;r<this.registry.onCreateRule.length;r++){var i=this.registry.onCreateRule[r](e,t,n);if(i)return i}return null},t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,n=0;n<this.registry.onProcessRule.length;n++)this.registry.onProcessRule[n](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}},t.onProcessStyle=function(e,t,n){for(var r=0;r<this.registry.onProcessStyle.length;r++)t.style=this.registry.onProcessStyle[r](t.style,t,n)},t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)},t.onUpdate=function(e,t,n,r){for(var i=0;i<this.registry.onUpdate.length;i++)this.registry.onUpdate[i](e,t,n,r)},t.onChangeValue=function(e,t,n){for(var r=e,i=0;i<this.registry.onChangeValue.length;i++)r=this.registry.onChangeValue[i](r,t,n);return r},t.use=function(e,t){void 0===t&&(t={queue:"external"});var n=this.plugins[t.queue];-1===n.indexOf(e)&&(n.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce((function(e,t){for(var n in t)n in e&&e[n].push(t[n]);return e}),{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),ae=new(function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(e){var t=this.registry,n=e.options.index;if(-1===t.indexOf(e))if(0===t.length||n>=this.index)t.push(e);else for(var r=0;r<t.length;r++)if(t[r].options.index>n)return void t.splice(r,0,e)},t.reset=function(){this.registry=[]},t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)},t.toString=function(e){for(var t=void 0===e?{}:e,n=t.attached,r=l(t,["attached"]),i="",o=0;o<this.registry.length;o++){var s=this.registry[o];null!=n&&s.attached!==n||(i&&(i+="\n"),i+=s.toString(r))}return i},v(e,[{key:"index",get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e}()),le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),ue="2f1acc6c3a606b082e5eef5e54414ffb";null==le[ue]&&(le[ue]=0);var ce=le[ue]++,he=function(e){void 0===e&&(e={});var t=0;return function(n,r){t+=1;var i="",o="";return r&&(r.options.classNamePrefix&&(o=r.options.classNamePrefix),null!=r.options.jss.id&&(i=String(r.options.jss.id))),e.minify?""+(o||"c")+ce+i+t:o+n.key+"-"+ce+(i?"-"+i:"")+"-"+t}},fe=function(e){var t;return function(){return t||(t=e()),t}},de=function(e,t){try{return e.attributeStyleMap?e.attributeStyleMap.get(t):e.style.getPropertyValue(t)}catch(e){return""}},pe=function(e,t,n){try{var r=n;if(Array.isArray(n)&&(r=E(n,!0),"!important"===n[n.length-1]))return e.style.setProperty(t,r,"important"),!0;e.attributeStyleMap?e.attributeStyleMap.set(t,r):e.style.setProperty(t,r)}catch(e){return!1}return!0},ge=function(e,t){try{e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(e){}},me=function(e,t){return e.selectorText=t,e.selectorText===t},ve=fe((function(){return document.querySelector("head")}));function ye(e){var t=ae.registry;if(t.length>0){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if((n=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e))&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=e.insertionPoint;if(r&&"string"==typeof r){var i=function(e){for(var t=ve(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(8===r.nodeType&&r.nodeValue.trim()===e)return r}return null}(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}var be=fe((function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null})),we=function(e,t,n){try{if("insertRule"in e)e.insertRule(t,n);else if("appendRule"in e){e.appendRule(t)}}catch(e){return!1}return e.cssRules[n]},ke=function(e,t){var n=e.cssRules.length;return void 0===t||t>n?n:t},Te=function(){function e(e){this.getPropertyValue=de,this.setProperty=pe,this.removeProperty=ge,this.setSelector=me,this.element=void 0,this.sheet=void 0,this.hasInsertedRules=!1,this.cssRules=[],e&&ae.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},n=t.media,r=t.meta,i=t.element;this.element=i||function(){var e=document.createElement("style");return e.textContent="\n",e}(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),r&&this.element.setAttribute("data-meta",r);var o=be();o&&this.element.setAttribute("nonce",o)}var t=e.prototype;return t.attach=function(){if(!this.element.parentNode&&this.sheet){!function(e,t){var n=t.insertionPoint,r=ye(t);if(!1!==r&&r.parent)r.parent.insertBefore(e,r.node);else if(n&&"number"==typeof n.nodeType){var i=n,o=i.parentNode;o&&o.insertBefore(e,i.nextSibling)}else ve().appendChild(e)}(this.element,this.sheet.options);var e=Boolean(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}},t.deploy=function(){var e=this.sheet;e&&(e.options.link?this.insertRules(e.rules):this.element.textContent="\n"+e.toString()+"\n")},t.insertRules=function(e,t){for(var n=0;n<e.index.length;n++)this.insertRule(e.index[n],n,t)},t.insertRule=function(e,t,n){if(void 0===n&&(n=this.element.sheet),e.rules){var r=e,i=n;if("conditional"===e.type||"keyframes"===e.type){var o=ke(n,t);if(!1===(i=we(n,r.toString({children:!1}),o)))return!1;this.refCssRule(e,o,i)}return this.insertRules(r.rules,i),i}var s=e.toString();if(!s)return!1;var a=ke(n,t),l=we(n,s,a);return!1!==l&&(this.hasInsertedRules=!0,this.refCssRule(e,a,l),l)},t.refCssRule=function(e,t,n){e.renderable=n,e.options.parent instanceof oe&&(this.cssRules[t]=n)},t.deleteRule=function(e){var t=this.element.sheet,n=this.indexOf(e);return-1!==n&&(t.deleteRule(n),this.cssRules.splice(n,1),!0)},t.indexOf=function(e){return this.cssRules.indexOf(e)},t.replaceRule=function(e,t){var n=this.indexOf(e);return-1!==n&&(this.element.sheet.deleteRule(n),this.cssRules.splice(n,1),this.insertRule(t,n))},t.getRules=function(){return this.element.sheet.cssRules},e}(),_e=0,Ee=function(){function e(e){this.id=_e++,this.version="10.7.1",this.plugins=new se,this.options={id:{minify:!1},createGenerateId:he,Renderer:g?Te:null,plugins:[]},this.generateId=he({minify:!1});for(var t=0;t<te.length;t++)this.plugins.use(te[t],{queue:"internal"});this.setup(e)}var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=a({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},t.createStyleSheet=function(e,t){void 0===t&&(t={});var n=t.index;"number"!=typeof n&&(n=0===ae.index?0:ae.index+1);var r=new oe(e,a({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(r),r},t.removeStyleSheet=function(e){return e.detach(),ae.remove(e),this},t.createRule=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),"object"==typeof e)return this.createRule(void 0,e,t);var r=a({},n,{name:e,jss:this,Renderer:this.options.Renderer});r.generateId||(r.generateId=this.generateId),r.classes||(r.classes={}),r.keyframes||(r.keyframes={});var i=T(e,t,r);return i&&this.plugins.onProcessRule(i),i},t.use=function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach((function(t){e.plugins.use(t)})),this},e}();var Se="object"==typeof CSS&&null!=CSS&&"number"in CSS,xe=function(e){return new Ee(e)};
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */xe();function Ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseClasses,n=e.newClasses;e.Component;if(!n)return t;var r=a({},t);return Object.keys(n).forEach((function(e){n[e]&&(r[e]="".concat(t[e]," ").concat(n[e]))})),r}var Ce={set:function(e,t,n,r){var i=e.get(t);i||(i=new Map,e.set(t,i)),i.set(n,r)},get:function(e,t,n){var r=e.get(t);return r?r.get(n):void 0},delete:function(e,t,n){e.get(t).delete(n)}};var Oe=i.a.createContext(null);function Re(){return i.a.useContext(Oe)}var Pe="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",Ae=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var Ne=Date.now(),Le="fnValues"+Ne,Me="fnStyle"+ ++Ne,De=function(){return{onCreateRule:function(e,t,n){if("function"!=typeof t)return null;var r=T(e,{},n);return r[Me]=t,r},onProcessStyle:function(e,t){if(Le in t||Me in t)return e;var n={};for(var r in e){var i=e[r];"function"==typeof i&&(delete e[r],n[r]=i)}return t[Le]=n,e},onUpdate:function(e,t,n,r){var i=t,o=i[Me];o&&(i.style=o(e)||{});var s=i[Le];if(s)for(var a in s)i.prop(a,s[a](e),r)}}},je="@global",Ue=function(){function e(e,t,n){for(var r in this.type="global",this.at=je,this.rules=void 0,this.options=void 0,this.key=void 0,this.isProcessed=!1,this.key=e,this.options=n,this.rules=new ie(a({},n,{parent:this})),t)this.rules.add(r,t[r]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r},t.indexOf=function(e){return this.rules.indexOf(e)},t.toString=function(){return this.rules.toString()},e}(),Fe=function(){function e(e,t,n){this.type="global",this.at=je,this.options=void 0,this.rule=void 0,this.isProcessed=!1,this.key=void 0,this.key=e,this.options=n;var r=e.substr("@global ".length);this.rule=n.jss.createRule(r,t,a({},n,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),ze=/\s*,\s*/g;function Ve(e,t){for(var n=e.split(ze),r="",i=0;i<n.length;i++)r+=t+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}var He=function(){return{onCreateRule:function(e,t,n){if(!e)return null;if(e===je)return new Ue(e,t,n);if("@"===e[0]&&"@global "===e.substr(0,"@global ".length))return new Fe(e,t,n);var r=n.parent;return r&&("global"===r.type||r.options.parent&&"global"===r.options.parent.type)&&(n.scoped=!1),!1===n.scoped&&(n.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(function(e,t){var n=e.options,r=e.style,i=r?r[je]:null;if(i){for(var o in i)t.addRule(o,i[o],a({},n,{selector:Ve(o,e.selector)}));delete r[je]}}(e,t),function(e,t){var n=e.options,r=e.style;for(var i in r)if("@"===i[0]&&i.substr(0,je.length)===je){var o=Ve(i.substr(je.length),e.selector);t.addRule(o,r[i],a({},n,{selector:o})),delete r[i]}}(e,t))}}},Be=/\s*,\s*/g,We=/&/g,$e=/\$([\w-]+)/g;var qe=function(){function e(e,t){return function(n,r){var i=e.getRule(r)||t&&t.getRule(r);return i?(i=i).selector:r}}function t(e,t){for(var n=t.split(Be),r=e.split(Be),i="",o=0;o<n.length;o++)for(var s=n[o],a=0;a<r.length;a++){var l=r[a];i&&(i+=", "),i+=-1!==l.indexOf("&")?l.replace(We,s):s+" "+l}return i}function n(e,t,n){if(n)return a({},n,{index:n.index+1});var r=e.options.nestingLevel;r=void 0===r?1:r+1;var i=a({},e.options,{nestingLevel:r,index:t.indexOf(e)+1});return delete i.name,i}return{onProcessStyle:function(r,i,o){if("style"!==i.type)return r;var s,l,u=i,c=u.options.parent;for(var h in r){var f=-1!==h.indexOf("&"),d="@"===h[0];if(f||d){if(s=n(u,c,s),f){var p=t(h,u.selector);l||(l=e(c,o)),p=p.replace($e,l),c.addRule(p,r[h],a({},s,{selector:p}))}else d&&c.addRule(h,{},s).addRule(u.key,r[h],{selector:u.selector});delete r[h]}}return r}}},Ke=/[A-Z]/g,Ge=/^ms-/,Xe={};function Qe(e){return"-"+e.toLowerCase()}var Ye=function(e){if(Xe.hasOwnProperty(e))return Xe[e];var t=e.replace(Ke,Qe);return Xe[e]=Ge.test(t)?"-"+t:t};function Je(e){var t={};for(var n in e){t[0===n.indexOf("--")?n:Ye(n)]=e[n]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(Je):t.fallbacks=Je(e.fallbacks)),t}var Ze=function(){return{onProcessStyle:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)e[t]=Je(e[t]);return e}return Je(e)},onChangeValue:function(e,t,n){if(0===t.indexOf("--"))return e;var r=Ye(t);return t===r?e:(n.prop(r,e),null)}}},et=Se&&CSS?CSS.px:"px",tt=Se&&CSS?CSS.ms:"ms",nt=Se&&CSS?CSS.percent:"%";function rt(e){var t=/(-[a-z])/g,n=function(e){return e[1].toUpperCase()},r={};for(var i in e)r[i]=e[i],r[i.replace(t,n)]=e[i];return r}var it=rt({"animation-delay":tt,"animation-duration":tt,"background-position":et,"background-position-x":et,"background-position-y":et,"background-size":et,border:et,"border-bottom":et,"border-bottom-left-radius":et,"border-bottom-right-radius":et,"border-bottom-width":et,"border-left":et,"border-left-width":et,"border-radius":et,"border-right":et,"border-right-width":et,"border-top":et,"border-top-left-radius":et,"border-top-right-radius":et,"border-top-width":et,"border-width":et,"border-block":et,"border-block-end":et,"border-block-end-width":et,"border-block-start":et,"border-block-start-width":et,"border-block-width":et,"border-inline":et,"border-inline-end":et,"border-inline-end-width":et,"border-inline-start":et,"border-inline-start-width":et,"border-inline-width":et,"border-start-start-radius":et,"border-start-end-radius":et,"border-end-start-radius":et,"border-end-end-radius":et,margin:et,"margin-bottom":et,"margin-left":et,"margin-right":et,"margin-top":et,"margin-block":et,"margin-block-end":et,"margin-block-start":et,"margin-inline":et,"margin-inline-end":et,"margin-inline-start":et,padding:et,"padding-bottom":et,"padding-left":et,"padding-right":et,"padding-top":et,"padding-block":et,"padding-block-end":et,"padding-block-start":et,"padding-inline":et,"padding-inline-end":et,"padding-inline-start":et,"mask-position-x":et,"mask-position-y":et,"mask-size":et,height:et,width:et,"min-height":et,"max-height":et,"min-width":et,"max-width":et,bottom:et,left:et,top:et,right:et,inset:et,"inset-block":et,"inset-block-end":et,"inset-block-start":et,"inset-inline":et,"inset-inline-end":et,"inset-inline-start":et,"box-shadow":et,"text-shadow":et,"column-gap":et,"column-rule":et,"column-rule-width":et,"column-width":et,"font-size":et,"font-size-delta":et,"letter-spacing":et,"text-decoration-thickness":et,"text-indent":et,"text-stroke":et,"text-stroke-width":et,"word-spacing":et,motion:et,"motion-offset":et,outline:et,"outline-offset":et,"outline-width":et,perspective:et,"perspective-origin-x":nt,"perspective-origin-y":nt,"transform-origin":nt,"transform-origin-x":nt,"transform-origin-y":nt,"transform-origin-z":nt,"transition-delay":tt,"transition-duration":tt,"vertical-align":et,"flex-basis":et,"shape-margin":et,size:et,gap:et,grid:et,"grid-gap":et,"row-gap":et,"grid-row-gap":et,"grid-column-gap":et,"grid-template-rows":et,"grid-template-columns":et,"grid-auto-rows":et,"grid-auto-columns":et,"box-shadow-x":et,"box-shadow-y":et,"box-shadow-blur":et,"box-shadow-spread":et,"font-line-height":et,"text-shadow-x":et,"text-shadow-y":et,"text-shadow-blur":et});function ot(e,t,n){if(null==t)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=ot(e,t[r],n);else if("object"==typeof t)if("fallbacks"===e)for(var i in t)t[i]=ot(i,t[i],n);else for(var o in t)t[o]=ot(e+"-"+o,t[o],n);else if("number"==typeof t&&!1===isNaN(t)){var s=n[e]||it[e];return!s||0===t&&s===et?t.toString():"function"==typeof s?s(t).toString():""+t+s}return t}var st=function(e){void 0===e&&(e={});var t=rt(e);return{onProcessStyle:function(e,n){if("style"!==n.type)return e;for(var r in e)e[r]=ot(r,e[r],t);return e},onChangeValue:function(e,n){return ot(n,e,t)}}};function at(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lt(e,t){if(e){if("string"==typeof e)return at(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(e,t):void 0}}function ut(e){return function(e){if(Array.isArray(e))return at(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||lt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ct="",ht="",ft="",dt="",pt=g&&"ontouchstart"in document.documentElement;if(g){var gt={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},mt=document.createElement("p").style;for(var vt in gt)if(vt+"Transform"in mt){ct=vt,ht=gt[vt];break}"Webkit"===ct&&"msHyphens"in mt&&(ct="ms",ht=gt.ms,dt="edge"),"Webkit"===ct&&"-apple-trailing-word"in mt&&(ft="apple")}var yt=ct,bt=ht,wt=ft,kt=dt,Tt=pt;var _t={noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===yt?"-webkit-"+e:bt+e)}},Et={noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===yt?bt+"print-"+e:e)}},St=/[-\s]+(.)?/g;function xt(e,t){return t?t.toUpperCase():""}function It(e){return e.replace(St,xt)}function Ct(e){return It("-"+e)}var Ot,Rt={noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===yt){if(It("mask-image")in t)return e;if(yt+Ct("mask-image")in t)return bt+e}return e}},Pt={noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==wt||Tt?e:bt+e)}},At={noPrefill:["transform"],supportedProperty:function(e,t,n){return"transform"===e&&(n.transform?e:bt+e)}},Nt={noPrefill:["transition"],supportedProperty:function(e,t,n){return"transition"===e&&(n.transition?e:bt+e)}},Lt={noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===yt||"ms"===yt&&"edge"!==kt?bt+e:e)}},Mt={noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===yt||"ms"===yt||"apple"===wt?bt+e:e)}},Dt={supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===yt?"WebkitColumn"+Ct(e)in t&&bt+"column-"+e:"Moz"===yt&&("page"+Ct(e)in t&&"page-"+e))}},jt={supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===yt)return e;var n=e.replace("-inline","");return yt+Ct(n)in t&&bt+n}},Ut={supportedProperty:function(e,t){return It(e)in t&&e}},Ft={supportedProperty:function(e,t){var n=Ct(e);return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:yt+n in t?bt+e:"Webkit"!==yt&&"Webkit"+n in t&&"-webkit-"+e}},zt={supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===yt?""+bt+e:e)}},Vt={supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===yt?bt+"scroll-chaining":e)}},Ht={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},Bt={supportedProperty:function(e,t){var n=Ht[e];return!!n&&(yt+Ct(n)in t&&bt+n)}},Wt={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},$t=Object.keys(Wt),qt=function(e){return bt+e},Kt=[_t,Et,Rt,Pt,At,Nt,Lt,Mt,Dt,jt,Ut,Ft,zt,Vt,Bt,{supportedProperty:function(e,t,n){var r=n.multiple;if($t.indexOf(e)>-1){var i=Wt[e];if(!Array.isArray(i))return yt+Ct(i)in t&&bt+i;if(!r)return!1;for(var o=0;o<i.length;o++)if(!(yt+Ct(i[0])in t))return!1;return i.map(qt)}return!1}}],Gt=Kt.filter((function(e){return e.supportedProperty})).map((function(e){return e.supportedProperty})),Xt=Kt.filter((function(e){return e.noPrefill})).reduce((function(e,t){return e.push.apply(e,ut(t.noPrefill)),e}),[]),Qt={};if(g){Ot=document.createElement("p");var Yt=window.getComputedStyle(document.documentElement,"");for(var Jt in Yt)isNaN(Jt)||(Qt[Yt[Jt]]=Yt[Jt]);Xt.forEach((function(e){return delete Qt[e]}))}function Zt(e,t){if(void 0===t&&(t={}),!Ot)return e;if(null!=Qt[e])return Qt[e];"transition"!==e&&"transform"!==e||(t[e]=e in Ot.style);for(var n=0;n<Gt.length&&(Qt[e]=Gt[n](e,Ot.style,t),!Qt[e]);n++);try{Ot.style[e]=""}catch(e){return!1}return Qt[e]}var en,tn={},nn={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},rn=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;function on(e,t,n){if("var"===t)return"var";if("all"===t)return"all";if("all"===n)return", all";var r=t?Zt(t):", "+Zt(n);return r||(t||n)}function sn(e,t){var n=t;if(!en||"content"===e)return t;if("string"!=typeof n||!isNaN(parseInt(n,10)))return n;var r=e+n;if(null!=tn[r])return tn[r];try{en.style[e]=n}catch(e){return tn[r]=!1,!1}if(nn[e])n=n.replace(rn,on);else if(""===en.style[e]&&("-ms-flex"===(n=bt+n)&&(en.style[e]="-ms-flexbox"),en.style[e]=n,""===en.style[e]))return tn[r]=!1,!1;return en.style[e]="",tn[r]=n,tn[r]}g&&(en=document.createElement("p"));var an=function(){function e(t){for(var n in t){var r=t[n];if("fallbacks"===n&&Array.isArray(r))t[n]=r.map(e);else{var i=!1,o=Zt(n);o&&o!==n&&(i=!0);var s=!1,a=sn(o,E(r));a&&a!==r&&(s=!0),(i||s)&&(i&&delete t[n],t[o||n]=a||r)}}return t}return{onProcessRule:function(e){if("keyframes"===e.type){var t=e;t.at="-"===(n=t.at)[1]||"ms"===yt?n:"@"+bt+"keyframes"+n.substr(10)}var n},onProcessStyle:function(t,n){return"style"!==n.type?t:e(t)},onChangeValue:function(e,t){return sn(t,E(e))||e}}};var ln=function(){var e=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length};return{onProcessStyle:function(t,n){if("style"!==n.type)return t;for(var r={},i=Object.keys(t).sort(e),o=0;o<i.length;o++)r[i[o]]=t[i[o]];return r}}};function un(){return{plugins:[De(),He(),qe(),Ze(),st(),"undefined"==typeof window?null:an(),ln()]}}var cn=xe(un()),hn={disableGeneration:!1,generateClassName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disableGlobal,n=void 0!==t&&t,r=e.productionPrefix,i=void 0===r?"jss":r,o=e.seed,s=void 0===o?"":o,a=""===s?"":"".concat(s,"-"),l=0,u=function(){return l+=1};return function(e,t){var r=t.options.name;if(r&&0===r.indexOf("Mui")&&!t.options.link&&!n){if(-1!==Ae.indexOf(e.key))return"Mui-".concat(e.key);var o="".concat(a).concat(r,"-").concat(e.key);return t.options.theme[Pe]&&""===s?"".concat(o,"-").concat(u()):o}return"".concat(a).concat(i).concat(u())}}(),jss:cn,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},fn=i.a.createContext(hn);var dn=-1e9;function pn(){return dn+=1}function gn(e){return(gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function mn(e){return e&&"object"===gn(e)&&e.constructor===Object}function vn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},r=n.clone?a({},e):e;return mn(e)&&mn(t)&&Object.keys(t).forEach((function(i){"__proto__"!==i&&(mn(t[i])&&i in e?r[i]=vn(e[i],t[i],n):r[i]=t[i])})),r}function yn(e){var t="function"==typeof e;return{create:function(n,r){var i;try{i=t?e(n):e}catch(e){throw e}if(!r||!n.overrides||!n.overrides[r])return i;var o=n.overrides[r],s=a({},i);return Object.keys(o).forEach((function(e){s[e]=vn(s[e],o[e])})),s},options:{}}}var bn={};function wn(e,t,n){var r=e.state;if(e.stylesOptions.disableGeneration)return t||{};r.cacheClasses||(r.cacheClasses={value:null,lastProp:null,lastJSS:{}});var i=!1;return r.classes!==r.cacheClasses.lastJSS&&(r.cacheClasses.lastJSS=r.classes,i=!0),t!==r.cacheClasses.lastProp&&(r.cacheClasses.lastProp=t,i=!0),i&&(r.cacheClasses.value=Ie({baseClasses:r.cacheClasses.lastJSS,newClasses:t,Component:n})),r.cacheClasses.value}function kn(e,t){var n=e.state,r=e.theme,i=e.stylesOptions,o=e.stylesCreator,s=e.name;if(!i.disableGeneration){var l=Ce.get(i.sheetsManager,o,r);l||(l={refs:0,staticSheet:null,dynamicStyles:null},Ce.set(i.sheetsManager,o,r,l));var u=a({},o.options,i,{theme:r,flip:"boolean"==typeof i.flip?i.flip:"rtl"===r.direction});u.generateId=u.serverGenerateClassName||u.generateClassName;var c=i.sheetsRegistry;if(0===l.refs){var h;i.sheetsCache&&(h=Ce.get(i.sheetsCache,o,r));var f=o.create(r,s);h||((h=i.jss.createStyleSheet(f,a({link:!1},u))).attach(),i.sheetsCache&&Ce.set(i.sheetsCache,o,r,h)),c&&c.add(h),l.staticSheet=h,l.dynamicStyles=function e(t){var n=null;for(var r in t){var i=t[r],o=typeof i;if("function"===o)n||(n={}),n[r]=i;else if("object"===o&&null!==i&&!Array.isArray(i)){var s=e(i);s&&(n||(n={}),n[r]=s)}}return n}(f)}if(l.dynamicStyles){var d=i.jss.createStyleSheet(l.dynamicStyles,a({link:!0},u));d.update(t),d.attach(),n.dynamicSheet=d,n.classes=Ie({baseClasses:l.staticSheet.classes,newClasses:d.classes}),c&&c.add(d)}else n.classes=l.staticSheet.classes;l.refs+=1}}function Tn(e,t){var n=e.state;n.dynamicSheet&&n.dynamicSheet.update(t)}function _n(e){var t=e.state,n=e.theme,r=e.stylesOptions,i=e.stylesCreator;if(!r.disableGeneration){var o=Ce.get(r.sheetsManager,i,n);o.refs-=1;var s=r.sheetsRegistry;0===o.refs&&(Ce.delete(r.sheetsManager,i,n),r.jss.removeStyleSheet(o.staticSheet),s&&s.remove(o.staticSheet)),t.dynamicSheet&&(r.jss.removeStyleSheet(t.dynamicSheet),s&&s.remove(t.dynamicSheet))}}function En(e,t){var n,r=i.a.useRef([]),o=i.a.useMemo((function(){return{}}),t);r.current!==o&&(r.current=o,n=e()),i.a.useEffect((function(){return function(){n&&n()}}),[o])}function Sn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.name,r=t.classNamePrefix,o=t.Component,s=t.defaultTheme,l=void 0===s?bn:s,c=u(t,["name","classNamePrefix","Component","defaultTheme"]),h=yn(e),f=n||r||"makeStyles";h.options={index:pn(),name:n,meta:f,classNamePrefix:f};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Re()||l,r=a({},i.a.useContext(fn),c),s=i.a.useRef(),u=i.a.useRef();En((function(){var i={name:n,state:{},stylesCreator:h,stylesOptions:r,theme:t};return kn(i,e),u.current=!1,s.current=i,function(){_n(i)}}),[t,h]),i.a.useEffect((function(){u.current&&Tn(s.current,e),u.current=!0}));var f=wn(s.current,e.classes,o);return f};return d}function xn(e){var t=e.theme,n=e.name,r=e.props;if(!t||!t.props||!t.props[n])return r;var i,o=t.props[n];for(i in o)void 0===r[i]&&(r[i]=o[i]);return r}var In=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){var r=t.defaultTheme,o=t.withTheme,s=void 0!==o&&o,l=t.name,c=u(t,["defaultTheme","withTheme","name"]);var h=l,f=Sn(e,a({defaultTheme:r,Component:n,name:l||n.displayName,classNamePrefix:h},c)),p=i.a.forwardRef((function(e,t){e.classes;var o,c=e.innerRef,h=u(e,["classes","innerRef"]),d=f(a({},n.defaultProps,e)),p=h;return("string"==typeof l||s)&&(o=Re()||r,l&&(p=xn({theme:o,name:l,props:h})),s&&!p.theme&&(p.theme=o)),i.a.createElement(n,a({ref:c||t,classes:d},p))}));return d()(p,n),p}};function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var On=["xs","sm","md","lg","xl"];function Rn(e){var t=e.values,n=void 0===t?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,r=e.unit,i=void 0===r?"px":r,o=e.step,s=void 0===o?5:o,l=u(e,["values","unit","step"]);function c(e){var t="number"==typeof n[e]?n[e]:e;return"@media (min-width:".concat(t).concat(i,")")}function h(e,t){var r=On.indexOf(t);return r===On.length-1?c(e):"@media (min-width:".concat("number"==typeof n[e]?n[e]:e).concat(i,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[On[r+1]]?n[On[r+1]]:t)-s/100).concat(i,")")}return a({keys:On,values:n,up:c,down:function(e){var t=On.indexOf(e)+1,r=n[On[t]];return t===On.length?c("xs"):"@media (max-width:".concat(("number"==typeof r&&t>0?r:e)-s/100).concat(i,")")},between:h,only:function(e){return h(e,e)},width:function(e){return n[e]}},l)}function Pn(e,t,n){var r;return a({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:","\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n")),a({paddingLeft:t(2),paddingRight:t(2)},n,Cn({},e.up("sm"),a({paddingLeft:t(3),paddingRight:t(3)},n[e.up("sm")])))},toolbar:(r={minHeight:56},Cn(r,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),Cn(r,e.up("sm"),{minHeight:64}),r)},n)}function An(e){for(var t="https://material-ui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}var Nn={black:"#000",white:"#fff"},Ln={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},Mn={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},Dn={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},jn={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Un={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Fn={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},zn={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function Vn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function Hn(e){if(e.type)return e;if("#"===e.charAt(0))return Hn(function(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(An(3,e));var r=e.substring(t+1,e.length-1).split(",");return{type:n,values:r=r.map((function(e){return parseFloat(e)}))}}function Bn(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function Wn(e){var t="hsl"===(e=Hn(e)).type?Hn(function(e){var t=(e=Hn(e)).values,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return i-o*Math.max(Math.min(t-3,9-t,1),-1)},a="rgb",l=[Math.round(255*s(0)),Math.round(255*s(8)),Math.round(255*s(4))];return"hsla"===e.type&&(a+="a",l.push(t[3])),Bn({type:a,values:l})}(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function $n(e,t){if(e=Hn(e),t=Vn(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return Bn(e)}function qn(e,t){if(e=Hn(e),t=Vn(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return Bn(e)}var Kn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Nn.white,default:Ln[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Gn={text:{primary:Nn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:Ln[800],default:"#303030"},action:{active:Nn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Xn(e,t,n,r){var i=r.light||r,o=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=qn(e.main,i):"dark"===t&&(e.dark=$n(e.main,o)))}function Qn(e){var t=e.primary,n=void 0===t?{light:Mn[300],main:Mn[500],dark:Mn[700]}:t,r=e.secondary,i=void 0===r?{light:Dn.A200,main:Dn.A400,dark:Dn.A700}:r,o=e.error,s=void 0===o?{light:jn[300],main:jn[500],dark:jn[700]}:o,l=e.warning,c=void 0===l?{light:Un[300],main:Un[500],dark:Un[700]}:l,h=e.info,f=void 0===h?{light:Fn[300],main:Fn[500],dark:Fn[700]}:h,d=e.success,p=void 0===d?{light:zn[300],main:zn[500],dark:zn[700]}:d,g=e.type,m=void 0===g?"light":g,v=e.contrastThreshold,y=void 0===v?3:v,b=e.tonalOffset,w=void 0===b?.2:b,k=u(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function T(e){return function(e,t){var n=Wn(e),r=Wn(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,Gn.text.primary)>=y?Gn.text.primary:Kn.text.primary}var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=a({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error(An(4,t));if("string"!=typeof e.main)throw new Error(An(5,JSON.stringify(e.main)));return Xn(e,"light",n,w),Xn(e,"dark",r,w),e.contrastText||(e.contrastText=T(e.main)),e},E={dark:Gn,light:Kn};return vn(a({common:Nn,type:m,primary:_(n),secondary:_(i,"A400","A200","A700"),error:_(s),warning:_(c),info:_(f),success:_(p),grey:Ln,contrastThreshold:y,getContrastText:T,augmentColor:_,tonalOffset:w},E[m]),k)}function Yn(e){return Math.round(1e5*e)/1e5}function Jn(e){return Yn(e)}var Zn={textTransform:"uppercase"};function er(e,t){var n="function"==typeof t?t(e):t,r=n.fontFamily,i=void 0===r?'"Roboto", "Helvetica", "Arial", sans-serif':r,o=n.fontSize,s=void 0===o?14:o,l=n.fontWeightLight,c=void 0===l?300:l,h=n.fontWeightRegular,f=void 0===h?400:h,d=n.fontWeightMedium,p=void 0===d?500:d,g=n.fontWeightBold,m=void 0===g?700:g,v=n.htmlFontSize,y=void 0===v?16:v,b=n.allVariants,w=n.pxToRem,k=u(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var T=s/14,_=w||function(e){return"".concat(e/y*T,"rem")},E=function(e,t,n,r,o){return a({fontFamily:i,fontWeight:e,fontSize:_(t),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===i?{letterSpacing:"".concat(Yn(r/t),"em")}:{},o,b)},S={h1:E(c,96,1.167,-1.5),h2:E(c,60,1.2,-.5),h3:E(f,48,1.167,0),h4:E(f,34,1.235,.25),h5:E(f,24,1.334,0),h6:E(p,20,1.6,.15),subtitle1:E(f,16,1.75,.15),subtitle2:E(p,14,1.57,.1),body1:E(f,16,1.5,.15),body2:E(f,14,1.43,.15),button:E(p,14,1.75,.4,Zn),caption:E(f,12,1.66,.4),overline:E(f,12,2.66,1,Zn)};return vn(a({htmlFontSize:y,pxToRem:_,round:Jn,fontFamily:i,fontSize:s,fontWeightLight:c,fontWeightRegular:f,fontWeightMedium:p,fontWeightBold:m},S),k,{clone:!1})}function tr(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var nr=["none",tr(0,2,1,-1,0,1,1,0,0,1,3,0),tr(0,3,1,-2,0,2,2,0,0,1,5,0),tr(0,3,3,-2,0,3,4,0,0,1,8,0),tr(0,2,4,-1,0,4,5,0,0,1,10,0),tr(0,3,5,-1,0,5,8,0,0,1,14,0),tr(0,3,5,-1,0,6,10,0,0,1,18,0),tr(0,4,5,-2,0,7,10,1,0,2,16,1),tr(0,5,5,-3,0,8,10,1,0,3,14,2),tr(0,5,6,-3,0,9,12,1,0,3,16,2),tr(0,6,6,-3,0,10,14,1,0,4,18,3),tr(0,6,7,-4,0,11,15,1,0,4,20,3),tr(0,7,8,-4,0,12,17,2,0,5,22,4),tr(0,7,8,-4,0,13,19,2,0,5,24,4),tr(0,7,9,-4,0,14,21,2,0,5,26,4),tr(0,8,9,-5,0,15,22,2,0,6,28,5),tr(0,8,10,-5,0,16,24,2,0,6,30,5),tr(0,8,11,-5,0,17,26,2,0,6,32,5),tr(0,9,11,-5,0,18,28,2,0,7,34,6),tr(0,9,12,-6,0,19,29,2,0,7,36,6),tr(0,10,13,-6,0,20,31,3,0,8,38,7),tr(0,10,13,-6,0,21,33,3,0,8,40,7),tr(0,10,14,-6,0,22,35,3,0,8,42,7),tr(0,11,14,-7,0,23,36,3,0,9,44,8),tr(0,11,15,-7,0,24,38,3,0,9,46,8)],rr={borderRadius:4};function ir(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,t)||lt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var or=function(e,t){return t?vn(e,t,{clone:!1}):e},sr={xs:0,sm:600,md:960,lg:1280,xl:1920},ar={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(sr[e],"px)")}};var lr={m:"margin",p:"padding"},ur={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},cr={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},hr=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){if(e.length>2){if(!cr[e])return[e];e=cr[e]}var t=ir(e.split(""),2),n=t[0],r=t[1],i=lr[n],o=ur[r]||"";return Array.isArray(o)?o.map((function(e){return i+e})):[i+o]})),fr=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function dr(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}function pr(e,t){return function(n){return e.reduce((function(e,r){return e[r]=function(e,t){if("string"==typeof t||null==t)return t;var n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:"-".concat(n)}(t,n),e}),{})}}function gr(e){var t=dr(e.theme);return Object.keys(e).map((function(n){if(-1===fr.indexOf(n))return null;var r=pr(hr(n),t),i=e[n];return function(e,t,n){if(Array.isArray(t)){var r=e.theme.breakpoints||ar;return t.reduce((function(e,i,o){return e[r.up(r.keys[o])]=n(t[o]),e}),{})}if("object"===gn(t)){var i=e.theme.breakpoints||ar;return Object.keys(t).reduce((function(e,r){return e[i.up(r)]=n(t[r]),e}),{})}return n(t)}(e,i,r)})).reduce(or,{})}gr.propTypes={},gr.filterProps=fr;function mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;var t=dr({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return 0===n.length?t(1):1===n.length?t(n[0]):n.map((function(e){if("string"==typeof e)return e;var n=t(e);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var vr={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},yr={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function br(e){return"".concat(Math.round(e),"ms")}var wr={easing:vr,duration:yr,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,r=void 0===n?yr.standard:n,i=t.easing,o=void 0===i?vr.easeInOut:i,s=t.delay,a=void 0===s?0:s;u(t,["duration","easing","delay"]);return(Array.isArray(e)?e:[e]).map((function(e){return"".concat(e," ").concat("string"==typeof r?r:br(r)," ").concat(o," ").concat("string"==typeof a?a:br(a))})).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}},kr={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Tr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.breakpoints,n=void 0===t?{}:t,r=e.mixins,i=void 0===r?{}:r,o=e.palette,s=void 0===o?{}:o,a=e.spacing,l=e.typography,c=void 0===l?{}:l,h=u(e,["breakpoints","mixins","palette","spacing","typography"]),f=Qn(s),d=Rn(n),p=mr(a),g=vn({breakpoints:d,direction:"ltr",mixins:Pn(d,p,i),overrides:{},palette:f,props:{},shadows:nr,typography:er(f,c),spacing:p,shape:rr,transitions:wr,zIndex:kr},h),m=arguments.length,v=new Array(m>1?m-1:0),y=1;y<m;y++)v[y-1]=arguments[y];return g=v.reduce((function(e,t){return vn(e,t)}),g)}var _r=Tr();var Er=function(e,t){return In(e,a({defaultTheme:_r},t))},Sr=n.p+"5c121f70ecf1a175e6dba002ee29e7a9.js";var xr=r.forwardRef((function(e,t){var n=e.alt,i=e.children,o=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,f=e.imgProps,d=e.sizes,p=e.src,g=e.srcSet,m=e.variant,v=void 0===m?"circular":m,y=u(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),b=null,w=function(e){var t=e.src,n=e.srcSet,i=r.useState(!1),o=i[0],s=i[1];return r.useEffect((function(){if(t||n){s(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&s("loaded")},r.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,n]),o}({src:p,srcSet:g}),k=p||g,T=k&&"error"!==w;return b=T?r.createElement("img",a({alt:n,src:p,srcSet:g,sizes:d,className:o.img},f)):null!=i?i:k&&n?n[0]:r.createElement(Sr,{className:o.fallback}),r.createElement(c,a({className:h(o.root,o.system,o[v],s,!T&&o.colorDefault),ref:t},y),b)})),Ir=Er((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(xr),Cr=function(e){var t=e.imageUrl,n=e.username,r=e.caption;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__header"},i.a.createElement(Ir,{className:"post__avatar",alt:"ShahabAli",src:"/static/images/avatar/1.jpg"}),i.a.createElement("h3",null,n)),i.a.createElement("img",{src:t,alt:"",className:"post__image"}),i.a.createElement("h4",{className:"post__text"},i.a.createElement("strong",null,n,":"),r))},Or=n(2);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(Or.f)("firebase","9.0.1","app");var Rr=n(0);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Pr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var Ar=n(3),Nr=n(5);const Lr=new Rr.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Mr=new Ar.b("@firebase/auth");function Dr(e,...t){Mr.logLevel<=Ar.a.ERROR&&Mr.error(`Auth (${Or.a}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,...t){throw Fr(e,...t)}function Ur(e,...t){return Fr(e,...t)}function Fr(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Lr.create(e,...t)}function zr(e,t,...n){if(!e)throw Fr(t,...n)}function Vr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Dr(t),new Error(t)}function Hr(e,t){e||Vr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map;function Wr(e){Hr(e instanceof Function,"Expected a class definition");let t=Br.get(e);return t?(Hr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Br.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){return"http:"===qr()||"https:"===qr()}function qr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(Rr.o)()||Object(Rr.p)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&($r()||Object(Rr.k)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e,t){Hr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Yr=new Kr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Zr(e,t,n,r,i={}){return ei(e,i,()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Object(Rr.s)(Object.assign({key:e.config.apiKey},o)).slice(1),a=new(Xr.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Xr.fetch()(ni(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function ei(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qr),t);try{const t=new ri(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ii(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=(i.ok?o.errorMessage:o.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw ii(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw ii(e,"email-already-in-use",o);jr(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(t){if(t instanceof Rr.c)throw t;jr(e,"network-request-failed")}}async function ti(e,t,n,r,i={}){const o=await Zr(e,t,n,r,i);return"mfaPendingCredential"in o&&jr(e,"multi-factor-auth-required",{serverResponse:o}),o}function ni(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gr(e.config,i):`${e.config.apiScheme}://${i}`}class ri{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Ur(this.auth,"timeout")),Yr.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ur(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){return 1e3*Number(e)}function ai(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(Rr.d)(n);return e?JSON.parse(e):(Dr("Failed to decode base64 JWT payload"),null)}catch(e){return Dr("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function li(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Rr.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ui{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await li(e,async function(e,t){return Zr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));zr(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=Pr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const a=(l=e.providerData,u=s,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),f=!!c&&h,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ci(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){zr(e.idToken,"internal-error"),zr(void 0!==e.idToken,"internal-error"),zr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ai(e);return zr(t,"internal-error"),zr(void 0!==t.exp,"internal-error"),zr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return zr(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await ei(e,{},()=>{const n=Object(Rr.s)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=ni(e,r,"/v1/token","key="+i);return Xr.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new fi;return n&&(zr("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(zr("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(zr("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Vr("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e,t){zr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class pi{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ui(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new ci(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await li(this,this.stsTokenManager.getToken(this.auth,e));return zr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(Rr.i)(e),r=await n.getIdToken(t),i=ai(r);zr(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:oi(si(i.auth_time)),issuedAtTime:oi(si(i.iat)),expirationTime:oi(si(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(Rr.i)(e);await hi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(zr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){zr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,async function(e,t){return Zr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:k,stsTokenManager:T}=t;zr(y&&T,e,"internal-error");const _=fi.fromJSON(this.name,T);zr("string"==typeof y,e,"internal-error"),di(c,e.name),di(h,e.name),zr("boolean"==typeof b,e,"internal-error"),zr("boolean"==typeof w,e,"internal-error"),di(f,e.name),di(d,e.name),di(p,e.name),di(g,e.name),di(m,e.name),di(v,e.name);const E=new pi({uid:y,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:v});return k&&Array.isArray(k)&&(E.providerData=k.map(e=>Object.assign({},e))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new fi;r.updateFromServerResponse(t);const i=new pi({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await hi(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gi.type="NONE";const mi=gi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e,t,n){return`firebase:${e}:${t}:${n}`}class yi{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=vi(this.userKey,r.apiKey,i),this.fullPersistenceKey=vi("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yi(Wr(mi),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Wr(mi);const o=vi(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=pi._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}})),new yi(i,e,n)):new yi(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_i(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Si(t))return"Blackberry";if(xi(t))return"Webos";if(ki(t))return"Safari";if((t.includes("chrome/")||Ti(t))&&!t.includes("edge/"))return"Chrome";if(Ei(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function wi(e=Object(Rr.j)()){return/firefox\//i.test(e)}function ki(e=Object(Rr.j)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ti(e=Object(Rr.j)()){return/crios\//i.test(e)}function _i(e=Object(Rr.j)()){return/iemobile/i.test(e)}function Ei(e=Object(Rr.j)()){return/android/i.test(e)}function Si(e=Object(Rr.j)()){return/blackberry/i.test(e)}function xi(e=Object(Rr.j)()){return/webos/i.test(e)}function Ii(e=Object(Rr.j)()){return/iphone|ipad|ipod/i.test(e)}function Ci(e=Object(Rr.j)()){return Ii(e)||Ei(e)||xi(e)||Si(e)||/windows phone/i.test(e)||_i(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oi(e,t=[]){let n;switch(e){case"Browser":n=bi(Object(Rr.j)());break;case"Worker":n=`${bi(Object(Rr.j)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or.a}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ai(this),this.idTokenSubscription=new Ai(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await yi.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null==o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(zr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(Rr.i)(e):null;return t&&zr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&zr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;zr(t,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return zr(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return zr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Pi(e){return Object(Rr.i)(e)}class Ai{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(Rr.f)(e=>this.observer=e)}get next(){return zr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t){return Zr(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi extends Ni{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Mi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Mi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ti(e,"POST","/v1/accounts:signInWithPassword",Jr(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ti(e,"POST","/v1/accounts:signInWithEmailLink",Jr(e,t))}(e,{email:this._email,oobCode:this._password});default:jr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Li(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ti(e,"POST","/v1/accounts:signInWithEmailLink",Jr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:jr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t){return ti(e,"POST","/v1/accounts:signInWithIdp",Jr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ni{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Pr(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ji(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){return Di(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Di(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Di(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(Rr.s)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi extends Ni{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ti(e,"POST","/v1/accounts:signInWithPhoneNumber",Jr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ti(e,"POST","/v1/accounts:signInWithPhoneNumber",Jr(e,t));if(n.temporaryProof)throw ii(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ti(e,"POST","/v1/accounts:signInWithPhoneNumber",Jr(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ui)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Fi({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){var t,n,r,i,o,s;const a=Object(Rr.t)(Object(Rr.h)(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);zr(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Object(Rr.t)(Object(Rr.h)(e)).link,n=t?Object(Rr.t)(Object(Rr.h)(t)).deep_link_id:null,r=Object(Rr.t)(Object(Rr.h)(e)).deep_link_id;return(r?Object(Rr.t)(Object(Rr.h)(r)).link:null)||r||n||t||e}(e);try{return new zi(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,t){return Mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=zi.parseLink(t);return zr(n,"argument-error"),Mi._fromEmailAndCode(e,n.code,n.tenantId)}}Vi.PROVIDER_ID="password",Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Hi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi extends Bi{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Wi.credential(e.oauthAccessToken)}catch(e){return null}}}Wi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ji._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $i.credential(t,n)}catch(e){return null}}}$i.GOOGLE_SIGN_IN_METHOD="google.com",$i.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi extends Bi{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qi.credential(e.oauthAccessToken)}catch(e){return null}}}qi.GITHUB_SIGN_IN_METHOD="github.com",qi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki extends Bi{constructor(){super("twitter.com")}static credential(e,t){return ji._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ki.credential(t,n)}catch(e){return null}}}Ki.TWITTER_SIGN_IN_METHOD="twitter.com",Ki.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await pi._fromIdTokenResponse(e,n,r),o=Xi(n);return new Gi({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Xi(n);return new Gi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Xi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi extends Rr.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Qi.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Qi(e,t,n,r)}}function Yi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Qi._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(e,t,n=!1){const r=await li(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gi._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zi(e,t,n=!1){const{auth:r}=e;try{const i=await li(e,Yi(r,"reauthenticate",t,e),n);zr(i.idToken,r,"internal-error");const o=ai(i.idToken);zr(o,r,"internal-error");const{sub:s}=o;return zr(e.uid===s,r,"user-mismatch"),Gi._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&jr(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t,n=!1){const r=await Yi(e,"signIn",t),i=await Gi._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends to{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(Rr.j)();return ki(e)||Ii(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ci(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Object(Rr.n)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}no.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro extends to{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ro.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new io(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oo(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */io.receivers=[];class so{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const l=oo("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lo(){return void 0!==ao().WorkerGlobalScope&&"function"==typeof ao().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uo="firebaseLocalStorageDb";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ho(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function fo(){const e=indexedDB.open(uo,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(uo);return new co(e).toPromise()}(),t(await fo()))})})}async function po(e,t,n){const r=ho(e,!0).put({fbase_key:t,value:n});return new co(r).toPromise()}function go(e,t){const n=ho(e,!0).delete(t);return new co(n).toPromise()}class mo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await fo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=io._getInstance(lo()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new so(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fo();return await po(e,"__sak","1"),await go(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>po(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=ho(e,!1).get(t),r=await new co(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>go(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=ho(e,!1).getAll();return new co(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}mo.type="LOCAL";function vo(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
vo("rcb"),new Kr(3e4,6e4);async function yo(e,t,n){var r;const i=await n.verify();try{let o;if(zr("string"==typeof i,e,"argument-error"),zr("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){zr("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Zr(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{zr("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;zr(n,e,"missing-multi-factor-info");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Zr(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Zr(e,"POST","/v1/accounts:sendVerificationCode",Jr(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(e){this.providerId=bo.PROVIDER_ID,this.auth=Pi(e)}verifyPhoneNumber(e,t){return yo(this.auth,e,Object(Rr.i)(t))}static credential(e,t){return Fi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bo.credentialFromTaggedObject(t)}static credentialFromError(e){return bo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fi._fromTokenResponse(t,n):null}}bo.PROVIDER_ID="phone",bo.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo extends Ni{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ko(e){return eo(e.auth,new wo(e),e.bypassAuthState)}function To(e){const{auth:t,user:n}=e;return zr(n,t,"internal-error"),Zi(n,new wo(e),e.bypassAuthState)}async function _o(e){const{auth:t,user:n}=e;return zr(n,t,"internal-error"),Ji(n,new wo(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ko;case"linkViaPopup":case"linkViaRedirect":return _o;case"reauthViaPopup":case"reauthViaRedirect":return To;default:jr(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Kr(2e3,1e4);class xo extends Eo{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return zr(e,this.auth,"internal-error"),e}async onExecution(){Hr(1===this.filter.length,"Popup operations only handle one event");const e=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,So.get())};e()}}xo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Kr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Kr(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);var Io;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){zr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Io="Browser",Object(Or.c)(new Nr.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{zr(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),zr(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Io,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oi(Io)},o=new Ri(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(o,t),o})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(Or.c)(new Nr.a("auth-internal",e=>(e=>new Co(e))(Pi(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(Or.f)("@firebase/auth","0.17.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Io));var Oo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n(13);!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(Oo||(Oo={}));class Ro extends Rr.c{constructor(e,t){super(Po(e),`Firebase Storage: ${t} (${Po(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ro.prototype)}_codeEquals(e){return Po(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Po(e){return"storage/"+e}function Ao(){return new Ro("unknown","An unknown error occurred, please check the error payload for server response.")}function No(){return new Ro("canceled","User canceled the upload/download.")}function Lo(e){return new Ro("invalid-argument",e)}function Mo(){return new Ro("app-deleted","The Firebase app was deleted.")}function Do(e){throw new Ro("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Oo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Oo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Oo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw Do("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Do("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Do("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw Do("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{createConnection(){return new jo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Fo.makeFromUrl(e,t)}catch(t){return new Fo(e,"")}if(""===n.path)return n;throw new Ro("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),s=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/([A-Za-z0-9.\\-_]+)/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<s.length;t++){const r=s[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new Fo(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new Ro("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class zo{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e,t,n,r){if(r<t)throw Lo(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Lo(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,n,r,i,o,s,a,l,u,c){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=s,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=l,this.pool_=c,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=this;function t(t,n){const r=e.resolve_,i=e.reject_,o=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(o,o.getResponseText());void 0!==t?r(t):r()}catch(e){i(e)}else if(null!==o){const t=Ao();t.serverResponse=o.getResponseText(),e.errorCallback_?i(e.errorCallback_(o,t)):i(t)}else if(n.canceled){i(e.appDelete_?Mo():No())}else{i(new Ro("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new Wo(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,o=!1,s=0;function a(){return 2===s}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(h,a())},t)}function h(e,...t){if(l)return;if(e)return void u.call(null,e,...t);if(a()||o)return void u.call(null,e,...t);let n;r<64&&(r*=2),1===s?(s=2,n=0):n=1e3*(r+Math.random()),c(n)}let f=!1;function d(e){f||(f=!0,l||(null!==i?(e||(s=2),clearTimeout(i),c(0)):e||(s=1)))}return c(0),setTimeout(()=>{o=!0,d(!0)},n),d}((function(t,n){if(n)return void t(!1,new Wo(!1,null,!0));const r=e.pool_.createConnection();function i(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{null!==e.progressCallback_&&r.removeUploadProgressListener(i),e.pendingConnection_=null;const n=r.getErrorCode()===Oo.NO_ERROR,o=r.getStatus();if(!n||e.isRetryStatusCode_(o)){const e=r.getErrorCode()===Oo.ABORT;return void t(!1,new Wo(!1,null,e))}const s=-1!==e.successCodes_.indexOf(o);t(!0,new Wo(s,r))})}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class Wo{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function $o(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t){this._service=e,this._location=t instanceof Fo?t:Fo.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new qo(e,t)}get root(){const e=new Fo(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $o(this._location.path)}get storage(){return this._service}get parent(){const e=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Fo(this._location.bucket,e);return new qo(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Ro("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Ko(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:Fo.makeFromBucketSpec(n,e)}class Go{constructor(e,t,n,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host="firebasestorage.googleapis.com",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Fo.makeFromBucketSpec(i,this._host):Ko(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Fo.makeFromBucketSpec(this._url,e):this._bucket=Ko(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qo(this,e)}_makeRequest(e,t,n){if(this._deleted)return new zo(Mo());{const r=function(e,t,n,r,i,o){const s=Ho(e.urlParams),a=e.url+s,l=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,r),new Bo(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}function Xo(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Go(n,r,i,new Uo,t,Or.a)}Object(Or.c)(new Nr.a("storage",Xo,"PUBLIC").setMultipleInstances(!0)),Object(Or.f)("@firebase/storage","0.8.1");var Qo=(void 0).initializeApp({apiKey:"AIzaSyD1DBbwdt-sVTTD_MWRtZMfaiX7f_IuVVo",authDomain:"instagram-clone-1f92f.firebaseapp.com",projectId:"instagram-clone-1f92f",storageBucket:"instagram-clone-1f92f.appspot.com",messagingSenderId:"448246188091",appId:"1:448246188091:web:966f08898318b1a7b0b41e",measurementId:"G-G0MKX5M08D"}).firestore();(void 0).auth(),(void 0).storage();function Yo(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Jo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jo(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Jo(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Zo=function(){var e=Yo(Object(r.useState)([]),2),t=e[0],n=e[1];return Object(r.useEffect)((function(){Qo.collection("posts").onSnapshot((function(e){n(e.docs.map((function(e){return e.data()})))}))}),[]),i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"app__header"},i.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})),i.a.createElement("h1",null,"Instagram"),t.map((function(e){return i.a.createElement(Cr,{username:e.username,caption:e.caption,imageUrl:e.imageUrl})})))};s.a.render(i.a.createElement(Zo,null),document.getElementById("root"))}]);