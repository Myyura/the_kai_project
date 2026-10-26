---
sidebar_label: "2025年8月実施 問題IV（情報工学）"
tags:
  - Chuo-University
  - Computer-Science.Algorithm-Design.Euclidean-Algorithm
  - Mathematics.Number-Theory.Modular-Arithmetic
---

# 中央大学 理工学研究科 情報工学専攻 2025年8月実施 一般入試 問題IV

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

問題Iは必答。問題II〜Vのうち、2問を選んで解答すること。

**問題IV**

つぎの設問に答えよ。

**1.** ユークリッドの互除法により2個の自然数 $x,y$ の最大公約数 $d=\gcd(x,y)$ を計算する以下の再帰関数（C言語のプログラム）について考える。

```text
1: long long int gcd(long long int x, long long int y){
2:     if(y==0) return x;
3:     long long int q=x/y;
4:     return gcd(y, x-q*y);
5: }
```

(1) この関数を「`gcd(345,234);`」と呼び出したときの戻り値を示せ。

(2) この関数を、自然数ではなく負の数を指定して「`gcd(-345,234);`」と呼び出したときの戻り値を示せ。

(3) 入力として自然数ではなく負の整数が与えられても結果が常に非負の数になるように、プログラムを修正せよ。解答には修正すべき行番号を示し、それをどのように修正すればよいのかを記せ。

**2.** 上記と同様に、$d=\gcd(x,y)=\alpha\cdot x+\beta\cdot y$ を満たす $\alpha,\beta$、および $d$ を計算する以下の再帰関数（C言語のプログラム）について考える。

(1) 空欄 (i) および (ii) に適切な式を記入せよ。

(2) $\gcd(x,y)$ の値が非負になるようにプログラムを修正せよ。解答には修正すべき行番号を示し、それをどのように修正すればよいのかを記せ。

```text
1: long long int gcd(long long int x,long long int y,
2:                   long long int*alpha,long long int*beta){
3:     long long int q,a,b;
4:     if(y==0) { *alpha=1; *beta=0; return x;}
5:     long long int d=gcd(y, x-(q=x/y)*y, &a, &b);
6:     *alpha= (i) ; *beta= (ii) ; return d;
7: }
```

**3.** 以下で指示する値を表示するC言語のプログラムを記述せよ。

相異なる3個の素数 $p_0,p_1,p_2$ について、$p_0$ による剰余が $r_0$、$p_1$ による剰余が $r_1$、$p_2$ による剰余が $r_2$ であるような整数 $v$ の値を計算する関数「`long long int rem3(long long int p[3], long long int r[3]);`」をC言語の関数として定義せよ。実引数は `long long int` 型要素3個からなる配列 `p[3]` および `r[3]` であり、`p[i]` に $p_i$、`r[j]` に $r_j$（$0\le i,j\le2$）を格納して呼び出すこととする。

ただし、関数定義の中で上記 **2.(2)** で修正後の関数

```c
long long int gcd(long long int x, long long int y,
                  long long int*alpha, long long int*beta);
```

を適切に呼び出すこと。なお、入力される数値や途中結果は正しく表現可能な範囲に入っていると仮定してよい。

### 题目描述

问题 I 必答。从问题 II～V 中选择两题作答。

**问题 IV**

回答以下问题。

**1.** 考虑上面的第一个 C 语言递归函数，它用欧几里得算法计算两个自然数 $x,y$ 的最大公约数 $d=\gcd(x,y)$。

(1) 给出调用 `gcd(345,234);` 时的返回值。

(2) 给出使用负数调用 `gcd(-345,234);` 时的返回值。

(3) 修改程序，使输入负整数时也总是返回非负数。写明需要修改的行号及修改后的内容。

**2.** 考虑上面的第二个 C 语言递归函数，它计算满足 $d=\gcd(x,y)=\alpha x+\beta y$ 的 $\alpha,\beta$ 以及 $d$。

(1) 在空格 (i)、(ii) 中填入适当的表达式。

(2) 修改程序，使 $\gcd(x,y)$ 的值非负。写明需要修改的行号及修改后的内容。

两段程序的行号、初始条件与递归调用均如上方代码所示。

**3.** 编写 C 语言程序，计算以下指定的值。

给定三个互不相同的素数 $p_0,p_1,p_2$，定义函数

```c
long long int rem3(long long int p[3], long long int r[3]);
```

计算整数 $v$，使其除以 $p_0,p_1,p_2$ 的余数分别为 $r_0,r_1,r_2$。实参 `p[3]`、`r[3]` 均为由三个 `long long int` 元素组成的数组，其中 `p[i]` 保存 $p_i$，`r[j]` 保存 $r_j$（$0\le i,j\le2$）。

函数定义中必须适当调用第 **2.(2)** 问修正后的扩展最大公约数函数 `gcd(x,y,alpha,beta)`。可以假设输入数值及中间计算结果均在能够正确表示的范围内。

## **Kai**

### 1. (1)

引数の組は

$$
(345,234)\to(234,111)\to(111,12)\to(12,3)\to(3,0)
$$

となるので、戻り値は $\boxed{3}$。

### 1. (2)

Cの符号付き整数除算は商の小数部分を零に向かって切り捨てる。例えば $-345/234=-1$ であり、最初の余りは $-345-(-1)234=-111$。したがって

$$
(-345,234)\to(234,-111)\to(-111,12)\to(12,-3)\to(-3,0)
$$

となり、戻り値は $\boxed{-3}$。

### 1. (3)

2行目を次のように変更する。

```c
if (y == 0) return (x < 0) ? -x : x;
```

これにより終端で返す値が $|x|$ となる。なお、数学的な最大公約数やその符号反転が使用する整数型で表現可能な範囲を考えている。

### 2. (1)

再帰呼び出しから返った係数を $a,b$ とすると、$q=x/y$ に対して

$$
d=ay+b(x-qy)=bx+(a-qb)y.
$$

従って空欄は

$$
\boxed{\text{(i)}\ b},\qquad
\boxed{\text{(ii)}\ a-q*b}.
$$

### 2. (2)

4行目を次に置き換える。

```c
if (y == 0) {
    *alpha = (x < 0) ? -1 : 1;
    *beta = 0;
    return (x < 0) ? -x : x;
}
```

基底の場合に $d=|x|=\alpha x+\beta y$ を満たす。再帰から戻るときは小問 (1) の係数更新がこの等式を保存するので、非負の最大公約数と正しいベズー係数が同時に得られる。

### 3.

異なる素数なので $\gcd(p_0,p_1)=\gcd(p_0p_1,p_2)=1$。拡張ユークリッド法で

$$
ap_0+bp_1=1,\qquad c(p_0p_1)+dp_2=1
$$

を満たす係数を得る。まず

$$
t=r_0bp_1+r_1ap_0
$$

とすれば、$t\equiv r_0\pmod{p_0}$、$t\equiv r_1\pmod{p_1}$ である。さらに

$$
v=tdp_2+r_2c(p_0p_1)
$$

とすれば、$v\equiv t\pmod{p_0p_1}$ および $v\equiv r_2\pmod{p_2}$ を満たす。これを実装すると次のようになる。

```c
long long int rem3(long long int p[3], long long int r[3]) {
    long long int a, b, c, d;
    long long int p01 = p[0] * p[1];
    long long int modulus = p01 * p[2];

    gcd(p[0], p[1], &a, &b);
    gcd(p01, p[2], &c, &d);

    long long int t = r[0] * b * p[1] + r[1] * a * p[0];
    long long int v = t * d * p[2] + r[2] * c * p01;

    v %= modulus;
    if (v < 0) v += modulus;
    return v;
}
```

最後の2行は $0\le v<p_0p_1p_2$ の代表元を選ぶための処理である。任意の整数倍の $p_0p_1p_2$ を加えても、3つの合同条件は変わらない。

## **Reference**

- [中央大学公式問題：2026年度 情報工学専攻、冊内 pp.3,7（PDF 第4,8頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=8)
- [中央大学公式解答例・出題の意図：問題IV、冊内 p.8（PDF 第9頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=9)
