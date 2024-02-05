let tab = document.querySelectorAll('.add-tab-buttons'),
        info = document.querySelector('.add-tab-buttons-container'),
        tabContent = document.querySelectorAll('.add-tabcontent');

    function hideTabContent(a){
        // create classes show and hide
        for(let i =a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i=0; i<tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })