# kindof [![](https://badgen.net/bundlephobia/minzip/@elzup/kindof)](https://bundlephobia.com/result?p=@elzup/kindof)

> advanced typeof for 10 type

10 type from [JSON Data Type](https://www.w3schools.com/js/js_json_datatypes.asp) and [typeof](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof).

JSON: 6 type `string | number | object | array | boolean | null`
typeof: 8 type `undefined | boolean | number | bigint | string | symbol | function | object`

| example vlaue | key           | typeof | JSON | description        |
| ------------- | ------------- | :----: | :--: | ------------------ |
| `undefined`   | `"undefined"` |   o    |      |                    |
| `true`        | `"boolean"`   |   o    |  o   |                    |
| `123`         | `"number"`    |   o    |  o   |                    |
| `1000n`       | `"bigint"`    |   o    |      | ES2020             |
| `"hello"`     | `"string"`    |   o    |  o   |                    |
| `Symbol('s')` | `"symbol"`    |   o    |      | ES2015             |
| `() => 0`     | `"function"`  |   o    |      |                    |
| `{ a: 1 }`    | `"object"`    |   o    |  o   |                    |
| `[1, 2, 3]`   | `"array"`     |        |  o   | typoef => "object" |
| `null`        | `"null"`      |        |  o   | typoef => "object" |

## Install

```

$ npm install @elzup/kindof

```

## Usage

```js
const { kindof } = require('@elzup/kindof')

kindof(123)
//=> 'number'

kindof([1, 2])
//=> 'array'

kindof(null)
//=> 'null'
```

MIT © [anozon](https://anozon.me)
