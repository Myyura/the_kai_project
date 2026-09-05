---
sidebar_label: 2015年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Roman-Numeral-Conversion
  - Computer-Science.Programming.String-Parsing
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年8月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20170611132756id_/http://www.i.u-tokyo.ac.jp/edu/course/ci/pdf/2015-8-program.pdf).

Write programs for the following questions. When writing the programs, you must not use a built-in library function that directly implements the specified behavior. For example, the program for (1) must not include a call to `to_i` in Ruby.

(1) Write a program that reads a number in the quaternary representation (base-4 positional notation) and prints it in the decimal representation. For example, it reads `123` and prints `27`.

(2) Suppose that symbols `a, b, c, ..., h` denote numbers `0, 1, 2, ..., 7`, respectively. Write a program that reads a number expressed with `a, b, c, ..., h` in the octal representation and prints the number in the decimal representation. For example, it reads `bcd` and prints `83`.

(3) Write on the answer sheet decimal number `2015` in Roman numerals.

Roman numerals use seven symbols `I, V, X, L, C, D`, and `M`. Their values are `1, 5, 10, 50, 100, 500`, and `1000`, respectively. They are formed as follows:

Numbers are formed by combining symbols and adding the values. So `II` is two ones, i.e. $2$, and `XIII` is a ten and three ones, i.e. $13$. There is no zero in this system, so $207$, for example, is `CCVII`, using the symbols for two hundreds, a five and two ones. $1066$ is `MLXVI`, one thousand, fifty and ten, a five and a one.

Symbols are placed from left to right in order of value, starting with the largest. However, in a few specific cases, to avoid four characters being repeated in succession (such as `IIII` or `XXXX`) these can be reduced using subtractive notation as follows:

*   the numeral I can be placed before V and X to make $4$ units (`IV`) and $9$ units (`IX`) respectively
*   X can be placed before L and C to make $40$ (`XL`) and $90$ (`XC`) respectively
*   C can be placed before D and M to make $400$ (`CD`) and $900$ (`CM`)

An example using the above rules would be $1904$: this is composed of $1$ (one thousand), $9$ (nine hundreds), $0$ (zero tens), and $4$ (four units). To write the Roman numeral, each of the non-zero digits should be treated separately. Thus $1,000 = \texttt{M}$, $900 = \texttt{CM}$, and $4 = \texttt{IV}$. Therefore, $1904$ is `MCMIV`.
(Reference: `http://en.wikipedia.org/wiki/Roman_numerals`)

The symbols have to be selected so that the number of the symbols will be the minimum. For example, IV is composed of two symbols.

(4) Write a program that reads a number in Roman numerals and prints it in the decimal representation. Assume that the number is more than $0$ and less than $4000$.

(5) Write a program that reads a number in the decimal representation and prints it in Roman numerals. The number is more than $0$ and less than $4000$.

(6) Extend the subtraction notation of Roman numerals as follows.

> A symbol can be placed between adjacent larger symbols $\alpha$ and $\beta$ than that symbol, where $\alpha > \beta$ or $\alpha$ is blank. For example, CIL is $149$ because $100 - 1 + 50 = 149$. IL is $49$ because $-1 + 50 = 49$.

Write a program that reads a number in the decimal representation and prints it in the extended Roman numerals. The number is more than $0$ and less than $4000$. The symbols have to be selected so that the number of the symbols will be the minimum.

(7) Write a program that reads a number expressed in English and prints it in the decimal representation. The number is a positive integer less than $100000$. For example, it reads:
```
fifty four thousand three hundred twelve
```
and prints `54312`. The program may accept at least one English expression for each number. For example, for $1200$, the program may only accept either `one thousand two hundred` or `twelve hundred`.

### 题目描述

编写下列程序时，不得调用直接实现指定功能的内置库函数；例如第 1 问的 Ruby 程序不得调用 `to_i`。

1. 读入一个四进制位权表示的数，输出其十进制值。例如输入 `123`，输出 `27`。
2. 约定字符 `a,b,c,...,h` 分别表示数字 $0,1,2,\ldots,7$。读入用这些字符写成的八进制数并输出十进制值，例如 `bcd` 输出 `83`。
3. 在答题纸上把十进制数 2015 写成罗马数字。罗马数字使用 `I,V,X,L,C,D,M`，值分别为 $1,5,10,50,100,500,1000$。通常从左到右按值递减并相加，无零符号；例如 $207=\texttt{CCVII}$，$1066=\texttt{MLXVI}$。为避免同一字符连续四次，可使用以下减法写法：`IV`、`IX` 表示 4、9；`XL`、`XC` 表示 40、90；`CD`、`CM` 表示 400、900。因此 $1904=\texttt{MCMIV}$。必须选择字符数最少的表示。
4. 编写程序把罗马数字转换为十进制。输入整数范围为 $0<n<4000$。
5. 编写程序把十进制数转换为按上述标准规则、字符数最少的罗马数字，范围同样为 $0<n<4000$。
6. 使用以下扩展减法规则：一个符号可放在相邻的、比它更大的符号 $\alpha,\beta$ 之间，其中 $\alpha>\beta$，或 $\alpha$ 不存在。例如 `CIL` 表示 $100-1+50=149$，`IL` 表示 $-1+50=49$。编写程序把 $0<n<4000$ 的十进制数转换为符合扩展规则且字符数最少的罗马数字。
7. 读入用英文单词表示的正整数并输出十进制值，输入小于 100000。例如

   ```text
   fifty four thousand three hundred twelve
   ```

   输出 `54312`。每个数只需至少接受一种合法英文表达，例如 1200 可以只支持 `one thousand two hundred` 或 `twelve hundred` 中的一种。


