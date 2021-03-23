var app=function(){"use strict";function e(){}function s(e){return e()}function t(){return Object.create(null)}function n(e){e.forEach(s)}function a(e){return"function"==typeof e}function l(e,s){return e!=e?s==s:e!==s||e&&"object"==typeof e||"function"==typeof e}function i(e,s){e.appendChild(s)}function r(e,s,t){e.insertBefore(s,t||null)}function c(e){e.parentNode.removeChild(e)}function o(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function p(){return v(" ")}function g(e,s,t){null==t?e.removeAttribute(s):e.getAttribute(s)!==t&&e.setAttribute(s,t)}function m(e,s){s=""+s,e.wholeText!==s&&(e.data=s)}let d;function h(e){d=e}const f=[],b=[],u=[],k=[],w=Promise.resolve();let $=!1;function y(e){u.push(e)}let z=!1;const j=new Set;function S(){if(!z){z=!0;do{for(let e=0;e<f.length;e+=1){const s=f[e];h(s),_(s.$$)}for(h(null),f.length=0;b.length;)b.pop()();for(let e=0;e<u.length;e+=1){const s=u[e];j.has(s)||(j.add(s),s())}u.length=0}while(f.length);for(;k.length;)k.pop()();$=!1,z=!1,j.clear()}}function _(e){if(null!==e.fragment){e.update(),n(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(y)}}const x=new Set;function L(e,s){e&&e.i&&(x.delete(e),e.i(s))}function N(e,s,t,n){if(e&&e.o){if(x.has(e))return;x.add(e),undefined.c.push((()=>{x.delete(e),n&&(t&&e.d(1),n())})),e.o(s)}}function M(e){e&&e.c()}function q(e,t,l,i){const{fragment:r,on_mount:c,on_destroy:o,after_update:v}=e.$$;r&&r.m(t,l),i||y((()=>{const t=c.map(s).filter(a);o?o.push(...t):n(t),e.$$.on_mount=[]})),v.forEach(y)}function E(e,s){const t=e.$$;null!==t.fragment&&(n(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function D(e,s){-1===e.$$.dirty[0]&&(f.push(e),$||($=!0,w.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function P(s,a,l,i,r,o,v=[-1]){const p=d;h(s);const g=s.$$={fragment:null,ctx:null,props:o,update:e,not_equal:r,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:t(),dirty:v,skip_bound:!1};let m=!1;if(g.ctx=l?l(s,a.props||{},((e,t,...n)=>{const a=n.length?n[0]:t;return g.ctx&&r(g.ctx[e],g.ctx[e]=a)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](a),m&&D(s,e)),t})):[],g.update(),m=!0,n(g.before_update),g.fragment=!!i&&i(g.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);g.fragment&&g.fragment.l(e),e.forEach(c)}else g.fragment&&g.fragment.c();a.intro&&L(s.$$.fragment),q(s,a.target,a.anchor,a.customElement),S()}h(p)}class A{$destroy(){E(this,1),this.$destroy=e}$on(e,s){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(s),()=>{const e=t.indexOf(s);-1!==e&&t.splice(e,1)}}$set(e){var s;this.$$set&&(s=e,0!==Object.keys(s).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function C(s){let t,n,a,l,d,h,f,b,u,k,w,$,y,z,j,S,_,x,L,N,M,q,E,D,P,A,C,T,I,H,F,J;return{c(){t=o("header"),n=o("div"),a=p(),l=o("div"),l.innerHTML='<img class="profile-pic svelte-jdq8jy" src="img/profile.png" alt=""/> \n        <img class="mushroom svelte-jdq8jy" src="img/mushroom.png" alt=""/>',d=p(),h=o("div"),f=o("div"),b=o("h1"),u=v(s[0]),k=p(),w=v(s[1]),$=p(),y=o("p"),y.innerHTML="<span>Systems Engineer.</span> \n                <span>Fullstack Developer.</span> \n                <span>Amateur Designer.</span>",z=p(),j=o("div"),S=o("a"),_=o("img"),L=p(),N=o("a"),M=o("img"),E=p(),D=o("a"),P=o("img"),C=p(),T=o("a"),I=o("img"),F=p(),J=o("div"),J.innerHTML='<div class="svelte-jdq8jy"><img src="img/icons/peru.svg" alt="peru-logo"/>\n            Cajamarca, Perú</div> \n        <div class="svelte-jdq8jy"><img src="img/icons/mail.svg" alt="mail-logo"/>\n            levi.arista@gmail.com</div> \n        <div class="svelte-jdq8jy"><img src="img/icons/whatsapp.svg" alt="whatsapp-logo"/>\n            +51 931 416 152</div>',g(n,"class","black-top svelte-jdq8jy"),g(l,"class","profile svelte-jdq8jy"),g(b,"class","svelte-jdq8jy"),g(y,"class","svelte-jdq8jy"),g(f,"class","info"),_.src!==(x="img/icons/linkedin.svg")&&g(_,"src","img/icons/linkedin.svg"),g(_,"alt","linkedin-logo"),g(S,"href",s[2]),g(S,"target","_blank"),g(S,"rel","noopenner noreferrer"),M.src!==(q="img/icons/github.svg")&&g(M,"src","img/icons/github.svg"),g(M,"alt","github-logo"),g(N,"href",s[3]),g(N,"target","_blank"),g(N,"rel","noopenner noreferrer"),P.src!==(A="img/icons/gitlab.svg")&&g(P,"src","img/icons/gitlab.svg"),g(P,"alt","gitlab-logo"),g(D,"href",s[4]),g(D,"target","_blank"),g(D,"rel","noopenner noreferrer"),I.src!==(H="img/icons/stackoverflow.svg")&&g(I,"src","img/icons/stackoverflow.svg"),g(I,"alt","stackoverflow-logo"),g(T,"href",s[5]),g(T,"target","_blank"),g(T,"rel","noopenner noreferrer"),g(j,"class","social svelte-jdq8jy"),g(h,"class","about svelte-jdq8jy"),g(J,"class","contact svelte-jdq8jy"),g(t,"class","presentation svelte-jdq8jy")},m(e,s){r(e,t,s),i(t,n),i(t,a),i(t,l),i(t,d),i(t,h),i(h,f),i(f,b),i(b,u),i(b,k),i(b,w),i(f,$),i(f,y),i(h,z),i(h,j),i(j,S),i(S,_),i(j,L),i(j,N),i(N,M),i(j,E),i(j,D),i(D,P),i(j,C),i(j,T),i(T,I),i(t,F),i(t,J)},p(e,[s]){1&s&&m(u,e[0]),2&s&&m(w,e[1]),4&s&&g(S,"href",e[2]),8&s&&g(N,"href",e[3]),16&s&&g(D,"href",e[4]),32&s&&g(T,"href",e[5])},i:e,o:e,d(e){e&&c(t)}}}function T(e,s,t){let{name:n}=s,{lastName:a}=s,{linkedin:l}=s,{github:i}=s,{gitlab:r}=s,{stackoverflow:c}=s;return e.$$set=e=>{"name"in e&&t(0,n=e.name),"lastName"in e&&t(1,a=e.lastName),"linkedin"in e&&t(2,l=e.linkedin),"github"in e&&t(3,i=e.github),"gitlab"in e&&t(4,r=e.gitlab),"stackoverflow"in e&&t(5,c=e.stackoverflow)},[n,a,l,i,r,c]}class I extends A{constructor(e){super(),P(this,e,T,C,l,{name:0,lastName:1,linkedin:2,github:3,gitlab:4,stackoverflow:5})}}function H(s){let t;return{c(){t=o("section"),t.innerHTML='<h2 class="svelte-zfwmtk">Experience</h2> \n    <div class="experience-history svelte-zfwmtk"><div class="svelte-zfwmtk"><article><p class="svelte-zfwmtk"><i>February 2020 - Present</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/ms4m.png" alt="ms4m-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>Software Development Engineer</b><br/>\n                        Mine Sense for Miners<br/> \n                        <br/> \n                        <span class="tech-badge svelte-zfwmtk">React.js</span> \n                        <span class="tech-badge svelte-zfwmtk">Express.js</span> \n                        <span class="tech-badge svelte-zfwmtk">PostgreSQL</span> \n                        <span class="tech-badge svelte-zfwmtk">Sails.js</span> \n                        <span class="tech-badge svelte-zfwmtk">Java</span> \n                        <span class="tech-badge svelte-zfwmtk">Python</span></p></div></article> \n            <article><p class="svelte-zfwmtk"><i>December 2018 - February 2020</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/ms4m.png" alt="ms4m-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>FMS Administrator &amp; Applications Analyst</b><br/>\n                        Mine Sense for Miners [for GoldFields La Cima]<br/> \n                        <br/> \n                        <span class="tech-badge svelte-zfwmtk">PostgreSQL</span> \n                        <span class="tech-badge svelte-zfwmtk">Sails.js</span> \n                        <span class="tech-badge svelte-zfwmtk">Linux Server Administration</span> \n                        <span class="tech-badge svelte-zfwmtk">SQLite</span> \n                        <span class="tech-badge svelte-zfwmtk">ISO 27001</span></p></div></article> \n            <article><p class="svelte-zfwmtk"><i>February 2018 - November 2018</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/ms4m.png" alt="ms4m-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>Junior Systems Engineer</b><br/>\n                        Mine Sense for Miners<br/> \n                        <br/> \n                        <span class="tech-badge svelte-zfwmtk">Sails.js</span> \n                        <span class="tech-badge svelte-zfwmtk">PostgreSQL</span> \n                        <span class="tech-badge svelte-zfwmtk">Android</span></p></div></article> \n            <article><p class="svelte-zfwmtk"><i>March 2017 - December 2017</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/upagu.png" alt="upagu-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>Developer</b><br/>\n                        Antonio Guillermo Urrelo Private University<br/> \n                        <br/> \n                        <span class="tech-badge svelte-zfwmtk">Java</span> \n                        <span class="tech-badge svelte-zfwmtk">JDeveloper</span> \n                        <span class="tech-badge svelte-zfwmtk">Oracle Database</span> \n                        <span class="tech-badge svelte-zfwmtk">JasperReports</span></p></div></article></div> \n        <div class="svelte-zfwmtk"><article><p class="svelte-zfwmtk"><i>March 2017 - December 2017</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/didepti.png" alt="didepti-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>Developer</b><br/>\n                        DIDEPTI<br/> \n                        <br/> \n                        <span class="tech-badge svelte-zfwmtk">Zend</span> \n                        <span class="tech-badge svelte-zfwmtk">Mysql</span></p></div></article> \n            <article><p class="svelte-zfwmtk"><i>March 2017 - February 2020</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/okidoki.png" alt="okidoki-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>Developer</b><br/>\n                        Okidoki SAC<br/> \n                        <br/> \n                        <span class="tech-badge svelte-zfwmtk">Laravel</span> \n                        <span class="tech-badge svelte-zfwmtk">Mysql</span></p></div></article> \n            <article><p class="svelte-zfwmtk"><i>03/2015, 08/2015, 05/2018, 09/2018</i></p> \n                <div class="svelte-zfwmtk"><img src="img/experience/inei.png" alt="inei-logo" class="svelte-zfwmtk"/> \n                    <p class="svelte-zfwmtk"><b>IT Operator for national evaluations of teachers</b><br/>\n                        National Institute of Statistics and Informatics<br/></p></div></article></div></div>',g(t,"class","experience svelte-zfwmtk")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&c(t)}}}class F extends A{constructor(e){super(),P(this,e,null,H,l,{})}}function J(s){let t;return{c(){t=o("section"),t.innerHTML='<h2 class="svelte-zvrcnk">Education</h2> \n    <div class="education-history svelte-zvrcnk"><article class="svelte-zvrcnk"><img src="img/education/unc.png" alt="unc-logo"/> \n            <p class="svelte-zvrcnk"><b>Bachelor in Systems Engineering</b><br/>\n                National University of Cajamarca<br/>\n                2012 - 2016</p></article> \n        <article class="svelte-zvrcnk"><img src="img/education/usa.png" alt="us-embassy"/> \n            <p class="svelte-zvrcnk"><b>English Access Microscholarship Program</b><br/>\n                from U.S.Embassy at ICPNA<br/>\n                2009 - 2014<br/> \n                <br/> \n                <b>Member of the International Exhange Alumni Network</b></p></article></div>',g(t,"class","education svelte-zvrcnk")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&c(t)}}}class O extends A{constructor(e){super(),P(this,e,null,J,l,{})}}function Q(s){let t;return{c(){t=o("section"),t.innerHTML='<h2 class="svelte-1ok7hcl">Skills</h2> \n    <div class="skills-history svelte-1ok7hcl"><div class="column svelte-1ok7hcl"><article><p><b>Technologies, Languages &amp; Libraries</b></p> \n                <div class="svelte-1ok7hcl"><span class="tech-item favorite svelte-1ok7hcl">HTML</span> \n                    <span class="tech-item favorite svelte-1ok7hcl">CSS</span> \n                    <span class="tech-item favorite svelte-1ok7hcl">JavaScript</span> \n                    <span class="tech-item svelte-1ok7hcl">Sass</span> \n                    <span class="tech-item svelte-1ok7hcl">JQuery</span></div> \n                <div class="svelte-1ok7hcl"><span class="tech-item favorite svelte-1ok7hcl">Node.js</span> \n                    <span class="tech-item svelte-1ok7hcl">PHP</span> \n                    <span class="tech-item svelte-1ok7hcl">Java</span> \n                    <span class="tech-item svelte-1ok7hcl">C#</span></div></article> \n            <article><p><b>Frameworks</b></p> \n                <div class="svelte-1ok7hcl"><span class="tech-item favorite svelte-1ok7hcl">React.js</span> \n                    <span class="tech-item svelte-1ok7hcl">Sails.js</span> \n                    <span class="tech-item svelte-1ok7hcl">Express.js</span></div> \n                <div class="svelte-1ok7hcl"><span class="tech-item favorite svelte-1ok7hcl">Laravel</span> \n                    <span class="tech-item svelte-1ok7hcl">Android Development</span></div></article> \n            <article><p><b>Databases</b></p> \n                <div class="svelte-1ok7hcl"><span class="tech-item favorite svelte-1ok7hcl">PostgreSQL</span> \n                    <span class="tech-item svelte-1ok7hcl">MySql</span> \n                    <span class="tech-item svelte-1ok7hcl">SQLite</span> \n                    <span class="tech-item svelte-1ok7hcl">MS SQL Server</span></div></article></div> \n        <div class="svelte-1ok7hcl"><article><p><b>Server administration</b></p> \n                <div class="svelte-1ok7hcl"><span class="tech-item favorite svelte-1ok7hcl">Ubuntu Server</span></div></article> \n            <article><p><b>CI &amp; CD</b></p> \n                <div class="svelte-1ok7hcl"><span class="tech-item svelte-1ok7hcl">Docker</span> \n                    <span class="tech-item svelte-1ok7hcl">Jenkins</span></div></article> \n            <article><p><b>Design</b></p> \n                <div class="svelte-1ok7hcl"><span class="tech-item svelte-1ok7hcl">Corel Draw</span> \n                    <span class="tech-item svelte-1ok7hcl">Illustrator</span> \n                    <span class="tech-item svelte-1ok7hcl">Figma</span></div></article></div></div>',g(t,"class","skills svelte-1ok7hcl")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&c(t)}}}class R extends A{constructor(e){super(),P(this,e,null,Q,l,{})}}function W(s){let t;return{c(){t=o("section"),t.innerHTML='<h2 class="svelte-2scb8v">Projects</h2> \n    <div class="projects-container svelte-2scb8v"><article class="card svelte-2scb8v"><div class="card-header svelte-2scb8v"><a href="https://ecostatsperu.netlify.app" target="_blank" rel="noopenner noreferrer"><img class="card-image" src="img/projects/eco-stats-peru.png" alt="eco-stats-peru-logo"/></a> \n                <div><div class="card-title svelte-2scb8v"><a href="https://ecostatsperu.netlify.app" target="_blank" rel="noopenner noreferrer"><b>Eco Stas Perú</b></a></div> \n                    <div class="card-links svelte-2scb8v"><a href="https://github.com/leviarista/eco-stats-peru" target="_blank" rel="noopenner noreferrer"><img src="img/icons/github-25.svg" alt="github-logo"/></a> \n                        <a href="https://ecostatsperu.netlify.app/" target="_blank" rel="noopenner noreferrer"><img src="img/icons/link.svg" alt="link"/></a></div> \n                    <div>Built using:<br/> \n                        <span class="tech-badge svelte-2scb8v">React.js</span> \n                        <span class="tech-badge svelte-2scb8v">New Relic</span> \n                        <span class="tech-badge svelte-2scb8v">Open Data</span></div></div></div> \n            <div class="card-body svelte-2scb8v">Winner project of the\n                <a href="https://www.therelicans.com/therelicans/hack-the-planet-contest-winners-announced-22po" target="_blank" rel="noopenner noreferrer">New Relic Hack the Planet Contest.\n                </a><br/>\n                Eco Stats Perú is a website aims to list solutions and show data\n                that raise awareness about how Peruvians are influencing our environment,\n                how we impact its resources and how we influence climate change,\n                based on open data.</div></article> \n        <article class="card svelte-2scb8v"><div class="card-header svelte-2scb8v"><a href="http://sc-caminodesantidad.org/" target="_blank" rel="noopenner noreferrer"><img class="card-image" src="img/projects/sccs.png" alt="sccs-logo"/></a> \n                <div><div class="card-title svelte-2scb8v"><a href="http://sc-caminodesantidad.org/" target="_blank" rel="noopenner noreferrer"><b>SCCS [Website]</b></a></div> \n                    <div class="card-links svelte-2scb8v"><a href="http://sc-caminodesantidad.org/" target="_blank" rel="noopenner noreferrer"><img src="img/icons/link.svg" alt="link"/></a></div> \n                    <div>Built using:<br/> \n                        <span class="tech-badge svelte-2scb8v">Laravel</span> \n                        <span class="tech-badge svelte-2scb8v">MySql</span></div></div></div> \n            <div class="card-body svelte-2scb8v">Website of the christian association: &quot;Sociedad Cristiana Camino\n                de Santidad&quot;.</div></article> \n        <article class="card svelte-2scb8v"><div class="card-header svelte-2scb8v"><a href="http://vptinmobiliaria.com/" target="_blank" rel="noopenner noreferrer"><img class="card-image" src="img/projects/vpt-inmobiliaria.png" alt="vpt-inmobiliaria-logo"/></a> \n                <div><div class="card-title svelte-2scb8v"><a href="http://vptinmobiliaria.com/" target="_blank" rel="noopenner noreferrer"><b>VPT Inmobiliaria [Website]</b></a></div> \n                    <div class="card-links svelte-2scb8v"><a href="http://vptinmobiliaria.com/" target="_blank" rel="noopenner noreferrer"><img src="img/icons/link.svg" alt="link"/></a></div> \n                    <div>Built using:<br/> \n                        <span class="tech-badge svelte-2scb8v">Laravel</span> \n                        <span class="tech-badge svelte-2scb8v">MySql</span></div></div></div> \n            <div class="card-body svelte-2scb8v">Website for real estate: &quot;Valentine&#39;s Inmobiliaria&quot;</div></article> \n        <article class="card svelte-2scb8v"><div class="card-header svelte-2scb8v"><a href="http://celogosyethos.com/" target="_blank" rel="noopenner noreferrer"><img class="card-image" src="img/projects/logos-y-ethos.png" alt="logos-y-ethos-logo"/></a> \n                <div><div class="card-title svelte-2scb8v"><a href="http://celogosyethos.com/" target="_blank" rel="noopenner noreferrer"><b>Logos y Ethos [Website]</b></a></div> \n                    <div class="card-links svelte-2scb8v"><a href="http://celogosyethos.com/" target="_blank" rel="noopenner noreferrer"><img src="img/icons/link.svg" alt="link"/></a></div> \n                    <div>Built using:<br/> \n                        <span class="tech-badge svelte-2scb8v">Laravel</span> \n                        <span class="tech-badge svelte-2scb8v">Sass</span> \n                        <span class="tech-badge svelte-2scb8v">MySql</span> \n                        <span class="tech-badge gray svelte-2scb8v">In construction</span></div></div></div> \n            <div class="card-body svelte-2scb8v">Website for the Law Students Association: &quot;Círculo de Estudios\n                Logos y Ethos&quot;.</div></article></div>',g(t,"class","projects svelte-2scb8v")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&c(t)}}}class B extends A{constructor(e){super(),P(this,e,null,W,l,{})}}function U(s){let t,n,a,l,d,h,f,b,u,k,w,$,y,z,j,S,_,x,L,N,M,q;return{c(){t=o("footer"),n=o("div"),a=v(s[0]),l=p(),d=v(s[1]),h=p(),f=o("div"),b=o("a"),u=o("img"),w=p(),$=o("a"),y=o("img"),j=p(),S=o("a"),_=o("img"),L=p(),N=o("a"),M=o("img"),g(n,"class","about"),u.src!==(k="img/icons/linkedin-30.svg")&&g(u,"src","img/icons/linkedin-30.svg"),g(u,"alt","linkedin-logo"),g(b,"href",s[2]),g(b,"target","_blank"),g(b,"rel","noopenner noreferrer"),y.src!==(z="img/icons/github-30.svg")&&g(y,"src","img/icons/github-30.svg"),g(y,"alt","github-logo"),g($,"href",s[3]),g($,"target","_blank"),g($,"rel","noopenner noreferrer"),_.src!==(x="img/icons/gitlab-30.svg")&&g(_,"src","img/icons/gitlab-30.svg"),g(_,"alt","gitlab-logo"),g(S,"href",s[4]),g(S,"target","_blank"),g(S,"rel","noopenner noreferrer"),M.src!==(q="img/icons/stackoverflow-30.svg")&&g(M,"src","img/icons/stackoverflow-30.svg"),g(M,"alt","stackoverflow-logo"),g(N,"href",s[5]),g(N,"target","_blank"),g(N,"rel","noopenner noreferrer"),g(f,"class","social"),g(t,"class","footer svelte-19d64ro")},m(e,s){r(e,t,s),i(t,n),i(n,a),i(n,l),i(n,d),i(t,h),i(t,f),i(f,b),i(b,u),i(f,w),i(f,$),i($,y),i(f,j),i(f,S),i(S,_),i(f,L),i(f,N),i(N,M)},p(e,[s]){1&s&&m(a,e[0]),2&s&&m(d,e[1]),4&s&&g(b,"href",e[2]),8&s&&g($,"href",e[3]),16&s&&g(S,"href",e[4]),32&s&&g(N,"href",e[5])},i:e,o:e,d(e){e&&c(t)}}}function G(e,s,t){let{name:n}=s,{lastName:a}=s,{linkedin:l}=s,{github:i}=s,{gitlab:r}=s,{stackoverflow:c}=s;return e.$$set=e=>{"name"in e&&t(0,n=e.name),"lastName"in e&&t(1,a=e.lastName),"linkedin"in e&&t(2,l=e.linkedin),"github"in e&&t(3,i=e.github),"gitlab"in e&&t(4,r=e.gitlab),"stackoverflow"in e&&t(5,c=e.stackoverflow)},[n,a,l,i,r,c]}class V extends A{constructor(e){super(),P(this,e,G,U,l,{name:0,lastName:1,linkedin:2,github:3,gitlab:4,stackoverflow:5})}}function Z(s){let t;return{c(){t=o("section"),t.innerHTML='<img class="mushroom svelte-1lxohwu" src="img/mushroom-50.png" alt="mushrrom"/> \n    <p class="svelte-1lxohwu">LEARNING</p>',g(t,"class","learning svelte-1lxohwu")},m(e,s){r(e,t,s)},p:e,i:e,o:e,d(e){e&&c(t)}}}class K extends A{constructor(e){super(),P(this,e,null,Z,l,{})}}function X(e){let s,t,n,a,l,v,m,d,h,f,b,u,k,w,$;return t=new I({props:{name:e[0],lastName:e[1],linkedin:e[2],github:e[3],gitlab:e[4],stackoverflow:e[5]}}),a=new F({}),v=new O({}),d=new R({}),f=new B({}),u=new K({}),w=new V({props:{name:e[0],lastName:e[1],linkedin:e[2],github:e[3],gitlab:e[4],stackoverflow:e[5]}}),{c(){s=o("main"),M(t.$$.fragment),n=p(),M(a.$$.fragment),l=p(),M(v.$$.fragment),m=p(),M(d.$$.fragment),h=p(),M(f.$$.fragment),b=p(),M(u.$$.fragment),k=p(),M(w.$$.fragment),g(s,"class","svelte-1qfjs72")},m(e,c){r(e,s,c),q(t,s,null),i(s,n),q(a,s,null),i(s,l),q(v,s,null),i(s,m),q(d,s,null),i(s,h),q(f,s,null),i(s,b),q(u,s,null),i(s,k),q(w,s,null),$=!0},p(e,[s]){const n={};1&s&&(n.name=e[0]),2&s&&(n.lastName=e[1]),4&s&&(n.linkedin=e[2]),8&s&&(n.github=e[3]),16&s&&(n.gitlab=e[4]),32&s&&(n.stackoverflow=e[5]),t.$set(n);const a={};1&s&&(a.name=e[0]),2&s&&(a.lastName=e[1]),4&s&&(a.linkedin=e[2]),8&s&&(a.github=e[3]),16&s&&(a.gitlab=e[4]),32&s&&(a.stackoverflow=e[5]),w.$set(a)},i(e){$||(L(t.$$.fragment,e),L(a.$$.fragment,e),L(v.$$.fragment,e),L(d.$$.fragment,e),L(f.$$.fragment,e),L(u.$$.fragment,e),L(w.$$.fragment,e),$=!0)},o(e){N(t.$$.fragment,e),N(a.$$.fragment,e),N(v.$$.fragment,e),N(d.$$.fragment,e),N(f.$$.fragment,e),N(u.$$.fragment,e),N(w.$$.fragment,e),$=!1},d(e){e&&c(s),E(t),E(a),E(v),E(d),E(f),E(u),E(w)}}}function Y(e,s,t){let{name:n}=s,{lastName:a}=s,{linkedin:l}=s,{github:i}=s,{gitlab:r}=s,{stackoverflow:c}=s;return e.$$set=e=>{"name"in e&&t(0,n=e.name),"lastName"in e&&t(1,a=e.lastName),"linkedin"in e&&t(2,l=e.linkedin),"github"in e&&t(3,i=e.github),"gitlab"in e&&t(4,r=e.gitlab),"stackoverflow"in e&&t(5,c=e.stackoverflow)},[n,a,l,i,r,c]}return new class extends A{constructor(e){super(),P(this,e,Y,X,l,{name:0,lastName:1,linkedin:2,github:3,gitlab:4,stackoverflow:5})}}({target:document.body,props:{name:"Leví",lastName:"Arista Sánchez",linkedin:"https://pe.linkedin.com/in/levi-arista",github:"https://github.com/leviarista",gitlab:"https://gitlab.com/levi.arista",stackoverflow:"https://es.stackoverflow.com/users/78168/levi-arista"}})}();
//# sourceMappingURL=bundle.js.map