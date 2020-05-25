(this["webpackJsonpdanadajian.github.io"]=this["webpackJsonpdanadajian.github.io"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/linkedin.e6a96407.svg"},function(e,t,a){e.exports=a.p+"static/media/github.0c8a8728.svg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/headshot.21f41416.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/dfs-optimizer-example.0c1be3d1.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),i=a(4),c=(a(28),a(6)),s=(a(13),a(29),a(21)),m=(a(30),function(e){var t=Object(n.useState)(e.initialState),a={Home:"Unselected",About:"Unselected",Resume:"Unselected",Projects:"Unselected"};return a[Object(s.a)(t,1)[0]]="Selected",l.a.createElement("div",{className:"Navbar"},l.a.createElement(i.b,{className:a.Home,to:"/"},"Home"),l.a.createElement(i.b,{className:a.About,to:"/about"},"About Me"),l.a.createElement("div",{className:"Resume"},l.a.createElement(i.b,{className:a.Resume,to:"/resume"},"Resume"),l.a.createElement("a",{id:"download-pdf",className:"Resume-dropdown",href:"https://docs.google.com/document/d/1q8SOfGxmeTZ0_z8y1ihKnDfAsZnVEjVDQfFUUw3MBzQ/export?format=pdf"},"Download PDF")),l.a.createElement(i.b,{className:a.Projects,to:"/projects"},"Projects"))}),u=(a(36),a(37)),p=a(38),d=function(){return l.a.createElement("div",{className:"Links"},l.a.createElement("a",{href:"https://www.linkedin.com/in/dan-adajian-aa8aaa72/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:u,alt:"LinkedIn"})),l.a.createElement("a",{href:"https://github.com/danadajian/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:p,alt:"GitHub"})))},h=function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"Overlay"},l.a.createElement(m,{initialState:"Home"}),l.a.createElement("h1",null,"Dan Adajian"),l.a.createElement("p",null,"I'm a software developer from Chicago, IL."),l.a.createElement("p",null,"Welcome to my site!"),l.a.createElement(d,null)))},E=(a(39),a(40)),f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Header"},l.a.createElement(m,{initialState:"About"})),l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"About"},l.a.createElement("section",null,l.a.createElement("body",null,l.a.createElement("img",{src:E,alt:"Headshot"}),l.a.createElement("p",null,"I am a self-taught programmer who loves automating tasks and learning new technologies. As a strong advocate of test-driven development and pair-programming, I strive to write software guided by the principles of ",l.a.createElement("a",{href:"https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",target:"_blank",rel:"noopener noreferrer"},"clean code"),"."))),l.a.createElement("section",null,l.a.createElement("body",null,l.a.createElement("h3",null,"Professional Experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Data pipeline architecture using the AWS serverless application model"),l.a.createElement("li",null,"Leveraging AWS Lambda and Batch to productionalize machine learning models"),l.a.createElement("li",null,"Full-stack .NET web application development using MVC framework")),l.a.createElement("h3",null,"Coursework"),l.a.createElement("ul",null,l.a.createElement("li",null,"Watched over 30 hours of course content on ",l.a.createElement("a",{href:"https://www.pluralsight.com/",target:"_blank",rel:"noopener noreferrer"},"Pluralsight")," spanning the topics of Java fundamentals, test-driven development, Java testing frameworks, object-oriented programming, and AWS frameworks"),l.a.createElement("li",null,"Scored in the 88th percentile on Pluralsight's Java Fundamentals assessment.")))),l.a.createElement("section",null,l.a.createElement("body",null,l.a.createElement("h3",null,"Education"),l.a.createElement("ul",null,l.a.createElement("li",null,"Graduated from Northwestern University with a Bachelor's Degree in Math and Economics.")))),l.a.createElement("section",null,l.a.createElement("body",null,l.a.createElement("h3",null,"Interests"),l.a.createElement("ul",null,l.a.createElement("li",null,"I play golf when it's over 40 degrees out, and paddle tennis otherwise."),l.a.createElement("li",null,"I enjoy watching football, playing the piano, and building software!")))))),l.a.createElement(d,null))},g=(a(41),function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Header"},l.a.createElement(m,{initialState:"Resume"})),l.a.createElement("div",{className:"Container"},l.a.createElement("body",{className:"Resume"},l.a.createElement("iframe",{title:"Resume",src:"https://docs.google.com/document/d/e/2PACX-1vR7KuXM96JBgn0dtDI8nA8bhCIszgntZblap9226e_sNHoUc-o-Yr1I7jRk3bs6k_LPOX3hm0597h0Q/pub?embedded=true",scrolling:"no"}))),l.a.createElement(d,null))}),b=(a(42),a(43)),v=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Header"},l.a.createElement(m,{initialState:"Projects"})),l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"Projects"},l.a.createElement("section",null,l.a.createElement("body",null,l.a.createElement("h1",null,"Daily Fantasy Sports Lineup Optimizer"),l.a.createElement("a",{href:"https://dfsoptimizer.app",target:"_blank",rel:"noopener noreferrer"},"https://dfsoptimizer.app"),l.a.createElement("h3",null,"Overview"),l.a.createElement("p",null,"My Daily Fantasy Sports (DFS) lineup optimizer aims to generate a lineup of players such that the lineup's total projected points are maximized, given the constraint that the lineup's total salary is within the salary cap. Each player has a position, a projection, and a salary, and a lineup must contain a certain number of each position. The optimization problem presented here is a type of ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Knapsack_problem"},"knapsack problem"),", which involves picking items with weights and values optimally to fit inside a knapsack."),l.a.createElement("img",{src:b,alt:"DFS Optimizer Example"}),l.a.createElement("h3",null,"My Solution"),l.a.createElement("p",null,'The method I developed uses what I call "selective brute force", which reduces the problem efficiently to make checking all possibilities feasible. First, players are grouped by position and sorted by their salary-to-projection ratios. Then, players are removed from each position pool until the maximum number of lineup combinations is under a specified fixed threshold. Finally, a recursive algorithm efficiently iterates over possible lineups one by one, ensuring each new lineup it checks has the potential to be better (i.e. has a higher projected point total).'),l.a.createElement("p",null,"The app currently supports Fanduel and Draftkings contests for the big four (MLB, NFL, NBA, NHL)."))),l.a.createElement("section",null,l.a.createElement("body",null,l.a.createElement("h3",null,"More project overviews coming soon! In the meantime, check out my ",l.a.createElement("a",{href:"https://github.com/danadajian/",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."))))),l.a.createElement(d,null))},w=a(18),y=a(19),k=a(22),j=a(20),N=function(e){Object(k.a)(a,e);var t=Object(j.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),S=Object(c.f)(N),I=function(){return l.a.createElement(i.a,null,l.a.createElement(S,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",render:function(){return l.a.createElement(h,null)},exact:!0}),l.a.createElement(c.a,{path:"/about",render:function(){return l.a.createElement(f,null)}}),l.a.createElement(c.a,{path:"/resume",render:function(){return l.a.createElement(g,null)}}),l.a.createElement(c.a,{path:"/projects",render:function(){return l.a.createElement(v,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i.a,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.8e1af696.chunk.js.map