import { Trash2 } from "lucide-react";

export default function Tasks() {
    return (
        <label className="flex border border-black w-full h-10 items-center rounded-xl px-3">
            <Trash2 size={20} />
            <input type="checkbox" id="" className="size-4" />
            <span className="h-3/4 border border-black mx-2" />
        </label>
    )
}   