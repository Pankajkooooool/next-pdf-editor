
import { useButtons } from "../context/CanvasContext";

export default function Header() {
  const contextValues = useButtons();

  return (
    <div className={`md:flex h-[10vh] md:items-center md:justify-between px-6 py-2 z-[1200] fixed w-[100%]`}>
     Pdf Editor

    </div>
  )
}
