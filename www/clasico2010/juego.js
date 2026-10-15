(()=>{
const $=id=>document.getElementById(id),st=$('st');
function fit(){const s=Math.min(innerWidth/480,innerHeight/320);st.style.transform=`scale(${s}) translate(-50%,-50%)`;st.style.transformOrigin='0 0';st.style.left='50%';st.style.top='50%';st.style.transform=`translate(-50%,-50%) scale(${s})`;st.style.transformOrigin='center'}
addEventListener('resize',fit);fit();
const O=Object.assign({snd:1,vid:1,show:1},JSON.parse(localStorage.m2010opt||'{}'));const saveO=()=>localStorage.m2010opt=JSON.stringify(O);
const LOG=window.M2010LOG=[];const log=(...a)=>LOG.push(a.join(' '));
const S={};let cur={};
function snd(n,loop){if(!O.snd)return null;let a=S[n]||(S[n]=new Audio('snd/'+n+'.ogg'));a.loop=!!loop;a.currentTime=0;a.play().catch(()=>{});log('snd',n);return a}
function stopAll(){for(const k in S){S[k].pause()}}
const VAL=[100,200,300,500,1000,2000,4000,8000,16000,25000,50000,100000,250000,500000,1000000];
const eur=v=>v.toLocaleString('es-ES').replace(/^(\d)(\d{3})$/,'$1.$2')+' €';
function show(id){document.querySelectorAll('.s').forEach(e=>e.classList.toggle('on',e.id==id));log('pantalla',id);window.M2010PANT=id}
// intro
function intro(){show('sIntro');const v=$('vid');if(!O.vid){menu();return}v.muted=!O.snd;v.currentTime=0;v.play().catch(()=>menu());v.onended=menu;$('sIntro').onclick=()=>{v.pause();menu()}}
function menu(){const v=$('vid');v.onended=null;v.pause();if(G)clearInterval(G.iv);stopAll();show('sMenu');snd('bed',true)}
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(!a)return;const k=a.dataset.a;
 if(k=='jugar')start();else if(k=='ayuda')ayuda();else if(k=='acerca')acerca();else if(k=='opciones')opciones();else if(k=='menu')menu();else if(k=='salir'){stopAll();if(parent!==window)parent.postMessage('clasico2010:salir','*');else menu()}});
const H=(t,b)=>`<div class="bar sm mi hd" style="position:relative">${t}</div><div class="txt">${b}</div>`;
function ayuda(){show('sHelp');$('help').innerHTML=H('Ayuda','En ¿Quién quiere ser millonario? 2010 tienes que responder 15 preguntas de dificultad creciente. Superar la marca de 1.000 € o de 25.000 € te garantiza esa cantidad, aunque luego falles una pregunta. Ganas el juego si respondes bien todas las preguntas, incluida la del Millón.')
+H('Controles','Para empezar una partida, elige Jugar en el menú principal. Toca la escalera de premios para empezar la primera pregunta. Toca la respuesta que quieras dar. Cuando aparezca la ventana de respuesta definitiva, puedes elegir Sí para confirmarla, No para elegir otra respuesta, o Plantarse para terminar la partida con lo ganado. Los iconos de los comodines aparecen arriba; toca uno para usarlo.')
+H('Opciones','Entra en el menú de opciones para activar o desactivar el sonido, los vídeos y si se muestran o no las respuestas correctas.')
+H('Expertos','En la sección de expertos puedes saber un poco sobre cada experto.')
+H('Tiempo','Cada pregunta tiene un tiempo límite, que depende de tu posición en la escalera de premios:<br>· Hasta 1.000 €: 15 segundos<br>· De 2.000 € a 25.000 €: 30 segundos<br>· De 50.000 € a 500.000 €: 45 segundos<br>El tiempo que te sobre al responder bien se «guarda» para la pregunta del Millón. Entre preguntas se muestra el tiempo acumulado y tu posición en la escalera. El tiempo de la pregunta del Millón empieza con todo el tiempo que hayas guardado.')
+H('Comodines','Tienes 4 comodines distintos que puedes usar:<br><b>Llamada a un amigo</b>: simula la opinión de un amigo sobre la pregunta y te dice lo seguro que está.<br><b>Pregunta al público</b>: simula el voto del público a la respuesta que cree correcta.<br><b>Doble oportunidad</b>: al activarlo puedes dar dos respuestas a la pregunta por si la primera es incorrecta.<br><b>Pregunta al experto</b>: te da la opinión de un experto sobre la respuesta correcta. Solo se puede usar después de superar la pregunta de 1.000 €.')}
function acerca(){show('sHelp');$('help').innerHTML=H('Acerca de','Who Wants To Be A Millionaire 2010 v. 1.0.0<br>©Valleycrest Productions Limited 2009. Who Wants To Be A Millionaire, Who Wants To Be A Millionaire 2010 y todos los logotipos y lemas relacionados ™Valleycrest Productions Ltd. Todos los derechos reservados.<br><br>Mobile Edition ©2009 CAPCOM Interactive, Inc.<br><br>Modo clásico recreado en español dentro de la app de Iker.')
+H('Créditos','Programación: Andrew Robberts<br>Programación Android: Sebastien Bourgon<br>Arte: Dave Daniels<br>Redacción técnica: Megan Swaine<br>Jefe de control de calidad: Paul Nunes<br>Control de calidad: Jeff DeGordick, Tim McLennan<br>Director sénior de producto: Christopher Locke')}
function opciones(){show('sOpt');const r=()=>{$('oSnd').textContent='Sonido: '+(O.snd?'Sí':'No');$('oVid').textContent='Vídeos: '+(O.vid?'Sí':'No');$('oShow').textContent='Mostrar respuesta correcta: '+(O.show?'Sí':'No');saveO()};
 $('oSnd').onclick=()=>{O.snd^=1;if(!O.snd)stopAll();r()};$('oVid').onclick=()=>{O.vid^=1;r()};$('oShow').onclick=()=>{O.show^=1;r()};r()}
