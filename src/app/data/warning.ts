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
        message:"warning: '&&' within '||' [-wlogical-op-parentheses]",
        cause:"if文の条件で使用されている「&&」と「||」が括弧で括られていません",
    },
    {
        id:4,
        message:"warning: variable 'XXX' set but not used [-Wunused-but-set-variable]",
        cause:"変数の宣言のみをし、使用していない変数があります",
    },
    {
        id:5,
        message:"warning: equality comparison with extraneous parentheses [-Wparentheses-equality]",
        cause:"if文などの条件で使用されている括弧が2重になっています",
    },
    {
        id:6,
        message:"warning: '/*' within block comment [-Wcomment]",
        cause:"余分な「/*」があります",
    },
    {
        id:7,
        message:"warning: format specifies type 'int' but the argument has type 'long' [-Wformat]",
        cause:"",
    },
    {
        id:8,
        message:"warning: cast to 'void *' from smaller integer type 'unsigned short' [-Wint-to void-pointer-cast]",
        cause:"",
    },
    /*{
        id:9,
        message:"warning: 'strcat' is deprecated: This function or variable may be unsafe. Consider using strcat_s instead. To disable deprecation, use_CRT_SECURE_NO_WARNINGS. See online help for details. [-Wdeprecated-declarations]",
        cause:"非推奨の「strcat」が使用されています。代わりに「strcat_s」を使用してください。",
    },
    */
];