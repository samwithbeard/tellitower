let columNav=0;
let rowNav=0;
let topfloor=19;
let basefloor=2;  
let maxCol=15;

   function resetWindowClass(){
      let floors = document.getElementsByClassName('floor');
      for( let n=0; n < floors.length ; n++){
         floorwindows=floors[n].getElementsByClassName('windowlight')
         sortable=[]
         for(let i=0; i< floorwindows.length ; i++){
               sortable.push(parseFloat(floorwindows[i].getBoundingClientRect().x));  
         }
         console.log(sortable.sort())
         
         for(let i=0; i< floorwindows.length ; i++){        
               windowindex=sortable.indexOf(floorwindows[i].getBoundingClientRect().x, 0);  
               floorwindows[i].className.baseVal="windowlight";
               console.log(windowindex+" "+floorwindows[i].getBoundingClientRect().x+ " " + floorwindows[i].className.baseVal+ " " + floors[n].id);
         }
         
      }
   }   
   function showWindowClass(floorId){
      
      let floor = document.getElementById('floor'+floorId);
      let n=floor;
      floorwindows=floor.getElementsByClassName('windowlight')
      sortable=[]
      for(let i=0; i< floorwindows.length ; i++){
         sortable.push(parseFloat(floorwindows[i].getBoundingClientRect().x));  
      }
      console.log(sortable.sort())
      
      for(let i=0; i< floorwindows.length ; i++){        
         windowindex=sortable.indexOf(floorwindows[i].getBoundingClientRect().x, 0); 
         console.log(windowindex+" "+floorwindows[i].getBoundingClientRect().x+ " " + floorwindows[i].className.baseVal+ " " + floor.id);
      }
   }
         
   function downloadSVG() {
    const svg = document.getElementById('svgcontainer').outerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "telli.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
  }  
   
   function setRowClass(){
      
      let floors = document.getElementsByClassName('floor');
      for( let n=0; n < floors.length ; n++){
         floorwindows=floors[n].getElementsByClassName('windowlight')
         sortable=[]
         for(let i=0; i< floorwindows.length ; i++){
               sortable.push(parseFloat(floorwindows[i].getBoundingClientRect().x));  
         }
         sortable.sort()
         
         for(let i=0; i< floorwindows.length ; i++){        
               windowindex=sortable.indexOf(floorwindows[i].getBoundingClientRect().x, 0);  
               
               floorwindows[i].className.baseVal="windowlight row"+ windowindex.toString()
               windowindex+" "+floorwindows[i].getBoundingClientRect().x+ " " + floorwindows[i].className.baseVal+ " " + floors[n].id;
         }
         
      }
   }          
   function changerow(rowId) {
      windowlights = document.getElementsByClassName('row'+ rowId);
      for( let index=0; index < windowlights.length ; index++){          
                  windowlights[index].style.opacity= +!(1==windowlights[index].style.opacity);        
      }
   }

   function changeFloor(floorId) {
      let floor = document.getElementById('floor'+floorId);            
      floorwindows=floor.getElementsByClassName('windowlight')
      sortable=[]
      for(let i=0; i< floorwindows.length ; i++){
         sortable.push(parseFloat(floorwindows[i].getBoundingClientRect().x));  
      }
      sortable.sort()
      
      for(let i=0; i< floorwindows.length ; i++){        
         floorwindows[i].style.opacity= +!(1==floorwindows[i].style.opacity);
      }
   }

   function setWindowLight(floorId,rowId,ON=1) {
      let floor = document.getElementById('floor'+floorId);
      
      let window=floor.getElementsByClassName('row'+ rowId);
      
      window[0].style.opacity=ON;    
      return ON;
   }

   function WindowLightIsOn(floorId,rowId) {
   try { 
      let floor = document.getElementById('floor'+floorId); 
      let window=floor.getElementsByClassName('row'+ rowId);  
      return ('1'==window[0].style.opacity);
      
      } catch (error) {
         //console.error(error);
         return false;
      }

   }

   function ON() {    
      windowlights = document.getElementsByClassName('windowlight');
      for( let index=0; index < windowlights.length ; index++){          
                  console.log(windowlights[index].style.opacity= 1);        
      }
   }
   function OFF() {
      
      windowlights = document.getElementsByClassName('windowlight');
      for( let index=0; index < windowlights.length ; index++){          
                  console.log(windowlights[index].style.opacity= 0);        
      }
   }

   function flowByRow(){
   //FLOW BY ROW
   i=0;
   FlowId=window.setInterval(() => {
      changerow(i)  ;
      i++
      if(i==16){
         i=0;
      }         
      }, 500 );
      return FlowId;
   }
   
   function flowByFloor(){
   //FLOW BY ROW
   i=2;
   FlowId=window.setInterval(() => {
      changeFloor(i)  ;
      i++
      if(i==19){
         i=2;
      }         
      }, 500 );
      return FlowId;
   }
   function stopflow(FlowId){
      window.clearInterval(FlowId);
   }

   function allDescendants (node,ncolor) {
      for (var i = 0; i < node.childNodes.length; i++) {
         var child = node.childNodes[i];
         allDescendants(child,ncolor);
      //console.log("i "+i);
      //console.log("id "+child.id);	  
      //console.log("tagname "+child.tagName);
      //console.log(child);
         if("path"==String(child.tagName)) {
            
               child.style.fill=ncolor;
            //console.log(String(ncolor)+" to be set");
            
         }else{
            //console.log(" not set");

         }
      }
   }
   function setBgColor(ncolor,verlauf){
      svg=document.getElementsByTagName("svg")[0].style.backgroundColor=ncolor;
      document.getElementById("bgverlauf").style.opacity=verlauf  
   }

   function setMoon(on=1){   
      document.getElementById("moon").style.opacity=on;
      document.getElementById("moonshine").style.opacity=on;
      document.getElementById("antennenlicht").className.baseVal="antennenlicht";
      if(on==0){
         document.getElementById("antennenlicht").className.baseVal="none";
         document.getElementById("antennenlicht").style.opacity=0;
      }
   }
   function resetMoon(){   
      setMoon(0);
   }

   function setFog(on=1){   
      document.getElementById("nebel").style.display="inline";

      if(on==0){
         document.getElementById("nebel").style.display="none";
      }
   }

   function setColor(cclass,ncolor){
      let nodes = document.getElementsByClassName(cclass);
      for (var i = 0; i < nodes.length; i++) {
         var child = nodes[i];
         allDescendants(child,ncolor);
      } 
   }

   function dropBlock(col){
      floor=topfloor;  
      i=2;   
      FlowId=window.setInterval(() => {
      //console.log(String(floor)+" floor") ;
      //console.log(String(col)+" col");

      try {
      //console.log("flowID "+FlowId) 
         setWindowLight(floor,col,0);
         col=columNav+col;
         if(col>maxCol){
            col=maxCol;
         }
         if(col<0){
            col=0;
         }
         columNav=0;
         setWindowLight(floor-1,col,1);          
         if(WindowLightIsOn(floor-2,col)||floor==3){
            window.clearInterval(FlowId);
         }
         floor--;
      } catch (error) {
         console.error(error);
         window.clearInterval(FlowId);
      }
      }, 300-rowNav );      
   }

   //document.getElementById("leftbutton").addEventListener("click", () => console.log("leftclicked")) 
   //document.getElementById("rightbutton").addEventListener("click", () => console.log("rightclicked")) 
   document.getElementById("leftbutton").addEventListener("click", () => moveLeft()) ;
   document.getElementById("rightbutton").addEventListener("click", () => moveRight()) ;
   document.getElementById("downloadbutton").addEventListener("click", () => downloadSVG()) ;
   document.onkeydown = function(e) {
      
      switch (e.keyCode) {
         case 37:
            console.log('left');
            moveLeft();
            break;
         case 38:
            console.log('up');
            rowNav=rowNav-100
            break;
         case 39:
            console.log('right');
            moveRight();
            break;
         case 40:
            console.log('down');
            rowNav=rowNav+100;
            break;		
      }
      console.log(columNav);
   };
   function moveLeft(){
      columNav--;
   }
   function moveRight(){    
      columNav++;
   }
   //INIT
   resetWindowClass()//remove everything from each windowlight class
   setRowClass() //add row class by x-coordinate per floor
   //nightpalette

   function setNightPalette(){
      setColor("sidewindowcolor",'#040a0b') ; 
      setColor("sidewallcolor",'#1b2427') ; 
      setColor("frontwindowcolor",'#11252c') ; 
      setColor("betweenwindowcolor",'#394c52') ;
      setColor("tellit",'#394c52') ;
      setColor("intentcolor",'#11252c') ; 
      setColor("darkbg",'#0a020f') ;
      setBgColor('#0a020f',0);
      setMoon(1);
   }
   //setNightPalette()

   function setSFPalette(){
      setColor("sidewindowcolor",'#14041f') ; 
      setColor("sidewallcolor",'#310a3f') ; 
      setColor("frontwindowcolor",'#c80554') ; 
      setColor("betweenwindowcolor",'#fc0174') ; 
      setColor("intentcolor",'#ff7585') ;
      setColor("tellit",'#ff99a5') ;
      setColor("darkbg",'#310a3f') ;
      setColor("brightbg",'#fea88c') ;
      setBgColor('#fea88c',1);
      setMoon(0);
      setFog(0);
   }

   function setNormalPalette(){
      setColor("sidewindowcolor",'#14041f') ; 
      setColor("sidewallcolor",'#6f6051') ; 
      setColor("frontwindowcolor",'#6e4b30') ; 
      setColor("betweenwindowcolor",'#916541') ; 
      setColor("intentcolor",'#ad834f') ;
      setColor("tellit",'#e9ddaf') ;
      setColor("darkbg",'#310a3f') ;
      setColor("brightbg",'#417691') ;
      setBgColor('#417691',0);
      setMoon(0);
      setFog(0);
   }

   function setFogPalette(){
      setColor("sidewindowcolor",'#14041f') ; 
      setColor("sidewallcolor",'#6f6051') ; 
      setColor("frontwindowcolor",'#6e4b30') ; 
      setColor("betweenwindowcolor",'#916541') ; 
      setColor("intentcolor",'#ad834f') ;
      setColor("tellit",'#e9ddaf') ;
      setColor("darkbg",'#310a3f') ;
      setColor("brightbg",'#417691') ;
      setBgColor('#417691',0);
      setMoon(0);
      setFog(1);
   }
   //setNightPalette();
   OFF();
   //floorID=flowByFloor();
   //stopflow(rowID);
   //OFF();
   //rowID=flowByRow();   
   //stopflow(floorID);
   //ON(); 
   //setWindowLight(16,2,1);
   setNormalPalette();
   setSFPalette();
   function start(){
   var ninterval=0;
   Id=window.setInterval(() => {
      ninterval++;
      try {
         row=Math.floor(Math.random() * maxCol);      
         moveID=dropBlock(row) ;   
      } catch (error) {
         console.error(error);
         OFF();
         window.clearInterval(moveID);
      }
      if(ninterval==5){
         setSFPalette();
      } 
      if(ninterval==10){
         ninterval=0;
         setNightPalette();         
      } 
      if(ninterval==25){
         ninterval=0;         
         setFogPalette()
      } 
      if(ninterval==30){
         ninterval=0;         
         setNormalPalette()
      } 
      }, 9500 );    
   }   
   start();  