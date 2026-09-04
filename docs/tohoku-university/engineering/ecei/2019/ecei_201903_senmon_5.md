---
sidebar_label: 2019年3月実施 専門科目 問題5 計算機2
tags:
  - Tohoku-University
  - Computer-Science.Formal-Languages.Context-Free-Grammar
  - Computer-Science.Data-Structures.Stack
---
# 東北大学 工学研究科 電気・情報系 2019年3月実施 専門科目 問題5 計算機2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$\mathbb Z$ を整数の集合とする。終端記号の集合を $\Sigma=\mathbb Z\cup\{+,*,(,)\}$、非終端記号の集合を $\{A,M,P\}$、開始記号を $A$、生成規則を以下とする文法 $G$ を考える。

$$
A\to M,\quad A\to A+M,\quad M\to P,\quad M\to M*P,\quad P\to n,\quad P\to(A).
$$

ここで $n\in\mathbb Z$ である。$\mathcal L(G)$ を $G$ が生成する言語とする。$\mathcal L(G)$ を整数の加算と乗算の式の集合とみなす。すなわち、$+$ と $*$ は加算および乗算をそれぞれ表し、各式の構文木は計算の順序を表す。

$G$ で書かれた式を入力するとその値を計算するプログラムを、以下の手続き型言語で書きたい。

$$
I::=\mathrm{PUSH}_\alpha\mid\mathrm{POP}\mid\mathrm{SWAP}_i\mid\mathrm{IF}[X\cdots X][I]\mid\mathrm{INPUT}\mid\mathrm{ADD}\mid\mathrm{MUL}\mid\mathrm{LOOP}\mid I;I.
$$

ここで、$\alpha$ は記号、$X$ は記号の集合、$i$ は正の整数である。単一集合 $\{\alpha\}$ を $\underline\alpha$ と書く。この言語のインタプリタはスタックを $1$ つ持つ。スタックは最初は $1$ つの記号 `$` だけからなる。インタプリタには $\Sigma$ の記号の有限列が入力として与えられる。プログラムが終了したとき、スタックが空でなければ、インタプリタはスタックの先頭の記号を出力する。各構文の意味は図 5 の通りである。

| 構文 | 意味 |
|---|---|
| $\mathrm{PUSH}_\alpha$ | $\alpha$ をスタックにプッシュする。 |
| $\mathrm{POP}$ | スタックから記号を $1$ つポップして捨てる。スタックが空ならば何もしない。 |
| $\mathrm{SWAP}_i$ | スタックの $1$ 番目（先頭）と $i$ 番目の記号を交換する。スタックが $i$ より短い場合は何もしない。 |
| $\mathrm{IF}[X_i\cdots X_1][I]$ | $i$ 個の記号 $\alpha_i,\ldots,\alpha_1$ がスタックの先頭にこの順（$\alpha_1$ が先頭）に存在し、かつ任意の $k\in\{i,\ldots,1\}$ について $\alpha_k\in X_k$ ならば、$I$ を実行する。そうでなければ何もしない。 |
| $\mathrm{INPUT}$ | 入力から $1$ つ記号を読み込みスタックにプッシュする。入力が残っていないならば `$` をプッシュする。 |
| $\mathrm{ADD}$ | $2$ つの整数をスタックからポップし、それらの和を求め、結果をスタックにプッシュする。$2$ つの整数がスタックの先頭になければ何もしない。 |
| $\mathrm{MUL}$ | 積を求めることを除いて $\mathrm{ADD}$ に同じ。 |
| $\mathrm{LOOP}$ | プログラムの先頭にジャンプする。 |
| $I_1;I_2$ | $I_1$ を実行してから $I_2$ を実行する。 |

例えば、プログラム

```text
INPUT; IF[Σ][ADD; LOOP]; IF[$ Z $][SWAP_2]
```

は、入力が整数だけからなるとき入力の和を、そうでないとき `$` を出力する。このプログラムに入力 $2\ 3\ 4$ を与えて実行したとき、スタックは以下のように変化し、結果として出力は $9$ である（`Z` は $\mathbb Z$ を表す）。

$$
\$\xrightarrow{\mathrm{INPUT}}\$\,2\xrightarrow{\mathrm{ADD}}\$\,2\xrightarrow{\mathrm{INPUT}}\$\,2\,3\xrightarrow{\mathrm{ADD}}\$\,5\xrightarrow{\mathrm{INPUT}}\$\,5\,4\xrightarrow{\mathrm{ADD}}\$\,9\xrightarrow{\mathrm{INPUT}}\$\,9\,\$\xrightarrow{\mathrm{SWAP}_2}\$\,\$\,9.
$$

以下の問いに答えよ。

(1) $G$ において $A$ から $1*(2+3)$ に至る導出系列をひとつ示せ。

(2) $1\ 2\ 3\ +\ 4\ +\ *$ を入力として与えた時以下のプログラムの出力を求めよ。

```text
INPUT; IF[+][POP; ADD]; IF[*][POP; MUL]; IF[Σ][LOOP]; IF[$ Z $][POP]
```

