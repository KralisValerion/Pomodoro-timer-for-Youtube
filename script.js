let notafiction = null;


let finderBar = setInterval(() => {
    if (document.querySelector("#center")) {
        let button = document.createElement("div")
        button.class = "pomodoro-button"
        button.style = "width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.1);; border-radius: 50%; margin-left: 5px; cursor: pointer;"

        // Пространство имён для SVG
        const svgNS = "http://www.w3.org/2000/svg";

        // Создаём сам SVG
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("height", "20px");
        svg.setAttribute("width", "20px");
        svg.setAttribute("version", "1.1");
        svg.setAttribute("id", "_x32_");
        svg.setAttribute("xmlns", svgNS);
        svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.setAttribute("viewBox", "0 0 512 512");
        svg.setAttribute("xml:space", "preserve");
        svg.setAttribute("fill", "#ffffff");
        svg.setAttribute("stroke", "#ffffff");
        svg.setAttribute("stroke-width", "4.608");
        svg.setAttribute("style", "position:relative; top: 10px; left: 10px;");


        // Пустые служебные <g> элементы
        const gBg = document.createElementNS(svgNS, "g");
        gBg.setAttribute("id", "SVGRepo_bgCarrier");
        gBg.setAttribute("stroke-width", "0");

        const gTracer = document.createElementNS(svgNS, "g");
        gTracer.setAttribute("id", "SVGRepo_tracerCarrier");
        gTracer.setAttribute("stroke-linecap", "round");
        gTracer.setAttribute("stroke-linejoin", "round");

        const gIconCarrier = document.createElementNS(svgNS, "g");
        gIconCarrier.setAttribute("id", "SVGRepo_iconCarrier");

        // Добавим стиль
        const style = document.createElementNS(svgNS, "style");
        style.setAttribute("type", "text/css");
        style.textContent = `.st0{fill:#ffffff;}`;

        // Группа с двумя <path>
        const gMain = document.createElementNS(svgNS, "g");

        // Первый путь
        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("class", "st0");
        path1.setAttribute("d", "M115.343,123.839c0.814,1.256,3.343,2.605,7.23,4.014c7.586-1.069,14.943-1.586,21.885-1.586 c15.579,0,30.166,2.469,42.438,7.145c17.87-5.567,43.412-11.694,69.108-11.694c25.694,0,51.228,6.126,69.108,11.694 c12.262-4.676,26.848-7.145,42.42-7.145c7.001,0,14.418,0.518,22.063,1.604c3.471-1.341,6.296-2.699,8.325-4.031 c42.2-28.139,53.036-81.183,47.41-69.931c-4.218,8.418-60.309,35.581-100.004,52.222c14.68-17.769,31.677-44.134,43.438-80.309 c0,0-60.978,52.382-98.867,74.887c-11.974-20.816-33.892-86.589-33.892-86.589s-18.567,49.515-20.358,81.412 c-30.21-16.929-63.354-51.474-72.485-74.538c-10.752-27.189-13.78,53.545,15.436,89.396c-1.095,0.162-2.206,0.315-3.344,0.476 c-39.111-16.072-100.454-47.91-104.926-54.86C64.708,47.255,73.143,101.954,115.343,123.839z M290.531,107.181l0.747,0.857 l-3.098-0.746L290.531,107.181z");

        // Второй путь
        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("class", "st0");
        path2.setAttribute("d", "M485.83,198.564c-38.169-57.253-117.544-70.584-160.338-52.195c-18.27-5.906-43.872-12.27-69.49-12.27 c-25.619,0-51.228,6.364-69.499,12.27c-42.794-18.388-122.168-5.058-160.338,52.195c-64.136,96.203-18.711,299.318,229.836,299.318 C504.541,497.882,549.974,294.767,485.83,198.564z M101.172,262.929c-17.099,0-30.947-13.857-30.947-30.948 c0-17.09,13.848-30.947,30.947-30.947c17.082,0,30.947,13.857,30.947,30.947C132.119,249.071,118.253,262.929,101.172,262.929z" /* обрезано */);

        // Собираем структуру
        gMain.appendChild(path1);
        gMain.appendChild(path2);

        gIconCarrier.appendChild(style);
        gIconCarrier.appendChild(gMain);

        svg.appendChild(gBg);
        svg.appendChild(gTracer);
        svg.appendChild(gIconCarrier);


        button.append(svg)
        document.querySelector("#center").append(button)


        button.addEventListener("click", () => {
            document.querySelector(".pomodo-container").style.display = (document.querySelector(".pomodo-container").style.display == "block") ? "none" : "block"
        })
        new PomodoroTimer()

        clearInterval(finderBar)
    }

}, 2000)

