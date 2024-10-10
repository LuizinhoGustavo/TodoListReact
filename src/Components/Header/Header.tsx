import { Moon } from "lucide-react"

export default function Header() {
    return (
        <div className="pt-8 px-8">
            <div className="flex justify-between pb-5">
                <h1 className="text-xl text-center pl-5">Lista de Tarefas</h1>
                <button className="pr-5">
                    <Moon fill="#000" size={20} color="#000" />
                </button>
            </div>

            <div className="flex px-5 gap-3">
                <button className="w-10 h-10 rounded-full border border-black hover:bg-slate-50 hover:transition-all">
                    +
                </button>
                <input type="text" autoFocus placeholder="Insira uma nova tarefa" className="outline-none w-full h-10 border rounded-xl border-black pl-2" />
            </div>

            <div className="w-full h-px bg-black my-5"></div>
        </div >
    )
}   