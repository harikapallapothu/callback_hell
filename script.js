var display = document.createElement('h1');
var num = 10;

setTimeout(()=>{
    display.innerText = num;
    num--;
        setTimeout(()=>{
            display.innerText = num;
            num--;
            setTimeout(()=>{
                display.innerText = num;
                num--;
                setTimeout(()=>{
                    display.innerText = num;
                    num--;
                    setTimeout(()=>{
                        display.innerText = num;
                        num--;
                        setTimeout(()=>{
                            display.innerText = num;
                            num--;
                            setTimeout(()=>{
                                display.innerText = num;
                                num--;
                                setTimeout(()=>{
                                    display.innerText = num;
                                    num--;
                                    setTimeout(()=>{
                                        display.innerText = num;
                                        num--;
                                        setTimeout(()=>{
                                            display.innerText = num;
                                            num--;
                                            setTimeout(()=>{
                                                display.innerText = "Happy Independence Day";
                                                
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
},1000)

document.body.append(display);



