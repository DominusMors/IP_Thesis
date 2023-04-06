

/*=============================================
                YEARS OF EARTH
==============================================*/


let rangevalue = document.getElementById("myRange");
let setvalue = document.getElementById("rangevalue");
let imgchangevalue = document.getElementById("imgchange")
    //setvalue.innerHTML = rangevalue.value;
    //console.log(rangevalue.value)
    
//Now will use oninput event.
rangevalue.oninput = function() {
    let getvalue = rangevalue.value;
    setvalue.innerHTML = this.value;
if (getvalue > 0 && getvalue < 3) {              
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_750m_years.png")
} else if (getvalue >= 4 && getvalue <= 7) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_540m_years.png")
} else if (getvalue >= 8 && getvalue <= 11) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_500m_years.png")
} else if (getvalue >= 12 && getvalue <= 15) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_470m_years.png")
} else if (getvalue >= 16 && getvalue <= 19) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_450m_years.png")
} else if (getvalue >= 20 && getvalue <= 23) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_430m_years.png")
} else if (getvalue >= 24 && getvalue <= 27) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_400m_years.png")
} else if (getvalue >= 28 && getvalue <= 31) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_370m_years.png")
} else if (getvalue >= 32 && getvalue <= 35) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_340m_years.png")
} else if (getvalue >= 36 && getvalue <= 39) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_300m_years.png")
} else if (getvalue >= 40 && getvalue <= 43) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_280m_years.png")
} else if (getvalue >= 44 && getvalue <= 47) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_260m_years.png")
} else if (getvalue >= 48 && getvalue <= 51) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_240m_years.png")
} else if (getvalue >= 52 && getvalue <= 55) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_220m_years.png")
} else if (getvalue >= 56 && getvalue <= 59) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_200m_years.png")
} else if (getvalue >= 60 && getvalue <= 63) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_170m_years.png")
} else if (getvalue >= 64 && getvalue <= 67) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_150m_years.png")
} else if (getvalue >= 68 && getvalue <= 71) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_120m_years.png")
} else if (getvalue >= 72 && getvalue <= 75) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_105m_years.png")
} else if (getvalue >= 76 && getvalue <= 79) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_90m_years.png")
} else if (getvalue >= 80 && getvalue <= 83) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_66m_years.png")
} else if (getvalue >= 84 && getvalue <= 87) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_50m_years.png")
} else if (getvalue >= 88 && getvalue <= 91) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_35m_years.png")
} else if (getvalue >= 92 && getvalue <= 95) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_20m_years.png")
} else if (getvalue >= 100) {
    imgchangevalue.setAttribute("src", "https://dominusmors.github.io/IP_Thesis/img/range-slider/earth_0m_years.png")
}

}