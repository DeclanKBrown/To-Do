export default function sidebar() {

    const body = document.body; //Get the body

    const aside = document.createElement('aside'); //Side bar main

    const asideInner = document.createElement('div'); //side bar inner
    asideInner.classList.add('aside-inner');

    const asideTop = document.createElement('div'); //top
    asideTop.classList.add('aside-top');

    //Inbox tab
    const inboxCont = document.createElement('div');
    inboxCont.classList.add('side-tab');

    const inboxEm = document.createElement('span'); //inbox tab emoji
    inboxEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>inbox</title><path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';

    const inboxText = document.createElement('span'); //inbox tab text
    inboxText.innerHTML = 'Inbox';

    //timed tabs container
    const timeCont = document.createElement('div'); 
    timeCont.classList.add('time-container');

    const todayCont = document.createElement('div'); //today tab container
    todayCont.classList.add('side-tab');

    const todayEm = document.createElement('span'); //today tab emoji
    todayEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>';

    const todayText = document.createElement('span'); //today tab text
    todayText.innerHTML = 'Today';

    const weekCont = document.createElement('div'); //week tab container
    weekCont.classList.add('side-tab');

    const weekEm = document.createElement('span'); //week tab emoji
    weekEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-range</title><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /></svg>';

    const weekText = document.createElement('span'); //week tab text
    weekText.innerHTML = 'Week';

    const monthCont = document.createElement('div'); //month tab container
    monthCont.classList.add('side-tab');

    const monthEm = document.createElement('span'); //month tab emoji
    monthEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-month</title><path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>';

    const monthText = document.createElement('span'); //month tab text
    monthText.innerHTML = 'Month';

    const anytimeCont = document.createElement('div'); //anytime tab container
    anytimeCont.classList.add('side-tab');

    const anytimeEm = document.createElement('span'); //anytime tab emoji
    anytimeEm.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note</title><path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z" /></svg>';

    const anytimeText = document.createElement('span'); //anytime tab text
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

    const addListText = document.createElement('span');
    addListText.innerHTML = 'Add List'

    
    //APEND
    body.appendChild(aside)
    aside.appendChild(asideInner)
    asideInner.appendChild(asideTop)
    asideTop.appendChild(inboxCont)
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
    monthCont.appendChild(monthText)
    timeCont.appendChild(anytimeCont);
    anytimeCont.appendChild(anytimeEm);
    anytimeCont.appendChild(anytimeText);
    aside.appendChild(asideBottom);
    asideBottom.appendChild(asideBottomInner)
    asideBottomInner.appendChild(addListCont)
    addListCont.appendChild(addListEm);
    addListCont.appendChild(addListText);

}