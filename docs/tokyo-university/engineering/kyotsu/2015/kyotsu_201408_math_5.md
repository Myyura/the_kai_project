---
sidebar_label: '2014年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Convolution
---

# 東京大学 工学系研究科 2014年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

フーリエ変換を次式で定義する。

$$
F(\omega)=\int_{-\infty}^{\infty}f(t)e^{i\omega t}\,\mathrm dt.
$$

I. 実関数 $f$ に対して $F(-\omega)=\overline{F(\omega)}$ が成り立つことを示せ。

II. 畳み込み

$$
(f*g)(t)=\int_{-\infty}^{\infty}f(s)g(t-s)\,\mathrm ds,
$$

のフーリエ変換を $F,G$ で表せ。計算過程も示せ。

III. 実関数 $h(t)$ は $t<0$ において $h(t)=0$ を満たすものとし、

$$
r(t)=\frac{h(t)+h(-t)}2,\qquad x(t)=\frac{h(t)-h(-t)}2,
$$

と定義する。それぞれのフーリエ変換を $R,X$ とする。

1. $R(\omega)$ が実数であることを示せ。
2. $X(\omega)$ が純虚数（$0$ を含む）であることを示せ。
3. $h(t)=e^{-t}$（$t\ge0$）のとき $R,X$ を求め、$\operatorname{Re}R$ と $\operatorname{Im}X$ の概形をそれぞれ図示せよ。
4. $r(t)=1/4$（$|t|\le2$）、$r(t)=0$（$|t|>2$）のとき、同様に $R,X$ を求め、それらの実部と虚部の概形を図示せよ。

#### 题目描述

傅里叶变换定义为

$$
F(\omega)=\int_{-\infty}^{\infty}f(t)e^{i\omega t}\,\mathrm dt.
$$

I. 证明实函数 $f$ 满足 $F(-\omega)=\overline{F(\omega)}$。

II. 对卷积

$$
(f*g)(t)=\int_{-\infty}^{\infty}f(s)g(t-s)\,\mathrm ds,
$$

用 $F,G$ 表示其傅里叶变换，并写出计算过程。

III. 实函数 $h(t)$ 满足 $h(t)=0$（$t<0$）。定义

$$
r(t)=\frac{h(t)+h(-t)}2,\qquad x(t)=\frac{h(t)-h(-t)}2,
$$

并记它们的傅里叶变换为 $R,X$。

1. 证明 $R(\omega)$ 为实数。
2. 证明 $X(\omega)$ 为纯虚数（含 $0$）。
3. 当 $h(t)=e^{-t}$（$t\ge0$）时，求 $R,X$，分别画出 $\operatorname{Re}R$ 与 $\operatorname{Im}X$ 的概形。
4. 当 $r(t)=1/4$（$|t|\le2$）、$r(t)=0$（$|t|>2$）时，完成同样的计算与作图。

## **Kai**

### I

$f$ は実関数なので、

$$
F(-\omega)=\int f(t)e^{-i\omega t}\,\mathrm dt
=\overline{\int f(t)e^{i\omega t}\,\mathrm dt}
=\boxed{\overline{F(\omega)}}.
$$

### II

積分の順序を交換し、$u=t-s$ とおくと、

$$
\begin{aligned}
\mathcal F[f*g](\omega)
&=\int_{\mathbb R}f(s)\int_{\mathbb R}g(t-s)e^{i\omega t}\,\mathrm dt\,\mathrm ds\\
&=\left(\int_{\mathbb R}f(s)e^{i\omega s}\,\mathrm ds\right)
\left(\int_{\mathbb R}g(u)e^{i\omega u}\,\mathrm du\right)
=\boxed{F(\omega)G(\omega)}.
\end{aligned}
$$

### III.1–2

$r$ は実偶関数、$x$ は実奇関数なので、

$$
\boxed{R(\omega)=2\int_0^\infty r(t)\cos\omega t\,\mathrm dt\in\mathbb R,}
$$

$$
\boxed{X(\omega)=2i\int_0^\infty x(t)\sin\omega t\,\mathrm dt\in i\mathbb R.}
$$

### III.3

$$
H(\omega)=\int_0^\infty e^{-(1-i\omega)t}\,\mathrm dt=\frac1{1-i\omega}.
$$

したがって

$$
\boxed{R(\omega)=\frac1{1+\omega^2},\qquad
X(\omega)=\frac{i\omega}{1+\omega^2}.}
$$

$R$ は偶関数で $\omega=0$ において最大値 $1$ を取る。$\operatorname{Im}X$ は奇関数で $\omega=\pm1$ においてそれぞれ $\pm1/2$ を取る。どちらも無限遠で $0$ に収束する。

### III.4

$t>0$ では $h(t)=2r(t)$ なので、$0<|t|\le2$ では $x(t)=\frac14\operatorname{sgn}(t)$、それ以外では $0$ となる。したがって

$$
\boxed{R(\omega)=\frac{\sin2\omega}{2\omega},\qquad
X(\omega)=i\frac{1-\cos2\omega}{2\omega}.}
$$

$\omega=0$ では連続延長により $R(0)=1,X(0)=0$。$R$ は偶関数で、零点は $\omega=k\pi/2\ (k\ne0)$。$\operatorname{Im}X$ は奇関数で、$\omega>0$ では非負、零点は $\omega=k\pi$ である。どちらも無限遠で $0$ に収束する。

![二組のフーリエ変換の実部と虚部](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/tokyo-kyotsu-201408-fourier.svg)
