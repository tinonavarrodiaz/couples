// import { useEffect, useState } from "react"

function Header() {

  // const [logo, setLogo] = useState<string>('/logo.svg')

  // useEffect(()=>{
  //   const mql = window.matchMedia('(prefers-color-scheme: dark)');
  //   window.matchMedia('(prefers-color-scheme)').addEventListener('change', () => {
  //     setLogo('/logo_light.svg')

  //   })
  //   if(mql.matches){
  //     console.log(mql.matches)
  //     setLogo('/logo_light.svg')
  //   }
  // },[])
  return (
    <header className="main-header">
      {/* <img src={logo} alt="Logo" /> */}
      <div className="logo"></div>
    </header>
  )
}

export default Header
