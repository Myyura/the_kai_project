---
sidebar_label: "2022年度 数理科学 II [7]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[7\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$0<p<1/3$ とし、$(X,Y,Z)$ はパラメータ $(n;p,2p,1-3p)$ の三項分布に従う。ここで、パラメータ $(n;q,r,s)$ の三項分布は、$q,r,s\ge0$、$q+r+s=1$、非負整数 $x,y,z$、$x+y+z=n$ に対して

$$
P((X,Y,Z)=(x,y,z))=\frac{n!}{x!y!z!}q^xr^ys^z
$$

で与えられる。$T=X+Y$ とおく。

(1) $t=0,\ldots,n$、$k=0,\ldots,t$ に対して $P(X=k,Y=t-k\mid T=t)$ を求めよ。

(2) $t=1,\ldots,n$ に対し $E[(X/n-p)^2\mid T=t]>(t/(3n)-p)^2$ を示せ。

(3) $E[(X/n-p)^2]>E[(T/(3n)-p)^2]$ を示せ。

## **Kai**

### (1)
$T\sim\operatorname{Bin}(n,3p)$ だから

$$
\boxed{P(X=k,Y=t-k\mid T=t)=\binom tk\left(\frac13\right)^k\left(\frac23\right)^{t-k}}.
$$

したがって $X\mid T=t\sim\operatorname{Bin}(t,1/3)$。

### (2)
条件付き分散と平均を用いて

$$
E[(X/n-p)^2\mid T=t]=\frac{2t}{9n^2}+\left(\frac t{3n}-p\right)^2.
$$

$t\ge1$ では第 $1$ 項が正なので成立する。

### (3)
(2) の等式は $t=0$ でも成立するので、$T$ について期待値をとると

$$
E[(X/n-p)^2]-E[(T/(3n)-p)^2]
=\frac{2E[T]}{9n^2}=\boxed{\frac{2p}{3n}}>0.
$$
