---
sidebar_label: "2020年度 基礎科目 問題3"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Projection-Operator
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$V,W$ を有限次元複素ベクトル空間、$f:V\to W$、$g:W\to V$ を線形写像とし、任意の $w\in W$ に対して $f(g(w))=w$ が成り立つものとする。このとき、$V$ の部分空間 $V_0,V_1$ で、以下の三条件をすべて満たすものが存在することを示せ。

(i) $V=V_0\oplus V_1$。

(ii) 任意の $v\in V_0$ に対し、$g(f(v))=0$。

(iii) 任意の $v\in V_1$ に対し、$g(f(v))=v$。

#### 题目描述

设 $V,W$ 为有限维复向量空间，线性映射 $f:V\to W$、$g:W\to V$ 满足 $f\circ g=\operatorname{id}_W$。证明存在子空间 $V_0,V_1\subset V$，使得：

(i) $V=V_0\oplus V_1$；

(ii) 对 $v\in V_0$，有 $g(f(v))=0$；

(iii) 对 $v\in V_1$，有 $g(f(v))=v$。

## **Kai**

$$
V_0=\ker f,\qquad V_1=\operatorname{Im}g
$$

と置く。任意の $v\in V$ に対し、

$$
v=\bigl(v-g(f(v))\bigr)+g(f(v))
$$

であり、$f\circ g=\operatorname{id}_W$ より

$$
f\bigl(v-g(f(v))\bigr)=f(v)-f(g(f(v)))=0.
$$

したがって $V=V_0+V_1$ である。また、$v\in V_0\cap V_1$ なら $v=g(w)$ と書けて、$0=f(v)=f(g(w))=w$ だから $v=0$ である。よって条件 (i) の $V=V_0\oplus V_1$ が成り立つ。

$v\in V_0$ なら $g(f(v))=g(0)=0$ なので (ii) が成り立つ。$v\in V_1$ なら $v=g(w)$ と書けて、

$$
g(f(v))=g(f(g(w)))=g(w)=v
$$

となるので (iii) も成り立つ。

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 3ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
