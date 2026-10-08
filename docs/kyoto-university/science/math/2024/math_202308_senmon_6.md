---
sidebar_label: "2024年度 専門科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Banach-Space
  - Mathematics.Functional-Analysis.Normed-Space
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\Phi$ は区間 $[0,\infty)$ 上の単調増加で下に凸な連続関数であり、さらに $\Phi(0)=0$ および $\Phi(t)\ge t$ ($t\ge0$) を満たすとする。

$$
\mathcal L=\left\{f\ \middle|\
\begin{array}{l}f\text{ は }\mathbb R\text{ 上の実数値ルベーグ可測関数で、ある }\lambda>0\text{ に対して}\\
\displaystyle\int_{\mathbb R}\Phi\left(\frac{|f(x)|}{\lambda}\right)dx\le1
\end{array}\right\}
$$

と定める。また、$f\in\mathcal L$ に対して

$$
\|f\|=\inf\left\{\lambda>0\ \middle|\ \int_{\mathbb R}\Phi\left(\frac{|f(x)|}{\lambda}\right)dx\le1\right\}
$$

とする。以下の問に答えよ。

1. $f\in\mathcal L$ のとき、$\int_{\mathbb R}|f(x)|\,dx\le\|f\|$ であることを示せ。
2. $f,g\in\mathcal L$ とする。$f-g\in\mathcal L$ であることと、$\|f-g\|\le\|f\|+\|g\|$ が成り立つことを示せ。
3. $\mathcal L$ の元からなる列 $\{f_m\}_{m=1}^\infty$ が、任意の $\varepsilon>0$ に対してある正整数 $N$ が存在して、$m,n\ge N$ のとき $\|f_m-f_n\|<\varepsilon$ を満たすとする。このとき $\lim_{m\to\infty}\|f_m-f\|=0$ を満たす $f\in\mathcal L$ が存在することを示せ。

#### 题目描述

设 $\Phi:[0,\infty)\to\mathbb R$ 连续、单调递增且为凸函数，满足 $\Phi(0)=0$ 和 $\Phi(t)\ge t$。定义

$$
\mathcal L=\left\{f:\mathbb R\to\mathbb R\text{ 为勒贝格可测函数}\ \middle|\
\exists\lambda>0,\ \int_{\mathbb R}\Phi(|f(x)|/\lambda)\,dx\le1\right\},
$$

并对 $f\in\mathcal L$ 定义

$$
\|f\|=\inf\left\{\lambda>0\ \middle|\ \int_{\mathbb R}\Phi(|f(x)|/\lambda)\,dx\le1\right\}.
$$

1. 证明 $\int_{\mathbb R}|f(x)|\,dx\le\|f\|$。
2. 证明 $f,g\in\mathcal L$ 时，$f-g\in\mathcal L$ 且 $\|f-g\|\le\|f\|+\|g\|$。
3. 若 $\{f_m\}\subset\mathcal L$ 对该量满足柯西条件，即每个 $\varepsilon>0$ 都存在 $N$ 使 $m,n\ge N$ 时 $\|f_m-f_n\|<\varepsilon$，证明存在 $f\in\mathcal L$ 使 $\|f_m-f\|\to0$。

## **Kai**

$\rho_\lambda(h)=\int_{\mathbb R}\Phi(|h|/\lambda)\,dx$ とおく。$\Phi$ の単調性から、$h\in\mathcal L$ に対し $\lambda>\|h\|$ ならば $\rho_\lambda(h)\le1$ である。実際、定義より $\rho_\eta(h)\le1$ となる $0<\eta<\lambda$ が存在する。

### (1)

$\rho_\lambda(f)\le1$ となる任意の $\lambda>0$ に対し、$\Phi(t)\ge t$ より

$$
\frac1\lambda\int_{\mathbb R}|f(x)|\,dx\le\rho_\lambda(f)\le1.
$$

許される $\lambda$ の下限を取れば $\|f\|_{L^1}\le\|f\|$ を得る。

### (2)

$\alpha>\|f\|$, $\beta>\|g\|$ を取る。$|f-g|\le|f|+|g|$ と $\Phi$ の単調性・凸性から

$$
\Phi\left(\frac{|f-g|}{\alpha+\beta}\right)
\le\frac\alpha{\alpha+\beta}\Phi\left(\frac{|f|}\alpha\right)
+\frac\beta{\alpha+\beta}\Phi\left(\frac{|g|}\beta\right).
$$

積分すると $\rho_{\alpha+\beta}(f-g)\le1$。従って $f-g\in\mathcal L$ かつ $\|f-g\|\le\alpha+\beta$。$\alpha\downarrow\|f\|$, $\beta\downarrow\|g\|$ として結論を得る。

### (3)

(1) により $\{f_m\}$ は $L^1(\mathbb R)$ の Cauchy 列である。$L^1$ の完備性から、ある $f\in L^1$ に $L^1$ 収束する。さらに部分列 $f_{m_j}$ を選んで $f_{m_j}\to f$ がほとんど至る所で成り立つようにできる。零集合上で値を定め直し、$f$ を実数値可測関数とする。

任意の $\varepsilon>0$ に対し、$m,n\ge N$ なら $\|f_m-f_n\|<\varepsilon$ となる $N$ を取る。$m\ge N$ を固定すると、十分大きい $j$ について

$$
\int_{\mathbb R}\Phi\left(\frac{|f_m-f_{m_j}|}{\varepsilon}\right)dx\le1.
$$

$\Phi$ の連続性と Fatou の補題から

$$
\int_{\mathbb R}\Phi\left(\frac{|f_m-f|}{\varepsilon}\right)dx\le1.
$$

よって $f_m-f\in\mathcal L$ かつ $\|f_m-f\|\le\varepsilon$。一つの $m\ge N$ を固定して (2) を用いれば、$f=f_m-(f_m-f)\in\mathcal L$ も従う。$\varepsilon>0$ は任意なので $\|f_m-f\|\to0$ である。

## **Reference**

- [京都大学公式問題（2024年度・専門科目、PDF 5ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_senmon.pdf)
- [照合用参考解答（2024年度・専門科目 問題6、PDF 1–2ページ）](https://drive.google.com/file/d/1Mxkyt2TSa2v0VE5OeFfqzWYdh4iO10FS/view)
