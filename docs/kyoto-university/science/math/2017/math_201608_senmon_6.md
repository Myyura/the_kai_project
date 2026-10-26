---
sidebar_label: "2016年8月実施 専門科目 [6]（本質的上限）"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Essential-Suprema-of-Function-Families
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$(X,\mathcal F,\mu)$ を測度空間とする。$X$ 上の非負実数値可積分関数を要素とする集合 $\mathcal C$ が次の(A)，(B)，(C)を満たすと仮定する。

(A) 集合 $\mathcal C$ は空でない。

(B) $f,g\in\mathcal C$ ならば，$h(x)=\max\{f(x),g(x)\},\ (x\in X)$ により定まる関数 $h$ も $\mathcal C$ に属する。

(C) $M=\sup\left\{\int_X f\,d\mu\mid f\in\mathcal C\right\}$ とするとき，$M$ は有限値。

このとき，以下の問に答えよ。

(i) 次の2条件(1)，(2)を同時に満たす $X$ 上の非負実数値可積分関数 $\varphi$ が存在することを示せ。

(1) すべての $f\in\mathcal C$ に対して，$f(x)\le\varphi(x)$ が $\mu$ に関してほとんどすべての $x$ について成り立つ。

(2) $\displaystyle\int_X\varphi\,d\mu=M$。

(ii) (i)における $\varphi$ は次の性質(*)を持つことを示せ。

(*) $\mu(A)>0$ なる任意の $A\in\mathcal F$ に対して，

$$
\sup\left\{\operatorname*{ess\,sup}_{A}f\mid f\in\mathcal C\right\}
=\operatorname*{ess\,sup}_{A}\varphi.
$$

ここで，$\mu(A)>0$ なる $A\in\mathcal F$ と $X$ 上の非負実数値可測関数 $g$ に対して

$$
\begin{aligned}
\operatorname*{ess\,sup}_{A}g
=\inf\bigl\{\alpha\in\mathbb R\mid {}&\mu(\{x\in A\mid g(x)>\alpha\})=0\bigr\}
\end{aligned}
$$

である。ただし $\inf\varnothing=\infty$ とする。

### 题目描述

设 $(X,\mathcal F,\mu)$ 为测度空间。假设以 $X$ 上非负实值可积函数为元素的集合 $\mathcal C$ 满足下列(A)、(B)、(C)。

(A) $\mathcal C$ 非空。

(B) 若 $f,g\in\mathcal C$，则由 $h(x)=\max\{f(x),g(x)\},\ (x\in X)$ 定义的函数 $h$ 也属于 $\mathcal C$。

(C) 令 $M=\sup\left\{\int_X f\,d\mu\mid f\in\mathcal C\right\}$，则 $M$ 为有限值。

回答下列问题。

(i) 证明存在 $X$ 上的非负实值可积函数 $\varphi$，同时满足下列两个条件(1)、(2)。

(1) 对每个 $f\in\mathcal C$，$f(x)\le\varphi(x)$ 关于 $\mu$ 对几乎所有 $x$ 成立。

(2) $\displaystyle\int_X\varphi\,d\mu=M$。

(ii) 证明(i)中的 $\varphi$ 具有下列性质(*)。

(*) 对任意满足 $\mu(A)>0$ 的 $A\in\mathcal F$，

$$
\sup\left\{\operatorname*{ess\,sup}_{A}f\mid f\in\mathcal C\right\}
=\operatorname*{ess\,sup}_{A}\varphi.
$$

这里，对满足 $\mu(A)>0$ 的 $A\in\mathcal F$ 和 $X$ 上的非负实值可测函数 $g$，定义

$$
\begin{aligned}
\operatorname*{ess\,sup}_{A}g
=\inf\bigl\{\alpha\in\mathbb R\mid {}&\mu(\{x\in A\mid g(x)>\alpha\})=0\bigr\}.
\end{aligned}
$$

约定 $\inf\varnothing=\infty$。

## **Kai**

### (i)

$f_n\in\mathcal C$ を $\int_Xf_n\,d\mu>M-1/n$ となるように選び、$g_n=\max(f_1,\ldots,f_n)$ とおく。仮定より $g_n\in\mathcal C$、$g_n\uparrow\psi:=\sup_n g_n$ であり、単調収束定理から

$$
\int_X\psi\,d\mu=\lim_{n\to\infty}\int_Xg_n\,d\mu=M.
$$

したがって $\psi<\infty$ はほとんど至る所で成り立つ。$\{\psi=\infty\}$ 上で値を $0$ に置き換えた関数を $\varphi$ とする。

任意の $f\in\mathcal C$ について $\max(g_n,f)\in\mathcal C$ だから、再び単調収束定理により

$$
\int_X\max(\varphi,f)\,d\mu\le M=\int_X\varphi\,d\mu.
$$

よって $\int_X(f-\varphi)_+\,d\mu=0$、すなわち $f\le\varphi$ がほとんど至る所で成り立つ。

### (ii)

$L=\sup_{f\in\mathcal C}\operatorname*{ess\,sup}_A f$ とおく。(i) より $L\le\operatorname*{ess\,sup}_A\varphi$。
$L=\infty$ なら等号は明らかである。$L<\infty$ なら、各 $n$ について $g_n\le L$ が $A$ 上ほとんど至る所で成り立つ。可算個の零集合を除けばすべての $n$ で同時に成立するので、$\varphi=\sup_n g_n\le L$ もほとんど至る所で成り立つ。したがって逆向きの不等式も得られる。

なお、(i) の条件を満たす別の関数も、すべての $g_n$ を支配し積分が $M$ に等しいため $\varphi$ とほとんど至る所で一致する。

## **Reference**

- [京都大学公式問題（2017年度・専門科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_senmon.pdf)
- [照合用参考解答（2017年度・専門科目 問題6、PDF 1–3ページ）](https://drive.google.com/file/d/1xnUh9xGXnMMcRus6tdwrh0cB_C3JNoi6/view)
