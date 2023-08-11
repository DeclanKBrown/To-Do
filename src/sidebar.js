import inbox from './inbox.js'

export default function sidebar() {

    const body = document.body; //Get the body

    const aside = document.createElement('aside'); //Side bar main

    //Open/close 
    const asideUpperCont = document.createElement('div');
    asideUpperCont.classList.add('aside-upper-cont');

    const asideUpperInner = document.createElement('div');
    asideUpperInner.classList.add('aside-upper-inner');

    const asideTogEm = document.createElement('span');
    asideTogEm.classList.add('menu-tog');
    asideTogEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'

    const asideInner = document.createElement('div'); //side bar inner
    asideInner.classList.add('aside-inner');

    const asideTop = document.createElement('div'); //top
    asideTop.classList.add('aside-top');

    //Inbox tab
    const inboxCont = document.createElement('div');
    inboxCont.classList.add('side-tab');
    inboxCont.classList.add('side-tab-sel');

    const inboxEm = document.createElement('span'); //inbox tab emoji
    inboxEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>inbox</title><path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';

    const inboxText = document.createElement('h1'); //inbox tab text
    inboxText.innerHTML = 'Inbox';

    //timed tabs container
    const timeCont = document.createElement('div'); 
    timeCont.classList.add('time-container');

    const todayCont = document.createElement('div'); //today tab container
    todayCont.classList.add('side-tab');

    const todayEm = document.createElement('span'); //today tab emoji
    todayEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>';

    const todayText = document.createElement('h1'); //today tab text
    todayText.innerHTML = 'Today';

    const weekCont = document.createElement('div'); //week tab container
    weekCont.classList.add('side-tab');

    const weekEm = document.createElement('span'); //week tab emoji
    weekEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-range</title><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /></svg>';

    const weekText = document.createElement('h1'); //week tab text
    weekText.innerHTML = 'Week';

    const monthCont = document.createElement('div'); //month tab container
    monthCont.classList.add('side-tab');

    const monthEm = document.createElement('span'); //month tab emoji
    monthEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-month</title><path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>';

    const monthText = document.createElement('h1'); //month tab text
    monthText.innerHTML = 'Month';

    const anytimeCont = document.createElement('div'); //anytime tab container
    anytimeCont.classList.add('side-tab');

    const anytimeEm = document.createElement('span'); //anytime tab emoji
    anytimeEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note</title><path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z" /></svg>';

    const anytimeText = document.createElement('h1'); //anytime tab text
    anytimeText.innerHTML = 'Anytime';

    //aside bottom container
    const asideBottom = document.createElement('div');
    asideBottom.classList.add('aside-bottom');

    const asideBottomInner = document.createElement('div');
    asideBottomInner.classList.add('aside-bottom-inner');

    //Add List container
    const addListCont = document.createElement('div');
    addListCont.classList.add('side-tab');

    const addListEm = document.createElement('span');
    addListEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';

    const addListText = document.createElement('h1');
    addListText.innerHTML = 'Add Project';

    //Projects 
    const projectsCont = document.createElement('div');
    projectsCont.classList.add('projects-container');

    const projectsHeadCont = document.createElement('div');
    projectsHeadCont.classList.add('side-tab');

    const projectsEm = document.createElement('span');
    projectsEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>database</title><path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" /></svg>'

    const projectsHead = document.createElement('h1');
    projectsHead.innerHTML = 'Projects';

    
    //APEND
    body.appendChild(aside);
    aside.appendChild(asideUpperCont);
    asideUpperCont.appendChild(asideUpperInner);
    asideUpperInner.appendChild(asideTogEm);
    aside.appendChild(asideInner);
    asideInner.appendChild(asideTop);
    asideTop.appendChild(inboxCont);
    inboxCont.appendChild(inboxEm);
    inboxCont.appendChild(inboxText);
    asideTop.appendChild(timeCont);
    timeCont.appendChild(todayCont);
    todayCont.appendChild(todayEm);
    todayCont.appendChild(todayText);
    timeCont.appendChild(weekCont);
    weekCont.appendChild(weekEm);
    weekCont.appendChild(weekText);
    timeCont.appendChild(monthCont);
    monthCont.appendChild(monthEm);
    monthCont.appendChild(monthText);
    timeCont.appendChild(anytimeCont);
    anytimeCont.appendChild(anytimeEm);
    anytimeCont.appendChild(anytimeText);
    aside.appendChild(asideBottom);
    asideBottom.appendChild(asideBottomInner);
    asideBottomInner.appendChild(addListCont);
    addListCont.appendChild(addListEm);
    addListCont.appendChild(addListText);
    asideTop.appendChild(projectsCont);
    projectsCont.appendChild(projectsHeadCont);
    projectsHeadCont.appendChild(projectsEm);
    projectsHeadCont.appendChild(projectsHead);

    //event listeners
    inboxCont.addEventListener('click', () => {
        removeSel();
        inboxCont.classList.add('side-tab-sel');
        removeContent();
        inbox();
    });

    todayCont.addEventListener('click', () => {
        removeSel();
        todayCont.classList.add('side-tab-sel');
        removeContent();
    });

    weekCont.addEventListener('click', () => {
        removeSel();
        weekCont.classList.add('side-tab-sel');
        removeContent();
    });

    monthCont.addEventListener('click', () => {
        removeSel();
        monthCont.classList.add('side-tab-sel');
        removeContent();
    });

    anytimeCont.addEventListener('click', () => {
        removeSel();
        anytimeCont.classList.add('side-tab-sel');
        removeContent();
    });

    projectsHeadCont.addEventListener('click', () => {
        removeSel();
        projectsHeadCont.classList.add('side-tab-sel');
        removeContent();
    });

    addListCont.addEventListener('click', createProj);

    //Creates new Project Button
    function createProj() {
        const newProject = document.createElement('div');
        newProject.classList.add('side-tab');
        newProject.classList.add('new-project');

        const newProjectEm = document.createElement('span');
        newProjectEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>timelapse</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.58 13.53,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.59,13.9 18.59,10.1 16.24,7.76Z" /></svg>';

        const newProjectText = document.createElement('span');
        newProjectText.innerHTML = 'New Project';

        projectsCont.appendChild(newProject);
        newProject.appendChild(newProjectEm);
        newProject.appendChild(newProjectText)

        newProject.addEventListener('click', () => {
            removeSel();
            newProject.classList.add('side-tab-sel');
            removeContent();
        })

        //Allowe user to input project name
        newProjectText.addEventListener('click', () => {
            if (newProject.classList.contains('side-tab-sel')) {
                const inputField = document.createElement('input');
                inputField.type = 'text';
                if (newProjectText.innerHTML !== 'New Project') {
                    inputField.value = newProjectText.innerHTML;
                };
    
                newProjectText.parentNode.replaceChild(inputField, newProjectText);

                inputField.focus();
              
                // Handle blur event to restore the span when clicking outside the input
                inputField.addEventListener('blur', function() {
                    if (inputField.value === '') {
                        inputField.value = 'New Project';
                    }
                  newProjectText.innerHTML = inputField.value;
                  inputField.parentNode.replaceChild(newProjectText, inputField);
                });
            }
        });
    };

    //Remove Selected Tab Styling
    function removeSel() {
        inboxCont.classList.remove('side-tab-sel');
        todayCont.classList.remove('side-tab-sel');
        weekCont.classList.remove('side-tab-sel');
        monthCont.classList.remove('side-tab-sel');
        anytimeCont.classList.remove('side-tab-sel');
        projectsHeadCont.classList.remove('side-tab-sel');
        let projes = document.querySelectorAll('.new-project');
        console.log(projes);
        if (projes) {
            projes.forEach(proj => {
                proj.classList.remove('side-tab-sel'); 
            });
        }
    }

    //Remove The Content From Main
    function removeContent() {
        const main = document.querySelector('main');
        if (main) {
            body.removeChild(main);
        }
    };
}