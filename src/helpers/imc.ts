export type level = {
    id:number,
    title: string,
    color: string,
    icon: 'down' | 'up',
    imc: number[],
    yourImc?: number,
}


export const levels: level[] = [
    {   title: 'Magreza' , color: '#96A3AB' , icon: 'down', imc: [0, 18.5] ,id:1 },
    {   title: 'Normal' , color: '#0EAD69' , icon: 'up', imc : [18.6, 24.9] ,id:2},
    {   title: 'Sobrepeso' , color: '#E2B039' , icon: 'down', imc : [25, 30] ,id:3},
    {   title: 'Obesidade' , color: '#C3423F' , icon: 'down', imc : [30.1 , 99], id:1},

];

export const calculateImc = (height:number, weight:number) => {
    const imc = parseFloat((weight / (height * height)).toFixed(1))
    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            levels[i].yourImc = imc;
        return levels[i];
        
        }
    }
    return null;
}
