---
sidebar_label: "2024年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2024年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#f04bae5e-85c3-4f9b-9ca6-c95c4aa762b9) refined with GPT 6 Astra)

## **Description**

$6$ 次元ユークリッド空間 $\mathbb R^6$ の標準内積を $\langle\cdot,\cdot\rangle$ とする。以下の問いに答えよ。

(1) $\mathbb R^6$ の部分空間 $X$ を

$$
X=\{v\in\mathbb R^6\mid\langle v,v\rangle=1\}
$$

と定める。$X$ は $\mathbb R^6$ の $C^\infty$ 部分多様体であるかどうか、理由とともに答えよ。

(2) 直積空間 $\mathbb R^6\times\mathbb R^6$ の部分空間 $Y$ を

$$
Y=\{(v_1,v_2)\in\mathbb R^6\times\mathbb R^6\mid
\langle v_1,v_1\rangle=1,\ \langle v_2,v_2\rangle=1,\ \langle v_1,v_2\rangle=0\}
$$

と定める。$Y$ は $\mathbb R^6\times\mathbb R^6$ の $C^\infty$ 部分多様体であるかどうか、理由とともに答えよ。

### 题目描述

用 $\langle\cdot,\cdot\rangle$ 表示六维欧氏空间 $\mathbb R^6$ 的标准内积。回答下列问题。

(1) 定义 $\mathbb R^6$ 的子空间

$$
X=\{v\in\mathbb R^6\mid\langle v,v\rangle=1\}.
$$

判断 $X$ 是否为 $\mathbb R^6$ 的 $C^\infty$ 子流形，并说明理由。

(2) 定义直积空间 $\mathbb R^6\times\mathbb R^6$ 的子空间

$$
Y=\{(v_1,v_2)\in\mathbb R^6\times\mathbb R^6\mid
\langle v_1,v_1\rangle=1,\ \langle v_2,v_2\rangle=1,\ \langle v_1,v_2\rangle=0\}.
$$

判断 $Y$ 是否为 $\mathbb R^6\times\mathbb R^6$ 的 $C^\infty$ 子流形，并说明理由。

## **Kai**

### (1)

$X$ は $5$ 次元の $C^\infty$ 部分多様体である。

$F:\mathbb R^6\to\mathbb R$ を $F(v)=\langle v,v\rangle$ とおくと、$X=F^{-1}(1)$ である。$v\in X$ に対して

$$
dF_v(h)=2\langle v,h\rangle,\qquad dF_v(v)=2
$$

だから $dF_v$ は全射である。したがって $1$ は $F$ の正則値であり、正則値定理より結論を得る。

### (2)

$Y$ は $9$ 次元の $C^\infty$ 部分多様体である。

滑らかな写像 $G:\mathbb R^6\times\mathbb R^6\to\mathbb R^3$ を

$$
G(v_1,v_2)=\bigl(\langle v_1,v_1\rangle,\langle v_2,v_2\rangle,
\langle v_1,v_2\rangle\bigr)
$$

とおく。$Y=G^{-1}(1,1,0)$ であり、ヤコビ行列の三つの行は

$$
(2v_1^T,0),\qquad(0,2v_2^T),\qquad(v_2^T,v_1^T)
$$

である。これらの係数を $a,b,c\in\mathbb R$ とする線形結合が零ならば

$$
2av_1+cv_2=0,\qquad 2bv_2+cv_1=0.
$$

第 $1$ 式と $v_1,v_2$ との内積から、それぞれ $2a=0,c=0$ を得る。第 $2$ 式から $b=0$ も従う。よって三つの行は一次独立であり、$dG$ の階数は $3$ である。

したがって $(1,1,0)$ は正則値である。$Y$ は例えば標準基底の組 $(e_1,e_2)$ を含むので空でなく、正則値定理よりその次元は $12-3=9$ となる。

## **Reference**

- [東北大学公式問題（2025年度・選択問題、PDF 5ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_sentaku.pdf)
- [L^2：2025年度の対応する解答](https://note.com/normalmath/n/n89152917de11#f04bae5e-85c3-4f9b-9ca6-c95c4aa762b9)