// partida
const SEC=[0,0,0,1,1,2,2,2,2,2,3,3,4,4,5];
let G;
function pick(sec){const pool=PREG.filter((p,i)=>p[0]==sec&&!G.used.has(i));const p=pool[Math.random()*pool.length|0];G.used.add(PREG.indexOf(p));return p}
function start(){stopAll();G={n:0,bank:0,used:new Set(),ll:{aud:1,phn:1,x2:1,exp:1},won:0};['lAud','lPhn','lX2','lExp'].forEach(i=>$(i).classList.remove('used'));$('cf').style.display='none';show('sGame');snd('opening_titles');treeShow(true)}
function tlimit(n){return n<5?15:n<10?30:n<14?45:G.bank}
function treeShow(go){const t=$('tree');t.innerHTML='';for(let i=14;i>=0;i--){const d=document.createElement('div');d.className=(i==4||i==9||i==14?'safe ':'')+(i==G.n?'cur':'');d.innerHTML=`<span>${i+1}</span><span>${eur(VAL[i])}</span>`;t.appendChild(d)}
 if(G.n==14)t.insertAdjacentHTML('beforeend',`<div style="justify-content:center;color:#fff">Tiempo guardado: ${G.bank} s</div>`);
 $('pTree').classList.add('on');snd('money_tree_full');$('pTree').onclick=()=>{$('pTree').classList.remove('on');if(go)nextQ()}}
$('treeBtn').onclick=()=>{if(G&&!G.busy)treeShow(false)};
function bed(){const n=G.n;return n<5?null:n<10?'q6to10_clock':n<14?'q11to14_clock':'q15_clock'}
function nextQ(){$("walk").style.opacity=1;const p=pick(SEC[G.n]);G.p=p;G.sel=-1;G.dd=0;G.dead=new Set();G.busy=0;
 $('cat').textContent=p[1];$('q').textContent=p[2];for(let i=0;i<4;i++){const a=$('a'+i);a.className='bar big ans';a.innerHTML='<b>'+'ABCD'[i]+':</b>'+p[3][i];a.onclick=()=>choose(i)}
 $('treeBtn').textContent=eur(G.n?VAL[G.n-1]:0);G.t=tlimit(G.n);G.t0=G.t;$('timer').textContent=G.t;$('timer').className='abs';
 const b=bed();G.bed=b&&snd(b,true);if(!b)snd('bed',true);log('pregunta',G.n+1,p[2]);
 clearInterval(G.iv);G.iv=setInterval(tick,1000);window.M2010Q={n:G.n,cor:p[4],dead:[...G.dead]}}
function tick(){if(G.paused||G.busy)return;G.t--;$('timer').textContent=Math.max(0,G.t);if(G.t<=5)$('timer').className='abs red';if(G.t<=0){clearInterval(G.iv);G.busy=1;stopAll();snd('out_of_time');reveal(-1)}}
function choose(i){if(G.busy||G.dead.has(i))return;G.sel=i;for(let k=0;k<4;k++)$('a'+k).classList.toggle('sel',k==i);
 if(G.dd){final(true);return}$('pFinal').classList.add('on');G.paused=1}
$('fSi').onclick=()=>{$('pFinal').classList.remove('on');final(true)};
$('fNo').onclick=()=>{$('pFinal').classList.remove('on');G.paused=0;$('a'+G.sel).classList.remove('sel');G.sel=-1};
$('fWalk').onclick=()=>{$('pFinal').classList.remove('on');walk()};$('walk').onclick=()=>{if(!G.busy){G.paused=1;$('pFinal').classList.add('on')}};
function final(){G.paused=0;const ok=G.sel==G.p[4];
 if(!ok&&G.dd==1){G.dd=2;G.dead.add(G.sel);$('a'+G.sel).className='bar big ans ko';snd('doubledipsecond');G.sel=-1;window.M2010Q.dead=[...G.dead];return}
 G.busy=1;clearInterval(G.iv);reveal(G.sel)}
