// import React from "react"

export default function UpdateEmployeeForm() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div>
      <h1>Update Employee </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name
          <input type="text" name="first name" placeholder="First Name" />
        </label>

        <label htmlFor="lasttName">
          Last Name
          <input type="text" name="first name" placeholder="Last Name" />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="Email" />
        </label>

        <label htmlFor="company">
          Company:
          <input type="text" name="company" placeholder="First" />
        </label>

        <label htmlFor="city">
          City
          <input type="text" name="city" placeholder="City" />
        </label>

        <label htmlFor="skill">
          <input type="text" name="skill" placeholder="Skill" />
        </label>

        <label htmlFor="pic_url">
          {" "}
          Pic Url:
          <input type="text" name="picurl" placeholder="Pic Url" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
