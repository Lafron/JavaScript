export default function getRandomColor(){
    const colors = {
        'red': Math.round(255 * Math.random()), 
        'green': Math.round(255 * Math.random()), 
        'blue': Math.round(255 * Math.random())
    };

    const color = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
    
    return color;
};