

//shuffle and display 7 cards




    
    
    console.log(group21)
    button1.addEventListener('click', () => {
        for (i = 0; i < 7; i++) {
            group21.push(group1[i])

        }
        for (i = 0; i < 7; i++) {
            group21.push(group2[i])
        }
        for (i = 0; i < 7; i++) {
            group21.push(group3[i])
        }
    })
    button2.addEventListener('click', (event) => {
        document.querySelector('ol').innerHTML = ""
        for (let i = 0; i < group3.length; i++) {
            document.querySelector('ol').innerHTML += `
            <li class="card" id="a0"><span class="top" >${group3[i]}</span><span class="cardType">🧙‍♂️</span><span class="mirror">🧙‍♂️</span><span class="bottom">${group3[i]}</span></li>
            `        }
    })
})



// shuffle2 = group1 += group2 += group3
// console.log(shuffle2)