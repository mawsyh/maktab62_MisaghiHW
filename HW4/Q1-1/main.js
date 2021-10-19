function choices(arr1, arr2) {
    

    for( let i = 0 ; i < arr2.length ; i++ ) {
        if ( i === 0 ) { console.log(`'${i+1}${arr1[3]} choice is ${color[i]}.'`) }
        if ( i === 1 ) { console.log(`'${i+1}${arr1[2]} choice is ${color[i]}.'`) }
        if ( i === 2 ) { console.log(`'${i+1}${arr1[0]} choice is ${color[i]}.'`) }
        if ( i > 2 ) {
            console.log(`'${i+1}${arr1[1]} choice is ${color[i]}.'`)
            }
    }  
}


let o = ['rd', 'th', 'nd', 'st']
let color = ['Blue', 'Red', 'Green', 'Yellow', 'Orange', 'Brown']

choices(o, color)