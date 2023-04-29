import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const App = () => {

  const {t} = useTranslation()

  const onChangeLang =(e)=>{
    i18next.changeLanguage(e.target.value)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>{t("i")} {t("am")} {t("vipin")}</h1>
      <p style={{textAlign:"center", fontSize:"29px"}}>{t("welcome")}</p>
      <select onChange={onChangeLang}>
        <option>--select language--</option>
        <option value={"hi"}>Hindi</option>
        <option value={"chi"}>Chenese</option>
        <option value={"en"}>English</option>
      </select>
    </div>

  )
}

export default App