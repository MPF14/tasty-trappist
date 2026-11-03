// const cat = document.getElementById('cat-sprite');
//     const catSittingUrl = "url('../../assets/sprites/cat/sitting.png')";
//     const catSleepingUrl = "url('../../assets/sprites/cat/sleeping.png')";
//     const catStandingUrl = "url('../../assets/sprites/cat/standing.png')";
//     const catPouncingUrl = "url('../../assets/sprites/cat/pouncing.png')";
//     const catBackUrl = "url('../../assets/sprites/cat/back.png')";
//     const catLeftUrl = "url('../../assets/sprites/cat/left.png')";
//     const catRightUrl = "url('../../assets/sprites/cat/right.png')";
//     const set = [[catSittingUrl, 4], [catSleepingUrl, 2], [catStandingUrl, 4], [catPouncingUrl, 2], [catBackUrl, 4], [catLeftUrl, 4], [catRightUrl, 4]];
//     cat.addEventListener('click', () => {
//       const randomIndex = Math.floor(Math.random() * set.length);
//       cat.style.setProperty('--cat-url', set[randomIndex][0]);
//       cat.style.setProperty('--cat-frames', set[randomIndex][1]);
//     });