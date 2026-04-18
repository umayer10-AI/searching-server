"use client"
import { Data } from '@/context/Context';
import React, { useContext } from 'react';

const Searching = () => {

    const {setS,setC,all,i,setI,setcategory,category} = useContext(Data)
    // console.log(i)

    const a = () => {
        if(i !== ""){
            const f = all.filter(v => v.dish_name.toLowerCase().includes(i.toLowerCase()))
            setC(f)
        }
        else{
            setC(all)
        }
        setS(i)
    }

    // const b = (show) => {
    //     const f = all.filter(v => v.category === show)
    //     setC(f)
    // }

    const c = (e) => {
        const value = e.target.value
        // console.log(value)
        if(value === "All"){
            setcategory("")
        }
        else{
            setcategory(value)
        }
    }

    return (
        <div className='flex justify-center items-center my-10 gap-5'>
            <div className='flex items-center'>
                <input onChange={e => setI(e.target.value)} value={i} type="text" placeholder="Search" className="input input-accent" />
                <input onClick={a} type="submit" value={"Search"} className='btn btn-accent' />
            </div>
            <select onChange={c} value={category} className="select select-primary">
                <option>All</option>
                <option>Burger</option>
                <option>Pizza</option>
                <option>Biriyani</option>
                <option>Beverage</option>
                <option>Rice</option>
                {/* <option onClick={() => setC(all)}>All</option>
                <option onClick={() => b("burger")}>Burger</option>
                <option onClick={() => b("dish")}>Pizza</option>
                <option onClick={() => b("biriyani")}>Biriyani</option>
                <option onClick={() => b("beverage")}>Beverage</option>
                <option onClick={() => b("rice")}>Rice</option> */}
            </select>
        </div>
    );
};

export default Searching;