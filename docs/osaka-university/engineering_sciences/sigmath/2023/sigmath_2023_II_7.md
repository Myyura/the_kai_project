---
sidebar_label: "2023年度 数理科学 II [7]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[7\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数とする。$X$ は密度 $p(x;\lambda)=\lambda e^{-\lambda x}$ ($x>0$)、$0$ ($x\le0$) をもち、$\lambda>0$ とする。$Y_1,\ldots,Y_n$ は互いに独立で、$X\le1$ を条件とする $X$ の条件付き分布に従う。

$$
G(\lambda)=\frac1\lambda-\frac1{e^\lambda-1},\qquad
\overline Y_n=\frac1n\sum_iY_i,\qquad
Z_n=\begin{cases}\overline Y_n&\overline Y_n<1/2,\\1/4&\overline Y_n\ge1/2\end{cases}
$$

とする。

(1) $G$ が狭義単調減少であることを示し、グラフの概形を描け。

(2) $E[Y_1]$ を求めよ。

(3) $G(\widehat\lambda_n)=Z_n$ を満たす $\widehat\lambda_n$ は $\lambda$ の一致推定量であることを示せ。

## **Kai**

### (1)

$$
G'(\lambda)=-\frac1{\lambda^2}+\frac1{4\sinh^2(\lambda/2)}<0.
$$

最後の不等号は $\sinh u>u$ ($u>0$) による。また

$$
\lim_{\lambda\downarrow0}G(\lambda)=\frac12,\qquad
\lim_{\lambda\to\infty}G(\lambda)=0.
$$

したがって $G$ は $(0,\infty)$ から $(0,1/2)$ への連続な狭義減少全単射であり、概形は次のとおり。

![Gのグラフ。正のλで1/2から0へ狭義単調減少する。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka_university/engineering_sciences/sigmath/2023/sigmath_2023_II_7.svg)

### (2)
条件付き密度は $\lambda e^{-\lambda y}/(1-e^{-\lambda})$ ($0<y<1$)。部分積分により

$$
\boxed{E[Y_1]=\frac{\int_0^1y\lambda e^{-\lambda y}\,dy}{1-e^{-\lambda}}
=\frac1\lambda-\frac1{e^\lambda-1}=G(\lambda)}.
$$

### (3)
$0<Z_n<1/2$ が確率 $1$ で成立するので、(1) より $\widehat\lambda_n=G^{-1}(Z_n)$ は一意に定まる。

大数の法則により $\overline Y_n\xrightarrow{P}G(\lambda)<1/2$。したがって $P(Z_n\ne\overline Y_n)\to0$ であり、$Z_n\xrightarrow{P}G(\lambda)$。$G^{-1}$ の連続性から

$$
\boxed{\widehat\lambda_n\xrightarrow{P}G^{-1}(G(\lambda))=\lambda}.
$$
