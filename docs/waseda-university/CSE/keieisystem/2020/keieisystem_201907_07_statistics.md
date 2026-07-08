---
sidebar_label: "2019年7月実施 統計科学 問題7"
tags:
  - Waseda-University
  - Mathematics.Calculus.Double-Integral
  - Probability-Statistics.Fundamentals.Conditional-Density
  - Probability-Statistics.Statistical-Inference.ANOVA
  - Probability-Statistics.Statistical-Inference.Mahalanobis-Distance
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 統計科学 問題7

## **Author**
祭音Myyura

## **Description**

1. 重積分を用いて $\displaystyle\int_{-\infty}^{\infty}e^{-x^2/2}dx=\sqrt{2\pi}$ を示せ。
2. 同時密度 $f(x,y)=x+y$（$0<x<1,0<y<1$）に対し、$f_{X\mid Y}(x\mid y)$ と $E[X\mid Y=y]$ を求めよ。
3. 一元配置実験について平方和分解を証明し、データ A1: $1,3$、A2: $7,5$、A3: $3,5$ の分散分析表を作れ。
4. Mahalanobis 距離を説明せよ。

## **Kai**

### [小問 1]

積分を $I$ とおく。被積分関数が正なので

$$
\begin{aligned}
I^2
&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-(x^2+y^2)/2}\,dx\,dy\\
&=\int_0^{2\pi}\int_0^\infty e^{-r^2/2}r\,dr\,d\theta\\
&=2\pi\left[-e^{-r^2/2}\right]_0^\infty=2\pi.
\end{aligned}
$$

したがって

$$
\boxed{I=\sqrt{2\pi}}.
$$

### [小問 2]

$Y$ の周辺密度は

$$
f_Y(y)=\int_0^1(x+y)dx=\frac12+y.
$$

よって

$$
\boxed{f_{X\mid Y}(x\mid y)=\frac{x+y}{1/2+y}},qquad0<x<1.
$$

条件付き期待値は

$$
\begin{aligned}
E[X\mid Y=y]
&=\frac{\int_0^1x(x+y)dx}{1/2+y}\\
&=\frac{1/3+y/2}{1/2+y}
=\boxed{\frac{2+3y}{3+6y}}.
\end{aligned}
$$

### [小問 3-1]

$x_{ij}-\bar x=(x_{ij}-\bar x_{A_i})+(\bar x_{A_i}-\bar x)$ と分解して平方し、全 $i,j$ について和を取る。交差項は

$$
2\sum_i(\bar x_{A_i}-\bar x)
\sum_j(x_{ij}-\bar x_{A_i})=0
$$

なので

$$
\boxed{
\sum_i\sum_j(x_{ij}-\bar x)^2
=\sum_i\sum_j(x_{ij}-\bar x_{A_i})^2
+n\sum_i(\bar x_{A_i}-\bar x)^2
}.
$$

### [小問 3-2]

水準平均は $(2,6,4)$、総平均は4である。したがって

$$
SS_A=2\{(2-4)^2+(6-4)^2+(4-4)^2\}=16,
$$

各水準内の偏差平方和は2ずつなので $SS_E=6$、$SS_T=22$ である。

| 変動因 | 自由度 | 平方和 | 平均平方 | $F$ 値 |
| --- | ---: | ---: | ---: | ---: |
| A | 2 | 16 | 8 | 4 |
| 誤差 | 3 | 6 | 2 |  |
| 合計 | 5 | 22 |  |  |

### [小問 4]

平均 $\boldsymbol\mu$、共分散行列 $\Sigma$ に対する点 $\boldsymbol x$ の Mahalanobis 距離は

$$
\boxed{
d_M(\boldsymbol x,\boldsymbol\mu)
=\sqrt{(\boldsymbol x-\boldsymbol\mu)^{\mathsf T}
\Sigma^{-1}(\boldsymbol x-\boldsymbol\mu)}
}.
$$

各方向の分散で尺度を標準化し、変数間相関も考慮する。$\Sigma=I$ なら Euclid 距離に一致し、正則な線形変換に対して不変であるため、多変量外れ値検出や判別分析に用いられる。
