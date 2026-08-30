---
sidebar_label: "2017年8月実施 専門科目 システム理論 [2]"
tags:
  - Kobe-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Linear-Programming.Simplex-Method
---
# 神戸大学 システム情報学研究科 2017年8月実施 専門科目 システム理論 \[2\]

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 次の標準形線形計画問題 $P_1$ の双対問題 $D_1$ を求めよ。双対変数を $\boldsymbol w$ とする。

   $$
   \begin{array}{ll}
   (P_1)\quad\text{最小化} & \boldsymbol c^{\mathsf T}\boldsymbol x\\
   \text{制約条件} & A\boldsymbol x=\boldsymbol b,\\
                    & \boldsymbol x\geq\boldsymbol 0.
   \end{array}
   $$

   ただし $\boldsymbol c,\boldsymbol x,\boldsymbol b$ は列ベクトル、$A$ は $m\times n$ 行列であり、$m<n$ かつ $\operatorname{rank}A=m$ とする。

2. $P_1$ と $D_1$ の関係を利用し、次の一般形線形計画問題 $P_2$ の双対問題 $D_2$ を求めよ。双対変数を $\boldsymbol w$ とする。

   $$
   \begin{array}{ll}
   (P_2)\quad\text{最小化} & \boldsymbol c^{\mathsf T}\boldsymbol x\\
   \text{制約条件} & A\boldsymbol x\geq\boldsymbol b,\\
                    & \boldsymbol x\geq\boldsymbol 0.
   \end{array}
   $$

   ただし $P_1$ と同様に、$\boldsymbol c,\boldsymbol x,\boldsymbol b$ は列ベクトル、$A$ は $m\times n$ 行列であり、$m<n$ かつ $\operatorname{rank}A=m$ とする。

3. 次の主問題 $P_3$ の双対問題 $D_3$ を作り、$D_3$ を図解法とシンプレックス・タブローにより解け。なお、$P_3$ を解く必要はない。

   $$
   \begin{array}{ll}
   (P_3)\quad\text{最大化} & 6x_1+4x_2\\
   \text{制約条件} & 2x_1+x_2\leq70,\\
                    & 3x_1+4x_2\leq180,\\
                    & x_1,x_2\geq0.
   \end{array}
   $$

### 题目描述

1. 写出标准形式最小化问题 $P_1$ 的对偶问题 $D_1$。
2. 利用 $P_1$ 与 $D_1$ 的关系，写出不等式形式最小化问题 $P_2$ 的对偶问题 $D_2$。
3. 写出给定二维线性规划 $P_3$ 的对偶 $D_3$，并分别用图解法和单纯形表求解 $D_3$；不要求求解 $P_3$。

## **Kai**

### (1)

$P_1$ の双対問題は

$$
\begin{array}{ll}
(D_1)\quad\text{最大化} & \boldsymbol b^{\mathsf T}\boldsymbol w\\
\text{制約条件} & A^{\mathsf T}\boldsymbol w\leq\boldsymbol c,\\
                 & \boldsymbol w\in\mathbb R^m
\end{array}
$$

である。等式制約に対応する双対変数 $\boldsymbol w$ には符号制約がない。

### (2)

余剰変数 $\boldsymbol s\geq\boldsymbol0$ を用いると、$P_2$ の制約は

$$
A\boldsymbol x-\boldsymbol s=\boldsymbol b,\qquad
\begin{pmatrix}\boldsymbol x\\\boldsymbol s\end{pmatrix}\geq\boldsymbol0
$$

となる。(1) を行列 $(A,-I_m)$、目的係数 $(\boldsymbol c,\boldsymbol0)$ に適用すると

$$
A^{\mathsf T}\boldsymbol w\leq\boldsymbol c,\qquad
-\boldsymbol w\leq\boldsymbol0
$$

を得る。したがって

$$
\begin{array}{ll}
(D_2)\quad\text{最大化} & \boldsymbol b^{\mathsf T}\boldsymbol w\\
\text{制約条件} & A^{\mathsf T}\boldsymbol w\leq\boldsymbol c,\\
                 & \boldsymbol w\geq\boldsymbol0
\end{array}
$$

である。

### (3)

$P_3$ の双対問題は

$$
\begin{array}{ll}
(D_3)\quad\text{最小化} & z=70w_1+180w_2\\
\text{制約条件} & 2w_1+3w_2\geq6,\\
                 & w_1+4w_2\geq4,\\
                 & w_1,w_2\geq0
\end{array}
$$

である。

#### 図解法

境界直線を

$$
L_1:2w_1+3w_2=6,\qquad L_2:w_1+4w_2=4
$$

とする。実行可能領域は両直線の上側であり、その下側境界は次の折れ線となる（模式図）。

```text
w2
 ↑       実行可能領域
 │       ↑ ↑ ↑ ↑ ↑
2│ A●╲
 │    ╲  L1
 │     ╲
2/5     C●╲  L2
 │          ╲
0└───────────B●════════════→ w1
 0          12/5  4
```

端点は

$$
A=(0,2),\qquad
C=L_1\cap L_2=\left(\frac{12}{5},\frac25\right),\qquad
B=(4,0).
$$

各点での目的関数値は

| 点 | $A$ | $C$ | $B$ |
|---|---:|---:|---:|
| $z$ | $360$ | $240$ | $280$ |

である。目的係数は正なので、非有界方向へ進めば $z$ は増加する。ゆえに

$$
\boxed{(w_1,w_2)=\left(\frac{12}{5},\frac25\right)},\qquad
\boxed{z_{\min}=240}.
$$

#### シンプレックス・タブロー

$q=-z$ を最大化し、制約を

$$
-2w_1-3w_2+s_1=-6,\qquad
-w_1-4w_2+s_2=-4
$$

と書く。$C_j=(-70,-180,0,0)$ として双対シンプレックス法を用いる。初期タブローは

$$
\begin{array}{c|r|rrrr|r}
\text{基底}&C_B&w_1&w_2&s_1&s_2&b\\\hline
s_1&0&-2&-3&1&0&-6\\
s_2&0&-1&-4&0&1&-4\\\hline
&C_j-Z_j&-70&-180&0&0&
\end{array}
$$

である。第 $1$ 行を離脱行とすると

$$
\frac{-70}{-2}=35<\frac{-180}{-3}=60
$$

より $w_1$ が進入する。ピボット後は

$$
\begin{array}{c|r|rrrr|r}
\text{基底}&C_B&w_1&w_2&s_1&s_2&b\\\hline
w_1&-70&1&\frac32&-\frac12&0&3\\
s_2&0&0&-\frac52&-\frac12&1&-1\\\hline
&C_j-Z_j&0&-75&-35&0&
\end{array}
$$

となる。第 $2$ 行を離脱行とすると

$$
\frac{-75}{-5/2}=30<\frac{-35}{-1/2}=70
$$

より $w_2$ が進入する。したがって最終タブローは

$$
\begin{array}{c|r|rrrr|r}
\text{基底}&C_B&w_1&w_2&s_1&s_2&b\\\hline
w_1&-70&1&0&-\frac45&\frac35&\frac{12}{5}\\
w_2&-180&0&1&\frac15&-\frac25&\frac25\\\hline
&C_j-Z_j&0&0&-20&-30&
\end{array}
$$

である。右辺は非負、かつ $C_j-Z_j\leq0$ なので最適であり、

$$
(w_1,w_2)=\left(\frac{12}{5},\frac25\right),\qquad
q_{\max}=-240
$$

すなわち $z_{\min}=240$ を得る。
