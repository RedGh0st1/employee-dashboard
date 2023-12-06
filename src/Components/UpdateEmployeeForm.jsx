// import React from "react"
import {useRef} from "react"
import {useParams} from "react-router-dom"

export default function UpdateEmployeeForm() {
  const formRef = useRef()
  const {id} = useParams()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("form submitted", formRef.current)
    const f = new FormData(formRef.current)
    const data = {}
    for (const entry of f) {
      data[entry[0]] = entry(1)
    }

    let req = await fetch(`http://localhost:8000/employee/${id}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
      method: "PutT",
    })
    let res = await req.json()
    console.log("res", res)
  }

  return (
    <div>
      <h1>Update Employee </h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="firstName">
          First Name
          <input type="text" name="first_name" placeholder="First Name" />
          <br />
        </label>

        <label htmlFor="last_name">
          Last Name
          <input type="text" name="last_name" placeholder="Last Name" />
          <br />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="Email" />
          <br />
        </label>

        <label htmlFor="company">
          Company:
          <input type="text" name="company" placeholder="First" />
          <br />
        </label>

        <label htmlFor="city">
          City
          <input type="text" name="city" placeholder="City" />
          <br />
        </label>

        <label htmlFor="skill">
          <input type="text" name="skill" placeholder="Skill" />
          <br />
        </label>

        <label htmlFor="pic">
          {" "}
          Pic Url:
          <input type="text" name="pic" placeholder="Pic Url" />
          <br />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
