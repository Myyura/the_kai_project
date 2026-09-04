---
sidebar_label: "2024年度 数理科学 [I-6]"
tags:
  - Osaka-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [I-6]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$p$ と $n_i$ ($i=1,\ldots,p$) は2以上の整数、$\mu$ は実数、$\sigma_e^2>0$ とし、$\sum_{i=1}^pn_ia_i=0$ を満たす実数 $a_i$ を考える。
$e_{ij}$ は独立同分布 $N(0,\sigma_e^2)$、$Y_{ij}=\mu+a_i+e_{ij}$ とする。$n_\bullet=\sum_i n_i$、

$$
\bar Y_{i\bullet}=\frac1{n_i}\sum_jY_{ij},\qquad
\bar Y_{\bullet\bullet}=\frac1{n_\bullet}\sum_{i,j}Y_{ij},
$$

$$
S_A=\sum_i n_i(\bar Y_{i\bullet}-\bar Y_{\bullet\bullet})^2,\quad
S_e=\sum_{i,j}(Y_{ij}-\bar Y_{i\bullet})^2,
$$

$$
\sigma_A^2=\frac1{p-1}\sum_i n_i a_i^2,\qquad
T=\frac{S_A}{p-1}-\frac{S_e}{n_\bullet-p}
$$

とおく。$\mu,a_1,\ldots,a_p,\sigma_e^2$ は未知パラメータである。

(1) $\sum_{i,j}(Y_{ij}-\bar Y_{\bullet\bullet})^2=S_A+S_e$ を示せ。

(2) $E[T]$ を求めよ。

(3) 次のデータに対し、有意水準5%で以下の検定を行え。多重性は考慮しなくてよい。自由度4、12の $t$ 分布の上側2.5%点は $t_4(0.025)=2.78$, $t_{12}(0.025)=2.18$、自由度(3,16)の $F$ 分布の上側5%点は $F_{3,16}(0.05)=3.24$ とする。

| | $A_1$ | $A_2$ | $A_3$ | $A_4$ |
|---|---|---|---|---|
| データ | 1.5, 2.5, 3.5 | 2, 3, 4, 2, 3, 4, 3 | 3, 4, 5, 3, 4, 5, 4 | 3.5, 4.5, 5.5 |
| $n_i$ | 3 | 7 | 7 | 3 |
| 平均 | 2.5 | 3.0 | 4.0 | 4.5 |
| 群内平方和 | 2.0 | 4.0 | 4.0 | 2.0 |

(3a) $A_1,A_4$ のデータだけを用い、$H_0:a_1=a_4$ 対 $H_1:a_1\ne a_4$ の $t$ 検定を行え。

(3b) 全データを用い、$H_0:a_1=a_2=a_3=a_4$ 対「$H_0$ ではない」の $F$ 検定を行え。総平方和21.5を用いてよい。

## **Kai**

### (1)

$$
Y_{ij}-\bar Y_{\bullet\bullet}=(Y_{ij}-\bar Y_{i\bullet})+(\bar Y_{i\bullet}-\bar Y_{\bullet\bullet})
$$

を二乗して加える。各群で $\sum_j(Y_{ij}-\bar Y_{i\bullet})=0$ なので交差項は消え、右辺は $S_e+S_A$ となる。

### (2)

$\bar e_i=n_i^{-1}\sum_je_{ij}$、$\bar e=n_\bullet^{-1}\sum_i n_i\bar e_i$ とする。重み付き制約から $\bar Y_{i\bullet}-\bar Y_{\bullet\bullet}=a_i+\bar e_i-\bar e$ であり、

$$
\operatorname{Var}(\bar e_i-\bar e)=\sigma_e^2\left(\frac1{n_i}-\frac1{n_\bullet}\right).
$$

従って

$$
E[S_A]=\sum_i n_i a_i^2+(p-1)\sigma_e^2,\qquad
E[S_e]=(n_\bullet-p)\sigma_e^2,
$$

より $\boxed{E[T]=\sigma_A^2}$。

### (3a)

共通分散の不偏推定値は $s_p^2=(2+2)/(3+3-2)=1$。検定統計量は

$$
t=\frac{2.5-4.5}{\sqrt{1(1/3+1/3)}}=-\sqrt6\simeq-2.45.
$$

自由度4で $|t|<2.78$ なので、5%水準では $\boxed{H_0\text{ を棄却しない}}$。

### (3b)

$n_\bullet=20$、$\bar y_{\bullet\bullet}=3.5$、$S_e=12$、$S_A=21.5-12=9.5$。したがって

$$
F=\frac{S_A/3}{S_e/16}=\frac{38}{9}\simeq4.22>3.24.
$$

よって5%水準で $\boxed{H_0\text{ を棄却する}}$。4水準の母平均がすべて等しいとはいえない。
