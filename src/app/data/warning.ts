export interface Warning{
    id: number;
    message: string;    //warningの例
    cause: string;      //warningの原因
}

export const warnings_data: Warning[]=[
    {
        id:1,
        message:"warning: unused variable'XXX' [-Wunused-const-variable]",
        cause:"一度も使用されていない変数があります",
    },
    {
        id:2,
        message:"warning: unused function 'XXX' [-Wunused-function]",
        cause:"一度も使用されていない関数があります",
    },
    {
        id:3,
        message:"warning: '&&' within '||'[-wlogical-op-parentheses]",
        cause:"if文の条件で使用されている「&&」と「||」が括弧で括られていません",
    },
    {
        id:4,
        message:"warning: variable 'XXX' set but not used [-Wunused-but-set-variable]",
        cause:"変数の宣言のみをし、使用していない変数があります",
    },
];