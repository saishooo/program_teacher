import {warnings_data} from "../data/warning";

export default function WarningPage(){
    return(
        <div className="ml-5 mr-5">
            <p className="mt-3 text-3xl font-bold">Warning</p>
            <div className="my-3">
                <h2>ここでは、私が出会ったwarningの種類を紹介します。日々更新していければと思っております。</h2>
                <h2>※'XXX'は変数名や関数名が入ります。</h2>
            </div>
            <ul className="w-full space-y-2">
                {warnings_data.map((i)=>(
                    <li
                    key={i.id}
                    className="bg-gray-200 p-2 rounded"
                    >
                        <p className="font-semibold">{i.message}</p>
                        <p className="text-sm text-gray-700">原因:{i.cause}</p>
                    </li>

                ))}
            </ul>
        </div>
    );
}