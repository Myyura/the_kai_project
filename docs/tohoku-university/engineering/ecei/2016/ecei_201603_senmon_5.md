---
sidebar_label: 2016年3月実施 専門科目 問題5 計算機2
tags:
  - Tohoku-University
  - Computer-Science.Programming
  - Computer-Science.Data-Structures.Stack
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 専門科目 問題5 計算機2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 5(a) で定義したプログラミング言語および，Fig. 5(b) で定義したスタック機械の命令に関する以下の問に答えよ。スタック機械の各命令の動作は Fig. 5(c) で与えられている。空のスタックを $[]$，空のスタックに $n_1,\ldots,n_k$ をこの順でプッシュしたときに得られるスタックの状態を $[n_k,\ldots,n_1]$ と書くことにする。

(1) 式 “$(2-(3-5))$” に対応する命令

```text
PUSH 2; PUSH 3; PUSH 5; SUB; SUB; END
```

を考える。この命令を空のスタックから実行したときに得られるスタックの状態の遷移列を書き下せ。

(2) 式 “$(\mathrm{ifz}\ 3\ \mathrm{then}\ 4\ \mathrm{else}\ (5-6))$” に対応する命令

```text
PUSH 3; BRANCHZ (PUSH 4; END) (PUSH 5; PUSH 6; SUB; END)
```

を考える。この命令を空のスタックから実行したときに得られるスタックの状態の遷移列を書き下せ。

(3) 式 $e$ を評価した結果が $n$ であるとき，空のスタックから実行すると最終的なスタックの状態が $[n]$ になるような命令 $c$ が存在すれば，そのような $c$ を $\operatorname{compile}(e)$ と書くことにする。命令 $c_1$ と $c_2$ に対し，命令 $c_1\triangleleft c_2$ を，$c_1$ に出現する全ての END を $c_2$ で置き換えることにより得られる命令であると定義する。たとえば，`(PUSH 1; END)` $\triangleleft$ `(PUSH 2; END)` は `PUSH 1; PUSH 2; END` となる。また，たとえば $\operatorname{compile}((e_1-e_2))$ は，もし $\operatorname{compile}(e_1)$ と $\operatorname{compile}(e_2)$ が存在すれば，$\operatorname{compile}(e_1)\triangleleft\operatorname{compile}(e_2)\triangleleft(\text{SUB; END})$ と表せる。演算子 $\triangleleft$ は結合的であることに注意する。このとき以下の問に答えよ。

- (a) 整数定数式 $n$ に対し，$\operatorname{compile}(n)$ を書き下せ。
- (b) $e_1,e_2$ および $e_3$ を式とし，命令 $\operatorname{compile}(e_1),\operatorname{compile}(e_2)$ および $\operatorname{compile}(e_3)$ が存在すると仮定する。このとき $\operatorname{compile}((\mathrm{ifz}\ e_1\ \mathrm{then}\ e_2\ \mathrm{else}\ e_3))$ を $\operatorname{compile}(e_1),\operatorname{compile}(e_2),\operatorname{compile}(e_3)$ および $\triangleleft$ を用いて表せ。また，命令
$$
\operatorname{compile}(((\mathrm{ifz}\ 1\ \mathrm{then}\ 2\ \mathrm{else}\ 3)-4))
$$
を具体的に書き下せ。計算の過程も示すこと。
- (c) 式 $e$ の構文木のサイズに対し，$\operatorname{compile}(e)$ の構文木のサイズが指数関数的に大きくなる場合が存在するかを判定し，その根拠を示せ。

Fig. 5(a)：式

```text
e ::= n                              （整数定数）
    | (e1 - e2)                      （整数減算）
    | (ifz e1 then e2 else e3)        （条件分岐）
```

ただし，式 “$(\mathrm{ifz}\ e_1\ \mathrm{then}\ e_2\ \mathrm{else}\ e_3)$” の値は，$e_1$ の値が $0$ と等しければ，$e_2$ の値に，そうでなければ $e_3$ の値に等しい。演算子 $-$ は整数減算を表すとする。

Fig. 5(b)：命令

```text
c ::= END                    （命令の終端）
    | PUSH n; c              （整数プッシュ）
    | SUB; c                 （整数減算）
    | BRANCHZ (c1) (c2)      （ゼロ分岐）
```

Fig. 5(c)：各命令の動作

