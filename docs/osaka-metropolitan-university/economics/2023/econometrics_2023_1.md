---
sidebar_label: "2023年度 計量経済学 [1]"
tags:
  - Osaka-Metropolitan-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Least-Squares-Method
---

# 大阪公立大学 経済学研究科 2023年度 計量経済学 [1]

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%A4%A7%E9%98%AA%E5%85%AC%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E7%B5%8C%E6%B8%88%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91/2023%E5%B9%B4%E5%BA%A6_4_%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

回帰式 $Y_i=\alpha+\beta x_i+u_i$（$i=1,2,\ldots,n$）において $\alpha,\beta$ は係数であり、$x_i$ は確率変数ではない。また、誤差項 $u_i$ は平均 $0$、分散 $\sigma^2$ の確率変数である。

**(1-1)** この回帰式を最小二乗法で推定したときの $\alpha,\beta$ の最小二乗推定量を $\hat\alpha,\hat\beta$、最小二乗残差を $\hat u_i$、$\bar x=\dfrac1n\sum_{i=1}^n x_i$、$\bar y=\dfrac1n\sum_{i=1}^n y_i$ としたとき、

$$
\sum_{i=1}^n(x_i-\bar x)\hat u_i=0
$$

が成り立つことを証明せよ。

**(1-2)** 以下の式

$$
\sum_{i=1}^n(y_i-\bar y)^2
=\hat\beta^2\sum_{i=1}^n(x_i-\bar x)^2+\sum_{i=1}^n\hat u_i^2
$$

が成り立つことを証明せよ。

**(1-3)** 以下の式

$$
0\le1-\frac{\sum_{i=1}^n\hat u_i^2}{\sum_{i=1}^n(y_i-\bar y)^2}\le1
$$

を証明せよ。

**(1-4)** 回帰式を $Y_i=\beta'x_i+u_i'$（$i=1,2,\ldots,n$）とする。ただし、$\beta'$ は係数であり、$x_i$ は確率変数ではない。また、誤差項 $u_i'$ は平均 $0$、分散 $\sigma^2$ の確率変数で、最小二乗法で推定したときの $\beta'$ の最小二乗推定量を $\hat\beta'$、最小二乗残差を $\hat u_i'$、$\bar x=\dfrac1n\sum_{i=1}^n x_i$、$\bar y=\dfrac1n\sum_{i=1}^n y_i$ とする。

$$
\sum_{i=1}^n(x_i-\bar x)\hat u_i'=0
$$

は必ず成立するか。理由を示して答えよ。

**(1-5)** 回帰式を $Y_i=\beta'x_i+u_i$ とした (1-4) の状況で、

$$
\sum_{i=1}^n(y_i-\bar y)^2
=(\hat\beta')^2\sum_{i=1}^n(x_i-\bar x)^2+\sum_{i=1}^n(\hat u_i')^2
$$

は成立するか。理由を示して答えよ。

**(1-6)** 回帰式を $Y_i=\beta x_i+u_i$ とした (1-4) の状況で、以下の式

