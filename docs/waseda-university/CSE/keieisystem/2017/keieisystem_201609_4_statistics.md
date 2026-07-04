---
sidebar_label: "2016年9月実施 統計科学 問題4"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Inference.Maximum-Likelihood-Estimation
  - Probability-Statistics.Statistical-Inference.Method-of-Moments
  - Probability-Statistics.Fundamentals.Conditional-Density
  - Probability-Statistics.Fundamentals.Law-of-Large-Numbers
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 統計科学 問題4

## **Author**
祭音Myyura

## **Description**

### [小問 1]

独立な確率変数 $x_1,\ldots,x_n$ が、密度

$$
f(x;\mu,\theta)
=\frac1{\sqrt{2\pi\theta}}
\exp\left\{-\frac{(x-\mu)^2}{2\theta}\right\}
$$

を持つ正規分布 $N(\mu,\theta)$ に従う。$\mu,\theta$ の最尤推定量とモーメント法による推定量を、それぞれ導出せよ。

### [小問 2]

同時確率密度関数

$$
f(x,y)=
\begin{cases}
2(x^2y+y^2)&(0<x<1,\ 0<y<1),\\
0&\text{otherwise}
\end{cases}
$$

について、$E(X)$、$f(x\mid y)$、$E(X\mid Y=y)$ を求めよ。

### [小問 3]

大数の法則について説明せよ。

## **Kai**

### [小問 1]

対数尤度は

$$
\ell(\mu,\theta)
=-\frac n2\log(2\pi\theta)
-\frac1{2\theta}\sum_{i=1}^n(x_i-\mu)^2.
$$

まず

$$
\frac{\partial\ell}{\partial\mu}
=\frac1\theta\sum_{i=1}^n(x_i-\mu)=0
$$

から $\hat\mu=\bar x$ を得る。次に

$$
\frac{\partial\ell}{\partial\theta}
=-\frac n{2\theta}
+\frac1{2\theta^2}\sum_{i=1}^n(x_i-\mu)^2=0
$$

より

$$
\boxed{
\hat\mu_{\mathrm{ML}}=\bar x,\qquad
\hat\theta_{\mathrm{ML}}
=\frac1n\sum_{i=1}^n(x_i-\bar x)^2
}.
$$

モーメント法では

$$
E(X)=\mu,\qquad E(X^2)=\mu^2+\theta
$$

を標本モーメントと等置する。したがって

$$
\boxed{
\hat\mu_{\mathrm{MM}}=\bar x,\qquad
\hat\theta_{\mathrm{MM}}
=\frac1n\sum_{i=1}^nx_i^2-\bar x^2
=\frac1n\sum_{i=1}^n(x_i-\bar x)^2
}.
$$

### [小問 2]

まず

$$
\begin{aligned}
E(X)
&=\int_0^1\int_0^1
2x(x^2y+y^2)\,dxdy\\
&=2\left(\frac14\frac12+\frac12\frac13\right)
=\boxed{\frac7{12}}.
\end{aligned}
$$

$Y$ の周辺密度は

$$
f_Y(y)=\int_0^1 2(x^2y+y^2)\,dx
=2\left(\frac y3+y^2\right)
$$

である。よって $0<x<1, 0<y<1$ で

$$
\boxed{
f(x\mid y)
=\frac{x^2+y}{\frac13+y}
}
$$

であり、それ以外は0である。さらに

$$
\begin{aligned}
E(X\mid Y=y)
&=\int_0^1x\frac{x^2+y}{\frac13+y}\,dx\\
&=\frac{\frac14+\frac y2}{\frac13+y}\\
&=\boxed{\frac{3(1+2y)}{4(1+3y)}}.
\end{aligned}
$$

### [小問 3]

$X_1,X_2,\ldots$ が独立同分布で $E(X_i)=\mu$、$\operatorname{Var}(X_i)=\sigma^2<\infty$ を満たすとする。標本平均

$$
\bar X_n=\frac1n\sum_{i=1}^nX_i
$$

は、任意の $\varepsilon>0$ に対して

$$
P\left(|\bar X_n-\mu|\geq\varepsilon\right)
\leq\frac{\sigma^2}{n\varepsilon^2}
\to0
$$

となる。したがって

$$
\boxed{\bar X_n\xrightarrow{P}\mu}
$$

である。これは弱大数の法則であり、標本数を増やすと標本平均が母平均へ確率収束することを表す。
