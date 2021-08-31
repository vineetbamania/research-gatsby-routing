import React from "react"

export default function Color(props) {

  console.log("props")
  console.log(props)
  return (
    <div>
      <p>Color Page:</p>{props.data.pageYaml.name}
    </div>
  )
}
