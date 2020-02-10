let oldlinks=document.getElementById('navbar')
let newLinks=document.createElement('div')
newLinks.innerHTML=`<a id="html" href="../cssSession/cssSession.html">Html & Css</a>
                    <a id="js"  href="../jsSession/jsSession.html">Js</a>
                    <a id="snipets" href="../snipetSession/snipetSession.html">Snipets</a>
                    <a id='debug' href="../debugJSSession/debugSession.html">Debug JS</a>
                    <a id='app' href="../application/application.html">Application</a>
                    <a id='net' href="../networkSession/networkSession.html">Network</a>
                    <a id='sec' href="../securitySession/securitySession.html">Security</a>
                    <a id="audit" href="../auditSession/auditSession.html">Audit</a>
                    <a id='perform' href="../performanceSession/performanceSession.html">Performance</a>
                    `
newLinks.className='navbar'

oldlinks.replaceWith(newLinks)

