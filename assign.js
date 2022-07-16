
var slideIndex = 1;
showDivs(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesfade");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}

               var num=1;
                setInterval(function(){
                    document.getElementById("btn_" + num).checked=true;
                    num=num+1;
                    if (num > 3){
                        num=1;   
                    }
                },3000)
                
                function search(){
                    var text=document.getElementById("filter").value.toLowerCase();
                    var items=document.getElementsByClassName("li");
                    Array.from(items).forEach((item)=>{
                        itemvalue=item.firstChild.textContent;
                        if(itemvalue.toLowerCase().indexOf(text)!=-1){
                            item.style.display="block";
                        }
                        else{
                            item.style.display="none";
                        }
                    });
                    // alert(text)
                }

      
      function Hide()
      {
        var  t =document.getElementById("BAR");
        if(t.style.display !=="none")
        {
            t.style.display="none";
        }
        else{
            t.style.display="block";
        }
      }