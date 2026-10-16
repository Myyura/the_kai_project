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

回帰式 $Y_i=\alpha+\beta x_i+u_i$（$i=1,\ldots,n$）を考える。$x_i$ は非確率的、$u_i$ は平均0、分散 $\sigma^2$ の確率変数である。最小二乗推定量を $\hat\alpha,\hat\beta$、残差を $\hat u_i$、標本平均を $\bar x=n^{-1}\sum_i x_i$、$\bar y=n^{-1}\sum_i y_i$ とする。

(1-1) $\sum_i(x_i-\bar x)\hat u_i=0$ を証明せよ。

(1-2) $\sum_i(y_i-\bar y)^2=\hat\beta^2\sum_i(x_i-\bar x)^2+\sum_i\hat u_i^2$ を証明せよ。

(1-3) $0\le1-\sum_i\hat u_i^2/\sum_i(y_i-\bar y)^2\le1$ を証明せよ。

次に、切片のない回帰式 $Y_i=\beta'x_i+u_i'$ を考える。$x_i$ は非確率的、$u_i'$ は平均0、分散 $\sigma^2$ とする。最小二乗推定量を $\hat\beta'$、残差を $\hat u_i'$ とする。

(1-4) $\sum_i(x_i-\bar x)\hat u_i'=0$ は必ず成立するか。理由を示せ。

(1-5) $\sum_i(y_i-\bar y)^2=(\hat\beta')^2\sum_i(x_i-\bar x)^2+\sum_i(\hat u_i')^2$ は成立するか。理由を示せ。

(1-6) $0\le1-\sum_i(\hat u_i')^2/\sum_i(y_i-\bar y)^2\le1$ は必ず成立するか。成立しない場合、どちらの不等号が成立しないか。理由を示せ。

#### 题目描述

有截距回归为 $Y_i=\alpha+\beta x_i+u_i$，解释变量非随机，误差均值0、方差 $\sigma^2$。最小二乘估计及残差记为 $\hat\alpha,\hat\beta,\hat u_i$，样本均值记为 $\bar x,\bar y$。

1. 证明中心化解释变量与残差正交。
2. 证明总离差平方和等于回归平方和与残差平方和之和，具体公式如上。
3. 证明 $0\le1-\mathrm{SSE}/\mathrm{SST}\le1$。
4. 改为无截距回归 $Y_i=\beta'x_i+u_i'$，判断第1问的正交关系是否恒成立并说明理由。
5. 判断第2问的中心化平方和分解是否仍成立并说明理由。
6. 判断第3问的两个不等式是否都成立；若不成立，指出失效的一侧并说明理由。

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
\mathrm{SST}=\frac12,\qquad
(\hat\beta')^2\sum_i(x_i-\bar x)^2+\mathrm{SSE}
=\frac{16}{25}\frac12+\frac95=\frac{53}{25}\ne\frac12.
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
