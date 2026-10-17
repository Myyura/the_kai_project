---
sidebar_label: "2022年8月実施 数1 [3]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Affine-Transformation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 数1 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

実数の2次正方行列 $A$，$A$ の転置行列 $A^T$，単位行列 $I$ をそれぞれ

$$
A=\begin{pmatrix}a&c\\b&d\end{pmatrix},\qquad
A^T=\begin{pmatrix}a&b\\c&d\end{pmatrix},\qquad
I=\begin{pmatrix}1&0\\0&1\end{pmatrix}
$$

と書く．$A^TA=I$ となるとき，$A$ を直交行列という．2次元実数ベクトル $\boldsymbol r,\boldsymbol r',\boldsymbol h$ と2次の直交行列 $A$ と正の実数 $\lambda$ に対して

$$
\boldsymbol r'=\lambda A\boldsymbol r+\boldsymbol h
$$

の成分表示を

$$
\begin{pmatrix}x'\\y'\end{pmatrix}=\lambda\begin{pmatrix}a&c\\b&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}+\begin{pmatrix}e\\f\end{pmatrix}
$$

と書き，これで定まる $\boldsymbol r$ から $\boldsymbol r'$ への写像を相似変換と呼ぶ．とくに $\lambda=1$ の場合，合同変換と呼ぶ．以下の問に答えよ．

### [3]

$\ell,m,\ell',m'$ は正の実数とする．次の方程式(a)，(b)で表される平面上の図形をそれぞれ $F_a,F_b$ と呼ぶことにする．以下の問に答えよ．

$$
\text{(a)}\quad\frac{x^2}{\ell^2}+\frac{y^2}{m^2}=1,\qquad
\text{(b)}\quad\frac{x'^2}{\ell'^2}+\frac{y'^2}{m'^2}=1
$$

1) $(x,y)$ を直交座標とする平面に図形 $F_a$ を描け．

2) 図形 $F_a$ を図形 $F_b$ に移す相似変換が存在するための必要十分条件を $\ell,m,\ell',m'$ に関する数式で表せ．$\ell>m,\ell=m,\ell<m,\ell'>m',\ell'=m',\ell'<m'$ の場合があることに注意せよ．

3) 図形 $F_a$ を図形 $F_b$ に移す相似変換が存在するとき，そのような相似変換をすべて成分表示で示せ．図形を移す相似変換は一つとは限らないことに注意せよ．

#### 题目描述

将实二阶方阵 $A$、其转置 $A^T$ 及单位矩阵 $I$ 分别写为

$$
A=\begin{pmatrix}a&c\\b&d\end{pmatrix},\qquad
A^T=\begin{pmatrix}a&b\\c&d\end{pmatrix},\qquad
I=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

当 $A^TA=I$ 时，称 $A$ 为正交矩阵。对二维实向量 $\boldsymbol r,\boldsymbol r',\boldsymbol h$、二阶正交矩阵 $A$ 及正实数 $\lambda$，将

$$
\boldsymbol r'=\lambda A\boldsymbol r+\boldsymbol h
$$

的分量表示写为

$$
\begin{pmatrix}x'\\y'\end{pmatrix}=\lambda\begin{pmatrix}a&c\\b&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}+\begin{pmatrix}e\\f\end{pmatrix}.
$$

称由此确定的从 $\boldsymbol r$ 到 $\boldsymbol r'$ 的映射为相似变换。特别地，当 $\lambda=1$ 时称为全等变换。回答下列问题。

**[3]** 设 $\ell,m,\ell',m'$ 为正实数，将下列方程(a)、(b)表示的平面图形分别记为 $F_a,F_b$。

$$
\text{(a)}\quad\frac{x^2}{\ell^2}+\frac{y^2}{m^2}=1,\qquad
\text{(b)}\quad\frac{x'^2}{\ell'^2}+\frac{y'^2}{m'^2}=1
$$

1) 在以 $(x,y)$ 为直角坐标的平面上画出 $F_a$。

2) 用关于 $\ell,m,\ell',m'$ 的数学式表示存在将 $F_a$ 映到 $F_b$ 的相似变换的充分必要条件。注意存在 $\ell>m,\ell=m,\ell<m,\ell'>m',\ell'=m',\ell'<m'$ 各种情况。

3) 当存在将 $F_a$ 映到 $F_b$ 的相似变换时，用分量形式写出所有这样的相似变换。注意符合要求的变换不一定唯一。

## **Kai**

### 1)

図形 $F_a$ は楕円である。 $l > m$ の場合、x軸方向に $l$ 、y軸方向に $m$ だけ伸びた楕円。 $l = m$ の場合、円。 $l < m$ の場合、y軸方向に $m$ 、x軸方向に $l$ だけ伸びた楕円。

![l > m](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/complex/2023/complex_202208_math_1_3_answer_layout_1.svg)

![l = m](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/complex/2023/complex_202208_math_1_3_answer_layout_2.svg)

![l < m](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/informatics/complex/2023/complex_202208_math_1_3_answer_layout_3.svg)

### 2)

相似変換はすべての長さを同じ比で変えるので，二つの半軸の
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

### 3)

楕円の中心は一意なので，求める相似変換の平行移動成分は $0$ である。

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

## **Reference**

- [公式問題（PDF）](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/153686fd38b76aec8fe63b4c47663818.pdf)
