const changeColor = (isChange)=>{
    const colors = [
        '#c3dae4', '#fda6bc', '#c4deaa',
        '#10CA2E', '#646DE9', '#FFD252', '#FF842F', '#278EE4', 
        '#07D6AA', '#FCA84F', '#0CC429', '#7E5AD6', '#FB5D5E'
    ]

    const color = localStorage.getItem('color')
    if(!isChange){
        return color
    }
    const index = colors.findIndex(item => item === color)
    if(index === -1 || index === (colors.length-1)){
        return colors[0]
    }
    return colors[index+1]
}



export {
    changeColor
}