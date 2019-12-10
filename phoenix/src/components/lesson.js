import React from 'react'

const Lesson = () => {

  const handleSubmit = event => {
    event.preventDefault();
    console.log('form submitted!!')
  }

  return(
    <div className="container">
      <div className="resources">
        <div className="form" onSubmit={handleSubmit}>
          <h5>Select your lesson details</h5>
          <form>
            <fieldset>
              <label htmlFor="subject">Subject: </label>
              <select autoFocus="on">
                <option value="agric">Agricultural Science</option>
                <option value="b.science">Basic Science</option>
                <option value="b.tech">Basic Technology</option>
                <option value="H.Econs">Home Economics</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="topic">Topic: </label>
              <select>
                <option value="agric">agric int</option>
                <option value="b.science">agric Science</option>
                <option value="b.tech">farm Technology</option>
                <option value="H.Econs">agric Economics</option>
              </select>
            </fieldset>

            <input type='submit'/>
          </form>
        </div>
      </div>

      <div className="note">
        {/* {notes will be here} */}
      </div>
    </div>
  )
}

export default Lesson;