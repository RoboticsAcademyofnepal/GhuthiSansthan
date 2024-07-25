import {React,useRef} from 'react'

const TempleForm = () => {

    const nameRef = useRef();
    const  locationRef= useRef();
    const  photoRef = useRef();
    const  desRef = useRef();
    
    const handelSubmit = async(value) =>{
       const name = nameRef.current.value.trim();
       const location = locationRef.current.value.trim();
       const photo = photoRef.current.files[0];
       const des = desRef.current.value.trim();
      
       if(!name || !location || !photo || !des){
           alert('Enter the all data')
           return
       }

       const formData = new FormData();
       formData.append('name',name);
       formData.append('location',location);
       formData.append('photo',photo);
       formData.append('des',des)

          fetch('http://192.168.1.65:8000/api/form',{
           method:'post',
           body:formData,
          }).then((res)=>{
            console.log(res.json());
          }).catch((res)=>{
             console(res)
          })
    }
  return (
    
             <div className='flex flex-col w-[90%] bg-white/50 backdrop-blur-sm rounded-lg lg:w-[50%] p-3 gap-2'>
           <h1 className='font-semibold tracking-wider my-2'>Temple Form</h1>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Temple Name:</label>
                <input type='text' ref={nameRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>location:</label>
                <input type='text' ref={locationRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Upload Image:</label>
                <input type='file' ref={photoRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='flex flex-wrap flex-col py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Description:</label>
                <textarea ref={desRef} className='w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400'/>
             </div>
             <div className='w-full flex justify-end px-5'>
                   <button className='bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={()=>handelSubmit}>Submit</button>
             </div>
       </div>
    
  )
}

export default TempleForm
