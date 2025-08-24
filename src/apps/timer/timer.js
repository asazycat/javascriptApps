


export default (function () {
    let minute = 0, second = 0, deci_second = 0, s = 0, m =0 , h = 0, date = 0, intervalId;
    const buttons = document.querySelector('#buttons');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const reset = document.querySelector('#reset')
    const deci_seconds = document.querySelector('#deci_seconds');
    const seconds = document.querySelector('#seconds')
    const minutes = document.querySelector('#minutes')
    const timeElasped = document.querySelector('#timeElasped')
    const clockContext = document.querySelector('#canvasClock')
    const clockDiv = document.querySelector(`.clock`)
    const clock = clockContext.getContext('2d')
  
    window.onload = function () {
        setInterval(() => {
                 date = new Date()
           
            s = date.getSeconds() 
            m = date.getMinutes() 
            h = date.getHours() % 12
       
        clock.reset()
        clock.beginPath();
        clock.moveTo(300, 150);
         clock.arc(150, 150, 150, 0, 2 * Math.PI)
        clock.closePath()
        clock.stroke()
        
            for (let i = 30; i <= 360; i += 30) {
                clock.beginPath();
                clock.moveTo(300, 150);
                clock.fill()
                clock.font = "25px serif";
                clock.fillText(i/30 ,Math.cos((i - 90)* (Math.PI / 180)) * 100 + 140 , Math.sin((i - 90) * (Math.PI / 180)) * 100 + 150 )
                clock.closePath()
                clock.stroke()
            }

        clock.beginPath()
        clock.moveTo(150, 150) 
        clock.strokeStyle = 'blue'
        clock.arc(150, 150, 130, (Math.PI / 30) * s - Math.PI/2, (Math.PI / 30) * s - Math.PI/2)
        clock.stroke()
            

        clock.beginPath()
        clock.moveTo(150, 150)
        clock.strokeStyle = 'red'
        clock.arc(150, 150, 100, (Math.PI / 30) * m - Math.PI/2, (Math.PI / 30) * m - Math.PI/2)
        clock.stroke()
            
        clock.beginPath()
        clock.moveTo(150, 150)
        clock.strokeStyle = 'green'
        clock.arc(150, 150, 50, (Math.PI / 6) * (h + m/60) - Math.PI/2, (Math.PI / 6) * (h + m/60) - Math.PI/2)
        clock.stroke()
       
        if (date.getSeconds() === 0) {
                
              
            clock.beginPath()
            clock.moveTo(150, 150)
            clock.strokeStyle = 'red'
            clock.arc(150, 150, 100, (Math.PI / 30) * m - Math.PI/2, (Math.PI / 30) * m - Math.PI/2)
            clock.stroke()
            }
            
        if (date.getMinutes() === 0) {
                
               
            clock.beginPath()
            clock.moveTo(150, 150)
            clock.strokeStyle = 'green'
            clock.arc(150, 150, 50, (Math.PI / 6) * (h + m/60) - Math.PI/2 , (Math.PI / 6) * (h + m/60) - Math.PI/2)
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