class PomodoroTimer {
    constructor() {
        console.log("скрипт инициализирован");

        this.createUI()


        document.querySelector(".button-start").addEventListener('click', () => this.startTimer())
        document.querySelector(".button-end").addEventListener('click', () => this.stopTimer())
        document.querySelector(".ytp-play-button").addEventListener('click', () => this.VideoIsPlay = !this.VideoIsPlay);
        document.querySelector(".html5-video-player").addEventListener("click", () => this.VideoIsPlay = !this.VideoIsPlay)
        document.addEventListener("keydown", (e) => {
            if (e.code == "keyk" || e.code == "Space") {
                this.VideoIsPlay = !this.VideoIsPlay;
            }
        })

        this.clickEvent = new Event("click");
        this.playbtn;



        this.start = new Date(0);
        this.workminutes;
        this.chillminutes;


        this.workInterval;
        this.chillInterval;


        this.isWork;
        this.VideoIsPlay = true;
    }


    createUI() {

        const container = document.createElement("div");
        container.className = "pomodo-container";
        container.style.cssText = `
                display:none;
                  background-color: hsl(0,0%,7%);
                  border: solid 3px #646464;
                  border-radius: 15px;
                  width: 250px;
                  height: 150px;
                  padding: 10px;
                  box-sizing: border-box;
                  position: fixed;
                  top: 56px;
                  right: 0px;
                  z-index: 9999;
                  color: white;
                `;

        // Заголовок
        const title = document.createElement("span");
        title.textContent = "pomodoro timer";
        title.style.cssText = `
                  text-align: center;
                  display: block;
                  margin-top: 5px;
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                  text-transform: uppercase;
                `;
        container.appendChild(title);

        // Таймер
        const timerDisplay = document.createElement("span");
        timerDisplay.className = "timer";
        timerDisplay.textContent = "00:00";
        timerDisplay.style.cssText = `
                  font-size: 30px;
                  color: white;
                  text-align: center;
                  display: block;
                  margin-top: 5px;
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                  text-transform: uppercase;
                `;
        container.appendChild(timerDisplay);

        // Форма
        const formContainer = document.createElement("div");
        formContainer.className = "form-container";
        formContainer.style.cssText = `
                  display: flex;
                  justify-content: space-between;
                  width: 130px;
                  margin: 5px auto 0;
                `;

        const inputWork = document.createElement("input");
        inputWork.className = "form-input_work";
        inputWork.type = "text";
        inputWork.value = "25";
        inputWork.style.width = "50px";
        inputWork.style.borderRadius = "25px";
        inputWork.style.textAlign = "center"
        inputWork.style.backgroundColor = "hsl(0,0%,7%)"
        inputWork.style.color = "white"
        inputWork.style.border = "1px solid hsl(0, 0%, 18.82%)"
        inputWork.style.padding = "4px"


        const inputChill = document.createElement("input");
        inputChill.className = "form-input_chill";
        inputChill.type = "text";
        inputChill.value = "5";
        inputChill.style.width = "50px";
        inputChill.style.textAlign = "center"

        inputChill.style.borderRadius = "25px";
        inputChill.style.backgroundColor = "hsl(0,0%,7%)"
        inputChill.style.color = "white"
        inputChill.style.border = "1px solid hsl(0, 0%, 18.82%)"
        inputChill.style.padding = "4px"

        formContainer.appendChild(inputWork);
        formContainer.appendChild(inputChill);
        container.appendChild(formContainer);

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        buttonContainer.style.cssText = `
        display: flex;
        justify-content: space-between;
        width: 130px;
        margin: 10px auto 0;
        `;

        const startBtn = document.createElement("button");
        startBtn.className = "button-start";
        startBtn.style.width = "60px";
        startBtn.style.cursor = "pointer";
        startBtn.type = "button";
        startBtn.textContent = "START"
        startBtn.style.borderRadius = "25px";
        startBtn.style.backgroundColor = "hsl(0, 0%, 18.82%)"
        startBtn.style.color = "white"
        startBtn.style.border = "1px solid hsl(0, 0%, 18.82%)"
        startBtn.style.padding = "4px"


        const stopBtn = document.createElement("button");
        stopBtn.className = "button-end";
        stopBtn.style.width = "60px";
        stopBtn.style.cursor = "pointer";
        stopBtn.textContent = 'STOP'
        stopBtn.type = "button";
        stopBtn.style.borderRadius = "25px";
        stopBtn.style.backgroundColor = "hsl(0, 0%, 18.82%)"
        stopBtn.style.color = "white"
        stopBtn.style.border = "1px solid hsl(0, 0%, 18.82%)"
        stopBtn.style.padding = "4px"

        buttonContainer.appendChild(startBtn);
        buttonContainer.appendChild(stopBtn);
        container.appendChild(buttonContainer);

        document.body.appendChild(container);
    }


