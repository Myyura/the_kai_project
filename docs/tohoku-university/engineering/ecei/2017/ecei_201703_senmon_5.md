---
sidebar_label: 2017年3月実施 専門科目 問題5 計算機2
tags:
  - Tohoku-University
  - Computer-Science.Programming.Recursion
  - Computer-Science.Programming.Evaluation-Strategy-and-Termination
---

# 東北大学 工学研究科 電気・情報系 2017年3月実施 専門科目 問題5 計算機2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 5(a) の構文を持つプログラミング言語を考える。ただし、各式の意味は Fig. 5(b) の通りであるとする。たとえば、Fig. 5(c) で与えられるプログラムの下で式 $f(1,1)$ は

$$
f(1,1)\twoheadrightarrow\operatorname{succ}(f(0,1))\twoheadrightarrow\operatorname{succ}(1)\twoheadrightarrow2
$$

のように評価される。また、このプログラムの下での $g(1)$ の評価のように、プログラムの下での式の評価は停止しないことがある。

(1) Fig. 5(c) のプログラムについて以下の問に答えよ。

(a) このプログラムの下で $f(0,2)$ および $f(2,2)$ を評価せよ。評価の過程も示せ。

(b) 任意の自然数 $m$ と $n$ に対し、このプログラムの下で $f(m,n)$ が $m+n$ に評価されることを数学的帰納法を用いて証明せよ。

(2) この言語におけるプログラミングに関する以下の問に答えよ。

(a) 自然数同士の乗算を行う関数 $mult$ を含むプログラムを与えよ。

(b) 自然数 $m$ と $n$ の大小比較を行う関数 $le$ を含むプログラムを与えよ。ただし、このプログラムの下で $le(m,n)$ は、$m\le n$ ならば $1$ に、そうでなければ $0$ に評価される。

(3) このプログラミング言語において、任意のプログラム $p$ とその中で定義される任意の 1 引数関数 $h$ に対し、各組に 1 つの自然数 $n_{ph}$ を割り当てる単射が存在する。このとき、関数 $halt$ を含むプログラム $p_{halt}$ で次の性質を満たすものをこのプログラミング言語上で与えることはできない。

> 任意のプログラム $p$ とその中で定義される任意の 1 引数関数 $h$ および任意の自然数 $m$ について、プログラム $p_{halt}$ の下で $halt(n_{ph},m)$ は、$p$ の下で $h(m)$ の評価が停止するときは $1$ に、そうでないときには $0$ に評価される。

このことを以下の手順に従い示せ。

- 上記のようなプログラム $p_{halt}$ が存在することを仮定し、$p_{halt}$ に以下の関数を加えたプログラム $p$ を考えよ。

```text
h(x) = ifz halt(x,x) then 0 else loop()
loop() = loop()
```

- $p$ の下で $h(n_{ph})$ の評価が停止するか否かを議論せよ。

Fig. 5(a)：

```text
プログラム       p ::= d1 ... dn
関数定義         d ::= f(x1,...,xn) = e
式               e ::= n
                     | succ(e)
                     | pred(e)
                     | x
                     | ifz e1 then e2 else e3
                     | f(e1,...,en)
```

Fig. 5(b)：

| 式 | 意味 |
|---|---|
| $n$ | 評価結果は $n$ となる。 |
| $succ(e)$ | $e$ を評価し、その結果を $n$ とする。すると全体の式の評価結果は $n+1$ となる。 |
| $pred(e)$ | $e$ を評価し、その結果を $n$ とする。そして、$n\ne0$ であれば $n-1$、そうでなければ $0$ が全体の式の評価結果となる。 |
| `ifz e1 then e2 else e3` | まず $e_1$ を評価する。その結果が $0$ であれば $e_2$ を評価し、そうでなければ $e_3$ を評価する。 |
| $f(e_1,\ldots,e_k)$ | $f(x_1,\ldots,x_k)=e$ という関数定義が存在するものとする。まず $e_i$（ただし $1\le i\le k$）をそれぞれ評価し、その結果を $n_i$ とする。そして、関数 $f$ の本体である式 $e$ 中の各 $x_i$ を自然数定数 $n_i$ で置き換えて得られる式を評価する。 |

Fig. 5(c)：

```text
f(x,y) = ifz x then y else succ(f(pred(x),y))
g(x) = g(x)
```

### 题目描述

程序由有限个函数定义 $f(x_1,\ldots,x_k)=e$ 构成。表达式可为自然数常量、变量、`succ(e)`、`pred(e)`、`ifz e1 then e2 else e3` 或函数调用。`succ` 加一；`pred(0)=0`，否则减一；`ifz` 在条件等于零时只求值 then 分支，否则只求值 else 分支。函数调用先求全部实参，再以所得数值替换形参求函数体。

给定程序

```text
f(x,y) = ifz x then y else succ(f(pred(x),y))
g(x) = g(x)
```

1. (a) 求 $f(0,2),f(2,2)$ 的求值过程；(b) 用归纳法证明 $f(m,n)=m+n$。
2. (a) 用此语言编写自然数乘法 `mult`；(b) 编写 `le(m,n)`，使其在 $m\le n$ 时输出 $1$，否则输出 $0$。
3. 每一对程序 $p$ 及其中的一元函数 $h$ 都有唯一自然数编码 $n_{ph}$。证明不存在此语言程序 $p_{halt}$ 中的函数 `halt`，能对所有 $p,h,m$ 正确决定 $h(m)$ 是否终止（终止输出 $1$，否则输出 $0$）。按要求向 $p_{halt}$ 添加

```text
h(x) = ifz halt(x,x) then 0 else loop()
loop() = loop()
```

得到程序 $p$，讨论 $h(n_{ph})$ 的终止性。

## **Kai**

### (1)

$$
f(0,2)\to2,
$$

$$
f(2,2)\to\operatorname{succ}(f(1,2))
\to\operatorname{succ}(\operatorname{succ}(f(0,2)))\to4.
$$

固定 $n$ 对 $m$ 归纳：$m=0$ 时 $f(0,n)=n$；若 $f(m,n)=m+n$，则

$$
f(m+1,n)=\operatorname{succ}(f(m,n))=m+n+1.
$$

故对任意 $m,n\in\mathbb N$ 均成立，并且求值终止。

### (2)

保留上述 $f$，增加

```text
mult(m,n) = ifz m then 0 else f(n,mult(pred(m),n))
le(m,n) = ifz m then 1 else
              (ifz n then 0 else le(pred(m),pred(n)))
```

乘法按第一个参数归纳即得 $\operatorname{mult}(m,n)=mn$；比较函数同时减一，直到一方为零，因此恰在 $m\le n$ 时返回 $1$。

### (3)

令 $k=n_{ph}$。若 `halt(k,k)=0`，其判定声称 $h(k)$ 不终止，但 $h(k)$ 立即返回 $0$；若 `halt(k,k)=1`，其判定声称 $h(k)$ 终止，但 $h(k)$ 执行 `loop()` 而不终止。两种情形均矛盾，故这样的 `halt` 不存在。
