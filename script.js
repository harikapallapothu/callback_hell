var display = document.createElement('h1');
        var num =10;
        var data = function(){
            if(num>0){
                
                display.innerText=num;
            
            setTimeout(data,1000)
            }
            if(num==0){
                
                display.innerText="Happy Independence Day"
            }
            num--;
        }
        setTimeout(data,1000);
        document.body.append(display);