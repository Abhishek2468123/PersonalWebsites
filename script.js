document.addEventListener("DOMContentLoaded", function() {
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.append(container);

    let s = document.createElement("span");
    s.setAttribute("id", "second");
    s.innerText = "SS";

    let m = document.createElement("span");
    m.setAttribute("id", "minute");
    m.innerText = "MM";

    let h = document.createElement("span");
    h.setAttribute("id", "hour");
    h.innerText = "HH";

    container.append(h,m,s, document.createElement("br"));

    let hBox = document.createElement("span");
    hBox.setAttribute("id", "hourBox");
    hBox.innerText = "00";

    let mBox = document.createElement("span");
    mBox.setAttribute("id", "minuteBox");
    mBox.innerText = "00";

    let sBox = document.createElement("span");
    sBox.setAttribute("id", "secondBox");
    sBox.innerText = "00";

    container.append(hBox, mBox, sBox);

    container.appendChild(document.createElement("br"));

    let st = document.createElement("button");
    st.setAttribute("id", "button1");
    st.innerText="Start";
    
    let bt = document.createElement("button");
    bt.setAttribute("id", "button2");
    bt.innerText="Stop";

    let rt = document.createElement("button");
    rt.setAttribute("id", "button3");
    rt.innerText = "Reset";
    
    container.append(st, bt, rt);

    container.appendChild(document.createElement("br"));

    let inc = document.createElement("button");
    inc.setAttribute("id", "button4");
    inc.innerText = "2X";
    container.appendChild(inc);

    let update = () => {
        let sec = Number(sBox.innerText);
        let min = Number(mBox.innerText);
        let hour = Number(hBox.innerText);
        
        sec++;

        if(sec >= 60){
            sec = 0;
            min++;
        }

        if(min >= 60){
            min = 0;
            hour++;
        }

        if(hour >= 60){
            hour = 0;
        }

        sBox.innerText = sec.toString().padStart(2,"0");
        mBox.innerText = min.toString().padStart(2,"0");
        hBox.innerText = hour.toString().padStart(2,"0");

    };

    let intervalId;
    let isClicked = false;
    let time = 1000;
    st.onclick = () => {
        if(!isClicked) {
            alert("Started");
            intervalId = setInterval(update, time);
            isClicked = true;
        }
    }

    bt.onclick = () => {
        alert("Stopped");
        if(isClicked){
            clearInterval(intervalId);
            isClicked = false;
        }
    }

    rt.onclick = () => {
        if(isClicked){
            clearInterval(intervalId);
            isClicked = false;
        }
        time = 1000;
        sBox.innerText = "00";
        mBox.innerText = "00";
        hBox.innerText = "00";
    }

    inc.onclick = () => {
        time /= 2;
        if (time < 12) {
            time = 125;
        }
        if (isClicked) {
            clearInterval(intervalId);
            intervalId = setInterval(update, time);
        }
    }
    
});
