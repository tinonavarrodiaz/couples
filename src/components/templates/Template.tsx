import { Outlet } from "react-router-dom"
import Header from "../organism/Header"


function Template() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Template