function reveal(i){const ok=i==G.p[4];if(G.bed)G.bed.pause();if(S.bed)S.bed.pause();
 const tier=G.n<5?'q1to5':'q6to10';if(i>=0)snd(G.n==14?(ok?'win_million':'lose_million'):tier+(ok?'_yes':'_no'));
 if(O.show||ok)$('a'+G.p[4]).className='bar big ans ok';if(!ok&&i>=0)$('a'+i).className='bar big ans sel';
 log('respuesta',ok?'correcta':'incorrecta');
 setTimeout(()=>{if(ok){if(G.n<14)G.bank+=Math.max(0,G.t);G.won=VAL[G.n];G.n++;if(G.n==15)return fin(true);treeShow(true)}else fin(false)},2200)}
function safe(){return G.n>=10?25000:G.n>=5?1000:0}
function walk(){G.busy=1;clearInterval(G.iv);stopAll();const v=G.n?VAL[G.n-1]:0;msg(`Te plantas con ${eur(v)}.`,v)}
function fin(win){clearInterval(G.iv);if(win){$('cf').style.display='block';msg('¡ENHORABUENA! ¡Has ganado 1.000.000 €!',1e6)}else msg('Respuesta incorrecta. Te llevas '+eur(safe())+'.',safe())}
function msg(t,v){$('msg').textContent=t;$('pMsg').classList.add('on');window.M2010FIN={premio:v};log('fin',v);$('msgOk').onclick=()=>{$('pMsg').classList.remove('on');stopAll();snd('closing_titles');menu()}}
// comodines
function llPop(html,done){$('llBox').innerHTML=html;$('pLL').classList.add('on');G.paused=1;$('pLL').onclick=()=>{$('pLL').classList.remove('on');G.paused=0;S.ask_expert&&S.ask_expert.pause();S.phone_a_friend&&S.phone_a_friend.pause();S.askaudience&&S.askaudience.pause();const b=bed();G.bed=b&&snd(b,true);done&&done()}}
function guess(conf){const c=G.p[4];return Math.random()<conf?c:[0,1,2,3].filter(i=>i!=c&&!G.dead.has(i))[Math.random()*3|0]??c}
function useLL(k,el){if(!G||G.busy||!G.ll[k]||G.dd)return false;if(k=='exp'&&G.n<5)return false;G.ll[k]=0;el.classList.add('used');if(G.bed)G.bed.pause();S.bed&&S.bed.pause();log('comodin',k);return true}
$('lAud').onclick=e=>{if(!useLL('aud',e.target))return;snd('askaudience');const c=G.p[4];let r=[0,0,0,0],left=100;const conf=G.n<5?.75:G.n<10?.55:.4;r[c]=Math.round(conf*100*(0.8+Math.random()*.4));left-=r[c];[0,1,2,3].filter(i=>i!=c).forEach((i,j,a)=>{const v=j==a.length-1?left:Math.round(Math.random()*left);r[i]=Math.max(0,v);left-=r[i]});
 llPop(`<img src="spr/a3_2.png" style="width:180px"><div id="bars" style="left:20px;top:28px;gap:8px">${r.map((v,i)=>`<div style="text-align:center;font-size:10px">${v}%<i style="height:${v*1.4}px;width:28px"></i></div>`).join('')}</div>`)};
$('lPhn').onclick=e=>{if(!useLL('phn',e.target))return;snd('phone_a_friend');const conf=G.n<5?.9:G.n<10?.7:.5,g=guess(conf),pc=Math.round(conf*100-10+Math.random()*20);
 llPop(`<div style="position:relative"><img src="spr/a3_0.png" style="width:300px"><div style="position:absolute;left:8px;right:8px;bottom:4px;height:38px;display:flex;align-items:center;justify-content:center;font-size:12px;text-align:center">«Creo que es la ${'ABCD'[g]}: ${G.p[3][g]}. Estoy seguro al ${Math.min(99,pc)} %.»</div></div>`)};
$('lX2').onclick=e=>{if(!useLL('x2',e.target))return;G.dd=1;snd('doubledipfirst',false);$('walk').style.opacity=.3};
$('lExp').onclick=e=>{if(!useLL('exp',e.target))return;snd('ask_expert');const g=guess(.85);
 llPop(`<div style="position:relative;text-align:center"><img src="spr/a3_1.png" style="width:220px"><div class="mi" style="font-size:13px;width:280px">El experto opina: «Yo diría la ${'ABCD'[g]}, ${G.p[3][g]}.»</div></div>`)};
window.M2010={start,menu,choose,final:()=>$('fSi').click(),state:()=>G};
show('sMenu');if(new URLSearchParams(location.search).has('auto'))menu();else intro();
})();
