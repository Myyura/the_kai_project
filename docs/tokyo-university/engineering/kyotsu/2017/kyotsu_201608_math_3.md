---
sidebar_label: '2016年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Residue-at-Higher-Order-Pole
  - Mathematics.Complex-Analysis.Argument-Principle-and-Winding-Number
---

# 東京大学 工学系研究科 2016年8月実施 数学 第3問

## **Author**
祭音Myyura

## **Description**

出典：[公式2017年度数学試験](https://www.t.u-tokyo.ac.jp/hubfs/pdf/H29_suugaku_J.pdf)、第3問。

次の問いに答えよ。ただし, $i$は虚数単位であり, $e$は自然対数の底, $\log$ は自然対数である。

### (I)
次の定積分 $I$ を考える。

$$
\begin{align}
I = \int_0^{2\pi} \frac{\cos\theta \text{d}\theta}{(2 + \cos\theta)^2}
\end{align}
$$

#### 1.
定積分 $I$ を複素数 $z$ を用いて複素関数積分

$$
\begin{align}
\oint_{\mid z \mid = 1}G(z)\text{d}z
\end{align}
$$

の形に書き直したときの複素関数 $G(z)$ を求めよ。ただし, 積分路は単位円周上を反時計回リに一周するものとする。

#### 2.
全ての極とその極の位数, および留数を求めよ。

#### 3.
積分$I$を求めよ。

### (II)
実数パラメータ$\alpha ,\beta$をもつ実数$\theta$の関数

$$
\begin{align}
f(\theta;\alpha,\beta) = 1 + e^{2i\beta} + \alpha e^{i(\theta + \beta)}
\end{align}
$$

に対して以下の定積分$F(\alpha,\beta)$を考える。

$$
\begin{align}
F(\alpha ,\beta) = \int_0^{2\pi} \text{d}\theta \frac{\text{d}}{\text{d}\theta}[\log f(\theta;\alpha,\beta)]
\end{align}
$$

#### 1.
定積分$F(\alpha,\beta)$を複素数$z$を用いて複素関数積分

$$
\begin{align}
\oint_{\mid z \mid = 1} G(z) \text{d}z
\end{align}
$$

の形に書き直したときの複素関数$G(z)$を求めよ。ただし,　積分路は単位円周上を反時計回リに一周するものとする。

#### 2.
全ての極とその極の位数, および留数を求めよ。

#### 3.
パラメータ$\alpha ,\beta$を場合分けして, $F(\alpha,\beta)$の値を求めよ。ただし,　極が積分路上にある場合は考えなくて良い。

#### 题目描述

设 $i$ 为虚数单位，$e$ 为自然对数的底，$\log$ 表示自然对数。

I. 对

$$
I=\int_0^{2\pi}\frac{\cos\theta}{(2+\cos\theta)^2}\,\mathrm d\theta,
$$

作代换 $z=e^{i\theta}$，把它写成沿单位圆逆时针一周的围道积分 $\oint_{|z|=1}G(z)\,\mathrm dz$；求 $G(z)$ 的全部极点、各极点阶数和留数，并据此算出 $I$。

II. 对实参数 $\alpha,\beta$，令

$$
f(\theta;\alpha,\beta)=1+e^{2i\beta}+\alpha e^{i(\theta+\beta)},\qquad
F(\alpha,\beta)=\int_0^{2\pi}\frac{\mathrm d}{\mathrm d\theta}
\log f(\theta;\alpha,\beta)\,\mathrm d\theta.
$$

同样把 $F$ 化为单位圆上的围道积分并求相应的 $G(z)$；找出全部极点、阶数和留数；最后根据实参数 $\alpha,\beta$ 分类计算 $F(\alpha,\beta)$。极点恰在积分路径上的情形无需讨论。

## **Kai**

### I.1

$z=e^{i\theta}$ とおくと $\cos\theta=(z+z^{-1})/2$、$\mathrm d\theta=\mathrm dz/(iz)$。したがって

$$
\boxed{G(z)=\frac{2(z^2+1)}{i(z^2+4z+1)^2}.}
$$

### I.2

$a=-2+\sqrt3,b=-2-\sqrt3$ とおく。極は $a,b$ の2点で、いずれも2位である。$ab=1$ を用いると、

$$
\operatorname{Res}(G,a)
=\frac2i\left[\frac{\mathrm d}{\mathrm dz}\frac{z^2+1}{(z-b)^2}\right]_{z=a}
=-\frac{4(ab+1)}{i(a-b)^3}
=\boxed{\frac{i}{3\sqrt3}},
$$

$$
\boxed{\operatorname{Res}(G,b)=-\frac{i}{3\sqrt3}}.
$$

### I.3

単位円内の極は $a$ のみなので、留数定理より

$$
\boxed{I=2\pi i\frac{i}{3\sqrt3}=-\frac{2\pi}{3\sqrt3}.}
$$

### II.1–2

$f\ne0$ の範囲で対数微分を $f'/f$ と解釈する。$f=e^{i\beta}(2\cos\beta+\alpha z)$ より、

$$
\boxed{G(z)=\frac{\alpha}{\alpha z+2\cos\beta}.}
$$

$\alpha\ne0$ のとき、極は $z=-2\cos\beta/\alpha$ の1点で、1位、留数は $1$。

$\alpha=0,\cos\beta\ne0$ のときは $G=0$ で極はない。$\alpha=0,\cos\beta=0$ では $f\equiv0$ となり、$F$ は定義されない。

### II.3

留数定理より

$$
\boxed{F(\alpha,\beta)=
\begin{cases}
2\pi i,&|\alpha|>2|\cos\beta|,\\
0,&|\alpha|<2|\cos\beta|.
\end{cases}}
$$

$|\alpha|=2|\cos\beta|\ne0$ は積分路上に極があるため除外される。
