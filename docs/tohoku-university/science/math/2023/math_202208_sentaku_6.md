---
sidebar_label: "2022年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Weak-and-Strong-Convergence
---

# 東北大学 理学研究科 数学専攻 2022年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

実ヒルベルト空間 $(H,(\cdot,\cdot))$ とそのノルム $\|x\|=\sqrt{(x,x)}$（$x\in H$）について、以下の問いに答えよ。

(1) 次の (i), (ii) を証明せよ。

(i) $H$ の元からなる列 $\{x_n\}_{n=1}^\infty$ が $x\in H$ に弱収束し、さらに $\lim_{n\to\infty}\|x_n\|=\|x\|$ を満たすとき、$\{x_n\}_{n=1}^\infty$ は $x$ に強収束する。

(ii) $H$ の元からなる列 $\{x_n\}_{n=1}^\infty$ が $x\in H$ に弱収束するとき、次の不等式が成り立つ。

$$
\liminf_{n\to\infty}\|x_n\|\ge\|x\|.
$$

(2) $H$ の部分集合 $S$ が以下の性質を満たすものとする。

集合 $S$ の元からなる列 $\{x_n\}_{n=1}^\infty$ が $x\in H$ に弱収束するならば、$x$ は $S$ に属する。

また $x_0\in H$ に対して、汎関数 $I:S\to\mathbb R$ を

$$
I(y)=\|y-x_0\|,\quad y\in S
$$

と定める。汎関数 $I$ の任意の最小化列 $\{y_n\}_{n=1}^\infty$（すなわち $y_n\in S$ かつ $I(y_n)\to\inf_{y\in S}I(y)$ を満たす列 $\{y_n\}_{n=1}^\infty$）は $H$ 上で強収束する部分列を持つことを証明せよ。

### 题目描述

设 $(H,(\cdot,\cdot))$ 为实希尔伯特空间，范数为 $\|x\|=\sqrt{(x,x)}$。回答下列问题。

(1) 证明以下两项。

(i) 若序列 $\{x_n\}\subset H$ 弱收敛于 $x\in H$，并且 $\|x_n\|\to\|x\|$，则它强收敛于 $x$。

(ii) 若序列 $\{x_n\}\subset H$ 弱收敛于 $x\in H$，则

$$
\liminf_{n\to\infty}\|x_n\|\ge\|x\|.
$$

(2) 设子集 $S\subset H$ 满足：如果 $S$ 中的序列弱收敛于 $x\in H$，则 $x\in S$。对给定的 $x_0\in H$，定义泛函 $I:S\to\mathbb R$：

$$
I(y)=\|y-x_0\|\qquad(y\in S).
$$

证明 $I$ 的任意极小化序列 $\{y_n\}_{n=1}^\infty$，即满足 $y_n\in S$ 且 $I(y_n)\to\inf_{y\in S}I(y)$ 的序列，都具有在 $H$ 中强收敛的子列。

## **Kai**

### (1)(i)

弱収束とノルムの収束を用いて、

$$
\begin{aligned}
\|x_n-x\|^2
&=\|x_n\|^2-2(x_n,x)+\|x\|^2\\
&\longrightarrow\|x\|^2-2\|x\|^2+\|x\|^2=0.
\end{aligned}
$$

従って $x_n\to x$ が強収束する。

### (1)(ii)

$\|x_n-x\|^2\ge0$ より

$$
\|x_n\|^2\ge2(x_n,x)-\|x\|^2.
$$

弱収束を用いて下極限をとると $\liminf_n\|x_n\|^2\ge\|x\|^2$ となる。平方根の単調性・連続性から所望の不等式を得る。

### (2)

$d=\inf_{y\in S}\|y-x_0\|$ とし、任意の最小化列 $(y_n)$ をとる。$\|y_n-x_0\|\to d$ なので $(y_n)$ は有界である。Hilbert 空間の有界列は弱収束部分列を持つので、$y_{n_j}\rightharpoonup y_*$ となる部分列を選ぶ。$S$ に関する仮定から $y_*\in S$ である。

(1)(ii) を $y_{n_j}-x_0\rightharpoonup y_*-x_0$ に適用すると

$$
d\le\|y_*-x_0\|\le\liminf_j\|y_{n_j}-x_0\|=d.
$$

従って $\|y_{n_j}-x_0\|\to\|y_*-x_0\|$ であり、(1)(i) により $y_{n_j}-x_0\to y_*-x_0$ が強収束する。よって元の最小化列も強収束する部分列を持つ。

## **Reference**

- [東北大学公式問題（2023年度・選択問題、PDF 5ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_sentaku.pdf)
- [L^2：2023年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#962494ce-7882-4884-8385-8807fec5f37a)
