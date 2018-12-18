/*打开终端，安装eslint校验包和react校验插件包:
npm install -g eslint
npm install -g eslint-plugin-react
3. 在Sublime中安装插件:
SublimeLinter
SublimeLinter-contrib-eslint
4. 运行eslint --init
根据提示配置初始化文件，生成.json格式的*/

module.exports={
    "plugins": [
        "react"
    ],
    "env": {
        "node": true,
        "jquery": true,
        "es6": true,
        "commonjs": true,
        "browser": true
    },
    "parserOptions": { 
        "ecmaFeatures": {  // 使用额外的语言特性
            "experimentalObjectRestSpread": true,
            "jsx": true     // 启用JSX
        },
        "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
        "ecmaVersion": 7   // ECMAScript版本，7为ES7
    },
    "settings": {
        "import/ignore": [
            "node_modules"
        ]
    },
    "extends": "eslint:recommended",
    "globals": {
        "$": true,
        "process": true,
        "__dirname": true
    },
    "parser": "babel-eslint",
    "rules": {
        //官方文档 http://eslint.org/docs/rules/
        //参数：0 关闭，1 警告，2 错误
        "quotes": [0, "single"], //建议使用单引号
        // "no-inner-declarations":[0, "both"],     //不建议在{}代码块内部声明变量或函数
        "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
        "semi":1, //缺少分号，行尾必须使用分号
        "no-extra-semi": 1, //多余的分号
        "no-extra-parens": 0, //多余的括号
        "no-empty": 1, //空代码块
        "no-use-before-define": [0, "nofunc"], //使用前未定义
        "complexity": [1, 30], //圈复杂度大于10 警告
        "guard-for-in":2,//for in时需检测hasOwnProperty，避免遍历到继承来的属性方法
        //常见错误
        "no-const-assign": 1, //const 变量重新赋值不是个静态错误
        "comma-dangle": [1, "never"], //定义数组或对象最后多余的逗号
        "no-constant-condition": 2, //常量作为条件
        "no-dupe-args": 2, //参数重复
        "no-dupe-keys": 2, //对象属性重复
        "no-duplicate-case": 2, //case重复
        "no-empty-character-class": 2, //正则无法匹配任何值
        "no-invalid-regexp": 2, //无效的正则
        "no-func-assign": 2, //函数被赋值
        "valid-typeof": 1, //无效的类型判断
        "no-unreachable": 2, //不可能执行到的代码
        "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
        "no-sparse-arrays": 1, //数组中多出逗号
        "no-shadow-restricted-names": 2, //关键词与命名冲突
        "no-undef": 1, //变量未定义
        "no-unused-vars": 1, //变量定义后未使用
        "no-cond-assign": 2, //条件语句中禁止赋值操作
        "no-native-reassign": 2, //禁止覆盖原生对象
        "no-mixed-spaces-and-tabs": 0,

        //代码风格优化
        "no-irregular-whitespace": 0,
        "no-else-return": 0, //在else代码块中return，else是多余的
        "no-multi-spaces": 0, //不允许多个空格
        "key-spacing": [0, {
            "beforeColon": false,
            "afterColon": true
        }], //object直接量建议写法 :后一个空格前面不留空格
        "block-scoped-var": 1, //变量应在外部上下文中声明，不应在{}代码块中
        "consistent-return": 1, //函数返回值可能是不同类型
        "accessor-pairs": 1, //object getter/setter方法需要成对出现
        "dot-location": [1, "property"], //换行调用对象方法  点操作符应写在行首
        "no-lone-blocks": 1, //多余的{}嵌套
        "no-labels": 1, //无用的标记
        "no-extend-native": 1, //禁止扩展原生对象
        "no-floating-decimal": 1, //浮点型需要写全 禁止.1 或 2.写法
        "no-loop-func": 1, //禁止在循环体中定义函数
        "no-new-func": 1, //禁止new Function(...) 写法
        "no-self-compare": 1, //不允与自己比较作为条件
        "no-sequences": 1, //禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 1, //禁止抛出一个直接量 应是Error对象
        "no-return-assign": [1, "always"], //不允return时有赋值操作
        "no-redeclare": [1, {
            "builtinGlobals": true
        }], //不允许重复声明
        "no-unused-expressions": [0, {
            "allowShortCircuit": true,
            "allowTernary": true
        }], //不执行的表达式
        "no-useless-call": 1, //无意义的函数call或apply
        "no-useless-concat": 1, //无意义的string concat
        "no-void": 1, //禁用void
        "no-with": 1, //禁用with
        "no-console":0, //禁用console
        "space-infix-ops": 0, //操作符前后空格
        "valid-jsdoc": [0, {
            "requireParamDescription": true,
            "requireReturnDescription": true
        }], //jsdoc
        "no-warning-comments": [1, {
            "terms": ["todo", "fixme", "any other term"],
            "location": "anywhere"
        }], //标记未写注释
        "curly": 0, //if、else、while、for代码块用{}包围
        "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
        "react/display-name": 0, //防止在React组件定义中丢失displayName
        "react/forbid-prop-types": [2, { "forbid": ["any"] }], //禁止某些propTypes
        "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
        "react/jsx-closing-bracket-location": 0, //在JSX中验证右括号位置,如果组件有多行属性，闭合标签应写在新的一行上
        "react/jsx-curly-spacing": [2, { "when": "never", "children": true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
        "react/jsx-indent-props": [1, 2], //验证JSX中的props缩进
        "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
        "react/jsx-max-props-per-line": [1, { "maximum": 10 }], // 限制JSX中单行上的props的最大数量
        "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
        "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
        "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
        "react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
        "react/jsx-pascal-case": 0, //为用户定义的JSX组件强制使用PascalCase
        "react/jsx-sort-props": 0, //强化props按字母排序
        "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
        "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
        "react/no-danger": 0, //防止使用危险的JSX属性
        "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
        "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
        "react/no-direct-mutation-state": 1, //防止this.state的直接变异
        "react/no-multi-comp": 0, //防止每个文件有多个组件定义
        "react/no-set-state": 0, //防止使用setState
        "react/no-unknown-property": 2, //防止使用未知的DOM属性
        "react/prefer-es6-class": 2, //为React组件强制执行ES5或ES6类
        "react/prop-types": 0, //防止在React组件定义中丢失props验证
        "react/react-in-jsx-scope": 2, //使用JSX时防止丢失React
        "react/self-closing-comp": 0, //防止没有children的组件的额外结束标签
        "react/sort-comp": 2, //强制组件方法顺序
        "no-extra-boolean-cast": 0, //禁止不必要的bool转换
        "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
        "react/no-deprecated": 1, //不使用弃用的方法
        "react/jsx-equals-spacing": 2 //在JSX属性中强制或禁止等号周围的空格
    }
}