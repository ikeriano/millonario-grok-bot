(()=>{var Uh=0,Pc=1,Nh=2;var Nu=1,Fh=2,On=3,ri=0,Nt=1,Gt=2,si=0,as=1,Da=2,Ic=3,Lc=4,Oh=5,wi=100,Bh=101,zh=102,kh=103,Hh=104,Vh=200,Gh=201,Wh=202,qh=203,to=204,no=205,Xh=206,Yh=207,Qh=208,$h=209,Jh=210,Zh=211,jh=212,Kh=213,ed=214,io=0,so=1,ao=2,cs=3,ro=4,oo=5,lo=6,co=7,Tl=0,td=1,nd=2,ai=0,id=1,sd=2,ad=3,Al=4,rd=5,od=6,ld=7;var Fu=300,us=301,hs=302,uo=303,ho=304,cr=306,fo=1e3,Ci=1001,po=1002,Zt=1003,cd=1004;var sa=1005;var Mn=1006,yr=1007;var Ri=1008;var Hn=1009,Ou=1010,Bu=1011,Bs=1012,Cl=1013,Pi=1014,Sn=1015,qs=1016,Rl=1017,Pl=1018,ds=1020,zu=35902,ku=1021,Hu=1022,fn=1023,Vu=1024,Gu=1025,rs=1026,fs=1027,Il=1028,Ll=1029,Wu=1030,Dl=1031;var Ul=1033,Ca=33776,Ra=33777,Pa=33778,Ia=33779,mo=35840,go=35841,vo=35842,xo=35843,_o=36196,yo=37492,bo=37496,Mo=37808,So=37809,Eo=37810,wo=37811,To=37812,Ao=37813,Co=37814,Ro=37815,Po=37816,Io=37817,Lo=37818,Do=37819,Uo=37820,No=37821,La=36492,Fo=36494,Oo=36495,qu=36283,Bo=36284,zo=36285,ko=36286;var Ua=2300,Ho=2301,br=2302,Dc=2400,Uc=2401,Nc=2402;var ud=3200,hd=3201;var Nl=0,dd=1,ii="",wt="srgb",vs="srgb-linear",ur="linear",rt="srgb";var Gi=7680;var Fc=519,fd=512,pd=513,md=514,Xu=515,gd=516,vd=517,xd=518,_d=519,Oc=35044;var Bc="300 es",zn=2e3,Na=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mr=Math.PI/180,Fa=180/Math.PI;function Xs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function yd(i,e){return(i%e+e)%e}function Sr(i,e,t){return(1-t)*i+t*e}function ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class i{constructor(e,t,n,s,a,o,r,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,c,l)}set(e,t,n,s,a,o,r,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=r,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],S=s[1],E=s[4],y=s[7],L=s[2],w=s[5],A=s[8];return a[0]=o*v+r*S+c*L,a[3]=o*m+r*E+c*w,a[6]=o*d+r*y+c*A,a[1]=l*v+h*S+u*L,a[4]=l*m+h*E+u*w,a[7]=l*d+h*y+u*A,a[2]=f*v+p*S+g*L,a[5]=f*m+p*E+g*w,a[8]=f*d+p*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*r*l-n*a*h+n*r*c+s*a*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8],u=h*o-r*l,f=r*c-h*a,p=l*a-o*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(r*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*a-r*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*a)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,r){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*r)+o+e,-s*l,s*c,-s*(-l*o+c*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Er=new ke;function Yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){let i=Oa("canvas");return i.style.display="block",i}var zc={};function Ds(i){i in zc||(zc[i]=!0,console.warn(i))}function Md(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Sd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ed(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?ur:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Vc=[.3127,.329],Gc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[vs]:{primaries:kc,whitePoint:Vc,transfer:ur,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:kc,whitePoint:Vc,transfer:rt,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});var Wi,Vo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Oa("canvas")),Wi.width=e.width,Wi.height=e.height;let n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=kn(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wd=0,Ba=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(wr(s[o].image)):a.push(wr(s[o]))}else a=wr(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Td=0,Ft=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ci,s=Ci,a=Mn,o=Ri,r=fn,c=Hn,l=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Xs(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Fu;Ft.DEFAULT_ANISOTROPY=1;var ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(p+1)/2,L=(d+1)/2,w=(h+f)/4,A=(u+v)/4,I=(g+m)/4;return E>y&&E>L?E<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(E),s=w/n,a=A/n):y>L?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=w/s,a=I/s):L<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(L),n=A/a,s=I/a),this.set(n,s,a,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Go=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let a=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},za=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,r){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];if(r===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let m=1-r,d=c*f+l*p+h*g+u*v,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let L=Math.sqrt(E),w=Math.atan2(L,d*S);m=Math.sin(m*w)/L,r=Math.sin(r*w)/L}let y=r*S;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-r){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,o){let r=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[o],f=a[o+1],p=a[o+2],g=a[o+3];return e[t]=r*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-r*p,e[t+2]=l*g+h*p+r*f-c*u,e[t+3]=h*g-r*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,o=e._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(s/2),u=r(a/2),f=c(n/2),p=c(s/2),g=c(a/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],r=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+r+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(o-s)*p}else if(n>r&&n>u){let p=2*Math.sqrt(1+n-r-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(a+l)/p}else if(r>u){let p=2*Math.sqrt(1+r-n-u);this._w=(a-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-r);this._w=(o-s)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,o=e._w,r=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*r+s*l-a*c,this._y=s*h+o*c+a*r-n*l,this._z=a*h+o*l+n*c-s*r,this._w=o*h-n*r-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,a=this._z,o=this._w,r=o*e._w+n*e._x+s*e._y+a*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;let c=1-r*r;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,r),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,r=e.z,c=e.w,l=2*(o*s-r*n),h=2*(r*t-a*s),u=2*(a*n-o*t);return this.x=t+c*l+o*u-r*h,this.y=n+c*h+r*l-a*u,this.z=s+c*u+a*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,o=t.x,r=t.y,c=t.z;return this.x=s*c-a*r,this.y=a*o-n*c,this.z=n*r-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tr=new C,qc=new li,Gn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(a,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),ra.subVectors(this.max,Ts),qi.subVectors(e.a,Ts),Xi.subVectors(e.b,Ts),Yi.subVectors(e.c,Ts),Zn.subVectors(Xi,qi),jn.subVectors(Yi,Xi),xi.subVectors(qi,Yi);let t=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!Ar(t,qi,Xi,Yi,ra)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,qi,Xi,Yi,ra))?!1:(oa.crossVectors(Zn,jn),t=[oa.x,oa.y,oa.z],Ar(t,qi,Xi,Yi,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ln=[new C,new C,new C,new C,new C,new C,new C,new C],un=new C,aa=new Gn,qi=new C,Xi=new C,Yi=new C,Zn=new C,jn=new C,xi=new C,Ts=new C,ra=new C,oa=new C,_i=new C;function Ar(i,e,t,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){_i.fromArray(i,a);let r=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}var Ad=new Gn,As=new C,Cr=new C,Ii=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ad.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Cr)),this.expandByPoint(As.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Dn=new C,Rr=new C,la=new C,Kn=new C,Pr=new C,ca=new C,Ir=new C,qo=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rr.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Rr);let a=e.distanceTo(t)*.5,o=-this.direction.dot(la),r=Kn.dot(this.direction),c=-Kn.dot(la),l=Kn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-r,f=o*r-c,g=a*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*r)+f*(o*u+f+2*c)+l}else f=a,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*c)+l;else f=-a,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*a+r)),f=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(u=Math.max(0,-(o*a+r)),f=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+f*(f+2*c)+l);else f=o>0?-a:a,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rr).addScaledVector(la,f),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,a=e.radius*e.radius;if(s>a)return null;let o=Math.sqrt(a-s),r=n-o,c=n+o;return c<0?null:r<0?this.at(c,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,r,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),u>=0?(r=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||r>s)||((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,s,a){Pr.subVectors(t,e),ca.subVectors(n,e),Ir.crossVectors(Pr,ca);let o=this.direction.dot(Ir),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Kn.subVectors(this.origin,e);let c=r*this.direction.dot(ca.crossVectors(Kn,ca));if(c<0)return null;let l=r*this.direction.dot(Pr.cross(Kn));if(l<0||c+l>o)return null;let h=-r*Kn.dot(Ir);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class i{constructor(e,t,n,s,a,o,r,c,l,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,c,l,h,u,f,p,g,v,m)}set(e,t,n,s,a,o,r,c,l,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=o,d[9]=r,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),a=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let f=o*h,p=o*u,g=r*h,v=r*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-r*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f+v*r,t[4]=g*r-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-r,t[2]=p*r-g,t[6]=v+f*r,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f-v*r,t[4]=-o*u,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*h,t[9]=v-f*r,t[2]=-o*l,t[6]=r,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=r*h,v=r*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=r*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=r*c,v=r*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-r*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=r*c,v=r*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=r*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ei.crossVectors(n,$t),ei.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ei.crossVectors(n,$t)),ei.normalize(),ua.crossVectors($t,ei),s[0]=ei.x,s[4]=ua.x,s[8]=$t.x,s[1]=ei.y,s[5]=ua.y,s[9]=$t.y,s[2]=ei.z,s[6]=ua.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],S=n[3],E=n[7],y=n[11],L=n[15],w=s[0],A=s[4],I=s[8],_=s[12],x=s[1],R=s[5],H=s[9],k=s[13],q=s[2],$=s[6],V=s[10],Z=s[14],X=s[3],ne=s[7],fe=s[11],be=s[15];return a[0]=o*w+r*x+c*q+l*X,a[4]=o*A+r*R+c*$+l*ne,a[8]=o*I+r*H+c*V+l*fe,a[12]=o*_+r*k+c*Z+l*be,a[1]=h*w+u*x+f*q+p*X,a[5]=h*A+u*R+f*$+p*ne,a[9]=h*I+u*H+f*V+p*fe,a[13]=h*_+u*k+f*Z+p*be,a[2]=g*w+v*x+m*q+d*X,a[6]=g*A+v*R+m*$+d*ne,a[10]=g*I+v*H+m*V+d*fe,a[14]=g*_+v*k+m*Z+d*be,a[3]=S*w+E*x+y*q+L*X,a[7]=S*A+E*R+y*$+L*ne,a[11]=S*I+E*H+y*V+L*fe,a[15]=S*_+E*k+y*Z+L*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],r=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+a*c*u-s*l*u-a*r*f+n*l*f+s*r*p-n*c*p)+v*(+t*c*p-t*l*f+a*o*f-s*o*p+s*l*h-a*c*h)+m*(+t*l*u-t*r*p-a*o*u+n*o*p+a*r*h-n*l*h)+d*(-s*r*h-t*c*u+t*r*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],S=u*m*l-v*f*l+v*c*p-r*m*p-u*c*d+r*f*d,E=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,y=h*v*l-g*u*l+g*r*p-o*v*p-h*r*d+o*u*d,L=g*u*c-h*v*c-g*r*f+o*v*f+h*r*m-o*u*m,w=t*S+n*E+s*y+a*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=S*A,e[1]=(v*f*a-u*m*a-v*s*p+n*m*p+u*s*d-n*f*d)*A,e[2]=(r*m*a-v*c*a+v*s*l-n*m*l-r*s*d+n*c*d)*A,e[3]=(u*c*a-r*f*a-u*s*l+n*f*l+r*s*p-n*c*p)*A,e[4]=E*A,e[5]=(h*m*a-g*f*a+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*c*a-o*m*a-g*s*l+t*m*l+o*s*d-t*c*d)*A,e[7]=(o*f*a-h*c*a+h*s*l-t*f*l-o*s*p+t*c*p)*A,e[8]=y*A,e[9]=(g*u*a-h*v*a-g*n*p+t*v*p+h*n*d-t*u*d)*A,e[10]=(o*v*a-g*r*a+g*n*l-t*v*l-o*n*d+t*r*d)*A,e[11]=(h*r*a-o*u*a-h*n*l+t*u*l+o*n*p-t*r*p)*A,e[12]=L*A,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*m+t*u*m)*A,e[14]=(g*r*s-o*v*s-g*n*c+t*v*c+o*n*m-t*r*m)*A,e[15]=(o*u*s-h*r*s+h*n*c-t*u*c-o*n*f+t*r*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,r=e.y,c=e.z,l=a*o,h=a*r;return this.set(l*o+n,l*r-s*c,l*c+s*r,0,l*r+s*c,h*r+n,h*c-s*o,0,l*c-s*r,h*c+s*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,o=t._y,r=t._z,c=t._w,l=a+a,h=o+o,u=r+r,f=a*l,p=a*h,g=a*u,v=o*h,m=o*u,d=r*u,S=c*l,E=c*h,y=c*u,L=n.x,w=n.y,A=n.z;return s[0]=(1-(v+d))*L,s[1]=(p+y)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(f+d))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(m-S)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,a=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),r=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);let l=1/a,h=1/o,u=1/r;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=r,this}makePerspective(e,t,n,s,a,o,r=zn){let c=this.elements,l=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(r===zn)p=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===Na)p=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,o,r=zn){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-a),f=(t+e)*l,p=(n+s)*h,g,v;if(r===zn)g=(o+a)*u,v=-2*u;else if(r===Na)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new C,hn=new lt,Cd=new C(0,0,0),Rd=new C(1,1,1),ei=new C,ua=new C,$t=new C,Xc=new lt,Yc=new li,pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,a=s[0],o=s[4],r=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pd=0,Qc=new C,$i=new li,Un=new lt,ha=new C,Cs=new C,Id=new C,Ld=new li,$c=new C(1,0,0),Jc=new C(0,1,0),Zc=new C(0,0,1),jc={type:"added"},Dd={type:"removed"},Ji={type:"childadded",child:null},Lr={type:"childremoved",child:null},Pt=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new pn,n=new li,s=new C(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Cs,ha,this.up):Un.lookAt(ha,Cs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Un),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(e.materials,this.material[c]));s.material=r}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){let c=this.animations[r];s.animations.push(a(e.animations,c))}}if(t){let r=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){let c=[];for(let l in r){let h=r[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new C(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new C,Nn=new C,Dr=new C,Fn=new C,Zi=new C,ji=new C,Kc=new C,Ur=new C,Nr=new C,Fr=new C,Or=new ot,Br=new ot,zr=new ot,Ti=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){dn.subVectors(s,t),Nn.subVectors(n,t),Dr.subVectors(e,t);let o=dn.dot(dn),r=dn.dot(Nn),c=dn.dot(Dr),l=Nn.dot(Nn),h=Nn.dot(Dr),u=o*l-r*r;if(u===0)return a.set(0,0,0),null;let f=1/u,p=(l*c-r*h)*f,g=(o*h-r*c)*f;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,a,o,r,c){return this.getBarycoord(e,t,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(r,Fn.z),c)}static getInterpolatedAttribute(e,t,n,s,a,o){return Or.setScalar(0),Br.setScalar(0),zr.setScalar(0),Or.fromBufferAttribute(e,t),Br.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Or,a.x),o.addScaledVector(Br,a.y),o.addScaledVector(zr,a.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Nn.subVectors(e,t),dn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,o,r;Zi.subVectors(s,n),ji.subVectors(a,n),Ur.subVectors(e,n);let c=Zi.dot(Ur),l=ji.dot(Ur);if(c<=0&&l<=0)return t.copy(n);Nr.subVectors(e,s);let h=Zi.dot(Nr),u=ji.dot(Nr);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Zi,o);Fr.subVectors(e,a);let p=Zi.dot(Fr),g=ji.dot(Fr);if(g>=0&&p<=g)return t.copy(a);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return r=l/(l-g),t.copy(n).addScaledVector(ji,r);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Kc.subVectors(a,s),r=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Kc,r);let d=1/(m+v+f);return o=v*d,r=f*d,t.copy(n).addScaledVector(Zi,o).addScaledVector(ji,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},da={h:0,s:0,l:0};function kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=yd(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=kr(o,a,e+1/3),this.g=kr(o,a,e),this.b=kr(o,a,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=Qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return $e.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ct(Ut.r*255,0,255))*65536+Math.round(Ct(Ut.g*255,0,255))*256+Math.round(Ct(Ut.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ut.copy(this),t);let n=Ut.r,s=Ut.g,a=Ut.b,o=Math.max(n,s,a),r=Math.min(n,s,a),c,l,h=(r+o)/2;if(r===o)c=0,l=0;else{let u=o-r;switch(l=h<=.5?u/(o+r):u/(2-o-r),o){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=wt){$e.fromWorkingColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,s=Ut.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(da);let n=Sr(ti.h,da.h,t),s=Sr(ti.s,da.s,t),a=Sr(ti.l,da.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Ge;Ge.NAMES=Qu;var Ud=0,ci=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Xs(),this.name="",this.blending=as,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let o=[];for(let r in a){let c=a[r];delete c.metadata,o.push(c)}return o}if(t){let a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kt=class extends ci{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new C,fa=new ge,jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}};var Ha=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nd=0,an=new lt,Hr=new Pt,Ki=new C,Jt=new Gn,Rs=new Gn,Et=new C,qt=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?Va:Ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new ke().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,a=e.length;s<a;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];Jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){let r=t[a];Rs.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(Jt.min,Rs.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,Rs.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(Rs.min),Jt.expandByPoint(Rs.max))}Jt.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)Et.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let a=0,o=t.length;a<o;a++){let r=t[a],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)Et.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(e,l),Et.add(Ki)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),r=[],c=[];for(let I=0;I<n.count;I++)r[I]=new C,c[I]=new C;let l=new C,h=new C,u=new C,f=new ge,p=new ge,g=new ge,v=new C,m=new C;function d(I,_,x){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,x),f.fromBufferAttribute(a,I),p.fromBufferAttribute(a,_),g.fromBufferAttribute(a,x),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),r[I].add(v),r[_].add(v),r[x].add(v),c[I].add(m),c[_].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,_=S.length;I<_;++I){let x=S[I],R=x.start,H=x.count;for(let k=R,q=R+H;k<q;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new C,y=new C,L=new C,w=new C;function A(I){L.fromBufferAttribute(s,I),w.copy(L);let _=r[I];E.copy(_),E.sub(L.multiplyScalar(L.dot(_))).normalize(),y.crossVectors(w,_);let R=y.dot(c[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,_=S.length;I<_;++I){let x=S[I],R=x.start,H=x.count;for(let k=R,q=R+H;k<q;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new C,a=new C,o=new C,r=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),r.add(h),c.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(r,c){let l=r.array,h=r.itemSize,u=r.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let v=0,m=c.length;v<m;v++){r.isInterleavedBufferAttribute?p=c[v]*r.data.stride+r.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let r in s){let c=s[r],l=e(c,n);t.setAttribute(r,l)}let a=this.morphAttributes;for(let r in a){let c=[],l=a[r];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[r]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let r=0,c=o.length;r<c;r++){let l=o[r];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],u=a[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new lt,yi=new qo,pa=new Ii,tu=new C,ma=new C,ga=new C,va=new C,Vr=new C,xa=new C,nu=new C,_a=new C,_e=class extends Pt{constructor(e=new qt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){let r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let r=this.morphTargetInfluences;if(a&&r){xa.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=r[c],u=a[c];h!==0&&(Vr.fromBufferAttribute(u,e),o?xa.addScaledVector(Vr,h):xa.addScaledVector(Vr.sub(t),h))}t.add(xa)}return t}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(a),yi.copy(e.ray).recast(e.near),!(pa.containsPoint(yi.origin)===!1&&(yi.intersectSphere(pa,tu)===null||yi.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(a).invert(),yi.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s,a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,p=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,L=E;y<L;y+=3){let w=r.getX(y),A=r.getX(y+1),I=r.getX(y+2);s=ya(this,d,e,n,l,h,u,w,A,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(r.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let S=r.getX(m),E=r.getX(m+1),y=r.getX(m+2);s=ya(this,o,e,n,l,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,L=E;y<L;y+=3){let w=y,A=y+1,I=y+2;s=ya(this,d,e,n,l,h,u,w,A,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let S=m,E=m+1,y=m+2;s=ya(this,o,e,n,l,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fd(i,e,t,n,s,a,o,r){let c;if(e.side===Nt?c=n.intersectTriangle(o,a,s,!0,r):c=n.intersectTriangle(s,a,o,e.side===ri,r),c===null)return null;_a.copy(r),_a.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:i}}function ya(i,e,t,n,s,a,o,r,c,l){i.getVertexPosition(r,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,va);let h=Fd(i,e,t,n,ma,ga,va,nu);if(h){let u=new C;Ti.getBarycoord(nu,ma,ga,va,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,r,c,l,u,new ge)),a&&(h.uv1=Ti.getInterpolatedAttribute(a,r,c,l,u,new ge)),o&&(h.normal=Ti.getInterpolatedAttribute(o,r,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:r,b:c,c:l,normal:new C,materialIndex:0};Ti.getNormal(ma,ga,va,f.normal),h.face=f,h.barycoord=u}return h}var Xt=class i extends qt{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};let r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(v,m,d,S,E,y,L,w,A,I,_){let x=y/A,R=L/I,H=y/2,k=L/2,q=w/2,$=A+1,V=I+1,Z=0,X=0,ne=new C;for(let fe=0;fe<V;fe++){let be=fe*R-k;for(let Ie=0;Ie<$;Ie++){let Ye=Ie*x-H;ne[v]=Ye*S,ne[m]=be*E,ne[d]=q,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[d]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ie/A),u.push(1-fe/I),Z+=1}}for(let fe=0;fe<I;fe++)for(let be=0;be<A;be++){let Ie=f+be+$*fe,Ye=f+be+$*(fe+1),Q=f+(be+1)+$*(fe+1),j=f+(be+1)+$*fe;c.push(Ie,Ye,j),c.push(Ye,Q,j),X+=6}r.addGroup(p,X,_),p+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=ps(i[t]);for(let s in n)e[s]=n[s]}return e}function Od(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $u(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Bd={clone:ps,merge:kt},zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ci{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ga=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new C,iu=new ge,su=new ge,Rt=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,iu,su),t.subVectors(su,iu)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},es=-90,ts=1,Xo=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(es,ts,e,t);s.layers=this.layers,this.add(s);let a=new Rt(es,ts,e,t);a.layers=this.layers,this.add(a);let o=new Rt(es,ts,e,t);o.layers=this.layers,this.add(o);let r=new Rt(es,ts,e,t);r.layers=this.layers,this.add(r);let c=new Rt(es,ts,e,t);c.layers=this.layers,this.add(c);let l=new Rt(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,o,r,c]=t;for(let l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,o,r,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,r),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wa=class extends Ft{constructor(e,t,n,s,a,o,r,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,s,a,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yo=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xt(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:si});a.uniforms.tEquirect.value=t;let o=new _e(s,a),r=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Mn),new Xo(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}},Gr=new C,Hd=new C,Vd=new ke,Bn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gr.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vd.getNormalMatrix(e),s=this.coplanarPoint(Gr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new Ii,ba=new C,zs=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,a=new Bn,o=new Bn){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){let r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){let n=this.planes,s=e.elements,a=s[0],o=s[1],r=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],S=s[13],E=s[14],y=s[15];if(n[0].setComponents(c-a,f-l,m-p,y-d).normalize(),n[1].setComponents(c+a,f+l,m+p,y+d).normalize(),n[2].setComponents(c+o,f+h,m+g,y+S).normalize(),n[3].setComponents(c-o,f-h,m-g,y-S).normalize(),n[4].setComponents(c-r,f-u,m-v,y-E).normalize(),t===zn)n[5].setComponents(c+r,f+u,m+v,y+E).normalize();else if(t===Na)n[5].setComponents(r,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ju(){let i=null,e=!1,t=null,n=null;function s(a,o){t(a,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Gd(i){let e=new WeakMap;function t(r,c){let l=r.array,h=r.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),r.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)r.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,r),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);let c=e.get(r);c&&(i.deleteBuffer(c.buffer),e.delete(r))}function o(r,c){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){let h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}let l=e.get(r);if(l===void 0)e.set(r,t(r,c));else if(l.version<r.version){if(l.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,r,c),l.version=r.version}}return{get:s,remove:a,update:o}}var wn=class i extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,o=t/2,r=Math.floor(n),c=Math.floor(s),l=r+1,h=c+1,u=e/r,f=t/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let S=d*f-o;for(let E=0;E<l;E++){let y=E*u-a;g.push(y,-S,0),v.push(0,0,1),m.push(E/r),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<r;S++){let E=S+l*d,y=S+l*(d+1),L=S+1+l*(d+1),w=S+1+l*d;p.push(E,y,w),p.push(y,L,w)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Wd,alphahash_pars_fragment:qd,alphamap_fragment:Xd,alphamap_pars_fragment:Yd,alphatest_fragment:Qd,alphatest_pars_fragment:$d,aomap_fragment:Jd,aomap_pars_fragment:Zd,batching_pars_vertex:jd,batching_vertex:Kd,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:af,clipping_planes_fragment:rf,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:uf,color_pars_fragment:hf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:yf,colorspace_fragment:bf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:kf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:qf,lights_fragment_end:Xf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:$f,logdepthbuf_vertex:Jf,map_fragment:Zf,map_pars_fragment:jf,map_particle_fragment:Kf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:ap,morphtarget_pars_vertex:rp,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:up,normal_pars_vertex:hp,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:yp,project_vertex:bp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:qp,backgroundCube_vert:Xp,backgroundCube_frag:Yp,cube_vert:Qp,cube_frag:$p,depth_vert:Jp,depth_frag:Zp,distanceRGBA_vert:jp,distanceRGBA_frag:Kp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:am,meshlambert_vert:rm,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:um,meshnormal_frag:hm,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:vm,points_vert:xm,points_frag:_m,shadow_vert:ym,shadow_frag:bm,sprite_vert:Mm,sprite_frag:Sm},le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},bn={basic:{uniforms:kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:kt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:kt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:kt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:kt([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:kt([le.lights,le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};bn.physical={uniforms:kt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ma={r:0,b:0,g:0},Mi=new pn,Em=new lt;function wm(i,e,t,n,s,a,o){let r=new Ge(0),c=a===!0?0:1,l,h,u=null,f=0,p=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function v(S){let E=!1,y=g(S);y===null?d(r,c):y&&y.isColor&&(d(y,1),E=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,E){let y=g(E);y&&(y.isCubeTexture||y.mapping===cr)?(h===void 0&&(h=new _e(new Xt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ps(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(E.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(Mi)),h.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,(u!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _e(new wn(2,2),new En({name:"BackgroundMaterial",uniforms:ps(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,E){S.getRGB(Ma,$u(i)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,E,o)}return{getClearColor:function(){return r},setClearColor:function(S,E=1){r.set(S),c=E,d(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(r,c)},render:v,addToRenderList:m}}function Tm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),a=s,o=!1;function r(x,R,H,k,q){let $=!1,V=u(k,H,R);a!==V&&(a=V,l(a.object)),$=p(x,k,H,q),$&&g(x,k,H,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(x,R,H,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,H){let k=H.wireframe===!0,q=n[x.id];q===void 0&&(q={},n[x.id]=q);let $=q[R.id];$===void 0&&($={},q[R.id]=$);let V=$[k];return V===void 0&&(V=f(c()),$[k]=V),V}function f(x){let R=[],H=[],k=[];for(let q=0;q<t;q++)R[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,R,H,k){let q=a.attributes,$=R.attributes,V=0,Z=H.getAttributes();for(let X in Z)if(Z[X].location>=0){let fe=q[X],be=$[X];if(be===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;V++}return a.attributesNum!==V||a.index!==k}function g(x,R,H,k){let q={},$=R.attributes,V=0,Z=H.getAttributes();for(let X in Z)if(Z[X].location>=0){let fe=$[X];fe===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));let be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),q[X]=be,V++}a.attributes=q,a.attributesNum=V,a.index=k}function v(){let x=a.newAttributes;for(let R=0,H=x.length;R<H;R++)x[R]=0}function m(x){d(x,0)}function d(x,R){let H=a.newAttributes,k=a.enabledAttributes,q=a.attributeDivisors;H[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),q[x]!==R&&(i.vertexAttribDivisor(x,R),q[x]=R)}function S(){let x=a.newAttributes,R=a.enabledAttributes;for(let H=0,k=R.length;H<k;H++)R[H]!==x[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function E(x,R,H,k,q,$,V){V===!0?i.vertexAttribIPointer(x,R,H,q,$):i.vertexAttribPointer(x,R,H,k,q,$)}function y(x,R,H,k){v();let q=k.attributes,$=H.getAttributes(),V=R.defaultAttributeValues;for(let Z in $){let X=$[Z];if(X.location>=0){let ne=q[Z];if(ne===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){let fe=ne.normalized,be=ne.itemSize,Ie=e.get(ne);if(Ie===void 0)continue;let Ye=Ie.buffer,Q=Ie.type,j=Ie.bytesPerElement,ve=Q===i.INT||Q===i.UNSIGNED_INT||ne.gpuType===Cl;if(ne.isInterleavedBufferAttribute){let oe=ne.data,Ce=oe.stride,Re=ne.offset;if(oe.isInstancedInterleavedBuffer){for(let ae=0;ae<X.locationSize;ae++)d(X.location+ae,oe.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<X.locationSize;ae++)m(X.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ae=0;ae<X.locationSize;ae++)E(X.location+ae,be/X.locationSize,Q,fe,Ce*j,(Re+be/X.locationSize*ae)*j,ve)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)d(X.location+oe,ne.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let oe=0;oe<X.locationSize;oe++)E(X.location+oe,be/X.locationSize,Q,fe,be*j,be/X.locationSize*oe*j,ve)}}else if(V!==void 0){let fe=V[Z];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(X.location,fe);break;case 3:i.vertexAttrib3fv(X.location,fe);break;case 4:i.vertexAttrib4fv(X.location,fe);break;default:i.vertexAttrib1fv(X.location,fe)}}}}S()}function L(){I();for(let x in n){let R=n[x];for(let H in R){let k=R[H];for(let q in k)h(k[q].object),delete k[q];delete R[H]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let H in R){let k=R[H];for(let q in k)h(k[q].object),delete k[q];delete R[H]}delete n[x.id]}function A(x){for(let R in n){let H=n[R];if(H[x.id]===void 0)continue;let k=H[x.id];for(let q in k)h(k[q].object),delete k[q];delete H[x.id]}}function I(){_(),o=!0,a!==s&&(a=s,l(a.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:I,resetDefaultState:_,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Am(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function r(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function Cm(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){let I=A===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Sn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:r,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:L,maxSamples:w}}function Rm(i){let e=this,t=null,n=0,s=!1,a=!1,o=new Bn,r=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):l();else{let S=a?0:n,E=S*4,y=d.clippingState||null;c.value=y,y=h(g,f,E,p);for(let L=0;L!==E;++L)y[L]=t[L];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let d=p+v*4,S=f.matrixWorldInverse;r.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(u[E]).applyMatrix4(S,r),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Pm(i){let e=new WeakMap;function t(o,r){return r===uo?o.mapping=us:r===ho&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let r=o.mapping;if(r===uo||r===ho)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Yo(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let r=o.target;r.removeEventListener("dispose",s);let c=e.get(r);c!==void 0&&(e.delete(r),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}var qa=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,o=n+e,r=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ss=4,au=[.125,.215,.35,.446,.526,.582],Ai=20,Wr=new qa,ru=new Ge,qr=null,Xr=0,Yr=0,Qr=!1,Ei=(1+Math.sqrt(5))/2,ns=1/Ei,ou=[new C(-Ei,ns,0),new C(Ei,ns,0),new C(-ns,0,Ei),new C(ns,0,Ei),new C(0,Ei,-ns),new C(0,Ei,ns),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qr,Xr,Yr),this._renderer.xr.enabled=Qr,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:qs,format:fn,colorSpace:vs,depthBuffer:!1},s=lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(a)),this._blurMaterial=Lm(a,e,t)}return s}_compileMaterial(e){let t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,s){let r=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ru),h.toneMapping=ai,h.autoClear=!1;let p=new Kt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new _e(new Xt,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(ru),v=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(r.up.set(0,c[d],0),r.lookAt(l[d],0,0)):S===1?(r.up.set(0,0,c[d]),r.lookAt(0,l[d],0)):(r.up.set(0,c[d],0),r.lookAt(0,0,l[d]));let E=this._cubeSize;Sa(s,S*E,d>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===us||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let a=s?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=e;let c=this._cubeSize;Sa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Wr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=ou[(s-a-1)%ou.length];this._blur(e,a-1,a,o,r)}t.autoClear=n}_blur(e,t,n,s,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",a),this._halfBlur(o,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,o,r){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _e(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):Ai;m>Ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let d=[],S=0;for(let A=0;A<Ai;++A){let I=A/v,_=Math.exp(-I*I/2);d.push(_),A===0?S+=_:A<m&&(S+=2*_)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let y=this._sizeLods[s],L=3*y*(s>E-ss?s-E+ss:0),w=4*(this._cubeSize-y);Sa(t,L,w,3*y,2*y),c.setRenderTarget(t),c.render(u,Wr)}};function Im(i){let e=[],t=[],n=[],s=i,a=i-ss+1+au.length;for(let o=0;o<a;o++){let r=Math.pow(2,s);t.push(r);let c=1/r;o>i-ss?c=au[o-i+ss-1]:o===0&&(c=0),n.push(c);let l=1/(r-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,I=w>2?0:-1,_=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];S.set(_,v*g*w),E.set(f,m*g*w);let x=[w,w,w,w,w,w];y.set(x,d*g*w)}let L=new qt;L.setAttribute("position",new jt(S,v)),L.setAttribute("uv",new jt(E,m)),L.setAttribute("faceIndex",new jt(y,d)),e.push(L),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lu(i,e,t){let n=new Vn(i,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lm(i,e,t){let n=new Float32Array(Ai),s=new C(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function cu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function uu(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dm(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){let c=r.mapping,l=c===uo||c===ho,h=c===us||c===hs;if(l||h){let u=e.get(r),f=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new Xa(i)),u=l?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{let p=r.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Xa(i)),u=l?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",a),u.texture):null}}}return r}function s(r){let c=0,l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function a(r){let c=r.target;c.removeEventListener("dispose",a);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Um(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,e,t,n){let s={},a=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let E=0,y=S.length;E<y;E+=3){let L=S[E+0],w=S[E+1],A=S[E+2];f.push(L,w,w,A,A,L)}}else if(g!==void 0){let S=g.array;v=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){let L=E+0,w=E+1,A=E+2;f.push(L,w,w,A,A,L)}}else return;let m=new(Yu(f)?Va:Ha)(f,1);m.version=v;let d=a.get(u);d&&e.remove(d),a.set(u,m)}function h(u){let f=a.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return a.get(u)}return{get:r,update:c,getWireframeAttribute:h}}function Fm(i,e,t){let n;function s(f){n=f}let a,o;function r(f){a=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,a,f*o),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,v,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*v[S];t.update(d,n,1)}}this.setMode=s,this.setIndex=r,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Om(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(a/3);break;case i.LINES:t.lines+=r*(a/2);break;case i.LINE_STRIP:t.lines+=r*(a-1);break;case i.LINE_LOOP:t.lines+=r*a;break;case i.POINTS:t.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bm(i,e,t){let n=new WeakMap,s=new ot;function a(o,r,c){let l=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(r);if(f===void 0||f.count!==u){let _=function(){A.dispose(),n.delete(r),r.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,v=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],d=r.morphAttributes.normal||[],S=r.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let y=r.attributes.position.count*E,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*L*4*u),A=new za(w,y,L,u);A.type=Sn,A.needsUpdate=!0;let I=E*4;for(let x=0;x<u;x++){let R=m[x],H=d[x],k=S[x],q=y*L*4*x;for(let $=0;$<R.count;$++){let V=$*I;p===!0&&(s.fromBufferAttribute(R,$),w[q+V+0]=s.x,w[q+V+1]=s.y,w[q+V+2]=s.z,w[q+V+3]=0),g===!0&&(s.fromBufferAttribute(H,$),w[q+V+4]=s.x,w[q+V+5]=s.y,w[q+V+6]=s.z,w[q+V+7]=0),v===!0&&(s.fromBufferAttribute(k,$),w[q+V+8]=s.x,w[q+V+9]=s.y,w[q+V+10]=s.z,w[q+V+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new ge(y,L)},n.set(r,f),r.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=r.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function zm(i,e,t,n){let s=new WeakMap;function a(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function r(c){let l=c.target;l.removeEventListener("dispose",r),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var Ya=class extends Ft{constructor(e,t,n,s,a,o,r,c,l,h=rs){if(h!==rs&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Pi),n===void 0&&h===fs&&(n=ds),super(null,s,a,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zu=new Ft,hu=new Ya(1,1),ju=new za,Ku=new Wo,eh=new Wa,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=du[s];if(a===void 0&&(a=new Float32Array(s),du[s]=a),e!==0){n.toArray(a,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(a,r)}return a}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;gu.set(n),i.uniformMatrix2fv(this.addr,!1,gu),St(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;mu.set(n),i.uniformMatrix3fv(this.addr,!1,mu),St(t,n)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;pu.set(n),i.uniformMatrix4fv(this.addr,!1,pu),St(t,n)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(hu.compareFunction=Xu,a=hu):a=Zu,t.setTexture2D(e||a,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ku,s)}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eh,s)}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ju,s)}function a0(i){switch(i){case 5126:return km;case 35664:return Hm;case 35665:return Vm;case 35666:return Gm;case 35674:return Wm;case 35675:return qm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return Qm;case 35668:case 35672:return $m;case 35669:case 35673:return Jm;case 5125:return Zm;case 36294:return jm;case 36295:return Km;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function r0(i,e){i.uniform1fv(this.addr,e)}function o0(i,e){let t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function l0(i,e){let t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){let t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function u0(i,e){let t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h0(i,e){let t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d0(i,e){let t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f0(i,e){i.uniform1iv(this.addr,e)}function p0(i,e){i.uniform2iv(this.addr,e)}function m0(i,e){i.uniform3iv(this.addr,e)}function g0(i,e){i.uniform4iv(this.addr,e)}function v0(i,e){i.uniform1uiv(this.addr,e)}function x0(i,e){i.uniform2uiv(this.addr,e)}function _0(i,e){i.uniform3uiv(this.addr,e)}function y0(i,e){i.uniform4uiv(this.addr,e)}function b0(i,e,t){let n=this.cache,s=e.length,a=hr(t,s);Mt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zu,a[o])}function M0(i,e,t){let n=this.cache,s=e.length,a=hr(t,s);Mt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ku,a[o])}function S0(i,e,t){let n=this.cache,s=e.length,a=hr(t,s);Mt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||eh,a[o])}function E0(i,e,t){let n=this.cache,s=e.length,a=hr(t,s);Mt(n,a)||(i.uniform1iv(this.addr,a),St(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ju,a[o])}function w0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return x0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}var Qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a0(t.type)}},$o=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}},Jo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,o=s.length;a!==o;++a){let r=s[a];r.setValue(e,t[r.id],n)}}},$r=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function T0(i,e,t){let n=i.name,s=n.length;for($r.lastIndex=0;;){let a=$r.exec(n),o=$r.lastIndex,r=a[1],c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===s){vu(t,l===void 0?new Qo(r,i,e):new $o(r,i,e));break}else{let u=t.map[r];u===void 0&&(u=new Jo(r),vu(t,u)),t=u}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);T0(a,o,this)}}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){let r=t[a],c=n[r.id];c.needsUpdate!==!1&&r.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function xu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A0=37297,C0=0;function R0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){let r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}var _u=new ke;function P0(i){$e._getMatrix(_u,$e.workingColorSpace,i);let e=`mat3( ${_u.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ur:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+R0(i.getShaderSource(e),o)}else return s}function I0(i,e){let t=P0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L0(i,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case ad:t="Cineon";break;case Al:t="ACESFilmic";break;case od:t="AgX";break;case ld:t="Neutral";break;case rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ea=new C;function D0(){$e.getLuminanceCoefficients(Ea);let i=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function N0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),o=a.name,r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function Us(i){return i!==""}function bu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(O0,z0)}var B0=new Map;function z0(i,e){let t=Ve[e];if(t===void 0){let n=B0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zo(t)}var k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(k0,H0)}function H0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Eu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function G0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case hs:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hs&&(e="ENVMAP_MODE_REFRACTION"),e}function q0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tl:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function X0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y0(i,e,t,n){let s=i.getContext(),a=t.defines,o=t.vertexShader,r=t.fragmentShader,c=V0(t),l=G0(t),h=W0(t),u=q0(t),f=X0(t),p=U0(t),g=N0(a),v=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),d.length>0&&(d+=`
`)):(m=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),d=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ai?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),D0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=Zo(o),o=bu(o,t),o=Mu(o,t),r=Zo(r),r=bu(r,t),r=Mu(r,t),o=Su(o),r=Su(r),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=S+m+o,y=S+d+r,L=xu(s,s.VERTEX_SHADER,E),w=xu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,L),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(L).trim(),q=s.getShaderInfoLog(w).trim(),$=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,w);else{let Z=yu(s,L,"vertex"),X=yu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Z+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(V=!1);V&&(R.diagnostics={runnable:$,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:d}})}s.deleteShader(L),s.deleteShader(w),I=new ls(s,v),_=F0(s,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,A0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=w,this}var Q0=0,jo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ko(e),t.set(e,n)),n}},Ko=class{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}};function $0(i,e,t,n,s,a,o){let r=new ka,c=new jo,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,x,R,H,k){let q=H.fog,$=k.geometry,V=_.isMeshStandardMaterial?H.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),X=Z&&Z.mapping===cr?Z.image.height:null,ne=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=fe!==void 0?fe.length:0,Ie=0;$.morphAttributes.position!==void 0&&(Ie=1),$.morphAttributes.normal!==void 0&&(Ie=2),$.morphAttributes.color!==void 0&&(Ie=3);let Ye,Q,j,ve;if(ne){let it=bn[ne];Ye=it.vertexShader,Q=it.fragmentShader}else Ye=_.vertexShader,Q=_.fragmentShader,c.update(_),j=c.getVertexShaderID(_),ve=c.getFragmentShaderID(_);let oe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Re=k.isInstancedMesh===!0,ae=k.isBatchedMesh===!0,at=!!_.map,qe=!!_.matcap,ht=!!Z,N=!!_.aoMap,zt=!!_.lightMap,Oe=!!_.bumpMap,Xe=!!_.normalMap,Te=!!_.displacementMap,ut=!!_.emissiveMap,Ae=!!_.metalnessMap,T=!!_.roughnessMap,b=_.anisotropy>0,P=_.clearcoat>0,F=_.dispersion>0,z=_.iridescence>0,B=_.sheen>0,ie=_.transmission>0,ee=b&&!!_.anisotropyMap,ce=P&&!!_.clearcoatMap,Le=P&&!!_.clearcoatNormalMap,K=P&&!!_.clearcoatRoughnessMap,me=z&&!!_.iridescenceMap,Pe=z&&!!_.iridescenceThicknessMap,De=B&&!!_.sheenColorMap,xe=B&&!!_.sheenRoughnessMap,Qe=!!_.specularMap,He=!!_.specularColorMap,dt=!!_.specularIntensityMap,D=ie&&!!_.transmissionMap,ue=ie&&!!_.thicknessMap,Y=!!_.gradientMap,J=!!_.alphaMap,pe=_.alphaTest>0,he=!!_.alphaHash,Be=!!_.extensions,_t=ai;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=i.toneMapping);let Lt={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:Q,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ae,batchingColor:ae&&k._colorsTexture!==null,instancing:Re,instancingColor:Re&&k.instanceColor!==null,instancingMorph:Re&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:vs,alphaToCoverage:!!_.alphaToCoverage,map:at,matcap:qe,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:zt,bumpMap:Oe,normalMap:Xe,displacementMap:f&&Te,emissiveMap:ut,normalMapObjectSpace:Xe&&_.normalMapType===dd,normalMapTangentSpace:Xe&&_.normalMapType===Nl,metalnessMap:Ae,roughnessMap:T,anisotropy:b,anisotropyMap:ee,clearcoat:P,clearcoatMap:ce,clearcoatNormalMap:Le,clearcoatRoughnessMap:K,dispersion:F,iridescence:z,iridescenceMap:me,iridescenceThicknessMap:Pe,sheen:B,sheenColorMap:De,sheenRoughnessMap:xe,specularMap:Qe,specularColorMap:He,specularIntensityMap:dt,transmission:ie,transmissionMap:D,thicknessMap:ue,gradientMap:Y,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:he,combine:_.combine,mapUv:at&&v(_.map.channel),aoMapUv:N&&v(_.aoMap.channel),lightMapUv:zt&&v(_.lightMap.channel),bumpMapUv:Oe&&v(_.bumpMap.channel),normalMapUv:Xe&&v(_.normalMap.channel),displacementMapUv:Te&&v(_.displacementMap.channel),emissiveMapUv:ut&&v(_.emissiveMap.channel),metalnessMapUv:Ae&&v(_.metalnessMap.channel),roughnessMapUv:T&&v(_.roughnessMap.channel),anisotropyMapUv:ee&&v(_.anisotropyMap.channel),clearcoatMapUv:ce&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(_.sheenRoughnessMap.channel),specularMapUv:Qe&&v(_.specularMap.channel),specularColorMapUv:He&&v(_.specularColorMap.channel),specularIntensityMapUv:dt&&v(_.specularIntensityMap.channel),transmissionMapUv:D&&v(_.transmissionMap.channel),thicknessMapUv:ue&&v(_.thicknessMap.channel),alphaMapUv:J&&v(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Xe||b),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(at||J),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:at&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===Nt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function d(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)x.push(R),x.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(S(x,_),E(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function S(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function E(_,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),_.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),_.push(r.mask)}function y(_){let x=g[_.type],R;if(x){let H=bn[x];R=Bd.clone(H.uniforms)}else R=_.uniforms;return R}function L(_,x){let R;for(let H=0,k=h.length;H<k;H++){let q=h[H];if(q.cacheKey===x){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Y0(i,x,_,a),h.push(R)),R}function w(_){if(--_.usedTimes===0){let x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function A(_){c.remove(_)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:I}}function J0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function s(o,r,c){i.get(o)[r]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tu(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function r(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Z0),n.length>1&&n.sort(f||wu),s.length>1&&s.sort(f||wu)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:r,unshift:c,finish:h,sort:l}}function j0(){let i=new WeakMap;function e(n,s){let a=i.get(n),o;return a===void 0?(o=new Tu,i.set(n,[o])):s>=a.length?(o=new Tu,a.push(o)):o=a[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function K0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ge};break;case"SpotLight":t={position:new C,direction:new C,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function eg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tg=0;function ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ig(i){let e=new K0,t=eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,a=new lt,o=new lt;function r(l){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,S=0,E=0,y=0,L=0,w=0,A=0;l.sort(ng);for(let _=0,x=l.length;_<x;_++){let R=l[_],H=R.color,k=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*k,u+=H.g*k,f+=H.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);A++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,X=t.get(R);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(H).multiplyScalar(k),V.distance=q,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[v]=V;let Z=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=Z.matrix,R.castShadow){let X=t.get(R);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=$,y++}v++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(H).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let Z=R.shadow,X=t.get(R);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=V,g++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==y||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=y,I.numSpotMaps=L,I.numLightProbes=A,n.version=tg++)}function c(l,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let E=l[d];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:r,setupView:c,state:n}}function Au(i){let e=new ig(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function r(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:r,setupLightsView:c,pushLight:a,pushShadow:o}}function sg(i){let e=new WeakMap;function t(s,a=0){let o=e.get(s),r;return o===void 0?(r=new Au(i),e.set(s,[r])):a>=o.length?(r=new Au(i),o.push(r)):r=o[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}var el=class extends ci{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends ci{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function og(i,e,t){let n=new zs,s=new ge,a=new ge,o=new ot,r=new el({depthPacking:hd}),c=new tl,l={},h=t.maxTextureSize,u={[ri]:Nt,[Nt]:ri,[Gt]:Gt},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:ag,fragmentShader:rg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let d=this.type;this.render=function(w,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let _=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(si),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=d!==On&&this.type===On,q=d===On&&this.type!==On;for(let $=0,V=w.length;$<V;$++){let Z=w[$],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ne=X.getFrameExtents();if(s.multiply(ne),a.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ne.x),s.x=a.x*ne.x,X.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ne.y),s.y=a.y*ne.y,X.mapSize.y=a.y)),X.map===null||k===!0||q===!0){let be=this.type!==On?{minFilter:Zt,magFilter:Zt}:{};X.map!==null&&X.map.dispose(),X.map=new Vn(s.x,s.y,be),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let fe=X.getViewportCount();for(let be=0;be<fe;be++){let Ie=X.getViewport(be);o.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),H.viewport(o),X.updateMatrices(Z,be),n=X.getFrustum(),y(A,I,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===On&&S(X,I),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(_,x,R)};function S(w,A){let I=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,I,p,v,null)}function E(w,A,I,_){let x=null,R=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?c:r,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=x.uuid,k=A.uuid,q=l[H];q===void 0&&(q={},l[H]=q);let $=q[k];$===void 0&&($=x.clone(),q[k]=$,A.addEventListener("dispose",L)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,_===On?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=i.properties.get(x);H.light=I}return x}function y(w,A,I,_,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===On)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let k=e.update(w),q=w.material;if(Array.isArray(q)){let $=k.groups;for(let V=0,Z=$.length;V<Z;V++){let X=$[V],ne=q[X.materialIndex];if(ne&&ne.visible){let fe=E(w,ne,_,x);w.onBeforeShadow(i,w,A,I,k,fe,X),i.renderBufferDirect(I,null,k,fe,w,X),w.onAfterShadow(i,w,A,I,k,fe,X)}}}else if(q.visible){let $=E(w,q,_,x);w.onBeforeShadow(i,w,A,I,k,$,null),i.renderBufferDirect(I,null,k,$,w,null),w.onAfterShadow(i,w,A,I,k,$,null)}}let H=w.children;for(let k=0,q=H.length;k<q;k++)y(H[k],A,I,_,x)}function L(w){w.target.removeEventListener("dispose",L);for(let I in l){let _=l[I],x=w.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}var lg={[io]:so,[ao]:lo,[ro]:co,[cs]:oo,[so]:io,[lo]:ao,[co]:ro,[oo]:cs};function cg(i,e){function t(){let D=!1,ue=new ot,Y=null,J=new ot(0,0,0,0);return{setMask:function(pe){Y!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){D=pe},setClear:function(pe,he,Be,_t,Lt){Lt===!0&&(pe*=_t,he*=_t,Be*=_t),ue.set(pe,he,Be,_t),J.equals(ue)===!1&&(i.clearColor(pe,he,Be,_t),J.copy(ue))},reset:function(){D=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,Y=null,J=null,pe=null;return{setReversed:function(he){if(ue!==he){let Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let _t=pe;pe=null,this.setClear(_t)}ue=he},getReversed:function(){return ue},setTest:function(he){he?oe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(he){Y!==he&&!D&&(i.depthMask(he),Y=he)},setFunc:function(he){if(ue&&(he=lg[he]),J!==he){switch(he){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=he}},setLocked:function(he){D=he},setClear:function(he){pe!==he&&(ue&&(he=1-he),i.clearDepth(he),pe=he)},reset:function(){D=!1,Y=null,J=null,pe=null,ue=!1}}}function s(){let D=!1,ue=null,Y=null,J=null,pe=null,he=null,Be=null,_t=null,Lt=null;return{setTest:function(it){D||(it?oe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(it){ue!==it&&!D&&(i.stencilMask(it),ue=it)},setFunc:function(it,ln,Pn){(Y!==it||J!==ln||pe!==Pn)&&(i.stencilFunc(it,ln,Pn),Y=it,J=ln,pe=Pn)},setOp:function(it,ln,Pn){(he!==it||Be!==ln||_t!==Pn)&&(i.stencilOp(it,ln,Pn),he=it,Be=ln,_t=Pn)},setLocked:function(it){D=it},setClear:function(it){Lt!==it&&(i.clearStencil(it),Lt=it)},reset:function(){D=!1,ue=null,Y=null,J=null,pe=null,he=null,Be=null,_t=null,Lt=null}}}let a=new t,o=new n,r=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,E=null,y=null,L=null,w=null,A=new Ge(0,0,0),I=0,_=!1,x=null,R=null,H=null,k=null,q=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Z>=2);let ne=null,fe={},be=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Ye=new ot().fromArray(be),Q=new ot().fromArray(Ie);function j(D,ue,Y,J){let pe=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Y;Be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ue+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return he}let ve={};ve[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),oe(i.DEPTH_TEST),o.setFunc(cs),Oe(!1),Xe(Pc),oe(i.CULL_FACE),N(si);function oe(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ce(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Re(D,ue){return u[D]!==ue?(i.bindFramebuffer(D,ue),u[D]=ue,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ae(D,ue){let Y=p,J=!1;if(D){Y=f.get(ue),Y===void 0&&(Y=[],f.set(ue,Y));let pe=D.textures;if(Y.length!==pe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Be=pe.length;he<Be;he++)Y[he]=i.COLOR_ATTACHMENT0+he;Y.length=pe.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function at(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let qe={[wi]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};qe[kh]=i.MIN,qe[Hh]=i.MAX;let ht={[Vh]:i.ZERO,[Gh]:i.ONE,[Wh]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Qh]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ue,Y,J,pe,he,Be,_t,Lt,it){if(D===si){v===!0&&(Ce(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),D!==Oh){if(D!==m||it!==_){if((d!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),d=wi,y=wi),it)switch(D){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,L=null,w=null,A.set(0,0,0),I=0,m=D,_=it}return}pe=pe||ue,he=he||Y,Be=Be||J,(ue!==d||pe!==y)&&(i.blendEquationSeparate(qe[ue],qe[pe]),d=ue,y=pe),(Y!==S||J!==E||he!==L||Be!==w)&&(i.blendFuncSeparate(ht[Y],ht[J],ht[he],ht[Be]),S=Y,E=J,L=he,w=Be),(_t.equals(A)===!1||Lt!==I)&&(i.blendColor(_t.r,_t.g,_t.b,Lt),A.copy(_t),I=Lt),m=D,_=!1}function zt(D,ue){D.side===Gt?Ce(i.CULL_FACE):oe(i.CULL_FACE);let Y=D.side===Nt;ue&&(Y=!Y),Oe(Y),D.blending===as&&D.transparent===!1?N(si):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);let J=D.stencilWrite;r.setTest(J),J&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Xe(D){D!==Uh?(oe(i.CULL_FACE),D!==R&&(D===Pc?i.cullFace(i.BACK):D===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),R=D}function Te(D){D!==H&&(V&&i.lineWidth(D),H=D)}function ut(D,ue,Y){D?(oe(i.POLYGON_OFFSET_FILL),(k!==ue||q!==Y)&&(i.polygonOffset(ue,Y),k=ue,q=Y)):Ce(i.POLYGON_OFFSET_FILL)}function Ae(D){D?oe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+$-1),ne!==D&&(i.activeTexture(D),ne=D)}function b(D,ue,Y){Y===void 0&&(ne===null?Y=i.TEXTURE0+$-1:Y=ne);let J=fe[Y];J===void 0&&(J={type:void 0,texture:void 0},fe[Y]=J),(J.type!==D||J.texture!==ue)&&(ne!==Y&&(i.activeTexture(Y),ne=Y),i.bindTexture(D,ue||ve[D]),J.type=D,J.texture=ue)}function P(){let D=fe[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ye.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function xe(D){Q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function Qe(D,ue){let Y=l.get(ue);Y===void 0&&(Y=new WeakMap,l.set(ue,Y));let J=Y.get(D);J===void 0&&(J=i.getUniformBlockIndex(ue,D.name),Y.set(D,J))}function He(D,ue){let J=l.get(ue).get(D);c.get(ue)!==J&&(i.uniformBlockBinding(ue,J,D.__bindingPointIndex),c.set(ue,J))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,fe={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,E=null,y=null,L=null,w=null,A=new Ge(0,0,0),I=0,_=!1,x=null,R=null,H=null,k=null,q=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:oe,disable:Ce,bindFramebuffer:Re,drawBuffers:ae,useProgram:at,setBlending:N,setMaterial:zt,setFlipSided:Oe,setCullFace:Xe,setLineWidth:Te,setPolygonOffset:ut,setScissorTest:Ae,activeTexture:T,bindTexture:b,unbindTexture:P,compressedTexImage2D:F,compressedTexImage3D:z,texImage2D:me,texImage3D:Pe,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:Le,texStorage3D:K,texSubImage2D:B,texSubImage3D:ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:ce,scissor:De,viewport:xe,reset:dt}}function Cu(i,e,t,n){let s=ug(n);switch(t){case ku:return i*e;case Vu:return i*e;case Gu:return i*e*2;case Il:return i*e/s.components*s.byteLength;case Ll:return i*e/s.components*s.byteLength;case Wu:return i*e*2/s.components*s.byteLength;case Dl:return i*e*2/s.components*s.byteLength;case Hu:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case Ul:return i*e*4/s.components*s.byteLength;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(e,8)/4;case mo:case vo:return Math.max(i,8)*Math.max(e,8)/2;case _o:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qu:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ug(i){switch(i){case Hn:case Ou:return{byteLength:1,components:1};case Bs:case Bu:case qs:return{byteLength:2,components:1};case Rl:case Pl:return{byteLength:2,components:4};case Pi:case Cl:case Sn:return{byteLength:4,components:1};case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hg(i,e,t,n,s,a,o){let r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return p?new OffscreenCanvas(T,b):Oa("canvas")}function v(T,b,P){let F=1,z=Ae(T);if((z.width>P||z.height>P)&&(F=P/Math.max(z.width,z.height)),F<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let B=Math.floor(F*z.width),ie=Math.floor(F*z.height);u===void 0&&(u=g(B,ie));let ee=b?g(B,ie):u;return ee.width=B,ee.height=ie,ee.getContext("2d").drawImage(T,0,0,B,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+B+"x"+ie+")."),ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,b,P,F,z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let B=b;if(b===i.RED&&(P===i.FLOAT&&(B=i.R32F),P===i.HALF_FLOAT&&(B=i.R16F),P===i.UNSIGNED_BYTE&&(B=i.R8)),b===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(B=i.R8UI),P===i.UNSIGNED_SHORT&&(B=i.R16UI),P===i.UNSIGNED_INT&&(B=i.R32UI),P===i.BYTE&&(B=i.R8I),P===i.SHORT&&(B=i.R16I),P===i.INT&&(B=i.R32I)),b===i.RG&&(P===i.FLOAT&&(B=i.RG32F),P===i.HALF_FLOAT&&(B=i.RG16F),P===i.UNSIGNED_BYTE&&(B=i.RG8)),b===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(B=i.RG8UI),P===i.UNSIGNED_SHORT&&(B=i.RG16UI),P===i.UNSIGNED_INT&&(B=i.RG32UI),P===i.BYTE&&(B=i.RG8I),P===i.SHORT&&(B=i.RG16I),P===i.INT&&(B=i.RG32I)),b===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(B=i.RGB8UI),P===i.UNSIGNED_SHORT&&(B=i.RGB16UI),P===i.UNSIGNED_INT&&(B=i.RGB32UI),P===i.BYTE&&(B=i.RGB8I),P===i.SHORT&&(B=i.RGB16I),P===i.INT&&(B=i.RGB32I)),b===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),P===i.UNSIGNED_INT&&(B=i.RGBA32UI),P===i.BYTE&&(B=i.RGBA8I),P===i.SHORT&&(B=i.RGBA16I),P===i.INT&&(B=i.RGBA32I)),b===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),b===i.RGBA){let ie=z?ur:$e.getTransfer(F);P===i.FLOAT&&(B=i.RGBA32F),P===i.HALF_FLOAT&&(B=i.RGBA16F),P===i.UNSIGNED_BYTE&&(B=ie===rt?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function y(T,b){let P;return T?b===null||b===Pi||b===ds?P=i.DEPTH24_STENCIL8:b===Sn?P=i.DEPTH32F_STENCIL8:b===Bs&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===ds?P=i.DEPTH_COMPONENT24:b===Sn?P=i.DEPTH_COMPONENT32F:b===Bs&&(P=i.DEPTH_COMPONENT16),P}function L(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Zt&&T.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){let b=T.target;b.removeEventListener("dispose",w),I(b),b.isVideoTexture&&h.delete(b)}function A(T){let b=T.target;b.removeEventListener("dispose",A),x(b)}function I(T){let b=n.get(T);if(b.__webglInit===void 0)return;let P=T.source,F=f.get(P);if(F){let z=F[b.__cacheKey];z.usedTimes--,z.usedTimes===0&&_(T),Object.keys(F).length===0&&f.delete(P)}n.remove(T)}function _(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let P=T.source,F=f.get(P);delete F[b.__cacheKey],o.memory.textures--}function x(T){let b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(b.__webglFramebuffer[F]))for(let z=0;z<b.__webglFramebuffer[F].length;z++)i.deleteFramebuffer(b.__webglFramebuffer[F][z]);else i.deleteFramebuffer(b.__webglFramebuffer[F]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[F])}else{if(Array.isArray(b.__webglFramebuffer))for(let F=0;F<b.__webglFramebuffer.length;F++)i.deleteFramebuffer(b.__webglFramebuffer[F]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let F=0;F<b.__webglColorRenderbuffer.length;F++)b.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[F]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let P=T.textures;for(let F=0,z=P.length;F<z;F++){let B=n.get(P[F]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(P[F])}n.remove(T)}let R=0;function H(){R=0}function k(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function q(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function $(T,b){let P=n.get(T);if(T.isVideoTexture&&Te(T),T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){let F=T.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(P,T,b);return}}t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+b)}function V(T,b){let P=n.get(T);if(T.version>0&&P.__version!==T.version){Q(P,T,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+b)}function Z(T,b){let P=n.get(T);if(T.version>0&&P.__version!==T.version){Q(P,T,b);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+b)}function X(T,b){let P=n.get(T);if(T.version>0&&P.__version!==T.version){j(P,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+b)}let ne={[fo]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},fe={[Zt]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},be={[fd]:i.NEVER,[_d]:i.ALWAYS,[pd]:i.LESS,[Xu]:i.LEQUAL,[md]:i.EQUAL,[xd]:i.GEQUAL,[gd]:i.GREATER,[vd]:i.NOTEQUAL};function Ie(T,b){if(b.type===Sn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===yr||b.magFilter===sa||b.magFilter===Ri||b.minFilter===Mn||b.minFilter===yr||b.minFilter===sa||b.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ne[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ne[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ne[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==sa&&b.minFilter!==Ri||b.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ye(T,b){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",w));let F=b.source,z=f.get(F);z===void 0&&(z={},f.set(F,z));let B=q(b);if(B!==T.__cacheKey){z[B]===void 0&&(z[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),z[B].usedTimes++;let ie=z[T.__cacheKey];ie!==void 0&&(z[T.__cacheKey].usedTimes--,ie.usedTimes===0&&_(b)),T.__cacheKey=B,T.__webglTexture=z[B].texture}return P}function Q(T,b,P){let F=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(F=i.TEXTURE_3D);let z=Ye(T,b),B=b.source;t.bindTexture(F,T.__webglTexture,i.TEXTURE0+P);let ie=n.get(B);if(B.version!==ie.__version||z===!0){t.activeTexture(i.TEXTURE0+P);let ee=$e.getPrimaries($e.workingColorSpace),ce=b.colorSpace===ii?null:$e.getPrimaries(b.colorSpace),Le=b.colorSpace===ii||ee===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let K=v(b.image,!1,s.maxTextureSize);K=ut(b,K);let me=a.convert(b.format,b.colorSpace),Pe=a.convert(b.type),De=E(b.internalFormat,me,Pe,b.colorSpace,b.isVideoTexture);Ie(F,b);let xe,Qe=b.mipmaps,He=b.isVideoTexture!==!0,dt=ie.__version===void 0||z===!0,D=B.dataReady,ue=L(b,K);if(b.isDepthTexture)De=y(b.format===fs,b.type),dt&&(He?t.texStorage2D(i.TEXTURE_2D,1,De,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,De,K.width,K.height,0,me,Pe,null));else if(b.isDataTexture)if(Qe.length>0){He&&dt&&t.texStorage2D(i.TEXTURE_2D,ue,De,Qe[0].width,Qe[0].height);for(let Y=0,J=Qe.length;Y<J;Y++)xe=Qe[Y],He?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,xe.width,xe.height,me,Pe,xe.data):t.texImage2D(i.TEXTURE_2D,Y,De,xe.width,xe.height,0,me,Pe,xe.data);b.generateMipmaps=!1}else He?(dt&&t.texStorage2D(i.TEXTURE_2D,ue,De,K.width,K.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,me,Pe,K.data)):t.texImage2D(i.TEXTURE_2D,0,De,K.width,K.height,0,me,Pe,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,De,Qe[0].width,Qe[0].height,K.depth);for(let Y=0,J=Qe.length;Y<J;Y++)if(xe=Qe[Y],b.format!==fn)if(me!==null)if(He){if(D)if(b.layerUpdates.size>0){let pe=Cu(xe.width,xe.height,b.format,b.type);for(let he of b.layerUpdates){let Be=xe.data.subarray(he*pe/xe.data.BYTES_PER_ELEMENT,(he+1)*pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,he,xe.width,xe.height,1,me,Be)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,K.depth,me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,De,xe.width,xe.height,K.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,K.depth,me,Pe,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,De,xe.width,xe.height,K.depth,0,me,Pe,xe.data)}else{He&&dt&&t.texStorage2D(i.TEXTURE_2D,ue,De,Qe[0].width,Qe[0].height);for(let Y=0,J=Qe.length;Y<J;Y++)xe=Qe[Y],b.format!==fn?me!==null?He?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,xe.width,xe.height,me,Pe,xe.data):t.texImage2D(i.TEXTURE_2D,Y,De,xe.width,xe.height,0,me,Pe,xe.data)}else if(b.isDataArrayTexture)if(He){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,De,K.width,K.height,K.depth),D)if(b.layerUpdates.size>0){let Y=Cu(K.width,K.height,b.format,b.type);for(let J of b.layerUpdates){let pe=K.data.subarray(J*Y/K.data.BYTES_PER_ELEMENT,(J+1)*Y/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,K.width,K.height,1,me,Pe,pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,me,Pe,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,K.width,K.height,K.depth,0,me,Pe,K.data);else if(b.isData3DTexture)He?(dt&&t.texStorage3D(i.TEXTURE_3D,ue,De,K.width,K.height,K.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,me,Pe,K.data)):t.texImage3D(i.TEXTURE_3D,0,De,K.width,K.height,K.depth,0,me,Pe,K.data);else if(b.isFramebufferTexture){if(dt)if(He)t.texStorage2D(i.TEXTURE_2D,ue,De,K.width,K.height);else{let Y=K.width,J=K.height;for(let pe=0;pe<ue;pe++)t.texImage2D(i.TEXTURE_2D,pe,De,Y,J,0,me,Pe,null),Y>>=1,J>>=1}}else if(Qe.length>0){if(He&&dt){let Y=Ae(Qe[0]);t.texStorage2D(i.TEXTURE_2D,ue,De,Y.width,Y.height)}for(let Y=0,J=Qe.length;Y<J;Y++)xe=Qe[Y],He?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,me,Pe,xe):t.texImage2D(i.TEXTURE_2D,Y,De,me,Pe,xe);b.generateMipmaps=!1}else if(He){if(dt){let Y=Ae(K);t.texStorage2D(i.TEXTURE_2D,ue,De,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Pe,K)}else t.texImage2D(i.TEXTURE_2D,0,De,me,Pe,K);m(b)&&d(F),ie.__version=B.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function j(T,b,P){if(b.image.length!==6)return;let F=Ye(T,b),z=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+P);let B=n.get(z);if(z.version!==B.__version||F===!0){t.activeTexture(i.TEXTURE0+P);let ie=$e.getPrimaries($e.workingColorSpace),ee=b.colorSpace===ii?null:$e.getPrimaries(b.colorSpace),ce=b.colorSpace===ii||ie===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Le=b.isCompressedTexture||b.image[0].isCompressedTexture,K=b.image[0]&&b.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Le&&!K?me[J]=v(b.image[J],!0,s.maxCubemapSize):me[J]=K?b.image[J].image:b.image[J],me[J]=ut(b,me[J]);let Pe=me[0],De=a.convert(b.format,b.colorSpace),xe=a.convert(b.type),Qe=E(b.internalFormat,De,xe,b.colorSpace),He=b.isVideoTexture!==!0,dt=B.__version===void 0||F===!0,D=z.dataReady,ue=L(b,Pe);Ie(i.TEXTURE_CUBE_MAP,b);let Y;if(Le){He&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Qe,Pe.width,Pe.height);for(let J=0;J<6;J++){Y=me[J].mipmaps;for(let pe=0;pe<Y.length;pe++){let he=Y[pe];b.format!==fn?De!==null?He?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,he.width,he.height,De,xe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Qe,he.width,he.height,0,De,xe,he.data)}}}else{if(Y=b.mipmaps,He&&dt){Y.length>0&&ue++;let J=Ae(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Qe,J.width,J.height)}for(let J=0;J<6;J++)if(K){He?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,De,xe,me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,me[J].width,me[J].height,0,De,xe,me[J].data);for(let pe=0;pe<Y.length;pe++){let Be=Y[pe].image[J].image;He?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Be.width,Be.height,De,xe,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Qe,Be.width,Be.height,0,De,xe,Be.data)}}else{He?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,xe,me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,De,xe,me[J]);for(let pe=0;pe<Y.length;pe++){let he=Y[pe];He?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,De,xe,he.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Qe,De,xe,he.image[J])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),B.__version=z.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ve(T,b,P,F,z,B){let ie=a.convert(P.format,P.colorSpace),ee=a.convert(P.type),ce=E(P.internalFormat,ie,ee,P.colorSpace),Le=n.get(b),K=n.get(P);if(K.__renderTarget=b,!Le.__hasExternalTextures){let me=Math.max(1,b.width>>B),Pe=Math.max(1,b.height>>B);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,B,ce,me,Pe,b.depth,0,ie,ee,null):t.texImage2D(z,B,ce,me,Pe,0,ie,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Xe(b)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,z,K.__webglTexture,0,Oe(b)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,z,K.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(T,b,P){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let F=b.depthTexture,z=F&&F.isDepthTexture?F.type:null,B=y(b.stencilBuffer,z),ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=Oe(b);Xe(b)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,B,b.width,b.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,B,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,B,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,T)}else{let F=b.textures;for(let z=0;z<F.length;z++){let B=F[z],ie=a.convert(B.format,B.colorSpace),ee=a.convert(B.type),ce=E(B.internalFormat,ie,ee,B.colorSpace),Le=Oe(b);P&&Xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ce,b.width,b.height):Xe(b)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ce,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ce,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(b.depthTexture);F.__renderTarget=b,(!F.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let z=F.__webglTexture,B=Oe(b);if(b.depthTexture.format===rs)Xe(b)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(b.depthTexture.format===fs)Xe(b)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Re(T){let b=n.get(T),P=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let F=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),F){let z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,F.removeEventListener("dispose",z)};F.addEventListener("dispose",z),b.__depthDisposeCallback=z}b.__boundDepthTexture=F}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ce(b.__webglFramebuffer,T)}else if(P){b.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[F]),b.__webglDepthbuffer[F]===void 0)b.__webglDepthbuffer[F]=i.createRenderbuffer(),oe(b.__webglDepthbuffer[F],T,!1);else{let z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=b.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,B)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),oe(b.__webglDepthbuffer,T,!1);else{let F=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,b,P){let F=n.get(T);b!==void 0&&ve(F.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Re(T)}function at(T){let b=T.texture,P=n.get(T),F=n.get(b);T.addEventListener("dispose",A);let z=T.textures,B=T.isWebGLCubeRenderTarget===!0,ie=z.length>1;if(ie||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=b.version,o.memory.textures++),B){P.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps&&b.mipmaps.length>0){P.__webglFramebuffer[ee]=[];for(let ce=0;ce<b.mipmaps.length;ce++)P.__webglFramebuffer[ee][ce]=i.createFramebuffer()}else P.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){P.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)P.__webglFramebuffer[ee]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ie)for(let ee=0,ce=z.length;ee<ce;ee++){let Le=n.get(z[ee]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Xe(T)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ee=0;ee<z.length;ee++){let ce=z[ee];P.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[ee]);let Le=a.convert(ce.format,ce.colorSpace),K=a.convert(ce.type),me=E(ce.internalFormat,Le,K,ce.colorSpace,T.isXRRenderTarget===!0),Pe=Oe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,P.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(P.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)ve(P.__webglFramebuffer[ee][ce],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce);else ve(P.__webglFramebuffer[ee],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(b)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let ee=0,ce=z.length;ee<ce;ee++){let Le=z[ee],K=n.get(Le);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),Ie(i.TEXTURE_2D,Le),ve(P.__webglFramebuffer,T,Le,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,0),m(Le)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,F.__webglTexture),Ie(ee,b),b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)ve(P.__webglFramebuffer[ce],T,b,i.COLOR_ATTACHMENT0,ee,ce);else ve(P.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,ee,0);m(b)&&d(ee),t.unbindTexture()}T.depthBuffer&&Re(T)}function qe(T){let b=T.textures;for(let P=0,F=b.length;P<F;P++){let z=b[P];if(m(z)){let B=S(T),ie=n.get(z).__webglTexture;t.bindTexture(B,ie),d(B),t.unbindTexture()}}}let ht=[],N=[];function zt(T){if(T.samples>0){if(Xe(T)===!1){let b=T.textures,P=T.width,F=T.height,z=i.COLOR_BUFFER_BIT,B=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(T),ee=b.length>1;if(ee)for(let ce=0;ce<b.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ce=0;ce<b.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ce]);let Le=n.get(b[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,P,F,0,0,P,F,z,i.NEAREST),c===!0&&(ht.length=0,N.length=0,ht.push(i.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ht.push(B),N.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ce=0;ce<b.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ce]);let Le=n.get(b[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Oe(T){return Math.min(s.maxSamples,T.samples)}function Xe(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function ut(T,b){let P=T.colorSpace,F=T.format,z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==vs&&P!==ii&&($e.getTransfer(P)===rt?(F!==fn||z!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),b}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=ae,this.setupRenderTarget=at,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Xe}function dg(i,e){function t(n,s=ii){let a,o=$e.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return i.BYTE;if(n===Bu)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===Hu)return i.RGB;if(n===fn)return i.RGBA;if(n===Vu)return i.LUMINANCE;if(n===Gu)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===Wu)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===Ca||n===Ra||n===Pa||n===Ia)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ca)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ca)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===vo||n===xo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===mo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===yo||n===bo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===_o||n===yo)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===bo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===So||n===Eo||n===wo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Mo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Fo||n===Oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===La)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===Bo||n===zo||n===ko)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===La)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nl=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Wt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null,r=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return r!==null&&(r.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ft,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sl=class extends oi{constructor(e,t){super();let n=this,s=null,a=1,o=null,r="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,v=new il,m=t.getContextAttributes(),d=null,S=null,E=[],y=[],L=new ge,w=null,A=new Rt;A.viewport=new ot;let I=new Rt;I.viewport=new ot;let _=[A,I],x=new nl,R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let j=E[Q];return j===void 0&&(j=new Ns,E[Q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Q){let j=E[Q];return j===void 0&&(j=new Ns,E[Q]=j),j.getGripSpace()},this.getHand=function(Q){let j=E[Q];return j===void 0&&(j=new Ns,E[Q]=j),j.getHandSpace()};function k(Q){let j=y.indexOf(Q.inputSource);if(j===-1)return;let ve=E[j];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,l||o),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let Q=0;Q<E.length;Q++){let j=y[Q];j!==null&&(y[Q]=null,E[Q].disconnect(j))}R=null,H=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,S=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Vn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ve=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?fs:rs,ve=m.stencil?ds:Pi);let Ce={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Vn(f.textureWidth,f.textureHeight,{format:fn,type:Hn,depthTexture:new Ya(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(r),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(Q){for(let j=0;j<Q.removed.length;j++){let ve=Q.removed[j],oe=y.indexOf(ve);oe>=0&&(y[oe]=null,E[oe].disconnect(ve))}for(let j=0;j<Q.added.length;j++){let ve=Q.added[j],oe=y.indexOf(ve);if(oe===-1){for(let Re=0;Re<E.length;Re++)if(Re>=y.length){y.push(ve),oe=Re;break}else if(y[Re]===null){y[Re]=ve,oe=Re;break}if(oe===-1)break}let Ce=E[oe];Ce&&Ce.connect(ve)}}let V=new C,Z=new C;function X(Q,j,ve){V.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);let oe=V.distanceTo(Z),Ce=j.projectionMatrix.elements,Re=ve.projectionMatrix.elements,ae=Ce[14]/(Ce[10]-1),at=Ce[14]/(Ce[10]+1),qe=(Ce[9]+1)/Ce[5],ht=(Ce[9]-1)/Ce[5],N=(Ce[8]-1)/Ce[0],zt=(Re[8]+1)/Re[0],Oe=ae*N,Xe=ae*zt,Te=oe/(-N+zt),ut=Te*-N;if(j.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ut),Q.translateZ(Te),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ce[10]===-1)Q.projectionMatrix.copy(j.projectionMatrix),Q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Ae=ae+Te,T=at+Te,b=Oe-ut,P=Xe+(oe-ut),F=qe*at/T*Ae,z=ht*at/T*Ae;Q.projectionMatrix.makePerspective(b,P,F,z,Ae,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ne(Q,j){j===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(j.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let j=Q.near,ve=Q.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),x.near=I.near=A.near=j,x.far=I.far=A.far=ve,(R!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,H=x.far),A.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,x.layers.mask=A.layers.mask|I.layers.mask;let oe=Q.parent,Ce=x.cameras;ne(x,oe);for(let Re=0;Re<Ce.length;Re++)ne(Ce[Re],oe);Ce.length===2?X(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),fe(Q,x,oe)};function fe(Q,j,ve){ve===null?Q.matrix.copy(j.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(j.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(j.projectionMatrix),Q.projectionMatrixInverse.copy(j.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Fa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let be=null;function Ie(Q,j){if(h=j.getViewerPose(l||o),g=j,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let oe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Re=0;Re<ve.length;Re++){let ae=ve[Re],at=null;if(p!==null)at=p.getViewport(ae);else{let ht=u.getViewSubImage(f,ae);at=ht.viewport,Re===0&&(e.setRenderTargetTextures(S,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(S))}let qe=_[Re];qe===void 0&&(qe=new Rt,qe.layers.enable(Re),qe.viewport=new ot,_[Re]=qe),qe.matrix.fromArray(ae.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ae.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(at.x,at.y,at.width,at.height),Re===0&&(x.matrix.copy(qe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(qe)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let Re=u.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,s.renderState)}}for(let ve=0;ve<E.length;ve++){let oe=y[ve],Ce=E[ve];oe!==null&&Ce!==void 0&&Ce.update(oe,j,l||o)}be&&be(Q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Ye=new Ju;Ye.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){be=Q},this.dispose=function(){}}},Si=new pn,gg=new lt;function vg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,$u(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),u(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(a(m,d),g(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),v(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&r(m,d)):d.isPointsMaterial?c(m,d,S,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Nt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Nt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,Si.copy(y),Si.x*=-1,Si.y*=-1,Si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(Si)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function r(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,e,t,n){let s={},a={},o=[],r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let y=E.program;n.uniformBlockBinding(S,y)}function l(S,E){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let L=E.program;n.updateUBOMapping(S,L);let w=e.render.frame;a[S.id]!==w&&(f(S),a[S.id]=w)}function h(S){let E=u();S.__bindingPointIndex=E;let y=i.createBuffer(),L=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let S=0;S<r;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let E=s[S.id],y=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,A=y.length;w<A;w++){let I=Array.isArray(y[w])?y[w]:[y[w]];for(let _=0,x=I.length;_<x;_++){let R=I[_];if(p(R,w,_,L)===!0){let H=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],q=0;for(let $=0;$<k.length;$++){let V=k[$],Z=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+q,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,y,L){let w=S.value,A=E+"_"+y;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{let I=L[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return L[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(S){let E=S.uniforms,y=0,L=16;for(let A=0,I=E.length;A<I;A++){let _=Array.isArray(E[A])?E[A]:[E[A]];for(let x=0,R=_.length;x<R;x++){let H=_[x],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,$=k.length;q<$;q++){let V=k[q],Z=v(V),X=y%L,ne=X%Z.boundary,fe=X+ne;y+=ne,fe!==0&&L-fe<Z.storage&&(y+=L-fe),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Z.storage}}}let w=y%L;return w>0&&(y+=L-w),S.__size=y,S.__cache={},this}function v(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},a={}}return{bind:c,update:l,dispose:d}}var Qa=class{constructor(e={}){let{canvas:t=bd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=ai,this.toneMappingExposure=1;let y=this,L=!1,w=0,A=0,I=null,_=-1,x=null,R=new ot,H=new ot,k=null,q=new Ge(0),$=0,V=t.width,Z=t.height,X=1,ne=null,fe=null,be=new ot(0,0,V,Z),Ie=new ot(0,0,V,Z),Ye=!1,Q=new zs,j=!1,ve=!1,oe=new lt,Ce=new lt,Re=new C,ae=new ot,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function ht(){return I===null?X:1}let N=n;function zt(M,U){return t.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){let U="webgl2";if(N=zt(U,M),N===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,Xe,Te,ut,Ae,T,b,P,F,z,B,ie,ee,ce,Le,K,me,Pe,De,xe,Qe,He,dt,D;function ue(){Oe=new Um(N),Oe.init(),He=new dg(N,Oe),Xe=new Cm(N,Oe,e,He),Te=new cg(N,Oe),Xe.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),ut=new Om(N),Ae=new J0,T=new hg(N,Oe,Te,Ae,Xe,He,ut),b=new Pm(y),P=new Dm(y),F=new Gd(N),dt=new Tm(N,F),z=new Nm(N,F,ut,dt),B=new zm(N,z,F,ut),De=new Bm(N,Xe,T),K=new Rm(Ae),ie=new $0(y,b,P,Oe,Xe,dt,K),ee=new vg(y,Ae),ce=new j0,Le=new sg(Oe),Pe=new wm(y,b,P,Te,B,p,c),me=new og(y,B,Xe),D=new xg(N,ut,Xe,Te),xe=new Am(N,Oe,ut),Qe=new Fm(N,Oe,ut),ut.programs=ie.programs,y.capabilities=Xe,y.extensions=Oe,y.properties=Ae,y.renderLists=ce,y.shadowMap=me,y.state=Te,y.info=ut}ue();let Y=new sl(y,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(V,Z,!1))},this.getSize=function(M){return M.set(V,Z)},this.setSize=function(M,U,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Z=U,t.width=Math.floor(M*X),t.height=Math.floor(U*X),G===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(V*X,Z*X).floor()},this.setDrawingBufferSize=function(M,U,G){V=M,Z=U,X=G,t.width=Math.floor(M*G),t.height=Math.floor(U*G),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,U,G,W){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,U,G,W),Te.viewport(R.copy(be).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(Ie)},this.setScissor=function(M,U,G,W){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,U,G,W),Te.scissor(H.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){Te.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,U=!0,G=!0){let W=0;if(M){let O=!1;if(I!==null){let te=I.texture.format;O=te===Ul||te===Dl||te===Ll}if(O){let te=I.texture.type,de=te===Hn||te===Pi||te===Bs||te===ds||te===Rl||te===Pl,Me=Pe.getClearColor(),Se=Pe.getClearAlpha(),Ue=Me.r,ze=Me.g,Ee=Me.b;de?(g[0]=Ue,g[1]=ze,g[2]=Ee,g[3]=Se,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Ue,v[1]=ze,v[2]=Ee,v[3]=Se,N.clearBufferiv(N.COLOR,0,v))}else W|=N.COLOR_BUFFER_BIT}U&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),Le.dispose(),Ae.dispose(),b.dispose(),P.dispose(),B.dispose(),dt.dispose(),D.dispose(),ie.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mc),Y.removeEventListener("sessionend",Sc),vi.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let M=ut.autoReset,U=me.enabled,G=me.autoUpdate,W=me.needsUpdate,O=me.type;ue(),ut.autoReset=M,me.enabled=U,me.autoUpdate=G,me.needsUpdate=W,me.type=O}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Be(M){let U=M.target;U.removeEventListener("dispose",Be),_t(U)}function _t(M){Lt(M),Ae.remove(M)}function Lt(M){let U=Ae.get(M).programs;U!==void 0&&(U.forEach(function(G){ie.releaseProgram(G)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,G,W,O,te){U===null&&(U=at);let de=O.isMesh&&O.matrixWorld.determinant()<0,Me=Ih(M,U,G,W,O);Te.setMaterial(W,de);let Se=G.index,Ue=1;if(W.wireframe===!0){if(Se=z.getWireframeAttribute(G),Se===void 0)return;Ue=2}let ze=G.drawRange,Ee=G.attributes.position,Je=ze.start*Ue,ft=(ze.start+ze.count)*Ue;te!==null&&(Je=Math.max(Je,te.start*Ue),ft=Math.min(ft,(te.start+te.count)*Ue)),Se!==null?(Je=Math.max(Je,0),ft=Math.min(ft,Se.count)):Ee!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Ee.count));let pt=ft-Je;if(pt<0||pt===1/0)return;dt.setup(O,W,Me,G,Se);let Ht,et=xe;if(Se!==null&&(Ht=F.get(Se),et=Qe,et.setIndex(Ht)),O.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*ht()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(O.isLine){let we=W.linewidth;we===void 0&&(we=1),Te.setLineWidth(we*ht()),O.isLineSegments?et.setMode(N.LINES):O.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else O.isPoints?et.setMode(N.POINTS):O.isSprite&&et.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let we=O._multiDrawStarts,In=O._multiDrawCounts,tt=O._multiDrawCount,cn=Se?F.get(Se).bytesPerElement:1,Vi=Ae.get(W).currentProgram.getUniforms();for(let Qt=0;Qt<tt;Qt++)Vi.setValue(N,"_gl_DrawID",Qt),et.render(we[Qt]/cn,In[Qt])}else if(O.isInstancedMesh)et.renderInstances(Je,pt,O.count);else if(G.isInstancedBufferGeometry){let we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,In=Math.min(G.instanceCount,we);et.renderInstances(Je,pt,In)}else et.render(Je,pt)};function it(M,U,G){M.transparent===!0&&M.side===Gt&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,ia(M,U,G),M.side=ri,M.needsUpdate=!0,ia(M,U,G),M.side=Gt):ia(M,U,G)}this.compile=function(M,U,G=null){G===null&&(G=M),d=Le.get(G),d.init(U),E.push(d),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let W=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let te=O.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){let Me=te[de];it(Me,G,O),W.add(Me)}else it(te,G,O),W.add(te)}),E.pop(),d=null,W},this.compileAsync=function(M,U,G=null){let W=this.compile(M,U,G);return new Promise(O=>{function te(){if(W.forEach(function(de){Ae.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){O(M);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let ln=null;function Pn(M){ln&&ln(M)}function Mc(){vi.stop()}function Sc(){vi.start()}let vi=new Ju;vi.setAnimationLoop(Pn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(M){ln=M,Y.setAnimationLoop(M),M===null?vi.stop():vi.start()},Y.addEventListener("sessionstart",Mc),Y.addEventListener("sessionend",Sc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,I),d=Le.get(M,E.length),d.init(U),E.push(d),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,j=K.init(this.clippingPlanes,ve),m=ce.get(M,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){let te=y.xr.getDepthSensingMesh();te!==null&&_r(te,U,-1/0,y.sortObjects)}_r(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,fe),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&Pe.addToRenderList(m,M),this.info.render.frame++,j===!0&&K.beginShadows();let G=d.state.shadowsArray;me.render(G,M,U),j===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){let te=U.cameras;if(O.length>0)for(let de=0,Me=te.length;de<Me;de++){let Se=te[de];wc(W,O,M,Se)}qe&&Pe.render(M);for(let de=0,Me=te.length;de<Me;de++){let Se=te[de];Ec(m,M,Se,Se.viewport)}}else O.length>0&&wc(W,O,M,U),qe&&Pe.render(M),Ec(m,M,U);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(y,M,U),dt.resetDefaultState(),_=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],j===!0&&K.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function _r(M,U,G,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){W&&ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);let de=B.update(M),Me=M.material;Me.visible&&m.push(M,de,Me,G,ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){let de=B.update(M),Me=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ae.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ae.copy(de.boundingSphere.center)),ae.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(Me)){let Se=de.groups;for(let Ue=0,ze=Se.length;Ue<ze;Ue++){let Ee=Se[Ue],Je=Me[Ee.materialIndex];Je&&Je.visible&&m.push(M,de,Je,G,ae.z,Ee)}}else Me.visible&&m.push(M,de,Me,G,ae.z,null)}}let te=M.children;for(let de=0,Me=te.length;de<Me;de++)_r(te[de],U,G,W)}function Ec(M,U,G,W){let O=M.opaque,te=M.transmissive,de=M.transparent;d.setupLightsView(G),j===!0&&K.setGlobalState(y.clippingPlanes,G),W&&Te.viewport(R.copy(W)),O.length>0&&na(O,U,G),te.length>0&&na(te,U,G),de.length>0&&na(de,U,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function wc(M,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new Vn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?qs:Hn,minFilter:Ri,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let te=d.state.transmissionRenderTarget[W.id],de=W.viewport||R;te.setSize(de.z,de.w);let Me=y.getRenderTarget();y.setRenderTarget(te),y.getClearColor(q),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Pe.render(G);let Se=y.toneMapping;y.toneMapping=ai;let Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),j===!0&&K.setGlobalState(y.clippingPlanes,W),na(M,G,W),T.updateMultisampleRenderTarget(te),T.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ee=0,Je=U.length;Ee<Je;Ee++){let ft=U[Ee],pt=ft.object,Ht=ft.geometry,et=ft.material,we=ft.group;if(et.side===Gt&&pt.layers.test(W.layers)){let In=et.side;et.side=Nt,et.needsUpdate=!0,Tc(pt,G,W,Ht,et,we),et.side=In,et.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(te),T.updateRenderTargetMipmap(te))}y.setRenderTarget(Me),y.setClearColor(q,$),Ue!==void 0&&(W.viewport=Ue),y.toneMapping=Se}function na(M,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,te=M.length;O<te;O++){let de=M[O],Me=de.object,Se=de.geometry,Ue=W===null?de.material:W,ze=de.group;Me.layers.test(G.layers)&&Tc(Me,U,G,Se,Ue,ze)}}function Tc(M,U,G,W,O,te){M.onBeforeRender(y,U,G,W,O,te),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,U,G,W,M,te),O.transparent===!0&&O.side===Gt&&O.forceSinglePass===!1?(O.side=Nt,O.needsUpdate=!0,y.renderBufferDirect(G,U,W,O,M,te),O.side=ri,O.needsUpdate=!0,y.renderBufferDirect(G,U,W,O,M,te),O.side=Gt):y.renderBufferDirect(G,U,W,O,M,te),M.onAfterRender(y,U,G,W,O,te)}function ia(M,U,G){U.isScene!==!0&&(U=at);let W=Ae.get(M),O=d.state.lights,te=d.state.shadowsArray,de=O.state.version,Me=ie.getParameters(M,O.state,te,U,G),Se=ie.getProgramCacheKey(Me),Ue=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?P:b).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Be),Ue=new Map,W.programs=Ue);let ze=Ue.get(Se);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===de)return Cc(M,Me),ze}else Me.uniforms=ie.getUniforms(M),M.onBeforeCompile(Me,y),ze=ie.acquireProgram(Me,Se),Ue.set(Se,ze),W.uniforms=Me.uniforms;let Ee=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=K.uniform),Cc(M,Me),W.needsLights=Dh(M),W.lightsStateVersion=de,W.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Ac(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ls.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Cc(M,U){let G=Ae.get(M);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ih(M,U,G,W,O){U.isScene!==!0&&(U=at),T.resetTextureUnits();let te=U.fog,de=W.isMeshStandardMaterial?U.environment:null,Me=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vs,Se=(W.isMeshStandardMaterial?P:b).get(W.envMap||de),Ue=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color,pt=ai;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=y.toneMapping);let Ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=Ht!==void 0?Ht.length:0,we=Ae.get(W),In=d.state.lights;if(j===!0&&(ve===!0||M!==x)){let sn=M===x&&W.id===_;K.setState(W,M,sn)}let tt=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==In.state.version||we.outputColorSpace!==Me||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==Se||W.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==K.numPlanes||we.numIntersection!==K.numIntersection)||we.vertexAlphas!==Ue||we.vertexTangents!==ze||we.morphTargets!==Ee||we.morphNormals!==Je||we.morphColors!==ft||we.toneMapping!==pt||we.morphTargetsCount!==et)&&(tt=!0):(tt=!0,we.__version=W.version);let cn=we.currentProgram;tt===!0&&(cn=ia(W,U,O));let Vi=!1,Qt=!1,Ss=!1,mt=cn.getUniforms(),yn=we.uniforms;if(Te.useProgram(cn.program)&&(Vi=!0,Qt=!0,Ss=!0),W.id!==_&&(_=W.id,Qt=!0),Vi||x!==M){Te.buffers.depth.getReversed()?(oe.copy(M.projectionMatrix),Sd(oe),Ed(oe),mt.setValue(N,"projectionMatrix",oe)):mt.setValue(N,"projectionMatrix",M.projectionMatrix),mt.setValue(N,"viewMatrix",M.matrixWorldInverse);let $n=mt.map.cameraPosition;$n!==void 0&&$n.setValue(N,Re.setFromMatrixPosition(M.matrixWorld)),Xe.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Qt=!0,Ss=!0)}if(O.isSkinnedMesh){mt.setOptional(N,O,"bindMatrix"),mt.setOptional(N,O,"bindMatrixInverse");let sn=O.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),mt.setValue(N,"boneTexture",sn.boneTexture,T))}O.isBatchedMesh&&(mt.setOptional(N,O,"batchingTexture"),mt.setValue(N,"batchingTexture",O._matricesTexture,T),mt.setOptional(N,O,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",O._indirectTexture,T),mt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",O._colorsTexture,T));let Es=G.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&De.update(O,G,cn),(Qt||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,mt.setValue(N,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=Se,yn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(yn.envMapIntensity.value=U.environmentIntensity),Qt&&(mt.setValue(N,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&Lh(yn,Ss),te&&W.fog===!0&&ee.refreshFogUniforms(yn,te),ee.refreshMaterialUniforms(yn,W,X,Z,d.state.transmissionRenderTarget[M.id]),ls.upload(N,Ac(we),yn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ls.upload(N,Ac(we),yn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(N,"center",O.center),mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),mt.setValue(N,"normalMatrix",O.normalMatrix),mt.setValue(N,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let sn=W.uniformsGroups;for(let $n=0,Jn=sn.length;$n<Jn;$n++){let Rc=sn[$n];D.update(Rc,cn),D.bind(Rc,cn)}}return cn}function Lh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Dh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,G){Ae.get(M.texture).__webglTexture=U,Ae.get(M.depthTexture).__webglTexture=G;let W=Ae.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let G=Ae.get(M);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,G=0){I=M,w=U,A=G;let W=!0,O=null,te=!1,de=!1;if(M){let Se=Ae.get(M);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Se.__hasExternalTextures)T.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ee=M.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Ae.has(Ee)&&(M.width!==Ee.image.width||M.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}let Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);let ze=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?O=ze[U][G]:O=ze[U],te=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?O=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[G]:O=ze,R.copy(M.viewport),H.copy(M.scissor),k=M.scissorTest}else R.copy(be).multiplyScalar(X).floor(),H.copy(Ie).multiplyScalar(X).floor(),k=Ye;if(Te.bindFramebuffer(N.FRAMEBUFFER,O)&&W&&Te.drawBuffers(M,O),Te.viewport(R),Te.scissor(H),Te.setScissorTest(k),te){let Se=Ae.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,G)}else if(de){let Se=Ae.get(M.texture),Ue=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Ue)}_=-1},this.readRenderTargetPixels=function(M,U,G,W,O,te,de){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Te.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Se=M.texture,Ue=Se.format,ze=Se.type;if(!Xe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&G>=0&&G<=M.height-O&&N.readPixels(U,G,W,O,He.convert(Ue),He.convert(ze),te)}finally{let Se=I!==null?Ae.get(I).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,U,G,W,O,te,de){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){let Se=M.texture,Ue=Se.format,ze=Se.type;if(!Xe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-W&&G>=0&&G<=M.height-O){Te.bindFramebuffer(N.FRAMEBUFFER,Me);let Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,te.byteLength,N.STREAM_READ),N.readPixels(U,G,W,O,He.convert(Ue),He.convert(ze),0);let Je=I!==null?Ae.get(I).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,Je);let ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Md(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,te),N.deleteBuffer(Ee),N.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,G=0){M.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(M.image.width*W),te=Math.floor(M.image.height*W),de=U!==null?U.x:0,Me=U!==null?U.y:0;T.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,de,Me,O,te),Te.unbindTexture()},this.copyTextureToTexture=function(M,U,G=null,W=null,O=0){M.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],U=arguments[2],O=arguments[3]||0,G=null);let te,de,Me,Se,Ue,ze,Ee,Je,ft,pt=M.isCompressedTexture?M.mipmaps[O]:M.image;G!==null?(te=G.max.x-G.min.x,de=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Se=G.min.x,Ue=G.min.y,ze=G.isBox3?G.min.z:0):(te=pt.width,de=pt.height,Me=pt.depth||1,Se=0,Ue=0,ze=0),W!==null?(Ee=W.x,Je=W.y,ft=W.z):(Ee=0,Je=0,ft=0);let Ht=He.convert(U.format),et=He.convert(U.type),we;U.isData3DTexture?(T.setTexture3D(U,0),we=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),we=N.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),we=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let In=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=N.getParameter(N.UNPACK_SKIP_PIXELS),Vi=N.getParameter(N.UNPACK_SKIP_ROWS),Qt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);let Ss=M.isDataArrayTexture||M.isData3DTexture,mt=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let yn=Ae.get(M),Es=Ae.get(U),sn=Ae.get(yn.__renderTarget),$n=Ae.get(Es.__renderTarget);Te.bindFramebuffer(N.READ_FRAMEBUFFER,sn.__webglFramebuffer),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Jn=0;Jn<Me;Jn++)Ss&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(M).__webglTexture,O,ze+Jn),M.isDepthTexture?(mt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,O,ft+Jn),N.blitFramebuffer(Se,Ue,te,de,Ee,Je,te,de,N.DEPTH_BUFFER_BIT,N.NEAREST)):mt?N.copyTexSubImage3D(we,O,Ee,Je,ft+Jn,Se,Ue,te,de):N.copyTexSubImage2D(we,O,Ee,Je,ft+Jn,Se,Ue,te,de);Te.bindFramebuffer(N.READ_FRAMEBUFFER,null),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(we,O,Ee,Je,ft,te,de,Me,Ht,et,pt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(we,O,Ee,Je,ft,te,de,Me,Ht,pt.data):N.texSubImage3D(we,O,Ee,Je,ft,te,de,Me,Ht,et,pt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Ee,Je,te,de,Ht,et,pt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Ee,Je,pt.width,pt.height,Ht,pt.data):N.texSubImage2D(N.TEXTURE_2D,O,Ee,Je,te,de,Ht,et,pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,In),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt),O===0&&U.generateMipmaps&&N.generateMipmap(we),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,U,G=null,W=null,O=0){return M.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,M=arguments[2],U=arguments[3],O=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,G,W,O)},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){w=0,A=0,I=null,Te.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var $a=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ja=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var al=class extends Ft{constructor(e=null,t=1,n=1,s,a,o,r,c,l=Zt,h=Zt,u,f){super(null,o,r,c,l,h,s,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Za=class extends jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new lt,Ru=new lt,wa=[],Pu=new Gn,_g=new lt,Ps=new _e,Is=new Ii,ks=class extends _e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_g)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Pu.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Is.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,o=e*a+1;for(let r=0;r<n.length;r++)n[r]=s[o+r]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,is),Ru.multiplyMatrices(n,is),Ps.matrixWorld=Ru,Ps.raycast(e,wa);for(let o=0,r=wa.length;o<r;o++){let c=wa[o];c.instanceId=a,c.object=this,t.push(c)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new al(new Float32Array(s*this.count),s,this.count,Il,Sn));let a=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let r=this.geometry.morphTargetsRelative?1:1-o,c=s*e;a[c]=r,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Li=class extends Ft{constructor(e,t,n,s,a,o,r,c,l){super(e,t,n,s,a,o,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,a=n.length,o;t?o=t:o=e*n[a-1];let r=0,c=a-1,l;for(;r<=c;)if(s=Math.floor(r+(c-r)/2),l=n[s]-o,l<0)r=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(a-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let o=this.getPoint(s),r=this.getPoint(a),c=t||(o.isVector2?new ge:new C);return c.copy(r).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],a=[],o=[],r=new C,c=new lt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new C)}a[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),o[p]=o[p-1].clone(),r.crossVectors(s[p-1],s[p]),r.length()>Number.EPSILON){r.normalize();let g=Math.acos(Ct(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(r,g))}o[p].crossVectors(s[p],a[p])}if(t===!0){let p=Math.acos(Ct(a[0].dot(a[e]),-1,1));p/=e,s[0].dot(r.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends rn{constructor(e=0,t=0,n=1,s=1,a=0,o=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=c}getPoint(e,t=new ge){let n=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);let r=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(r),l=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rl=class extends Hs{constructor(e,t,n,s,a,o){super(e,t,n,n,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ol(){let i=0,e=0,t=0,n=0;function s(a,o,r,c){i=a,e=r,t=-3*a+3*o-2*r-c,n=2*a-2*o+r+c}return{initCatmullRom:function(a,o,r,c,l){s(o,r,l*(r-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,r,c,l,h,u){let f=(o-a)/l-(r-a)/(l+h)+(r-o)/h,p=(r-o)/h-(c-o)/(h+u)+(c-r)/u;f*=h,p*=h,s(o,r,f,p)},calc:function(a){let o=a*a,r=o*a;return i+e*a+t*o+n*r}}}var Ta=new C,Jr=new Ol,Zr=new Ol,jr=new Ol,Vs=class extends rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,a=s.length,o=(a-(this.closed?0:1))*e,r=Math.floor(o),c=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:c===0&&r===a-1&&(r=a-2,c=1);let l,h;this.closed||r>0?l=s[(r-1)%a]:(Ta.subVectors(s[0],s[1]).add(s[0]),l=Ta);let u=s[r%a],f=s[(r+1)%a];if(this.closed||r+2<a?h=s[(r+2)%a]:(Ta.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Jr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Zr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),jr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Jr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Zr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),jr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Jr.calc(c),Zr.calc(c),jr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Iu(i,e,t,n,s){let a=(n-e)*.5,o=(s-t)*.5,r=i*i,c=i*r;return(2*t-2*n+a+o)*c+(-3*t+3*n-2*a-o)*r+a*i+t}function yg(i,e){let t=1-i;return t*t*e}function bg(i,e){return 2*(1-i)*i*e}function Mg(i,e){return i*i*e}function Fs(i,e,t,n){return yg(i,e)+bg(i,t)+Mg(i,n)}function Sg(i,e){let t=1-i;return t*t*t*e}function Eg(i,e){let t=1-i;return 3*t*t*i*e}function wg(i,e){return 3*(1-i)*i*i*e}function Tg(i,e){return i*i*i*e}function Os(i,e,t,n,s){return Sg(i,e)+Eg(i,t)+wg(i,n)+Tg(i,s)}var ja=class extends rn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(Os(e,s.x,a.x,o.x,r.x),Os(e,s.y,a.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ol=class extends rn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(Os(e,s.x,a.x,o.x,r.x),Os(e,s.y,a.y,o.y,r.y),Os(e,s.z,a.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends rn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends rn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},er=class extends rn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,a=this.v1,o=this.v2;return n.set(Fs(e,s.x,a.x,o.x),Fs(e,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tr=class extends rn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,a=this.v1,o=this.v2;return n.set(Fs(e,s.x,a.x,o.x),Fs(e,s.y,a.y,o.y),Fs(e,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nr=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,a=(s.length-1)*e,o=Math.floor(a),r=a-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Iu(r,c.x,l.x,h.x,u.x),Iu(r,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},cl=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:Vs,CubicBezierCurve:ja,CubicBezierCurve3:ol,EllipseCurve:Hs,LineCurve:Ka,LineCurve3:ll,QuadraticBezierCurve:er,QuadraticBezierCurve3:tr,SplineCurve:nr}),ul=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let o=s[a]-n,r=this.curves[a],c=r.getLength(),l=c===0?0:1-o/c;return r.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let o=a[s],r=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(r);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new cl[s.type]().fromJSON(s))}return this}},hl=class extends ul{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ka(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new er(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,o){let r=new ja(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new nr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,o){let r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+r,t+c,n,s,a,o),this}absarc(e,t,n,s,a,o){return this.absellipse(e,t,n,n,s,a,o),this}ellipse(e,t,n,s,a,o,r,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,a,o,r,c),this}absellipse(e,t,n,s,a,o,r,c){let l=new Hs(e,t,n,s,a,o,r,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},dl=class i extends qt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ct(s,0,Math.PI*2);let a=[],o=[],r=[],c=[],l=[],h=1/t,u=new C,f=new ge,p=new C,g=new C,v=new C,m=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let S=0;S<=t;S++){let E=n+S*h*s,y=Math.sin(E),L=Math.cos(E);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*y,u.y=e[w].y,u.z=e[w].x*L,o.push(u.x,u.y,u.z),f.x=S/t,f.y=w/(e.length-1),r.push(f.x,f.y);let A=c[3*w+0]*y,I=c[3*w+1],_=c[3*w+0]*L;l.push(A,I,_)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){let y=E+S*e.length,L=y,w=y+e.length,A=y+e.length+1,I=y+1;a.push(L,w,I),a.push(A,I,w)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(r,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Di=class i extends dl{constructor(e=1,t=1,n=4,s=8){let a=new hl;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Ui=class i extends qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let a=[],o=[],r=[],c=[],l=new C,h=new ge;o.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),r.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class i extends qt{constructor(e=1,t=1,n=1,s=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};let l=this;s=Math.floor(s),a=Math.floor(a);let h=[],u=[],f=[],p=[],g=0,v=[],m=n/2,d=0;S(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function S(){let y=new C,L=new C,w=0,A=(t-e)/n;for(let I=0;I<=a;I++){let _=[],x=I/a,R=x*(t-e)+e;for(let H=0;H<=s;H++){let k=H/s,q=k*c+r,$=Math.sin(q),V=Math.cos(q);L.x=R*$,L.y=-x*n+m,L.z=R*V,u.push(L.x,L.y,L.z),y.set($,A,V).normalize(),f.push(y.x,y.y,y.z),p.push(k,1-x),_.push(g++)}v.push(_)}for(let I=0;I<s;I++)for(let _=0;_<a;_++){let x=v[_][I],R=v[_+1][I],H=v[_+1][I+1],k=v[_][I+1];(e>0||_!==0)&&(h.push(x,R,k),w+=3),(t>0||_!==a-1)&&(h.push(R,H,k),w+=3)}l.addGroup(d,w,0),d+=w}function E(y){let L=g,w=new ge,A=new C,I=0,_=y===!0?e:t,x=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;let R=g;for(let H=0;H<=s;H++){let q=H/s*c+r,$=Math.cos(q),V=Math.sin(q);A.x=_*V,A.y=m*x,A.z=_*$,u.push(A.x,A.y,A.z),f.push(0,x,0),w.x=$*.5+.5,w.y=V*.5*x+.5,p.push(w.x,w.y),g++}for(let H=0;H<s;H++){let k=L+H,q=R+H;y===!0?h.push(q,q+1,k):h.push(q+1,q,k),I+=3}l.addGroup(d,I,y===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ni=class i extends Ot{constructor(e=1,t=1,n=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,e,t,n,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fi=class i extends qt{constructor(e=.5,t=1,n=32,s=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let r=[],c=[],l=[],h=[],u=e,f=(t-e)/s,p=new C,g=new ge;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=a+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let S=d+m,E=S,y=S+n+1,L=S+n+2,w=S+1;r.push(E,y,w),r.push(y,L,w)}}this.setIndex(r),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Wn=class i extends qt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+r,Math.PI),l=0,h=[],u=new C,f=new C,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let S=[],E=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let w=L/t;u.x=-e*Math.cos(s+w*a)*Math.sin(o+E*r),u.y=e*Math.cos(o+E*r),u.z=e*Math.sin(s+w*a)*Math.sin(o+E*r),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+y,1-E),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let E=h[d][S+1],y=h[d][S],L=h[d+1][S],w=h[d+1][S+1];(d!==0||o>0)&&p.push(E,y,w),(d!==n-1||c<Math.PI)&&p.push(y,L,w)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mn=class i extends qt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);let o=[],r=[],c=[],l=[],h=new C,u=new C,f=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*a,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(v,m,S),o.push(m,d,S)}this.setIndex(o),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gs=class i extends qt{constructor(e=new tr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};let o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let r=new C,c=new C,l=new ge,h=new C,u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function v(){for(let E=0;E<t;E++)m(E);m(a===!1?t:0),S(),d()}function m(E){h=e.getPointAt(E/t,h);let y=o.normals[E],L=o.binormals[E];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,I=Math.sin(A),_=-Math.cos(A);c.x=_*y.x+I*L.x,c.y=_*y.y+I*L.y,c.z=_*y.z+I*L.z,c.normalize(),f.push(c.x,c.y,c.z),r.x=h.x+n*c.x,r.y=h.y+n*c.y,r.z=h.z+n*c.z,u.push(r.x,r.y,r.z)}}function d(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let L=(s+1)*(E-1)+(y-1),w=(s+1)*E+(y-1),A=(s+1)*E+y,I=(s+1)*(E-1)+y;g.push(L,w,I),g.push(w,A,I)}}function S(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)l.x=E/t,l.y=y/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new cl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var gn=class extends ci{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ir=class extends ci{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ms=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let r=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(a=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=a)){let r=t[1];e<r&&(n=2,a=r);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=a,a=t[--n-1],e>=a)break e}o=n,n=0;break t}break n}for(;n<o;){let r=n+o>>>1;e<t[r]?o=r:n=r+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let o=0;o!==s;++o)t[o]=n[a+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,o=e+1,r=s[a],c=s[o];if(r===void 0)switch(this.getSettings_().endingStart){case Uc:a=e,r=2*t-n;break;case Nc:a=s.length-2,r=t+s[a]-s[a+1];break;default:a=e,r=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uc:o=e,c=2*n-t;break;case Nc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-r),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let a=this.resultBuffer,o=this.sampleValues,r=this.valueSize,c=e*r,l=c-r,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let L=0;L!==r;++L)a[L]=d*o[h+L]+S*o[l+L]+E*o[c+L]+y*o[u+L];return a}},pl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,o=this.sampleValues,r=this.valueSize,c=e*r,l=c-r,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==r;++f)a[f]=o[l+f]*u+o[c+f]*h;return a}},ml=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Ho:t=this.InterpolantFactoryMethodLinear;break;case br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,a=0,o=s-1;for(;a!==s&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==s){a>=o&&(o=Math.max(o,1),a=o-1);let r=this.getValueSize();this.times=n.slice(a,o),this.values=this.values.slice(a*r,o*r)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let r=0;r!==a;r++){let c=n[r];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,c,o),e=!1;break}o=c}if(s!==void 0&&Ag(s))for(let r=0,c=s.length;r!==c;++r){let l=s[r];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,a=e.length-1,o=1;for(let r=1;r<a;++r){let c=!1,l=e[r],h=e[r+1];if(l!==h&&(r!==1||l!==e[0]))if(s)c=!0;else{let u=r*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){c=!0;break}}}if(c){if(r!==o){e[o]=e[r];let u=r*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(a>0){e[o]=e[a];for(let r=a*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[r+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ho;var Oi=class extends vn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Ua;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends vn{};gl.prototype.ValueTypeName="color";var vl=class extends vn{};vl.prototype.ValueTypeName="number";var xl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,o=this.sampleValues,r=this.valueSize,c=(n-t)/(s-t),l=e*r;for(let h=l+r;l!==h;l+=4)li.slerpFlat(a,0,o,l-r,o,l,c);return a}},sr=class extends vn{InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends vn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ua;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends vn{};_l.prototype.ValueTypeName="vector";var yl=class{constructor(e,t,n){let s=this,a=!1,o=0,r=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,r),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,r),o===r&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Cg=new yl,bl=class{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ar=class extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kr=new lt,Lu=new C,Du=new C,Ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=class extends Ws{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Fa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},rr=class extends gs{constructor(e,t,n=0,s=Math.PI/3,a=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new Ml}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uu=new lt,Ls=new C,eo=new C,Sl=class extends Ws{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ls),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),s.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},or=class extends gs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},El=class extends Ws{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new El}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bl="\\[\\]\\.:\\/",Rg=new RegExp("["+Bl+"]","g"),zl="[^"+Bl+"]",Pg="[^"+Bl.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",zl),Lg=/(WCOD+)?/.source.replace("WCOD",Pg),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),Ng=new RegExp("^"+Ig+Lg+Dg+Ug+"$"),Fg=["material","materials","bones","map"],wl=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(e){let t=Ng.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);Fg.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let o=0;o<a.length;o++){let r=a[o];if(r.name===t||r.uuid===t)return r;let c=n(r.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=wl;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Ys(i=512){let e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d"),n=i/2,s=n,a=n;t.translate(s,a);let o=(l,h)=>{let u=t.createLinearGradient(0,-n,0,n);return u.addColorStop(0,"#fff3b0"),u.addColorStop(.35,"#e8b830"),u.addColorStop(.6,"#a8740c"),u.addColorStop(1,"#ffe27a"),u},r=t.createRadialGradient(0,0,n*.2,0,0,n);r.addColorStop(0,"#5a2a9a"),r.addColorStop(.85,"#2a0c5a"),r.addColorStop(1,"rgba(10,0,40,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,n*.98,0,7),t.fill(),t.lineWidth=n*.07,t.strokeStyle=o(),t.beginPath(),t.arc(0,0,n*.9,0,7),t.stroke(),t.lineWidth=n*.2,t.strokeStyle="#3b1478",t.beginPath(),t.arc(0,0,n*.74,0,7),t.stroke(),t.lineWidth=n*.03,t.strokeStyle=o(),t.beginPath(),t.arc(0,0,n*.63,0,7),t.stroke(),t.save(),t.strokeStyle="rgba(232,184,48,.55)",t.lineWidth=n*.012;for(let l=0;l<24;l++){t.rotate(Math.PI/12),t.beginPath();for(let h=0;h<=1;h+=.02){let u=h*2.2,f=n*.6*h;t.lineTo(Math.cos(u)*f,Math.sin(u)*f)}t.stroke()}t.restore(),r=t.createRadialGradient(0,0,0,0,0,n*.6),r.addColorStop(0,"rgba(120,70,220,.5)"),r.addColorStop(1,"rgba(20,0,60,.2)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,n*.6,0,7),t.fill();let c=(l,h,u)=>{t.save(),t.font=`bold ${n*.13}px Arial Black, Arial, sans-serif`,t.fillStyle=o(),t.textAlign="center",t.textBaseline="middle";let f=[...l].map(m=>t.measureText(m).width+n*.01),p=f.reduce((m,d)=>m+d,0),g=p/h,v=u?-Math.PI/2-g/2:Math.PI/2+g/2;[...l].forEach((m,d)=>{let S=f[d]/h;v+=u?S/2:-S/2,t.save(),t.rotate(v),t.translate(h,0),t.rotate(u?Math.PI/2:-Math.PI/2),t.fillText(m,0,0),t.restore(),v+=u?S/2:-S/2}),t.restore()};return c("QUIÉN QUIERE SER",n*.74,!0),c("★ ★ ★",n*.74,!1),t.save(),t.fillStyle="#1a0640",t.strokeStyle=o(),t.lineWidth=n*.02,t.beginPath(),t.moveTo(-n*.95,-n*.15),t.lineTo(n*.95,-n*.15),t.lineTo(n*.88,n*.15),t.lineTo(-n*.88,n*.15),t.closePath(),t.fill(),t.stroke(),t.font=`900 ${n*.26}px Arial Black, Impact, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.lineWidth=n*.03,t.strokeStyle="#5a3a00",t.strokeText("MILLONARIO",0,n*.015,n*1.7),t.fillStyle=o(),t.fillText("MILLONARIO",0,n*.015,n*1.7),t.restore(),t.font=`900 ${n*.3}px Georgia, serif`,t.fillStyle="rgba(255,230,140,.9)",t.textAlign="center",t.fillText("?",0,n*.45),e}var kl="Leo Arrieta",qn={leo:{nombre:"Leo Arrieta",rol:"Presentador",traje:1778496,pelo:3811868,piel:14725260,aspecto:{traje:1318975,corbata:2779903,pelo:2759698,piel:15251600,tarjetas:!0}},pili:{nombre:"Pili",rol:"Regidora",traje:2236962,pelo:9059098,piel:15778976,aspecto:{traje:2105380,camisa:3355443,corbata:null,pelo:9059098,piel:15911080,melena:!0,cascos:!0,falda:!1}},chema:{nombre:"Chema",rol:"Técnico de sonido",traje:4020778,pelo:1118481,piel:13146224,aspecto:{traje:4020778,camisa:2236962,corbata:null,pelo:1118481,piel:13146224,cascos:!0,gafas:!0}},marga:{nombre:"Marga",rol:"Maquilladora",traje:9051996,pelo:14266970,piel:15911080,aspecto:{traje:9051996,camisa:16769264,corbata:null,pelo:14266970,piel:15911080,melena:!0,falda:!0}},ramon:{nombre:"Don Ramón",rol:"El jefe",traje:4868682,pelo:13421772,piel:15251608,aspecto:{traje:4868682,corbata:9048080,pelo:13421772,piel:15251608,gafas:!0}},encarna:{nombre:"Encarna",rol:"Público",traje:11553322,pelo:5913130,piel:15253664,aspecto:{traje:11553322,camisa:16765088,corbata:null,pelo:5913130,piel:15253664,melena:!0,falda:!0}},conc:{nombre:"Concursante",rol:"Concursante",traje:2779786,pelo:2759184,piel:14198912,aspecto:{traje:2779786,camisa:14215423,corbata:null,pelo:2759184,piel:14198912,pantalon:2238522}}},Tn={e2020:{id:"e2020",nombre:"2020–2025",cadena:"Antena 3 / laSexta",moneda:"€",escalera:[100,250,500,750,1500,2500,5e3,1e4,15e3,2e4,3e4,5e4,1e5,3e5,1e6],seguros:[5],eligeSeguro:!0,comodines:["5050","publico","llamada","familiar"],tiempo:!1},e2005:{id:"e2005",nombre:"2005–2007",cadena:"Antena 3",moneda:"€",escalera:[100,200,300,500,1e3,2e3,4e3,6500,1e4,15e3,25e3,5e4,1e5,3e5,1e6],seguros:[5,10],eligeSeguro:!1,comodines:["5050","publico","llamada"],tiempo:!1},e1999:{id:"e1999",nombre:"1999–2001",cadena:"Telecinco",moneda:"ptas",escalera:[1e4,2e4,3e4,5e4,1e5,2e5,4e5,8e5,16e5,32e5,625e4,125e5,25e6,375e5,5e7],seguros:[5,10],eligeSeguro:!1,comodines:["5050","publico","llamada"],tiempo:!1}},_s=[{id:"normal",emoji:"💰",name:"Normal"},{id:"famosos",emoji:"⭐",name:"Famosos",banner:"ESPECIAL FAMOSOS · por una ONG"},{id:"leyendas",emoji:"🏆",name:"Leyendas",banner:"ESPECIAL LEYENDAS"},{id:"navidad",emoji:"🎄",name:"Navidad",banner:"ESPECIAL NAVIDAD"},{id:"aniversario",emoji:"🎂",name:"Aniversario",banner:"ESPECIAL 25 AÑOS"}],Tt={saludo:["¡Buenas noches y bienvenidos a ¿Quién quiere ser millonario?!","¡Hola a todos! Esto es ¿Quién quiere ser millonario?, y yo soy Leo Arrieta."],presenta:"Esta noche nos acompaña un concursante que viene dispuesto a todo. ¡Un aplauso para él!",siéntate:"Siéntate, ponte cómodo. Ya conoces las normas: quince preguntas, y una sola respuesta correcta en cada una.",seguro:"El primer seguro está en la pregunta cinco. Pero en este formato eres tú quien elige el segundo seguro. ¿Dónde lo pones?",empezamos:"¡Pues vamos allá! Primera pregunta.",ultima:"¿Es tu última respuesta?",bien:["¡Correcto!","¡Es correcta! ¡Muy bien!","¡Sí señor! ¡Respuesta correcta!","¡Bravo! ¡Lo has clavado!"],mal:["Lo siento muchísimo, no era esa.","Ay… no. Esa no era la respuesta correcta."],seguroOk:"¡Has llegado a un seguro! Ese dinero ya no te lo quita nadie.",c5050:"Comodín del cincuenta por ciento. Ordenador, quita dos respuestas incorrectas.",cpublico:"Comodín del público. Público, votad ahora en vuestros mandos.",cllamada:"Vamos a llamar por teléfono. Tienes treinta segundos.",cfamiliar:"Comodín del acompañante: tu familiar baja de la grada y te ayuda a pensar.",planta:"Te plantas. Respeto absoluto: te llevas lo que has ganado.",millon:"¡Increíble! ¡Acabas de ganar el gran premio! ¡Eres millonario!",despedida:"Esto ha sido todo por hoy. ¡Gracias por estar al otro lado! Hasta la próxima, en ¿Quién quiere ser millonario?"},yt=(i,e,t)=>({id:i,titulo:e,pasos:t}),dr={oculta:[yt("o1","La silla que gira",[["pili","Leo, hoy probamos sillas nuevas. Siéntate, que hay que ajustarlas.","silla"],["leo","Qué cómoda… oye, ¿esto gira solo?","silla"],["chema","Uy, se me ha ido el mando. ¡Vuelta y vuelta!","wide"],["leo","¡Paradlo, que me mareo! ¡Que veo cuatro respuestas por duplicado!","silla"],["pili","¡Inocente, inocente! ¡Cámara oculta!","wide"]]),yt("o2","El millón de chocolate",[["ramon","Leo, hoy entregamos el cheque del millón en directo. Aquí lo tienes.","pres"],["leo","Huele… raro. ¿Este cheque huele a cacao?","pres"],["marga","Es que es de chocolate, cariño. Y lo tienes derretido en la mano.","pres"],["leo","¡Mi traje nuevo!","pres"],["ramon","¡Inocente, inocente!","wide"]]),yt("o3","El comodín del público mudo",[["leo","Público, ¡votad ahora!","grada"],["encarna","(El público entero se cruza de brazos y silba una canción)","grada"],["leo","¿Nadie vota? ¿Ni uno? ¿Pero qué pasa aquí?","pres"],["encarna","¡Es que somos todos actores, Leo! ¡Cámara oculta!","grada"]]),yt("o4","La llamada a la abuela",[["leo","Llamamos al comodín de la llamada. ¿Hola?","consola"],["encarna","¿Leo? Soy tu abuela. ¿Has comido? ¿Por qué no me llamas nunca?","consola"],["leo","Abuela, ¡que estoy grabando!","pres"],["pili","¡Hemos llamado a tu abuela de verdad! ¡Inocente!","wide"]]),yt("o5","El concursante que lo sabe todo",[["conc","La respuesta es la B. Y la siguiente será la C. Y la de después, la A.","silla"],["leo","¿Pero cómo sabes las siguientes si no las he leído?","silla"],["conc","Porque soy el guionista disfrazado, Leo.","silla"],["leo","¡Ya decía yo que ese bigote se movía!","pres"],["pili","¡Cámara oculta!","wide"]]),yt("o6","Las luces disco",[["chema","Leo, prueba de luces para la pregunta final.","wide"],["leo","Venga, dale el ambiente de tensión de siempre.","pres"],["chema","¡Marchando! (Se encienden bolas de discoteca y suena una canción del verano)","wide"],["leo","¡Esto no es la pregunta del millón, esto es una verbena!","pres"],["chema","¡Inocente, inocente!","wide"]]),yt("o7","El atril que se encoge",[["pili","Hoy el atril se ajusta automáticamente a tu altura.","consola"],["leo","Pues está bajando… y bajando… ¡Que me tengo que poner de rodillas!","consola"],["pili","¡Inocente! Lo controla Chema con un mando de garaje.","wide"]])],tomas:[yt("t1","El millón de pesetas… euros… lo que sea",[["leo","Por un millón de pesetas… perdón, de euros… ¡Ay, que me he ido al año noventa y nueve!","pres"],["pili","¡Corten! Leo, que ya no existen las pesetas.","wide"],["leo","Es la nostalgia, Pili. Repetimos.","pres"]]),yt("t2","La pregunta imposible de leer",[["leo","¿Cuál es el nombre del otorrinolaringólogo que esternocleidomas… estermo… esto…","pres"],["pili","¡Corten! ¿Quién ha escrito esta pregunta?","wide"],["chema","El becario, que es nuevo.","wide"]]),yt("t3","La silla traicionera",[["leo","Siéntate y… ¡uy!","silla"],["conc","¡La silla es muy alta! ¡No llego!","silla"],["pili","¡Corten! ¡Traed el escalón!","wide"],["leo","Esto en la tele parece más fácil.","pres"]]),yt("t4","Risa contagiosa",[["leo","Es tu… última… (se ríe)… ¿Es tu última respuesta?","pres"],["conc","(Se ríe también) ¡No puedo mirarte!","silla"],["pili","¡Corten! Diez minutos de descanso y agua para todos.","wide"]]),yt("t5","El móvil del público",[["leo","Silencio absoluto en el plató. La tensión es máxima…","pres"],["encarna","(Suena un móvil con un reguetón a todo volumen)","grada"],["encarna","¡Perdón, perdón! ¡Es mi hijo!","grada"],["pili","¡Corten! Móviles en modo avión, por favor.","wide"]]),yt("t6","Gafas equivocadas",[["leo","Respuesta A: la torre Eiffel… espera, ¿esto es una A o una H?","consola"],["marga","¡Leo, que llevas mis gafas de cerca!","pres"],["pili","¡Corten!","wide"]]),yt("t7","El cincuenta por ciento rebelde",[["leo","Ordenador, quita dos respuestas incorrectas.","consola"],["chema","Uy… ha quitado las cuatro.","wide"],["leo","Pues entonces la respuesta es… ¿ninguna?","pres"],["pili","¡Corten! ¡Reiniciad el ordenador!","wide"]])],fuera:[yt("f1","En maquillaje",[["marga","Quieto, Leo, que te brilla la frente como el logo.","pres"],["leo","Es el foco, Marga. Esos focos azules calientan un montón.","pres"],["marga","Pues más polvos. Hoy vas de mate total.","pres"]]),yt("f2","Ensayo de la sintonía",[["chema","Probando la música de tensión… ¿se oye bien en la grada?","grada"],["encarna","¡Se oye tanto que me tiembla el bocadillo!","grada"],["chema","Perfecto, entonces está en su punto.","wide"]]),yt("f3","El catering",[["leo","¿Qué hay hoy de comer?","wide"],["pili","Tortilla, croquetas y un pastel con forma de logo.","wide"],["leo","Me pido la letra D, que es la más grande.","pres"]]),yt("f4","Repaso de preguntas",[["leo","Pili, la pregunta doce, ¿cómo se pronuncia este apellido?","consola"],["pili","Ni idea. Pregunta al público, que para eso está el comodín.","wide"],["leo","Muy graciosa.","pres"]]),yt("f5","El jefe visita el plató",[["ramon","Leo, el programa va de maravilla. Pero hay que dar más emoción.","pres"],["leo","¿Más emoción? Si ayer un señor se jugó trescientos mil euros.","pres"],["ramon","Pues que mañana se juegue el plató entero.","wide"]]),yt("f6","Calentando al público",[["pili","Público, cuando encienda el piloto rojo, aplauso fuerte. ¡Probamos!","grada"],["encarna","¡Bravooo! ¡Leo, guapo!","grada"],["pili","Sin piropos, Encarna, que luego hay que cortarlo.","grada"]]),yt("f7","Pausa en la consola",[["chema","Leo, el monitor izquierdo hace cosas raras.","consola"],["leo","Ya veo, me sale el tiempo de Albacete en lugar de la pregunta.","consola"],["chema","Al menos sabemos que mañana hace sol.","wide"]])]},Hl=[{id:"estanoche",titulo:"Esta noche",lineas:["Esta noche, a las diez…","Quince preguntas. Cuatro respuestas. Un millón de euros.","¿Quién quiere ser millonario? Con Leo Arrieta."]},{id:"casting",titulo:"Casting",lineas:["¿Te sabes la capital de Mongolia?","¿Sabrías dónde poner tu segundo seguro?","Apúntate al casting de ¿Quién quiere ser millonario?"]},{id:"famosos",titulo:"Especial famosos",lineas:["Este sábado, edición especial con famosos.","Todo lo que ganen será para una ONG.","¿Quién quiere ser millonario? Especial famosos."]},{id:"vuelve",titulo:"Vuelve el concurso",lineas:["Las luces azules se encienden de nuevo.","Vuelve el concurso que todos quieren jugar desde el sofá.","Muy pronto, ¿Quién quiere ser millonario?"]},{id:"leyendas",titulo:"Leyendas",lineas:["Ellos ya estuvieron en la silla caliente.","Ahora vuelven a por todo.","Especial leyendas. Solo aquí."]}],Vl=[{id:"pl1",titulo:"Próximo programa",lineas:["Hola, soy Leo Arrieta. Mañana tenemos a una concursante que quiere ir a por el millón sin usar comodines.","¿Lo conseguirá? No te lo pierdas."]},{id:"pl2",titulo:"El segundo seguro",lineas:["¿Sabías que ahora eres tú quien elige el segundo seguro?","Arriesgar o asegurar. Esa es la cuestión. Te espero."]},{id:"pl3",titulo:"Desde la consola",lineas:["Esta es mi consola: dos pantallas, todas las preguntas y ninguna respuesta… bueno, alguna sí.","Siéntate en casa y juega con nosotros."]}],Gl=[{id:"a1",titulo:"Detergente Blancura Total",lineas:["¿Manchas de café en la camisa del concurso?","Blancura Total: lava tan blanco que deslumbra a los focos."]},{id:"a2",titulo:"Seguros Comodín",lineas:["Con Seguros Comodín, si fallas, te quedas con lo que tenías.","Seguros Comodín. Elige tú tu segundo seguro."]},{id:"a3",titulo:"Turrones La Pregunta",lineas:["Turrones La Pregunta: duro, blando… o cincuenta por ciento.","Esta Navidad, la respuesta correcta."]},{id:"a4",titulo:"Teléfono Llamada Perfecta",lineas:["Treinta segundos dan para mucho con el nuevo Llamada Perfecta.","Batería para todo el concurso."]}],Qs=[{id:"m1",tipo:"publico",titulo:"Los votos del público",lineas:["El público de este programa es el mejor del mundo.","Una vez votó un setenta por ciento a la respuesta D… y era la A.","Pero lo hicieron con muchísimo cariño."]},{id:"m2",tipo:"telefono",titulo:"La llamada eterna",lineas:["Treinta segundos de llamada.","El primo tardó veinte en coger el teléfono, cinco en saludar a toda la familia…","y los últimos cinco los dedicó a preguntar qué ponían en la tele."]},{id:"m3",tipo:"normas",titulo:"Las normas cambian",lineas:["Cuando empecé, había seguros fijos.","Luego dijeron: que el concursante elija el segundo.","Ahora estoy esperando a que el concursante elija también el presentador."]}],Wl=[["1998","El formato nace en el Reino Unido","El concurso de las quince preguntas y los comodines se estrena en la televisión británica y se exporta a más de cien países."],["1999–2001","Telecinco: «50 por 15»","Llega a España en Telecinco con el nombre de «¿Quiere ser millonario? 50 por 15»: cincuenta millones de pesetas por quince preguntas. Comodines: 50:50, público y llamada."],["2005–2008","Antena 3","Vuelve en Antena 3 ya con euros y un millón como gran premio. Seguros fijos en las preguntas 5 y 10. La escalera empieza en 100 € y pasa por 6.500 €."],["2009","Una etapa breve","El concurso hace una nueva temporada corta, con cambios de escenografía y reglas para dar más ritmo."],["2012","laSexta: «El millonario» (Hot Seat)","laSexta emite «El millonario», la versión Hot Seat: varios concursantes se turnan en la silla caliente y responden contra el reloj."],["2020","El gran regreso en Antena 3","Regresa con un plató renovado: azul oscuro, haces de luz, suelo dorado en espiral y una consola en V con dos monitores. El concursante elige su segundo seguro."],["2020","Nuevas reglas","Solo el primer seguro es fijo; el segundo lo decide el concursante. Además del 50:50, el público y la llamada, aparece el comodín del acompañante o familiar."],["2021–2025","De Antena 3 a laSexta","El concurso continúa en el grupo y pasa a laSexta, con ediciones especiales de famosos que juegan por ONG y programas de «leyendas» con antiguos concursantes."],["Hoy","Este juego","Un juego de fans hecho por Iker. Presentador inventado (Leo Arrieta) con voz sintética genérica. No es oficial ni está afiliado al programa."]],An={pubSale:"Nos vamos a publicidad. ¡No se vayan, que volvemos enseguida!",pubVuelve:"¡Ya estamos de vuelta! Seguimos con ¿Quién quiere ser millonario?",apertura:["¡Público, un aplauso muy fuerte, que empezamos!","Bienvenidos al plató más azul de la televisión."],entraConc:"Y ahora, recibimos a nuestro concursante. ¡Adelante, siéntate en la silla!",llamadaFin:"Se acabó el tiempo de la llamada.",chistes:["¿Sabéis por qué el cincuenta por ciento nunca discute? Porque siempre se queda con la mitad de la razón.","Mi madre me llama todas las semanas para el comodín de la llamada. Todavía no he concursado nunca, pero ella está preparada.","El otro día pregunté al público cuánto es dos más dos. Un diez por ciento votó cinco. Cariño hay mucho, matemáticas, menos.","Me he comprado una silla como la del concurso. Ahora en casa no me siento: me planto.","Mi perro se sabe todas las respuestas. El problema es que solo ladra la B.","Dicen que el dinero no da la felicidad. Pero un millón de euros ayuda a buscarla en taxi."],coproBien:["¡Bien! ¡Yo también lo sabía!","¡Qué crack! Así da gusto.","Esto va como la seda.","¡Toma ya! Un pasito más."],coproMal:["¡Ay, no! ¡Qué pena!","Era difícil, ¿eh?","Yo habría dicho lo mismo, de verdad."],coproPregunta:["Esta me la sé… creo.","Uf, qué nervios. Piénsalo bien.","Usa un comodín si dudas, que para eso están.","Yo aquí me plantaría… o no. ¡Qué sé yo!"]};var Xn=(i,e=0)=>new ir({color:i,emissive:e}),nh=(i,e,t)=>{let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Li(n);return s.colorSpace=wt,s.anisotropy=4,s};function fr(i,e,t){let n=new Wt,s=new _e(new Di(i,e,3,8),t);return s.position.y=-e/2-i*.5,n.add(s),n}function ih(i,e){i.fillStyle="#1a1a1a",i.beginPath(),i.ellipse(42,54,9,12,0,0,7),i.fill(),i.beginPath(),i.ellipse(86,54,9,12,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(45,50,3.5,0,7),i.fill(),i.beginPath(),i.arc(89,50,3.5,0,7),i.fill(),i.strokeStyle="#3a2414",i.lineWidth=5,i.lineCap="round",i.beginPath(),i.moveTo(30,34),i.lineTo(54,30),i.stroke(),i.beginPath(),i.moveTo(74,30),i.lineTo(98,34),i.stroke(),e?(i.fillStyle="#8a1c1c",i.beginPath(),i.moveTo(38,82),i.quadraticCurveTo(64,112,90,82),i.closePath(),i.fill(),i.fillStyle="#fff",i.fillRect(44,82,40,7)):(i.strokeStyle="#8a1c1c",i.lineWidth=5,i.beginPath(),i.moveTo(44,86),i.quadraticCurveTo(64,96,84,86),i.stroke())}function ql(i){let e=Xn(i.piel??15911072,2757640),t=Xn(i.traje??1778496,329488),n=Xn(i.camisa??16777215),s=Xn(i.corbata??2775807,662080),a=Xn(1118481),o=Xn(i.pelo??3810324),r=new Wt,c=new Wt;r.add(c);let l=i.falda?e:Xn(i.pantalon??i.traje??1778496),h=fr(.09,.62,l),u=fr(.09,.62,l);h.position.set(-.11,.88,0),u.position.set(.11,.88,0),c.add(h,u);for(let _ of[h,u]){let x=new _e(new Xt(.13,.08,.26),a);x.position.set(0,-.84,.05),_.add(x)}let f=new _e(new Di(.21,.42,4,12),t);if(f.position.y=1.17,f.scale.set(1,1,.72),c.add(f),i.falda){let _=new _e(new Ot(.2,.32,.45,16),t);_.position.y=.82,c.add(_)}let p=new _e(new wn(.16,.36),n);if(p.position.set(0,1.3,.155),c.add(p),i.pajarita)for(let _ of[-1,1]){let x=new _e(new Ni(.045,.08,4),s);x.rotation.z=_*Math.PI/2,x.position.set(_*.04,1.46,.165),c.add(x)}else if(i.corbata!==null){let _=new _e(new wn(.06,.3),s);_.position.set(0,1.29,.158),c.add(_)}for(let _ of[-1,1]){let x=new _e(new wn(.06,.3),t);x.position.set(_*.075,1.3,.16),x.rotation.z=_*.25,c.add(x)}let g=fr(.07,.5,t),v=fr(.07,.5,t);g.position.set(-.29,1.44,0),g.rotation.z=-.12,v.position.set(.29,1.44,0),v.rotation.z=.12,c.add(g,v);for(let _ of[g,v]){let x=new _e(new Wn(.07,8,6),e);x.position.y=-.66,_.add(x)}let m=new _e(new Ot(.06,.07,.12,8),e);m.position.y=1.52,c.add(m);let d=new Wt;d.position.y=1.7,c.add(d);let S=new _e(new Wn(.16,16,12),e);S.scale.set(.92,1.08,.98),d.add(S);let E=nh(128,128,_=>ih(_,!0)),y=nh(128,128,_=>ih(_,!1)),L=new _e(new Ui(.13,20),new Kt({map:y,transparent:!0}));L.position.set(0,-.01,.152),d.add(L);let w=new _e(new Wn(.165,14,8,0,Math.PI*2,0,Math.PI*.55),o);w.position.y=.03,w.scale.set(1,1.05,1.02),d.add(w);let A=new _e(new Ni(.08,.16,8),o);if(A.position.set(.02,.17,.08),A.rotation.set(.9,0,-.3),d.add(A),i.melena){let _=new _e(new Ot(.17,.2,.32,14,1,!0,Math.PI*.25,Math.PI*1.5),o);_.material.side=Gt,_.position.set(0,-.1,-.02),d.add(_)}for(let _ of[-1,1]){let x=new _e(new Wn(.035,6,6),e);x.scale.set(.6,1,1),x.position.set(_*.15,-.01,0),d.add(x)}if(i.gafas){let _=new Kt({color:1118481});for(let R of[-1,1]){let H=new _e(new Fi(.035,.05,12),_);H.position.set(R*.055,.02,.158),d.add(H)}let x=new _e(new Xt(.2,.012,.01),_);x.position.set(0,.03,.16),d.add(x)}if(i.cascos){let _=Xn(2236962),x=new _e(new mn(.17,.02,6,16,Math.PI),_);x.position.y=.02,d.add(x);for(let R of[-1,1]){let H=new _e(new Ot(.05,.05,.04,12),_);H.rotation.z=Math.PI/2,H.position.set(R*.17,0,0),d.add(H)}}if(i.tarjetas){let _=new _e(new Xt(.1,.14,.01),Xn(2775807,662080));_.position.set(0,-.7,.06),_.rotation.x=-.5,v.add(_)}let I={root:r,body:c,legL:h,legR:u,armL:g,armR:v,head:d,face:L,caraA:E,caraB:y,habla:!1,sentado:!1,t:Math.random()*10,gesto:0};return I.update=_=>{I.t+=_;let x=I.t;if(L.material.map=I.habla&&Math.sin(x*16)>0?E:y,d.rotation.y=Math.sin(x*.7)*.12+(I.habla?Math.sin(x*3.1)*.08:0),d.rotation.x=I.habla?Math.sin(x*5)*.05:0,c.position.y=I.sentado?0:Math.sin(x*1.6)*.006,I.sentado)h.rotation.x=u.rotation.x=-1.45,g.rotation.x=v.rotation.x=-.6;else if(I.anda){let R=Math.sin(x*8)*.5;h.rotation.x=R,u.rotation.x=-R,g.rotation.x=-R*.8,v.rotation.x=R*.8,c.position.y=Math.abs(Math.cos(x*8))*.03}else h.rotation.x=u.rotation.x=0,g.rotation.x=0,v.rotation.x=I.habla?-.3+Math.sin(x*2.5)*.25:0;I.gesto>0?(I.gesto-=_,v.rotation.z=.12+2.6*Math.min(1,I.gesto),g.rotation.z=-.12-2.6*Math.min(1,I.gesto)):(v.rotation.z=.12,g.rotation.z=-.12)},I}function sh(i,e="media",t="2020"){let n=new Qa({canvas:i,antialias:e!=="baja",preserveDrawingBuffer:!0});n.setPixelRatio(Math.min(devicePixelRatio,e==="alta"?2:1)),n.toneMapping=Al,n.toneMappingExposure=1.15;let s=new Ja;s.background=new Ge(66318),s.fog=new $a(66318,22,48);let a=new Rt(50,1,.1,200);s.add(new ar(6324479,1054768,1.1));let o=new lr(14542591,1.4);o.position.set(0,8,10),s.add(o);let r=new Kt({color:3112447}),c=new Kt({color:9425151}),l=new gn({color:658712,metalness:.7,roughness:.25}),h=document.createElement("canvas");h.width=h.height=1024;let u=h.getContext("2d");u.fillStyle="#05091c",u.fillRect(0,0,1024,1024),u.translate(512,512);let f=u.createRadialGradient(0,0,50,0,0,512);f.addColorStop(0,"#13205a"),f.addColorStop(1,"#03061a"),u.fillStyle=f,u.beginPath(),u.arc(0,0,512,0,7),u.fill(),u.strokeStyle="#e0a83a",u.lineCap="round";for(let P=-1;P<=1;P+=2)for(let F=0;F<16;F++){u.lineWidth=7,u.beginPath();for(let z=0;z<=1;z+=.01){let B=F/16*Math.PI*2+P*z*2.6,ie=90+z*410;u.lineTo(Math.cos(B)*ie,Math.sin(B)*ie)}u.stroke()}for(let P of[90,180,300,420,500])u.lineWidth=P===500?14:5,u.beginPath(),u.arc(0,0,P,0,7),u.stroke();u.fillStyle="#e0a83a",u.beginPath(),u.arc(0,0,60,0,7),u.fill();let p=new Li(h);p.colorSpace=wt,p.anisotropy=4;let g=new _e(new Ui(7,96),new gn({map:p,metalness:.45,roughness:.3,emissive:16777215,emissiveMap:p,emissiveIntensity:.35}));g.rotation.x=-Math.PI/2,g.position.y=.02,s.add(g);let v=new _e(new Fi(7,7.15,128),r);v.rotation.x=-Math.PI/2,v.position.y=.03,s.add(v);let m=new _e(new Fi(7.15,30,96),new gn({color:330272,metalness:.6,roughness:.35}));m.rotation.x=-Math.PI/2,s.add(m);for(let P=0;P<24;P++){let F=P/24*Math.PI*2,z=new _e(new Xt(.06,.02,5),r);z.position.set(Math.sin(F)*9.8,.03,Math.cos(F)*9.8),z.rotation.y=F,s.add(z)}for(let P of[7.6,12.5]){let F=new _e(new mn(P,.04,6,160),r);F.rotation.x=Math.PI/2,F.position.y=.05,s.add(F)}let d=new _e(new Ot(1.6,1.7,.25,48),l);d.position.y=.12,s.add(d);let S=new _e(new mn(1.65,.03,6,64),c);S.rotation.x=Math.PI/2,S.position.y=.25,s.add(S);let E=new Wt;s.add(E),E.position.y=.25,E.scale.setScalar(1.25);for(let P of[-1,1]){let F=new Vs([new C(0,0,0),new C(P*.25,.5,0),new C(P*.7,1.05,0),new C(P*1.05,1.25,0)]),z=new _e(new Gs(F,30,.12,10),l);E.add(z);let B=new _e(new Gs(F,30,.03,6),c);B.position.z=.12,E.add(B);let ie=new _e(new Xt(.7,.05,.5),l);ie.position.set(P*1.05,1.3,0),ie.rotation.z=P*.25,E.add(ie);let ee=new _e(new wn(.62,.42),new Kt({color:1723135}));ee.rotation.x=-Math.PI/2,ee.rotation.y=P*.25,ee.position.set(P*1.05,1.33,0),E.add(ee)}let y=new _e(new Ot(.35,.5,.15,24),l);E.add(y);let L=[];for(let P of[-1,1]){let F=new Wt;F.position.set(P*2.3,.25,0),F.rotation.y=-P*Math.PI/2,s.add(F),L.push(F);let z=new _e(new Ot(.05,.05,1,12),l);z.position.y=.5,F.add(z);let B=new _e(new Ot(.35,.4,.05,24),l);F.add(B);let ie=new _e(new mn(.25,.015,6,24),c);ie.rotation.x=Math.PI/2,ie.position.y=.35,F.add(ie);let ee=new _e(new Ot(.3,.28,.1,24),new gn({color:1381663,roughness:.6}));ee.position.y=1.02,F.add(ee);let ce=new _e(new Xt(.5,.55,.06),ee.material);ce.position.set(0,1.35,-.28),ce.rotation.x=-.15,F.add(ce)}let w=new Di(.16,.3,3,6),A=new Wn(.12,8,6),I=e==="baja"?160:360,_=new ks(w,new gn({roughness:.8}),I),x=new ks(A,new gn({color:14198920,roughness:.8}),I);s.add(_,x);let R=[_,x],H=new lt,k=new Ge,q=0,$=[];for(let P of[-1,1])for(let F=0;F<6;F++){let z=12+F*1.1,B=.4+F*.55,ie=new _e(new Ot(z+.55,z+.55,B,48,1,!0,P>0?Math.PI*.18:Math.PI*1.18,Math.PI*.64),new gn({color:725552,side:Gt,metalness:.4,roughness:.5}));ie.position.y=B/2,s.add(ie);let ee=new _e(new mn(z-.5,.025,4,80,Math.PI*.64),r);ee.rotation.x=Math.PI/2,ee.rotation.z=-(P>0?Math.PI*.18:Math.PI*1.18)+Math.PI/2-Math.PI*.64,ee.position.y=B+.01,s.add(ee);for(let ce=0;ce<30&&q<I;ce++){let Le=(P>0?Math.PI*.2:Math.PI*1.2)+ce/29*Math.PI*.6,K=Math.sin(Le)*z,me=Math.cos(Le)*z;Math.random()<.12||(H.makeTranslation(K,B+.35,me),_.setMatrixAt(q,H),_.setColorAt(q,k.setHSL(Math.random(),.45,.25+Math.random()*.3)),H.makeTranslation(K,B+.75,me),x.setMatrixAt(q,H),$.push({x:K,y:B,z:me}),q++)}}_.count=x.count=q;let V=new Li(Ys(1024));V.colorSpace=wt;let Z=new _e(new Ui(2.6,64),new Kt({map:V,transparent:!0}));Z.position.set(0,4.2,-15.5),s.add(Z);let X=new _e(new Ot(17,17,12,64,1,!0,Math.PI*.8,Math.PI*.4),new gn({color:264226,side:Nt}));X.position.y=6,s.add(X);for(let P=-6;P<=6;P++){if(P===0)continue;let F=Math.PI+P*.055,z=new _e(new Xt(.12,9,.12),P%2?r:c);z.position.set(Math.sin(F)*16.5,4.5,Math.cos(F)*16.5),s.add(z)}for(let P of[3,3.4]){let F=new _e(new mn(P,.05,6,80),r);F.position.set(0,4.2,-15.4),s.add(F)}let ne=new _e(new mn(8,.12,8,96),r);ne.rotation.x=Math.PI/2,ne.position.y=10,s.add(ne);let fe=[],be=new Kt({color:3837183,transparent:!0,opacity:.09,blending:Da,depthWrite:!1,side:Gt});for(let P=0;P<14;P++){let F=new _e(new Ni(1.2,14,20,1,!0),be);F.geometry.translate(0,-7,0);let z=P/14*Math.PI*2;F.position.set(Math.sin(z)*8,10,Math.cos(z)*8),F.userData={a:z,f:.3+Math.random()*.4},s.add(F),fe.push(F)}let Ie=new rr(11061503,260,30,.45,.5,1);Ie.position.set(0,12,4),Ie.target.position.set(0,0,0),s.add(Ie,Ie.target);let Ye=new or(3107839,25,25);Ye.position.set(0,5,-8),s.add(Ye);let Q={},j=P=>{let F=qn[P],z=ql(F.aspecto||{});return z.root.userData=z,z.root.visible=!1,s.add(z.root),Q[P]=z.root,z.root};Object.keys(qn).forEach(j);let ve=(P,F)=>{let z=Q[P],B=z.position.clone(),ie=z.rotation.y,ee=z.visible,ce=z.userData.sentado;s.remove(z);let Le=ql(F||qn[P].aspecto);return Le.root.userData=Le,s.add(Le.root),Q[P]=Le.root,Le.root.position.copy(B),Le.root.rotation.y=ie,Le.root.visible=ee,Le.sentado=ce,Le.root},oe=(P,F)=>{P.position.copy(F.position).add(new C(0,.24,0)),P.rotation.y=F.rotation.y,P.visible=!0,P.userData.sentado=!0},Ce=(P,F,z,B,ie)=>{P.position.set(F,z,B),P.rotation.y=ie,P.visible=!0,P.userData.sentado=!1};oe(Q.leo,L[1]),oe(Q.conc,L[0]);let Re={wide:[new C(0,4.5,13),new C(0,1.8,-2)],pres:[new C(-.6,2,2.6),new C(2.3,1.95,0)],silla:[new C(.6,2,2.6),new C(-2.3,1.85,0)],consola:[new C(0,2.8,3.2),new C(0,1.4,0)],grada:[new C(3,2.5,4),new C(12,2,4)],pres2:[new C(0,1.9,7),new C(0,1.6,3.2)],copro:[new C(-.5,1.9,5.5),new C(1.3,1.6,2.2)],logo:[new C(0,4,-6),new C(0,4.2,-15.5)],dos:[new C(0,2.4,5.5),new C(0,1.6,0)],cenital:[new C(0,14,.1),new C(0,0,0)]},ae={modo:"orbita",t:0,desde:null,hacia:null,mira:new C,dur:1.4,orbitR:13,orbitH:5,yaw:0,pitch:0};a.position.copy(Re.wide[0]),a.lookAt(Re.wide[1]);let at=(P,F=1.2)=>{let z=Re[P]||Re.wide;ae.modo="plano",ae.t=0,ae.dur=F,ae.desde=[a.position.clone(),ae.mira.clone()],ae.hacia=z},qe=(P=13,F=5)=>{ae.modo="orbita",ae.orbitR=P,ae.orbitH=F},ht=()=>{ae.modo="libre",a.position.set(0,1.7,9),ae.yaw=0,ae.pitch=0},N=0,zt=0,Oe=0,Xe=!0,Te={x:0,z:0};function ut(P){Oe+=P;let F=i.clientWidth,z=i.clientHeight;(F!==N||z!==zt)&&(N=F,zt=z,n.setSize(F,z,!1),a.aspect=F/z,a.fov=F/z<1.2?65:50,a.updateProjectionMatrix());for(let B of fe){let ie=B.userData;B.rotation.x=Math.sin(Oe*ie.f+ie.a)*.45,B.rotation.z=Math.cos(Oe*ie.f*.8+ie.a)*.45,B.visible=Xe}for(let B in Q)Q[B].visible&&Q[B].userData.update(P);if(ae.modo==="orbita"){let B=Oe*.08;a.position.set(Math.sin(B)*ae.orbitR,ae.orbitH+Math.sin(Oe*.3)*.5,Math.cos(B)*ae.orbitR),ae.mira.set(0,1.5,0)}else if(ae.modo==="plano"){ae.t=Math.min(1,ae.t+P/ae.dur);let B=ae.t<.5?2*ae.t*ae.t:1-Math.pow(-2*ae.t+2,2)/2;a.position.lerpVectors(ae.desde[0],ae.hacia[0],B),ae.mira.lerpVectors(ae.desde[1],ae.hacia[1],B),a.position.x+=Math.sin(Oe*.4)*.05}else if(ae.modo==="libre"){let B=new C(Math.sin(ae.yaw),0,-Math.cos(ae.yaw)),ie=new C(-B.z,0,B.x);a.position.addScaledVector(B,-Te.z*P*4).addScaledVector(ie,Te.x*P*4),a.position.y=1.7,ae.mira.copy(a.position).add(new C(Math.sin(ae.yaw)*Math.cos(ae.pitch),Math.sin(ae.pitch),-Math.cos(ae.yaw)*Math.cos(ae.pitch)))}a.lookAt(ae.mira),n.render(s,a)}let Ae={2020:[3112447,9425151,66318,3837183],2005:[8011007,13672703,393754,10119935],1999:[1727231,16765024,1296,16760896],virtual:[57599,16730832,327706,4259839]},T=P=>{let[F,z,B,ie]=Ae[P]||Ae[2020];r.color.setHex(F),c.color.setHex(z),s.background.setHex(B),s.fog.color.setHex(B),be.color.setHex(ie)};return T(t),{recreaFigura:ve,aplicaEstilo:T,ponLogo:P=>{let F=new Ft(P);F.colorSpace=wt,F.needsUpdate=!0,Z.material.map=F,Z.material.needsUpdate=!0},dePie:Ce,gradas:P=>R.forEach(F=>F.visible=P),renderer:n,scene:s,camera:a,frame:ut,plano:at,orbita:qe,libre:ht,cam:ae,mueve:Te,figuras:Q,sillas:L,publico:$,PLANOS:Re,toggleLuces:()=>Xe=!Xe,sentar:oe}}var tn=Uint8Array,ys=Uint16Array,Og=Int32Array,ah=new tn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rh=new tn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bg=new tn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oh=function(i,e){for(var t=new ys(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Og(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)s[a]=a-t[n]<<5|n;return{b:t,r:s}},lh=oh(ah,2),ch=lh.b,zg=lh.r;ch[28]=258,zg[258]=28;var uh=oh(rh,0),kg=uh.b,kv=uh.r,$l=new ys(32768);for(Ke=0;Ke<32768;++Ke)Yn=(Ke&43690)>>1|(Ke&21845)<<1,Yn=(Yn&52428)>>2|(Yn&13107)<<2,Yn=(Yn&61680)>>4|(Yn&3855)<<4,$l[Ke]=((Yn&65280)>>8|(Yn&255)<<8)>>1;var Yn,Ke,$s=(function(i,e,t){for(var n=i.length,s=0,a=new ys(e);s<n;++s)i[s]&&++a[i[s]-1];var o=new ys(e);for(s=1;s<e;++s)o[s]=o[s-1]+a[s-1]<<1;var r;if(t){r=new ys(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)r[$l[u]>>c]=l}else for(r=new ys(n),s=0;s<n;++s)i[s]&&(r[s]=$l[o[i[s]-1]++]>>15-i[s]);return r}),Js=new tn(288);for(Ke=0;Ke<144;++Ke)Js[Ke]=8;var Ke;for(Ke=144;Ke<256;++Ke)Js[Ke]=9;var Ke;for(Ke=256;Ke<280;++Ke)Js[Ke]=7;var Ke;for(Ke=280;Ke<288;++Ke)Js[Ke]=8;var Ke,hh=new tn(32);for(Ke=0;Ke<32;++Ke)hh[Ke]=5;var Ke;var Hg=$s(Js,9,1);var Vg=$s(hh,5,1),Xl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},xn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Yl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Gg=function(i){return(i+7)/8|0},Zl=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new tn(i.subarray(e,t))};var Wg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],en=function(i,e,t){var n=new Error(e||Wg[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,en),!t)throw n;return n},qg=function(i,e,t,n){var s=i.length,a=n?n.length:0;if(!s||e.f&&!e.l)return t||new tn(0);var o=!t,r=o||e.i!=2,c=e.i;o&&(t=new tn(s*3));var l=function(at){var qe=t.length;if(at>qe){var ht=new tn(Math.max(qe*2,at));ht.set(t),t=ht}},h=e.f||0,u=e.p||0,f=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,d=s*8;do{if(!p){h=xn(i,u,1);var S=xn(i,u+1,3);if(u+=3,S)if(S==1)p=Hg,g=Vg,v=9,m=5;else if(S==2){var w=xn(i,u,31)+257,A=xn(i,u+10,15)+4,I=w+xn(i,u+5,31)+1;u+=14;for(var _=new tn(I),x=new tn(19),R=0;R<A;++R)x[Bg[R]]=xn(i,u+R*3,7);u+=A*3;for(var H=Xl(x),k=(1<<H)-1,q=$s(x,H,1),R=0;R<I;){var $=q[xn(i,u,k)];u+=$&15;var E=$>>4;if(E<16)_[R++]=E;else{var V=0,Z=0;for(E==16?(Z=3+xn(i,u,3),u+=2,V=_[R-1]):E==17?(Z=3+xn(i,u,7),u+=3):E==18&&(Z=11+xn(i,u,127),u+=7);Z--;)_[R++]=V}}var X=_.subarray(0,w),ne=_.subarray(w);v=Xl(X),m=Xl(ne),p=$s(X,v,1),g=$s(ne,m,1)}else en(1);else{var E=Gg(u)+4,y=i[E-4]|i[E-3]<<8,L=E+y;if(L>s){c&&en(0);break}r&&l(f+y),t.set(i.subarray(E,L),f),e.b=f+=y,e.p=u=L*8,e.f=h;continue}if(u>d){c&&en(0);break}}r&&l(f+131072);for(var fe=(1<<v)-1,be=(1<<m)-1,Ie=u;;Ie=u){var V=p[Yl(i,u)&fe],Ye=V>>4;if(u+=V&15,u>d){c&&en(0);break}if(V||en(2),Ye<256)t[f++]=Ye;else if(Ye==256){Ie=u,p=null;break}else{var Q=Ye-254;if(Ye>264){var R=Ye-257,j=ah[R];Q=xn(i,u,(1<<j)-1)+ch[R],u+=j}var ve=g[Yl(i,u)&be],oe=ve>>4;ve||en(3),u+=ve&15;var ne=kg[oe];if(oe>3){var j=rh[oe];ne+=Yl(i,u)&(1<<j)-1,u+=j}if(u>d){c&&en(0);break}r&&l(f+131072);var Ce=f+Q;if(f<ne){var Re=a-ne,ae=Math.min(ne,Ce);for(Re+f<0&&en(3);f<ae;++f)t[f]=n[Re+f]}for(;f<Ce;++f)t[f]=t[f-ne]}}e.l=p,e.p=Ie,e.b=f,e.f=h,p&&(h=1,e.m=v,e.d=g,e.n=m)}while(!h);return f!=t.length&&o?Zl(t,0,f):t.subarray(0,f)};var Xg=new tn(0);var Cn=function(i,e){return i[e]|i[e+1]<<8},on=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Ql=function(i,e){return on(i,e)+on(i,e+4)*4294967296};function Yg(i,e){return qg(i,{i:2},e&&e.out,e&&e.dictionary)}var Jl=typeof TextDecoder<"u"&&new TextDecoder,Qg=0;try{Jl.decode(Xg,{stream:!0}),Qg=1}catch{}var $g=function(i){for(var e="",t=0;;){var n=i[t++],s=(n>127)+(n>223)+(n>239);if(t+s>i.length)return{s:e,r:Zl(i,t-1)};s?s==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function Jg(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Jl)return Jl.decode(i);var s=$g(i),a=s.s,t=s.r;return t.length&&en(8),a}}var Zg=function(i,e){return e+30+Cn(i,e+26)+Cn(i,e+28)},jg=function(i,e,t){var n=Cn(i,e+28),s=Cn(i,e+30),a=Jg(i.subarray(e+46,e+46+n),!(Cn(i,e+8)&2048)),o=e+46+n,r=Kg(i,o,s,t,on(i,e+20),on(i,e+24),on(i,e+42)),c=r[0],l=r[1],h=r[2];return[Cn(i,e+10),c,l,a,o+s+Cn(i,e+32),h]},Kg=function(i,e,t,n,s,a,o){var r=s==4294967295,c=a==4294967295,l=o==4294967295,h=e+t,u=r+c+l;if(n&&u){for(;e+4<h;e+=4+Cn(i,e+2))if(Cn(i,e)==1)return[r?Ql(i,e+4+8*c):s,c?Ql(i,e+4):a,l?Ql(i,e+4+8*(c+r)):o,1];n<2&&en(13)}return[s,a,o,0]};function dh(i,e){for(var t={},n=i.length-22;on(i,n)!=101010256;--n)(!n||i.length-n>65558)&&en(13);var s=Cn(i,n+8);if(!s)return{};var a=on(i,n+16),o=on(i,n-20)==117853008;if(o){var r=on(i,n-12);o=on(i,r)==101075792,o&&(s=on(i,r+32),a=on(i,r+48))}for(var c=e&&e.filter,l=0;l<s;++l){var h=jg(i,a,o),u=h[0],f=h[1],p=h[2],g=h[3],v=h[4],m=h[5],d=Zg(i,m);a=v,(!c||c({name:g,size:f,originalSize:p,compression:u}))&&(u?u==8?t[g]=Yg(i.subarray(d,d+f),{out:new tn(p)}):en(14,"unknown compression type "+u):t[g]=Zl(i,d,d+f))}return t}var jl=()=>new Promise((i,e)=>{let t=indexedDB.open("mm_recursos",1);t.onupgradeneeded=()=>t.result.createObjectStore("r"),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)});async function Qn(i,e){let t=await jl();await new Promise((n,s)=>{let a=t.transaction("r","readwrite");a.objectStore("r").put(e,i),a.oncomplete=n,a.onerror=()=>s(a.error)}),It.cache[i]=e}async function pr(i){let e=await jl();await new Promise(t=>{let n=e.transaction("r","readwrite");i?n.objectStore("r").delete(i):n.objectStore("r").clear(),n.oncomplete=t,n.onerror=t}),i?delete It.cache[i]:It.cache={}}async function fh(){try{let i=await jl();await new Promise(e=>{let t=i.transaction("r"),n=t.objectStore("r"),s=n.openCursor();s.onsuccess=()=>{let a=s.result;a?(It.cache[a.key]=a.value,a.continue()):e()},s.onerror=e})}catch{}}var It={cache:{}},Kl=[["tema","Sintonía del menú"],["cabecera","Cabecera"],["fase1","Preguntas 1-5"],["fase2","Preguntas 6-10"],["fase3","Preguntas 11-15"],["elige","Respuesta elegida"],["acierto1","Acierto"],["fallo","Fallo"],["c5050","50:50"],["comodin","Comodín"],["telefono","Llamada (30 s)"],["publico","Votación del público"],["millon","El millón"],["despedida","Despedida"],["publicidad","Vuelta de publicidad"]];async function ph(i){let e=dh(new Uint8Array(await i.arrayBuffer())),t=JSON.parse(new TextDecoder().decode(e["project.json"])),n=[],s=new Set;for(let a of t.targets)for(let o of a.sounds||[])s.has(o.md5ext)||!e[o.md5ext]||(s.add(o.md5ext),n.push({nombre:o.name,blob:new Blob([e[o.md5ext]],{type:o.dataFormat==="mp3"?"audio/mpeg":"audio/wav"})}));return n}async function mh(i){let e=0;for(let t of i){let n=t.name.replace(/\.[^.]+$/,"").toLowerCase();Kl.some(s=>s[0]===n)&&(await Qn("snd:"+n,t),e++)}return e}var mr={cadena:"Show Time TV",anuncios:[{id:"brillotex",marca:"Brillotex",producto:"Limpiador Brillotex Turbo",lema:"¡Brilla tanto que tendrás que ponerte gafas de sol!",color:["#00b4ff","#0040a0"],dibujo:"botella",voz:"sharvard",lineas:["¿Tu cocina está más sucia que la mochila de un adolescente?","Llega Brillotex Turbo. Una pasada, y todo brilla.","Brillotex Turbo. ¡Brilla tanto que tendrás que ponerte gafas de sol!"]},{id:"patatin",marca:"Patatín",producto:"Patatas Patatín sabor tortilla",lema:"¡Crujen tanto que se oyen en el piso de arriba!",color:["#ffd21a","#e05a00"],dibujo:"bolsa",voz:"ald",lineas:["¿Tortilla o patatas fritas? ¿Por qué elegir?","Nuevas Patatín sabor tortilla de patatas. Con cebolla o sin cebolla, tú decides.","Patatín. ¡Crujen tanto que se oyen en el piso de arriba!"]},{id:"dormilon",marca:"Dormilón",producto:"Colchón Dormilón Nube 3000",lema:"Dormirás tan bien que llegarás tarde a todo.",color:["#8a7aff","#2a1a7a"],dibujo:"colchon",voz:"daniela",lineas:["¿Das más vueltas en la cama que una moneda en el aire?","Colchón Dormilón Nube 3000. Tan blandito que parece hecho de nubes de verdad.","Dormilón. Dormirás tan bien que llegarás tarde a todo."]},{id:"turbocalcetin",marca:"Calcetinator",producto:"Calcetines Calcetinator antipérdida",lema:"Nunca más un calcetín solo.",color:["#ff5aa0","#7a0a3a"],dibujo:"calcetin",voz:"carlfm",lineas:["Metes dos calcetines en la lavadora… y sale uno. ¿Te suena?","Calcetinator. Los primeros calcetines con imán. Siempre van juntos, como los buenos amigos.","Calcetinator. Nunca más un calcetín solo."]},{id:"yogurin",marca:"Yogurín",producto:"Yogur Yogurín de churros con chocolate",lema:"El desayuno y la merienda, en un solo yogur.",color:["#ffb070","#7a3a10"],dibujo:"yogur",voz:"daniela",lineas:["¿Churros con chocolate para desayunar? ¿Y por qué no en un yogur?","Nuevo Yogurín sabor churros con chocolate. Sin aceite, sin grasa y sin madrugar.","Yogurín. El desayuno y la merienda, en un solo yogur."]},{id:"megafon",marca:"Megafón",producto:"Teléfono Megafón Ladrillo X",lema:"Tan resistente que puedes construir una casa con él.",color:["#3ac85a","#0a4a1a"],dibujo:"movil",voz:"ald",lineas:["¿Se te rompe el móvil cada vez que se te cae?","Megafón Ladrillo X. Batería para un mes, pantalla irrompible y pesa como un ladrillo. Porque es un ladrillo.","Megafón. Tan resistente que puedes construir una casa con él."]},{id:"gominola",marca:"Saltarín",producto:"Gominolas Saltarín que saltan solas",lema:"¡Tan divertidas que se escapan de la bolsa!",color:["#ff3a3a","#ffd23a"],dibujo:"gominolas",voz:"sharvard",lineas:["¡Atención, niños y mayores! Llegan las gominolas que saltan solas.","Gominolas Saltarín. Abres la bolsa… y boing, boing, directas a tu boca.","Saltarín. ¡Tan divertidas que se escapan de la bolsa!"]},{id:"aspirapelusa",marca:"Pelusín",producto:"Robot aspirador Pelusín que canta",lema:"Limpia tu casa y te canta una canción.",color:["#c8ccd8","#3a4050"],dibujo:"robot",voz:"carlfm",lineas:["¿Limpiar la casa te aburre? Pelusín lo hace por ti.","El robot aspirador que limpia, friega y además te canta mientras trabaja. La la la.","Pelusín. Limpia tu casa y te canta una canción."]}],cortinillas:{publicidad:"Publicidad",min1:"Volvemos en un minuto",seg30:"Volvemos en treinta segundos",anuncios3:"Tres anuncios",anuncio1:"Un anuncio",volvemos:"Volvemos con ¡Ahora caigo!"}};var ev=Object.assign({},mr.cortinillas,{volvemos:"Volvemos con ¿Quién quiere ser millonario?"}),zi=mr.cadena||"Show Time TV",bs=mr.anuncios,tc,vh,xh=(i,e)=>{tc=i,vh=e},js=class extends Error{},tv=(i,e,t,n,s,a)=>{i.beginPath(),i.moveTo(e+a,t),i.arcTo(e+n,t,e+n,t+s,a),i.arcTo(e+n,t+s,e,t+s,a),i.arcTo(e,t+s,e,t,a),i.arcTo(e,t,e+n,t,a),i.closePath()};function nv(i="entra"){try{let e=tc.ctx,t=e.currentTime+.02;(i==="entra"?[523,659,784,1047]:i==="sale"?[1047,784,659,880]:[784,988]).forEach((s,a)=>{let o=e.createOscillator(),r=e.createGain();o.type="triangle",o.frequency.value=s,r.gain.setValueAtTime(0,t+a*.13),r.gain.linearRampToValueAtTime(.18,t+a*.13+.02),r.gain.exponentialRampToValueAtTime(.001,t+a*.13+.5),o.connect(r),r.connect(e.destination),o.start(t+a*.13),o.stop(t+a*.13+.55)})}catch{}}function _h(i,e,t,n,s=1){i.save(),i.globalAlpha=s,i.translate(e,t);let a=n*.5;i.fillStyle="#ffd23a",i.beginPath();for(let o=0;o<10;o++){let r=o%2?a*.45:a,c=-Math.PI/2+o*Math.PI/5;i.lineTo(Math.cos(c)*r,Math.sin(c)*r)}i.closePath(),i.fill(),i.lineWidth=n*.05,i.strokeStyle="#a0500a",i.stroke(),i.font=`900 ${n*.34}px "Arial Black", Arial, sans-serif`,i.textAlign="left",i.textBaseline="middle",i.lineWidth=n*.08,i.strokeStyle="#2a0a5a",i.strokeText("SHOW TIME",a*1.15,-n*.12),i.fillStyle="#fff",i.fillText("SHOW TIME",a*1.15,-n*.12),i.font=`900 ${n*.28}px "Arial Black", Arial, sans-serif`,i.fillStyle="#ff5ad0",i.strokeText("TV",a*1.15,n*.24),i.fillText("TV",a*1.15,n*.24),i.restore()}function ui(i,e,t,n,s,a="#fff",o="#1a0a3a",r){i.font=`900 ${s}px "Arial Black", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*.16,i.strokeStyle=o,i.strokeText(e,t,n,r),i.fillStyle=a,i.fillText(e,t,n,r)}function iv(i,e,t,n){if(!n)return;i.save(),i.font=`700 ${Math.round(t*.04)}px system-ui, Arial`;let s=Math.min(e*.9,i.measureText(n).width+30);i.fillStyle="rgba(0,0,0,.6)",i.fillRect((e-s)/2,t*.88,s,t*.07),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,e/2,t*.915,e*.88),i.restore()}var ec=class{constructor(e){this.ses=e,this.vivo=!0,this.dibujo=null,this.t0=performance.now(),this.sub="";let t=this.div=document.createElement("div");t.id="showtime",t.style.cssText="position:fixed;inset:0;z-index:70;background:#000;cursor:pointer",this.c=document.createElement("canvas"),this.c.style.cssText="position:absolute;inset:0;width:100%;height:100%";let n=document.createElement("button");n.className="tbtn",n.id="stSaltar",n.textContent="Saltar ⏭",n.style.cssText="position:absolute;right:14px;bottom:14px;z-index:2",n.onclick=o=>{o.stopPropagation(),this.vivo=!1},t.append(this.c,n),document.body.appendChild(t);let s=()=>{let o=Math.min(2,devicePixelRatio||1);this.c.width=innerWidth*o,this.c.height=innerHeight*o};s(),this.tam=s,addEventListener("resize",s);let a=()=>{if(!this.div.isConnected)return;let o=this.c.getContext("2d"),r=this.c.width,c=this.c.height,l=(performance.now()-this.t0)/1e3;o.clearRect(0,0,r,c);try{this.dibujo&&this.dibujo(o,r,c,l)}catch{}this.marca&&_h(o,r*.86,c*.07,c*.06,.85),iv(o,r,c,this.sub),requestAnimationFrame(a)};requestAnimationFrame(a)}w(e){return new Promise((t,n)=>{let s=performance.now(),a=()=>{if(!this.vivo||!this.ses.alive)return n(new js);performance.now()-s>=e?t():setTimeout(a,50)};a()})}async habla(e,t){let n=vh(e,t);await Promise.race([n,new Promise((s,a)=>{let o=setInterval(()=>{(!this.vivo||!this.ses.alive)&&(clearInterval(o),a(new js))},60);n.then(()=>{clearInterval(o),s()})})])}escena(e,t=!0){this.dibujo=e,this.t0=performance.now(),this.marca=t,this.sub=""}cerrar(){removeEventListener("resize",this.tam),this.div.style.transition="opacity .3s",this.div.style.opacity="0",setTimeout(()=>this.div.remove(),320)}};async function Rn(i,e){let t={publicidad:["PUBLICIDAD",""],min1:["VOLVEMOS EN","1 MINUTO"],seg30:["VOLVEMOS EN","30 SEGUNDOS"],anuncios3:["3","ANUNCIOS"],anuncio1:["1","ANUNCIO"],volvemos:["VOLVEMOS CON","¿QUIÉN QUIERE SER MILLONARIO?"]}[e];nv(e==="volvemos"?"sale":"entra"),i.escena((n,s,a,o)=>{let r=n.createLinearGradient(0,0,s,a);r.addColorStop(0,"#2a0a6a"),r.addColorStop(.6,"#8a1ab0"),r.addColorStop(1,"#ff3a9a"),n.fillStyle=r,n.fillRect(0,0,s,a),n.save(),n.translate(s/2,a/2),n.rotate(o*.3);for(let u=0;u<16;u++)n.rotate(Math.PI/8),n.fillStyle=u%2?"rgba(255,210,60,.12)":"rgba(255,255,255,.05)",n.beginPath(),n.moveTo(0,0),n.lineTo(-s*.12,-s),n.lineTo(s*.12,-s),n.fill();n.restore();let c=Math.min(1,o/.45),l=1-Math.pow(1-c,3);_h(n,s*.5-a*.17,a*.2,a*.16*l),/^\d$/.test(t[0])?(n.save(),n.translate(s/2,a*.55),n.scale(l,l),n.fillStyle="#ffd23a",n.beginPath(),n.arc(0,0,a*.16,0,7),n.fill(),n.lineWidth=a*.02,n.strokeStyle="#fff",n.stroke(),n.lineWidth=a*.012,n.beginPath(),n.arc(0,0,a*.2,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,o/2.6)),n.stroke(),n.restore(),ui(n,t[0],s/2,a*.56,a*.22*l,"#2a0a5a","#fff"),ui(n,t[1],s/2,a*.82,a*.09*l,"#fff")):(ui(n,t[0],s/2-(1-l)*s,a*.52,a*(t[1]?.1:.17),"#fff","#2a0a5a",s*.9),t[1]&&ui(n,t[1],s/2+(1-l)*s,a*.68,a*.09,"#ffd23a","#2a0a5a",s*.9))},!1),await i.habla(ev[e],"st_daniela"),await i.w(500)}function sv(i,e,t,n,s,a,o){i.save(),i.translate(t,n),i.rotate(Math.sin(a*2)*.08);let r=(l,h,u,f)=>{i.fillStyle="rgba(255,255,255,.35)",i.fillRect(l,h,u,f)},c=(l,h,u,f=.1)=>{tv(i,-l/2,-h/2,l,h,s*f),i.fillStyle=u,i.fill(),i.lineWidth=s*.03,i.strokeStyle="#0008",i.stroke()};if(e==="botella")c(s*.5,s*.9,o[0]),i.fillStyle=o[1],i.fillRect(-s*.1,-s*.62,s*.2,s*.18),r(-s*.18,-s*.35,s*.08,s*.6);else if(e==="bolsa"){i.beginPath(),i.moveTo(-s*.4,-s*.5),i.lineTo(s*.4,-s*.5),i.lineTo(s*.46,s*.5),i.lineTo(-s*.46,s*.5),i.closePath(),i.fillStyle=o[0],i.fill(),i.lineWidth=s*.03,i.strokeStyle="#0008",i.stroke();for(let l=0;l<5;l++)i.fillStyle="#ffe08a",i.beginPath(),i.ellipse(-s*.2+l*s*.1,s*.1+Math.sin(a*4+l)*s*.05,s*.08,s*.05,l,0,7),i.fill()}else if(e==="colchon"){c(s*1.1,s*.35,"#f4f4ff",.12),i.strokeStyle=o[0],i.lineWidth=s*.02;for(let l=-4;l<=4;l++)i.beginPath(),i.moveTo(l*s*.12,-s*.15),i.lineTo(l*s*.12,s*.15),i.stroke();for(let l=0;l<3;l++)i.fillStyle="rgba(255,255,255,.9)",i.beginPath(),i.arc(-s*.3+l*s*.3,-s*.4-Math.sin(a*2+l)*s*.05,s*.12,0,7),i.fill()}else if(e==="calcetin")for(let l of[-.2,.2])i.save(),i.translate(l*s,0),i.fillStyle=o[0],i.fillRect(-s*.12,-s*.45,s*.24,s*.6),i.beginPath(),i.ellipse(l<0?-s*.05:s*.05,s*.2,s*.22,s*.13,0,0,7),i.fill(),i.fillStyle="#fff",i.fillRect(-s*.12,-s*.45,s*.24,s*.08),i.restore();else if(e==="yogur")i.beginPath(),i.moveTo(-s*.3,-s*.35),i.lineTo(s*.3,-s*.35),i.lineTo(s*.24,s*.4),i.lineTo(-s*.24,s*.4),i.closePath(),i.fillStyle="#fff",i.fill(),i.strokeStyle="#0006",i.lineWidth=s*.03,i.stroke(),i.fillStyle=o[0],i.fillRect(-s*.27,-s*.1,s*.54,s*.2),i.fillStyle="#c0c4cc",i.fillRect(-s*.33,-s*.42,s*.66,s*.08);else if(e==="movil")c(s*.5,s*.9,"#7a4a2a",.04),c(s*.36,s*.5,"#1a2a4a",.03),r(-s*.15,-s*.2,s*.05,s*.4);else if(e==="gominolas")for(let l=0;l<7;l++){let h=-Math.abs(Math.sin(a*5+l))*s*.4;i.fillStyle=["#ff3a3a","#ffd23a","#3ac85a","#3a8aff","#ff5ad0"][l%5],i.beginPath(),i.ellipse(-s*.45+l*s*.15,s*.2+h,s*.07,s*.1,0,0,7),i.fill()}else e==="robot"&&(i.fillStyle=o[0],i.beginPath(),i.arc(0,0,s*.42,0,7),i.fill(),i.lineWidth=s*.04,i.strokeStyle=o[1],i.stroke(),i.fillStyle=o[1],i.beginPath(),i.arc(0,-s*.1,s*.12,0,7),i.fill(),i.fillStyle="#3aff8a",i.beginPath(),i.arc(0,-s*.1,s*.05,0,7),i.fill());i.restore()}async function Zs(i,e){let t=0;i.escena((n,s,a,o)=>{let r=n.createRadialGradient(s/2,a/2,10,s/2,a/2,s*.7);r.addColorStop(0,e.color[0]),r.addColorStop(1,e.color[1]),n.fillStyle=r,n.fillRect(0,0,s,a);for(let l=0;l<24;l++)n.fillStyle="rgba(255,255,255,.08)",n.beginPath(),n.arc(l*137%100/100*s,(l*71+o*40)%100/100*a,a*.02+l%4*a*.01,0,7),n.fill();let c=Math.min(1,o/.6);sv(n,e.dibujo,s*(t<2?.3:.5),a*(t<2?.5:.42),a*.45*(.6+.4*c),o,e.color),t<2?(ui(n,e.marca.toUpperCase(),s*.68,a*.38,a*.12,"#fff","#000",s*.5),ui(n,e.producto,s*.68,a*.52,a*.045,"#ffe","#000",s*.55)):(ui(n,e.marca.toUpperCase(),s/2,a*.14,a*.11,"#fff","#000",s*.8),ui(n,e.lema,s/2,a*.74,a*.05,"#ffd23a","#000",s*.92)),n.font=`600 ${a*.022}px system-ui`,n.fillStyle="rgba(255,255,255,.7)",n.textAlign="left",n.fillText("Anuncio inventado · marca y producto ficticios",s*.02,a*.97)});for(let n=0;n<e.lineas.length;n++)t=n,i.sub=e.lineas[n],await i.habla(e.lineas[n],"st_"+e.voz),await i.w(250);await i.w(900)}var gh=i=>i.slice().sort(()=>Math.random()-.5);async function nc(i="pausa",e){let t=new ec(e);tc.stopMusic();try{if(i.startsWith("anuncio:"))await Zs(t,bs.find(n=>n.id===i.slice(8))||bs[0]);else if(i==="cortinillas")for(let n of["publicidad","min1","anuncios3","seg30","anuncio1","volvemos"])await Rn(t,n);else if(i==="corta"){let n=gh(bs);await Rn(t,"publicidad"),await Rn(t,"anuncio1"),await Zs(t,n[0]),await Rn(t,"volvemos")}else{let n=gh(bs);await Rn(t,"publicidad"),await Rn(t,"min1"),await Rn(t,"anuncios3"),await Zs(t,n[0]),await Zs(t,n[1]),await Rn(t,"seg30"),await Rn(t,"anuncio1"),await Zs(t,n[2]),await Rn(t,"volvemos")}}catch(n){if(!(n instanceof js))throw t.cerrar(),n}t.cerrar()}var yh=`# Formato: pregunta|correcta|incorrecta|incorrecta|incorrecta. «#N» = nivel de dificultad (1 fácil … 5 muy difícil)
#1
¿Cuántas patas tiene una araña?|Ocho|Seis|Diez|Cuatro
¿De qué color es la clorofila?|Verde|Roja|Azul|Amarilla
¿Qué animal es conocido como «el rey de la selva»?|El león|El elefante|El tigre|El gorila
¿Cuántos días tiene una semana?|Siete|Cinco|Seis|Ocho
¿Qué se celebra el 25 de diciembre?|La Navidad|La Nochevieja|Los Reyes Magos|San Juan
¿Cuál es la capital de España?|Madrid|Barcelona|Sevilla|Valencia
¿Qué fruta es amarilla y alargada?|El plátano|La fresa|La manzana|La uva
¿En qué estación caen las hojas de muchos árboles?|Otoño|Primavera|Verano|Invierno
¿Cuántos minutos tiene una hora?|60|100|30|50
¿Qué instrumento tiene teclas blancas y negras?|El piano|La guitarra|El violín|La trompeta
¿Qué animal hace «muuu»?|La vaca|La oveja|El cerdo|El caballo
¿Con qué se escribe en una pizarra de colegio tradicional?|Con tiza|Con bolígrafo|Con pincel|Con rotulador permanente
¿Qué planeta habitamos?|La Tierra|Marte|Venus|Júpiter
¿Cuántas ruedas tiene una bicicleta normal?|Dos|Tres|Cuatro|Una
¿Qué se usa para cortar papel?|Tijeras|Grapadora|Celo|Goma
¿Cuál es el resultado de 5 + 5?|10|55|15|25
¿Qué ave no puede volar y vive en la Antártida?|El pingüino|La gaviota|El águila|El loro
¿De qué está hecho principalmente el hielo?|De agua|De sal|De arena|De aire
¿Cuál es el color del cielo en un día despejado?|Azul|Verde|Naranja|Gris
¿Qué comida italiana es redonda con tomate y queso?|La pizza|La paella|El sushi|El gazpacho
¿Cuántos meses tiene un año?|Doce|Diez|Once|Trece
¿Qué parte del cuerpo usamos para oler?|La nariz|Las orejas|Los ojos|La boca
¿Qué animal tiene trompa?|El elefante|La jirafa|El camello|El rinoceronte
¿Qué día va después del lunes?|Martes|Miércoles|Domingo|Jueves
¿Qué bebida dan las vacas?|Leche|Zumo|Café|Agua con gas
¿Qué medio de transporte va por raíles?|El tren|El barco|El avión|El patinete
¿Qué astro nos da luz durante el día?|El Sol|La Luna|Marte|La Estrella Polar
¿De qué color es una fresa madura?|Roja|Azul|Blanca|Morada
¿Dónde viven los peces?|En el agua|En los árboles|En el desierto|Bajo tierra
¿Qué usamos para ver la hora en la muñeca?|Un reloj|Una pulsera de cuero|Un anillo|Un guante
¿Qué número va después del 99?|100|98|1000|101
¿Qué estación del año es la más calurosa en España?|El verano|El invierno|El otoño|La primavera
¿Qué fruta se asocia con Isaac Newton y la gravedad?|La manzana|La pera|El melón|La naranja
¿Qué animal es famoso por su lentitud y su caparazón?|La tortuga|El conejo|La ardilla|El zorro
¿Qué deporte se juega con una pelota y dos porterías?|El fútbol|El tenis|El golf|El ajedrez
¿Qué se pone en un sobre antes de enviarlo por correo?|Un sello|Un imán|Una moneda|Un botón
¿Con qué letra empieza «España»?|E|A|S|P
¿Qué color se obtiene al mezclar azul y amarillo?|Verde|Morado|Naranja|Rosa
¿Qué tiempo hace cuando cae agua del cielo?|Llueve|Nieva|Hace sol|Graniza
¿Qué animal dice «miau»?|El gato|El perro|El pato|El ratón
¿Qué se usa para abrir una cerradura?|Una llave|Un tenedor|Un peine|Un lápiz
¿Qué es más grande, un elefante o una hormiga?|Un elefante|Una hormiga|Son iguales|Depende del día
¿Cuántas horas tiene un día?|24|12|48|20
¿Qué lleva un rey en la cabeza?|Una corona|Un casco|Una gorra|Una boina
¿En qué se duerme normalmente?|En la cama|En la nevera|En la bañera|En el armario
¿Qué fruta tiene «corona» y piel con escamas?|La piña|El kiwi|La sandía|El mango
¿Qué figura geométrica tiene tres lados?|El triángulo|El cuadrado|El círculo|El pentágono
¿Qué mamífero vuela?|El murciélago|El pingüino|El delfín|El topo
¿Qué hace un bombero?|Apagar fuegos|Repartir cartas|Cocinar pan|Cortar el pelo
¿De qué color es el carbón?|Negro|Blanco|Amarillo|Verde
¿Qué se celebra con tarta y velas?|Un cumpleaños|Un funeral|Una mudanza|Un examen
¿Qué animal pone huevos y hace «cocoricó»?|La gallina|La vaca|La cabra|La oveja
¿Qué órgano bombea la sangre?|El corazón|El pulmón|El estómago|El hígado
¿Dónde se guardan los alimentos fríos en casa?|En la nevera|En el horno|En el armario|En la lavadora
¿Cuántos lados tiene un cuadrado?|Cuatro|Tres|Cinco|Seis
¿Qué es una «tortilla de patatas»?|Un plato típico español|Un postre francés|Una bebida|Un pan de maíz
¿Qué ponemos en el pan para hacer un bocadillo de jamón?|Jamón|Chocolate|Gasolina|Arena
¿Cuál de estos es un color del arcoíris?|Naranja|Marrón|Negro|Gris
¿Qué animal tiene el cuello más largo?|La jirafa|El hipopótamo|El oso|El cocodrilo
¿Qué usamos para protegernos de la lluvia?|Un paraguas|Unas gafas de sol|Un abanico|Una toalla
#2
¿Cuál es el río más largo de España?|El Tajo|El Ebro|El Duero|El Guadalquivir
¿Quién escribió «Don Quijote de la Mancha»?|Miguel de Cervantes|Lope de Vega|Francisco de Quevedo|Garcilaso de la Vega
¿Cuál es la capital de Francia?|París|Lyon|Marsella|Niza
¿Cuántos jugadores tiene un equipo de fútbol en el campo?|Once|Diez|Nueve|Doce
¿Qué gas respiramos para vivir?|Oxígeno|Helio|Nitrógeno puro|Dióxido de carbono
¿En qué continente está Egipto?|África|Asia|Europa|Oceanía
¿Cuál es el océano más grande?|El Pacífico|El Atlántico|El Índico|El Ártico
¿Qué ciudad es famosa por la Sagrada Familia?|Barcelona|Madrid|Bilbao|Granada
¿Cuántos años tiene un siglo?|Cien|Mil|Diez|Cincuenta
¿Qué pintor creó «Las Meninas»?|Velázquez|Goya|El Greco|Murillo
¿Cuál es el planeta más grande del sistema solar?|Júpiter|Saturno|Neptuno|La Tierra
¿Qué idioma se habla en Brasil?|Portugués|Español|Inglés|Francés
¿En qué ciudad está la Alhambra?|Granada|Córdoba|Málaga|Toledo
¿Qué animal es el símbolo de la marca de coches Ferrari?|Un caballo|Un toro|Un león|Un jaguar
¿Cuál es la moneda oficial de España desde 2002?|El euro|La peseta|El dólar|La libra
¿Qué vitamina aporta principalmente el sol a la piel?|Vitamina D|Vitamina C|Vitamina A|Vitamina K
¿Cuántos grados tiene un ángulo recto?|90|180|45|360
¿Qué plato valenciano lleva arroz y se hace en una sartén ancha?|La paella|El cocido|La fabada|El pisto
¿Qué instrumento tocaba Paco de Lucía?|La guitarra|El piano|El violín|La batería
¿Qué ciudad es la capital de Italia?|Roma|Milán|Venecia|Florencia
¿Cuál es el metal más usado en los cables eléctricos?|El cobre|El oro|El plomo|El hierro
¿Qué se mide con un termómetro?|La temperatura|La presión|La humedad|El peso
¿En qué país están las pirámides de Guiza?|Egipto|México|Perú|Grecia
¿Cuál es el animal terrestre más rápido?|El guepardo|El caballo|El león|El avestruz
¿Qué selección ganó el Mundial de fútbol de 2010?|España|Países Bajos|Alemania|Brasil
¿Qué hueso protege el cerebro?|El cráneo|El fémur|La tibia|El esternón
¿Cuántos aros tiene la bandera olímpica?|Cinco|Siete|Cuatro|Seis
¿Qué cordillera separa España de Francia?|Los Pirineos|Los Alpes|Los Andes|Sierra Nevada
¿Qué fiesta pamplonesa es famosa por los encierros?|San Fermín|Las Fallas|La Tomatina|La Feria de Abril
¿Qué estación empieza en España hacia el 21 de marzo?|La primavera|El verano|El otoño|El invierno
¿Qué superhéroe es «el hombre murciélago»?|Batman|Superman|Spiderman|Hulk
¿Cuál es el resultado de 7 × 8?|56|54|64|48
¿Qué país tiene forma de bota?|Italia|Grecia|Portugal|Chile
¿Qué pieza del ajedrez solo se mueve en diagonal?|El alfil|La torre|El caballo|El peón
¿Qué escritor creó a Sherlock Holmes?|Arthur Conan Doyle|Agatha Christie|Charles Dickens|Edgar Allan Poe
¿Cuál es la ciudad más poblada de España?|Madrid|Barcelona|Valencia|Sevilla
¿Qué nombre recibe la cría del caballo?|Potro|Ternero|Cordero|Lechón
¿En qué deporte se usa un «green»?|Golf|Tenis|Baloncesto|Rugby
¿Qué ciudad andaluza tiene la Giralda?|Sevilla|Cádiz|Jaén|Almería
¿Qué famosa torre de hierro está en París?|La torre Eiffel|La torre de Pisa|El Big Ben|La torre de Hércules
¿De qué planta se obtiene el chocolate?|Del cacao|Del café|De la caña|Del trigo
¿Cuántas cuerdas tiene una guitarra española?|Seis|Cuatro|Cinco|Doce
¿Quién pintó la «Mona Lisa»?|Leonardo da Vinci|Miguel Ángel|Rafael|Botticelli
¿Qué islas españolas están en el océano Atlántico?|Las Canarias|Las Baleares|Las Columbretes|Las Medas
¿Cuál es el idioma oficial de México?|Español|Inglés|Portugués|Maya
¿Qué tipo de animal es la ballena?|Un mamífero|Un pez|Un reptil|Un anfibio
¿Qué líquido producen las abejas?|Miel|Leche|Resina|Savia
¿En qué año llegó Colón a América?|1492|1592|1392|1512
¿Qué comunidad autónoma tiene como capital Santiago de Compostela?|Galicia|Asturias|Cantabria|León
¿Cuál es la capital de Portugal?|Lisboa|Oporto|Coímbra|Faro
¿Cuántos jugadores hay por equipo en pista en baloncesto?|Cinco|Seis|Siete|Cuatro
¿Qué color tiene la camiseta principal de la selección española de fútbol?|Roja|Blanca|Azul|Verde
¿Qué ciudad es conocida como «la Ciudad Condal»?|Barcelona|Zaragoza|Valencia|Murcia
¿Qué gas forma la mayor parte del aire?|Nitrógeno|Oxígeno|Hidrógeno|Argón
¿Qué artista español es famoso por el cubismo?|Pablo Picasso|Salvador Dalí|Joan Miró|Sorolla
¿Cuál es el satélite natural de la Tierra?|La Luna|Fobos|Europa|Titán
¿Qué número romano es la «X»?|10|5|50|100
¿Qué país regaló la Estatua de la Libertad a EE. UU.?|Francia|Reino Unido|España|Italia
¿Qué se celebra en Valencia quemando monumentos en marzo?|Las Fallas|La Semana Grande|El Carnaval|El Rocío
¿Qué animal es el más grande del planeta?|La ballena azul|El elefante africano|El tiburón blanco|La jirafa
#3
¿Qué científico propuso la teoría de la relatividad?|Albert Einstein|Isaac Newton|Galileo Galilei|Niels Bohr
¿Cuál es la capital de Australia?|Canberra|Sídney|Melbourne|Perth
¿En qué año cayó el Muro de Berlín?|1989|1991|1985|1979
¿Cuál es el elemento químico de símbolo «Fe»?|Hierro|Flúor|Fósforo|Francio
¿Qué escritor andaluz escribió «Bodas de sangre»?|Federico García Lorca|Antonio Machado|Juan Ramón Jiménez|Rafael Alberti
¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?|206|150|306|412
¿Qué país tiene más habitantes de América del Sur?|Brasil|Argentina|Colombia|Perú
¿Cuál es el punto más alto de España?|El Teide|El Mulhacén|El Aneto|El Veleta
¿En qué año se aprobó la Constitución española actual?|1978|1975|1982|1986
¿Qué compositor alemán se quedó sordo y escribió la Novena Sinfonía?|Beethoven|Mozart|Bach|Wagner
¿Cuál es la capital de Canadá?|Ottawa|Toronto|Vancouver|Montreal
¿Qué planeta es conocido como «el planeta rojo»?|Marte|Venus|Mercurio|Saturno
¿Qué órgano del cuerpo produce la insulina?|El páncreas|El hígado|El riñón|El bazo
¿Quién fue el primer hombre en pisar la Luna?|Neil Armstrong|Yuri Gagarin|Buzz Aldrin|Michael Collins
¿Qué escritor colombiano escribió «Cien años de soledad»?|Gabriel García Márquez|Mario Vargas Llosa|Julio Cortázar|Pablo Neruda
¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?|Barcelona|Madrid|Sevilla|Atlanta
¿Qué unidad mide la intensidad de la corriente eléctrica?|El amperio|El voltio|El vatio|El ohmio
¿Cuál es el desierto cálido más grande del mundo?|El Sáhara|El Gobi|El Kalahari|Atacama
¿Qué tenista español ha ganado más veces Roland Garros?|Rafa Nadal|Carlos Alcaraz|Carlos Moyá|Juan Carlos Ferrero
¿Qué mar baña la costa de Barcelona?|El Mediterráneo|El Cantábrico|El Báltico|El Caribe
¿De qué país es originario el tango?|Argentina|Cuba|España|Brasil
¿Cuál es el hueso más largo del cuerpo humano?|El fémur|El húmero|La tibia|El radio
¿Qué dramaturgo inglés escribió «Hamlet»?|William Shakespeare|Oscar Wilde|Christopher Marlowe|George Bernard Shaw
¿Qué es un «heptágono»?|Un polígono de siete lados|Un polígono de seis lados|Un polígono de nueve lados|Un tipo de pirámide
¿En qué ciudad se encuentra el Museo del Prado?|Madrid|Toledo|Salamanca|Barcelona
¿Qué país tiene como capital Nairobi?|Kenia|Etiopía|Tanzania|Uganda
¿Cuál es la fórmula química del agua?|H2O|CO2|O2|NaCl
¿Qué arquitecto diseñó el parque Güell?|Antoni Gaudí|Santiago Calatrava|Rafael Moneo|Lluís Domènech i Montaner
¿Cuántos jugadores tiene un equipo de balonmano en pista, portero incluido?|Siete|Seis|Cinco|Ocho
¿Qué imperio construyó Machu Picchu?|El inca|El azteca|El maya|El olmeca
¿Qué río pasa por Sevilla?|El Guadalquivir|El Guadiana|El Segura|El Júcar
¿Quién pintó «El jardín de las delicias»?|El Bosco|Brueghel|Rubens|Durero
¿Qué capa de la atmósfera contiene la capa de ozono?|La estratosfera|La troposfera|La mesosfera|La exosfera
¿Qué rey español abdicó en 2014?|Juan Carlos I|Felipe VI|Alfonso XIII|Felipe V
¿Cuál es la lengua con más hablantes nativos del mundo?|El chino mandarín|El inglés|El español|El hindi
¿Qué científica ganó dos premios Nobel en disciplinas distintas?|Marie Curie|Rosalind Franklin|Ada Lovelace|Lise Meitner
¿Qué ciudad gallega es famosa por la Torre de Hércules?|A Coruña|Vigo|Lugo|Ourense
¿Qué es un «quark»?|Una partícula subatómica|Un tipo de estrella|Un mineral|Un enzima
¿En qué año terminó la Segunda Guerra Mundial?|1945|1939|1944|1950
¿Cuál es el país más grande del mundo por superficie?|Rusia|Canadá|China|Estados Unidos
¿Qué cantante grabó «Thriller»?|Michael Jackson|Prince|Madonna|Stevie Wonder
¿Qué parte de la célula contiene el ADN?|El núcleo|La membrana|El citoplasma|La pared celular
¿Qué novela de Pérez Galdós lleva nombre de mujer y apellido «Jacinta»?|Fortunata y Jacinta|Marianela|Doña Perfecta|Tristana
¿Cuál es la isla más grande del Mediterráneo?|Sicilia|Cerdeña|Chipre|Mallorca
¿Cuál es la capital de Marruecos?|Rabat|Casablanca|Marrakech|Fez
¿Cuántos lados tiene un dodecágono?|Doce|Diez|Veinte|Once
¿Qué ciclista español ganó cinco Tours de Francia seguidos?|Miguel Induráin|Pedro Delgado|Alberto Contador|Óscar Pereiro
¿A qué temperatura hierve el agua a nivel del mar?|100 ºC|90 ºC|120 ºC|80 ºC
¿Qué ciudad es la capital de La Rioja?|Logroño|Haro|Calahorra|Nájera
¿Qué grupo británico cantaba «Yesterday»?|The Beatles|The Rolling Stones|Queen|The Who
¿Cuál de estos animales es un marsupial?|El canguro|El mapache|El lémur|El armadillo
¿Qué famoso navegante portugués dio nombre al estrecho del sur de América?|Fernando de Magallanes|Vasco da Gama|Bartolomé Díaz|Pedro Álvares Cabral
¿Qué instrumento mide los terremotos?|El sismógrafo|El barómetro|El anemómetro|El higrómetro
¿Cuál es la capital de Noruega?|Oslo|Estocolmo|Helsinki|Copenhague
¿Qué famoso cuadro de Picasso denuncia un bombardeo de 1937?|Guernica|Las señoritas de Avignon|El viejo guitarrista|La Celestina
¿Cuál es el planeta más cercano al Sol?|Mercurio|Venus|Marte|La Tierra
¿Cuántos años dura una legislatura ordinaria en España?|Cuatro|Cinco|Tres|Seis
¿Qué deportista estadounidense ganó 23 oros olímpicos en natación?|Michael Phelps|Mark Spitz|Ryan Lochte|Ian Thorpe
¿Qué ciudad italiana tiene canales y góndolas?|Venecia|Nápoles|Turín|Génova
¿Qué poeta escribió «Campos de Castilla»?|Antonio Machado|Miguel Hernández|Gustavo Adolfo Bécquer|Luis Cernuda
#4
¿En qué año se inauguró el primer AVE Madrid-Sevilla?|1992|1989|1996|2000
¿Qué elemento químico tiene el símbolo «K»?|Potasio|Kriptón|Calcio|Cobalto
¿Cuál es la capital de Mongolia?|Ulán Bator|Astaná|Biskek|Taskent
¿Qué filósofo griego fue maestro de Alejandro Magno?|Aristóteles|Platón|Sócrates|Pitágoras
¿Qué monarca español era conocido como «el Hechizado»?|Carlos II|Felipe IV|Felipe II|Fernando VII
¿Qué escritor ganó el Nobel de Literatura en 1989?|Camilo José Cela|Vicente Aleixandre|Juan Ramón Jiménez|Jacinto Benavente
¿Cuál es el lago más profundo del mundo?|El Baikal|El Titicaca|El Tanganica|El Superior
¿Qué batalla de 1805 enfrentó a la flota británica con la franco-española?|Trafalgar|Lepanto|Bailén|Waterloo
¿Qué compositor escribió «El amor brujo»?|Manuel de Falla|Isaac Albéniz|Enrique Granados|Joaquín Rodrigo
¿Cuál es la capital de Nueva Zelanda?|Wellington|Auckland|Christchurch|Dunedin
¿Qué matemático griego es famoso por su teorema sobre los triángulos rectángulos?|Pitágoras|Euclides|Tales|Arquímedes
¿Qué Papa era de origen argentino?|Francisco|Benedicto XVI|Juan Pablo II|Pío XII
¿Qué ciudad fue capital de España antes que Madrid durante unos años con Felipe III?|Valladolid|Toledo|Burgos|Sevilla
¿Qué es la «xerofilia» en botánica?|La adaptación a ambientes secos|La atracción por la luz|El crecimiento en sombra|La polinización por agua
¿Qué isla canaria vivió una erupción volcánica en 2021?|La Palma|Tenerife|Lanzarote|El Hierro
¿En qué año llegó el hombre a la Luna?|1969|1965|1972|1959
¿Qué nombre tenía la nave de Cristóbal Colón que encalló en La Española?|La Santa María|La Pinta|La Niña|La Victoria
¿Cuál es el metal más abundante en la corteza terrestre?|El aluminio|El hierro|El cobre|El calcio
¿Qué director de cine manchego rodó «Todo sobre mi madre»?|Pedro Almodóvar|Alejandro Amenábar|Luis García Berlanga|Fernando Trueba
¿Qué cordillera recorre Sudamérica de norte a sur?|Los Andes|Las Rocosas|El Atlas|Los Apalaches
¿Qué emperador romano nació en Itálica (Sevilla)?|Trajano|Augusto|Nerón|Calígula
¿Cuál es la unidad de la resistencia eléctrica?|El ohmio|El faradio|El julio|El henrio
¿Qué país africano tuvo como colonia española la Guinea?|Guinea Ecuatorial|Guinea-Bisáu|Guinea Conakri|Gabón
¿Qué novela de Carmen Laforet ganó el primer Premio Nadal?|Nada|La isla y los demonios|La mujer nueva|Al volver la esquina
¿Cuál es el río más caudaloso del mundo?|El Amazonas|El Nilo|El Misisipi|El Yangtsé
¿Qué hormona se asocia con la respuesta de «lucha o huida»?|La adrenalina|La melatonina|La insulina|La tiroxina
¿Qué rey de Castilla fue llamado «el Sabio»?|Alfonso X|Fernando III|Sancho IV|Alfonso VIII
¿En qué ciudad está el Guggenheim que diseñó Frank Gehry en España?|Bilbao|San Sebastián|Valencia|Málaga
¿Cuántos corazones tiene un pulpo?|Tres|Uno|Dos|Cuatro
¿Qué pintor aragonés pintó «Los fusilamientos del 3 de mayo»?|Francisco de Goya|Diego Velázquez|Zurbarán|Fortuny
¿Qué país tiene la capital llamada Tiflis?|Georgia|Armenia|Azerbaiyán|Moldavia
¿Quién escribió «La Regenta»?|Leopoldo Alas «Clarín»|Emilia Pardo Bazán|Juan Valera|Pío Baroja
¿Qué gas noble se usa en los letreros luminosos rojos?|Neón|Argón|Xenón|Radón
¿Qué imperio fundó Gengis Kan?|El mongol|El otomano|El persa|El chino Ming
¿Qué tratado de 1494 repartió el Nuevo Mundo entre España y Portugal?|Tordesillas|Utrecht|Westfalia|Los Pirineos
¿Qué estrella es la más cercana a la Tierra después del Sol?|Próxima Centauri|Sirio|Betelgeuse|Vega
¿Cuál es el idioma oficial de Etiopía a nivel federal?|Amhárico|Suajili|Árabe|Somalí
¿Qué escultor renacentista hizo el «David» de Florencia?|Miguel Ángel|Donatello|Bernini|Cellini
¿Qué es la «isobara» en un mapa del tiempo?|Línea de igual presión|Línea de igual temperatura|Línea de igual lluvia|Frente frío
¿Qué futbolista ganó el Balón de Oro de 1960 siendo español?|Luis Suárez Miramontes|Alfredo Di Stéfano|Paco Gento|Kubala
¿Qué ciudad fue sede de la Expo de 2008 en España?|Zaragoza|Sevilla|Valencia|Gijón
¿Cuál es el hueso más pequeño del cuerpo humano?|El estribo|El yunque|El martillo|El coxis
¿En qué año se proclamó la Segunda República española?|1931|1923|1936|1929
¿Qué economista escribió «La riqueza de las naciones»?|Adam Smith|John Maynard Keynes|Karl Marx|David Ricardo
¿Qué océano baña la costa occidental de África?|El Atlántico|El Índico|El Pacífico|El Antártico
¿Qué astronauta fue el primer español en ir al espacio?|Pedro Duque|Miguel López-Alegría|Pablo Álvarez|Sara García
¿Cuál es la capital de Islandia?|Reikiavik|Akureyri|Nuuk|Tórshavn
¿Qué tipo de roca es el granito?|Ígnea|Sedimentaria|Metamórfica|Orgánica
¿Quién compuso «Las cuatro estaciones»?|Antonio Vivaldi|Johann Sebastian Bach|Händel|Haydn
¿Qué científico español ganó el Nobel de Medicina en 1906?|Santiago Ramón y Cajal|Severo Ochoa|Gregorio Marañón|Isaac Peral
¿Qué país tiene como moneda el «zloty»?|Polonia|Hungría|Chequia|Rumanía
¿Qué ciudad era la capital del Imperio bizantino?|Constantinopla|Atenas|Antioquía|Alejandría
¿Qué animal es el «ajolote»?|Un anfibio|Un reptil|Un pez|Un insecto
¿Qué guerra enfrentó a España y EE. UU. en 1898?|La guerra hispano-estadounidense|La guerra de Marruecos|La guerra carlista|La guerra de Cuba de los Diez Años
¿Qué poeta de la Generación del 27 ganó el Nobel en 1977?|Vicente Aleixandre|Jorge Guillén|Pedro Salinas|Dámaso Alonso
¿Qué es un «año bisiesto»?|Uno de 366 días|Uno de 364 días|Uno con 13 meses|Uno sin febrero
¿Qué planeta tiene los anillos más visibles?|Saturno|Urano|Júpiter|Neptuno
¿Qué serie de novelas escribió Benito Pérez Galdós sobre la historia de España?|Episodios nacionales|Comedia humana|Los Rougon-Macquart|La saga de los Forsyte
¿Qué ciudad es conocida como «la Perla del Cantábrico»?|San Sebastián|Santander|Gijón|Bilbao
¿Cuántos jugadores componen un equipo de rugby XV en el campo?|Quince|Trece|Once|Siete
#5
¿Qué científico enunció las tres leyes del movimiento planetario?|Johannes Kepler|Tycho Brahe|Copérnico|Galileo
¿Qué rey visigodo fue el último antes de la invasión musulmana de 711?|Rodrigo|Recaredo|Wamba|Leovigildo
¿Cuál es la capital de Bután?|Timbu|Katmandú|Daca|Lhasa
¿En qué año se publicó la primera parte del Quijote?|1605|1615|1580|1626
¿Qué compositor ruso escribió «La consagración de la primavera»?|Ígor Stravinski|Prokófiev|Chaikovski|Rimski-Kórsakov
¿Qué matemático demostró el último teorema de Fermat en los años noventa?|Andrew Wiles|Grigori Perelmán|Terence Tao|John Nash
¿Cuál es el número atómico del carbono?|6|12|8|14
¿Qué batalla de 1212 fue decisiva en la Reconquista?|Las Navas de Tolosa|Covadonga|Sagrajas|Alarcos
¿Qué filósofo escribió «Así habló Zaratustra»?|Friedrich Nietzsche|Arthur Schopenhauer|Immanuel Kant|Martin Heidegger
¿Qué país tiene como capital Uagadugú?|Burkina Faso|Mali|Níger|Chad
¿Qué escritor firmó como «Azorín»?|José Martínez Ruiz|Pío Baroja|Ramiro de Maeztu|Ramón María del Valle-Inclán
¿Qué nombre recibe el miedo irracional a las alturas?|Acrofobia|Agorafobia|Claustrofobia|Aracnofobia
¿Qué ingeniero cartagenero diseñó un submarino eléctrico en 1888?|Isaac Peral|Narcís Monturiol|Juan de la Cierva|Leonardo Torres Quevedo
¿Qué inventor español creó el autogiro?|Juan de la Cierva|Leonardo Torres Quevedo|Isaac Peral|Manuel Jalón
¿Qué inventor creó el «Ajedrecista», una de las primeras máquinas que jugaban al ajedrez?|Leonardo Torres Quevedo|Juan de la Cierva|Mónico Sánchez|Narcís Monturiol
¿Cuál es la galaxia espiral grande más cercana a la Vía Láctea?|Andrómeda|El Triángulo|La Gran Nube de Magallanes|El Sombrero
¿En qué año se firmó la Paz de Westfalia?|1648|1713|1559|1618
¿Qué es el «bosón de Higgs»?|Una partícula elemental|Un agujero negro|Un isótopo del helio|Un tipo de cuásar
¿Qué escultor barroco español talló el «Cristo del Gran Poder»?|Juan de Mesa|Martínez Montañés|Gregorio Fernández|Pedro de Mena
¿Qué faraón construyó la Gran Pirámide de Guiza?|Keops|Kefrén|Micerino|Ramsés II
¿Qué país latinoamericano tiene dos capitales, una administrativa y otra constitucional?|Bolivia|Ecuador|Paraguay|Honduras
¿Qué emperador fue a la vez Carlos I de España y Carlos V del Sacro Imperio?|Carlos de Habsburgo|Carlos de Borbón|Carlos el Calvo|Carlos de Anjou
¿Qué compositor escribió el «Concierto de Aranjuez»?|Joaquín Rodrigo|Manuel de Falla|Isaac Albéniz|Pablo Sarasate
¿Qué elemento químico tiene el símbolo «W»?|Wolframio|Vanadio|Itrio|Osmio
¿Qué médico descubrió la penicilina en 1928?|Alexander Fleming|Louis Pasteur|Robert Koch|Edward Jenner
¿En qué ciudad nació el pintor Joaquín Sorolla?|Valencia|Alicante|Castellón|Murcia
¿Cuál es la montaña más alta de África?|El Kilimanjaro|El monte Kenia|El Ruwenzori|El Toubkal
¿Qué rey de Aragón conquistó Mallorca en 1229?|Jaime I|Pedro III|Alfonso I|Ramiro II
¿Qué obra de Fernando de Rojas tiene como personaje a una alcahueta?|La Celestina|El Lazarillo de Tormes|El Buscón|La Dorotea
¿Qué físico formuló el principio de incertidumbre?|Werner Heisenberg|Erwin Schrödinger|Paul Dirac|Max Planck
¿Cuál es el país más pequeño del mundo?|Ciudad del Vaticano|Mónaco|San Marino|Liechtenstein
¿Qué ciudad española fue Capital Europea de la Cultura en 2016?|San Sebastián|Salamanca|Santiago de Compostela|Córdoba
¿Qué escritor peruano ganó el Nobel en 2010?|Mario Vargas Llosa|Alfredo Bryce Echenique|César Vallejo|José María Arguedas
¿Qué nombre recibe la tasa de cambio de la velocidad?|Aceleración|Inercia|Impulso|Momento angular
¿Cuál es el tercer planeta más grande del sistema solar?|Urano|Neptuno|Saturno|La Tierra
¿Qué dinastía gobernó China cuando se construyó gran parte de la Gran Muralla actual?|La Ming|La Han|La Tang|La Qing
¿Qué general cartaginés cruzó los Alpes con elefantes?|Aníbal|Amílcar|Asdrúbal|Escipión
¿Qué reina inglesa derrotó a la llamada «Armada Invencible» en 1588?|Isabel I|María Tudor|Victoria|Ana
¿Qué es el «número de Avogadro» aproximadamente?|6,022 × 10²³|3,14 × 10⁸|9,81 × 10²|1,6 × 10⁻¹⁹
¿Qué ciudad fue capital del califato omeya de al-Ándalus?|Córdoba|Sevilla|Granada|Toledo
¿Qué novela de Miguel Delibes protagoniza el Azarías?|Los santos inocentes|El camino|Cinco horas con Mario|Las ratas
¿Qué lengua se hablaba en el Imperio inca?|Quechua|Náhuatl|Guaraní|Aimara
¿Qué gas descubrió Henry Cavendish como «aire inflamable»?|Hidrógeno|Oxígeno|Metano|Helio
¿Qué artista surrealista pintó «La persistencia de la memoria»?|Salvador Dalí|René Magritte|Max Ernst|Joan Miró
¿Qué estrecho separa Asia de América?|El estrecho de Bering|El de Magallanes|El de Ormuz|El de Malaca
¿Qué constitución española es conocida como «La Pepa»?|La de 1812|La de 1837|La de 1869|La de 1876
¿Qué compositor austríaco escribió «La flauta mágica»?|Mozart|Haydn|Schubert|Mahler
¿Qué animal tiene la gestación más larga entre los mamíferos terrestres?|El elefante|La jirafa|El rinoceronte|El camello
¿Cuál es la capital de Kazajistán desde 1997?|Astaná|Almatý|Taskent|Biskek
¿Qué científico español ganó el Nobel de Medicina en 1959?|Severo Ochoa|Santiago Ramón y Cajal|Gregorio Marañón|Francisco Mojica
¿Qué científica española descubrió la polimerasa del fago phi29?|Margarita Salas|Josefina Castellví|María Blasco|Ángeles Alvariño
¿Qué país fue el primero en conceder el voto a las mujeres a nivel nacional en 1893?|Nueva Zelanda|Finlandia|Reino Unido|Noruega
¿Qué poema épico se atribuye a Homero junto con la Ilíada?|La Odisea|La Eneida|Las Metamorfosis|El Cantar de Roldán
¿Qué rey español fue conocido como «el Deseado»?|Fernando VII|Carlos III|Alfonso XII|Felipe V
¿Qué ley física relaciona tensión, intensidad y resistencia?|La ley de Ohm|La ley de Coulomb|La ley de Boyle|La ley de Hooke
¿Qué volcán sepultó Pompeya en el año 79?|El Vesubio|El Etna|El Estrómboli|El Teide
¿Qué escritor francés creó a Jean Valjean?|Victor Hugo|Alexandre Dumas|Émile Zola|Gustave Flaubert
¿Qué es la «hidrofobia» además de miedo al agua?|Un síntoma de la rabia|Un tipo de alergia|Una enfermedad de las plantas|Un trastorno del oído
¿Qué país tiene el mayor número de husos horarios contando sus territorios de ultramar?|Francia|Rusia|Estados Unidos|Reino Unido
¿Qué arquitecto diseñó la Ciudad de las Artes y las Ciencias de Valencia?|Santiago Calatrava|Norman Foster|Rafael Moneo|Ricardo Bofill
`;var bh={"4fd0de46":2.57,"27d1fde3":4.21,"08470b2c":4.77,"18ab54b8":6.32,"2e63629d":6.13,"15f5e8e6":2.24,bdecbb9b:1.38,"70e5b5aa":.81,"7d5034c9":1.72,"2c5dee68":1.99,"12832aae":1.58,"2c0c2a6e":1.97,eb2d932c:2.39,fd08039a:3.08,fe91dda6:4.52,"2f92fc2c":3.59,"943fceff":3,"83d827e0":4.33,"04d45dac":3.72,"15e859f3":3.84,d3e03e4c:6.11,"800df44f":3.26,"3ac9c271":1.9,"3ef8aec7":2.67,f26414e5:3.73,"82c59754":2.29,dc8af578:14.86,"13c6f687":2.19,"5f06b601":4.54,"62c42d44":1.22,e802c48f:4.74,"4c05dfe3":1.53,"73b4858b":2.48,"84df808a":2.79,"1f19ab5f":2.11,"64f6fd86":3.4,"6efdf870":1.63,"62cd83cf":2.45,"625115dd":14.72,df7d52e0:2.35,"5e5b4dcb":3.97,a6ad3561:2.29,cef55c3c:.88,"62f5fa4c":3.01,"38f283ad":2.32,"3c6cafff":4.61,"79bf38aa":3.33,"14bcd81a":2.51,fefc46de:3.3,"68f59a38":2.9,"27abc79c":4.17,"55bca433":2.54,"99d453ae":2.43,"6d7b186d":3.77,a8277375:2.1,"7b91d009":1.66,f62a4da7:.92,"06d39dec":8.99,"013d9294":1.52,c2bed4c6:2.05,ea52e384:2.38,"5a99aeec":2.89,"46dfa7f4":3.39,c90791cd:1.79,"6e55309b":2.31,"7cf04041":4.5,"44bf9735":2.81,"819cd0ae":.55,b9f4bd6f:2.6,77416679:1.41,"1f51f842":1.95,"068e161f":1.85,"4baaeb03":4.11,"74d25640":3.48,e0b0ae6a:2.86,eb05c63d:2.51,"38acbce3":2.29,"9e4c6a74":2.21,"4e1fac2f":1.07,"26d6a4a5":2.52,"0f668bd2":2.23,e3a46701:3.07,e3acf82a:3.07,"502129c3":.92,d92d1de7:9.28,"1b62d68a":3.6,"534482ad":8.46,a4d21630:3.58,"09e47463":1.43,a63ab70f:2.4,"33f73353":2.88,c61f565f:3.18,e74a450b:1.95,"2dc8f666":1.41,"4074cf67":3.39,"23362d5a":2.46,"8e3d818e":1.73,"79b2315f":2.18,"9b32d62a":2.85,"9d496e13":2.51,d35ede47:2.13,96781142:2.77,b05cccb0:2.21,f032dfce:3.15,ab6ce181:2.3,e51b0926:2.06,"17aa4e49":1.36,"95aff935":2.3,"245e029b":2.27,"3df2f89e":3.87,"54b6662d":3.68,ea1c4c1d:2.54,f612f056:4.02,"1379a107":2.5,d05dfe1b:3.04,"658a3f6a":1.82,"3853396d":5.87,"49b1f67f":2.21,a03ac642:2.79,"04a6eaed":3.3,"06d541b7":5.78,f058dae1:2.16,"2c32cfe4":2.79,"1383a14f":3.33,"4909a236":2.05,"636646cf":1.4,d36d8fd6:4.24,d4f7661d:3.42,"628720ec":2.21,e9bdd9a0:2.98,"5a58b9c2":3.44,73680801:6.95,"5d1bdf04":9.94,"20e8274c":9.46,"5dc50e92":6.06,"5df9de06":7.34,"19228d4d":9.79,"54af297d":9.38,"868fa6d7":8.78,"68444dee":7.85,"7951ec7b":4.26,"28e5ec10":4.64,"5b21308a":6.06,"59ab976c":1.53,cdad6874:2.21,a8a71a7d:2.51,f692cd6c:3.01,ee261712:2.01,"4ad7d290":2.45,"18dfae0e":2.47,c8639251:3.02,f22fe035:2.18,"079f5181":2.64,f87c2d9b:2.41,"08160648":2.91,a188d32a:3.53,"08a60bd6":2.07,93516174:2.39,e3cae1c7:3.16,"45271cab":1.96,"8be084d6":2.61,"474c06ee":3.15,"8dc34307":2.1,74194613:2.46,d17fa2a2:3.09,c947d98f:1.99,"68e4fe0b":2.5,"721501ee":3.11,ab7062f9:2.12,"94de4ecc":2.54,"06e91f9c":3.24,"66db30f8":2.14,"46ae16c2":2.55,"8bffc331":3.15,90560437:1.87,f3b98052:2.41,d890e764:3.1,d840a278:2.35,d1c76f34:2.94,f545623f:3.4,"1f00c833":1.85,c39a6424:2.43,ed025319:2.37,"772581fe":2.11,"3d749077":2.6,"6d77257c":2.01,"6cb164b2":2.68,f537789f:1.96,"2b6adba4":1.68,"949ea2c0":2.22,d6e8f452:1.85,"0c2b49a9":2.46,"8addaba1":2.07,be4ad92b:2.46,"252e71e1":2.41,dd8859c4:3,ee4b97da:2.14,"595ac29f":2.09,"0ffb7eab":2.24,"744e860e":2.71,"239cc35d":2.02,"93978cd5":2.65,"0c9550b7":2.14,"02699d7c":2.79,"0ee9288d":2.33,cf376c93:2.84,fba4e7b8:2.32,"47538f41":2.83,c7c16a85:2.17,"918a3d51":2.6,"05c9498b":2.61,"6b6976fe":2.97,"11d4ae4a":2.48,cfc6c110:3,a90afb83:2.32,"9bf621b4":2.95,"286c7d7d":3.04,"518afac5":3.4,"3a06fb3f":3.09,"0af2078b":3.67,d15e72ea:3.47,d452d8e9:4.08,"9660c2b6":3.01,"7a671a74":3.47,"0143c30c":2.69,"5d4f9fef":3.08,"9383a0f7":3.66,"876b23b7":3.98,a227a8ba:2.57,"73fea4bb":2.9,ab0e0d52:2.32,"39066a1e":1.79,ccf72000:1.59,"58e12ae6":1.78,"1d23b7ce":2.51,e701ee15:1.6,b2d9b259:2.21,eb708bd5:1.44,a878abed:1.81,d0992313:2.5,"435afe46":1.65,a1778166:2.59,"531ea325":1.21,"4512058c":2.8,a8c741cd:1.29,c0622cea:2.21,b09fef44:1.56,cb9763ec:2.23,"93461d65":2.46,"9e3b4d60":2.32,"94c2d392":2.64,"135befbf":2.65,"266dba0c":1.47,cbcfed1b:1.86,"86fcdb6c":1.31,c3a5308c:1.61,"3d497da4":1.43,"022ec915":2.16,"729b0a17":1.8,cd24bd7d:1.79,"8a77307d":1.37,deab261e:2.01,"309586bc":1.99,e9459d70:2.37,"86efb15c":2.65,"6d48f663":2.64,"13bd1c02":2.68,"8b307f16":2.36,d2a52950:1.61,"4883d770":2.26,e5024d8b:2.19,"5515f2b1":1.25,c2685274:1.85,f828dc0f:2.58,"100c2087":1.45,dc5aa53f:1.49,ade7ea31:1.85,b03e6fe9:2.17,"098b97c6":2.24,cd6dc79d:1.1,ace32026:1.02,"8f8b25dc":1.43,fca1baa0:1.78,"68b85b33":2.15,b60e2a1d:1.61,"60effbe7":2.76,b3b928ca:1.64,"67189e94":1.67,"0eb229b3":2.51,"1dd77872":1.93,"3900e9b0":1.99,dafc69ab:2.03,"4bb131d7":1.88,f96135db:1.97,"0eb9d182":1.57,"45c61363":2.6,bc07772e:1.6,"02ed6e8b":1.85,"1eca6350":1.68,df923e55:2.21,cef26444:1.57,"037691de":1.7,"02564022":2.37,"6aed9d47":1.58,bb26b047:1.56,"36f8dedf":2.48,"7add814d":2.77,"82b7793c":2.69,"7d227edb":1.95,"618c9747":3.2,"5610c59e":2.04,c1718bfa:1.86,"612f8813":2.71,"7a16b7cc":1.54,"45b65dfa":2.23,"6f566299":2.1,"7f0d355b":2.66,c5937fb3:1.57,c7e99984:1.85,d5672273:2,"913755e6":2.74,"4102c01b":2.91,"3287720e":1.88,f0c67973:1.83,"019855b2":1.59,"3b80956a":2.81,"5cb7fabe":1.8,fe88639f:2.02,"4485f2aa":2.05,a5979423:1.6,d4ab2332:1.97,"5306ea04":2,"84bb7654":1.8,fc0da0d3:2.02,"0dd9ec66":1.45,f294398e:2.57,"2ce3ea33":2,"0fed3885":1.63,"021db3b9":1.75,"8115a503":1.92,d6f3c403:3.44,"81cc32ec":1.68,"16f8f301":2.72,"0d4a1d43":3.7,"41cabfac":2.29,"8a06ed2b":1.96,"3cb18eca":2.14,e6969048:1.89,d95edab6:1.67,"61c5d3d7":3.18,"59c75359":2.89,"1d816c49":2.11,"8145ac83":2.8,"1c95a95e":1.73,"8cb4198f":1.92,"165bf99a":2.36,"0c759cfe":2.55,c82dfe8d:3.03,a0b73250:2.52,"772bd98a":1.82,"885a8832":2.58,51241686:3.46,d805d408:1.54,ac050b59:2.41,b809f775:2.22,"276d268f":2.14,cad61d3e:2.75,c1ebd884:4.06,"2d7ddd89":3.07,"904eff96":2.33,facacfdf:2.82,"4b5bbd4a":1.73,f379edc7:1.97,"3b43fb86":2.17,"25cb018f":1.99,"1ba524f4":1,fffdab4d:2.45,"51dabd98":1.97,fe164e23:1.76,"541b26bf":1.71,de2db7c9:3.77,"4c9fb88f":1.79,bcc5236a:1.44,"4d362cb1":2,f8957cc8:2.62,d2a1931b:2.15,"09c73132":2.46,cffb08c4:3.33,"26a35eaa":2.61,e53c37c3:.81,"3fff3420":2.35,"798ac610":2.86,ae1648cb:1.57,"22fffbaf":2.05,"6fd8b5fc":3.42,98798306:2.33,"1ab045b5":1.73,"15a6f2a8":2.12,"06e164d5":3.01,"63a817f5":2.46,"6c1f4010":2.15,"2d6229aa":2.11,"417c924a":1.88,"42e997c1":3.36,"83f251d9":2.09,e7e08b37:1.67,"41b91754":4.28,a15c7f9d:2.07,bdf36d46:2.97,"11833b1e":3.89,"50c18307":2.53,c24ad492:1.97,df1930be:2.74,"271461f0":2.09,f4998e88:1.57,b674e220:2.68,"82b0b118":2.4,"68d569ed":3.97,"83df3bf6":2.01,82800045:4.46,c2a1e70b:2.28,bd6f345a:2,b67105bc:3.89,"86db6d08":1.81,e433541f:4.49,"66679bbe":1.57,aa108e48:3.4,fff69043:1.74,d76d06c1:3.25,"00e3e85f":2.58,df6365c2:2.8,"5fad600f":2.41,"73af553e":2.39,d99281a0:2.31,de41efcd:2.73,"260a0620":2.84,"7b68ddc5":2.29,"6e147741":2.58,"642c3b97":1.94,f7354a6a:3.45,"5bfe6f68":1.82,"4797ad32":3.11,"19d05690":2.31,"90364d08":1.54,"1b93224b":2.94,b2c933ac:1.72,"1c5e391f":4.99,e3c99a42:2.97,b2a4710d:2.84,"451e7bff":2.83,"1ef33b90":1.82,e2919aa4:3.98,dda25132:2.93,"5155a269":2.33,e9a63e87:2.71,"536937a1":2.68,"70ce6a3e":2.18,f07fd5fa:2.64,a153a8c3:1.72,"8e87b681":1.76,cb4fcdd1:1.8,e35cf74a:3.65,"96d38d3f":1.94,b5b96cc9:2.61,ac14b60f:1.5,cc54b843:3.81,"780a07a3":4.66,"1f84b396":1.38,"57ba3868":2.28,f6e67f41:3.78,"92241f88":2.67,"0492531d":3.3,d19a65c3:3.12,"25f99629":4.06,"4cf10178":1.49,"07d77115":2.68,ffa368bf:3.05,bc17f44c:3.83,"50e7ed93":1.95,d4e6e998:3.25,ee5d623d:2.43,"6a6f0790":2.03,"8af9f88f":1.6,"490c045f":2.55,"4e95986f":4.46,c004a486:2.23,"44d48192":4.79,"68214d7b":3.1,e9bcdec4:2,c8276491:1.36,ddeab30c:3.22,c4bf6a4e:2.37,"6b627ada":5.5,"41072b76":3.94,"700eff9f":2.5,a6f7165c:2.58,"8381680b":3.61,bd4c7e7f:2.48,bfd029aa:1.83,"0dab4e5e":3.25,"36a72eff":3.47,"29b9fc0b":2.65,d923f337:2,"5405a50f":3.75,d6c7dd37:2.65,"0141c364":2.36,"94083c01":2.67,35418102:4.12,cad7662a:2.93,c5b87959:4.38,e667337b:2.26,"0d482cb0":2.83,"39749d11":2.8,ae34a7fd:2.02,"01cea9b4":2.8,"75e3bbde":2.89,"3acd73a6":1.88,49974145:2.48,"82e43024":2.93,d1896e71:3.45,"3cf502a1":3.45,c231030e:4.46,a87aff2f:3.91,c2673c29:5.57,"0de7ecf5":2.82,c8d92b27:2.36,"1c0cac8b":3.51,"9954b307":2.84,"9732ac3a":2.07,"59434a9d":2.19,"0368796e":4.2,bb5302a1:3.44,"3a6f40e3":2.16,"4c833023":2.69,"902377c1":2.58,65768914:2.9,d259767e:3.72,"2217710c":2.04,"043c1c06":2.41,c4ebcdf3:3.17,e0e4fefa:1.61,"3f32b5c2":2.31,"66c5c998":1.95,"2ec4b49d":2.37,ac58a115:2.07,"97192dc7":2.57,e57d92af:2.43,"3768a270":3.02,a9fc9708:3.77,aa995f8c:3.16,"96e54e62":2.89,"6ef9f205":2.51,"26ddf812":4.56,dedb3910:1.57,f31bdfaf:4.89,"1a644f13":6.28,c7d999bb:7.51,"634d266b":5.19,f79205ca:4.88,"1136f241":4.78,"29b6bc42":1.83,"6f78901a":1.59,"741eb017":1.42,"609706c0":1.88,"7ffae551":1.59,"2b6410fa":1.31,"741400b4":1.82,"084446f4":1.1,"2397f982":1.99,"7d271d22":2.58,11209412:2.22,"2057227e":3.12,b60d0254:3.22,"1206e2b9":3.99,ed616ae0:3.2,"5f7a20d3":5.98,"3e0a0d06":3.89,c8da81e6:2.57,"3b16561b":3.91,"7f7f6920":2.83,"390a3c21":3.28,dded0680:5.09,"6518e517":2.58,"7af7bb17":2.89,"1f0877a7":4.01,"26b8feb3":2.86,"891d485e":3.2,ae64b11b:8.35,"4fc6e264":4.53,"1d609813":4.23,"13a812b4":4.25,b604ad0c:3.11,a32dc92a:2.83,"52d8a569":5.36,"0238439e":2.85,"0d9d5d70":.7,"5f0be084":1.25,"4a691c0e":1.54,"8a7d887f":.96,dcab22cf:.8,"184f7482":1.37,"23791bb5":1.93,d0307d51:9.73,dac33685:4.92};var Mh="1.1",je=i=>document.getElementById(i),Yt=i=>i[Math.floor(Math.random()*i.length)],lc=i=>{i=i.slice();for(let e=i.length-1;e>0;e--){let t=Math.random()*(e+1)|0;[i[e],i[t]]=[i[t],i[e]]}return i},vt=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),cc=!!window.AndroidKb||/; wv\)/.test(navigator.userAgent),fc=[];{let i=1;for(let e of yh.split(`
`)){let t=e.match(/^#(\d)/);if(t){i=+t[1];continue}if(!e.trim()||e.startsWith("#"))continue;let[n,s,...a]=e.split("|");fc.push({nivel:i,q:n,c:s,inc:a})}}var rv=i=>i<3?1:i<6?2:i<10?3:i<13?4:5,se=Object.assign({music:!0,musicVol:.5,sfx:!0,sfxVol:.8,publico:!0,publicoVol:.7,gradas:!0,voz:!0,lee:!0,leeVel:"normal",chistes:!0,monologo:!0,quality:"media",era:"e2020",cabecera:"cab3d",apertura:!0,publicidad:!0,copro:!0,presSorpresa:!1,especial:"normal",plato:"2020",sonidosClasico:!0,misPreguntas:!0,escaleraSiempre:!1},JSON.parse(localStorage.getItem("mm_opts")||"{}")),fi=()=>localStorage.setItem("mm_opts",JSON.stringify(se)),Ah=()=>JSON.parse(localStorage.getItem("mm_escalera")||"null"),ye={ctx:new(window.AudioContext||window.webkitAudioContext),mus:null,sueltos:new Set,tono(i,e,t="sine",n=.2,s=0){if(!se.sfx)return;let a=this.ctx,o=a.createOscillator(),r=a.createGain();o.type=t,o.frequency.value=i,r.gain.setValueAtTime(0,a.currentTime+s),r.gain.linearRampToValueAtTime(n*se.sfxVol,a.currentTime+s+.02),r.gain.exponentialRampToValueAtTime(.001,a.currentTime+s+e),o.connect(r).connect(a.destination),o.start(a.currentTime+s),o.stop(a.currentTime+s+e+.05)},url(i){let e=It.cache["snd:"+i];return e?(this._u=this._u||{})[i]||(this._u[i]=URL.createObjectURL(e)):se.sonidosClasico?"sb3/snd/"+i+".mp3":null},snd(i,{loop:e=!1,tag:t="sfx",vol:n=1}={}){if(t==="sfx"?!se.sfx:!se.music)return null;let s=this.url(i);if(!s)return null;let a=new Audio(s);return a.loop=e,a.volume=Math.min(1,n*(t==="sfx"?se.sfxVol:se.musicVol)),a.play().catch(()=>{}),t==="sfx"&&(this.sueltos.add(a),a.onended=()=>this.sueltos.delete(a)),a},play(i){let e={Bien:"acierto1",Mal:"fallo",Elige:"elige",Fanfarria:"millon",5050:"c5050",Comodin:"comodin"}[i];e&&this.snd(e)||(i==="Tecla"?this.tono(880,.08,"triangle",.15):i==="Bien"?[523,659,784,1047].forEach((t,n)=>this.tono(t,.6,"triangle",.25,n*.09)):i==="Mal"?[300,220,160].forEach((t,n)=>this.tono(t,.7,"sawtooth",.12,n*.2)):i==="Elige"||i==="Comodin"||i==="5050"?this.tono(220,1.2,"sine",.3):i==="Golpe"?(this.tono(55,1.5,"sine",.5),this.tono(110,1,"triangle",.2)):i==="Fanfarria"&&[392,523,659,784,659,784,1047].forEach((t,n)=>this.tono(t,.5,"square",.1,n*.14)))},stopAll(){this.stopMusic(),this.sueltos.forEach(i=>i.pause()),this.sueltos.clear()},playMusic(i="menu",e=0){if(this.stopMusic(),!se.music)return;let t=i==="menu"?"tema":i==="cabecera"?"cabecera":i==="despedida"?"despedida":i==="llamada"?"telefono":"fase"+(e<5?1:e<10?2:3);if(i==="cabecera"||i==="despedida"){let l=It.cache.cabecera_propia;if(l){let h=new Audio(URL.createObjectURL(l));h.volume=se.musicVol,h.play().catch(()=>{}),this.mus={a:h};return}}let n=this.snd(t,{loop:i!=="cabecera"&&i!=="despedida",tag:"music",vol:.8});if(n){this.mus={a:n};return}let s=this.ctx,a=s.createGain();a.gain.value=1e-4,a.connect(s.destination),a.gain.linearRampToValueAtTime(.07*se.musicVol,s.currentTime+2);let r=(i==="tension"?[55,82.4,110,116.5]:i==="pregunta"?[65.4,98,130.8,155.6]:[73.4,110,146.8,174.6]).map((l,h)=>{let u=s.createOscillator(),f=s.createOscillator(),p=s.createGain();u.type=h%2?"sawtooth":"sine",u.frequency.value=l,f.frequency.value=.1+h*.07,p.gain.value=l*.006,f.connect(p).connect(u.frequency);let g=s.createBiquadFilter();return g.type="lowpass",g.frequency.value=700,u.connect(g).connect(a),u.start(),f.start(),[u,f]}),c=null;(i==="tension"||i==="pregunta")&&(c=setInterval(()=>this.tono(i==="tension"?49:65,.25,"sine",.25),i==="tension"?700:1e3)),this.mus={g:a,os:r,pulso:c}},stopMusic(){let i=this.mus;if(i){if(this.mus=null,i.a){i.a.pause();return}clearInterval(i.pulso);try{i.g.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.4),i.os.forEach(([e,t])=>{e.stop(this.ctx.currentTime+.5),t.stop(this.ctx.currentTime+.5)})}catch{}}},aplauso(i=2){if(!se.sfx||!se.publico)return;let e=this.ctx,t=e.sampleRate*i,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0);for(let c=0;c<t;c++)s[c]=(Math.random()*2-1)*(Math.random()<.3?1:.2)*Math.min(1,(t-c)/(e.sampleRate*.6));let a=e.createBufferSource(),o=e.createGain(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2e3,o.gain.value=.35*se.publicoVol,a.buffer=n,a.connect(r).connect(o).connect(e.destination),a.start()},oooh(){!se.sfx||!se.publico||[0,.1,.2].forEach(i=>this.tono(180+Math.random()*40,1.4,"sine",.12*se.publicoVol,i))}},ov=i=>{i=i.normalize("NFC").trim();let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")},ki=null;function pc(i,e="leo"){return new Promise(t=>{let n=re&&re.figuras[e];n&&(n.userData.habla=!0);let s=()=>{n&&(n.userData.habla=!1),t()},a=i.replace(/[«»]/g,""),o=ov(a),r=bh[o],c=Math.max(1600,i.length*(se.leeVel==="rapida"?45:62));if(!se.voz||/^\(/.test(i))return setTimeout(s,c);if(r){ki=new Audio("voz/"+o+".mp3"),ki.playbackRate=se.leeVel==="rapida"?1.15:1,ki.onended=s,ki.onerror=()=>setTimeout(s,c),ki.play().catch(()=>setTimeout(s,c));return}if(window.speechSynthesis&&speechSynthesis.getVoices().some(l=>l.lang.startsWith("es"))){let l=new SpeechSynthesisUtterance(a);l.lang="es-ES",l.rate=se.leeVel==="rapida"?1.2:1,l.onend=s,l.onerror=s,speechSynthesis.speak(l),setTimeout(s,c*2.5);return}setTimeout(s,c)})}var mc=()=>{ki&&ki.pause(),window.speechSynthesis&&speechSynthesis.cancel()},Fe={bocadillo(i,e){let t=je("bubble");if(!e)return t.classList.add("hidden");t.querySelector("b").textContent=(qn[i]||qn.leo).nombre,t.querySelector("span").textContent=e,t.classList.remove("hidden"),t.style.left="36%",t.style.top="8%",t.style.transform="translateX(-50%)"},toast(i,e=1800){let t=je("toast");t.textContent=i,t.classList.remove("hidden"),clearTimeout(this._t),this._t=setTimeout(()=>t.classList.add("hidden"),e)},rotulo(i,e=""){let t=je("lower3");if(!i)return t.classList.add("hidden");t.innerHTML=`<div><b>${vt(i)}</b>${e?`<br><small>${vt(e)}</small>`:""}</div>`,t.classList.remove("hidden")},actions(i){let e=je("actions");e.innerHTML="";for(let t of i||[]){let n=document.createElement("button");n.className="btn "+(t.cls||""),n.textContent=t.label,n.onclick=s=>{s.stopPropagation(),ye.play("Tecla"),t.fn()},e.appendChild(n)}},limpia(){this.bocadillo(),this.rotulo(),this.actions([]),je("mq").innerHTML="",je("hint").classList.add("hidden")}},re=null,pi=null,lv="title",ta=class extends Error{},cv=()=>{pi&&(pi.alive=!1),mc();let i={alive:!0};return i.espera=e=>new Promise((t,n)=>setTimeout(()=>i.alive?t():n(new ta),e)),i.ok=()=>{if(!i.alive)throw new ta},pi=i,i};async function We(i,e,t,n){i.ok(),n&&re.plano(n),Fe.bocadillo(e,t),await pc(t,e),i.ok(),await i.espera(250)}function ct(i,e){je("menu").classList.add("hidden"),je("topbar").classList.remove("hidden"),Fe.limpia(),gi=!1,ye.stopMusic();let t=cv(),n={programa:sc,entrenamiento:sc,clasico:gv,explorar:Eh,paseo:Eh,monologos:vv,oculta:rc,tomas:rc,fuera:rc,promos:oc,promosleo:oc,promocadena:oc,publicidad:_v,historia:yv};if(i!=="programa"&&i!=="entrenamiento"){re.sentar(re.figuras.conc,re.sillas[0]),re.sentar(re.figuras.leo,re.sillas[1]);for(let s of["pili","chema","marga","ramon","encarna"])re.figuras[s].visible=!1}(n[i]||sc)(t,i,e).catch(s=>{s instanceof ta||console.error(s)})}var xt=Object.assign({nombre:"Iker",profesion:"",ciudad:"",presentador:kl,familiar:"Mi madre",amigo:"Mi primo Javi"},JSON.parse(localStorage.getItem("mm_cons")||"{}")),uv=()=>localStorage.setItem("mm_cons",JSON.stringify(xt)),gc=()=>xt.nombre||"Iker";async function hv(i){let e=It.cache.video_cabecera;if(!e)return!1;let t=document.createElement("video");return t.src=URL.createObjectURL(e),t.style.cssText="position:fixed;inset:0;width:100%;height:100%;object-fit:contain;background:#000;z-index:60",t.playsInline=!0,document.body.appendChild(t),await new Promise(n=>{t.onended=n,t.onerror=n,t.onclick=n,t.play().catch(n);let s=setInterval(()=>{(!i.alive||i.saltar)&&(clearInterval(s),n())},100)}),t.remove(),!0}async function Ch(i){ye.playMusic("cabecera"),i.saltar=!1;let e=async s=>{let a=performance.now();for(;performance.now()-a<s&&!i.saltar;)await i.espera(80)};if(se.cabecera==="video"&&await hv(i)){ye.stopMusic();return}if(se.cabecera==="plato3d"){re.orbita(9,3),Fe.rotulo("¿QUIÉN QUIERE SER MILLONARIO?"),await e(6e3),Fe.rotulo();return}re.plano("cenital",.1),ye.play("Golpe"),Fe.rotulo("¿QUIÉN QUIERE SER MILLONARIO?"),await e(1200),re.plano("logo",2.5),await e(2600);let t=je("mq"),n=Ys(500);n.className="cablogo",t.appendChild(n),ye.play("Golpe"),await e(2200),n.remove(),re.plano("wide",2.5),await e(2600),Fe.rotulo()}async function vc(i,e,t,n,s){let a=e.userData;a.anda=!0,a.sentado=!1,e.visible=!0;let o=performance.now();for(e.rotation.y=Math.atan2(n[0]-t[0],n[2]-t[2]);;){i.ok();let r=Math.min(1,(performance.now()-o)/1e3/s);if(e.position.set(t[0]+(n[0]-t[0])*r,t[1],t[2]+(n[2]-t[2])*r),r>=1)break;await new Promise(c=>requestAnimationFrame(c))}a.anda=!1}async function Rh(i){re.plano("grada",1),ye.aplauso(3),await We(i,"leo",An.apertura[0]);let e=re.figuras.leo;re.plano("wide",1.5),await vc(i,e,[0,0,-9],[0,0,3.4],3.5),e.rotation.y=0,e.userData.gesto=1.2,ye.aplauso(2),await We(i,"leo",An.apertura[1],"pres2")}var Hi=null;async function ic(i,e){!Hi||Math.random()<.4||await We(i,Hi,Yt(An[e]),"copro")}async function sc(i,e,t){let n=e==="entrenamiento",s=Ah(),a=(t==="propia"||se.escaleraSiempre&&!t)&&s?Object.assign({},Tn[se.era],{escalera:s,nombre:"Escalera propia"}):Tn[t&&Tn[t]?t:se.era],o=_s.find(d=>d.id===se.especial)||_s[0],r=xr(),c=r?r.nombre:gc();Sv(r);let l=a.seguros.slice();Hi=null;let h=re.figuras.leo,u=re.figuras.conc;re.sentar(u,re.sillas[0]),re.sentar(h,re.sillas[1]);for(let d of["pili","chema","marga","ramon","encarna"])re.figuras[d].visible=!1;if(!n){if(Fe.actions([{label:"Saltar ⏭",fn:()=>i.saltar=!0}]),se.apertura&&await Ch(i),Fe.actions([]),ye.stopMusic(),se.apertura&&(u.visible=!1,await Rh(i)),o.banner&&Fe.rotulo(o.banner,a.cadena),await We(i,"leo",Yt(Tt.saludo),"pres2"),ye.aplauso(),se.monologo&&Math.random()<.5){let d=Yt(Qs);for(let S of d.lineas)await We(i,"leo",S,"pres2");ye.aplauso()}if(se.copro||se.presSorpresa){let d=Yt(["pili","chema","marga","ramon","encarna"]);re.dePie(re.figuras[d],1.3,.25,2.2,-.4),re.figuras[d].userData.gesto=1,await We(i,d,`¡Hola! Soy ${qn[d].nombre}, ${qn[d].rol.toLowerCase()} del programa, y hoy acompaño a Leo en la presentación.`,"copro"),se.presSorpresa?Hi=d:re.figuras[d].visible=!1}se.apertura&&(await We(i,"leo",An.entraConc,"wide"),await vc(i,u,[-9,0,3],[-2.3,0,.6],3)),re.sentar(u,re.sillas[0]),re.sentar(h,re.sillas[1]),Fe.rotulo(c,[r?r.profesion:xt.profesion,r?r.ciudad:xt.ciudad].filter(Boolean).join(" · ")||"Concursante"),await We(i,"leo",Tt.presenta,"silla"),ye.aplauso(),r&&r.frase&&await We(i,"conc",r.frase,"silla"),Fe.rotulo(),await We(i,"leo",Tt.siéntate,"dos")}if(a.eligeSeguro){await We(i,"leo",Tt.seguro,"pres");let d=await new Promise(S=>{let E=je("mq");E.innerHTML='<div class="mqzona"><div class="hexo q"><div class="hexi">Elige tu segundo seguro (pregunta 6 a 14)</div></div><div class="segsel"></div></div>';for(let y=6;y<=14;y++){let L=document.createElement("div");L.className="hexo",L.innerHTML=`<div class="hexi"><b>${y}:</b>${mi(a.escalera[y-1],a)}</div>`,L.onclick=()=>{ye.play("Tecla"),S(y)},E.querySelector(".segsel").appendChild(L)}});l=[5,d],je("mq").innerHTML="",await We(i,"leo",`Segundo seguro en la pregunta ${d}: ${mi(a.escalera[d-1],a,!0)}.`,"pres")}await We(i,"leo",Tt.empezamos,"consola");let f={},p=a.comodines.slice(),g=0,v={},m=fc.concat(se.misPreguntas?yc():[]);for(let d=1;d<=5;d++)v[d]=lc(m.filter(S=>S.nivel===d));for(let d=0;d<15;d++){let S=v[rv(d)].pop(),E=lc([S.c,...S.inc]),y=E.indexOf(S.c);Hi&&await ic(i,"coproPregunta");let L=await fv(i,{p:S,resp:E,correcta:y,i:d,era:a,seguros:l,usados:f,comods:p});if(L==="planta")return await We(i,"leo",Tt.planta,"pres"),ac(i,g,a,!0);if(L==="mal"){ye.oooh();let w=l.filter(I=>I<=d).pop(),A=w?a.escalera[w-1]:0;return await We(i,"leo",Yt(Tt.mal),"pres"),Fe.bocadillo("leo",`La correcta era la ${"ABCD"[y]}: ${S.c}.`),await i.espera(2500),Hi&&await ic(i,"coproMal"),ac(i,A,a,!1)}if(g=a.escalera[d],Hi&&await ic(i,"coproBien"),d===14)return ye.play("Fanfarria"),ye.aplauso(4),await We(i,"leo",Tt.millon,"dos"),ac(i,g,a,!0);l.includes(d+1)&&await We(i,"leo",Tt.seguroOk,"pres"),se.chistes&&!n&&Math.random()<.18&&(await We(i,"leo",Yt(An.chistes),"pres"),ye.aplauso(1)),se.publicidad&&!n&&(d===4||d===9)&&(await We(i,"leo",An.pubSale,"wide"),await nc(d===4?"corta":"pausa",i),i.ok(),ye.snd("publicidad"),re.plano("wide",.1),await We(i,"leo",An.pubVuelve,"pres2"))}}var mi=(i,e,t)=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,".")+(e.moneda==="ptas"?t?" pesetas":" ptas":" €");function Sh(i,e,t,n,s,a,o){let r=document.createElement("div");r.className="escalera",t.escalera.forEach((h,u)=>{let f=document.createElement("div");f.className=(u===e?"act ":"")+(u<e?"hecho ":"")+(n.includes(u+1)?"seg":""),f.innerHTML=`<span>${u+1}</span><span>${mi(h,t)}</span>`,r.appendChild(f)});let c=document.createElement("div");c.className="comods";let l={5050:"50:50",publico:"👥",llamada:"📞",familiar:"👪"};for(let h of s){let u=document.createElement("div");u.className="comod"+(a[h]?" usado":""),u.textContent=l[h],u.title={5050:"Cincuenta por ciento",publico:"Comodín del público",llamada:"Llamada",familiar:"Comodín del acompañante"}[h],u.onclick=()=>!a[h]&&o(h),c.appendChild(u)}r.appendChild(c),i.appendChild(r)}async function dv(i,e,t){let n=je("mq"),s=document.createElement("div");s.className="relojllamada",s.innerHTML='<div class="rl"><b>30</b><small>📞 LLAMADA</small></div>';let a=document.createElement("button");a.className="btn",a.textContent="Colgar",s.appendChild(a),n.appendChild(s);let o=!1;a.onclick=()=>{ye.play("Tecla"),o=!0},ye.playMusic("llamada");let r=performance.now(),c=t();for(;;){i.ok();let l=Math.max(0,e-(performance.now()-r)/1e3);if(s.querySelector("b").textContent=Math.ceil(l),s.querySelector(".rl").style.setProperty("--p",l/e*360+"deg"),l<=5&&s.classList.add("ultimos"),l<=0||o)break;await i.espera(100)}ye.stopMusic(),mc(),s.remove(),await c.catch(()=>{}),o||ye.tono(440,.6,"square",.2)}async function fv(i,e){let{p:t,resp:n,correcta:s,i:a,era:o,seguros:r,usados:c,comods:l}=e,h=je("mq");h.innerHTML="",ye.playMusic(a<5?"pregunta":"tension",a),re.plano(Yt(["consola","silla","dos"]),1.5);let u=document.createElement("div");u.className="mqzona",u.innerHTML=`<div class="hexo q"><div class="hexi">${vt(t.q)}</div></div><div class="rejilla">${n.map((L,w)=>`<div class="hexo" data-k="${w}"><div class="hexi"><b>${"ABCD"[w]}:</b>${vt(L)}</div></div>`).join("")}</div><div class="mqbtns"></div>`,h.appendChild(u);let f=new Set,p,g=new Promise(L=>p=L),v=!1,m=async L=>{if(!v){if(v=!0,c[L]=!0,h.querySelector(".escalera").remove(),Sh(h,a,o,r,l,c,m),L==="5050"){Fe.bocadillo("leo",Tt.c5050),pc(Tt.c5050),ye.play("5050");let w=document.createElement("div");w.className="ovalo5050",w.textContent="50:50",h.appendChild(w),await i.espera(1600),w.remove(),lc([0,1,2,3].filter(A=>A!==s)).slice(0,2).forEach(A=>{f.add(A),u.querySelector(`[data-k="${A}"]`).classList.add("out")})}if(L==="publico"){re.plano("grada",1),ye.play("Comodin"),await We(i,"leo",Tt.cpublico),ye.snd("publico");let w=pv(s,a,f),A=document.createElement("div");A.className="sondeo",A.innerHTML=`<div class="pct">${w.map(I=>`<span>${I}%</span>`).join("")}</div><div class="barras">${w.map(()=>'<i style="height:0"></i>').join("")}</div><div class="let"><span>A</span><span>B</span><span>C</span><span>D</span></div>`,h.appendChild(A),await i.espera(60),A.querySelectorAll("i").forEach((I,_)=>I.style.height=w[_]+"%"),re.plano("consola")}if(L==="llamada"||L==="familiar"){ye.play("Comodin");let w=Math.random()<1-a*.045,A=w?s:Yt([0,1,2,3].filter(x=>!f.has(x))),I=xr(1),_=L==="llamada"?I?I.nombre:xt.amigo:xt.familiar;if(L==="llamada")await We(i,"leo",Tt.cllamada,"pres"),Fe.rotulo("📞 "+_,"Llamada · 30 segundos"),await dv(i,30,async()=>{await We(i,"leo",`Hola, ${_}. Te llamamos desde ¿Quién quiere ser millonario? Tu amigo tiene una pregunta.`,"pres"),await We(i,"conc",t.q,"silla"),await We(i,"encarna",`${Yt(["Creo que es","Yo diría","Estoy casi seguro de que es","Ni idea, pero me suena"])} la ${"ABCD"[A]}: ${n[A]}.`,"silla")}),Fe.rotulo(),await We(i,"leo",An.llamadaFin,"pres");else{await We(i,"leo",Tt.cfamiliar,"pres");let x=re.figuras.encarna;re.dePie(x,-1.6,.25,1.2,Math.PI/2),Fe.rotulo("👪 "+_,"Comodín del acompañante"),await We(i,"encarna",`${Yt(["Yo creo que es","Me suena mucho","Ponla, que es"])} la ${"ABCD"[A]}: ${n[A]}.`,"silla"),x.visible=!1,Fe.rotulo()}}v=!1}};Sh(h,a,o,r,l,c,m),await We(i,"leo",`Pregunta ${a+1}, por ${mi(o.escalera[a],o,!0)}.`,"pres"),se.lee&&await We(i,"leo",t.q,"consola"),u.querySelectorAll(".rejilla .hexo").forEach(L=>L.onclick=()=>{let w=+L.dataset.k;f.has(w)||v||(ye.play("Tecla"),p(w))});let d=u.querySelector(".mqbtns"),S=document.createElement("button");S.className="btn",S.textContent=a===0?"Plantarse (0)":`Plantarse (${mi(o.escalera[a-1],o)})`,S.onclick=()=>{if(a===0)return Fe.toast("Aún no has ganado nada");p("planta")},d.appendChild(S);let E;for(;;){if(E=await g,E==="planta")return h.innerHTML="","planta";let L=u.querySelector(`[data-k="${E}"]`);if(u.querySelectorAll(".hexo").forEach(A=>A.classList.remove("sel")),L.classList.add("sel"),a<4)break;await We(i,"leo",Tt.ultima,"pres");let w=await new Promise(A=>Fe.actions([{label:"Sí, última",cls:"gold",fn:()=>A(!0)},{label:"No",fn:()=>A(!1)}]));if(Fe.actions([]),w)break;L.classList.remove("sel"),g=new Promise(A=>p=A)}ye.stopMusic(),ye.play("Elige"),re.plano("silla",1),await i.espera(a<5?1200:2600);let y=u.querySelector(`[data-k="${s}"]`);return y.classList.remove("sel"),y.classList.add("ok","parpadea"),setTimeout(()=>y.classList.remove("parpadea"),1200),E===s?(ye.play("Bien"),ye.aplauso(1.5),re.figuras.conc.userData.gesto=1,await We(i,"leo",Yt(Tt.bien),"pres"),h.innerHTML="","bien"):(ye.play("Mal"),await i.espera(1500),h.innerHTML="","mal")}function pv(i,e,t){let n=Math.max(.3,.85-e*.04),s=[0,1,2,3].map(o=>t.has(o)?0:o===i?n*100:Math.random()*30),a=s.reduce((o,r)=>o+r,0);return s=s.map(o=>Math.round(o/a*100)),s[i]+=100-s.reduce((o,r)=>o+r,0),s}async function ac(i,e,t,n){ye.stopMusic();let s=xr(),a=je("mq");a.innerHTML=`<div class="cheque"><small>PÁGUESE A ${vt((s?s.nombre:gc()).toUpperCase())}</small>${mi(e,t,!0)}<small>¿Quién quiere ser millonario? · ${vt(t.nombre)}</small></div>`,re.plano("dos",2),n&&ye.aplauso(3),await We(i,"leo",`Te llevas ${mi(e,t,!0)}. ¡Enhorabuena!`),ye.playMusic("despedida"),await We(i,"leo",Tt.despedida,"wide"),a.innerHTML="",await mv(i),re.orbita(),ye.playMusic("menu"),Fe.actions([{label:"Jugar otra vez",cls:"gold",fn:()=>ct("programa")},{label:"Menú",fn:()=>Ne("play")}])}async function mv(i){let e=je("credits"),t=je("creditsRoll");t.innerHTML=[["¿Quién quiere ser millonario? El juego",""],["Presenta",xt.presentador],["Concursante",(xr()||{}).nombre||gc()],["Idea y juego","Iker"],["Voces","Piper TTS"],["Motor 3D","Three.js"]].map(([n,s])=>`<p><b>${vt(n)}</b><br>${vt(s)}</p>`).join(""),e.classList.remove("hidden"),re.plano("cenital",4),await i.espera(5e3).finally(()=>e.classList.add("hidden"))}function gv(){je("menu").classList.add("hidden"),gi=!1,je("classicWrap").classList.remove("hidden"),je("classic").src="clasico/index.html"}async function Eh(i,e){re.libre(),e==="paseo"&&re.camera.position.set(11,1.7,2),Fe.toast(cc||matchMedia("(pointer:coarse)").matches?"Arrastra a la derecha para mirar y usa el joystick para andar":"WASD para andar, arrastra para mirar",3500)}async function vv(i,e,t){let n=t&&t!=="azar"?[Qs.find(s=>s.id===t)]:[Yt(Qs)];for(let s of n)for(let a of s.lineas)await We(i,"leo",a,Yt(["pres","dos","consola"]));ye.aplauso(),Fe.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ct("monologos","azar")},{label:"Lista",fn:()=>Ne("monologos")}])}async function rc(i,e,t){let n=dr[e],s=t==="todas"?n.map(r=>r.id):[t||n[0].id],a;for(let r of s){a=n.find(c=>c.id===r);for(let c of new Set(a.pasos.map(l=>l[0])))xv(c);Fe.rotulo(a.titulo,{oculta:"Cámara oculta",tomas:"Tomas falsas",fuera:"Fuera de cámaras"}[e]);for(let[c,l,h]of a.pasos)await We(i,c,l,h);/Inocente|Corten/.test(a.pasos.at(-1)[1])&&ye.aplauso(),await i.espera(800)}let o=n[(n.indexOf(a)+1)%n.length];Fe.bocadillo(),Fe.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ct(e,o.id)},{label:"Repetir",fn:()=>ct(e,a.id)},{label:"Lista",fn:()=>Ne(e)}])}function xv(i){let e=re.figuras[i];if(!e||i==="leo"||i==="conc")return;let t={pili:[3.5,0,3],chema:[-3.5,0,3],marga:[1.2,.25,1.2],ramon:[0,0,3.5],encarna:[12,1.2,3]}[i]||[0,0,3];re.dePie(e,...t,Math.atan2(-t[0],-t[2]))}async function _v(i,e,t){await nc(t||"pausa",i),i.ok(),ye.snd("publicidad"),Fe.actions([{label:"Otra pausa ▶",cls:"gold",fn:()=>ct("publicidad","pausa")},{label:"Lista",fn:()=>Ne("publicidad")}])}async function oc(i,e,t){if(t==="cabecera"||t==="apertura"){se.cabecera==="video"||(i.saltar=!1),Fe.actions([{label:"Saltar ⏭",fn:()=>i.saltar=!0}]),t==="cabecera"?await Ch(i):(re.figuras.conc.visible=!1,await Rh(i),await We(i,"leo",An.entraConc,"wide"),await vc(i,re.figuras.conc,[-9,0,3],[-2.3,0,.6],3),re.sentar(re.figuras.conc,re.sillas[0]),re.plano("dos")),ye.stopMusic(),Fe.actions([{label:"Repetir",cls:"gold",fn:()=>ct("promos",t)},{label:"Lista",fn:()=>Ne("promos")}]);return}let n=e==="promos"?Hl:e==="promosleo"?Vl:Gl,s=n.find(l=>l.id===t)||n[0];e==="promosleo"&&re.dePie(re.figuras.leo,0,.25,3.4,0),ye.playMusic("tension"),re.plano("cenital",.1),Fe.rotulo(s.titulo.toUpperCase(),e==="promocadena"?"Promo de "+zi:"Promo");let a=e==="promosleo"?["pres2","wide","pres2"]:["logo","wide","grada","consola","pres","dos"];for(let[l,h]of s.lineas.entries())await We(i,e==="promosleo"?"leo":"chema",h,a[l%a.length]);let o=je("mq"),r=dc(400);r.style.cssText="position:absolute;left:50%;top:45%;width:min(40vh,40vw);transform:translate(-50%,-50%);animation:pop2 .6s",o.appendChild(r),ye.play("Golpe"),await i.espera(2500),o.innerHTML="";let c=n[(n.indexOf(s)+1)%n.length];Fe.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ct(e,c.id)},{label:"Lista",fn:()=>Ne(e)}])}async function yv(i){for(let[e,t,n]of Wl)Fe.rotulo(e+" · "+t),await We(i,"leo",n,Yt(["wide","logo","dos","grada","pres"]));Fe.rotulo(),Fe.actions([{label:"Menú",fn:()=>Ne("main")}])}var di=[],xc=()=>new Promise((i,e)=>{let t=indexedDB.open("mm_casting",1);t.onupgradeneeded=()=>t.result.createObjectStore("p",{keyPath:"id",autoIncrement:!0}),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)});async function _c(){try{let i=await xc(),e=await new Promise(t=>{let n=i.transaction("p").objectStore("p").getAll();n.onsuccess=()=>t(n.result||[]),n.onerror=()=>t([])});di.length=0,di.push(...e.sort((t,n)=>t.fecha-n.fecha))}catch{}}async function bv(i){let e=await xc();await new Promise((t,n)=>{let s=e.transaction("p","readwrite");s.objectStore("p").put(i),s.oncomplete=t,s.onerror=()=>n(s.error)}),await _c()}async function Mv(i){let e=await xc();await new Promise(t=>{let n=e.transaction("p","readwrite");n.objectStore("p").delete(i),n.oncomplete=t,n.onerror=t}),await _c()}var gr=()=>localStorage.getItem("mm_casting_on")!=="0";function xr(i=0){if(i===0){let e=+localStorage.getItem("mm_central")||0,t=di.find(n=>n.id===e);return t||null}return!gr()||!di.length?null:di[di.length-1]}function Sv(i){let e=re.figuras.conc,t=e.userData;return re.scene.remove(e),re.recreaFigura("conc",i?{traje:parseInt(i.color.slice(1),16),piel:parseInt(i.piel.slice(1),16),camisa:16777215,corbata:null,pelo:2759184,pantalon:2238522}:null)}var yc=()=>JSON.parse(localStorage.getItem("mm_mispreg")||"[]");function Ze(i,e,t,n){let s=document.createElement("button");return s.className="mbtn "+t,s.innerHTML=`<span class="fp"></span><span>${i}${e?`<small>${e}</small>`:""}</span>`,s.onclick=a=>{a.stopPropagation(),ye.play("Tecla"),n()},s}function Bt(i){let e=document.createElement("button");return e.className="tbtn back",e.innerHTML="⟵ Volver",e.onclick=t=>{t.stopPropagation(),ye.play("Tecla"),Ne(i)},e}function At(i){let e=document.createElement("h2");return e.textContent=i,e}var nn=(i,e="")=>{let t=document.createElement("div");return t.style.cssText="background:#0a1a5acc;border:2px solid #3a6aff;border-radius:16px;padding:10px 12px;margin:4px 0;color:#fff;font:14px system-ui;"+e,i&&(t.innerHTML=i),t},st=(i,e,t)=>{let n=document.createElement("button");return n.className="tbtn"+(t?" sel":""),n.innerHTML=i,n.onclick=s=>{s.stopPropagation(),ye.play("Tecla"),e(n)},n},_n=(i,e="onote")=>{let t=document.createElement("p");return t.className=e,t.textContent=i,t},hi=(i,e=!1)=>new Promise(t=>{let n=document.createElement("input");n.type="file",n.accept=i,n.multiple=e,n.onchange=()=>t(e?[...n.files]:n.files[0]),n.click()}),gi=!1,uc=null;addEventListener("beforeinstallprompt",i=>{i.preventDefault(),uc=i});function vr(){pi&&(pi.alive=!1,pi=null),mc(),gi||(ye.stopAll(),Fe.limpia(),re.orbita(10.8,4.8),ye.playMusic("menu"),gi=!0)}function hc(i,e,t,n=""){let s=document.createElement("div");s.className="orow",n&&(s.id=n);let a=document.createElement("button"),o=()=>{a.className="tbtn"+(se[e]?" sel":""),a.textContent=se[e]?"Sí":"No"};a.onclick=l=>{l.stopPropagation(),se[e]=!se[e],o(),fi(),e==="music"&&(gi=!1,vr()),ye.play("Tecla")},o();let r=document.createElement("input");r.type="range",r.min=0,r.max=100,r.value=Math.round(se[t]*100),r.oninput=()=>{se[t]=+r.value/100,fi()},r.onclick=l=>l.stopPropagation(),r.onchange=()=>{e==="publico"?ye.aplauso(1.5):ye.play("Tecla"),e==="music"&&(gi=!1,vr())};let c=document.createElement("label");return c.textContent=i,s.append(c,a,r),s}function Ms(i,e,t){let n=document.createElement("div");n.className="orow";let s=document.createElement("label");s.textContent=i;let a=document.createElement("button"),o=()=>{a.className="tbtn"+(se[e]?" sel":""),a.textContent=se[e]?"Sí":"No"};return a.onclick=r=>{r.stopPropagation(),se[e]=!se[e],o(),fi(),ye.play("Tecla"),t&&t()},o(),n.append(s,a),n}function Ks(i,e){let t=document.createElement("div");t.className="orow";let n=document.createElement("label");n.textContent=i,t.appendChild(n);for(let[s,a]of[[!0,"Sí"],[!1,"No"]])t.appendChild(st(a,()=>{se[e]=s,fi(),t.querySelectorAll("button").forEach((o,r)=>o.classList.toggle("sel",r===0===s))},se[e]===s));return t}function ea(i,e,t,n,s="",a=!1){let o=document.createElement("div");o.className="orow"+(a?" orow-wrap":""),s&&(o.id=s);let r=document.createElement("label");r.textContent=i,o.appendChild(r);for(let[c,l]of t){let h=document.createElement("button");h.className="tbtn"+(se[e]===c?" sel":""),h.textContent=l,h.dataset.v=c,h.onclick=u=>{u.stopPropagation(),se[e]=c,fi(),ye.play("Tecla"),o.querySelectorAll("button").forEach(f=>f.classList.toggle("sel",f.dataset.v===String(c))),n&&n(c)},o.appendChild(h)}return o}function Ev(){let i=document.createElement("div");i.className="ocustom",i.id="optCustom";let e=document.createElement("div");e.className="olabel",e.textContent="🎶 Música de la cabecera",i.appendChild(e);let t=document.createElement("div");t.className="oname";let n=It.cache.cabecera_propia;t.textContent=n?"Audio propio: "+(n.name||"cargado"):"Sin audio propio: suena la música del Clásico (Scratch)",i.appendChild(t);let s=document.createElement("div");s.className="orow obtns";let a=null;return s.append(st("📂 Elegir audio de mi dispositivo",async()=>{let o=await hi("audio/*");o&&(await Qn("cabecera_propia",o),Ne("options"))},!0),st("▶ Probar",()=>{if(a){a.pause(),a=null;return}let o=It.cache.cabecera_propia,r=o?URL.createObjectURL(o):ye.url("cabecera");r?(a=new Audio(r),a.volume=se.musicVol,a.play()):Fe.toast("No hay música de cabecera")}),st("🗑 Quitar",async()=>{await pr("cabecera_propia"),Ne("options")})),i.append(s,_n("El audio se queda solo en este dispositivo; no se sube ni se comparte."),_n("Suena en la cabecera y en la despedida del Programa completo, con los mismos movimientos de cámara.","onote small")),i}function wv(){let i=document.createElement("div");return i.className="ocustom opub",i.id="optPublico",i.appendChild(hc("👏 Público","publico","publicoVol","rowPublico")),i.appendChild(Ms("👥 Público en las gradas","gradas",()=>re.gradas(se.gradas))),i.appendChild(_n("Aplausos, vítores y «oooh» del público. Son sonidos sintetizados por el propio juego (no son grabaciones). Si tu móvil va justo, quitar el público de las gradas ayuda.")),i}function Tv(){let i=document.createElement("div");i.className="ocustom",i.id="optConcursantes";let e=document.createElement("div");e.className="olabel",e.textContent="👥 Concursantes";let t=document.createElement("div");t.className="oname",t.textContent=`Tú: ${xt.nombre}${xt.profesion?" · "+xt.profesion:""} · Presenta: ${xt.presentador} · Llamada: ${xt.amigo} · Acompañante: ${xt.familiar}`;let n=document.createElement("div");return n.className="orow obtns",n.appendChild(st("✏️ Nombres y profesiones",()=>Ne("concursantes"),!0)),i.append(e,t,n),i}var wh={e2020:"Plató azul con suelo dorado en espiral y consola en V. Primer seguro en la 5; el segundo lo eliges tú. Comodines: 50:50, público, llamada y acompañante.",e2005:"Antena 3: escalera en euros hasta 1.000.000 €, seguros fijos en 1.000 € y 10.000 €. Comodines: 50:50, público y llamada.",e1999:"Telecinco «50 por 15»: 15 preguntas hasta 50.000.000 de pesetas. Seguros en 100.000 y 3.200.000 ptas."};function Av(){let i=document.createElement("div"),e=_n(wh[se.era]);return i.append(ea("📅 Etapa del programa","era",Object.keys(Tn).map(t=>[t,Tn[t].nombre]),t=>e.textContent=wh[t],"rowEtapa"),e),i}function Cv(){let i=document.createElement("div"),e=document.createElement("div");e.className="orow";let t=document.createElement("label");t.textContent="📦 Cargar sb3 / sonidos / sprites",e.append(t,st("Abrir ▶",()=>Ne("recursos")));let n=document.createElement("div");n.className="orow orow-wrap";let s=document.createElement("label");s.textContent="🎶 Músicas, sonidos y gráficos del Clásico",n.appendChild(s),n.append(st("📂 Cargar músicas",async()=>{let r=await hi("audio/*",!0);if(!r||!r.length)return;let c=await mh(r);Fe.toast(c?`✅ ${c} sonidos cargados`:"Nombra los archivos como las ranuras: tema.mp3, fase1.mp3…",3e3),Ne("options")}),st("🖼️ Logo",async()=>{let r=await hi("image/*");r&&(await Qn("logo",r),bc(),Ne("options"))}),st("🗑️ Borrar",async()=>{await pr(),location.reload()}));let a=Object.keys(It.cache).filter(r=>r.startsWith("snd:")).length,o=document.createElement("p");return o.className="onote",o.innerHTML=(se.sonidosClasico?"✅ Sonidos y músicas: los del Clásico (Scratch) incluidos en esta copia":"⬜ Sonidos del Clásico desactivados: música sintetizada")+(a?`<br>✅ ${a} sonidos propios cargados`:"")+(It.cache.logo?"<br>✅ Logo propio":"<br>✅ Logo: el del juego (dibujado)"),i.append(e,n,Ms("🎼 Usar los sonidos del Clásico","sonidosClasico",()=>{gi=!1,vr(),Ne("options")}),o),i}var Th={2020:"El plató de 2020: azul oscuro, haces de luz y logo morado y dorado. Prueba también el «Plató virtual».",2005:"Luces moradas y lilas, como en la etapa de Antena 3.",1999:"Azul y oro, como en los tiempos de las pesetas.",virtual:"Plató virtual: neón cian y magenta."};function Rv(){let i=document.createElement("div"),e=_n(Th[se.plato]);return i.append(ea("🏟️ Plató","plato",[["2020","2020-2025"],["2005","Antena 3 2005-08"],["1999","Telecinco 1999"],["virtual","Plató virtual"]],t=>{re.aplicaEstilo(t),e.textContent=Th[t]},"rowPlato"),e),i}function Pv(){let i=document.createElement("div");i.className="ocustom";let e=document.createElement("div");e.className="olabel",e.textContent="❓ Mis preguntas";let t=document.createElement("div");return t.className="orow obtns",t.appendChild(st("✏️ Gestionar mis preguntas",()=>Ne("mispreguntas"),!0)),i.append(e,t,_n(`Escribe tus propias preguntas (${yc().length} guardadas) con su nivel de dificultad; se mezclan con las 300 del juego. Se quedan solo en este dispositivo.`)),i}function bc(){let i=It.cache.logo;if(!i)return;let e=new Image;e.onload=()=>re.ponLogo(e),e.src=URL.createObjectURL(i)}function dc(i){let e=It.cache.logo;if(e){let t=new Image;return t.src=URL.createObjectURL(e),t.style.cssText="max-width:100%;max-height:60vh;border-radius:50%",t}return Ys(i)}function Ne(i="main"){lv=i,vr(),je("topbar").classList.add("hidden");let e=je("menu");e.classList.remove("hidden"),e.innerHTML="",e.style.background="transparent";let t=_s.find(l=>l.id===se.especial)||_s[0];if(i==="title"){let l=document.createElement("div");l.className="title";let h=dc(560);h.className="tlogo";let u=document.createElement("div");u.className="tsub",u.textContent="El juego";let f=document.createElement("div");f.className="ttap",f.textContent="Toca para empezar",l.append(h,u,f),e.appendChild(l);let p=g=>{g.stopPropagation(),ye.ctx.resume(),ye.play("Fanfarria"),e.removeEventListener("pointerup",p),removeEventListener("keydown",p),Ne("main")};e.addEventListener("pointerup",p),addEventListener("keydown",p);return}let n=document.createElement("div");n.className="mbox";let s=document.createElement("div");s.className="logo";let a=dc(560);a.className="mlogo",s.appendChild(a);let o=document.createElement("div");o.className="mtag",o.textContent=t.id==="normal"?"EL JUEGO · 3D":t.emoji+" "+t.banner,s.appendChild(o);let r=document.createElement("div");if(r.className="col ui",i==="main")r.append(Ze("Jugar","Programa completo, entrenamiento, clásico…","gold",()=>Ne("play")),Ze("Promos","Promos 3D con Leo Arrieta: cabecera, apertura, casting, esta noche…","",()=>Ne("promos")),Ze("Promos de Leo",`${xt.presentador} presenta ¿Quién quiere ser millonario? en el plató: próximo programa, seguro, consola`,"",()=>Ne("promosleo")),Ze("Publicidad",`Pausa de ${zi}: anuncios inventados, cortinillas y promos de la cadena`,"",()=>Ne("publicidad")),Ze("Cámara oculta","Bromas a Leo en el plató… ¡Inocente, inocente!","",()=>Ne("oculta")),Ze("Tomas falsas","Lapsus, comodines rebeldes y «¡Corten!»","",()=>Ne("tomas")),Ze("Fuera de cámaras","Maquillaje, ensayos, técnicos y la pausa","",()=>Ne("fuera")),Ze("Paseo","Pasea por el plató y sube a la grada","",()=>ct("paseo")),Ze("Casting","Apúntate y sal como concursante en las partidas","",()=>Ne("casting")),Ze("Elige el valor de cada pregunta","Coloca los 15 premios de la escalera","",()=>Ne("escalera")),Ze("Opciones","Sonido, calidad gráfica, pantalla completa","",()=>Ne("options")),Ze("La historia de ¿Quién quiere ser millonario?",`${xt.presentador} te cuenta la historia del programa`,"hist",()=>Ne("historia")),Ze("Cómo se juega","Las reglas del concurso","",()=>Ne("help")),Ze("Créditos","","",()=>Ne("credits"))),cc||r.append(Ze("Instalar app","Juega sin conexión desde tu pantalla de inicio","inst",()=>{uc?uc.prompt():Fe.toast("Usa «Añadir a pantalla de inicio» en el menú del navegador",3e3)}));else if(i==="play"){r.append(Ze("Programa completo","Cabecera, apertura, 15 preguntas, comodines, cheque y despedida","gold",()=>ct("programa")),Ze("Entrenamiento","Juega sin cabecera ni publicidad, elige la escalera","",()=>Ne("train")),Ze("Clásico","El juego original de Scratch","",()=>ct("clasico")),Ze("Explorar el plató","Pasea libremente por el plató 3D","",()=>ct("explorar")),Ze("Monólogos del presentador","Sus números de humor: con el público, al teléfono y las normas","",()=>Ne("monologos"))),r.appendChild(At("Programa especial"));let l=document.createElement("div");l.className="themes";for(let h of _s){let u=document.createElement("button");u.className="tbtn"+(h.id===se.especial?" sel":""),u.innerHTML=`<span>${h.emoji}</span>${h.name}`,u.onclick=f=>{f.stopPropagation(),ye.play("Tecla"),se.especial=h.id,fi(),Ne("play")},l.appendChild(u)}r.append(l,Bt("main"))}else if(i==="train"){r.appendChild(At("Entrenamiento (sin cabecera)"));let l=(u,f,p,g="")=>Ze(f,p,g,()=>ct("entrenamiento",u));r.append(l("e2020","Escalera 2020–2025","Hasta 1.000.000 € · tú eliges el segundo seguro","gold"),l("e2005","Escalera 2005–2007","Seguros en 1.000 € y 10.000 €"),l("e1999","Escalera 1999–2001 «50 por 15»","Hasta 50.000.000 de pesetas"),l("propia","Mi escalera","La de «Elige el valor de cada pregunta»"));let h=document.createElement("div");h.className="mrow",h.append(st(se.misPreguntas?"<span>❓</span>Preguntas: las del juego + las mías":"<span>📜</span>Preguntas: solo las del juego",u=>{se.misPreguntas=!se.misPreguntas,fi(),u.innerHTML=se.misPreguntas?"<span>❓</span>Preguntas: las del juego + las mías":"<span>📜</span>Preguntas: solo las del juego",u.classList.toggle("sel",se.misPreguntas)},se.misPreguntas),Bt("play")),r.appendChild(h)}else if(i==="oculta"||i==="tomas"||i==="fuera"){let l={oculta:["📹","Cámara oculta","Bromas a Leo en el plató… ¡Inocente, inocente!"],tomas:["🎬","Tomas falsas","Lapsus, comodines rebeldes y «¡Corten!»"],fuera:["🎥","Fuera de cámaras","Maquillaje, ensayos, técnicos y la pausa"]}[i];r.appendChild(At(l[0]+" "+l[1])),r.appendChild(nn(l[2]+". Personajes virtuales inventados; todo es ficción.")),r.appendChild(Ze("▶ Ver todas seguidas",dr[i].length+" escenas","gold",()=>ct(i,"todas")));for(let h of dr[i])r.appendChild(Ze(h.titulo,h.pasos.length+" frases","",()=>ct(i,h.id)));r.appendChild(Bt("main"))}else if(i==="promos"){r.appendChild(At("Promos")),r.appendChild(nn(`Promos de ¿Quién quiere ser millonario? en 3D, en tiempo real, con nuestro presentador virtual <b>${vt(xt.presentador)}</b> (personajes virtuales, sin personas reales).`)),r.append(Ze("🎬 Cabecera del programa","La cabecera de cada programa","",()=>ct("promos","cabecera")),Ze("🎬 Apertura del programa","Plató, público, Leo entra y el concursante a la silla","",()=>ct("promos","apertura")));for(let l of Hl)r.appendChild(Ze("📺 "+l.titulo,l.lineas[0],l.id==="estanoche"?"gold":"",()=>ct("promos",l.id)));r.appendChild(Bt("main"))}else if(i==="promosleo"){r.appendChild(At("Promos de Leo")),r.appendChild(nn(`Promos en 3D en el plató: nuestro presentador virtual <b>${vt(xt.presentador)}</b> presenta ¿Quién quiere ser millonario? en ${zi}. (Personaje virtual, voz sintética.)`));for(let l of Vl)r.appendChild(Ze("🎤 "+l.titulo,l.lineas[0],l.id==="pl1"?"gold":"",()=>ct("promosleo",l.id)));r.appendChild(Bt("main"))}else if(i==="publicidad"){r.appendChild(At("Publicidad · "+zi)),r.appendChild(nn(`Pausa publicitaria de <b>${zi}</b> con anuncios <b>inventados</b> (marcas y productos de broma) y promos de la cadena. También puede salir en mitad del Programa completo.`)),r.appendChild(Ze("📺 Pausa publicitaria completa","Cortinillas, 3 anuncios y ¡volvemos!","gold",()=>ct("publicidad","pausa"))),r.appendChild(Ze("⏱️ Cortinillas","Publicidad · Volvemos en 1 minuto · 30 segundos · 3 anuncios · 1 anuncio","",()=>ct("publicidad","cortinillas"))),r.appendChild(At("Promos de la cadena"));for(let h of Gl)r.appendChild(Ze("📺 "+h.titulo,"Promo de la cadena","",()=>ct("promocadena",h.id)));r.appendChild(At("Anuncios inventados"));let l=document.createElement("div");l.className="themes";for(let h of bs){let u=document.createElement("button");u.className="tbtn",u.innerHTML=`<span>🛒</span>${vt(h.marca)}`,u.title=h.producto,u.onclick=f=>{f.stopPropagation(),ct("publicidad","anuncio:"+h.id)},l.appendChild(u)}r.append(l,Ks("📺 Publicidad en el Programa completo","publicidad"),Bt("main"))}else if(i==="monologos"){r.appendChild(At("Monólogos del presentador")),r.appendChild(Ze("🎲 Al azar","Uno cualquiera (y luego «Siguiente»)","gold",()=>ct("monologos","azar")));let l=document.createElement("div");l.className="monolist";let h={publico:"👏",telefono:"📱",normas:"📜"},u={publico:"Con el público",telefono:"Al teléfono",normas:"Cambiando las normas"};for(let f of Qs){let p=document.createElement("button");p.className="tbtn",p.innerHTML=`<span>${h[f.tipo]}</span><b>${vt(f.titulo)}</b><small>${u[f.tipo]}</small>`,p.onclick=g=>{g.stopPropagation(),ye.play("Tecla"),ct("monologos",f.id)},l.appendChild(p)}r.append(l,_n(`${xt.presentador} es un presentador virtual inventado con voz sintética genérica. Toca el bocadillo para pasar de frase, o el plató para saltar el monólogo.`,"mtext onote2"),Bt("play"))}else if(i==="casting"){r.appendChild(At("Casting")),r.appendChild(nn("¡Apúntate al casting de <b>¿Quién quiere ser millonario?</b>! Rellena tu ficha y podrás jugar como concursante, con tu nombre, tu profesión y tu avatar; los apuntados también contestan al <b>comodín de la llamada</b>. Se guarda solo en este dispositivo."));let l=nn(""),h=(x,R,H="text",k="",q=24)=>{let $=document.createElement("label");$.style.cssText="display:block;margin:6px 0 2px;font-weight:700",$.textContent=R;let V=document.createElement("input");return V.type=H,V.id=x,V.placeholder=k,V.maxLength=q,V.style.cssText="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:2px solid #3a6aff;background:#fff;color:#111;font:16px system-ui",V.addEventListener("keydown",Z=>Z.stopPropagation()),V.addEventListener("pointerup",Z=>Z.stopPropagation()),l.append($,V),V},u=h("cNombre","Nombre","text","Tu nombre",18),f=h("cEdad","Edad","number","25",3),p=h("cCiudad","Ciudad","text","Tu ciudad",24),g=h("cProf","Profesión","text","A qué te dedicas",40),v=h("cFrase","Tu frase","text","¡Voy a por el millón!",80),m=["#2a6aff","#e8102a","#ff7a1a","#3ac85a","#ffd21a","#d04aff","#ff5fb0","#1a1a1a","#ffffff"],d=["#f6d2b8","#e0a880","#a8704a","#6a4028","#e8eef8"],S=m[0],E=d[0],y=(x,R,H,k)=>{let q=document.createElement("div");q.style.cssText="margin:8px 0 2px",q.innerHTML=`<b>${x}</b><br>`,R.forEach($=>{let V=document.createElement("button");V.style.cssText=`width:34px;height:34px;margin:4px;border-radius:50%;border:3px solid ${$===k()?"#ffd21a":"#0008"};background:${$};cursor:pointer`,V.onclick=Z=>{Z.preventDefault(),Z.stopPropagation(),H($),q.querySelectorAll("button").forEach(X=>X.style.borderColor="#0008"),V.style.borderColor="#ffd21a"},q.appendChild(V)}),l.appendChild(q)};y("Color de la ropa del avatar",m,x=>S=x,()=>S),y("Aspecto (tono de piel del avatar)",d,x=>E=x,()=>E);let L=document.createElement("p");L.className="onote";let w=st("✅ Apuntarme al casting",async()=>{let x=u.value.trim();if(!x){L.textContent="Escribe al menos tu nombre.";return}await bv({nombre:x.slice(0,18),edad:Math.max(0,Math.min(120,+f.value||0)),ciudad:p.value.trim(),profesion:g.value.trim(),frase:v.value.trim(),color:S,piel:E,fecha:Date.now()}),Ne("casting")});l.append(document.createElement("br"),w,L),r.appendChild(l);let A=+localStorage.getItem("mm_central")||0,I=nn("<b>Apuntados ("+di.length+")</b>");di.slice().reverse().forEach(x=>{let R=document.createElement("div");R.style.cssText="display:flex;align-items:center;gap:8px;margin:6px 0;flex-wrap:wrap",R.innerHTML=`<span style="width:22px;height:22px;border-radius:50%;background:${x.color};border:4px solid ${x.piel}"></span><span><b>${vt(x.nombre)}</b>${x.edad?", "+x.edad:""}${x.ciudad?" · "+vt(x.ciudad):""}${x.profesion?" · "+vt(x.profesion):""}${x.frase?"<br><i>«"+vt(x.frase)+"»</i>":""}</span>`,R.append(st(A===x.id?"✅ Es el concursante":"🎮 Jugar como concursante",()=>{localStorage.setItem("mm_central",A===x.id?"0":String(x.id)),Ne("casting")},A===x.id),st("🗑️",async()=>{await Mv(x.id),Ne("casting")})),I.appendChild(R)}),r.appendChild(I);let _=document.createElement("div");_.className="mrow",_.append(st(gr()?"✅ El casting juega en las partidas":"⬜ El casting no juega en las partidas",x=>{localStorage.setItem("mm_casting_on",gr()?"0":"1"),x.innerHTML=gr()?"✅ El casting juega en las partidas":"⬜ El casting no juega en las partidas"}),Bt("main")),r.appendChild(_)}else if(i==="escalera"){r.appendChild(At("Elige el valor de cada pregunta")),r.appendChild(nn("Coloca los 15 premios de la escalera. Toca dos premios para <b>intercambiarlos</b> o mantén pulsado uno para <b>escribir</b> otra cifra. Los dorados son los <b>seguros</b> de la época elegida. Se usan en <b>Entrenamiento › Mi escalera</b> (o en todos los programas)."));let l=(Ah()||Tn[se.era].escalera).slice(),h=-1,u=nn("","text-align:center"),f=()=>{u.innerHTML="";for(let v=14;v>=0;v--){let m=document.createElement("button");m.textContent=`${v+1} · ${mi(l[v],Tn[se.era])}`,m.style.cssText=`display:block;min-width:180px;margin:2px auto;padding:5px 10px;border-radius:16px;border:2px solid ${h===v?"#ffffff":"#1a1000"};background:${Tn[se.era].seguros.includes(v+1)||v===14?"#ffd21a":"#5aa8ff"};color:#1a1000;font:900 12px system-ui;cursor:pointer;transform:${h===v?"scale(1.08)":"none"}`;let d;m.onpointerdown=()=>d=setTimeout(()=>{d="x";let S=prompt("Premio de la pregunta "+(v+1),l[v]);S&&+S>=0&&(l[v]=Math.round(+S),localStorage.setItem("mm_escalera",JSON.stringify(l)),f())},650),m.onclick=S=>{S.stopPropagation(),d!=="x"&&(clearTimeout(d),ye.play("Tecla"),h<0?h=v:([l[h],l[v]]=[l[v],l[h]],h=-1,localStorage.setItem("mm_escalera",JSON.stringify(l))),f())},u.appendChild(m)}};f(),r.appendChild(u);let p=document.createElement("div");p.className="mrow",p.append(st("🔀 Al azar",()=>{for(let v=l.length-1;v>0;v--){let m=Math.floor(Math.random()*(v+1));[l[v],l[m]]=[l[m],l[v]]}localStorage.setItem("mm_escalera",JSON.stringify(l)),f()}),st("↕️ Ordenar",()=>{l.sort((v,m)=>v-m),localStorage.setItem("mm_escalera",JSON.stringify(l)),f()}),st("↩️ Como en el programa",()=>{l=Tn[se.era].escalera.slice(),localStorage.removeItem("mm_escalera"),f()}),st("▶️ Jugar con mi escalera",()=>{localStorage.setItem("mm_escalera",JSON.stringify(l)),ct("entrenamiento","propia")})),r.appendChild(p);let g=document.createElement("div");g.className="mrow",g.append(st((se.escaleraSiempre?"✅":"⬜")+" Usar mi escalera en todos los programas",v=>{se.escaleraSiempre=!se.escaleraSiempre,fi(),v.innerHTML=(se.escaleraSiempre?"✅":"⬜")+" Usar mi escalera en todos los programas"}),Bt("main")),r.appendChild(g)}else if(i==="options"){r.classList.add("opts"),r.appendChild(At("Opciones")),r.append(hc("🎵 Música","music","musicVol"),ea("🎬 Cabecera","cabecera",[["cab3d","Cabecera 3D"],["video",It.cache.video_cabecera?"Vídeo propio":"Vídeo propio (cárgalo)"],["plato3d","Plató 3D"]],async f=>{if(f==="video"&&!It.cache.video_cabecera){let p=await hi("video/*");p&&(await Qn("video_cabecera",p),Ne("options"))}},"rowCabecera",!0),Ev(),hc("🔊 Efectos","sfx","sfxVol"),wv(),Ms("🎤 Voz del presentador","voz"),Ms("📖 El presentador lee las preguntas","lee"),ea("⏩ Velocidad de lectura","leeVel",[["normal","Normal"],["rapida","Rápida"]],null,"rowLeeVel"),Ms("😄 Chistes del presentador","chistes"),Ms("🎭 Monólogo del presentador","monologo"),Tv(),Av(),Cv(),Ks("📺 Publicidad en el Programa completo","publicidad"),Ks("🎤 Copresentador sorpresa","copro"),Ks("🎙️ Presentador sorpresa (todo el programa)","presSorpresa"),Ks("🎬 Cabecera 3D y apertura larga en el Programa completo","apertura"),Rv(),Pv(),ea("✨ Calidad gráfica","quality",[["baja","Baja"],["media","Media"],["alta","Alta"]],()=>location.reload()));let l=document.createElement("div");l.className="orow";let h=document.createElement("label");h.textContent="⛶ Pantalla completa";let u=document.createElement("button");u.className="tbtn"+(document.fullscreenElement?" sel":""),u.textContent=document.fullscreenElement?"Salir":"Activar",u.onclick=async f=>{f.stopPropagation();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}setTimeout(()=>Ne("options"),300)},cc&&(u.disabled=!0,u.textContent="Siempre (app)"),l.append(h,u),r.append(l,_n(`Rendimiento actual: ${Math.round(Ph)} fps. Si el juego va lento en tu móvil, elige calidad «Baja».`,"mtext"),Bt("main"))}else if(i==="concursantes"){r.classList.add("opts"),r.appendChild(At("Concursantes"));let l=(p,g,v)=>{let m=document.createElement("div");m.className="orow ofield";let d=document.createElement("label");d.textContent=p;let S=document.createElement("input");return S.type="text",S.className="otext",S.value=xt[g],S.placeholder=v,S.maxLength=24,S.addEventListener("input",()=>{xt[g]=S.value,uv()}),S.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&S.blur()}),S.addEventListener("pointerdown",E=>E.stopPropagation()),S.addEventListener("pointerup",E=>E.stopPropagation()),m.append(d,S),m},h=document.createElement("div");h.className="ocustom",h.innerHTML='<div class="olabel">🙋 Tú, el concursante</div>',h.append(l("Tu nombre","nombre","Iker"),l("Tu profesión","profesion","Estudiante"),l("Tu ciudad","ciudad","Madrid"),_n(`${xt.presentador} te presentará al empezar el Programa completo. Tu nombre sale en el rótulo, en el cheque y en los créditos.`));let u=document.createElement("div");u.className="ocustom",u.innerHTML='<div class="olabel">🎤 El presentador</div>',u.append(l("Nombre del presentador","presentador",kl),_n("Personaje inventado con voz sintética genérica."));let f=document.createElement("div");f.className="ocustom",f.innerHTML='<div class="olabel">📞 Tus comodines</div>',f.append(l("Amigo de la llamada","amigo","Mi primo Javi"),l("Acompañante (comodín del familiar)","familiar","Mi madre")),r.append(h,u,f,Bt("options"))}else if(i==="recursos"){r.classList.add("opts"),r.appendChild(At("Cargar sb3 / sonidos / sprites")),r.appendChild(nn("Abre un proyecto de Scratch (<b>.sb3</b>) y elige qué sonido suena en cada momento del concurso, o carga archivos de audio sueltos. Todo se queda solo en este dispositivo."));let l=nn(""),h=[],u=()=>{l.innerHTML="";for(let[p,g]of Kl){let v=document.createElement("div");v.className="orow orow-wrap";let m=document.createElement("label");if(m.textContent=(It.cache["snd:"+p]?"✅ ":se.sonidosClasico?"🎼 ":"⬜ ")+g,v.appendChild(m),h.length){let d=document.createElement("select");d.innerHTML='<option value="">— elegir del sb3 —</option>'+h.map((S,E)=>`<option value="${E}">${vt(S.nombre)}</option>`).join(""),d.onclick=S=>S.stopPropagation(),d.onchange=async()=>{d.value!==""&&(await Qn("snd:"+p,h[+d.value].blob),u())},v.appendChild(d)}v.append(st("📂",async()=>{let d=await hi("audio/*");d&&(await Qn("snd:"+p,d),u())}),st("▶",()=>{let d=ye.url(p);d?new Audio(d).play():Fe.toast("Sin sonido")}),st("🗑",async()=>{await pr("snd:"+p),u()})),l.appendChild(v)}},f=document.createElement("div");f.className="mrow",f.append(st("📦 Abrir .sb3",async()=>{let p=await hi(".sb3,application/zip");if(p){try{h=await ph(p),Fe.toast(`${h.length} sonidos en el proyecto`)}catch{Fe.toast("No se pudo leer el .sb3")}u()}},!0),st("🖼️ Logo",async()=>{let p=await hi("image/*");p&&(await Qn("logo",p),bc())}),st("🎬 Vídeo de cabecera",async()=>{let p=await hi("video/*");p&&(await Qn("video_cabecera",p),Fe.toast("Vídeo guardado: elige «Vídeo propio» en Cabecera"))})),u(),r.append(f,l,_n("✅ propio · 🎼 el del Clásico (Scratch) · ⬜ sintetizado"),Bt("options"))}else if(i==="mispreguntas"){r.classList.add("opts"),r.appendChild(At("Mis preguntas"));let l=yc(),h=nn(""),u=(y,L)=>{let w=document.createElement("label");w.style.cssText="display:block;margin:6px 0 2px;font-weight:700",w.textContent=y;let A=document.createElement("input");return A.placeholder=L,A.style.cssText="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:2px solid #3a6aff;background:#fff;color:#111;font:16px system-ui",A.addEventListener("keydown",I=>I.stopPropagation()),A.addEventListener("pointerup",I=>I.stopPropagation()),h.append(w,A),A},f=u("Pregunta","¿…?"),p=u("Respuesta correcta",""),g=u("Incorrecta 1",""),v=u("Incorrecta 2",""),m=u("Incorrecta 3",""),d=1,S=document.createElement("div");S.className="orow",S.innerHTML="<label>Nivel</label>";for(let y=1;y<=5;y++)S.appendChild(st(["Fácil","Normal","Media","Difícil","Muy difícil"][y-1],L=>{d=y,S.querySelectorAll("button").forEach(w=>w.classList.toggle("sel",w===L))},y===1));h.appendChild(S),h.appendChild(st("➕ Guardar pregunta",()=>{if(!f.value.trim()||!p.value.trim()||!g.value.trim()||!v.value.trim()||!m.value.trim())return Fe.toast("Rellena todos los campos");l.push({nivel:d,q:f.value.trim(),c:p.value.trim(),inc:[g.value.trim(),v.value.trim(),m.value.trim()]}),localStorage.setItem("mm_mispreg",JSON.stringify(l)),Ne("mispreguntas")},!0)),r.appendChild(h);let E=nn(`<b>Guardadas (${l.length})</b>`);l.forEach((y,L)=>{let w=document.createElement("div");w.style.cssText="display:flex;gap:8px;align-items:center;margin:4px 0",w.innerHTML=`<span>N${y.nivel} · ${vt(y.q)} <i>(${vt(y.c)})</i></span>`,w.appendChild(st("🗑️",()=>{l.splice(L,1),localStorage.setItem("mm_mispreg",JSON.stringify(l)),Ne("mispreguntas")})),E.appendChild(w)}),r.append(E,Bt("options"))}else if(i==="historia"){r.classList.add("text"),r.append(Bt("main"),At("La historia de ¿Quién quiere ser millonario?"),Ze("▶ Que me la cuente Leo","Recorrido narrado por el plató","gold",()=>ct("historia")));let l=document.createElement("div");l.className="mtext",l.innerHTML=Wl.map(([h,u,f])=>`<p><b>${vt(h)} · ${vt(u)}</b><br>${vt(f)}</p>`).join(""),r.append(l)}else if(i==="help"){r.classList.add("text"),r.append(Bt("main"),At("Cómo se juega"));let l=document.createElement("div");l.className="mtext",l.innerHTML=`<p><b>Objetivo:</b> responder bien a <b>15 preguntas</b> de dificultad creciente para ganar el gran premio.</p><p><b>Respuestas:</b> toca A, B, C o D. Desde la pregunta 5, ${vt(xt.presentador)} te preguntará si es tu última respuesta.</p><p><b>Seguros:</b> en 2005–2007 y 1999–2001 están en las preguntas 5 y 10. Desde 2020 solo el primero es fijo (pregunta 5) y <b>tú eliges el segundo</b> antes de empezar.</p><p><b>Comodines:</b> 50:50 (quita dos incorrectas), público (gráfico de barras con los votos), llamada (<b>30 segundos</b> con reloj) y, desde 2020, el comodín del acompañante.</p><p><b>Plantarse:</b> puedes retirarte con lo ganado en cualquier momento. Si fallas, te llevas el último seguro alcanzado.</p><p><b>Controles 3D:</b> ☰ vuelve al menú, 👁 cambia la cámara, 💡 apaga o enciende los haces de luz. «Saltar» pasa la cabecera.</p>`,r.append(l)}else if(i==="credits"){r.classList.add("text"),r.append(Bt("main"),At("Créditos"));let l=document.createElement("div");l.className="mtext",l.innerHTML=`<p><b>Idea y juego</b><br>Iker</p><p><b>Presentador virtual</b><br>${vt(xt.presentador)} (personaje inventado)</p><p><b>Voz</b><br>Piper TTS (es_ES-davefx-medium y otras), voces sintéticas genéricas</p><p><b>Motor 3D</b><br>Three.js (MIT)</p><p><b>Menús, publicidad de ${zi} y personajes</b><br>Basados en «¡Ahora Caigo! 3D» 1.13 de Iker</p><p><b>Modo Clásico y sonidos</b><br>Juego de Scratch «Quem Quer Ser Um Milionário - Jogo 2025 remix», empaquetado con TurboWarp Packager</p><p class="small">Versión ${Mh}</p><p class="small">Juego de fans sin ánimo de lucro. «¿Quién quiere ser millonario?» es un formato de sus respectivos propietarios; este juego no está afiliado ni respaldado por ellos.</p>`,r.append(l)}let c=document.createElement("div");c.className="mver",c.textContent="v"+Mh,n.appendChild(c),n.append(s,r),e.appendChild(n)}var Ph=60;async function Iv(){typeof se.cabecera=="boolean"&&(se.cabecera="cab3d"),await Promise.all([fh(),_c()]),xh(ye,pc);let i=document.createElement("div");i.id="mq",je("hud").appendChild(i),re=sh(je("c3d"),se.quality,se.plato),re.gradas(se.gradas),bc();let e=performance.now(),t=0,n=performance.now(),s=u=>{t++,u-n>1e3&&(Ph=t*1e3/(u-n),t=0,n=u),re.frame(Math.min(.05,(u-e)/1e3)),e=u,requestAnimationFrame(s)};requestAnimationFrame(s),je("btnMenu").onclick=u=>{u.stopPropagation(),!(pi&&pi.alive&&!confirm("¿Volver al menú? Se perderá la partida."))&&(document.getElementById("showtime")?.remove(),Ne("main"))},je("btnLuces").onclick=u=>{u.stopPropagation(),Fe.toast(re.toggleLuces()?"Haces de luz encendidos":"Haces de luz apagados",1e3)};let a=0;je("btnCam").onclick=u=>{if(u.stopPropagation(),re.cam.modo==="libre")return;let f=Object.keys(re.PLANOS);re.plano(f[a++%f.length])},je("classicBack").onclick=()=>{je("classicWrap").classList.add("hidden"),je("classic").src="about:blank",gi=!1,Ne("play")};let o={};addEventListener("keydown",u=>{o[u.key.toLowerCase()]=1,r()}),addEventListener("keyup",u=>{o[u.key.toLowerCase()]=0,r()});let r=()=>{re.mueve.z=(o.s?1:0)-(o.w?1:0),re.mueve.x=(o.d?1:0)-(o.a?1:0)},c=je("touch"),l=null;c.addEventListener("pointerdown",u=>{l={x:u.clientX,y:u.clientY,izq:u.clientX<innerWidth/3}}),addEventListener("pointermove",u=>{!l||re.cam.modo!=="libre"||(l.izq?(re.mueve.x=Math.max(-1,Math.min(1,(u.clientX-l.x)/60)),re.mueve.z=Math.max(-1,Math.min(1,(u.clientY-l.y)/60))):(re.cam.yaw+=(u.clientX-l.x)*.005,re.cam.pitch=Math.max(-1,Math.min(1,re.cam.pitch-(u.clientY-l.y)*.004)),l.x=u.clientX,l.y=u.clientY))}),addEventListener("pointerup",()=>{l&&l.izq&&(re.mueve.x=re.mueve.z=0),l=null}),je("loading").classList.add("hidden");let h=new URLSearchParams(location.search);h.get("mode")?ct(h.get("mode"),h.get("sub")):Ne(h.get("screen")||"title"),Object.assign(window,{__menu:Ne,__startMode:ct,__plato:re,__preguntas:fc,__it:se})}Iv();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
