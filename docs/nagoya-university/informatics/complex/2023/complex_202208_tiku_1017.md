---
sidebar_label: "2022年8月実施 线性代数"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Affine-Transformation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$l, m, l', m'$ は正の実数とする。次の方程式 (a), (b) で表される平面上の図形をそれぞれ $F_a, F_b$ と呼ぶことにする。以下の問に答えよ。

(a) $\frac{x^2}{l^2} + \frac{y^2}{m^2} = 1$ ,

(b) $\frac{x^2}{l'^2} + \frac{y^2}{m'^2} = 1$

1) $(x, y)$ を直交座標とする平面に図形 $F_a$ を描け。

2) 図形 $F_a$ を図形 $F_b$ に移す相似変換が存在するための必要十分条件を $l, m, l', m'$ に関する数式で表せ。 $l > m, l = m, l < m, l' > m', l' = m', l' < m'$ の場合があることに注意せよ。

3) 図形 $F_a$ を図形 $F_b$ に移す相似変換が存在するとき、そのような相似変換をすべて成分表示で示せ。図形を移す相似変換は一つとは限らないことに注意せよ。

### 题目描述

设 $l,m,l',m'$ 均为正实数，并将方程

$$
\text{(a)}\quad\frac{x^2}{l^2}+\frac{y^2}{m^2}=1,
\qquad
\text{(b)}\quad\frac{x^2}{l'^2}+\frac{y^2}{m'^2}=1
$$

所表示的平面图形分别记为 $F_a,F_b$。

1. 在以 $(x,y)$ 为直角坐标的平面上画出 $F_a$；
2. 用关于 $l,m,l',m'$ 的等式写出存在相似变换将 $F_a$ 映为 $F_b$ 的充分必要条件。需要分别留意

   $$
   l>m,\quad l=m,\quad l<m,
   \qquad
   l'>m',\quad l'=m',\quad l'<m'
   $$

   的各种情况；
3. 当这种相似变换存在时，用分量形式写出所有能将 $F_a$ 映为 $F_b$ 的相似变换；注意符合条件的变换不一定唯一。

## **Kai**

1) 図形 $F_a$ は楕円である。 $l > m$ の場合、x軸方向に $l$ 、y軸方向に $m$ だけ伸びた楕円。 $l = m$ の場合、円。 $l < m$ の場合、y軸方向に $m$ 、x軸方向に $l$ だけ伸びた楕円。

2) 相似変換はすべての長さを同じ比で変えるので，二つの半軸の
長さの比は，順序を除いて保存される。したがって必要十分条件は

$$
\boxed{
\frac{l'}{m'}=\frac lm
\quad\text{または}\quad
\frac{l'}{m'}=\frac ml
}.
$$

これは，ある $\rho>0$ に対して
$(l',m')=(\rho l,\rho m)$ または
$(l',m')=(\rho m,\rho l)$ と書けることと同値である。
特に，一方が円なら他方も円でなければならない。

3) 楕円の中心は一意なので，求める相似変換の平行移動成分は $0$ である。

- $l\neq m$ かつ $(l',m')=(\rho l,\rho m)$ の場合，すべての変換は

$$
\boxed{
T_{\varepsilon_1,\varepsilon_2}(x,y)
=\rho(\varepsilon_1x,\varepsilon_2y),
\qquad \varepsilon_1,\varepsilon_2\in\{1,-1\}.
}
$$

- $l\neq m$ かつ $(l',m')=(\rho m,\rho l)$ の場合，すべての変換は

$$
\boxed{
T_{\varepsilon_1,\varepsilon_2}(x,y)
=\rho(\varepsilon_1y,\varepsilon_2x),
\qquad \varepsilon_1,\varepsilon_2\in\{1,-1\}.
}
$$

- $l=m$ かつ $l'=m'$ の場合， $\rho=l'/l$ として，すべての変換は

$$
\boxed{T(x)=\rho Qx\qquad(Q\in O(2))}
$$

である。成分表示では，任意の $\theta$ に対する

$$
\rho
\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix},
\qquad
\rho
\begin{pmatrix}
\cos\theta&\sin\theta\\
\sin\theta&-\cos\theta
\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
$$

の二つの族である。