## **Kai**

### (1) Base 4

Scan the input from left to right, starting from $v=0$. For each digit $d$, update $v\leftarrow4v+d$. After a prefix has been processed, $v$ is exactly its positional value; appending one digit multiplies that value by 4 and adds the new digit. Thus `123` gives $((1\cdot4)+2)\cdot4+3=27$. Decimal output can be formed by repeated division by 10 and reversing the remainders.

### (2) The alphabetic base-8 representation

Map the character's position in `abcdefgh` to its digit value and use $v\leftarrow8v+d$. For `bcd`, this gives $1\cdot8^2+2\cdot8+3=83$. Neither conversion calls a library's base-conversion routine.

### (3)

$$\boxed{2015=\texttt{MMXV}.}$$

### (4) Roman to decimal

Read the value of each symbol. If it is smaller than the immediately following symbol, subtract it; otherwise add it. On a valid standard Roman numeral, this handles exactly the six permitted subtractive pairs. For example, `MCMIV` gives $1000-100+1000-1+5=1904$. The program also checks validity by converting the resulting value back into the canonical standard representation.

### (5) Decimal to standard Roman

Process the thousands, hundreds, tens and units independently. For each place, use the shortest standard spelling for its digit: at the units place these are ``, `I`, `II`, `III`, `IV`, `V`, `VI`, `VII`, `VIII`, `IX`; the tens and hundreds use the corresponding symbols. The thousands are ``, `M`, `MM`, `MMM`. The rules restrict standard subtraction to each decimal place, so independently choosing the shortest allowed spelling at each place minimizes their total length.

### (6) Shortest extended Roman representation

Use the insertion rule as follows: the positive symbols form a nonincreasing sequence. Immediately before a positive symbol $\beta$, one smaller symbol $s$ may be inserted and subtracted only if the preceding positive symbol $\alpha$ is larger than $\beta$, or there is no preceding symbol. There is at most one such insertion in a gap.

A representation can therefore be broken into tokens of either one symbol $\beta$ (value $\beta$, cost 1) or two symbols $s\beta$ (value $\beta-s$, cost 2). Every token has positive value. The preceding positive symbol determines which next tokens are allowed, so greedy selection by token value is insufficient.

Let $B(r,\alpha)$ be the shortest suffix representing remaining value $r$ after positive symbol $\alpha$. A special initial state has $\alpha=+\infty$. For every $\beta\le\alpha$, consider

$$
\begin{aligned}
&\beta+B(r-\beta,\beta),&&r\ge\beta,\\
&s\beta+B(r-(\beta-s),\beta),
&&s<\beta<\alpha,\quad r\ge\beta-s.
\end{aligned}
$$

Set $B(0,\alpha)$ to the empty string and reject negative remaining values. Choose the candidate with the smallest total character count; ties may be resolved lexicographically. Each candidate uses a smaller remaining value, so compute the table in increasing order of $r$.

Every legal representation begins with one of these tokens, and removing it leaves exactly the corresponding subproblem. Conversely, each candidate preserves both the ordering and the insertion condition. Induction on $r$ proves that the table gives a shortest representation under this rule. With seven fixed symbol values, there are $8(n+1)$ states and at most 28 token choices per state. The implementation stores the chosen strings; their copying costs are proportional to their lengths.

Examples are `IL` for 49, `CIL` for 149 and `IMM` for 1999. In `IMM`, the `I` is subtracted before the first `M`, where $\alpha$ is absent; the subsequent `M` is added. The rule permits a noncanonical standard spelling such as `CMMIV` for 1904 in this extended notation.

### (7) English number parser

Accept the usual form `A thousand B`, where $1\le A\le99$ and $0\le B\le999$, omitting either the thousand section or a zero remainder as appropriate. A number below 1000 consists of an optional `one` through `nine` followed by `hundred`, then an optional remainder below 100. The latter is a word from `one` to `nineteen`, a tens word, or a tens word followed by `one` through `nine`.

Parse the two sections and compute $1000A+B$. This covers every positive integer below 100000, without requiring alternatives such as `twelve hundred`. The implementation also accepts hyphens between tens and units, but this grammar omits `and`. For the example it computes $1000\cdot54+300+12=54312$.

