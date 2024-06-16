import { ReactElement } from "react"
import { div } from "three/examples/jsm/nodes/Nodes.js"

interface props {
  children:ReactElement
}
const MainLayout:React.FC<props> = ({children}):JSX.Element => {
  return (
    <div className="mainLayout">
      <h2>scroll up/down</h2>
      {children}
    </div>
  )
}

export default MainLayout