   // desc start
   var icons=document.querySelector(".plus_icons_pro_desc").addEventListener("click",function()
   {
       appendDesc();
       
   });
   // var icons=document.querySelector(".minas_icons").addEventListener("click",function()
   // {
   //     appendOffer()
   // })
   function appendDesc()
   {
    console.log("Hi");
    document.querySelector(".special_price_desc").innerHTML=""
    var div=document.querySelector(".special_price_desc");
   
   var text=document.createElement("p");
   text.textContent="This Official Wonder Woman Know Your Power Boyfriend T-Shirt will make you look stronger. Style your blue t-shirt with shrug, ankle length denim, heels & a satchel bag "
   var symbol=document.createElement("p");
   symbol.textContent="-";
   symbol.addEventListener("click",function()
   {
      
       emptyDesc()
   })
   div.append(text,symbol)
   }
   function emptyDesc()
   {
       document.querySelector(".special_price_desc").innerHTML="";
   }
   // desc ends
   // offer start
   
   document.querySelector(".plus_icons_offer").addEventListener("click",function()
   {
       appendOffer();
       
   });
   // var icons=document.querySelector(".minas_icons").addEventListener("click",function()
   // {
   //     appendOffer()
   // })
   function appendOffer()
   {
    console.log("hi");
    document.querySelector(".special_price_offer").innerHTML=""
   var div=document.querySelector(".special_price_offer");
   var div1=document.createElement("div");
   var div2=document.createElement("div");
   var image=document.createElement("img");
   image.setAttribute("src","https://images.bewakoof.com/web/discount-1-2x-1625212811.png");
   var image1=document.createElement("img");
   image1.setAttribute("src","https://images.bewakoof.com/web/discount-1-2x-1625212811.png");
   var text=document.createElement("p");
   text.textContent="Get Rs.100 instant discount on your First Purchase above Rs.499. Coupon code - NEW100"
   var text1=document.createElement("p");
   text1.textContent=" Get Rs.200 instant discount on your First Purchase above Rs.899. Coupon code -NEW200"
   var symbol=document.createElement("p");
   symbol.textContent="-";
   symbol.addEventListener("click",function()
   {
      
       emptyDivOffer()
   })
   div1.append(image,text);
   div2.append(image1,text1)
   div.append(div1,div2,symbol);
   }
   function emptyDivOffer()
   {
       document.querySelector(".special_price_offer").innerHTML="";
       console.log("jo")
   }
   // offer ends
   
   // policy start
   var icons=document.querySelector(".plus_icons_policy").addEventListener("click",function()
   {
       appendPolicy();
      
       
   });
   // var icons=document.querySelector(".minas_icons").addEventListener("click",function()
   // {
   //     appendOffer()
   // })
   function appendPolicy()
   {
    console.log("hi");
    document.querySelector(".special_price_policy").innerHTML=""
   var div=document.querySelector(".special_price_policy");
   
   
   var text=document.createElement("p");
   text.textContent="Easy returns upto 15 days of delivery. Exchange available on select pincodes"
   var symbol=document.createElement("p");
   symbol.textContent="-";
   symbol.addEventListener("click",function()
   {
      
       emptyDivPolicy()
   })
   div.append(text,symbol)
   
   }
   function emptyDivPolicy()
   {
       document.querySelector(".special_price_policy").innerHTML="";
   }
   // policy ends
    
   