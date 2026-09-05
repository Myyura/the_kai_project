---
sidebar_label: "2015年度入学 数学 問4（複素関数論）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Contour-Integration
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2015年度入学 数学 問4（複素関数論）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/H27infait.pdf)。

次の積分の値を複素積分を用いて求めよ。ただし、 $0 < p < 1$ , $n = 0, 1, 2, \dots$ とする。

$$
\int_{0}^{2\pi} \frac{\cos n\theta}{1 + p \cos \theta} d\theta
$$

### 题目描述

设

$$
0<p<1,\qquad n=0,1,2,\ldots.
$$

使用复积分求定积分

$$
\int_0^{2\pi}\frac{\cos(n\theta)}{1+p\cos\theta}\,d\theta
$$

的值，并使所得公式同时涵盖 $n=0$ 与所有 $n\ge1$ 的情形。

## **Kai**

### 解答

与えられた積分を $I$ とする。

$$
I = \int_{0}^{2\pi} \frac{\cos n\theta}{1 + p \cos \theta} d\theta
$$

この積分を複素積分に変換するため、変数変換 $z = e^{i\theta}$ を行う。このとき、積分路は複素平面上の単位円 $C: |z|=1$ を反時計回りに一周するものとなる。

この変換により、以下の関係式が得られる。
$dz = ie^{i\theta}d\theta = izd\theta \implies d\theta = \frac{dz}{iz}$
$\cos \theta = \frac{e^{i\theta} + e^{-i\theta}}{2} = \frac{z + z^{-1}}{2} = \frac{z^2+1}{2z}$
$\cos n\theta = \frac{e^{in\theta} + e^{-in\theta}}{2} = \frac{z^n + z^{-n}}{2} = \frac{z^{2n}+1}{2z^n}$

これらを元の積分に代入する。

$$
I = \oint_C \frac{\frac{z^{2n}+1}{2z^n}}{1 + p \frac{z^2+1}{2z}} \frac{dz}{iz} = \oint_C \frac{\frac{z^{2n}+1}{2z^n}}{\frac{2z + p(z^2+1)}{2z}} \frac{dz}{iz}
$$

$$
I = \oint_C \frac{z^{2n}+1}{2z^n} \cdot \frac{2z}{pz^2+2z+p} \frac{dz}{iz} = \oint_C \frac{z^{2n}+1}{z^n(pz^2+2z+p)} \frac{dz}{i}
$$

$$
I = \frac{1}{ip} \oint_C \frac{z^{2n}+1}{z^n(z^2 + \frac{2}{p}z + 1)} dz
$$

被積分関数を $f(z) = \frac{z^{2n}+1}{z^n(z^2 + \frac{2}{p}z + 1)}$ とおく。留数定理により、積分の値は $I = \frac{1}{ip} \cdot 2\pi i \sum \text{Res} = \frac{2\pi}{p} \sum \text{Res}$ で与えられる。ここで $\sum \text{Res}$ は単位円 $C$ の内部にある $f(z)$ のすべての留数の和である。

### 極の特定
$f(z)$ の極は、分母 $z^n(z^2 + \frac{2}{p}z + 1) = 0$ の根である。
1. $z=0$ (ただし $n \geq 1$ の場合)
2. $z^2 + \frac{2}{p}z + 1 = 0$ の根

二次方程式の根を求めると、

$$
z = \frac{-\frac{2}{p} \pm \sqrt{(\frac{2}{p})^2 - 4}}{2} = \frac{-1 \pm \sqrt{1-p^2}}{p}
$$

これらの根を $\alpha, \beta$ とする。
$\alpha = \frac{-1 + \sqrt{1-p^2}}{p}$ , $\beta = \frac{-1 - \sqrt{1-p^2}}{p}$

根の積は $\alpha\beta = 1$ である。 $0 < p < 1$ という条件から、 $0 < \sqrt{1-p^2} < 1$ である。
$\alpha$ の絶対値を評価すると、
$|\alpha| = \left| \frac{-1 + \sqrt{1-p^2}}{p} \right| = \frac{1 - \sqrt{1-p^2}}{p}$
$|\alpha| < 1 \iff 1 - \sqrt{1-p^2} < p \iff 1-p < \sqrt{1-p^2}$ となる。
$0 < p < 1$ より両辺は正なので、2乗して比較できる。
$(1-p)^2 < 1-p^2 \iff 1 - 2p + p^2 < 1 - p^2 \iff 2p^2 - 2p < 0 \iff 2p(p-1) < 0$
これは $0 < p < 1$ の範囲で成立する。したがって、 $|\alpha| < 1$ である。
$|\alpha||\beta|=1$ であるから、 $|\beta| = 1/|\alpha| > 1$ となる。
よって、単位円 $C$ の内部にある極は $z=\alpha$ と、 $n \geq 1$ の場合の $z=0$ である。

### 留数の計算

