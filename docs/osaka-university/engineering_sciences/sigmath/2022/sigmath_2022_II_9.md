---
sidebar_label: "2022年度 数理科学 II [9]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[9\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\lambda$ は正の実数で未知のパラメータとする。独立な実数値確率変数 $X_1,\ldots,X_n$ は、各 $i=1,\ldots,n$ に対して $P(X_i=x)=e^{-\lambda}\lambda^x/x!$ ($x=0,1,\ldots$) を満たす。$\beta=\sqrt{V[X_1]}$ とおく。

(1) $V[X_1]$ を求め、$\beta$ を $\lambda$ で表せ。

(2) $\beta$ の最尤推定量 $\widehat\beta_n$ を求めよ。

(3) $\widehat\beta_n$ は $\beta$ の不偏推定量か。理由を付して答えよ。

## **Kai**

### (1)
$E[X_1]=\lambda$、$E[X_1(X_1-1)]=\lambda^2$ より

$$
\boxed{V[X_1]=\lambda,\qquad\beta=\sqrt\lambda}.
$$

### (2)
$S=\sum_iX_i>0$ のとき、対数尤度 $-n\lambda+S\log\lambda+C$ の最大点は $\widehat\lambda=S/n$。したがって

$$
\boxed{\widehat\beta_n=\sqrt{\overline X_n}}.
$$

ただし $S=0$ では尤度 $e^{-n\lambda}$ は $\lambda>0$ 上で最大値をとらず、厳密には最尤推定値が存在しない。パラメータ空間の閉包 $\lambda\ge0$ を許せば、上式は全標本で定義される。

### (3)
閉包上の最尤推定量 $\sqrt{\overline X_n}$ を考える。平方根の狭義凹性と $V[\overline X_n]=\lambda/n>0$ より、Jensen の不等式は狭義となり

$$
E[\sqrt{\overline X_n}]<\sqrt{E[\overline X_n]}=\sqrt\lambda=\beta.
$$

したがって不偏ではない。
