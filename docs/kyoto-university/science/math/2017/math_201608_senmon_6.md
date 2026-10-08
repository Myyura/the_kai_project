---
sidebar_label: "2017年度 専門科目 [6]（本質的上限）"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Essential-Suprema-of-Function-Families
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年度 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

測度空間 $(X,\mathcal F,\mu)$ 上の非負実数値可積分関数の集合 $\mathcal C$ が次を満たすとする。

- $\mathcal C\ne\varnothing$。
- $f,g\in\mathcal C$ ならば $\max\{f,g\}\in\mathcal C$。
- $M=\sup\{\int_X f\,d\mu:f\in\mathcal C\}<\infty$。

(i) 非負実数値可積分関数 $\varphi$ で、各 $f\in\mathcal C$ に対して $f\le\varphi$ が $\mu$-ほとんど至る所で成り立ち、$\int_X\varphi\,d\mu=M$ となるものが存在することを示せ。

(ii) この $\varphi$ について、$\mu(A)>0$ なる任意の $A\in\mathcal F$ に対し

$$
\sup_{f\in\mathcal C}\operatorname*{ess\,sup}_{A}f
=\operatorname*{ess\,sup}_{A}\varphi
$$

を示せ。ここで $\operatorname*{ess\,sup}_A g=\inf\{\alpha\in\mathbb R:\mu(\{x\in A:g(x)>\alpha\})=0\}$、$\inf\varnothing=\infty$ とする。

#### 题目描述

在测度空间 $(X,\mathcal F,\mu)$ 上，非空非负实值可积函数族 $\mathcal C$ 对逐点取最大值封闭，且 $M=\sup_{f\in\mathcal C}\int_X f\,d\mu<\infty$。

(i) 证明存在非负实值可积函数 $\varphi$，使每个 $f\in\mathcal C$ 都满足 $f\le\varphi$ 几乎处处，且 $\int_X\varphi\,d\mu=M$。

(ii) 对任意正测度可测集 $A$，证明 $\sup_{f\in\mathcal C}\operatorname*{ess\,sup}_A f=\operatorname*{ess\,sup}_A\varphi$。本质上确界定义为 $\inf\{\alpha\in\mathbb R:\mu(\{x\in A:g(x)>\alpha\})=0\}$，空集的下确界取 $\infty$。

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
