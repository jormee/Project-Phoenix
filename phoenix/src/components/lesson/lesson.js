import React from 'react'

const Lesson = () => {

  return(
    <div>
      <div className="form">
        <h3>Create Your Lesson</h3>
        <select>
          <option disabled>Select your subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="agricultural science">Agricultural Science</option>
          <option value="basic science">Basic Science</option>
          <option value="basic technology">Basic Technology</option>
          <option value="computer science">Computer Science</option>
          <option value="home economics">Computer Science</option>
          <option value="phe">Physical and Health Education</option>
        </select>
        <select>
          <option value="Mathematics">Introduction to basic science</option>
          <option value="agricultural science">L</option>
          <option value="basic science">Basic Science</option>
          <option value="basic technology">Basic Technology</option>
          <option value="computer science">Computer Science</option>
          <option value="home economics">Computer Science</option>
          <option value="phe">Physical and Health Education</option>
        </select>
      </div>
    </div>
  )
}

export default Lesson;