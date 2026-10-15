(()=>{
/* ¿Quién quiere ser millonario? 2010 — modo clásico. Flujo según libmill2010.so (escenas MainMenu/MoneyTree/Question/Dialog/Winnings/Options/Web). */
const $=id=>document.getElementById(id),st=$('st');
function fit(){const s=Math.min(innerWidth/480,innerHeight/320);st.style.transformOrigin='center';st.style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();
const O=Object.assign({snd:1,vid:1,show:1},JSON.parse(localStorage.m2010opt||'{}'));const saveO=()=>localStorage.m2010opt=JSON.stringify(O);
const LOG=window.M2010LOG=[];const log=(...a)=>LOG.push(a.join(' '));
const S={};
function snd(n,loop){if(!O.snd)return null;let a=S[n]||(S[n]=new Audio('snd/'+n+'.ogg'));a.loop=!!loop;try{a.currentTime=0}catch(e){}a.play().catch(()=>{});log('snd',n);return a}
const stop=n=>{S[n]&&S[n].pause()};function stopAll(){for(const k in S)S[k].pause()}
const VAL=[100,200,300,500,1000,2000,4000,8000,16000,25000,50000,100000,250000,500000,1000000];
const eur=v=>String(v).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' €';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function show(id){document.querySelectorAll('.s').forEach(e=>e.classList.toggle('on',e.id==id));log('pantalla',id);window.M2010PANT=id}
// diálogo genérico (Dialog::SetMainText / SetButtonText)
function dlg(txt,btns){return new Promise(r=>{$('dTxt').innerHTML=txt;const b=$('dBtns');b.innerHTML='';btns.forEach((t,i)=>{const e=document.createElement('div');e.className='bar sm mi';e.style.cssText='position:relative;width:210px;height:32px;margin:4px auto;font-size:14px';e.textContent=t;e.dataset.i=i;e.onclick=()=>{$('pDlg').classList.remove('on');r(i)};b.appendChild(e)});$('pDlg').classList.add('on');window.M2010DLG=txt})}
// intro
function intro(){show('sIntro');const v=$('vid');if(!O.vid){menu();return}v.muted=!O.snd;v.currentTime=0;v.play().catch(()=>menu());v.onended=menu;$('sIntro').onclick=()=>{v.pause();menu()}}
let G=null;
// menú principal: Play / Options / Help - High Scores / Quit ; submenú: Help / High Scores / About / About the Experts / Back
function lista(items){const l=$('mlist');l.innerHTML='';items.forEach(([t,f],i)=>{const e=document.createElement('div');e.className='bar sm mi abs';e.style.cssText=`left:270px;top:${(320-items.length*48)/2+i*48+4}px;width:200px;height:40px`;e.textContent=t;e.onclick=f;e.dataset.m=t;l.appendChild(e)})}
function menu(){const v=$('vid');v.onended=null;v.pause();if(G)clearInterval(G.iv);stopAll();show('sMenu');snd('bed',true);
 lista([['Jugar',jugar],['Opciones',opciones],['Ayuda / Récords',submenu],['Salir',salir]])}
function submenu(){lista([['Ayuda',ayuda],['Récords',async()=>{await dlg('No se ha podido conectar con los récords.<br>Esta función necesita conexión a Internet.',['Volver'])}],['Acerca de',acerca],['Acerca de los expertos',expertos],['Atrás',menu]])}
function salir(){stopAll();if(parent!==window)parent.postMessage('clasico2010:salir','*');else menu()}
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(a&&a.dataset.a=='menu')menu()});
const H=(t,b)=>`<div class="bar sm mi hd" style="position:relative">${t}</div><div class="txt">${b}</div>`;
function ayuda(){show('sHelp');$('help').innerHTML=H('Ayuda','En ¿Quién quiere ser millonario? 2010 tienes que responder 15 preguntas de dificultad creciente. Superar la marca de 1.000 € o de 25.000 € te garantiza esa cantidad, aunque luego falles una pregunta. Ganas la partida si respondes bien todas las preguntas, incluida la del Millón.')
+H('Controles','Para empezar una partida, elige Jugar en el menú principal. Toca la escalera de premios para empezar la primera pregunta. Toca la respuesta que quieras dar. Cuando aparezca la ventana de respuesta definitiva, puedes elegir Sí para confirmarla, No para elegir otra respuesta, o Plantarse para terminar la partida con lo que has ganado. Los iconos de los comodines aparecen encima de la pregunta; toca uno para usarlo.')
+H('Opciones','Entra en el menú de opciones para activar o desactivar el sonido, los vídeos y si se muestran o no las respuestas correctas.')
+H('Expertos','La sección de expertos te cuenta un poco sobre cada experto.')
+H('Tiempo','Cada pregunta tiene un tiempo límite, que depende de tu posición en la escalera de premios:<br>· Hasta 1.000 €: 15 segundos<br>· De 2.000 € a 25.000 €: 30 segundos<br>· De 50.000 € a 500.000 €: 45 segundos<br>El tiempo que te sobre al responder bien una pregunta se «guarda» para la pregunta del Millón. Entre preguntas se muestra el tiempo guardado y tu posición en la escalera. El reloj de la pregunta del Millón empieza con todo el tiempo que hayas guardado.')
+H('Comodines','Tienes 4 comodines distintos:<br><b>Llamada a un amigo</b>: simula la opinión de un amigo sobre la pregunta y lo seguro que está.<br><b>Pregunta al público</b>: simula el voto del público.<br><b>Doble oportunidad</b>: te deja dar dos respuestas a la pregunta por si la primera es incorrecta.<br><b>Pregunta al experto</b>: te da la opinión de un experto sobre la respuesta correcta. Se desbloquea al superar la pregunta de 1.000 €.')}
function acerca(){show('sHelp');$('help').innerHTML=H('Acerca de','¿Quién quiere ser millonario? 2010 v. 1.0.0<br>©Valleycrest Productions Limited 2009. Who Wants To Be A Millionaire, Who Wants To Be A Millionaire 2010 y todos los logotipos y lemas relacionados ™Valleycrest Productions Ltd. Todos los derechos reservados.<br><br>Mobile Edition ©2009 CAPCOM Interactive, Inc.')
+H('Créditos','Programación: Andrew Robberts<br>Programación Android: Sebastien Bourgon<br>Arte: Dave Daniels<br>Redacción técnica: Megan Swaine<br>Jefe de control de calidad: Paul Nunes<br>Control de calidad: Jeff DeGordick, Tim McLennan<br>Director sénior de producto: Christopher Locke')}
const EXPERTOS=['Joel Stein','Bill Finan','Eric Keihl','Laura Nemeth','Pat Kiernan','Jeff Gross','Ogi Ogas','Tom Spencer','Ben Seitelmann'];
function expertos(){show('sHelp');$('help').innerHTML=H('Acerca de los expertos','En la pregunta al experto te ayuda uno de estos expertos (elegido al azar al desbloquear el comodín):<br><br>'+EXPERTOS.join('<br>'))}
function opciones(){show('sOpt');const r=()=>{$('oSnd').textContent='Sonido: '+(O.snd?'Sí':'No');$('oVid').textContent='Vídeos: '+(O.vid?'Sí':'No');$('oShow').textContent='Mostrar respuestas: '+(O.show?'Sí':'No');saveO()};
 $('oSnd').onclick=()=>{O.snd^=1;if(!O.snd)stopAll();r()};$('oVid').onclick=()=>{O.vid^=1;r()};$('oShow').onclick=()=>{O.show^=1;r()};r()}
// ---------- partida ----------
const SEC=[0,0,0,1,1,2,2,2,2,2,3,3,4,4,5];
function elegir(){const used=new Set(JSON.parse(localStorage.m2010used||'[]'));const Q=[];
 for(let n=0;n<15;n++){let pool=PREG.map((p,i)=>i).filter(i=>PREG[i][0]==SEC[n]&&!used.has(i)&&!Q.includes(i));if(!pool.length){pool=PREG.map((p,i)=>i).filter(i=>PREG[i][0]==SEC[n]&&!Q.includes(i));PREG.forEach((p,i)=>p[0]==SEC[n]&&used.delete(i))}
  const i=pool[Math.random()*pool.length|0];Q.push(i);used.add(i)}
 localStorage.m2010used=JSON.stringify([...used]);return Q}
const guardar=()=>{if(G)localStorage.m2010save=JSON.stringify({Q:G.Q,n:G.n,bank:G.bank,ll:G.ll,exp:G.exp})};
const borrar=()=>localStorage.removeItem('m2010save');
async function jugar(){stopAll();const sv=JSON.parse(localStorage.m2010save||'null');
 if(sv&&await dlg('Tu partida se interrumpió.<br>¿Quieres continuar tu partida anterior?',['Sí','No'])==0){G=Object.assign({dead:new Set()},sv)}else{borrar();G={Q:elegir(),n:0,bank:0,ll:{aud:1,phn:1,x2:1,exp:0},exp:-1}}
 ['lAud','lPhn','lX2','lExp'].forEach(i=>$(i).classList.toggle('used',!G.ll[{lAud:'aud',lPhn:'phn',lX2:'x2',lExp:'exp'}[i]]));
 if(G.n==0)snd('opening_titles');arbol(true)}
// escalera (MoneyTree: TriggerIntro / SetCategory / "Money Tree Done")
function bankTxt(b){const m=Math.floor(b/60),s=b%60;return `${m} minuto${m==1?'':'s'} y ${s} segundo${s==1?'':'s'} guardados`}
async function arbol(go){show('sTree');stop('bed');const t=$('tree');t.innerHTML='';const rows=[];
 for(let i=14;i>=0;i--){const d=document.createElement('div');d.className=(i==4||i==9||i==14?'safe ':'')+(i==G.n?'cur':'');d.style.opacity=0;
  d.innerHTML=`<span class="n">${i+1}</span><span class="v">${eur(VAL[i])}</span><span class="c">${i<G.n?'✓ ':''}${PREG[G.Q[i]][1]}</span>`;t.appendChild(d);rows.unshift(d)}
 $('bankTxt').textContent=G.n>0?bankTxt(G.bank):'';$('treeGo').textContent=G.n==0?'Empezar':'Continuar';$('treeGo').style.visibility='hidden';
 snd('money_tree_full');for(const d of rows){d.style.opacity=1;await wait(55)}log('Money Tree Done');$('treeGo').style.visibility='visible';
 return new Promise(r=>{$('treeGo').onclick=()=>{if(go)pregunta();else{show('sGame');G.paused=0;const b=bed();G.bed=b&&snd(b,true)}r()}})}
$('treeBtn').onclick=()=>{if(G&&!G.busy&&G.sel<0){G.paused=1;stop(bed()||'bed');arbol(false)}};
function tlimit(n){return n<5?15:n<10?30:n<14?45:G.bank}
function bed(){const n=G.n;return n<5?null:n<10?'q6to10_clock':n<14?'q11to14_clock':'q15_clock'}
function pregunta(){show('sGame');const p=PREG[G.Q[G.n]];G.p=p;G.sel=-1;G.dd=0;G.dead=new Set();G.busy=0;G.paused=0;$('walk').style.opacity=1;
 $('cat').textContent=p[1];$('q').textContent=p[2];for(let i=0;i<4;i++){const a=$('a'+i);a.className='bar big ans';a.innerHTML='<b>'+'ABCD'[i]+':</b>'+p[3][i];a.onclick=()=>elegirResp(i)}
 $('treeBtn').textContent=eur(G.n?VAL[G.n-1]:0);G.t=tlimit(G.n);$('timer').textContent=G.t;$('timer').className='abs';
 const b=bed();G.bed=b&&snd(b,true);if(!b)snd('bed',true);log('pregunta',G.n+1,p[2]);guardar();
 clearInterval(G.iv);G.iv=setInterval(tick,1000);window.M2010Q={n:G.n,cor:p[4]}}
function tick(){if(G.paused||G.busy)return;G.t--;$('timer').textContent=Math.max(0,G.t);if(G.t<=5)$('timer').className='abs red';if(G.t<=0){clearInterval(G.iv);G.busy=1;stopAll();snd('out_of_time');resolver(-1)}}
async function elegirResp(i){if(G.busy||G.paused||G.dead.has(i))return;G.sel=i;for(let k=0;k<4;k++)$('a'+k).classList.toggle('sel',k==i);
 if(G.dd){return confirmar()}
 G.paused=1;const r=await dlg('¿Es tu respuesta definitiva?',['Sí','No','Plantarse']);
 if(r==0)confirmar();else if(r==1){G.paused=0;$('a'+i).classList.remove('sel');G.sel=-1}else plantarse()}
// suspense (L_CalcQuestionSuspenseTime): más largo cuanto más alta la pregunta
async function confirmar(){G.paused=0;G.busy=1;const ok=G.sel==G.p[4];
 if(!ok&&G.dd==1){await wait(1200);G.dd=2;G.dead.add(G.sel);$('a'+G.sel).className='bar big ans bad';stop('doubledipfirst');snd('doubledipsecond');await wait(700);$('a'+G.sel).className='bar big ans ko';G.sel=-1;G.busy=0;return}
 await wait(G.n<5?900:G.n<10?1800:G.n<14?2800:4000);resolver(G.sel)}
async function resolver(i){clearInterval(G.iv);const ok=i>=0&&i==G.p[4];const b=bed();if(b)stop(b);stop('bed');
 if(i>=0)snd(G.n==14?(ok?'win_million':'lose_million'):(G.n<5?'q1to5':'q6to10')+(ok?'_yes':'_no'));
 if(ok)$('a'+i).className='bar big ans ok';else{if(i>=0)$('a'+i).className='bar big ans bad';if(O.show)$('a'+G.p[4]).className='bar big ans ok'}
 log('respuesta',ok?'correcta':'incorrecta');await wait(2400);
 if(ok){if(G.n<14)G.bank+=Math.max(0,G.t);G.n++;if(G.n==15)return ganancias(1e6,true);
  if(G.n==5&&!G.exp_done){G.exp=Math.random()*EXPERTOS.length|0;G.ll.exp=1;G.exp_done=1;$('lExp').classList.remove('used');guardar();await dlg('¡Pregunta al experto desbloqueada!<br>Tu experto se llama '+EXPERTOS[G.exp]+'.',['Continuar'])}
  guardar();arbol(true)}
 else{await dlg(i<0?'¡Se acabó el tiempo!':'Lo siento, es incorrecta.',['Continuar']);ganancias(G.n>=10?25000:G.n>=5?1000:0,false)}}
function plantarse(){G.busy=1;clearInterval(G.iv);stopAll();ganancias(G.n?VAL[G.n-1]:0,false)}
// WinningsScene (TOTAL WINNINGS + L_DoTotalWinningsMusic)
async function ganancias(v,win){borrar();show('sWin');$('winAmt').textContent=eur(v);$('cf').style.display=win?'block':'none';window.M2010FIN={premio:v};log('fin',v);
 if(!win&&v>0)snd('q6to10_yes');$('winGo').onclick=()=>{stopAll();snd('closing_titles');menu()}}
$('pauseBtn').onclick=async()=>{if(!G||G.busy)return;G.paused=1;const b=bed();if(b)stop(b);const r=await dlg('Tu partida está en pausa.',['Continuar','Menú principal']);if(r==0){G.paused=0;G.bed=b&&snd(b,true)}else{clearInterval(G.iv);menu()}};
$('walk').onclick=async()=>{if(!G||G.busy||G.dd)return;G.paused=1;const r=await dlg('¿Seguro que quieres plantarte con '+eur(G.n?VAL[G.n-1]:0)+'?',['Plantarse','Seguir jugando']);if(r==0)plantarse();else G.paused=0};
// comodines
function llPop(html){return new Promise(r=>{$('llBox').innerHTML=html;$('pLL').classList.add('on');G.paused=1;$('pLL').onclick=()=>{$('pLL').classList.remove('on');['ask_expert','phone_a_friend','askaudience'].forEach(stop);G.paused=0;const b=bed();G.bed=b&&snd(b,true);r()}})}
function useLL(k,el){if(!G||G.busy||G.paused||!G.ll[k]||G.dd)return false;G.ll[k]=0;el.classList.add('used');const b=bed();if(b)stop(b);stop('bed');log('comodin',k);guardar();return true}
const vivos=()=>[0,1,2,3].filter(i=>!G.dead.has(i));
$('lAud').onclick=e=>{if(!useLL('aud',e.target))return;snd('askaudience');const c=G.p[4];const conf=G.n<5?.7:G.n<10?.5:.38;let r=[0,0,0,0],left=100;r[c]=Math.round(100*conf*(0.8+Math.random()*.5));r[c]=Math.min(95,r[c]);left-=r[c];const o=[0,1,2,3].filter(i=>i!=c);o.forEach((i,j)=>{const v=j==o.length-1?left:Math.round(Math.random()*left);r[i]=v;left-=v});
 llPop(`<img src="spr/a3_2.png" style="width:180px"><div id="bars" style="left:20px;top:28px;gap:8px">${r.map(v=>`<div style="text-align:center;font-size:10px">${v}%<i style="height:${v*1.4}px;width:28px"></i></div>`).join('')}</div>`)};
const AMIGOS='BIFF FRANK GORDIE OSWALD GUS CHAUNCEY BILLY HERBERT GERALD FRITZ JULIUS BARNABY MELVIN HERMAN BORIS WALT LESTER LEROY HOWARD EUGENE ADAM LANCE DONNY BRUCE DWIGHT EDGAR DUSTIN ERNIE OTTO ALFONZO DARRYL MARTY GILLIAN RHONDA PARIS TAMMI JILL TORI DEBBIE KELLY MARLENE ELIZA KRYSTAL LEXUS CHLOE HELENA BUFFY TRIXIE CANDY VANESSA LOLA AMBER AUTUMN DANIELLE BAILEY MORGAN MEGAN DAISY BRITNEY LIZABETH SKYLAR SUMMER'.split(' ');
$('lPhn').onclick=e=>{if(!useLL('phn',e.target))return;snd('phone_a_friend');const nm=AMIGOS[Math.random()*AMIGOS.length|0];const nom=nm[0]+nm.slice(1).toLowerCase();
 const conf=G.n<5?.9:G.n<10?.65:.45;let txt;
 if(Math.random()<(G.n<5?.03:G.n<10?.1:.2))txt=['No tengo ni idea.','Lo siento, no lo sé.','Ojalá lo supiera…','Lo siento, estás solo.'][Math.random()*4|0];
 else{const g=Math.random()<conf?G.p[4]:vivos()[Math.random()*vivos().length|0];const pc=String(Math.max(30,Math.min(99,Math.round(conf*100+(Math.random()*20-10)))));const L='ABCD'[g];
  txt=[`Yo diría la ${L}. Seguro al ${pc} %.  ${G.p[3][g]}`,`Ve con la ${L}. Estoy seguro al ${pc} %.  ${G.p[3][g]}`,`La ${L}. Seguro al ${pc} %.  ${G.p[3][g]}`][Math.random()*3|0]}
 llPop(`<div style="position:relative"><img src="spr/a3_0.png" style="width:300px"><div style="position:absolute;left:8px;top:6px;font-size:12px;color:#9cf">${nom}</div><div style="position:absolute;left:8px;right:8px;bottom:4px;height:38px;display:flex;align-items:center;justify-content:center;font-size:12px">«${txt}»</div></div>`)};
$('lX2').onclick=e=>{if(!useLL('x2',e.target))return;G.dd=1;snd('doubledipfirst');$('walk').style.opacity=.3};
// L_CalcExpertResponse: frases según seguridad (100/95/75/65/45/25)
const EXP={100:['¡Buena pregunta! Estoy seguro al 100 % de que puedo responder esta joya. La respuesta es sin duda la %L: %A.','Huelo la respuesta a un kilómetro. Estoy seguro al 100 % de que es la %L: %A.','Soy totalmente la persona indicada para esta pregunta. Estoy seguro al 100 % de tener la respuesta: es la %L: %A.'],
95:['¡Vaya! No me esperaba esa, pero estoy seguro al 95 % de acertar. Elige la %L: %A.','Me encantan las preguntas así. Estoy seguro al 95 % de que deberías elegir la %L: %A.'],
75:['Puedo intentarlo. Estoy seguro al 75 % de que es la opción %L: %A.','Hay que tener buen gusto para responder esto, y yo lo tengo, así que estoy seguro al 75 % de que deberías elegir la %L: %A.','Mi capacidad mental quizá pueda con esta. Estoy seguro al 75 % de tener la respuesta. Elige la %L: %A.'],
65:['Me sé bien este tema y estoy seguro al 65 % de tener la respuesta. Yo diría la %L: %A.','Para una pregunta tan inesperada, estoy seguro al 65 % de que es la %L: %A.','Mmm… bueno, estoy seguro al 65 % de poder responderla. ¿Qué tal la %L: %A?'],
45:['Es la mejor respuesta que tengo, y estoy seguro al 45 %. Prueba con la %L: %A.','Vaya, es difícil, pero estoy seguro al menos al 45 % de acertar. Yo elegiría la %L: %A.'],
25:['Esta es una respuesta de la que estoy seguro al 25 %: la opción %L: %A.','Solo estoy seguro al 25 % de saber qué es. Prueba con la %L: %A.']};
$('lExp').onclick=e=>{if(!useLL('exp',e.target))return;snd('ask_expert');const lv=G.n<7?[100,95,75]:G.n<10?[95,75,65]:G.n<14?[75,65,45]:[65,45,25];const c=lv[Math.random()*lv.length|0];
 const g=Math.random()<c/100?G.p[4]:vivos().filter(i=>i!=G.p[4])[0]??G.p[4];const f=EXP[c][Math.random()*EXP[c].length|0].replace('%L','ABCD'[g]).replace('%A',G.p[3][g]);
 llPop(`<div style="position:relative;text-align:center"><img src="spr/a3_1.png" style="width:200px"><div class="mi" style="font-size:12px;width:300px;color:#9cf">${EXPERTOS[G.exp]||'Experto'}</div><div class="mi" style="font-size:12px;width:300px">«${f}»</div></div>`)};
window.M2010={menu,jugar,state:()=>G};
show('sMenu');if(new URLSearchParams(location.search).has('auto'))menu();else intro();
})();