    startWorkinterval() {
        if (this.isWork) {
            return;
        }
        this.isWork = true;



        if (!this.VideoIsPlay) {
            this.playbtn.dispatchEvent(this.clickEvent)
            this.VideoIsPlay = true;
        }



        let currentTime = new Date(this.start.getTime())
        currentTime.setMinutes(currentTime.getMinutes() + this.workminutes)

        this.workInterval = setInterval(() => {
            currentTime.setSeconds(currentTime.getSeconds() - 1)


            let minuts = currentTime.getMinutes();
            let seconds = currentTime.getSeconds();

            if (minuts < 10) {
                minuts = "0" + minuts
            }
            if (seconds < 10) {
                seconds = "0" + seconds
            }

            document.querySelector('.timer').textContent = minuts + ":" + seconds

            if (currentTime <= this.start) {
                notafiction.currentTime = 0;
                notafiction.play();


                clearInterval(this.workInterval);
                this.startChillInterval()
            }

        }, 1000)
    }

    startChillInterval() {
        this.isWork = false;

        if (this.VideoIsPlay) {
            this.playbtn.dispatchEvent(this.clickEvent)
            this.VideoIsPlay = false;

        }



        let currentTime = new Date(this.start.getTime())
        currentTime.setMinutes(currentTime.getMinutes() + this.chillminutes);

        this.chillInterval = setInterval(() => {
            currentTime.setSeconds(currentTime.getSeconds() - 1)

            let minutes = currentTime.getMinutes();
            let seconds = currentTime.getSeconds();

            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds
            }


            document.querySelector('.timer').textContent = minutes + ":" + seconds

            if (currentTime <= this.start) {
                notafiction.currentTime = 0;
                notafiction.play();

                clearInterval(this.chillInterval)
                this.startWorkinterval()
            }

        }, 1000)
    }




    startTimer() {
        if (!this.playbtn) {
            this.playbtn = document.querySelector('.ytp-play-button');
        }
        this.workminutes = document.querySelector(".form-input_work").value;
        this.chillminutes = document.querySelector(".form-input_chill").value;

        this.startWorkinterval();
    }

    stopTimer() {
        clearInterval(this.workInterval)
        clearInterval(this.chillInterval)

        if (this.VideoIsPlay) {
            this.playbtn.dispatchEvent(this.clickEvent)
            this.VideoIsPlay = false;

        }
        this.isWork = false;
        document.querySelector('.timer').textContent = "00:00"

    }

}




document.addEventListener("mousemove", () => {
    let audio = chrome.runtime.getURL("dzyn.mp3")

    notafiction = new Audio(audio);
    notafiction.load();
    notafiction.play();
    notafiction.pause();
    notafiction.volume = 0.1;
    notafiction.currentTime = 0;
    console.log("звук загружен");

}, { once: true })
