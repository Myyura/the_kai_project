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
2. 约定字符 `a,b,c,...,h` 分别表示数字 \(0,1,2,\ldots,7\)。读入用这些字符写成的八进制数并输出十进制值，例如 `bcd` 输出 `83`。
3. 在答题纸上把十进制数 2015 写成罗马数字。罗马数字使用 `I,V,X,L,C,D,M`，值分别为 \(1,5,10,50,100,500,1000\)。通常从左到右按值递减并相加，无零符号；例如 \(207=\texttt{CCVII}\)，\(1066=\texttt{MLXVI}\)。为避免同一字符连续四次，可使用以下减法写法：`IV`、`IX` 表示 4、9；`XL`、`XC` 表示 40、90；`CD`、`CM` 表示 400、900。因此 \(1904=\texttt{MCMIV}\)。必须选择字符数最少的表示。
4. 编写程序把罗马数字转换为十进制。输入整数范围为 \(0<n<4000\)。
5. 编写程序把十进制数转换为按上述标准规则、字符数最少的罗马数字，范围同样为 \(0<n<4000\)。
6. 使用以下扩展减法规则：一个符号可放在相邻的、比它更大的符号 \(\alpha,\beta\) 之间，其中 \(\alpha>\beta\)，或 \(\alpha\) 不存在。例如 `CIL` 表示 \(100-1+50=149\)，`IL` 表示 \(-1+50=49\)。编写程序把 \(0<n<4000\) 的十进制数转换为符合扩展规则且字符数最少的罗马数字。
7. 读入用英文单词表示的正整数并输出十进制值，输入小于 100000。例如

   ```text
   fifty four thousand three hundred twelve
   ```

   输出 `54312`。每个数只需至少接受一种合法英文表达，例如 1200 可以只支持 `one thousand two hundred` 或 `twelve hundred` 中的一种。
