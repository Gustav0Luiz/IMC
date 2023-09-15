
import { useState } from "react";
import { levels, calculateImc, level } from "@/helpers/imc";
import upImage from '../assets/up.png'
import downImage from '../assets/down.png'
import Image from 'next/image'

export const Container = () => {
    const [heightField, setHeightField] = useState(0);
    const [weightField, setWeightField] = useState(0);
    const [showItem, setShowItem] = useState<level | null>(null);

    const handleCalcBtn = () => {
        if(heightField && weightField){
            setShowItem(calculateImc(heightField,weightField))
        }else {alert('Preencha todos os campos!')}
    }
    const handleBackBtn = () =>{
        setShowItem(null);
        setHeightField(0);
        setWeightField(0);
    }

    return(
        <div className="flex max-w-xl lg:max-w-5xl m-auto gap-4 lg:gap-20 font-sans px-3 flex-col lg:flex-row">
            <div className="flex-1 ">
                <h1 className="font-bold text-3xl lg:text-4xl mb-9 text-center lg:text-left text-cyan-700/90">Calcule o seu IMC.</h1>
                <p className=" text-justify text-sm lg:text-lg mb-10 leading-6">IMC é a sigla para Índicie de Massa Corpórea, parametro adotado pela OMS para calcular o peso ideal de cada pessoa.</p>
                <input className="placeholder:text-cyan-700/90 bg-white/70 text-black w-full rounded-md border-b-2 border-solid border-b-gray-800/30 px-4 py-2 mb-4 text-base outline-none" type="number" value={heightField > 0 ? heightField : ''} onChange={e => setHeightField(parseFloat(e.target.value))} placeholder="Digite a sua Altura. Ex (1.75)" disabled={showItem ? true : false}/>
                <input className="placeholder:text-cyan-700/90 bg-white/70 text-black w-full rounded-md border-b-2 border-solid border-b-gray-800/30 px-4 py-2 mb-4 text-base outline-none" type="number" value={weightField > 0 ? weightField : ''} onChange={e => setWeightField(parseFloat(e.target.value))} placeholder="Digite a seu Peso. Ex (70)" disabled={showItem ? true : false} />
                <button className="w-full mt-5 lg:mt-9 px-4 py-2 rounded-lg text-white bg-cyan-700/90 text-lg hover:opacity-80 transition duration-500 ease-in-out disabled:hover:opacity-100 disabled:bg-gray-400" onClick={handleCalcBtn} disabled={showItem ? true : false}>Calcular</button>
            </div>
            {!showItem &&
                <div className="flex-1 flex ">
                    <div className="grid flex-1 grid-cols-2 gap-5">
                        {levels.map((item) =>( 
                            <div className="flex-1 flex font-medium  text-white rounded-xl gap-5 flex-col p-5 text-xl items-center justify-center " style={{backgroundColor:item.color}}>   
                                <h1 className="text-center  text-xl lg:text-2xl">{item.title}</h1>   
                                <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/20 items-center flex justify-center ">{item.icon === 'up' ? <Image alt={'up'} width={30} src={upImage}/> : <Image alt={'down'} width={30} src={downImage}/>  }</div>
                                <div className="text-sm font-normal">{`IMC está entre ${item.imc[0]} e ${item.imc[1]}`}</div>
                            </div>
                        ))}

                    </div>
                
                </div>
            }
            {showItem &&

                <div className="grid flex-1 grid-cols-1 gap-5">
                    <div className="flex-1 flex font-medium  text-white rounded-xl gap-5 flex-col p-5 text-xl items-center justify-center" style={{backgroundColor:showItem.color}}>   
                    <h1 className="text-center text-4xl">{showItem.title}</h1>   
                    <div className="w-14 h-14 rounded-full bg-black/20 items-center flex justify-center ">{showItem.icon === 'up' ? <Image alt={'up'} width={30} src={upImage}/> : <Image alt={'down'} width={30} src={downImage}/>  }</div>
                    <div className="text-xl">{`Seu IMC é de ${showItem.yourImc?.toFixed(2)} Kg/m²!`}</div>
                    <div className="text-base font-normal ">{`IMC está entre ${showItem.imc[0]} e ${showItem.imc[1]}`}</div>
                    <button onClick={handleBackBtn} className="w-60  px-4 py-2 rounded-lg text-white bg-cyan-700/90 text-lg hover:opacity-80 transition duration-500 ease-in-out">Voltar</button>
                </div>
            
        </div>

        
            }
        </div>
    );
}