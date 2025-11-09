import {warnings_data} from "../data/warning";

export default function WarningPage(){
    return(
        <div className="ml-4">
            <p className="text-3xl font-bold">Warning</p>
            <h2>ここでは、wariningの種類を表示します。</h2>
            <ul className="space-y-2">
                {warnings_data.map((i)=>(
                    <li
                    key={i.id}
                    className="border-yellow-500 bg-gray-200 p-2 rounded"
                    >
                        <p className="font-semibold">{i.message}</p>
                        <p className="text-sm text-gray-700">原因:{i.cause}</p>
                    </li>

                ))}
            </ul>
        </div>
    );
}