### Complete program

Run, for example, `python convert.py 1 123`, `python convert.py 6 149` or `python convert.py 7 fifty four thousand three hundred twelve`. The part number is read as a string. Base input, decimal input and decimal formatting are implemented explicitly.

```python
import sys

SYMBOLS = 'IVXLCDM'
VALUES = (1, 5, 10, 50, 100, 500, 1000)
ROMAN_VALUE = dict(zip(SYMBOLS, VALUES))


def positional(text, alphabet):
    if not text:
        raise ValueError('empty number')
    value = 0
    base = len(alphabet)
    for char in text:
        if char not in alphabet:
            raise ValueError('invalid digit')
        value = base * value + alphabet.index(char)
    return value


def decimal_text(number):
    if number == 0:
        return '0'
    digits = []
    while number:
        number, remainder = divmod(number, 10)
        digits.append('0123456789'[remainder])
    return ''.join(reversed(digits))


def roman_value(text):
    values = [ROMAN_VALUE[char] for char in text]
    return sum(-x if i+1 < len(values) and x < values[i+1] else x
               for i, x in enumerate(values))


def standard_roman(number):
    if not 1 <= number < 4000:
        raise ValueError('number must be from 1 to 3999')
    groups = [('', 'M', 'MM', 'MMM'),
              ('', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'),
              ('', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'),
              ('', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX')]
    answer = []
    for place, group in zip((1000, 100, 10, 1), groups):
        digit, number = divmod(number, place)
        answer.append(group[digit])
    return ''.join(answer)


def extended_table(limit):
    # State (remaining value, preceding positive symbol index).
    # Index 7 means there is no preceding symbol.
    best = [[None] * 8 for _ in range(limit + 1)]
    best[0] = [''] * 8
    for remaining in range(1, limit + 1):
        for previous in range(8):
            answer = None
            for current in range(min(previous, 6) + 1):
                options = [(VALUES[current], SYMBOLS[current])]
                if previous > current:
                    options.extend((VALUES[current] - VALUES[small],
                                    SYMBOLS[small] + SYMBOLS[current])
                                   for small in range(current))
                for value, token in options:
                    if value > remaining:
                        continue
                    suffix = best[remaining-value][current]
                    if suffix is None:
                        continue
                    candidate = token + suffix
                    if answer is None or (len(candidate), candidate) < (len(answer), answer):
                        answer = candidate
            best[remaining][previous] = answer
    return best


ONES = ('one two three four five six seven eight nine ten eleven twelve '
        'thirteen fourteen fifteen sixteen seventeen eighteen nineteen').split()
TENS = 'twenty thirty forty fifty sixty seventy eighty ninety'.split()
SMALL = {word: i+1 for i, word in enumerate(ONES)}
SMALL.update({word: 10*(i+2) for i, word in enumerate(TENS)})


def under_thousand(words):
    if not words:
        return 0
    total = 0
    if len(words) >= 2 and words[0] in ONES[:9] and words[1] == 'hundred':
        total = 100 * SMALL[words[0]]
        words = words[2:]
    if not words:
        return total
    if len(words) == 1 and words[0] in SMALL:
        return total + SMALL[words[0]]
    if len(words) == 2 and words[0] in TENS and words[1] in ONES[:9]:
        return total + SMALL[words[0]] + SMALL[words[1]]
    raise ValueError('unsupported English number')


def english_value(text):
    words = text.lower().replace('-', ' ').split()
    if words.count('thousand') > 1:
        raise ValueError('repeated thousand')
    if 'thousand' in words:
        split = words.index('thousand')
        high = under_thousand(words[:split])
        if not 1 <= high <= 99:
            raise ValueError('thousands must be from 1 to 99')
        value = 1000*high + under_thousand(words[split+1:])
    else:
        value = under_thousand(words)
    if not 1 <= value < 100000:
        raise ValueError('number must be from 1 to 99999')
    return value


if __name__ == '__main__':
    part = sys.argv[1]
    text = '' if part == '3' else ' '.join(sys.argv[2:]) if len(sys.argv) > 2 else input().strip()
    if part == '1':
        print(decimal_text(positional(text, '0123')))
    elif part == '2':
        print(decimal_text(positional(text, 'abcdefgh')))
    elif part == '3':
        print(standard_roman(2015))
    elif part == '4':
        value = roman_value(text)
        if not 1 <= value < 4000 or standard_roman(value) != text:
            raise ValueError('invalid standard Roman numeral')
        print(decimal_text(value))
    elif part in ('5', '6'):
        value = positional(text, '0123456789')
        if not 1 <= value < 4000:
            raise ValueError('number must be from 1 to 3999')
        print(standard_roman(value) if part == '5' else extended_table(value)[value][7])
    elif part == '7':
        print(decimal_text(english_value(text)))
    else:
        raise SystemExit('part must be from 1 to 7')
```
