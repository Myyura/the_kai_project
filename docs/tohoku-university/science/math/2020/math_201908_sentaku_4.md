---
sidebar_label: "2019年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2019年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#e690e3d6-7b98-462b-80c5-4b474268580c) refined with GPT 6 Astra)

## **Description**


写像 $f:\mathbb R^4\to\mathbb R^2$ と $g:\mathbb R^4\to\mathbb R$ を

$$
\begin{aligned}
f(x_1,x_2,y_1,y_2)&=(x_1y_2-x_2y_1,\ x_1^2+x_2^2-y_1^2-y_2^2),\\
g(x_1,x_2,y_1,y_2)&=x_1y_1+x_2y_2
\end{aligned}
$$

と定める。また、$M=f^{-1}(\{(1,0)\})$ とおく。以下の問いに答えよ。

(1) 点 $p=(x_1,x_2,y_1,y_2)\in\mathbb R^4$ での $f$ のヤコビ行列 $(Jf)_p$ を求めよ。

(2) $p\in\mathbb R^4$ が $g(p)\ne0$ を満たすとき $(Jf)_p$ の階数を求めよ。

(3) $M$ が $\mathbb R^4$ の $C^\infty$ 級部分多様体であることを示し、その次元を求めよ。

### 题目描述


定义映射 $f:\mathbb R^4\to\mathbb R^2$ 与 $g:\mathbb R^4\to\mathbb R$ 为

$$
\begin{aligned}
f(x_1,x_2,y_1,y_2)&=(x_1y_2-x_2y_1,\ x_1^2+x_2^2-y_1^2-y_2^2),\\
g(x_1,x_2,y_1,y_2)&=x_1y_1+x_2y_2.
\end{aligned}
$$

令 $M=f^{-1}(\{(1,0)\})$。回答下列问题。

(1) 求 $f$ 在点 $p=(x_1,x_2,y_1,y_2)\in\mathbb R^4$ 处的雅可比矩阵 $(Jf)_p$。

(2) 当 $p\in\mathbb R^4$ 满足 $g(p)\ne0$ 时，求 $(Jf)_p$ 的秩。

(3) 证明 $M$ 是 $\mathbb R^4$ 的 $C^\infty$ 子流形，并求其维数。

## **Kai**

### (1)

各成分を偏微分して

$$
\boxed{
(Jf)_p=
\begin{pmatrix}
y_2&-y_1&-x_2&x_1\\
2x_1&2x_2&-2y_1&-2y_2
\end{pmatrix}.}
$$

### (2)

最初の二列からなる小行列式は

$$
\det\begin{pmatrix}y_2&-y_1\\2x_1&2x_2\end{pmatrix}
=2(x_1y_1+x_2y_2)=2g(p)\ne0.
$$

従って階数は $2$ 以上であり、行が二つしかないことから

$$
\boxed{\operatorname{rank}(Jf)_p=2.}
$$

### (3)

$(Jf)_p$ の行ベクトルを

$$
u=(y_2,-y_1,-x_2,x_1),\qquad
v=(2x_1,2x_2,-2y_1,-2y_2)
$$

とする。直接計算すると

$$
\langle u,v\rangle=0,\qquad
\|u\|^2=\|p\|^2,\qquad \|v\|^2=4\|p\|^2.
$$

したがって $p\ne0$ なら二つの行は非零かつ直交し、階数は $2$ である。$f(0)=(0,0)$ なので $p\in M$ では必ず $p\ne0$。ゆえに $(1,0)$ は $f$ の正則値であり、正則値定理により $M$ は $\mathbb R^4$ の $C^\infty$ 級部分多様体である。

実際 $f(1,0,0,1)=(1,0)$ なので $M$ は空でなく、その次元は

$$
\boxed{\dim M=4-2=2.}
$$

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2020(R2).pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度の対応する解答](https://note.com/normalmath/n/n89152917de11#e690e3d6-7b98-462b-80c5-4b474268580c)
