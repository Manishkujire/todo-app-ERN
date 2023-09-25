import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { addTodo } from '../Actions/todoAction';
import { useNavigate } from 'react-router-dom';
export default function AddForm(props) {
    const [inputs, setInputs] = useState({date:new Date().toISOString()});
    const dispatch=useDispatch()
    const handleChange = (event) => {

      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      console.log(inputs)
    }
    const {error}=useSelector((state)=>state)
    const navigator=useNavigate()
    
    return (
        <div className='py-4'>
            <form >
                <div className="mb-3">
                    <label for="title" className="">Task Name</label>
                    <input type="text" name="title" className="form-control" value={inputs.title || ""} 
        onChange={handleChange}  required
                        aria-describedby="emailHelp" />
                    
                </div>
                <div class="form-floating">
                                <textarea name="disc" class="form-control" value={inputs.disc || ""} 
        onChange={handleChange} placeholder="Leave a comment here" required
                                    id="floatingTextarea" style={{height: "150px"}}></textarea>
                                <label for="floatingTextarea">Discription</label>
                            </div>
                            
                <div className='my-2'>
                    <Button class="btn w-100 btn-primary" click={()=>{dispatch(addTodo(inputs))
                    if(!error)navigator("/")}} text="Add Task"/>
                   </div>
            </form>

        </div>
    )
}