| 命令 | 動作 |
| --- | --- |
| `END` | なにもしない（命令の終端）。 |
| `PUSH n; c` | 整数 $n$ をスタックにプッシュする。その後 $c$ を実行する。 |
| `SUB; c` | $2$ つの整数 $n_2$ と $n_1$ をスタックからポップし，$n_1-n_2$ の結果をスタックにプッシュする。その後 $c$ を実行する。ただし，$n_2$ は最初のポップ操作で得られた整数であり，$n_1$ は次のポップ操作で得られた整数である。 |
| `BRANCHZ (c1) (c2)` | 整数 $n$ をスタックからポップする。その後，$n$ が $0$ なら $c_1$ を，そうでなければ $c_2$ を実行する。 |

### 题目描述

表达式为整数 $n$、减法 $e_1-e_2$ 或 $\operatorname{ifz}\ e_1\ \operatorname{then}\ e_2\ \operatorname{else}\ e_3$；条件值为零时取 $e_2$，否则取 $e_3$。

栈机指令如下，栈顶写在左边：

| 指令 | 行为 |
|---|---|
| `END` | 结束 |
| `PUSH n; c` | 压入 $n$，执行 $c$ |
| `SUB; c` | 先弹出 $n_2$，再弹出 $n_1$，压入 $n_1-n_2$，执行 $c$ |
| `BRANCHZ (c1) (c2)` | 弹出 $n$；$n=0$ 执行 $c_1$，否则执行 $c_2$ |

1. 从空栈执行 `PUSH 2; PUSH 3; PUSH 5; SUB; SUB; END`，写出栈变化。
2. 从空栈执行 `PUSH 3; BRANCHZ (PUSH 4; END) (PUSH 5; PUSH 6; SUB; END)`，写出栈变化。
3. 令 $\operatorname{compile}(e)$ 在空栈上执行后得到 $[e\text{ 的值}]$。定义 $c_1\triangleleft c_2$ 为把 $c_1$ 内每个 `END` 替换成 $c_2$；该运算满足结合律，且
   

$$
\operatorname{compile}(e_1-e_2)=\operatorname{compile}(e_1)\triangleleft\operatorname{compile}(e_2)\triangleleft(\mathrm{SUB;END}).
$$

   (a) 写出 $\operatorname{compile}(n)$；(b) 写出条件表达式的编译规则，并完整编译 $(\operatorname{ifz}\ 1\ \operatorname{then}\ 2\ \operatorname{else}\ 3)-4$；(c) 是否存在表达式族，使编译结果的语法树大小相对于原式语法树大小呈指数增长？说明理由。

## **Kai**

### (1)

$$
[]\to[2]\to[3,2]\to[5,3,2]\to[-2,2]\to[4].
$$

### (2)

$$
[]\to[3]\to[]\to[5]\to[6,5]\to[-1].
$$

因条件 $3\ne0$，执行第二个分支。

### (3)(a)–(b)

$$
\boxed{\operatorname{compile}(n)=\mathrm{PUSH}\ n;\mathrm{END}.}
$$

$$
\boxed{\operatorname{compile}(\operatorname{ifz}\ e_1\ \operatorname{then}\ e_2\ \operatorname{else}\ e_3)
=\operatorname{compile}(e_1)\triangleleft
\mathrm{BRANCHZ}\ (\operatorname{compile}(e_2))\ (\operatorname{compile}(e_3)).}
$$

先编译条件，再将减去 $4$ 的后续指令接到两分支末端，得

```text
PUSH 1;
BRANCHZ
    (PUSH 2; PUSH 4; SUB; END)
    (PUSH 3; PUSH 4; SUB; END)
```

### (3)(c)

存在。令 $b=(\operatorname{ifz}\ 0\ \operatorname{then}\ 0\ \operatorname{else}\ 0)$，$e_0=0$，$e_{k+1}=b-e_k$。原式语法树大小为 $\Theta(k)$。

$\operatorname{compile}(b)$ 有两个 `END`。将 $\operatorname{compile}(e_k)\triangleleft(\mathrm{SUB;END})$ 接入时，必须在两分支各复制一次。因此编译树大小满足 $C_{k+1}\ge2C_k$，且 $C_{k+1}=2C_k+O(1)$，故为 $\boxed{\Theta(2^k)}$。
