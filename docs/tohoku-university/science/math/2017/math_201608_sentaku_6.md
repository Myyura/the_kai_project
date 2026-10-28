---
sidebar_label: "2016年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Normed-Space
---

# 東北大学 理学研究科 数学専攻 2016年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

実ベクトル空間 $X$ がノルム $\|\cdot\|$ で定まる位相をもち、$K\subset X$ は条件

$$
\text{ある }r>0\text{ があって、}\{x\in X\mid\|x\|\le r\}\subset K
$$

を満たすとする。$p:X\to\mathbb R$ を

$$
p(x)=\inf\left\{\alpha>0\ \middle|\ \frac x\alpha\in K\right\}\qquad(x\in X)
$$

と定める。以下の問いに答えよ。

(1) $a>0$, $x\in X$ に対して、$p(ax)=ap(x)$ が成り立つことを示せ。

(2) $K$ が開集合のとき、$x\in K$ ならば、$p(x)<1$ であることを示せ。

(3) 次の性質を満たす定数 $C>0$ が存在することを示せ。

任意の $x\in X$ に対して、$p(x)\le C\|x\|$ が成り立つ。

### 题目描述

设实向量空间 $X$ 赋予范数 $\|\cdot\|$ 诱导的拓扑，$K\subset X$ 满足：存在 $r>0$，使

$$
\{x\in X\mid\|x\|\le r\}\subset K.
$$

定义 $p:X\to\mathbb R$ 为

$$
p(x)=\inf\left\{\alpha>0\ \middle|\ \frac x\alpha\in K\right\}\qquad(x\in X).
$$

回答下列问题。

(1) 证明对 $a>0$ 和 $x\in X$，有 $p(ax)=ap(x)$。

(2) 若 $K$ 为开集，证明 $x\in K$ 蕴含 $p(x)<1$。

(3) 证明存在常数 $C>0$，使任意 $x\in X$ 都满足 $p(x)\le C\|x\|$。

## **Kai**

### (1)

$a>0$ に対し $\alpha=a\beta$ と変数を取り替えると、

$$
\begin{aligned}
p(ax)&=\inf\{a\beta:\beta>0,\ x/\beta\in K\}\\
&=a\inf\{\beta>0:\ x/\beta\in K\}=ap(x).
\end{aligned}
$$

### (2)

$x=0$ ならば $0\in K$ より $p(0)=0<1$ である。$x\in K$, $x\ne0$ とする。$K$ は開集合であり $x/\alpha\to x$（$\alpha\to1$）なので、ある $\alpha_0\in(0,1)$ に対し $x/\alpha_0\in K$ となる。従って $p(x)\le\alpha_0<1$ である。

### (3)

仮定より、ある $r>0$ に対して $\{z\in X:\|z\|\le r\}\subset K$ である。$x\ne0$ に対して $\alpha=\|x\|/r>0$ とおくと $\|x/\alpha\|=r$ なので $x/\alpha\in K$、従って

$$
p(x)\le\frac1r\|x\|.
$$

$x=0$ の場合も成立するので、$C=1/r$ とすればよい。

## **Reference**

- [東北大学 2017年度・選択問題の公開保存資料（PDF 5ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#2dbb4d8c-fa23-4565-bd65-3743f8912937)