$$
0\le1-\frac{\sum_{i=1}^n(\hat u_i')^2}{\sum_{i=1}^n(y_i-\bar y)^2}\le1
$$

は必ず成立するか。もし、成立しないなら上記式のどちらの不等号が成立しないのか。理由を示して答えよ。

#### 题目描述

在回归式 $Y_i=\alpha+\beta x_i+u_i$（$i=1,2,\ldots,n$）中，$\alpha,\beta$ 为系数，$x_i$ 不是随机变量。误差项 $u_i$ 为均值 $0$、方差 $\sigma^2$ 的随机变量。

**(1-1)** 用最小二乘法估计该回归式，记 $\alpha,\beta$ 的最小二乘估计量为 $\hat\alpha,\hat\beta$，最小二乘残差为 $\hat u_i$，并令 $\bar x=\dfrac1n\sum_{i=1}^n x_i$、$\bar y=\dfrac1n\sum_{i=1}^n y_i$。证明

$$
\sum_{i=1}^n(x_i-\bar x)\hat u_i=0.
$$

**(1-2)** 证明下式成立。

$$
\sum_{i=1}^n(y_i-\bar y)^2
=\hat\beta^2\sum_{i=1}^n(x_i-\bar x)^2+\sum_{i=1}^n\hat u_i^2.
$$

**(1-3)** 证明下式。

$$
0\le1-\frac{\sum_{i=1}^n\hat u_i^2}{\sum_{i=1}^n(y_i-\bar y)^2}\le1.
$$

**(1-4)** 设回归式为 $Y_i=\beta'x_i+u_i'$（$i=1,2,\ldots,n$）。其中 $\beta'$ 为系数，$x_i$ 不是随机变量。误差项 $u_i'$ 为均值 $0$、方差 $\sigma^2$ 的随机变量。用最小二乘法估计时，记 $\beta'$ 的最小二乘估计量为 $\hat\beta'$，最小二乘残差为 $\hat u_i'$，并令 $\bar x=\dfrac1n\sum_{i=1}^n x_i$、$\bar y=\dfrac1n\sum_{i=1}^n y_i$。下式是否一定成立？说明理由。

$$
\sum_{i=1}^n(x_i-\bar x)\hat u_i'=0.
$$

**(1-5)** 在 (1-4) 的情形下，回归式为 $Y_i=\beta'x_i+u_i$ 时，下式是否成立？说明理由。

$$
\sum_{i=1}^n(y_i-\bar y)^2
=(\hat\beta')^2\sum_{i=1}^n(x_i-\bar x)^2+\sum_{i=1}^n(\hat u_i')^2.
$$

**(1-6)** 在 (1-4) 的情形下，回归式为 $Y_i=\beta x_i+u_i$ 时，下式是否一定成立？若不成立，指出哪一侧不等号不成立，并说明理由。

$$
0\le1-\frac{\sum_{i=1}^n(\hat u_i')^2}{\sum_{i=1}^n(y_i-\bar y)^2}\le1.
$$

原卷 (1-5)、(1-6) 的回归式省略了部分撇号；两问均明确引用 (1-4) 的无截距回归情形，以上保留原卷记号。

## **Kai**

### (1-1)

最小化 $Q(\alpha,\beta)=\sum_i(y_i-\alpha-\beta x_i)^2$ の正規方程式は

$$
\sum_i\hat u_i=0,\qquad\sum_i x_i\hat u_i=0.
$$

よって $\boxed{\sum_i(x_i-\bar x)\hat u_i=\sum_i x_i\hat u_i-\bar x\sum_i\hat u_i=0}$。

### (1-2)

第一の正規方程式より $\hat\alpha=\bar y-\hat\beta\bar x$。したがって $y_i-\bar y=\hat\beta(x_i-\bar x)+\hat u_i$。二乗和を取ると交差項が (1-1) によりゼロになるので、

$$
\boxed{\sum_i(y_i-\bar y)^2=\hat\beta^2\sum_i(x_i-\bar x)^2+\sum_i\hat u_i^2}.
$$

### (1-3)

$\mathrm{SST}=\sum_i(y_i-\bar y)^2>0$ の場合を考える。両平方和は非負なので、$0\le\mathrm{SSE}\le\mathrm{SST}$。したがって $\boxed{0\le1-\mathrm{SSE}/\mathrm{SST}\le1}$。$\mathrm{SST}=0$ では設問の比自体が定義されない。

### (1-4)

無切片モデルの正規方程式は $\sum_i x_i\hat u_i'=0$ のみで、残差和は一般にはゼロでない。したがって

$$
\sum_i(x_i-\bar x)\hat u_i'=-\bar x\sum_i\hat u_i'
$$

は**必ずしもゼロでない**。

以後の反例として $\boldsymbol x=(1,2)$、$\boldsymbol y=(2,1)$ を取る。$\hat\beta'=\sum x_iy_i/\sum x_i^2=4/5$、残差は $(6/5,-3/5)$。中心化した $x$ と残差の内積は $(-1/2)(6/5)+(1/2)(-3/5)=-9/10\ne0$。

### (1-5)

無切片回帰で成立する非中心化の分解は、

$$
\sum_i y_i^2=(\hat\beta')^2\sum_i x_i^2+\sum_i(\hat u_i')^2.
$$

両辺を中心化すると、設問の右辺と左辺の差は $n\{\bar y^2-(\hat\beta')^2\bar x^2\}$ となり、一般にはゼロでない。上の反例では、

$$
\begin{gathered}
\mathrm{SST}=\frac12,\\
(\hat\beta')^2\sum_i(x_i-\bar x)^2+\mathrm{SSE}
=\frac{16}{25}\frac12+\frac95=\frac{53}{25}\ne\frac12.
\end{gathered}
$$

よって**必ずしも成立しない**。

### (1-6)

$\mathrm{SST}>0$ なら $\mathrm{SSE}\ge0$ より上限 $1-\mathrm{SSE}/\mathrm{SST}\le1$ は成立する。一方、下限0は成立しないことがある。反例では

$$
\boxed{1-\frac{9/5}{1/2}=-\frac{13}{5}<0}.
$$

無切片回帰は平均値のみのモデルを含むとは限らず、中心化した決定係数が負になり得る。

## **Reference**

- [大学公式問題（6ページ（公式PDFの保存版））](https://web.archive.org/web/20230101id_/https://www.omu.ac.jp/econ/assets/2023hakasezenki_nyushi.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%A4%A7%E9%98%AA%E5%85%AC%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E7%B5%8C%E6%B8%88%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91/2023%E5%B9%B4%E5%BA%A6_4_%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6.html)
