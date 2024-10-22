import { useState } from 'react'
import { Box,Button } from '@mui/material'
import { TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './App.css'

function App() {
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [email,setEmail]=useState('')
  const [dateOfBirth,setDateOfBirth]=useState(null)
  const [gender,setGender]=useState('')
  const [course,setCourse]=useState('')




 const handleChange =(e)=>{
  setCourse(e.target.value)

 }
   const handleReset =()=>{
    setName('')
    setAddress('')
    setPhoneNumber('')
    setEmail('')
    setDateOfBirth('')
    setGender('')
    setCourse('')

   }





  return (
    <>
      <div className="main d-flex justify-content-center align-items-center  ">

        <div style={{ width: '600px' }} className="admission shadow bg-light rounded p-5  fw-bolder  ">
          <h1 className='text-center'> Admission Form</h1>
          <Box
            component="form"
          
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              backgroundColor: ' #ADD8E6',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            noValidate
            autoComplete="off"
          >


            <h3 className='text-center'>Fill Your Details Here!!</h3>
            <div className="d-flex flex-column my-5 mb-3">
              {/* name */}
              <TextField  value={name} onChange={(e)=>setName(e.target.value)} style={{ borderRadius: '18px' }} id="filled-basic" label="Name" variant="filled"  required />

              {/* address */}
              <TextField
              value={address} onChange={(e)=>setAddress(e.target.value)}
               
                id="filled-multiline-static"
                label="Address"
                multiline
                rows={4}
                variant="filled"
                required


              />


              {/* phno */}
              <TextField value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}    style={{ borderRadius: '18px' }} id="filled-basic" label="Phone no." variant="filled" required />
              {/* email */}
              <TextField value={email} onChange={(e)=>setEmail(e.target.value)} style={{ borderRadius: '18px' }} id="filled-basic" label="Email" variant="filled"  required/>
              {/* DOB */}
              <TextField value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} style={{ borderRadius: '18px' }} id="filled-basic" type='date'  variant="filled" required />



              {/* gender */}
              <div className="text-start mt-3">
                <FormControl>
               <h5>Gender</h5>
                  <RadioGroup
                  value={gender} onChange={(e)=>setGender(e.target.value)}
                     aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                     required
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </div>

              {/* course */}
              <FormControl sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={course} onChange={handleChange}
              name='course'
              id="demo-simple-select"
           
              style={{ backgroundColor: '#ADD8E6', borderRadius: '8px' }}
            >
              <MenuItem value={'computer_commerce'}>Computer Commerce</MenuItem>
              <MenuItem value={'maths-commerce'}>Maths Commerce</MenuItem>
              <MenuItem value={'computer-science'}>Computer Science</MenuItem>
              <MenuItem value={'biology-science'}>Biology Science</MenuItem>
              <MenuItem value={'humanities'}>Humanities</MenuItem>

            </Select>
          </FormControl>

            </div>
          </Box>
          <div className="d-flex justify-content-evenly mt-5">
          <Button variant="contained" type='submit' >Submit</Button>
          <Button onClick={handleReset}  variant="outlined" type='submit' >Reset</Button>

          </div>
        </div>

      </div>

    </>
  )
}

export default App
