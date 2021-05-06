import {useState} from 'react';

const EditDetailsForm=({person, setPerson,page,setPage})=>{
	const [FullName,setFullName]=useState(null);
	const [InstituteName,setInstituteName]=useState(null);
	const [BatchStart,setBetchStart]=useState(null);
	const [BatchEnd,setBatchEnd]=useState(null);
	const [RollNum,setRollNum]=useState(null);
	const [Email,setEmail]=useState(null);

    // console.log(props)

    const handleEdit=()=>{
        const temp= {
            ...person,
            fullName: FullName,
            instituteName: InstituteName,
            batchStart: BatchStart,
            batchEnd: BatchEnd,
            rollNum: RollNum,
            email: Email
        }
        setPerson(temp);

        setPage("PROFILE");

        
    }
    return(
        <div>
            <form  onSubmit={()=>handleEdit()}>
            <div>Full Name: 
            <input type='text' onChange={(e)=>setFullName(e.target.value)} required/>
            </div>

            <div>InstituteName: 
            <input type='text' onChange={(e)=>setInstituteName(e.target.value)} required/>
            </div>

            <div>Betch Start: 
            <input type='numeric' onChange={(e)=>setBetchStart(e.target.value)} required/>
            </div>

            <div>Betch End:
            <input type='numeric' onChange={(e)=>setBatchEnd(e.target.value)} required/>
            </div>

            <div>Enrollment Number: 
            <input type=''  onChange={(e)=>setRollNum(e.target.value)} required/>
            </div>

            <div>Email:
             <input type='text'   onChange={(e)=>setEmail(e.target.value)} required/>
            </div>

            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditDetailsForm;