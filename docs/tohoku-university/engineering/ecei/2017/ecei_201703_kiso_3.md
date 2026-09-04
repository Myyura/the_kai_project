---
sidebar_label: 2017年3月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
---

# 東北大学 工学研究科 電気・情報系 2017年3月実施 基礎科目 問題3 情報基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$n$ 変数論理ベクトル $\boldsymbol{x}\in\{0,1\}^n$ と $a\in\{0,1\}$ に対し、$\boldsymbol{x}|_{x_i=a}$ を

$$
\boldsymbol{x}|_{x_i=a}=(x_1,\ldots,x_{i-1},a,x_{i+1},\ldots,x_n)
$$

と定義する。$f(\boldsymbol{x}),g(\boldsymbol{x})$ を $n$ 変数論理関数とし、$\cdot,+,\oplus,\overline{\phantom{x}}$ をそれぞれ論理積、論理和、排他的論理和、否定演算子とする。以下の問に答えよ。

(1) $f(\boldsymbol{x})\cdot g(\boldsymbol{x})=0$ が成立するとき、$f(\boldsymbol{x})+g(\boldsymbol{x})=f(\boldsymbol{x})\oplus g(\boldsymbol{x})$ であることを示せ。

(2) $\bar a=1\oplus a$ であることを示せ。

(3) 論理演算子 $\frac{\partial}{\partial x_i}$ を $\frac{\partial f(\boldsymbol{x})}{\partial x_i}=f(\boldsymbol{x}|_{x_i=0})\oplus f(\boldsymbol{x}|_{x_i=1})$ と定義するとき、$f(\boldsymbol{x})=f(\boldsymbol{x}|_{x_i=0})\oplus x_i\cdot\frac{\partial f(\boldsymbol{x})}{\partial x_i}$ を示せ。

(4) 以下の関係を満たす $c_0,c_1,c_2,c_3\in\{0,1\}$ を求めよ。

$$
\overline{x_1+x_2}=c_0\oplus c_1\cdot x_1\oplus c_2\cdot x_2\oplus c_3\cdot x_1\cdot x_2
$$

### 题目描述

设 $f,g:\{0,1\}^n\to\{0,1\}$。符号 $\cdot,+,\oplus,\overline{\phantom{x}}$ 分别表示 AND、OR、XOR、NOT；$\boldsymbol x|_{x_i=a}$ 表示将第 $i$ 个分量替换为 $a$。

1. 若 $f(\boldsymbol x)g(\boldsymbol x)=0$，证明 $f+g=f\oplus g$。
2. 证明 $\bar a=1\oplus a$。
3. 定义 $\partial f/\partial x_i=f(\boldsymbol x|_{x_i=0})\oplus f(\boldsymbol x|_{x_i=1})$，证明
   

$$
f(\boldsymbol x)=f(\boldsymbol x|_{x_i=0})\oplus x_i\frac{\partial f}{\partial x_i}.
$$

4. 求 $c_0,c_1,c_2,c_3\in\{0,1\}$，使
   

$$
\overline{x_1+x_2}=c_0\oplus c_1x_1\oplus c_2x_2\oplus c_3x_1x_2.
$$

## **Kai**

### (1)

$fg=0$ 排除了 $(f,g)=(1,1)$；其余三种输入 $00,01,10$ 的 OR 与 XOR 均相同。

### (2)

$a=0,1$ 时，$1\oplus a$ 分别为 $1,0$，即 $\bar a$。

### (3)

记 $f_0=f(\boldsymbol x|_{x_i=0}),f_1=f(\boldsymbol x|_{x_i=1})$。当 $x_i=0$ 时右边为 $f_0$；当 $x_i=1$ 时右边为 $f_0\oplus f_0\oplus f_1=f_1$，故恒成立。

### (4)

依次代入 $(x_1,x_2)=(0,0),(1,0),(0,1),(1,1)$，得到

$$
c_0=1,\quad c_0\oplus c_1=0,\quad c_0\oplus c_2=0,\quad c_0\oplus c_1\oplus c_2\oplus c_3=0.
$$

所以 $\boxed{(c_0,c_1,c_2,c_3)=(1,1,1,1)}$。
