---
sidebar_label: "2020年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Operations-Research.Convex-Optimization.Projection-Theorem-for-Closed-Convex-Sets
---

# 東北大学 理学研究科 数学専攻 2020年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$(H,(\cdot,\cdot))$ を実ヒルベルト空間とし、$K$ を空でない $H$ の閉凸部分集合とする。また、$f\in H$ とする。以下の問いに答えよ。

(1) $\displaystyle\|f-u\|=\inf_{v\in K}\|f-v\|$ が成り立つような $u\in K$ が存在することを示せ。ただし、$\|w\|=\sqrt{(w,w)}$ である。

(2) (1) の $u$ に対して

$$
(f-u,v-u)\le0\qquad(v\in K)
$$

が成り立つことを示せ。

(3) (1) の $u$ は一意であることを示せ。

### 题目描述

设 $(H,(\cdot,\cdot))$ 为实希尔伯特空间，$K$ 为 $H$ 的非空闭凸子集，$f\in H$。回答下列问题。

(1) 证明存在 $u\in K$，使 $\displaystyle\|f-u\|=\inf_{v\in K}\|f-v\|$。这里 $\|w\|=\sqrt{(w,w)}$。

(2) 对第 (1) 问中的 $u$，证明

$$
(f-u,v-u)\le0\qquad(v\in K).
$$

(3) 证明第 (1) 问中的 $u$ 唯一。

## **Kai**

### (1)

$d=\inf_{v\in K}\|f-v\|$ とし、$\|f-v_n\|\to d$ を満たす列 $v_n\in K$ をとる。中線定理と $K$ の凸性により、

$$
\begin{aligned}
\|v_n-v_m\|^2
&=2\|f-v_n\|^2+2\|f-v_m\|^2
-4\left\|f-\frac{v_n+v_m}{2}\right\|^2\\
&\le2\|f-v_n\|^2+2\|f-v_m\|^2-4d^2\longrightarrow0.
\end{aligned}
$$

よって $(v_n)$ は Cauchy 列である。$H$ の完備性と $K$ の閉性からある $u\in K$ に収束し、ノルムの連続性により $\|f-u\|=d$ となる。

### (2)

(1) の最小点 $u$ と任意の $v\in K$ に対し、$u+t(v-u)\in K$（$0\le t\le1$）なので

$$
\|f-u\|^2\le\|f-u-t(v-u)\|^2
=\|f-u\|^2-2t(f-u,v-u)+t^2\|v-u\|^2.
$$

$t>0$ で割って $t\downarrow0$ とすれば $(f-u,v-u)\le0$、すなわち $(f-u,u-v)\ge0$ を得る。

### (3)

$u_1,u_2$ がともに最小点ならば、(2) により

$$
(f-u_1,u_2-u_1)\le0,\qquad(f-u_2,u_1-u_2)\le0.
$$

両式を加えると $\|u_1-u_2\|^2\le0$ となる。従って $u_1=u_2$ であり、最小点は一意である。

## **Reference**

- [東北大学 2021年度・選択問題の公開保存資料（2021(R3)sentaku.pdf、PDF 5ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#91cc98a8-35f1-40c7-876b-4b95cde13808)
