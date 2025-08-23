


(function () {
    let minute = 0, second = 0, deci_second = 0, intervalId, stopClock;
    const buttons = document.querySelector('#buttons');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const reset = document.querySelector('#reset')
    const deci_seconds = document.querySelector('#deci_seconds');
    const seconds = document.querySelector('#seconds')
    const minutes = document.querySelector('#minutes')
    const timeElasped = document.querySelector('#timeElasped')
 
    let date = 0
    let clockContext = document.querySelector('#canvasClock')
    const clock = clockContext.getContext('2d')
    
    let s = 0, m =0 , h = 0
    clock.beginPath();
    clock.moveTo(450, 250);
     
        clock.arc(250, 250, 200, 0 , 2 * Math.PI)
        clock.closePath()
        clock.stroke()
    window.onload = function () {
        stopClock = setInterval(() => {
                 date = new Date()
            console.log(date.getHours())
            s = date.getSeconds() / 30
            m = date.getMinutes() / 30
            h = date.getHours() / 30
        s += 1 / 30
        clock.reset()
        clock.beginPath();
        clock.moveTo(450, 250);
            clock.arc(250, 250, 200, 0, 2 * Math.PI)
            clock.fillText('6', 250, 450)
        clock.closePath()
        clock.stroke()
            

        clock.beginPath()
        clock.moveTo(250, 250)
        clock.arc(250, 250, 200, (1.5 + s) * Math.PI, 0)
        clock.stroke()
            

        clock.beginPath()
        clock.moveTo(250, 250)
        clock.arc(250, 250, 200, (1.5 + m)  * Math.PI, 0)
        clock.stroke()
            
        clock.beginPath()
        clock.moveTo(250, 250)
        clock.arc(250, 250, 200, 2 * (1.5 + h / 12)  * Math.PI, 0)
        clock.stroke()
       
        if (date.getSeconds() === 0) {
                
                m += 1 / 30
            clock.beginPath()
            clock.moveTo(250, 250)
            clock.arc(250, 250, 200, (1.5 + m)  * Math.PI, 0)
            clock.stroke()
            }
            
        if (date.getMinutes() === 0) {
                
                h += 1 / 30
            clock.beginPath()
            clock.moveTo(250, 250)
            clock.arc(250, 250, 200, 2 * (1.5 + h / 12)  * Math.PI, 0)
            clock.stroke()
         }
    }, 1000)
    } 
   
    

    




















    buttons.addEventListener('click', function (e) {
        
        if (e.target === start) {
            start.style.display = 'none'
            stop.style.display = 'block'
            timeElasped.innerText = ''

               intervalId = setInterval(() => {
                   deci_second++ 
                   deci_seconds.innerText = `${deci_second.toString().padStart('2', '0')}`
                   
                   if (deci_second % 10 === 0) {
                       deci_second = 0
                       second++
                       seconds.innerText = `${second.toString().padStart('2', '0')}`

                           if (second % 60 === 0) {
                       second = 0;
                       minute++
                       minutes.innerText = `${minute.toString().padStart('2', '0')}`
                   }
            
                   }

               
         },100)

        } else if (e.target === stop) {
           
            clearInterval(intervalId)
            stop.style.display = 'none'
            start.style.display = 'block'
        } else if (e.target === reset) {
             clearInterval(stopClock)
            clearInterval(intervalId)
            timeElasped.innerText = `${minute > 1 ? `${minute} minutes` : `${minute} minute`}  ${second > 1 ? `${second} seconds` : `${second} second`}  ${deci_second > 1 ? `${deci_second} deciseconds` : `${deci_second} decisecond`} `
            minute = 0, second = 0, deci_second = 0
            deci_seconds.innerText = `${deci_second.toString().padStart('2', '0')}`
            seconds.innerText = `${second.toString().padStart('2', '0')}`
            minutes.innerText = `${minute.toString().padStart('2', '0')}`
        }
        else {
            e.stopPropagation()
        }
    })

})();