(3) $G'$ を $G$ から $2$ つの生成規則 $M\to M*P$ および $P\to(A)$ を取り除いた文法とする。入力が $\mathcal L(G')$ に属するとき与えられた式の値を、そうでないとき `$` を出力するプログラムを書け。

(4) 入力が $\mathcal L(G)$ に属すると仮定して、与えられた式の値を出力するプログラムを書け。

### 题目描述

文法 $G$ 的终结符为整数集合 $\mathbb Z$ 及 $+,*,(,)$，非终结符为 $A,M,P$，开始符号为 $A$，产生式为

$$
A\to M\mid A+M,\quad M\to P\mid M*P,\quad P\to n\mid(A),\qquad n\in\mathbb Z.
$$

用下述单栈语言求表达式值。栈初始为单个符号 `$`，程序结束时输出栈顶。指令含义如下，栈模式按从较深位置到栈顶的顺序书写。

| 指令 | 含义 |
|---|---|
| `PUSH_a` | 将符号 $a$ 入栈 |
| `POP` | 弹出栈顶；空栈则不操作 |
| `SWAP_i` | 交换栈顶与从栈顶数第 $i$ 个符号；深度不足不操作 |
| `IF[X_i ... X_1][I]` | 若栈顶的 $i$ 个符号依序属于各集合 $X_i,\ldots,X_1$，则执行 $I$ |
| `INPUT` | 读一个输入符号入栈；无剩余输入则压入 `$` |
| `ADD`, `MUL` | 栈顶两符号均为整数时弹出并压入其和、积，否则不操作 |
| `LOOP` | 跳至整个程序的第一条指令 |
| `I; I` | 顺序执行 |

`IF` 的单个符号表示对应单元素集合，$\Sigma=\mathbb Z\cup\{+,*,(,)\}$。

(1) 写出 $A$ 到 $1*(2+3)$ 的推导。

(2) 输入 `1 2 3 + 4 + *` 时，求下列程序输出：

```text
INPUT; IF[+][POP; ADD]; IF[*][POP; MUL];
IF[Σ][LOOP]; IF[$ Z $][POP]
```

其中 `Z` 表示 $\mathbb Z$。

(3) 从 $G$ 中删除 $M\to M*P$ 及 $P\to(A)$ 得 $G'$。写程序：输入属于 $L(G')$ 时输出表达式值，否则输出 `$`。

(4) 假定输入属于 $L(G)$，写程序求其值。

## **Kai**

### (1)

$$
A\Rightarrow M\Rightarrow M*P\Rightarrow P*P\Rightarrow1*P\Rightarrow1*(A)\Rightarrow1*(A+M)\Rightarrow1*(M+M)\Rightarrow1*(P+M)\Rightarrow1*(2+M)\Rightarrow1*(2+P)\Rightarrow1*(2+3).
$$

### (2)

每次读入并执行该轮运算后的栈依次为

$$
\$\,1\ ;\quad\$\,1\,2\ ;\quad\$\,1\,2\,3\ ;\quad\$\,1\,5\ ;\quad\$\,1\,5\,4\ ;\quad\$\,1\,9\ ;\quad\$\,9.
$$

读完输入后去掉末尾的 `$`，输出 $\boxed9$。

### (3)

$L(G')$ 恰为 $n_0+n_1+\cdots+n_k$（$k\ge0$）。以下程序使用辅助符号 `E`，它不同于任何输入符号及终止符 `$`。令 `U` 表示 $\Sigma$ 与终止符 `$` 的并集。

```text
IF[Z + Z][SWAP_2; POP; ADD; LOOP];
IF[$ Z][INPUT; IF[+][LOOP]; IF[$][SWAP_2; PUSH_E]];
IF[Z +][INPUT; IF[Z][LOOP]];
IF[$][INPUT; IF[Z][LOOP]];
IF[U][PUSH_$];
IF[E][POP]
```

第一个分支把 `a + b` 归约为 `a+b`。其余分支保证整数与加号交替出现。仅在完整的 `$ 整数 $` 情形进入成功状态 `E`，最后弹出 `E` 输出结果；其余情况栈顶置为 `$`。

### (4)

令 `T` 表示 加号、右括号及终止符 `$` 组成的集合，仍使用上述 `E,U`。程序为

```text
IF[Z * Z][SWAP_2; POP; MUL; LOOP];
IF[Z + Z T][SWAP_3; POP; SWAP_2; SWAP_3; ADD; SWAP_2; LOOP];
IF[( Z )][POP; SWAP_2; POP; LOOP];
IF[$ Z $][POP; PUSH_E];
IF[U][INPUT; LOOP];
POP
```

第一条立即归约乘法；第二条仅当前瞻符号为 `+`、`)` 或输入结束时归约加法，并保留前瞻符号，因此乘法优先于加法。第三条把 `( n )` 归约为 $n$。无法归约时读入下一个符号，直到栈为 `$ 结果 $`，此时移除结束符并输出结果。
