const P=require('@turbowarp/packager');const fs=require('fs');
(async()=>{const data=fs.readFileSync('../rar/Quem Quer Ser Um Milionário - Jogo 2025 remix (1).sb3');
const project=await P.loadProject(data);const pk=new P.Packager();pk.project=project;
pk.options.app.windowTitle='¿Quién quiere ser millonario? Clásico';pk.options.autoplay=true;pk.options.controls.fullscreen.enabled=false;
const r=await pk.package();fs.mkdirSync('out',{recursive:true});fs.writeFileSync('out/index.html',r.data);console.log(r.type,r.data.length);})();
