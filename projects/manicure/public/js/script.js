'use strict';
window.addEventListener('DOMContentLoaded',() =>{


    // initialization
    const timer = document.querySelector('.timer'),
        timerItems = timer.querySelectorAll('.timer__item'),
        forms = document.querySelectorAll('.needs-validation'),
        serviceItems = document.querySelectorAll('.service-section__items .item'),
        deadline = '2023-08-01 19:28:00 GMT+02:00'; //GMT+02:00 Paris

    // Functions call
    showTimer(timerItems, deadline);
    validation(forms);

    for (let i=0; i<serviceItems.length; i++){
        toggleClass(
            'savoir-plus_active', 
            serviceItems[i].querySelector('.savoir-plus'), 
            serviceItems[i].querySelector('.item__savoir-plus'),
            serviceItems[i].querySelector('.savoir-plus').querySelector('.savoir-plus__btn-close')
        );
    }
    // All functions

    // toggleClass(className: string, elem: NodeListOf<Element>, btn: Element, optional otherBtns: array)->none
    // this function toggles element class <className> on element click <btn>, <...otherBtns>
    function toggleClass(className, elem, btn, ...otherBtns){
        let toggle = function(){
            elem.classList.toggle(className);
        };
        btn.addEventListener('click', toggle);
        for (let i=0; i<otherBtns.length; i++){
            otherBtns[i].addEventListener('click', toggle);
        }
    }
    // validation(forms: list)->none
    // this function is disabling form submissions if there are invalid fields
    function validation(forms){
        // Fetch all the forms we want to apply custom Bootstrap validation styles to forms
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
    
            form.classList.add('was-validated');
            }, false);
        });    
    }
    
    // showTimer(selectors: list)->None 
    // this function shows the contents of the timer element every second
    function showTimer(selectors, date){
        let deadline = new Date(date),
            timeInterval = setInterval(updateTimer,1000, deadline);
        updateTimer(deadline);

        // updateTimer()->None 
        // this function change the contents of the timer
        // the timer is counting down, the difference between 'deadline' and today
        function updateTimer(deadline){
            let dif = deadline - new Date(),
                difArr = [
                    0, // Days
                    0, // Hours
                    0, // Minutes
                    0 // Seconds
                ];

            for (let j=0; j < difArr.length; ++j){
                let time = [86400000, 3600000, 60000, 1000];
                difArr[j] = Math.floor(dif / time[j]);
                dif -= difArr[j] * time[j];
            }
            
            difArr = getDateWithZero(difArr);
            const cols = ['Jours', 'Heures', 'Minutes', 'Secondes'];
            for (let i = 0; i < selectors.length; ++i){
                let text = cols[i];
                selectors[i].innerHTML = difArr[i] + `<span class="timer__span">${text}</span>`;
            }
            if (deadline <= new Date()){
                clearInterval(timeInterval);
            }
            
        }
    }


    // getDateWithZero(date: list)->list
    // this function converts to a number into a string by adding zero 
    // if the array elements in the parameter are digits, in not numbers
    // example:
    // getDateWithZero([1995, 12, 17, 3, 24, 0, 0]);
    // >>>[1995, 12, 17, '03', 24, '00', '00']
    function getDateWithZero(date){
        let copyDate = date.slice(0);
        copyDate.forEach((item, index) =>{
            if (item < 10){
                copyDate[index] = `0${item}`;
                if (item < 0){
                    copyDate = ["00", "00", "00", "00"];
                }
            }
        });
        return copyDate;
    }

});