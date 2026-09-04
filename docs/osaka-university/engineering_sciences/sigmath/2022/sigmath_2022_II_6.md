---
sidebar_label: "2022年度 数理科学 II [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

実数値確率変数列 $X_n$ が確率有界とは、任意の $\varepsilon>0$ に対してある $M>0$ が存在し、全 $n$ で $P(|X_n|>M)<\varepsilon$ となることである。次を示せ。

(a) $\sup_nE[|X_n|]<\infty$ ならば確率有界である。

(b) $X_n$ が実数値確率変数 $X$ に確率収束するならば確率有界である。

(c) $P(X_n=n)=p_n,P(X_n=0)=1-p_n$ ($0\le p_n\le1$) の場合、確率有界であることと $p_n\to0$ は同値である。

## **Kai**

### (a)
$C=\sup_nE[|X_n|]$ とおく。Markov の不等式より $P(|X_n|>M)\le C/M$ なので、$M>C/\varepsilon$ とすればよい。

### (b)
$X_n\xrightarrow{P}X$ より、十分大きな $N$ に対し $n\ge N$ なら $P(|X_n-X|>1)<\varepsilon/2$。また $X$ は有限値なので $P(|X|>K)<\varepsilon/2$ となる $K$ が存在する。したがって $n\ge N$ で

$$
P(|X_n|>K+1)\le P(|X_n-X|>1)+P(|X|>K)<\varepsilon.
$$

有限個の $n<N$ に対しても裾確率が $\varepsilon$ 未満となるよう $M\ge K+1$ を大きくすればよい。

### (c)
$M>0$ に対し $\sup_nP(|X_n|>M)=\sup_{n>M}p_n$。この値を任意に小さくできることは、まさに $p_n\to0$ と同値である。