**Case 1: $n=0$ **
このとき、 $I_0 = \int_0^{2\pi} \frac{1}{1+p\cos\theta}d\theta$ となり、被積分関数は $f(z) = \frac{2}{z^2+\frac{2}{p}z+1} = \frac{2}{(z-\alpha)(z-\beta)}$ となる。 $z=0$ は極ではない。唯一の内部の極は単純極 $z=\alpha$ である。

$$
\text{Res}(f, \alpha) = \lim_{z\to\alpha} (z-\alpha)f(z) = \lim_{z\to\alpha} \frac{2}{z-\beta} = \frac{2}{\alpha-\beta}
$$

ここで、 $\alpha-\beta = \frac{-1+\sqrt{1-p^2}}{p} - \frac{-1-\sqrt{1-p^2}}{p} = \frac{2\sqrt{1-p^2}}{p}$ なので、

$$
\text{Res}(f, \alpha) = \frac{2}{2\sqrt{1-p^2}/p} = \frac{p}{\sqrt{1-p^2}}
$$

積分の値は、

$$
I_0 = \frac{2\pi}{p} \cdot \text{Res}(f, \alpha) = \frac{2\pi}{p} \cdot \frac{p}{\sqrt{1-p^2}} = \frac{2\pi}{\sqrt{1-p^2}}
$$

**Case 2: $n \geq 1$ **
このとき、内部の極は $z=0$ (位数 $n$ の極) と $z=\alpha$ (単純極) である。
$f(z) = \frac{z^{2n}+1}{z^n(z-\alpha)(z-\beta)}$

$z=\alpha$ での留数:

$$
\text{Res}(f, \alpha) = \lim_{z\to\alpha} (z-\alpha)f(z) = \frac{\alpha^{2n}+1}{\alpha^n(\alpha-\beta)}
$$

$z=0$ での留数:
$\text{Res}(f, 0) = \frac{1}{(n-1)!} \lim_{z\to 0} \frac{d^{n-1}}{dz^{n-1}} [z^n f(z)] = \frac{1}{(n-1)!} \lim_{z\to 0} \frac{d^{n-1}}{dz^{n-1}} \left[ \frac{z^{2n}+1}{(z-\alpha)(z-\beta)} \right]$
これは $\frac{z^{2n}+1}{(z-\alpha)(z-\beta)}$ の $z=0$ を中心としたテイラー展開における $z^{n-1}$ の係数に等しい。
$\frac{1}{(z-\alpha)(z-\beta)} = \frac{1}{\alpha-\beta} \left( \frac{1}{z-\alpha} - \frac{1}{z-\beta} \right) = \frac{1}{\alpha-\beta} \sum_{k=0}^\infty (\alpha^{k+1}-\beta^{k+1})z^k$
$\{ (1+z^{2n}) \frac{1}{(z-\alpha)(z-\beta)} \}$ の $z^{n-1}$ の係数は、 $n \ge 1$ のとき $z^{2n}$ の項は影響しないため、 $\frac{1}{(z-\alpha)(z-\beta)}$ の $z^{n-1}$ の係数に等しい。

$$
\text{Res}(f, 0) = \frac{\alpha^n - \beta^n}{\alpha-\beta}
$$

内部の留数の和は、

$$
\sum \text{Res} = \text{Res}(f, \alpha) + \text{Res}(f, 0) = \frac{\alpha^{2n}+1}{\alpha^n(\alpha-\beta)} + \frac{\alpha^n - \beta^n}{\alpha-\beta}
$$

$$
= \frac{1}{\alpha-\beta} \left( \alpha^n + \frac{1}{\alpha^n} + \alpha^n - \beta^n \right)
$$

$\alpha\beta = 1$ より $1/\alpha^n = \beta^n$ なので、

$$
= \frac{1}{\alpha-\beta} (\alpha^n + \beta^n + \alpha^n - \beta^n) = \frac{2\alpha^n}{\alpha-\beta}
$$

$\alpha-\beta = \frac{2\sqrt{1-p^2}}{p}$ を代入すると、

$$
\sum \text{Res} = \frac{2\alpha^n}{2\sqrt{1-p^2}/p} = \frac{p\alpha^n}{\sqrt{1-p^2}}
$$

積分の値は、

$$
I_n = \frac{2\pi}{p} \sum \text{Res} = \frac{2\pi}{p} \frac{p\alpha^n}{\sqrt{1-p^2}} = \frac{2\pi\alpha^n}{\sqrt{1-p^2}}
$$

### 結論
$n \geq 1$ の場合の結果 $I_n = \frac{2\pi\alpha^n}{\sqrt{1-p^2}}$ に $n=0$ を代入すると、 $\alpha^0=1$ であるから $I_0 = \frac{2\pi}{\sqrt{1-p^2}}$ となり、Case 1 の結果と一致する。

したがって、すべての $n=0, 1, 2, \dots$ に対して、積分の値は

$$
I = \frac{2\pi\alpha^n}{\sqrt{1-p^2}} = \frac{2\pi}{\sqrt{1-p^2}} \left(\frac{-1 + \sqrt{1-p^2}}{p}\right)^n
$$
