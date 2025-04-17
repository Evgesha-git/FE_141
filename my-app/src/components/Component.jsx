import { useContext, useEffect } from "react"
import { AppContext } from "../App";

const Component = ({ data }) => {
  const { param, text } = useContext(AppContext)

  console.log(param, text);
  

  useEffect(() => {
    console.log('Ререндер не мемоизированного компонента');
  })

  return (
    <div>
      {data.map(item => <div key={item.id.toString()}>{item.name}</div>)}
    </div>
  )
}

export default Component