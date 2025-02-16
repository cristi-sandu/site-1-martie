const flowersCount = 25;
for (let i = 0; i < flowersCount; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower-bg';
    flower.innerHTML = `
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="4" fill="gold"/>
                    <circle cx="25" cy="25" r="12" fill="none" stroke="white" stroke-width="3"/>
                    <circle cx="35" cy="25" r="4" fill="white"/>
                    <circle cx="25" cy="35" r="4" fill="white"/>
                    <circle cx="15" cy="25" r="4" fill="white"/>
                    <circle cx="25" cy="15" r="4" fill="white"/>
                    <circle cx="30" cy="30" r="4" fill="white"/>
                    <circle cx="20" cy="20" r="4" fill="white"/>
                    <circle cx="30" cy="20" r="4" fill="white"/>
                    <circle cx="20" cy="30" r="4" fill="white"/>
                </svg>
            `;
    flower.style.left = Math.random() * 100 + '%';
    flower.style.top = "-60px";
    const duration = 7 + Math.random() * 10;
    flower.style.animationDuration = duration + "s";
    flower.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(flower);
}